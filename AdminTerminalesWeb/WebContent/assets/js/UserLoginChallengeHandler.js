﻿var banderaServidor = 0;

var UserLoginChallengeHandler = function(usr, key) {

    var isChallenged = false;
    var securityCheckName = 'banorteSecurityCheckSa';
    var userLoginChallengeHandler = WL.Client
        .createSecurityCheckChallengeHandler(securityCheckName);

    login(usr, key);

    document.addEventListener("pause", logout, true);

    userLoginChallengeHandler.securityCheckName = securityCheckName;

    userLoginChallengeHandler.handleChallenge = function(challenge) {

        WL.Logger.debug("handleChallenge");
        isChallenged = true;
        var statusMsg = "Remaining Attempts: " + challenge.remainingAttempts;

        if (challenge.errorMsg !== null) {
            statusMsg = statusMsg + "<br/>" + challenge.errorMsg;
        }
        WL.Logger.debug("Status MSG = " + statusMsg);
    };

    userLoginChallengeHandler.handleSuccess = function(data) {
        WL.Logger.debug("handleSuccess");
        isChallenged = false;
        
        //		document.getElementById("helloUser").innerHTML = "Hello, "
        //				+ data.user.displayName;
    };

    userLoginChallengeHandler.handleFailure = function(error) {
        WL.Logger.debug("handleFailure: " + error.failure);
        isChallenged = false;
        if (error.failure !== null) {
            alert(error.failure);
        } else {
            alert("Failed to login.");
        }
    };

    function login(usr, key) {

        var usr_ca = usr;
        var tarjet = key;

        console.log(usr_ca);
        console.log(tarjet);

        /*var usr_ca = "sucursApps";
        var tarjet = "adm-sucusWeb";*/

        if (isChallenged) {
            userLoginChallengeHandler.submitChallengeAnswer({
                'usr_ca': usr_ca,
                'tarjet': tarjet
            });
        } else {
            WLAuthorizationManager.login(securityCheckName, {
                'usr_ca': usr_ca,
                'tarjet': tarjet
            }).then(
                function() {

                    console.info('login onSuccess');
                    $('#modal_please_wait').modal('hide');

                },

                function(response) {


                    banderaServidor++;

                    if (banderaServidor == 1) {

                        var user = roots(ROOT1);
                    } else if (banderaServidor == 2) {
                        var user = roots(ROOT2);
                    } else if (banderaServidor == 3) {
                        var user = roots(ROOT3);
                    } else if (banderaServidor >= 3) {
                        console.info("*login onFailure: " +
                            JSON.stringify(response));

                    }

                });

        }

    }

    function servidor(param) {
        setTimeout(function() {
            console.log(param);
            var wlInitOptions = {
                mfpContextRoot: param,
                applicationId: 'com.banorte.adminterminalesweb',

            };

            WL.Client.init(wlInitOptions).then(function() {
                console.info("VERSION: 1,  19/04/2018")
                setTimeout(function() {
                    var userLoginChallengeHandler = UserLoginChallengeHandler(USR, KEY);
                }, 1000)

            });
        }, 1000)
    }



    function logout() {

        alert("afuera");

        WLAuthorizationManager.logout(securityCheckName).then(function() {
                WL.Logger.debug("logout onSuccess");
                location.reload();
            },

            function(response) {
                WL.Logger.debug("logout onFailure: " + JSON.stringify(response));
            });
    }
    return userLoginChallengeHandler;
};