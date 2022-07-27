// ==UserScript==
// @name         8x8 Clear localStorage
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Clears unwanted cache
// @author       Travis
// @match        https://vcc-na15.8x8.com/AGUI/load.php?loginmode=vo
// @icon         https://www.google.com/s2/favicons?sz=64&domain=8x8.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    localStorage.removeItem('integration');
})();
