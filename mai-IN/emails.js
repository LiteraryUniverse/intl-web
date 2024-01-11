/**
 * @authors Jan Dvorak
 */
/* eslint-disable max-len */
export default {
    'email.enrollAccount.subject': '{username}को साहित्यिक ब्रह्माण्डमा आमंत्रण',
    'email.enrollAccount.message': `नमस्ते {username}\n\n
    ! हामीले तपाईंलाई साहित्यिक ब्रह्माण्डमा आमंत्रण गर्न चाहान्छौं! हामीले तपाईंको लागि एउटा विशेष व्यक्तिगत खाता सिर्जना गरेका छौं जहाँ तपाईंले साहित्यिक ब्रह्माण्डका सबै सुविधाहरूमा पहुँच प्राप्त गर्न सक्नुहुन्छ! कृपया हाम्रो सहकार्यमा साहित्यिक लेखन र पठन उपकरणको अगाडीको पीढी सिर्जना गर्न जोडिनुहोस्!
    तपाईंको खातालाई सक्रिय गर्नको लागि, कृपया तलको लिङ्कमा क्लिक गर्नुहोस्:\n\n{url}`,
    'email.resetPassword.subject': 'साहित्यिक ब्रह्माण्डमा पासवर्ड रिसेट गर्नुहोस्',
    'email.resetPassword.message': `Hello {username}!\n\n We have received a request to reset your password for your account.
        Please follow the link bellow to reset your password:\n\n{url}`,
    'email.verifyEmail.subject': 'साहित्यिक ब्रह्माण्डमा ईमेल प्रमाणिकरण',
    'email.verifyEmail.message': 'नमस्ते {username}!\n\n कृपया तलको लिङ्कमा क्लिक गरेर आफ्नो ईमेल ठेगाना प्रमाणित गर्नुहोस्:\n\n{url}',
    // New html email keys
    'email.salutation': 'नमस्ते {username},',
    'email.welcome': 'साहित्यिक ब्रह्माण्डमा स्वागत छ!',
    'email.signature': 'आभारी,<br />साहित्यिक ब्रह्माण्ड टोली',
    // Enrollment
    'email.enrollAccount.welcome': 'स्वागत छ',
    'email.enrollAccount.messageHtml': 'हामीले तपाईंलाई साहित्यिक ब्रह्माण्डमा आमंत्रण गर्न चाहान्छौं! हामीले तपाईंको लागि एउटा व्यक्तिगत खाता सिर्जना गरेका छौं जहाँ तपाईंले साहित्यिक ब्रह्माण्डका सबै सुविधाहरूमा पहुँच प्राप्त गर्न सक्नुहुन्छ! कृपया हाम्रो सहकार्यमा साहित्यिक लेखन र पठन उपकरणको अगाडीको पीढी सिर्जना गर्न जोडिनुहोस्!',
    'email.enrollAccount.button': 'तपाईंको खातामा पहुँच गर्नुहोस्',
    'email.enrollAccount.signature': 'हम आपको देखने की उम्मीद कर रहे हैं,<br />लिटररी यूनिवर्स टीम',
    // Reset password
    'email.resetPassword.messageHtml': 'हमें आपके खाते के लिए आपके पासवर्ड रीसेट करने का एक अनुरोध प्राप्त हुआ है, कृपया प्रक्रिया जारी रखने के लिए नीचे दिए गए बटन पर क्लिक करें। यदि आपने यह अनुरोध नहीं किया है तो आप इस ईमेल को नजरअंदाज कर सकते हैं, लेकिन यह आपके सुरक्षा सेटिंग की समीक्षा करने का एक अच्छा समय हो सकता है।',
    'email.resetPassword.button': 'पासवर्ड रीसेट करें',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'हमें आपको बोर्ड पर खुशी है! कृपया इस ईमेल पते की पुष्टि करने के लिए नीचे दिए गए बटन पर क्लिक करें।',
    'email.verifyEmail.button': 'इस ईमेल पते की पुष्टि करें',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'आपका खाता अपग्रेड कर दिया गया है',
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