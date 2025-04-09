/**
 * @authors Jan Dvorak
 */
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
    'email.enrollAccount.messageHtml': 'Kviečiame į Literatūros visatą! Mes parengėme jums asmeninę paskyrą, kurioje galėsite naudotis visomis "Literary Universe" funkcijomis. Prisijunkite prie mūsų ir kurkite naują kūrybinio rašymo ir skaitymo kartą!',
    'email.enrollAccount.button': 'Pasiekti savo paskyrą',
    'email.enrollAccount.signature': 'Laukiame jūsų,<br />Literatūrinės visatos komanda',
    // Reset password
    'email.resetPassword.messageHtml': 'Gavome prašymą iš naujo nustatyti jūsų paskyros slaptažodį. Norėdami tęsti procesą, spustelėkite toliau esantį mygtuką. Jei tokio prašymo nepateikėte, galite nekreipti dėmesio į šį el. laišką, tačiau galbūt pats laikas peržiūrėti savo saugumo nustatymus.',
    'email.resetPassword.button': 'Atkurti slaptažodį',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Džiaugiamės galėdami jus priimti į savo gretas! Spustelėkite toliau esantį mygtuką, kad patikrintumėte šį el. pašto adresą.',
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
};