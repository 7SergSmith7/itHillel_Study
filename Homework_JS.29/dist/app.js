(()=>{"use strict";var n={740:(n,r,e)=>{e.d(r,{Z:()=>o});var t=e(645),i=e.n(t)()((function(n){return n[1]}));i.push([n.id,".container {\r\n  margin-top: 20px;\r\n  width: 1600px;\r\n}\r\n\r\n.gallery-item {\r\n  height: 38px;\r\n  margin-bottom: 5px;\r\n  margin-left: 0;\r\n  text-align: center;\r\n  color: #555;\r\n  font-size: 18px;\r\n  background-color: lightyellow;\r\n  border-radius: 3px;\r\n  border: 1px solid #bbb;\r\n}\r\n.gallery {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.photos {\r\n  margin-left: 0;\r\n}\r\n.gallery-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-left: 0;\r\n}\r\n\r\n.gallery-list .gallery-item {\r\n  font-size: 14px;\r\n  height: 100%;\r\n}\r\n\r\n.photo-item {\r\n  float: left;\r\n  margin: 2px 2px 2px 2px;\r\n}\r\n.photo-item img {\r\n  height: 150px;\r\n}\r\n",""]);const o=i},648:(n,r,e)=>{e.d(r,{Z:()=>o});var t=e(645),i=e.n(t)()((function(n){return n[1]}));i.push([n.id,'/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\r\n\r\n/**\r\n * 1. Set default font family to sans-serif.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\r\n\r\nhtml {\r\n  font-family: sans-serif; /* 1 */\r\n  -ms-text-size-adjust: 100%; /* 2 */\r\n  -webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/**\r\n   * Remove default margin.\r\n   */\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n/* HTML5 display definitions\r\n     ========================================================================== */\r\n\r\n/**\r\n   * Correct `block` display not defined for any HTML5 element in IE 8/9.\r\n   * Correct `block` display not defined for `details` or `summary` in IE 10/11\r\n   * and Firefox.\r\n   * Correct `block` display not defined for `main` in IE 11.\r\n   */\r\n\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmain,\r\nmenu,\r\nnav,\r\nsection,\r\nsummary {\r\n  display: block;\r\n}\r\n\r\n/**\r\n   * 1. Correct `inline-block` display not defined in IE 8/9.\r\n   * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\r\n   */\r\n\r\naudio,\r\ncanvas,\r\nprogress,\r\nvideo {\r\n  display: inline-block; /* 1 */\r\n  vertical-align: baseline; /* 2 */\r\n}\r\n\r\n/**\r\n   * Prevent modern browsers from displaying `audio` without controls.\r\n   * Remove excess height in iOS 5 devices.\r\n   */\r\n\r\naudio:not([controls]) {\r\n  display: none;\r\n  height: 0;\r\n}\r\n\r\n/**\r\n   * Address `[hidden]` styling not present in IE 8/9/10.\r\n   * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\r\n   */\r\n\r\n[hidden],\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n/* Links\r\n     ========================================================================== */\r\n\r\n/**\r\n   * Remove the gray background color from active links in IE 10.\r\n   */\r\n\r\na {\r\n  background-color: transparent;\r\n}\r\n\r\n/**\r\n   * Improve readability when focused and also mouse hovered in all browsers.\r\n   */\r\n\r\na:active,\r\na:hover {\r\n  outline: 0;\r\n}\r\n\r\n/* Text-level semantics\r\n     ========================================================================== */\r\n\r\n/**\r\n   * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\r\n   */\r\n\r\nabbr[title] {\r\n  border-bottom: 1px dotted;\r\n}\r\n\r\n/**\r\n   * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\r\n   */\r\n\r\nb,\r\nstrong {\r\n  font-weight: bold;\r\n}\r\n\r\n/**\r\n   * Address styling not present in Safari and Chrome.\r\n   */\r\n\r\ndfn {\r\n  font-style: italic;\r\n}\r\n\r\n/**\r\n   * Address variable `h1` font-size and margin within `section` and `article`\r\n   * contexts in Firefox 4+, Safari, and Chrome.\r\n   */\r\n\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\n\r\n/**\r\n   * Address styling not present in IE 8/9.\r\n   */\r\n\r\nmark {\r\n  background: #ff0;\r\n  color: #000;\r\n}\r\n\r\n/**\r\n   * Address inconsistent and variable font size in all browsers.\r\n   */\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/**\r\n   * Prevent `sub` and `sup` affecting `line-height` in all browsers.\r\n   */\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\n/* Embedded content\r\n     ========================================================================== */\r\n\r\n/**\r\n   * Remove border when inside `a` element in IE 8/9/10.\r\n   */\r\n\r\nimg {\r\n  border: 0;\r\n}\r\n\r\n/**\r\n   * Correct overflow not hidden in IE 9/10/11.\r\n   */\r\n\r\nsvg:not(:root) {\r\n  overflow: hidden;\r\n}\r\n\r\n/* Grouping content\r\n     ========================================================================== */\r\n\r\n/**\r\n   * Address margin not present in IE 8/9 and Safari.\r\n   */\r\n\r\nfigure {\r\n  margin: 1em 40px;\r\n}\r\n\r\n/**\r\n   * Address differences between Firefox and other browsers.\r\n   */\r\n\r\nhr {\r\n  -moz-box-sizing: content-box;\r\n  box-sizing: content-box;\r\n  height: 0;\r\n}\r\n\r\n/**\r\n   * Contain overflow in all browsers.\r\n   */\r\n\r\npre {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n   * Address odd `em`-unit font size rendering in all browsers.\r\n   */\r\n\r\ncode,\r\nkbd,\r\npre,\r\nsamp {\r\n  font-family: monospace, monospace;\r\n  font-size: 1em;\r\n}\r\n\r\n/* Forms\r\n     ========================================================================== */\r\n\r\n/**\r\n   * Known limitation: by default, Chrome and Safari on OS X allow very limited\r\n   * styling of `select`, unless a `border` property is set.\r\n   */\r\n\r\n/**\r\n   * 1. Correct color not being inherited.\r\n   *    Known issue: affects color of disabled elements.\r\n   * 2. Correct font properties not being inherited.\r\n   * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\r\n   */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  color: inherit; /* 1 */\r\n  font: inherit; /* 2 */\r\n  margin: 0; /* 3 */\r\n}\r\n\r\n/**\r\n   * Address `overflow` set to `hidden` in IE 8/9/10/11.\r\n   */\r\n\r\nbutton {\r\n  overflow: visible;\r\n}\r\n\r\n/**\r\n   * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n   * All other form control elements do not inherit `text-transform` values.\r\n   * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\r\n   * Correct `select` style inheritance in Firefox.\r\n   */\r\n\r\nbutton,\r\nselect {\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n   * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n   *    and `video` controls.\r\n   * 2. Correct inability to style clickable `input` types in iOS.\r\n   * 3. Improve usability and consistency of cursor style between image-type\r\n   *    `input` and others.\r\n   */\r\n\r\nbutton,\r\n  html input[type="button"], /* 1 */\r\n  input[type="reset"],\r\n  input[type="submit"] {\r\n  -webkit-appearance: button; /* 2 */\r\n  cursor: pointer; /* 3 */\r\n}\r\n\r\n/**\r\n   * Re-set default cursor for disabled elements.\r\n   */\r\n\r\nbutton[disabled],\r\nhtml input[disabled] {\r\n  cursor: default;\r\n}\r\n\r\n/**\r\n   * Remove inner padding and border in Firefox 4+.\r\n   */\r\n\r\nbutton::-moz-focus-inner,\r\ninput::-moz-focus-inner {\r\n  border: 0;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n   * Address Firefox 4+ setting `line-height` on `input` using `!important` in\r\n   * the UA stylesheet.\r\n   */\r\n\r\ninput {\r\n  line-height: normal;\r\n}\r\n\r\n/**\r\n   * It\'s recommended that you don\'t attempt to style these elements.\r\n   * Firefox\'s implementation doesn\'t respect box-sizing, padding, or width.\r\n   *\r\n   * 1. Address box sizing set to `content-box` in IE 8/9/10.\r\n   * 2. Remove excess padding in IE 8/9/10.\r\n   */\r\n\r\ninput[type="checkbox"],\r\ninput[type="radio"] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n   * Fix the cursor style for Chrome\'s increment/decrement buttons. For certain\r\n   * `font-size` values of the `input`, it causes the cursor style of the\r\n   * decrement button to change from `default` to `text`.\r\n   */\r\n\r\ninput[type="number"]::-webkit-inner-spin-button,\r\ninput[type="number"]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/**\r\n   * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\r\n   * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\r\n   *    (include `-moz` to future-proof).\r\n   */\r\n\r\ninput[type="search"] {\r\n  -webkit-appearance: textfield; /* 1 */\r\n  -moz-box-sizing: content-box;\r\n  -webkit-box-sizing: content-box; /* 2 */\r\n  box-sizing: content-box;\r\n}\r\n\r\n/**\r\n   * Remove inner padding and search cancel button in Safari and Chrome on OS X.\r\n   * Safari (but not Chrome) clips the cancel button when the search input has\r\n   * padding (and `textfield` appearance).\r\n   */\r\n\r\ninput[type="search"]::-webkit-search-cancel-button,\r\ninput[type="search"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n   * Define consistent border, margin, and padding.\r\n   */\r\n\r\nfieldset {\r\n  border: 1px solid #c0c0c0;\r\n  margin: 0 2px;\r\n  padding: 0.35em 0.625em 0.75em;\r\n}\r\n\r\n/**\r\n   * 1. Correct `color` not being inherited in IE 8/9/10/11.\r\n   * 2. Remove padding so people aren\'t caught out if they zero out fieldsets.\r\n   */\r\n\r\nlegend {\r\n  border: 0; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n   * Remove default vertical scrollbar in IE 8/9/10/11.\r\n   */\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n   * Don\'t inherit the `font-weight` (applied by a rule above).\r\n   * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\r\n   */\r\n\r\noptgroup {\r\n  font-weight: bold;\r\n}\r\n\r\n/* Tables\r\n     ========================================================================== */\r\n\r\n/**\r\n   * Remove most spacing between table cells.\r\n   */\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n\r\ntd,\r\nth {\r\n  padding: 0;\r\n}\r\n',""]);const o=i},672:(n,r,e)=>{e.d(r,{Z:()=>o});var t=e(645),i=e.n(t)()((function(n){return n[1]}));i.push([n.id,'/*\r\n* Skeleton V2.0.4\r\n* Copyright 2014, Dave Gamache\r\n* www.getskeleton.com\r\n* Free to use under the MIT license.\r\n* http://www.opensource.org/licenses/mit-license.php\r\n* 12/29/2014\r\n*/\r\n\r\n/* Table of contents\r\n––––––––––––––––––––––––––––––––––––––––––––––––––\r\n- Grid\r\n- Base Styles\r\n- Typography\r\n- Links\r\n- Buttons\r\n- Forms\r\n- Lists\r\n- Code\r\n- Tables\r\n- Spacing\r\n- Utilities\r\n- Clearing\r\n- Media Queries\r\n*/\r\n\r\n/* Grid\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n.container {\r\n  position: relative;\r\n  width: 100%;\r\n  max-width: 960px;\r\n  margin: 0 auto;\r\n  padding: 0 20px;\r\n  box-sizing: border-box;\r\n}\r\n.column,\r\n.columns {\r\n  width: 100%;\r\n  float: left;\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* For devices larger than 400px */\r\n@media (min-width: 400px) {\r\n  .container {\r\n    width: 85%;\r\n    padding: 0;\r\n  }\r\n}\r\n\r\n/* For devices larger than 550px */\r\n@media (min-width: 550px) {\r\n  .container {\r\n    width: 80%;\r\n  }\r\n  .column,\r\n  .columns {\r\n    margin-left: 4%;\r\n  }\r\n  .column:first-child,\r\n  .columns:first-child {\r\n    margin-left: 0;\r\n  }\r\n\r\n  .one.column,\r\n  .one.columns {\r\n    width: 4.66666666667%;\r\n  }\r\n  .two.columns {\r\n    width: 13.3333333333%;\r\n  }\r\n  .three.columns {\r\n    width: 22%;\r\n  }\r\n  .four.columns {\r\n    width: 30.6666666667%;\r\n  }\r\n  .five.columns {\r\n    width: 39.3333333333%;\r\n  }\r\n  .six.columns {\r\n    width: 48%;\r\n  }\r\n  .seven.columns {\r\n    width: 56.6666666667%;\r\n  }\r\n  .eight.columns {\r\n    width: 65.3333333333%;\r\n  }\r\n  .nine.columns {\r\n    width: 74%;\r\n  }\r\n  .ten.columns {\r\n    width: 82.6666666667%;\r\n  }\r\n  .eleven.columns {\r\n    width: 91.3333333333%;\r\n  }\r\n  .twelve.columns {\r\n    width: 100%;\r\n    margin-left: 0;\r\n  }\r\n\r\n  .one-third.column {\r\n    width: 30.6666666667%;\r\n  }\r\n  .two-thirds.column {\r\n    width: 65.3333333333%;\r\n  }\r\n\r\n  .one-half.column {\r\n    width: 48%;\r\n  }\r\n\r\n  /* Offsets */\r\n  .offset-by-one.column,\r\n  .offset-by-one.columns {\r\n    margin-left: 8.66666666667%;\r\n  }\r\n  .offset-by-two.column,\r\n  .offset-by-two.columns {\r\n    margin-left: 17.3333333333%;\r\n  }\r\n  .offset-by-three.column,\r\n  .offset-by-three.columns {\r\n    margin-left: 26%;\r\n  }\r\n  .offset-by-four.column,\r\n  .offset-by-four.columns {\r\n    margin-left: 34.6666666667%;\r\n  }\r\n  .offset-by-five.column,\r\n  .offset-by-five.columns {\r\n    margin-left: 43.3333333333%;\r\n  }\r\n  .offset-by-six.column,\r\n  .offset-by-six.columns {\r\n    margin-left: 52%;\r\n  }\r\n  .offset-by-seven.column,\r\n  .offset-by-seven.columns {\r\n    margin-left: 60.6666666667%;\r\n  }\r\n  .offset-by-eight.column,\r\n  .offset-by-eight.columns {\r\n    margin-left: 69.3333333333%;\r\n  }\r\n  .offset-by-nine.column,\r\n  .offset-by-nine.columns {\r\n    margin-left: 78%;\r\n  }\r\n  .offset-by-ten.column,\r\n  .offset-by-ten.columns {\r\n    margin-left: 86.6666666667%;\r\n  }\r\n  .offset-by-eleven.column,\r\n  .offset-by-eleven.columns {\r\n    margin-left: 95.3333333333%;\r\n  }\r\n\r\n  .offset-by-one-third.column,\r\n  .offset-by-one-third.columns {\r\n    margin-left: 34.6666666667%;\r\n  }\r\n  .offset-by-two-thirds.column,\r\n  .offset-by-two-thirds.columns {\r\n    margin-left: 69.3333333333%;\r\n  }\r\n\r\n  .offset-by-one-half.column,\r\n  .offset-by-one-half.columns {\r\n    margin-left: 52%;\r\n  }\r\n}\r\n\r\n/* Base Styles\r\n  –––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n/* NOTE\r\n  html is set to 62.5% so that all the REM measurements throughout Skeleton\r\n  are based on 10px sizing. So basically 1.5rem = 15px :) */\r\nhtml {\r\n  font-size: 62.5%;\r\n}\r\nbody {\r\n  font-size: 1.5em; /* currently ems cause chrome bug misinterpreting rems on body element */\r\n  line-height: 1.6;\r\n  font-weight: 400;\r\n  font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial,\r\n    sans-serif;\r\n  color: #222;\r\n}\r\n\r\n/* Typography\r\n  –––––––––––––––––––––––––––––––––––––––––––––––––– */\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  margin-top: 0;\r\n  margin-bottom: 2rem;\r\n  font-weight: 300;\r\n}\r\nh1 {\r\n  font-size: 4rem;\r\n  line-height: 1.2;\r\n  letter-spacing: -0.1rem;\r\n}\r\nh2 {\r\n  font-size: 3.6rem;\r\n  line-height: 1.25;\r\n  letter-spacing: -0.1rem;\r\n}\r\nh3 {\r\n  font-size: 3rem;\r\n  line-height: 1.3;\r\n  letter-spacing: -0.1rem;\r\n}\r\nh4 {\r\n  font-size: 2.4rem;\r\n  line-height: 1.35;\r\n  letter-spacing: -0.08rem;\r\n}\r\nh5 {\r\n  font-size: 1.8rem;\r\n  line-height: 1.5;\r\n  letter-spacing: -0.05rem;\r\n}\r\nh6 {\r\n  font-size: 1.5rem;\r\n  line-height: 1.6;\r\n  letter-spacing: 0;\r\n}\r\n\r\n/* Larger than phablet */\r\n@media (min-width: 550px) {\r\n  h1 {\r\n    font-size: 5rem;\r\n  }\r\n  h2 {\r\n    font-size: 4.2rem;\r\n  }\r\n  h3 {\r\n    font-size: 3.6rem;\r\n  }\r\n  h4 {\r\n    font-size: 3rem;\r\n  }\r\n  h5 {\r\n    font-size: 2.4rem;\r\n  }\r\n  h6 {\r\n    font-size: 1.5rem;\r\n  }\r\n}\r\n\r\np {\r\n  margin-top: 0;\r\n}\r\n\r\n/* Links\r\n  –––––––––––––––––––––––––––––––––––––––––––––––––– */\r\na {\r\n  color: #1eaedb;\r\n}\r\na:hover {\r\n  color: #0fa0ce;\r\n}\r\n\r\n/* Buttons\r\n  –––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n.button,\r\nbutton,\r\ninput[type="submit"],\r\ninput[type="reset"],\r\ninput[type="button"] {\r\n  display: inline-block;\r\n  height: 38px;\r\n  padding: 0 30px;\r\n  color: #555;\r\n  text-align: center;\r\n  font-size: 11px;\r\n  font-weight: 600;\r\n  line-height: 38px;\r\n  letter-spacing: 0.1rem;\r\n  text-transform: uppercase;\r\n  text-decoration: none;\r\n  white-space: nowrap;\r\n  background-color: transparent;\r\n  border-radius: 4px;\r\n  border: 1px solid #bbb;\r\n  cursor: pointer;\r\n  box-sizing: border-box;\r\n}\r\n.button:hover,\r\nbutton:hover,\r\ninput[type="submit"]:hover,\r\ninput[type="reset"]:hover,\r\ninput[type="button"]:hover,\r\n.button:focus,\r\nbutton:focus,\r\ninput[type="submit"]:focus,\r\ninput[type="reset"]:focus,\r\ninput[type="button"]:focus {\r\n  color: #333;\r\n  border-color: #888;\r\n  outline: 0;\r\n}\r\n.button.button-primary,\r\nbutton.button-primary,\r\ninput[type="submit"].button-primary,\r\ninput[type="reset"].button-primary,\r\ninput[type="button"].button-primary {\r\n  color: #fff;\r\n  background-color: #33c3f0;\r\n  border-color: #33c3f0;\r\n}\r\n.button.button-primary:hover,\r\nbutton.button-primary:hover,\r\ninput[type="submit"].button-primary:hover,\r\ninput[type="reset"].button-primary:hover,\r\ninput[type="button"].button-primary:hover,\r\n.button.button-primary:focus,\r\nbutton.button-primary:focus,\r\ninput[type="submit"].button-primary:focus,\r\ninput[type="reset"].button-primary:focus,\r\ninput[type="button"].button-primary:focus {\r\n  color: #fff;\r\n  background-color: #1eaedb;\r\n  border-color: #1eaedb;\r\n}\r\n\r\n/* Forms\r\n  –––––––––––––––––––––––––––––––––––––––––––––––––– */\r\ninput[type="email"],\r\ninput[type="number"],\r\ninput[type="search"],\r\ninput[type="text"],\r\ninput[type="tel"],\r\ninput[type="url"],\r\ninput[type="password"],\r\ntextarea,\r\nselect {\r\n  height: 38px;\r\n  padding: 6px 10px; /* The 6px vertically centers text on FF, ignored by Webkit */\r\n  background-color: #fff;\r\n  border: 1px solid #d1d1d1;\r\n  border-radius: 4px;\r\n  box-shadow: none;\r\n  box-sizing: border-box;\r\n}\r\n/* Removes awkward default styles on some inputs for iOS */\r\ninput[type="email"],\r\ninput[type="number"],\r\ninput[type="search"],\r\ninput[type="text"],\r\ninput[type="tel"],\r\ninput[type="url"],\r\ninput[type="password"],\r\ntextarea {\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  appearance: none;\r\n}\r\ntextarea {\r\n  min-height: 65px;\r\n  padding-top: 6px;\r\n  padding-bottom: 6px;\r\n}\r\ninput[type="email"]:focus,\r\ninput[type="number"]:focus,\r\ninput[type="search"]:focus,\r\ninput[type="text"]:focus,\r\ninput[type="tel"]:focus,\r\ninput[type="url"]:focus,\r\ninput[type="password"]:focus,\r\ntextarea:focus,\r\nselect:focus {\r\n  border: 1px solid #33c3f0;\r\n  outline: 0;\r\n}\r\nlabel,\r\nlegend {\r\n  display: block;\r\n  margin-bottom: 0.5rem;\r\n  font-weight: 600;\r\n}\r\nfieldset {\r\n  padding: 0;\r\n  border-width: 0;\r\n}\r\ninput[type="checkbox"],\r\ninput[type="radio"] {\r\n  display: inline;\r\n}\r\nlabel > .label-body {\r\n  display: inline-block;\r\n  margin-left: 0.5rem;\r\n  font-weight: normal;\r\n}\r\n\r\n/* Lists\r\n  –––––––––––––––––––––––––––––––––––––––––––––––––– */\r\nul {\r\n  list-style: circle inside;\r\n}\r\nol {\r\n  list-style: decimal inside;\r\n}\r\nol,\r\nul {\r\n  padding-left: 0;\r\n  margin-top: 0;\r\n}\r\nul ul,\r\nul ol,\r\nol ol,\r\nol ul {\r\n  margin: 1.5rem 0 1.5rem 3rem;\r\n  font-size: 90%;\r\n}\r\nli {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n/* Code\r\n  –––––––––––––––––––––––––––––––––––––––––––––––––– */\r\ncode {\r\n  padding: 0.2rem 0.5rem;\r\n  margin: 0 0.2rem;\r\n  font-size: 90%;\r\n  white-space: nowrap;\r\n  background: #f1f1f1;\r\n  border: 1px solid #e1e1e1;\r\n  border-radius: 4px;\r\n}\r\npre > code {\r\n  display: block;\r\n  padding: 1rem 1.5rem;\r\n  white-space: pre;\r\n}\r\n\r\n/* Tables\r\n  –––––––––––––––––––––––––––––––––––––––––––––––––– */\r\nth,\r\ntd {\r\n  padding: 12px 15px;\r\n  text-align: left;\r\n  border-bottom: 1px solid #e1e1e1;\r\n}\r\nth:first-child,\r\ntd:first-child {\r\n  padding-left: 0;\r\n}\r\nth:last-child,\r\ntd:last-child {\r\n  padding-right: 0;\r\n}\r\n\r\n/* Spacing\r\n  –––––––––––––––––––––––––––––––––––––––––––––––––– */\r\nbutton,\r\n.button {\r\n  margin-bottom: 1rem;\r\n}\r\ninput,\r\ntextarea,\r\nselect,\r\nfieldset {\r\n  margin-bottom: 1.5rem;\r\n}\r\npre,\r\nblockquote,\r\ndl,\r\nfigure,\r\ntable,\r\np,\r\nul,\r\nol,\r\nform {\r\n  margin-bottom: 2.5rem;\r\n}\r\n\r\n/* Utilities\r\n  –––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n.u-full-width {\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n}\r\n.u-max-full-width {\r\n  max-width: 100%;\r\n  box-sizing: border-box;\r\n}\r\n.u-pull-right {\r\n  float: right;\r\n}\r\n.u-pull-left {\r\n  float: left;\r\n}\r\n\r\n/* Misc\r\n  –––––––––––––––––––––––––––––––––––––––––––––––––– */\r\nhr {\r\n  margin-top: 3rem;\r\n  margin-bottom: 3.5rem;\r\n  border-width: 0;\r\n  border-top: 1px solid #e1e1e1;\r\n}\r\n\r\n/* Clearing\r\n  –––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n\r\n/* Self Clearing Goodness */\r\n.container:after,\r\n.row:after,\r\n.u-cf {\r\n  content: "";\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n/* Media Queries\r\n  –––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n/*\r\n  Note: The best way to structure the use of media queries is to create the queries\r\n  near the relevant code. For example, if you wanted to change the styles for buttons\r\n  on small devices, paste the mobile query code up in the buttons section and style it\r\n  there.\r\n  */\r\n\r\n/* Larger than mobile */\r\n@media (min-width: 400px) {\r\n}\r\n\r\n/* Larger than phablet (also point when grid becomes active) */\r\n@media (min-width: 550px) {\r\n}\r\n\r\n/* Larger than tablet */\r\n@media (min-width: 750px) {\r\n}\r\n\r\n/* Larger than desktop */\r\n@media (min-width: 1000px) {\r\n}\r\n\r\n/* Larger than Desktop HD */\r\n@media (min-width: 1200px) {\r\n}\r\n',""]);const o=i},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=n(r);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(t)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);t&&i[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),r.push(l))}},r}},379:(n,r,e)=>{var t,i=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}(),o=[];function a(n){for(var r=-1,e=0;e<o.length;e++)if(o[e].identifier===n){r=e;break}return r}function s(n,r){for(var e={},t=[],i=0;i<n.length;i++){var s=n[i],l=r.base?s[0]+r.base:s[0],d=e[l]||0,c="".concat(l," ").concat(d);e[l]=d+1;var u=a(c),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(o[u].references++,o[u].updater(p)):o.push({identifier:c,updater:f(p,r),references:1}),t.push(c)}return t}function l(n){var r=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var o=e.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(n){r.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(r);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var d,c=(d=[],function(n,r){return d[n]=r,d.filter(Boolean).join("\n")});function u(n,r,e,t){var i=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=c(r,i);else{var o=document.createTextNode(i),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(o,a[r]):n.appendChild(o)}}function p(n,r,e){var t=e.css,i=e.media,o=e.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var m=null,h=0;function f(n,r){var e,t,i;if(r.singleton){var o=h++;e=m||(m=l(r)),t=u.bind(null,e,o,!1),i=u.bind(null,e,o,!0)}else e=l(r),t=p.bind(null,e,r),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else i()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var e=s(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<e.length;t++){var i=a(e[t]);o[i].references--}for(var l=s(n,r),d=0;d<e.length;d++){var c=a(e[d]);0===o[c].references&&(o[c].updater(),o.splice(c,1))}e=l}}}}},r={};function e(t){if(r[t])return r[t].exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{class n{constructor(n){this.config=n,this.$el=this.initView()}initView(){return $('  <div class="gallery four columns">\n    <div class="gallery-list-header gallery-item">Gallery</div>\n\n    <div id="gallery-list" class="gallery-list"></div>\n  </div>').on("click",".gallery-item",(n=>this.onGalleryItemClick(n)))}renderGallery(n){this.$galleryContainer=$(".gallery-list"),this.$galleryContainer.html(n.map(this.getGalleryTemplate).join("\n"))}getGalleryTemplate(n){return`<div class="gallery-item" data-gallery-id="${n.id}">${n.title}</div>`}onGalleryItemClick(n){const r=$(n.target).data("galleryId");null!=r&&this.config.setGalleryId(r)}}class r{constructor(n){this.config=n,this.$el=this.initView()}initView(){return $('<div class="photos eight columns">\n    <div class="gallery-item gallery-photos-header">Photos</div>\n\n    <div id="photos-list" class="photos-list"></div>')}renderImages(n){this.$imageContainer=$(".photos-list"),this.$imageContainer.html(n.map(this.getImageTemplate).join("\n"))}getImageTemplate(n){return`<div class="photo-item" data-photo-id="${n.id}"><img src="${n.url}" alt="photo-${n.id}"></div>`}}class t{constructor(){this.galleryList=[]}getGalleryList(){return fetch("https://jsonplaceholder.typicode.com/albums").then((n=>n.json())).then((n=>this.galleryList=n))}}class i{constructor(){this.imageList=[]}getImageList(n="1"){return fetch("https://jsonplaceholder.typicode.com/photos?albumId="+n).then((n=>n.json())).then((n=>this.imageList=n))}}class o{constructor(){this.$container=$(".container"),this.listView=new n({setGalleryId:n=>this.setGalleryId(n)}),this.$container.append(this.listView.$el),this.imageView=new r,this.$container.append(this.imageView.$el),this.collection=new t,this.collection.getGalleryList().then((()=>{this.listView.renderGallery(this.collection.galleryList)})),this.imageCollection=new i,this.imageCollection.getImageList().then((()=>{this.imageView.renderImages(this.imageCollection.imageList)}))}setGalleryId(n){this.imageCollection.getImageList(n).then((()=>{this.imageView.renderImages(this.imageCollection.imageList)}))}}var a=e(379),s=e.n(a),l=e(648);s()(l.Z,{insert:"head",singleton:!1}),l.Z.locals;var d=e(672);s()(d.Z,{insert:"head",singleton:!1}),d.Z.locals;var c=e(740);s()(c.Z,{insert:"head",singleton:!1}),c.Z.locals,$((()=>{new o}))})()})();