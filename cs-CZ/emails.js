/**
 * @authors Jan Dvorak
 */
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
    'email.enrollAccount.messageHtml': 'Rádi bychom vás pozvali do Literárního vesmíru! Připravili jsme pro vás osobní účet, kde máte přístup ke všem funkcím Literárního vesmíru. Připojte se k nám a vytvořte novou generaci tvůrčího psaní a čtení!',
    'email.enrollAccount.button': 'Zpřístupnit účet',
    'email.enrollAccount.signature': 'Těšíme se na vás,<br />Literary Universe team',
    // Reset password
    'email.resetPassword.messageHtml': 'Obdrželi jsme žádost o obnovení hesla k vašemu účtu. Pro pokračování v procesu klikněte na tlačítko níže. Pokud jste tuto žádost nepodali, můžete tento e-mail ignorovat, ale možná je vhodný čas zkontrolovat nastavení zabezpečení.',
    'email.resetPassword.button': 'Resetovat heslo',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Jsme rádi, že jste se k nám připojili! Klikněte prosím na tlačítko níže pro ověření této e-mailové adresy.',
    'email.verifyEmail.button': 'Potvrzení e-mailové adresy',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Váš účet byl upgradován',
    'email.adminUpgrade.message': `Upgradovali jsme Váš účet na {plan, select,
    explorer {Explorer}
    adventurer {Adventurer}
    storyteller {Storyteller}
    other {}
  } plán na následujících {days} dní.\n\n
S přáním hezkého dne,\n
Literary Universe tým`,
    'email.adminUpgrade.messageHtml': `Upgradovali jsme Váš účet na {plan, select,
    explorer {Explorer}
    adventurer {Adventurer}
    storyteller {Storyteller}
    other {}
  } plán na následujících {days} dní.`,
    'email.verification': 'Ověření emailu',
    'email.verifying': 'Ověřování Vašeho e-mailu. Tohle může chvilku trvat...',
    'email.verified': 'Skvělá zpráva! Váš e-mail byl ověřen!'
};