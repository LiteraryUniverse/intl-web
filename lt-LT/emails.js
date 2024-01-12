/**
 * @authors Jan Dvorak
 */
/* eslint-disable max-len */
export default {
    'email.enrollAccount.subject': 'Kvietimas į Literatūrinę Visatą {username}',
    'email.enrollAccount.message': `Sveiki {username}\n\n
    Mes norėtume pakviesti jus į Literatūrinę Visatą! Mes sukūrėme specialią asmeninę paskyrą, kurioje galėsite pasiekti visus Literatūrinės Visatos funkcionalumus! Prašome prisijungti prie mūsų kuriant ateities kūrybinės rašymo ir skaitymo įrankius!
    Norėdami aktyvuoti savo paskyrą, tiesiog spustelėkite žemiau esantį nuorodos adresą:\n\n{url}`,
    'email.resetPassword.subject': 'Literatūrinės Visatos slaptažodžio atkūrimas',
    'email.resetPassword.message': `Sveiki {username}!\n\n Mes gavome prašymą atkurti jūsų paskyros slaptažodį.
        Prašome paspausti žemiau esančią nuorodą, kad atkurtumėte savo slaptažodį:\n\n{url}`,
    'email.verifyEmail.subject': 'Literatūrinės Visatos el. pašto patvirtinimas',
    'email.verifyEmail.message': 'Sveiki {username}!\n\n Prašome patvirtinti savo el. pašto adresą paspaudę žemiau esančią nuorodą:\n\n{url}',
    // New html email keys
    'email.salutation': 'Sveiki {username},',
    'email.welcome': 'Sveiki atvykę į Literatūrinę Visatą!',
    'email.signature': 'Su pagarba,<br />Literatūrinės Visatos komanda',
    // Enrollment
    'email.enrollAccount.welcome': 'Sveiki atvykę į mūsų komandą',
    'email.enrollAccount.messageHtml': 'Mes norėtume pakviesti jus į Literatūrinę Visatą! Mes jau sukūrėme jums asmeninę paskyrą, kurioje galėsite pasiekti visus Literatūrinės Visatos funkcionalumus! Prašome prisijungti prie mūsų kuriant ateities kūrybinės rašymo ir skaitymo įrankius!',
    'email.enrollAccount.button': 'Pasiekti savo paskyrą',
    'email.enrollAccount.signature': 'Mes laukiame Jūsų,<br />Literatinės Visatos komanda',
    // Reset password
    'email.resetPassword.messageHtml': 'Mes gavome prašymą atkurti Jūsų slaptažodį Jūsų paskyrai, prašome paspausti žemiau esantį mygtuką, kad tęstumėte procesą. Jei Jūs nesate padaręs šio prašymo, galite ignoruoti šį el. laišką, tačiau tai gali būti geras laikas peržiūrėti saugumo nustatymus.',
    'email.resetPassword.button': 'Atkurti slaptažodį',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Džiaugiamės, kad Jūs prisijungėte! Prašome paspausti žemiau esantį mygtuką, kad patvirtintumėte šį el. pašto adresą.',
    'email.verifyEmail.button': 'Patvirtinti šį el. pašto adresą',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Jūsų paskyra buvo atnaujinta',
    'email.adminUpgrade.message': `Mes atnaujinome jūsų paskyrą į {plan, select,
    explorer {Tyrinėtojas}
    adventurer {Nuotykių ieškotojas}
    storyteller {Pasakotojas}
    other {}
  } lygį kitoms {days} dienoms.\n\nMėgaukitės,\nLiteratinės Visatos komanda`,
    'email.adminUpgrade.messageHtml': `Mes atnaujinome jūsų paskyrą į {plan, select,
    explorer {Tyrinėtojas}
    adventurer {Nuotykių ieškotojas}
    storyteller {Pasakotojas}
    other {}
  } lygį kitoms {days} dienoms. Mėgaukitės!`,
    'email.verification': 'El. pašto patvirtinimas',
    'email.verifying': 'Patvirtinkite savo el. paštą. Tai užtruks vos akimirką...',
    'email.verified': 'Puiki naujiena! Jūsų el. paštas buvo patvirtintas!'
};    /* eslint-enable max-len */