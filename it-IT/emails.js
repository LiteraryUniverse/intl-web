/**
 * @authors Jan Dvorak
 */
/* eslint-disable max-len */
export default {
    'email.enrollAccount.subject': 'Invito a Literary Universe per {username}',
    'email.enrollAccount.message': `Hello {username}\n\n
    Ti invitiamo a Literary Universe! Abbiamo creato per te uno speciale account personale dove puoi accedere a tutte le funzionalità di Literary Universe! Unisciti a noi per dare vita alla prossima generazione di scrittura creativa e strumenti di lettura!
    Per attivare il tuo account, clicca qui:\n\n{url}`,
    'email.resetPassword.subject': 'Literary Universe reimposta la password',
    'email.resetPassword.message': `Ciao {username}!\n\n Abbiamo ricevuto una richiesta per reimpostare la password del tuo account.
        Clicca il link qui sotto per reimpostare la password:\n\n{url}`,
    'email.verifyEmail.subject': 'Literary Universe verifica la tua e-mail',
    'email.verifyEmail.message': 'Ciao {username}!\n\n Verifica il tuo indirizzo e-mail cliccando sul link sottostante:\n\n{url}',
    // New html email keys
    'email.salutation': 'Ciao {username},',
    'email.welcome': 'Benvenuto a Literary Universe!',
    'email.signature': 'Cordialmente,<br />il team di Literary Universe',
    // Enrollment
    'email.enrollAccount.welcome': 'Benvenuto/a a bordo',
    'email.enrollAccount.messageHtml': 'Ti invitiamo a Literary Universe! Abbiamo creato il tuo speciale account personale dove puoi accedere a tutte le funzionalità di Literary Universe! Unisciti a noi per dare vita alla prossima generazione di scrittura creativa e strumenti di lettura!',
    'email.enrollAccount.button': 'Accedi al tuo account',
    'email.enrollAccount.signature': 'We are looking forward to see you,<br />Literary Universe team',
    // Reset password
    'email.resetPassword.messageHtml': 'We have received a request to reset your password for your account, please click on the button bellow to continue the process. If you haven\'t made this request you can ignore this e-mail, but it might be a good time to review your security settings.',
    'email.resetPassword.button': 'Reset password',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'We are happy to have you on board! Please click the button bellow to verify this e-mail address.',
    'email.verifyEmail.button': 'Verify this e-mail address',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Your account has been upgraded',
    'email.adminUpgrade.message': `We have upgraded your account to {plan, select,
    explorer {Explorer}
    adventurer {Adventurer}
    storyteller {Storyteller}
    other {}
  } tier for the next {days} days.\n\nEnjoy,\nLiterary Universe team`,
    'email.adminUpgrade.messageHtml': `We have upgraded your account to {plan, select,
    explorer {Explorer}
    adventurer {Adventurer}
    storyteller {Storyteller}
    other {}
  } tier for the next {days} days. Enjoy!`,
    'email.verification': 'E-mail verification',
    'email.verifying': 'Verifying your e-mail. This will take just a moment...',
    'email.verified': 'Great news! Your e-mail has been verified!'
};    /* eslint-enable max-len */