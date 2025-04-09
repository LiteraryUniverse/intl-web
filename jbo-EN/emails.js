/**
 * @authors Jan Dvorak
 */
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
    'email.enrollAccount.messageHtml': 'We would like to invite you to Literary Universe! We went ahead and prepared a personal account for you where you can access all features of Literary Universe. Please join us in creating the next generation of creative writing and reading!',
    'email.enrollAccount.button': '.i pilno lo do za\'u reno cevni',
    'email.enrollAccount.signature': 'We are looking forward to seeing you,<br />Literary Universe team',
    // Reset password
    'email.resetPassword.messageHtml': 'We have received a request to reset your password for your account. Please click on the button below to continue the process. If you haven\'t made this request, you can ignore this e-mail, but it might be a good time to review your security settings.',
    'email.resetPassword.button': 'cnino japyvla',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'We are happy to have you on board! Please click the button below to verify this e-mail address.',
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
    'email.verification': '.i-meil. ciska',
    'email.verifying': '.i-meil. ciska ko\'a. ca\'o zukte',
    'email.verified': 'ca\'o xamgu! .i-meil. ciska ko\'a cu cunso'
};