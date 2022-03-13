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
    'email.enrollAccount.signature': 'Non vediamo l\'ora di vederti,<br />il team di Literary Universe',
    // Reset password
    'email.resetPassword.messageHtml': 'Abbiamo ricevuto una richiesta per reimpostare la password del tuo account, clicca sul pulsante qui sotto per continuare il processo. Se non hai effettuato la richiesta, puoi ignorare questa e-mail, ma potrebbe essere una buona occasione per rivedere le tue impostazioni di sicurezza.',
    'email.resetPassword.button': 'Reimposta password',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Siamo felici di averti con noi! Clicca il pulsante qui sotto per verificare questo indirizzo e-mail.',
    'email.verifyEmail.button': 'Verifica indirizzo e-mail',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Il tuo account è stato aggiornato',
    'email.adminUpgrade.message': `Abbiamo aggiornato il tuo account a livello {plan, select,
    explorer {Esploratore}
    adventurer {Avventuriero}
    storyteller {Cantastorie}
    other {}
  } per i prossimi {days} giorni.\n\nDivertiti,\nil team di Literary Universe`,
    'email.adminUpgrade.messageHtml': `Abbiamo aggiornato il tuo account a livello {plan, select,
    explorer {Esploratore}
    adventurer {Avventuriero}
    storyteller {Cantastorie}
    other {}
  } per i prossimi {days} giorni. Divertiti!`,
    'email.verification': 'Verifica e-mail',
    'email.verifying': 'Verifica della tua e-mail. Ci vorrà solo un momento...',
    'email.verified': 'Buone notizie! La tua e-mail è stata verificata!'
};    /* eslint-enable max-len */