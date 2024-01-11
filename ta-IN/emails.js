/**
 * @authors Jan Dvorak
 */
/* eslint-disable max-len */
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
    'email.enrollAccount.messageHtml': 'இலக்கண உலகத்திற்கு அழைப்பு வழங்குகிறோம்! நாங்கள் முன்னாள் படைப்பை உருவாக்கி உங்களுக்கு ஒரு தனிப்பட்ட கணக்கை தயவுசெய்து உருவாக்கிவிட்டோம்! தயவுசெய்து எங்களுடன் உருவாக்க மற்றும் படிகாரத்தை உருவாக்க சேருங்கள்!',
    'email.enrollAccount.button': 'உங்கள் கணக்குக்கு அணுகுக',
    'email.enrollAccount.signature': 'உங்களைப் பார்க்க எதிர்பார்க்கிறோம்,<br />இலக்கண உலகம் குழு',
    // Reset password
    'email.resetPassword.messageHtml': 'உங்கள் கணக்கிற்கான கடவுச்சொல் மீளமைப்பு கோரிக்கையை நாங்கள் பெற்றுள்ளோம், தொடர்ந்து செயல்படுத்த தயாராக உள்ள பொத்தானை அழுத்துவதற்கு தயவுசெய்து கீழே உள்ள பட்டனை அழுத்தவும். இந்த கோரிக்கையை நீங்கள் செய்தியாக்கவில்லையெனில், இந்த மின்னஞ்சலை புறக்கணிக்கவும், ஆனால் உங்கள் பாதுகாப்பு அமைப்புகளைப் பரிசீலிக்க ஒரு நல்ல நேரம் இருக்கலாம்.',
    'email.resetPassword.button': 'கடவுச்சொல் மீளமைப்பு',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'உங்களை போதித்துவிட்டதற்கு மிகுந்த மகிழ்ச்சி உள்ளது! தயவுசெய்து இந்த மின்னஞ்சல் முகவரியை சரிபார்க்க கீழே உள்ள பட்டனை அழுத்தவும்.',
    'email.verifyEmail.button': 'இந்த மின்னஞ்சல் முகவரியை சரிபார்க்க',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'உங்கள் கணக்கு மேம்படுத்தப்பட்டுள்ளது',
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