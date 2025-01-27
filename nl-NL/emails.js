/**
 * @authors Jan Dvorak
 */
export default {
    'email.enrollAccount.subject': 'Uitnodiging voor het Literair Universum voor {username}',
    'email.enrollAccount.message': `Hallo {username}\n\n
    We willen je graag uitnodigen voor het Literair Universum! We hebben een speciaal persoonlijk account voor je aangemaakt waar je toegang hebt tot alle functies van het Literair Universum! Doe met ons mee in het creëren van de volgende generatie creatieve schrijf- en leestools!
    Om je account te activeren, klik eenvoudig op de onderstaande link:\n\n{url}`,
    'email.resetPassword.subject': 'Wachtwoord resetten voor het Literair Universum',
    'email.resetPassword.message': `Hallo {username}!\n\n We hebben een verzoek ontvangen om je wachtwoord te resetten voor je account.
        Volg de onderstaande link om je wachtwoord te resetten:\n\n{url}`,
    'email.verifyEmail.subject': 'E-mailverificatie voor het Literair Universum',
    'email.verifyEmail.message': 'Hallo {username}!\n\n Verifieer je e-mailadres door op de onderstaande link te klikken:\n\n{url}',
    // New html email keys
    'email.salutation': 'Hallo {username},',
    'email.welcome': 'Welkom bij het Literair Universum!',
    'email.signature': 'Met vriendelijke groet,<br />Team Literair Universum',
    // Enrollment
    'email.enrollAccount.welcome': 'Welkom aan boord',
    'email.enrollAccount.messageHtml': 'We willen je graag uitnodigen voor het Literair Universum! We hebben alvast een persoonlijk account voor je aangemaakt waar je toegang hebt tot alle functies van het Literair Universum! Doe met ons mee in het creëren van de volgende generatie creatief schrijven en lezen!',
    'email.enrollAccount.button': 'Toegang tot je account',
    'email.enrollAccount.signature': 'We kijken uit naar uw komst,<br />Literary Universe team',
    // Reset password
    'email.resetPassword.messageHtml': 'We hebben een verzoek ontvangen om je wachtwoord voor je account te resetten, klik op de knop hieronder om het proces voort te zetten. Als je dit verzoek niet hebt gedaan, kun je deze e-mail negeren, maar het is misschien een goed moment om je beveiligingsinstellingen te controleren.',
    'email.resetPassword.button': 'Wachtwoord resetten',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'We zijn blij dat je aan boord bent! Klik op de knop hieronder om dit e-mailadres te verifiëren.',
    'email.verifyEmail.button': 'Verifieer dit e-mailadres',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Je account is geüpgraded',
    'email.adminUpgrade.message': `We hebben uw account geüpgraded naar {plan, select,
    explorer {Ontdekkingsreiziger}
    adventurer {Avonturier}
    storyteller {Verhalenverteller}
    other {}
  } niveau voor de komende {days} dagen.\n\nGeniet ervan,\nLiterary Universe team`,
    'email.adminUpgrade.messageHtml': `We hebben uw account geüpgraded naar {plan, select,
    explorer {Ontdekkingsreiziger}
    adventurer {Avonturier}
    storyteller {Verhalenverteller}
    other {}
  } niveau voor de komende {days} dagen. Geniet ervan!`,
    'email.verification': 'E-mail verificatie',
    'email.verifying': 'Uw e-mail verifiëren. Dit duurt slechts een moment...',
    'email.verified': 'Geweldig nieuws! Uw e-mail is geverifieerd!'
};