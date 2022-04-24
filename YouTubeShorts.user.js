/* globals jQuery */

// ==UserScript==
// @name         YouTube Shorts
// @description  Removes YouTube Shorts from video lists (like the subscription list for example).
// @icon         https://raw.githubusercontent.com/highstrike/youtube-shorts/master/icon.png
// @namespace    https://github.com/highstrike/youtube-shorts
// @version      1.3
// @author       highstrike
// @license      GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
// @require      https://code.jquery.com/jquery-2.2.4.min.js
// @match        *://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function($) { 'use strict';
    window.setInterval(function() {
        $('div#overlays.style-scope.ytd-thumbnail').each(function() {
            let self = $(this);

            // remove shorts
            if(self.find('ytd-thumbnail-overlay-time-status-renderer').length > 0 && self.find('ytd-thumbnail-overlay-time-status-renderer').attr("overlay-style") === 'SHORTS') {
                self.closest('ytd-item-section-renderer').remove();
            }
        });
    }, 1000);
})(jQuery);
