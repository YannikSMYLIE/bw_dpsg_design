plugin.tx_femanager {
    _LOCAL_LANG {
        # Field Labels
        default.tx_femanager_domain_model_user.username = Email
        de.tx_femanager_domain_model_user.username = E-Mail
        fr.tx_femanager_domain_model_user.username = E-mail

        # Errormessages
        default.validationErrorRequired = This is a mandatory field
        de.validationErrorRequired = Hierbei handelt es sich um ein Pflichtfeld
        fr.validationErrorRequired = Ce champ est obligatoire

        # E-Mails
        de.emailCreateUserConfirmationText1 = Vielen Dank für deine Registrierung auf der Homepage des DPSG Stammes Sugambrer Bonn Beuel. Um die Registrierung abzuschließen klicke bitte auf den nachfolgenden Link:
        de.emailCreateUserConfirmationText2 = Du hast kein Profil angelegt aber trotzdem diese E-Mail erhalten? Dann kannst du die Registrierung mit folgendem Link rückgängig machen:
        de.emailCreateUserConfirmationSignature = Bis bald und gut Pfad!
    }

    view {
        templateRootPath >
        templateRootPaths {
            20 = EXT:bw_dpsg_design/Resources/Private/CustomTemplates/femanager/Templates/
        }
        partialRootPath >
        partialRootPaths {
            20 = EXT:bw_dpsg_design/Resources/Private/CustomTemplates/femanager/Partials/
        }
    }

    settings {
        new {
            fillEmailWithUsername = 1
            validation {
                email > username {
                    required = 1
                    uniqueInDb = 1
                    email = 1
                }
            }
        }
    }