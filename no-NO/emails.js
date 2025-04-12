/**
 * @authors Jan Dvorak
 */
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
    'email.enrollAccount.messageHtml': 'We would like to invite you to Literary Universe! We went ahead and prepared a personal account for you where you can access all features of Literary Universe. Please join us in creating the next generation of creative writing and reading!',
    'email.enrollAccount.button': 'Få tilgang til kontoen din',
    'email.enrollAccount.signature': 'We are looking forward to seeing you,<br />Literary Universe team',
    // Reset password
    'email.resetPassword.messageHtml': 'We have received a request to reset your password for your account. Please click on the button below to continue the process. If you haven\'t made this request, you can ignore this e-mail, but it might be a good time to review your security settings.',
    'email.resetPassword.button': 'Tilbakestill passord',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'We are happy to have you on board! Please click the button below to verify this e-mail address.',
    'email.verifyEmail.button': 'Verifiser denne e-postadressen',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Kontoen din har blitt oppgradert',
    'email.adminUpgrade.message': `Vi har oppgradert kontoen din til {plan, select,
    explorer {Utforsker}
    adventurer {Eventyrer}
    storyteller {Forteller}
    other {}
  } nivå for de neste {days} dagene.\n\nNyt det,\nLiterary Universe-teamet`,
    'email.adminUpgrade.messageHtml': `Vi har oppgradert kontoen din til {plan, select,
    explorer {Utforsker}
    adventurer {Eventyrer}
    storyteller {Forteller}
    other {}
  } nivå for de neste {days} dagene. Nyt det!`,
    'email.verification': 'E-post verifisering',
    'email.verifying': 'Verifisering av din e-post. Dette vil bare ta et øyeblikk...',
    'email.verified': 'Fantastiske nyheter! Din e-post har blitt verifisert!'
};