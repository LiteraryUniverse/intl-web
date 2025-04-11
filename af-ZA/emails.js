/**
 * @authors Jan Dvorak
 */
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
    'email.enrollAccount.messageHtml': 'We would like to invite you to Literary Universe! We went ahead and prepared a personal account for you where you can access all features of Literary Universe. Please join us in creating the next generation of creative writing and reading!',
    'email.enrollAccount.button': 'Kry toegang tot jou rekening',
    'email.enrollAccount.signature': 'We are looking forward to seeing you,<br />Literary Universe team',
    // Reset password
    'email.resetPassword.messageHtml': 'We have received a request to reset your password for your account. Please click on the button below to continue the process. If you haven\'t made this request, you can ignore this e-mail, but it might be a good time to review your security settings.',
    'email.resetPassword.button': 'Herstel wagwoord',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'We are happy to have you on board! Please click the button below to verify this e-mail address.',
    'email.verifyEmail.button': 'Verifieer hierdie e-posadres',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Jou rekening is opgegradeer',
    'email.adminUpgrade.message': `Ons het jou rekening opgradeer na {plan, select,
    explorer {Ontdekker}
    adventurer {Avonturier}
    storyteller {Storieverteller}
    other {}
  } vlak vir die volgende {days} dae.\n\nGeniet dit,\nLiterary Universe-span`,
    'email.adminUpgrade.messageHtml': `Ons het jou rekening opgradeer na {plan, select,
    explorer {Ontdekker}
    adventurer {Avonturier}
    storyteller {Storieverteller}
    other {}
  } vlak vir die volgende {days} dae. Geniet dit!`,
    'email.verification': 'E-pos verifikasie',
    'email.verifying': 'Verifieer jou e-pos. Dit sal net \'n oomblik neem...',
    'email.verified': 'Goeie nuus! Jou e-pos is geverifieer!'
};