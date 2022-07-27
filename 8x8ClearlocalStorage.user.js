// ==UserScript==
// @name         8x8 Clear localStorage
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Clears unwanted cache
// @author       Travis
// @match        https://vcc-na15.8x8.com/AGUI/load.php?loginmode=vo
// @icon         https://www.google.com/s2/favicons?sz=64&domain=8x8.com
// @downloadURL  https://github.com/totallytrav/JS/8x8ClearlocalStorage.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    localStorage.removeItem('integration');
})();
