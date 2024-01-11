/**
 * @authors Jan Dvorak
 */
/* eslint-disable max-len */
export default {
    'email.enrollAccount.subject': 'Invitație în Universul Literar pentru {username}',
    'email.enrollAccount.message': `Bună {username}\n\n
    Ne-ar plăcea să te invităm în Universul Literar! Ți-am creat un cont personal special în care poți accesa toate funcțiile Universului Literar! Te rugăm să ni te alături în crearea următoarei generații de instrumente pentru scriere și lectură creative!
    Pentru a-ți activa contul, pur și simplu apasă pe link-ul de mai jos:\n\n{url}`,
    'email.resetPassword.subject': 'Resetare parolă Universul Literar',
    'email.resetPassword.message': `Bună {username}!\n\n Am primit o cerere de resetare a parolei pentru contul tău.
        Te rugăm să urmezi link-ul de mai jos pentru a-ți reseta parola:\n\n{url}`,
    'email.verifyEmail.subject': 'Verificare e-mail Universul Literar',
    'email.verifyEmail.message': 'Bună {username}!\n\n Te rugăm să-ți verifici adresa de e-mail apăsând pe link-ul de mai jos:\n\n{url}',
    // New html email keys
    'email.salutation': 'Bună {username},',
    'email.welcome': 'Bun venit în Universul Literar!',
    'email.signature': 'Cu sinceritate,<br />Echipa Universul Literar',
    // Enrollment
    'email.enrollAccount.welcome': 'Bun venit la bord',
    'email.enrollAccount.messageHtml': 'Ne-ar plăcea să te invităm în Universul Literar! Am pregătit deja un cont personal pentru tine în care poți accesa toate funcțiile Universului Literar! Te rugăm să ni te alături în crearea următoarei generații de scriere și lectură creative!',
    'email.enrollAccount.button': 'Accesează-ți contul',
    'email.enrollAccount.signature': 'We are looking forward to see you,<br />Literary Universe team',
    // Reset password
    'email.resetPassword.messageHtml': 'Am primit o cerere de resetare a parolei pentru contul tău, te rugăm să apeși pe butonul de mai jos pentru a continua procesul. Dacă nu ai făcut această cerere, poți ignora acest e-mail, dar ar fi bine să verifici setările tale de securitate.',
    'email.resetPassword.button': 'Resetează parola',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Ne bucurăm să te avem alături! Te rugăm să apeși pe butonul de mai jos pentru a verifica adresa de e-mail.',
    'email.verifyEmail.button': 'Verifică această adresă de e-mail',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Contul tău a fost actualizat',
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