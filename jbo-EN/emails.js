/**
 * @authors Jan Dvorak
 */
/* eslint-disable max-len */
export default {
    'email.enrollAccount.subject': 'Invitation to Literary Universe for {username}',
    'email.enrollAccount.message': `.i coi {username}\n\n
    .i mi cilre lo nu do pu'o jivna lo za'u reno cevni! .i mi pu crepu lo se pilno be lo za'u reno cevni pe do .i ko catlu lo te pilno be lo za'u reno cevni be lo nu penmi .i ko penmi mi lo nu pilno lo te pilno be lo za'u reno cevni be lo nu penmi .i .i
    .i lo nu jivna do lo za'u reno cevni cu se akti lo ka klikpa lo slilu .i\n\n{url}`,
    'email.resetPassword.subject': '.i se facki do lo se jivna be lo za\'u reno cevni',
    'email.resetPassword.message': `.i coi {username}!\n\n .i mi pu facki lo se preti be lo nu facki lo se jivna be do lo za'u reno cevni .i
        .i ko se facki lo slilu be lo nu facki lo se preti be lo nu facki lo se jivna be do lo za'u reno cevni .i\n\n{url}`,
    'email.verifyEmail.subject': '.i se jivna be lo nu jai gau krici lo du\'u do pu se ctino lo se preti be lo ka facki lo nu jivna do',
    'email.verifyEmail.message': '.i coi {username}!\n\n .i ko krici lo du\'u do pu se ctino lo se preti be lo ka facki lo nu jivna do lo nu penmi .i\n\n{url}',
    // New html email keys
    'email.salutation': '.i coi {username},',
    'email.welcome': '.i do co\'a jivna lo za\'u reno cevni!',
    'email.signature': '.i cinmo fi lo ka<br />lo se preti be lo ka facki lo nu jivna do lo za\'u reno cevni',
    // Enrollment
    'email.enrollAccount.welcome': '.i co\'a jivna',
    'email.enrollAccount.messageHtml': '.i mi pu cilre lo nu do pu\'o jivna lo za\'u reno cevni! .i mi pu zukte lo se pilno be lo za\'u reno cevni pe do .i ko catlu lo te pilno be lo za\'u reno cevni be lo nu penmi .i ko penmi mi lo nu pilno lo te pilno be lo za\'u reno cevni be lo nu penmi',
    'email.enrollAccount.button': '.i pilno lo do za\'u reno cevni',
    'email.enrollAccount.signature': 'Mi\'e la .ui. cu zvati lo nu do viska,<br />la .ui. se tcidu',
    // Reset password
    'email.resetPassword.messageHtml': 'lo nu do cikre lo se jinvi be do ke\'a cu se klama lo nu do jgari lo japyvla be do, .i ko jai gau kliki lo botpi bau la\'o zoi. bellow .zoi. lo nu cnano lo pruce cu zmadu',
    'email.resetPassword.button': 'cnino japyvla',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Mi\'e la .ui. cu gleki lo nu do klama le daski! .i ko jai gau kliki lo botpi bau la\'o zoi. bellow .zoi. lo nu sruma lo pruce cu zmadu',
    'email.verifyEmail.button': 'sruma lo pruce',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'lo se jinvi be do cu se zbasu',
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