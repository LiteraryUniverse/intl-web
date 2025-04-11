/**
 * @authors Jan Dvorak
 */
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
    'email.enrollAccount.messageHtml': 'Haluamme kutsua sinut Literary Universeen! Valmistelimme sinulle henkilökohtaisen tilin, jolla pääset käyttämään kaikkia Literary Universen ominaisuuksia. Tule mukaan luomaan luovan kirjoittamisen ja lukemisen seuraavaa sukupolvea!',
    'email.enrollAccount.button': 'Avaa tilisi',
    'email.enrollAccount.signature': 'Odotamme innolla tapaamistanne,<br />Literary Universe -tiimi.',
    // Reset password
    'email.resetPassword.messageHtml': 'Olemme saaneet pyynnön tilisi salasanan palauttamisesta. Klikkaa alla olevaa painiketta jatkaaksesi prosessia. Jos et ole tehnyt tätä pyyntöä, voit jättää tämän sähköpostiviestin huomiotta, mutta saattaa olla hyvä aika tarkistaa suojausasetuksesi.',
    'email.resetPassword.button': 'Palauta salasana',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Olemme iloisia saadessamme sinut mukaan! Vahvista tämä sähköpostiosoite klikkaamalla alla olevaa painiketta.',
    'email.verifyEmail.button': 'Vahvista tämä sähköpostiosoite',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Tilisi on päivitetty',
    'email.adminUpgrade.message': `Olemme päivittäneet tilisi {plan, select,
    explorer {Explorer}
    adventurer {Seikkailija}
    storyteller {Kertoja}
    other {}
  } tasolle seuraavaksi {days} päiväksi.\n\nNauti,\nLiterary Universe -tiimi`,
    'email.adminUpgrade.messageHtml': `Olemme päivittäneet tilisi {plan, select,
    explorer {Explorer}
    adventurer {Seikkailija}
    storyteller {Kertoja}
    other {}
  } tasolle seuraavaksi {days} päiväksi. Nauti!`,
    'email.verification': 'Sähköpostin vahvistus',
    'email.verifying': 'Vahvistetaan sähköpostiasi. Tämä vie vain hetken...',
    'email.verified': 'Hienoa uutista! Sähköpostisi on vahvistettu!'
};