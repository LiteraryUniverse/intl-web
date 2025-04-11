/**
 * @authors Jan Dvorak
 */
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
    'email.enrollAccount.messageHtml': 'We would like to invite you to Literary Universe! We went ahead and prepared a personal account for you where you can access all features of Literary Universe. Please join us in creating the next generation of creative writing and reading!',
    'email.enrollAccount.button': 'तपाईंको खातामा पहुँच गर्नुहोस्',
    'email.enrollAccount.signature': 'We are looking forward to seeing you,<br />Literary Universe team',
    // Reset password
    'email.resetPassword.messageHtml': 'We have received a request to reset your password for your account. Please click on the button below to continue the process. If you haven\'t made this request, you can ignore this e-mail, but it might be a good time to review your security settings.',
    'email.resetPassword.button': 'पासवर्ड रिसेट गर्नुहोस्',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'We are happy to have you on board! Please click the button below to verify this e-mail address.',
    'email.verifyEmail.button': 'यो ईमेल ठेगाना सत्यापित गर्नुहोस्',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'तपाईंको खाता अपग्रेड गरिएको छ',
    'email.adminUpgrade.message': `हामीले तपाईंको खातालाई अपग्रेड गरेका छौं {plan, select,
    explorer {अन्वेषक}
    adventurer {भ्रमणकारी}
    storyteller {कथाकार}
    other {}
  } तहलाई अर्को {days} दिनहरूको लागि\n\nआनंद लिनुहोस्,\nLiterary Universe टोली`,
    'email.adminUpgrade.messageHtml': `हामीले तपाईंको खातालाई अपग्रेड गरेका छौं {plan, select,
    explorer {अन्वेषक}
    adventurer {भ्रमणकारी}
    storyteller {कथाकार}
    other {}
  } तहलाई अर्को {days} दिनहरूको लागि आनंद लिनुहोस्!`,
    'email.verification': 'ईमेल सत्यापन',
    'email.verifying': 'तपाईंको ईमेल सत्यापन गर्दैछ। यो केहि क्षण समय लिनेछ...',
    'email.verified': 'धेरै रमाइलो खबर! तपाईंको ईमेल सत्यापित भयो!'
};