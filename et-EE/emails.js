/**
 * @authors Jan Dvorak
 */
/* eslint-disable max-len */
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
    'email.enrollAccount.messageHtml': 'Soovime sind kutsuda Kirjanduslikku Universumisse! Oleme sinu jaoks juba ette valmistanud personaalse konto, kus saad ligi kõikidele Kirjandusliku Universumi funktsioonidele! Palun ühine meiega, et luua järgmine põlvkond loovkirjutamise ja lugemise vahendeid!',
    'email.enrollAccount.button': 'Ligipääs oma kontole',
    'email.enrollAccount.signature': 'Ootame teid põnevusega,<br />Literary Universe\'i meeskond',
    // Reset password
    'email.resetPassword.messageHtml': 'Oleme saanud taotluse teie konto parooli lähtestamiseks. Palun klõpsake allpool oleval nupul, et jätkata protsessi. Kui te ei ole seda taotlust teinud, võite selle e-kirja ignoreerida, kuid võiks olla hea aeg üle vaadata oma turvasätted.',
    'email.resetPassword.button': 'Lähtesta parool',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Oleme rõõmsad, et teid pardal on! Palun klõpsake allpool oleval nupul, et kinnitada selle e-posti aadressi.',
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
};    /* eslint-enable max-len */