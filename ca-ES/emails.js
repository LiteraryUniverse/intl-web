/**
 * @authors Jan Dvorak
 */
export default {
    'email.enrollAccount.subject': 'Invitació a l\'Univers Literari per a {username}',
    'email.enrollAccount.message': `Hola {username}\n\n
    Hem creat un compte personal especial per a tu a l'Univers Literari, on podràs accedir a totes les funcionalitats de l'Univers Literari! Uneix-te a nosaltres per crear la propera generació d'eines de escriptura i lectura creatives!
    Per activar el teu compte, simplement fes clic a l'enllaç següent:\n\n{url}`,
    'email.resetPassword.subject': 'Restablir contrasenya de l\'Univers Literari',
    'email.resetPassword.message': `Hola {username}!\n\n Hem rebut una sol·licitud per restablir la teva contrasenya del teu compte.
        Si us plau, segueix l'enllaç següent per restablir la teva contrasenya:\n\n{url}`,
    'email.verifyEmail.subject': 'Verificació de correu electrònic de l\'Univers Literari',
    'email.verifyEmail.message': 'Hola {username}!\n\n Si us plau, verifica la teva adreça de correu electrònic fent clic a l\'enllaç següent:\n\n{url}',
    // New html email keys
    'email.salutation': 'Hola {username},',
    'email.welcome': 'Benvingut a l\'Univers Literari!',
    'email.signature': 'Atentament,<br />l\'equip de l\'Univers Literari',
    // Enrollment
    'email.enrollAccount.welcome': 'Benvingut a bord',
    'email.enrollAccount.messageHtml': 'We would like to invite you to Literary Universe! We went ahead and prepared a personal account for you where you can access all features of Literary Universe. Please join us in creating the next generation of creative writing and reading!',
    'email.enrollAccount.button': 'Accedeix al teu compte',
    'email.enrollAccount.signature': 'We are looking forward to seeing you,<br />Literary Universe team',
    // Reset password
    'email.resetPassword.messageHtml': 'We have received a request to reset your password for your account. Please click on the button below to continue the process. If you haven\'t made this request, you can ignore this e-mail, but it might be a good time to review your security settings.',
    'email.resetPassword.button': 'Restablir contrasenya',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'We are happy to have you on board! Please click the button below to verify this e-mail address.',
    'email.verifyEmail.button': 'Verificar aquesta adreça de correu electrònic',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'El teu compte ha estat millorat',
    'email.adminUpgrade.message': `We have upgraded your account to {plan, select,
    explorer {Explorer}
    adventurer {Adventurer}
    storyteller {Storyteller}
    other {}
  } tier for the next {days} days.\n\nEnjoy,\nLiterary Universe team`,
    'email.adminUpgrade.messageHtml': `Hem millorat el vostre compte a {plan, select,
    explorer {Explorador}
    adventurer {Aventurer}
    storyteller {Contista}
    other {}
  } de nivell per als pròxims {days} dies. Gaudiu-ne!`,
    'email.verification': 'Verificació de correu electrònic',
    'email.verifying': 'Verificant el vostre correu electrònic. Això només trigarà un moment...',
    'email.verified': 'Bones notícies! S\'ha verificat el vostre correu electrònic!'
};