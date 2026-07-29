import Component from "flarum/common/Component";
import Button from "flarum/common/components/Button";
import app from "flarum/forum/app";
import type Mithril from "mithril";

export default class CopyButton extends Component {
	clicked = false;
	failed = false;
	resetTimer?: number;

	view(_: Mithril.Vnode<this>) {
		return (
			<Button
				className="Button Button--icon"
				icon={
					this.failed
						? "fas fa-exclamation-triangle"
						: this.clicked
							? "fas fa-check"
							: "far fa-clone"
				}
				onclick={this.onClick.bind(this)}
				aria-label={app.translator.trans(
					`thesilwar-copy-code-to-clipboard.forum.${
						this.failed ? "copy_failed" : this.clicked ? "copied" : "copy"
					}`,
				)}
				disabled={this.clicked}
			/>
		);
	}

	async onClick(event: PointerEvent) {
		event.preventDefault();
		const code = this.element.closest("pre")?.querySelector("code");

		try {
			if (!code) {
				throw new Error("The code block is no longer available.");
			}

			await this.copyText(code.textContent || "");
			this.clicked = true;
			this.failed = false;
		} catch {
			this.clicked = false;
			this.failed = true;
		}

		window.clearTimeout(this.resetTimer);
		this.resetTimer = window.setTimeout(() => {
			this.clicked = false;
			this.failed = false;
			m.redraw();
		}, 1500);

		m.redraw();
	}

	onremove(vnode: Mithril.VnodeDOM<this>) {
		super.onremove(vnode);
		window.clearTimeout(this.resetTimer);
	}

	private async copyText(text: string): Promise<void> {
		if (navigator.clipboard?.writeText) {
			await navigator.clipboard.writeText(text);
			return;
		}

		const textarea = document.createElement("textarea");
		textarea.value = text;
		textarea.setAttribute("readonly", "");
		textarea.style.position = "fixed";
		textarea.style.opacity = "0";
		document.body.append(textarea);
		textarea.select();

		const onCopy = (event: ClipboardEvent) => {
			if (!event.clipboardData) {
				return;
			}

			event.clipboardData.setData("text/plain", text);
			event.preventDefault();
		};

		document.addEventListener("copy", onCopy);

		try {
			if (!document.execCommand("copy")) {
				throw new Error("Copy command was rejected.");
			}
		} finally {
			document.removeEventListener("copy", onCopy);
			textarea.remove();
		}
	}
}
