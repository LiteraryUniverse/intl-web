/**
 * @authors Jan Dvorak
 */
export default {
    'email.enrollAccount.subject': 'இலக்கண உலகத்திற்கு அழைப்பு {username}',
    'email.enrollAccount.message': `வணக்கம் {username}\n\n
    நாங்கள் உங்களை இலக்கண உலகத்தில் அழைத்துக்கொண்டுள்ளோம்! நீங்கள் அனைத்து வசதிகளையும் பெறுவதற்கு நம்புகிறோம்! தயவுசெய்து எங்களுடன் முன்னாள் படைப்பை உருவாக்குவதில் சேர்க்கவும்!
    உங்கள் கணக்கை செயல்படுத்த, தயவுசெய்து கீழே உள்ள இணைப்பை கிளிக் செய்யவும்:\n\n{url}`,
    'email.resetPassword.subject': 'இலக்கண உலகத்தில் கடவுச்சொல் மீளமைப்பு',
    'email.resetPassword.message': `வணக்கம் {username}!\n\n உங்கள் கணக்குக்கான கடவுச்சொல் மீளமைப்பு கேட்டுக்கொண்டுள்ளோம்.
        தயவுசெய்து கீழே உள்ள இணைப்பை பின்பற்றி உங்கள் கடவுச்சொல்லை மீளமைக்கவும்:\n\n{url}`,
    'email.verifyEmail.subject': 'இலக்கண உலகத்தில் மின்னஞ்சல் சரிபார்க்கப்பட்டது',
    'email.verifyEmail.message': 'வணக்கம் {username}!\n\n தயவுசெய்து கீழே உள்ள இணைப்பை கிளிக் செய்து உங்கள் மின்னஞ்சல் முகவரியை சரிபார்க்கவும்:\n\n{url}',
    // New html email keys
    'email.salutation': 'வணக்கம் {username},',
    'email.welcome': 'இலக்கண உலகத்தில் வரவேற்பு செய்தல்!',
    'email.signature': 'மிக்க வாழ்த்துக்கள்,<br />இலக்கண உலகத்தின் அணி',
    // Enrollment
    'email.enrollAccount.welcome': 'வரவேற்புக்கு வரவேற்பு',
    'email.enrollAccount.messageHtml': 'We would like to invite you to Literary Universe! We went ahead and prepared a personal account for you where you can access all features of Literary Universe. Please join us in creating the next generation of creative writing and reading!',
    'email.enrollAccount.button': 'உங்கள் கணக்குக்கு அணுகுக',
    'email.enrollAccount.signature': 'We are looking forward to seeing you,<br />Literary Universe team',
    // Reset password
    'email.resetPassword.messageHtml': 'We have received a request to reset your password for your account. Please click on the button below to continue the process. If you haven\'t made this request, you can ignore this e-mail, but it might be a good time to review your security settings.',
    'email.resetPassword.button': 'கடவுச்சொல் மீளமைப்பு',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'We are happy to have you on board! Please click the button below to verify this e-mail address.',
    'email.verifyEmail.button': 'இந்த மின்னஞ்சல் முகவரியை சரிபார்க்க',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'உங்கள் கணக்கு மேம்படுத்தப்பட்டுள்ளது',
    'email.adminUpgrade.message': `உங்கள் கணக்கை மேம்படுத்துகின்றோம் {plan, select,
    explorer {ஆய்வாளர்}
    adventurer {சாயாளர்}
    storyteller {கதைப்பாட்டாளர்}
    other {}
  } அடிப்படைக்கு அடுக்கு இருக்கும் {days} நாட்கள்.\n\nமகிழுங்கள்,\nஇலக்கண உலகு அணி`,
    'email.adminUpgrade.messageHtml': `உங்கள் கணக்கை மேம்படுத்துகின்றோம் {plan, select,
    explorer {ஆய்வாளர்}
    adventurer {சாயாளர்}
    storyteller {கதைப்பாட்டாளர்}
    other {}
  } அடிப்படைக்கு அடுக்கு இருக்கும் {days} நாட்கள். மகிழுங்கள்!`,
    'email.verification': 'மின்னஞ்சல் சரிபார்ப்பு',
    'email.verifying': 'உங்கள் மின்னஞ்சலை சரிபார்க்கின்றோம். இது ஒரு குறிப்பு மட்டம் எடுக்கும்...',
    'email.verified': 'அற்புதமான செய்தி! உங்கள் மின்னஞ்சல் சரிபார்க்கப்பட்டுள்ளது!'
};