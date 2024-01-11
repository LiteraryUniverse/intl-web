/**
 * @authors Jan Dvorak
 */
/* eslint-disable max-len */
export default {
    'email.enrollAccount.subject': 'Kutsu Literary Universeen {username}',
    'email.enrollAccount.message': `Hei {username}\n\n
    Haluamme kutsua sinut Literary Universeen! Olemme luoneet sinulle oman henkilökohtaisen tilin, josta voit käyttää kaikkia Literary Universen ominaisuuksia! Liity kanssamme luomaan seuraavan sukupolven luovan kirjoittamisen ja lukemisen työkaluja!
    Aktivoidaksesi tilisi, klikkaa alla olevaa linkkiä:\n\n{url}`,
    'email.resetPassword.subject': 'Literary Universen salasanan palautus',
    'email.resetPassword.message': `Hei {username}!\n\n Olemme vastaanottaneet pyynnön nollata salasanasi tilillesi.
        Ole hyvä ja seuraa alla olevaa linkkiä palauttaaksesi salasanasi:\n\n{url}`,
    'email.verifyEmail.subject': 'Literary Universen sähköpostin vahvistus',
    'email.verifyEmail.message': 'Hei {username}!\n\n Vahvista sähköpostiosoitteesi klikkaamalla alla olevaa linkkiä:\n\n{url}',
    // New html email keys
    'email.salutation': 'Hei {username},',
    'email.welcome': 'Tervetuloa Literary Universeen!',
    'email.signature': 'Ystävällisin terveisin,<br />Literary Universen tiimi',
    // Enrollment
    'email.enrollAccount.welcome': 'Tervetuloa kyytiin',
    'email.enrollAccount.messageHtml': 'Haluamme kutsua sinut Literary Universeen! Olemme valmistelleet sinulle henkilökohtaisen tilin, josta voit käyttää kaikkia Literary Universen ominaisuuksia! Liity kanssamme luomaan seuraavan sukupolven luovan kirjoittamisen ja lukemisen työkaluja!',
    'email.enrollAccount.button': 'Avaa tilisi',
    'email.enrollAccount.signature': 'Odotamme innolla tapaamistamme,<br />Literary Universe -tiimi',
    // Reset password
    'email.resetPassword.messageHtml': 'Olemme vastaanottaneet pyynnön salasanan palauttamiseksi tilillesi. Ole hyvä ja klikkaa alla olevaa painiketta jatkaaksesi prosessia. Mikäli et ole tehnyt tätä pyyntöä, voit jättää tämän sähköpostin huomiotta, mutta nyt voisi olla hyvä hetki tarkistaa turvallisuusasetuksesi.',
    'email.resetPassword.button': 'Palauta salasana',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Olemme iloisia, että olet mukana! Ole hyvä ja klikkaa alla olevaa painiketta vahvistaaksesi tämän sähköpostiosoitteen.',
    'email.verifyEmail.button': 'Vahvista tämä sähköpostiosoite',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Tilisi on päivitetty',
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