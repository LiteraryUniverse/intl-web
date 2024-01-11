/**
 * @authors Jan Dvorak
 */
/* eslint-disable max-len */
export default {
    'email.enrollAccount.subject': 'कविता बिश्वमा स्वागत गर्न आमन्त्रण! {username}',
    'email.enrollAccount.message': `नमस्ते {username}\n\n
    हामीले तपाईंलाई कविता बिश्वमा आमन्त्रण गर्न चाहान्छौं! हामीले तपाईंको लागि एक विशेष व्यक्तिगत खाता सिर्जना गरेका छौं जहाँ तपाईंले कविता बिश्वका सबै सुविधाहरूमा पहुँच प्राप्त गर्न सक्नुहुन्छ! कृपया हामीले सृजनात्मक लेखन र पठन उपकरणको अगाडीको पीडीएफ बनाउँदा हामीसँग साझा होइनुहोस्!
    तपाईंको खाता सक्रिय गर्नका लागि, कृपया तलको लिंकमा क्लिक गर्नुहोस्:\n\n{url}`,
    'email.resetPassword.subject': 'कविता बिश्वको पासवर्ड रीसेट',
    'email.resetPassword.message': `Hello {username}!\n\n We have received a request to reset your password for your account.
        Please follow the link bellow to reset your password:\n\n{url}`,
    'email.verifyEmail.subject': 'कविता बिश्वको ईमेल प्रमाणिकरण',
    'email.verifyEmail.message': 'नमस्ते {username}!\n\n कृपया तपाईंको ईमेल ठेगाना प्रमाणित गर्नको लागि तलको लिंकमा क्लिक गर्नुहोस्:\n\n{url}',
    // New html email keys
    'email.salutation': 'नमस्ते {username},',
    'email.welcome': 'कविता बिश्वमा स्वागत छ!',
    'email.signature': 'सधैं सत्य,<br />कविता बिश्व टोली',
    // Enrollment
    'email.enrollAccount.welcome': 'स्वागत छ',
    'email.enrollAccount.messageHtml': 'हामीले तपाईंलाई कविता बिश्वमा आमन्त्रण गर्न चाहान्छौं! हामीले तपाईंको लागि एक व्यक्तिगत खाता सिर्जना गरेका छौं जहाँ तपाईंले कविता बिश्वका सबै सुविधाहरूमा पहुँच प्राप्त गर्न सक्नुहुन्छ! कृपया हामीले सृजनात्मक लेखन र पठनमा सहभागी होइनुहोस्!',
    'email.enrollAccount.button': 'तपाईंको खातामा पहुँच गर्नुहोस्',
    'email.enrollAccount.signature': 'हामीले तपाईंलाई देख्ने उत्सुक छौं,<br />कथाकारी ब्रह्माण्ड टोली',
    // Reset password
    'email.resetPassword.messageHtml': 'तपाईंको खाताको पासवर्ड रिसेट गर्नका लागि हामीलाई एक अनुरोध प्राप्त भयो, कृपया प्रक्रिया सुरु राख्नका लागि तलको बटनमा क्लिक गर्नुहोस्। यदि तपाईंले यो अनुरोध नगरेको छन् भने तपाईं यो ईमेललाई अनदेखि गर्न सक्नुहुन्छ, तर यसलाई तपाईंको सुरक्षा सेटिङहरूलाई समीक्षा गर्ने राम्रो समय हुन सक्छ।',
    'email.resetPassword.button': 'पासवर्ड रिसेट गर्नुहोस्',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'हामीले तपाईंलाई स्वागत गर्दछौं! कृपया यो ईमेल ठेगानालाई सत्यापित गर्नका लागि तलको बटनमा क्लिक गर्नुहोस्।',
    'email.verifyEmail.button': 'यो ईमेल ठेगाना सत्यापित गर्नुहोस्',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'तपाईंको खाता अपग्रेड गरिएको छ',
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