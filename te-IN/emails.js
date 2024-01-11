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
    'email.enrollAccount.signature': 'మీకు కలవడానికి కోసం కోరుకుంటున్నాము,<br />లిటరరీ యూనివర్స్ టీమ్',
    // Reset password
    'email.resetPassword.messageHtml': 'మీ ఖాతాకు మీ పాస్వర్డ్ రీసెట్ చేయడానికి మేము ఒక అభ్యర్థన పొందాము, దయచేసి ప్రారంభించే ప్రాసెస్ కొరకు క్రింది బటన్‌ను క్లిక్ చేయండి. మీరు ఈ అభ్యర్థన చేసినట్లయితే, మీరు ఈ ఇమెయిల్‌ని నిరాకరించగలరు, కానీ మీ భద్రతా సెట్టింగ్‌లను సవిశేషంగా సమీక్షించడం ఒక మంచి సమయంలో ఉంటుంది.',
    'email.resetPassword.button': 'పాస్వర్డ్ రీసెట్ చేయండి',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'మనం మీకు గుండెలో ఉండటం సంతోషంగా ఉంది! దయచేసి ఈ ఇమెయిల్ చిరునామాను ధృవీకరించే క్రింది బటన్‌ను క్లిక్ చేయండి.',
    'email.verifyEmail.button': 'ఈ ఇమెయిల్ చిరునామాను ధృవీకరించు',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'మీ ఖాతాను నవీకరించారు',
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