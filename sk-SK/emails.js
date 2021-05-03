/**
 * @authors Jan Dvorak
 */
/* eslint-disable max-len */
export default {
    'email.enrollAccount.subject': 'Pozvánka do Literary Universe pre {username}',
    'email.enrollAccount.message': `Ahoj {username}\n\n
    Radi by sme Vás pozvali do Literary Universe! Vytvorili sme pre vás špeciálne osobné konto, kde máte prístup ku všetkým funkciám Literary Universe! Pridajte sa k nám pri vytváraní novej generácie nástrojov na tvorivé písanie a čítanie!
    Ak chcete aktivovať svoje konto, jednoducho kliknite na odkaz nižšie:\n\n{url}`,
    'email.resetPassword.subject': 'Literary Universe resetovanie hesla',
    'email.resetPassword.message': `Dobrý deň, {username}!\n\n Dostali sme žiadosť o obnovenie hesla k vášmu kontu.
        Pre obnovenie hesla prosím postupujte podľa nasledujúceho odkazu:\n\n{url}`,
    'email.verifyEmail.subject': 'Overenie e-mailu Literary Universe',
    'email.verifyEmail.message': 'Ahoj {username}!\n\n Prosím, overte svoju e-mailovú adresu kliknutím na odkaz nižšie:\n\n{url}',
    // New html email keys
    'email.salutation': 'Dobrý deň, {username},',
    'email.welcome': 'Vitajte v Literary Universe!',
    'email.signature': 'S úctou,<br />Tím Literary Universe',
    // Enrollment
    'email.enrollAccount.welcome': 'Vitajte na palube',
    'email.enrollAccount.messageHtml': 'Radi by sme vás pozvali do Literary Universe! Pripravili sme pre vás osobný účet, kde máte prístup ku všetkým funkciám Literárneho vesmíru! Pridajte sa k nám pri vytváraní novej generácie tvorivého písania a čítania!',
    'email.enrollAccount.button': 'Prístup k vášmu účtu',
    'email.enrollAccount.signature': 'Tešíme sa na vás,<br />Tím Literary Universe',
    // Reset password
    'email.resetPassword.messageHtml': 'Dostali sme žiadosť o obnovenie hesla k vášmu účtu, kliknite na tlačidlo nižšie a pokračujte v procese. Ak ste túto žiadosť nepodali, môžete tento e-mail ignorovať, ale možno je vhodný čas skontrolovať svoje bezpečnostné nastavenia.',
    'email.resetPassword.button': 'Obnovenie hesla',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Sme radi, že ste sa k nám pripojili! Kliknutím na tlačidlo nižšie overíte túto e-mailovú adresu.',
    'email.verifyEmail.button': 'Overenie tejto e-mailovej adresy',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Váš účet bol upgradovaný',
    'email.adminUpgrade.message': `Váš účet sme aktualizovali na {plan, select,
    explorer {Prieskumník}
    adventurer {Dobrodruh}
    storyteller {Rozprávač}
  } úroveň na najbližšie {days} dni.\n\nUžívajte si to,\nLiterary Universe tím`,
    'email.adminUpgrade.messageHtml': `Váš účet sme aktualizovali na {plan, select,
    explorer {Prieskumník}
    adventurer {Dobrodruh}
    storyteller {Rozprávač}
  } úroveň na najbližšie {days} dni.\n\nUžívajte si to!`,
    'email.verification': 'Overenie e-mailu',
    'email.verifying': 'Overenie vášho e-mailu. Zaberie to len chvíľu...',
    'email.verified': 'Skvelé správy! Váš e-mail bol overený!'
};    /* eslint-enable max-len */