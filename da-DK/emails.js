/**
 * @authors Jan Dvorak
 */
export default {
    'email.enrollAccount.subject': 'Invitation til Literary Universe for {username}',
    'email.enrollAccount.message': `Hej {username}\n\n
    Vi vil gerne invitere dig til Literary Universe! Vi har oprettet en speciel personlig konto til dig, hvor du kan få adgang til alle funktioner i Literary Universe! Vær med til at skabe næste generation af kreative skrive- og læseværktøjer!
    For at aktivere din konto, skal du blot klikke på linket nedenfor:\n\n{url}`,
    'email.resetPassword.subject': 'Literary Universe nulstil adgangskode',
    'email.resetPassword.message': `Hej {username}!\n\n Vi har modtaget en anmodning om at nulstille din adgangskode til din konto.
        Følg venligst linket nedenfor for at nulstille din adgangskode:\n\n{url}`,
    'email.verifyEmail.subject': 'Literary Universe e-mail verifikation',
    'email.verifyEmail.message': 'Hej {username}!\n\n Verificer venligst din e-mailadresse ved at klikke på linket nedenfor:\n\n{url}',
    // New html email keys
    'email.salutation': 'Hej {username},',
    'email.welcome': 'Velkommen til Litterære Universe!',
    'email.signature': 'Venlig hilsen,<br />Literary Universe-teamet',
    // Enrollment
    'email.enrollAccount.welcome': 'Velkommen om bord',
    'email.enrollAccount.messageHtml': 'Vi vil gerne invitere dig til Literary Universe! Vi har allerede oprettet en personlig konto til dig, hvor du kan få adgang til alle funktioner i Literary Universe! Vær med til at skabe næste generation af kreativ skrivning og læsning!',
    'email.enrollAccount.button': 'Få adgang til din konto',
    'email.enrollAccount.signature': 'Vi glæder os til at se dig,<br />Literary Universe-teamet',
    // Reset password
    'email.resetPassword.messageHtml': 'Vi har modtaget en anmodning om at nulstille din adgangskode til din konto. Klik venligst på knappen nedenfor for at fortsætte processen. Hvis du ikke har foretaget denne anmodning, kan du ignorere denne e-mail, men det kan være en god idé at gennemgå dine sikkerhedsindstillinger.',
    'email.resetPassword.button': 'Nulstil adgangskode',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Vi er glade for at have dig med om bord! Klik venligst på knappen nedenfor for at verificere denne e-mail-adresse.',
    'email.verifyEmail.button': 'Verificer denne e-mail-adresse',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Din konto er blevet opgraderet',
    'email.adminUpgrade.message': `Vi har opgraderet din konto til {plan, select,
    explorer {Udforsker}
    adventurer {Eventyrer}
    storyteller {Historiefortæller}
    other {}
  } niveau i de næste {days} dage.\n\nNyd det,\nLiterary Universe team`,
    'email.adminUpgrade.messageHtml': `Vi har opgraderet din konto til {plan, select,
    explorer {Udforsker}
    adventurer {Eventyrer}
    storyteller {Historiefortæller}
    other {}
  } niveau i de næste {days} dage. Nyd det!`,
    'email.verification': 'E-mail verifikation',
    'email.verifying': 'Verificerer din e-mail. Dette vil kun tage et øjeblik...',
    'email.verified': 'Fantastiske nyheder! Din e-mail er blevet verificeret!'
};