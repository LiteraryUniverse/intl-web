/**
 * @authors Jan Dvorak
 */
/* eslint-disable max-len */
export default {
    'email.enrollAccount.subject': 'Invitation to Literary Universe for {username}',
    'email.enrollAccount.message': `Hello {username}\n\n
    We would like to invite you to Literary Universe! We have created a special personal account for you where you can access all features of Literary Universe! Please join us in creating the next generation of creative writing and reading tools!
    To activate your account, simply click the link below:\n\n{url}`,
    'email.resetPassword.subject': 'Literary Universe reset password',
    'email.resetPassword.message': `Hello {username}!\n\n We have received a request to reset your password for your account.
        Please follow the link bellow to reset your password:\n\n{url}`,
    'email.verifyEmail.subject': 'Literary Universe e-mail verification',
    'email.verifyEmail.message': 'Hello {username}!\n\n Please verify your e-mail address by clicking on the link below:\n\n{url}',
    // New html email keys
    'email.salutation': 'Hello {username},',
    'email.welcome': 'Welcome to Literary Universe!',
    'email.signature': 'Sincerely,<br />Literary Universe team',
    // Enrollment
    'email.enrollAccount.welcome': 'Welcome aboard',
    'email.enrollAccount.messageHtml': 'We would like to invite you to Literary Universe! We went ahead and prepared a personal account for you where you can access all features of Literary Universe! Please join us in creating the next generation of creative writing and reading!',
    'email.enrollAccount.button': 'Access your account',
    'email.enrollAccount.signature': 'നിങ്ങൾക്ക് കാണാൻ ആഗ്രഹമുണ്ട്,<br />ലിറ്റററി യൂണിവേഴ്‌സ് ടീം',
    // Reset password
    'email.resetPassword.messageHtml': 'നിങ്ങളുടെ അക്കൗണ്ടിനായി നിങ്ങളുടെ പാസ്വേഡ് റീസെറ്റ് ചെയ്യുന്നതിന് ഒരു അഭ്യർത്ഥന ലഭിച്ചു, പ്രോസസ് തുടങ്ങുന്നതിന് ദയവായി ബട്ടൺ അമർത്തുക. ഇത് നിങ്ങൾ ഈ അഭ്യർത്ഥന ചെയ്തതല്ലേയുള്ളൂ എന്നാൽ നിങ്ങളുടെ സുരക്ഷാ ക്രമങ്ങളെ പരിശോധിക്കാൻ ഒരു നല്ല സമയമാണിത്.',
    'email.resetPassword.button': 'പാസ്വേഡ് റീസെറ്റ് ചെയ്യുക',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'നിങ്ങളെ പരിശോധിക്കാൻ ഞങ്ങൾ സന്തുഷ്ടമാണ്! ദയവായി ഈ ഇമെയിൽ വിരിയുകയാണ് ബട്ടൺ അമർത്തുക.',
    'email.verifyEmail.button': 'ഈ ഇമെയിൽ വിരിയുക',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'നിങ്ങളുടെ അക്കൗണ്ട് അപ്‌ഗ്രേഡ് ചെയ്തു',
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