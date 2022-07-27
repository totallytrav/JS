// ==UserScript==
// @name         8x8 Clear localStorage
// @version      1.0
// @description  Clears unwanted cache
// @author       travis.olson
// @match        https://vcc-na15.8x8.com/AGUI/load.php?loginmode=vo
// @icon         https://www.google.com/s2/favicons?sz=64&domain=8x8.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    localStorage.removeItem('integration');
})();
