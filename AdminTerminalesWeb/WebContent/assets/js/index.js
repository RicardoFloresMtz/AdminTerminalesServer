var ROOT;
var USR;
var KEY;

$.getJSON('assets/js/cfg.json', function(datos) {
    ROOT = datos['root'];
    ROOT1 = datos['root1'];
    ROOT2 = datos['root2'];
    ROOT3 = datos['root3'];
    USR = datos['user'];
    KEY = datos['key'];

});

setTimeout(function() {
    $('#modal_please_wait').modal('show');
    console.log(ROOT);
    var wlInitOptions = {
        mfpContextRoot: ROOT,
        applicationId: 'com.banorte.adminterminalesweb',

    };

    WL.Client.init(wlInitOptions).then(function() {
        console.info("VERSION: 1, 19/04/2018")
        setTimeout(function() {
            var userLoginChallengeHandler = UserLoginChallengeHandler(USR, KEY);
        }, 1000)

    });
}, 1000)



var roots = function(param) {

    setTimeout(function() {
        console.log(param);
        var wlInitOptions = {
            mfpContextRoot: param,
            applicationId: 'com.banorte.adminterminalesweb',

        };

        var prom1 = new Promise(function(resolve, reject) {
            setTimeout(function() {
                // console.log("Promesa terminada");
                //termina bien
                resolve(valRoot(param));

            }, 1500);
        });


    });

}

function valRoot(param) {

    var wlInitOptions = {
        mfpContextRoot: param,
        applicationId: 'com.banorte.adminterminalesweb'

    };
    console.info("VERSION: 1,  19/04/2018")
    var userLoginChallengeHandler = UserLoginChallengeHandler(USR, KEY);

}