/**
 * @authors Jan Dvorak
 */
/* eslint-disable max-len */
export default {
    'email.enrollAccount.subject': 'Uitnodiging na die Literêre Heelal vir {username}',
    'email.enrollAccount.message': `Hallo {username}\n\n
    Ons wil jou graag uitnooi na die Literêre Heelal! Ons het 'n spesiale persoonlike rekening vir jou geskep waar jy toegang kan kry tot alle kenmerke van die Literêre Heelal! Sluit asseblief by ons aan om die volgende generasie van skeppende skryf- en leestegnieke te skep!
    Om jou rekening te aktiveer, klik eenvoudig op die skakel hieronder:\n\n{url}`,
    'email.resetPassword.subject': 'Literêre Heelal herstel wagwoord',
    'email.resetPassword.message': `Hallo {username}!\n\n Ons het 'n versoek ontvang om jou wagwoord vir jou rekening te herstel.
        Volg asseblief die skakel hieronder om jou wagwoord te herstel:\n\n{url}`,
    'email.verifyEmail.subject': 'Literêre Heelal e-pos verifikasie',
    'email.verifyEmail.message': 'Hallo {username}!\n\n Verifieer asseblief jou e-posadres deur op die skakel hieronder te klik:\n\n{url}',
    // New html email keys
    'email.salutation': 'Hallo {username},',
    'email.welcome': 'Welkom by die Literêre Heelal!',
    'email.signature': 'Opreg,<br />Literêre Heelal span',
    // Enrollment
    'email.enrollAccount.welcome': 'Welkom aan boord',
    'email.enrollAccount.messageHtml': 'Ons wil jou graag uitnooi na die Literêre Heelal! Ons het \'n persoonlike rekening vir jou voorberei waar jy toegang kan kry tot alle kenmerke van die Literêre Heelal! Sluit asseblief by ons aan om die volgende generasie van skeppende skryf- en leeswerk te skep!',
    'email.enrollAccount.button': 'Kry toegang tot jou rekening',
    'email.enrollAccount.signature': 'Ons sien daarna uit om jou te sien,<br />Literary Universe-span',
    // Reset password
    'email.resetPassword.messageHtml': 'Ons het \'n versoek ontvang om jou wagwoord vir jou rekening te herstel, klik asseblief op die knoppie hieronder om die proses voort te sit. As jy nie hierdie versoek gemaak het nie, kan jy hierdie e-pos ignoreer, maar dit mag \'n goeie tyd wees om jou sekuriteitsinstellings te hersien.',
    'email.resetPassword.button': 'Herstel wagwoord',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Ons is bly om jou aan boord te hê! Klik asseblief op die knoppie hieronder om hierdie e-posadres te verifieer.',
    'email.verifyEmail.button': 'Verifieer hierdie e-posadres',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Jou rekening is opgegradeer',
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