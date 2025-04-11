/**
 * @authors Jan Dvorak
 */
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
    'email.enrollAccount.messageHtml': 'Dorim să vă invităm în Universul Literar! Ți-am pregătit un cont personal unde poți accesa toate funcțiile Universului Literar. Te rugăm să ni te alături în crearea următoarei generații de scriere creativă și lectură!',
    'email.enrollAccount.button': 'Accesează-ți contul',
    'email.enrollAccount.signature': 'Vă așteptăm cu drag,<br />Echipa Universului Literar',
    // Reset password
    'email.resetPassword.messageHtml': 'Am primit o cerere de resetare a parolei pentru contul dvs. Vă rugăm să faceți clic pe butonul de mai jos pentru a continua procesul. Dacă nu ați făcut această solicitare, puteți ignora acest e-mail, dar ar putea fi un moment bun să vă revizuiți setările de securitate.',
    'email.resetPassword.button': 'Resetează parola',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Suntem bucuroși să vă avem la bord! Vă rugăm să faceți clic pe butonul de mai jos pentru a verifica această adresă de e-mail.',
    'email.verifyEmail.button': 'Verifică această adresă de e-mail',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Contul tău a fost actualizat',
    'email.adminUpgrade.message': `Ți-am actualizat contul la {plan, select,
    explorer {Explorator}
    adventurer {Aventurier}
    storyteller {Povestitor}
    other {}
  } nivel pentru următoarele {days} zile.\n\nDistracție plăcută,\nEchipa Universului Literar`,
    'email.adminUpgrade.messageHtml': `Ți-am upgrade-at contul la nivelul {plan, select,
    explorer {Explorer}
    adventurer {Adventurer}
    storyteller {Storyteller}
    other {}
  } pentru următoarele {days} zile. Bucură-te!`,
    'email.verification': 'Verificare e-mail',
    'email.verifying': 'Se verifică adresa ta de e-mail. Acest proces va dura doar un moment...',
    'email.verified': 'Vestea bună! Adresa ta de e-mail a fost verificată!'
};