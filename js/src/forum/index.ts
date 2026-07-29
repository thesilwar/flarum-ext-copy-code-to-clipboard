import { extend } from "flarum/common/extend";
import app from "flarum/forum/app";
import CommentPost from "flarum/forum/components/CommentPost";
import CopyButton from "./components/CopyButton";

app.initializers.add("thesilwar-copy-code-to-clipboard", () => {
	const mountCopyButtons = function (this: CommentPost) {
		this.element.querySelectorAll("pre").forEach((element) => {
			if (
				!element.querySelector("code") ||
				element.querySelector(".NearataCopyCodeToClipboard")
			) {
				return;
			}

			const container = document.createElement("div");
			container.classList.add("NearataCopyCodeToClipboard");
			element.append(container);
			m.mount(container, CopyButton);
		});
	};

	extend(CommentPost.prototype, "oncreate", mountCopyButtons);
	extend(CommentPost.prototype, "onupdate", mountCopyButtons);
});
