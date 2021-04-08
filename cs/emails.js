/**
 * @authors Jan Dvorak
 */
/* eslint-disable max-len */
export default {
    'email.enrollAccount.subject': 'Pozvánka na Literary Universe pro {username}',
    'email.enrollAccount.message': `Dobrý den {username},\n\n
    Chtěli bychom Vás pozvat na Literary Universe! Vytvořili jsme pro Vás speciální osobní účet na kterém můžete otestovat všechny funkce Literary Universe! Doufáme že s námi budete vytvářet další generaci nástrojů pro kreativní psaní a čtení!
To activate your account, simply click the link below:\n\n{url}`,
    'email.resetPassword.subject': 'Literary Universe reset hesla k účtu',
    'email.resetPassword.message': `Dobrý den {username}!\n\n Obdrželi jsme Váš požadavek na resetování Vašeho hesla.
        Navštivte následující odkaz k dokončení tohoto procesu:\n\n{url}`,
    'email.verifyEmail.subject': 'Literary Universe potvrzení e-mailu',
    'email.verifyEmail.message': 'Dobrý den {username}!\\n\\n Prosím potvrďte tuto e-mailovou adresu návštěvou tohoto odkazu:\\n{url}',
    // New html email keys
    'email.salutation': 'Dobrý den {username},',
    'email.welcome': 'Vítejte na Literary Universe!',
    'email.signature': 'S přáním hezkého dne,<br />Literary Universe tým',
    // Enrollment
    'email.enrollAccount.welcome': 'Vítejte na palubě',
    'email.enrollAccount.messageHtml': 'Rádi by jsme Vás pozvali na Literary Universe! Připravili jsme pro Vás osobní účet s plným přístupek k Literary Universe! Doufáme že se přidáte a pomůžete nám vytvořit další kapitolu v kreativním psaní a čtení!',
    'email.enrollAccount.button': 'Zpřístupnit účet',
    'email.enrollAccount.signature': 'Těšíme se na Vás,<br />Literary Universe tým',
    // Reset password
    'email.resetPassword.messageHtml': 'Obdrželi jsme Váš požadavek na resetování Vašeho hesla, prosím klikněte na tlačítko níže k dokončení tohoto procesu.',
    'email.resetPassword.button': 'Resetovat heslo',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Vítejte na palubě! Pro potvrzení této e-mailové adresy prosím klikněte na tlačítko níže.',
    'email.verifyEmail.button': 'Potvrzení e-mailové adresy',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Váš účet byl upgradován',
    'email.adminUpgrade.message': `Upgradovali jsme Váš účet na {plan, select,
    explorer {Explorer}
    adventurer {Adventurer}
    storyteller {Storyteller}
  } plán na následujících {days} dní.\n\n
S přáním hezkého dne,\n
Literary Universe tým`,
    'email.adminUpgrade.messageHtml': `Upgradovali jsme Váš účet na {plan, select,
    explorer {Explorer}
    adventurer {Adventurer}
    storyteller {Storyteller}
  } plán na následujících {days} dní.`
}    /* eslint-enable max-len */;