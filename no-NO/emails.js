/**
 * @authors Jan Dvorak
 */
/* eslint-disable max-len */
export default {
    'email.enrollAccount.subject': 'Invitasjon til Literary Universe for {username}',
    'email.enrollAccount.message': `Hei {username}\n\n
    Vi ønsker å invitere deg til Literary Universe! Vi har opprettet en spesiell personlig konto for deg der du kan få tilgang til alle funksjoner i Literary Universe! Bli med oss ​​i å skape neste generasjon av kreative skrive- og leseverktøy!
    For å aktivere kontoen din, klikk bare på lenken nedenfor:\n\n{url}`,
    'email.resetPassword.subject': 'Literary Universe tilbakestille passord',
    'email.resetPassword.message': `Hei {username}!\n\n Vi har mottatt en forespørsel om å tilbakestille passordet for kontoen din.
        Vennligst følg lenken nedenfor for å tilbakestille passordet ditt:\n\n{url}`,
    'email.verifyEmail.subject': 'Literary Universe e-postbekreftelse',
    'email.verifyEmail.message': 'Hei {username}!\n\n Vennligst bekreft e-postadressen din ved å klikke på lenken nedenfor:\n\n{url}',
    // New html email keys
    'email.salutation': 'Hei {username},',
    'email.welcome': 'Velkommen til Literary Universe!',
    'email.signature': 'Med vennlig hilsen,<br />Literary Universe-teamet',
    // Enrollment
    'email.enrollAccount.welcome': 'Velkommen om bord',
    'email.enrollAccount.messageHtml': 'Vi ønsker å invitere deg til Literary Universe! Vi har allerede opprettet en personlig konto for deg der du kan få tilgang til alle funksjoner i Literary Universe! Bli med oss ​​i å skape neste generasjon av kreativ skriving og lesing!',
    'email.enrollAccount.button': 'Få tilgang til kontoen din',
    'email.enrollAccount.signature': 'Vi ser frem til å se deg,<br />Literary Universe-teamet',
    // Reset password
    'email.resetPassword.messageHtml': 'Vi har mottatt en forespørsel om å tilbakestille passordet for kontoen din. Vennligst klikk på knappen nedenfor for å fortsette prosessen. Hvis du ikke har sendt denne forespørselen, kan du ignorere denne e-posten, men det kan være lurt å gjennomgå sikkerhetsinnstillingene dine.',
    'email.resetPassword.button': 'Tilbakestill passord',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Vi er glade for å ha deg med oss! Vennligst klikk på knappen nedenfor for å verifisere denne e-postadressen.',
    'email.verifyEmail.button': 'Verifiser denne e-postadressen',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Kontoen din har blitt oppgradert',
    'email.adminUpgrade.message': `We have upgraded your account to {plan, select,
    explorer {Explorer}
    adventurer {Adventurer}
    storyteller {Storyteller}
    other {}
  } tier for the next {days} days.\n\nEnjoy,\nLiterary Universe team`,
    'email.adminUpgrade.messageHtml': `We have upgraded your account to {plan, select,
    explorer {Explorer}
    adventurer {Adventurer}
    storyteller {Storyteller}
    other {}
  } tier for the next {days} days. Enjoy!`,
    'email.verification': 'E-mail verification',
    'email.verifying': 'Verifying your e-mail. This will take just a moment...',
    'email.verified': 'Great news! Your e-mail has been verified!'
};    /* eslint-enable max-len */