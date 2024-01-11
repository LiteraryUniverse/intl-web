/**
 * @authors Jan Dvorak
 */
/* eslint-disable max-len */
export default {
    'email.enrollAccount.subject': 'Inbjudan till Literary Universe för {username}',
    'email.enrollAccount.message': `Hej {username}\n\n
    Vi skulle vilja bjuda in dig till Literary Universe! Vi har skapat ett speciellt personligt konto för dig där du kan få tillgång till alla funktioner i Literary Universe! Var med oss och skapa nästa generation av verktyg för kreativt skrivande och läsning!
    För att aktivera ditt konto, klicka bara på länken nedan:\n\n{url}`,
    'email.resetPassword.subject': 'Återställning av lösenord för Literary Universe',
    'email.resetPassword.message': `Hej {username}!\n\n Vi har fått en begäran om att återställa ditt lösenord för ditt konto.
        Var god följ länken nedan för att återställa ditt lösenord:\n\n{url}`,
    'email.verifyEmail.subject': 'E-postverifiering för Literary Universe',
    'email.verifyEmail.message': 'Hej {username}!\n\n Var god verifiera din e-postadress genom att klicka på länken nedan:\n\n{url}',
    // New html email keys
    'email.salutation': 'Hej {username},',
    'email.welcome': 'Välkommen till Literary Universe!',
    'email.signature': 'Med vänliga hälsningar,<br />Literary Universe-teamet',
    // Enrollment
    'email.enrollAccount.welcome': 'Välkommen ombord',
    'email.enrollAccount.messageHtml': 'Vi skulle vilja bjuda in dig till Literary Universe! Vi har gått vidare och förberett ett personligt konto för dig där du kan få tillgång till alla funktioner i Literary Universe! Var med oss och skapa nästa generation av kreativt skrivande och läsning!',
    'email.enrollAccount.button': 'Få tillgång till ditt konto',
    'email.enrollAccount.signature': 'Vi ser fram emot att se dig,<br />Literary Universe-teamet',
    // Reset password
    'email.resetPassword.messageHtml': 'Vi har fått en begäran om att återställa ditt lösenord för ditt konto, klicka på knappen nedan för att fortsätta processen. Om du inte har gjort denna begäran kan du ignorera detta e-postmeddelande, men det kan vara en bra tid att granska dina säkerhetsinställningar.',
    'email.resetPassword.button': 'Återställ lösenord',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Vi är glada att ha dig ombord! Klicka på knappen nedan för att verifiera denna e-postadress.',
    'email.verifyEmail.button': 'Verifiera denna e-postadress',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Ditt konto har uppgraderats',
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