window.onload = function() {
    if (shouldShowPopup()) {
        showStopFPPopup();
    }
};

function shouldShowPopup() {
    return document.cookie.indexOf('__dismiss_stop_fp_popup=') === -1;
}

function showStopFPPopup() {
    var style = document.createElement('style');

    var css = '' +
    'div.stop_fp_background{position:fixed;top:0;width:100vw;height:100vw;margin:0;padding:0;border:0;fon' +
    't-size:120%;font-family:sans-serif;vertical-align:baseline;background-color:rgba(0,0,0,0.85);}div.st' +
    'op_fp_background div.stop_fp_container{margin:0 auto;margin-top:5em;width:75%;max-width:600px}div.st' +
    'op_fp_background h1.stop_fp_title,div.stop_fp_background p.stop_fp_p,div.stop_fp_background h2.stop_' +
    'fp_cta{color:#fff}div.stop_fp_background p.stop_fp_p_footer a{font-size:smaller;color:#7b7b7b}div.st' +
    'op_fp_background a.stop_fp_button{display:inline-block;background-color:#f1592a;color:#fff;border-ra' +
    'dius:2px;padding:5px;margin:2px;text-decoration:none;}div.stop_fp_background a.stop_fp_button:hover{' +
    'text-decoration:underline;cursor:pointer}div.stop_fp_background a.stop_fp_button.stop_fp_button_dism' +
    'iss{background-color:#7b7b7b}@media print{div.stop_fp_background{display:none}}@media (max-width:640' +
    'px){div.stop_fp_background{height:100%;font-size:100%;}div.stop_fp_background div.stop_fp_container{' +
    'margin-top:1em}}';

    style.type = 'text/css';
    if (style.styleSheet){
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    document.head.appendChild(style);

    var html = '' +
    '<div class="stop_fp_background"><div class="stop_fp_container"><h1 class="stop_fp_title">This Websit' + 
    'e Blocked</h1><p class="stop_fp_p">Not yet at least, but a group of media companies including Bell, ' + 
    'CBC, Rogers, and more have teamed up to make this a reality for Canada.</p><p class="stop_fp_p">Unde' + 
    'r the guise of preventing piracy, a coalition known as "Fair Play Canada" want to limit your access ' + 
    'to the Internet by censoring and blocking web sites.</p><p class="stop_fp_p">Their faulty plan will ' + 
    'do little to stop piracy, but have big consequences for Canadians.</p><h2 class="stop_fp_cta">We mus' + 
    't act now to stop Fair Play Canada and keep the internet open.</h2><a href="https://act.openmedia.or' + 
    'g/StopCanadaCensorship" class="stop_fp_button">Submit a letter to the CRTC</a><a href="http://www.mi' + 
    'chaelgeist.ca/2018/02/canadas-sopa-moment-crtc-reject-bell-coalitions-dangerous-internet-blocking-pl' + 
    'an/" class="stop_fp_button">Learn More</a><a href="#" id="stop_fp_button_dismiss" class="stop_fp_but' + 
    'ton stop_fp_button_dismiss">Continue To Site</a><p class="stop_fp_p_footer"><a href="https://ianspen' + 
    'ce.com/stop_fairplay.html#popup">Add this to your site.</a></p></div></div>';

    var div = document.createElement('div');
    div.innerHTML = html;
    div = div.firstChild;
    document.body.insertBefore(div, document.body.children[0]);

    var dismissBtn = document.getElementById('stop_fp_button_dismiss');
    dismissBtn.onclick = function() {
        document.cookie = '__dismiss_stop_fp_popup=1;'
        div.style.display = 'none';
    };
}
