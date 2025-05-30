/**
 * @authors Jan Dvorak
 */
export default {
    'email.enrollAccount.subject': 'Kutse Kirjanduslikku Universumisse {username}',
    'email.enrollAccount.message': `Tere {username}\n\n
    Me soovime sind kutsuda Kirjanduslikku Universumisse! Oleme loonud sulle erilise personaalse konto, kus saad ligi kõikidele Kirjandusliku Universumi funktsioonidele! Palun ühine meiega, et luua järgmine põlvkond loovkirjutamise ja lugemisvahendeid!
    Konto aktiveerimiseks klõpsa lihtsalt allpool oleval lingil:\n\n{url}`,
    'email.resetPassword.subject': 'Kirjandusliku Universumi parooli lähtestamine',
    'email.resetPassword.message': `Tere {username}!\n\n Oleme saanud taotluse sinu parooli lähtestamiseks sinu kontol.
        Palun järgi allpool olevat linki, et lähtestada oma parool:\n\n{url}`,
    'email.verifyEmail.subject': 'Kirjandusliku Universumi e-posti kinnitamine',
    'email.verifyEmail.message': 'Tere {username}!\n\n Palun kinnita oma e-posti aadress, klõpsates allpool oleval lingil:\n\n{url}',
    // New html email keys
    'email.salutation': 'Tere {username},',
    'email.welcome': 'Tere tulemast Kirjanduslikku Universumisse!',
    'email.signature': 'Parimate soovidega,<br />Kirjandusliku Universumi meeskond',
    // Enrollment
    'email.enrollAccount.welcome': 'Tere tulemast pardale',
    'email.enrollAccount.messageHtml': 'Kutsume teid kirjandusuniversumisse! Läksime edasi ja valmistasime teile isikliku konto, kus saate juurdepääsu kõikidele Literary Universe\'i funktsioonidele. Palun ühinege meiega loomingulise kirjutamise ja lugemise järgmise põlvkonna loomisel!',
    'email.enrollAccount.button': 'Ligipääs oma kontole',
    'email.enrollAccount.signature': 'Ootame teid,<br />Kirjandusuniversumi meeskond.',
    // Reset password
    'email.resetPassword.messageHtml': 'Oleme saanud taotluse teie konto parooli lähtestamiseks. Palun klõpsake protsessi jätkamiseks alloleval nupul. Kui te ei ole seda taotlust esitanud, võite seda e-kirja ignoreerida, kuid võib-olla on hea aeg oma turvasätted üle vaadata.',
    'email.resetPassword.button': 'Lähtesta parool',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Meil on hea meel, et sa oled pardal! Palun klõpsa alloleval nupul, et kinnitada seda e-posti aadressi.',
    'email.verifyEmail.button': 'Kinnita see e-posti aadress',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Teie konto on täiustatud',
    'email.adminUpgrade.message': `Oleme uuendanud teie konto {plan, select,
    explorer {Explorer}
    adventurer {Seikleja}
    storyteller {Jutuvestja}
    other {}
  } tasemele järgnevateks {days} päevaks.\n\nNautige,\nLiterary Universe'i meeskond`,
    'email.adminUpgrade.messageHtml': `Oleme uuendanud teie konto {plan, select,
    explorer {Explorer}
    adventurer {Seikleja}
    storyteller {Jutuvestja}
    other {}
  } tasemele järgnevateks {days} päevaks. Nautige!`,
    'email.verification': 'E-posti verifitseerimine',
    'email.verifying': 'Teie e-posti verifitseerimine. See võtab vaid hetke aega...',
    'email.verified': 'Suurepärased uudised! Teie e-post on verifitseeritud!'
};