/**
 * @authors Jan Dvorak
 */
/* eslint-disable max-len */
export default {
    'email.enrollAccount.subject': 'कविता यूनिवर्स के लिए आमंत्रण {username}',
    'email.enrollAccount.message': `नमस्ते {username}\n\n
    हम आपको कविता यूनिवर्स में आमंत्रित करना चाहेंगे! हमने आपके लिए एक विशेष व्यक्तिगत खाता बनाया है जहां आप कविता यूनिवर्स के सभी सुविधाओं तक पहुंच सकते हैं! कृपया हमें रचनात्मक लेखन और पठन उपकरणों की अगली पीढ़ी को बनाने में शामिल हों!
    अपना खाता सक्रिय करने के लिए, बस नीचे दिए गए लिंक पर क्लिक करें:\n\n{url}`,
    'email.resetPassword.subject': 'कविता यूनिवर्स पासवर्ड रीसेट',
    'email.resetPassword.message': `Hello {username}!\n\n We have received a request to reset your password for your account.
        Please follow the link bellow to reset your password:\n\n{url}`,
    'email.verifyEmail.subject': 'कविता यूनिवर्स ईमेल सत्यापन',
    'email.verifyEmail.message': 'नमस्ते {username}!\n\n कृपया नीचे दिए गए लिंक पर क्लिक करके अपना ईमेल पता सत्यापित करें:\n\n{url}',
    // New html email keys
    'email.salutation': 'नमस्ते {username},',
    'email.welcome': 'कविता यूनिवर्स में आपका स्वागत है!',
    'email.signature': 'आभारी,<br />कविता यूनिवर्स टीम',
    // Enrollment
    'email.enrollAccount.welcome': 'स्वागत करते हैं',
    'email.enrollAccount.messageHtml': 'हम आपको कविता यूनिवर्स में आमंत्रित करना चाहेंगे! हमने आपके लिए एक व्यक्तिगत खाता तैयार कर दिया है जहां आप कविता यूनिवर्स के सभी सुविधाओं तक पहुंच सकते हैं! कृपया हमें रचनात्मक लेखन और पठन की अगली पीढ़ी में शामिल हों!',
    'email.enrollAccount.button': 'अपने खाते में पहुंचें',
    'email.enrollAccount.signature': 'हम आपका स्वागत करते हैं,<br />Literary Universe टीम',
    // Reset password
    'email.resetPassword.messageHtml': 'हमें आपके खाते के लिए पासवर्ड रीसेट करने का एक अनुरोध प्राप्त हुआ है, कृपया प्रक्रिया जारी रखने के लिए नीचे दिए गए बटन पर क्लिक करें। यदि आपने यह अनुरोध नहीं किया है तो आप इस ईमेल को नज़रअंदाज़ कर सकते हैं, लेकिन यह आपके सुरक्षा सेटिंग्स की समीक्षा करने का एक अच्छा समय हो सकता है।',
    'email.resetPassword.button': 'पासवर्ड रीसेट करें',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'हमें आपको बोर्ड पर देख कर खुशी हुई! कृपया इस ईमेल पते की पुष्टि करने के लिए नीचे दिए गए बटन पर क्लिक करें।',
    'email.verifyEmail.button': 'इस ईमेल पते की पुष्टि करें',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'आपका खाता अपग्रेड किया गया है',
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