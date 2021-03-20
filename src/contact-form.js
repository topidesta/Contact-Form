var favstylesheet = document.createElement("style");
favstylesheet.innerHTML = `@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Nunito+Sans:400,700);.fab-box-dont-overlap *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.fab-box-dont-overlap :after,.fab-box-dont-overlap :before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.fab-box-dont-overlap{position:fixed;z-index:999;width:56px;height:56px;right:20px;bottom:20px;display:none;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;line-height:1.4;text-align:left}.fab-button-dont-overlap{position:relative;border:none;width:56px;height:56px;cursor:pointer;outline:0!important;border-radius:50%;color:#fff;-webkit-box-shadow:0 3px 3px 0 rgba(0,0,0,.14),0 1px 7px 0 rgba(0,0,0,.12),0 3px 1px -1px rgba(0,0,0,.2);box-shadow:0 3px 3px 0 rgba(0,0,0,.14),0 1px 7px 0 rgba(0,0,0,.12),0 3px 1px -1px rgba(0,0,0,.2);-webkit-transition:all .2s ease-in-out;-moz-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.fab-button-dont-overlap span{position:absolute;width:56px;height:56px;display:block;left:0;top:0;-webkit-transition:all .2s ease-in-out;-moz-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.fab-button-dont-overlap i{line-height:56px}.fab-button-dont-overlap i:not(.material-icons){font-size:18px}.fab-icon-dont-overlap{opacity:0;transform:scale(0)}.fab-box-dont-overlap.fab-showing-state-dont-overlap .m-fab-icon-default{opacity:0;transform:scale(0)}.fab-box-dont-overlap.fab-showing-state-dont-overlap .fab-icon-dont-overlap{opacity:1;transform:scale(1)}.fab-close-dont-overlap{position:absolute;right:20px;top:20px;cursor:pointer}.fab-panel-dont-overlap{font-family:Nunito Sans;transform:scale(.5);opacity:0;display:none;position:absolute;padding:20px;width:300px;background-color:#fff;border-radius:3px;-webkit-box-shadow:0 3px 3px 0 rgba(0,0,0,.14),0 1px 7px 0 rgba(0,0,0,.12),0 3px 1px -1px rgba(0,0,0,.2);box-shadow:0 3px 3px 0 rgba(0,0,0,.14),0 1px 7px 0 rgba(0,0,0,.12),0 3px 1px -1px rgba(0,0,0,.2)}.fab-right-button-dont-overlap .fab-panel-dont-overlap{bottom:70px;right:0;-ms-transform-origin:bottom right;-webkit-transform-origin:bottom right;transform-origin:bottom right}.fab-box-dont-overlap.fab-showing-dont-overlap .fab-panel-dont-overlap{display:block}.fab-box-dont-overlap.fab-showing-dont-overlap.fab-showing-state-dont-overlap .fab-panel-dont-overlap{opacity:1;transform:scale(1)}.fab-title-dont-overlap{color:#000;margin:0;padding:0;font-size:24px;font-family:Nunito Sans;margin-bottom:15px}div.fab-element-dont-overlap{padding-top:8px}.fab-element-dont-overlap,.fab-form-button-dont-overlap{display:block;width:100%;height:42px;background-color:#f9fafa;border:solid 2px #d4d9dd;border-radius:3px;outline:0;margin-bottom:10px;padding:5px 10px;font-family:inherit}.error{border:solid 2px #d16666}input.fab-element-dont-overlap:focus,textarea.fab-element-dont-overlap:focus{background-color:#fff;border-color:#8c9aa6}.fab-element-dont-overlap:hover{border-color:#8c9aa6}textarea.fab-element-dont-overlap{min-height:80px;resize:none}.fab-form-button-dont-overlap{color:#333;font-weight:700;border-color:transparent!important;cursor:pointer;margin-bottom:0;text-align:center;line-height:32px;text-decoration:none}.fab-form-button-dont-overlap:hover{-webkit-box-shadow:2px 2px 3px 0 rgba(0,0,0,.2);-moz-box-shadow:2px 2px 3px 0 rgba(0,0,0,.2);box-shadow:2px 2px 3px 0 rgba(0,0,0,.2)}.fab-element-dont-overlap:last-child{margin-bottom:0}.m-message-box{width:100%;text-align:center;margin-top:10px}.fab-color-dont-overlap{background-color:#442e65;color:#fff!important}.fab-onclick-dont-overlap{background-color:#875fc4;color:#fff!important}.fabpromo{text-align:center;font-size:6px;margin-top:0;padding:0}`;
document.getElementsByTagName("head")[0].appendChild(favstylesheet);
emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var favdiv = document.createElement("div");
favdiv.innerHTML = `<div class="fab-box-dont-overlap fab-right-button-dont-overlap m-fab-fixed" id="fab" style="display: inline-block; z-index: 9999;"><div class="fab-button-dont-overlap fab-color-dont-overlap" onclick="fabClick();"><span class="m-fab-icon-default"><i class="material-icons">email</i></span><span class="fab-icon-dont-overlap"><i class="material-icons">close</i></span></div><div class="fab-panel-dont-overlap" id="fabcontent"></div></div>`;
document.getElementsByTagName("body")[0].appendChild(favdiv);
document.getElementById('fabcontent').innerHTML = (`<h3 class="fab-title-dont-overlap">Contact</h3><p>Send me a message I will contact with you soon.</p><div><input class="fab-element-dont-overlap" onchange="fabonchange('fabformname')" id="fabformname" type="text" name="name" placeholder="Name" autocomplete="off" data-required="true"><input class="fab-element-dont-overlap" onchange="fabonchange('fabformemail')" id="fabformemail" type="text" name="email" placeholder="Email" autocomplete="off" data-required="true" data-validation="email"><input class="fab-element-dont-overlap" onchange="fabonchange('fabformphone')" id="fabformphone" type="number" name="phoneno" placeholder="Phone No" autocomplete="off" data-required="true"><input class="fab-element-dont-overlap" onchange="fabonchange('fabformsubject')" id="fabformsubject" type="text" name="subject" placeholder="Subject" autocomplete="off" data-required="true"><textarea class="fab-element-dont-overlap" onchange="fabonchange('fabformmessage')" id="fabformmessage" name="message" placeholder="Your message" data-required="true"></textarea><button id="fabbutton" onclick="fabmessagesend()" class="fab-form-button-dont-overlap fab-color-dont-overlap">Send your message</button><a href="https://github.com/cachecleanerjeet/Contact-Form" class="fabpromo">Powered by Contact Form</a></div>`);

function fabClick() {
    document.getElementById('fab').classList.toggle('fab-showing-dont-overlap');
    document.getElementById('fab').classList.toggle('fab-showing-state-dont-overlap');
};

async function fabmessagesend() {
    var fabvalue = ({
        name: document.getElementById('fabformname').value,
        email: document.getElementById('fabformemail').value.toLowerCase(),
        phone_no: document.getElementById('fabformphone').value,
        subject: document.getElementById('fabformsubject').value,
        message: document.getElementById('fabformmessage').value,
    });

    if (fabvalue.name === "") {
        document.getElementById('fabformname').classList.add('error');
    } else if (fabvalue.email === "" || !emailregex.test(fabvalue.email)) {
        document.getElementById('fabformemail').classList.add('error');
    } else if (fabvalue.phone_no === "") {
        document.getElementById('fabformphone').classList.add('error');
    } else if (fabvalue.subject === "") {
        document.getElementById('fabformsubject').classList.add('error');
    } else if (fabvalue.message === "") {
        document.getElementById('fabformmessage').classList.add('error');
    } else {
        document.getElementById('fabbutton').removeAttribute("onclick");
        document.getElementById('fabbutton').classList.remove("fab-color-dont-overlap");
        document.getElementById('fabbutton').classList.add("fab-onclick-dont-overlap");
        document.getElementById('fabbutton').innerHTML = 'Sending...';
        var faberrmsg = `<h3 class="fab-title-dont-overlap">Error</h3><p>Sorry, an error occurred while receiving your message, Try to contact with me in another method.</p>`;
        fetch(document.getElementById('contactform').getAttribute('form_worker_url'), {
                method: 'POST',
                body: JSON.stringify(fabvalue)
            })
            .then(response => response.json())
            .then(result => {
                if (result.status === true) {
                    document.getElementById('fabcontent').innerHTML = `<h3 class="fab-title-dont-overlap">Message Sent</h3><p>Your message has been successfully came to me, I will contact with you soon. 🍻</p>`
                } else {
                    document.getElementById('fabcontent').innerHTML = faberrmsg;
                };
            })
            .catch(error => {
                document.getElementById('fabcontent').innerHTML = faberrmsg;
            });
    };
};

function fabonchange(id) {
    document.getElementById(id).classList.remove('error');
};