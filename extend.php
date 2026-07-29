<?php

namespace Nearata\CopyCodeToClipboard;

use Flarum\Extend;
use Flarum\Foundation\Application;

$coreMajor = (int) explode('.', Application::VERSION)[0];
$forumAsset = $coreMajor >= 2
    ? __DIR__.'/js/dist/v2/forum.js'
    : __DIR__.'/js/dist/v1/forum.js';

return [
    (new Extend\Frontend('forum'))
        ->js($forumAsset)
        ->css(__DIR__.'/less/forum.less'),

    new Extend\Locales(__DIR__.'/locale'),
];
