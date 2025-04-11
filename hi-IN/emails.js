/**
 * @authors Jan Dvorak
 */
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
    'email.enrollAccount.messageHtml': 'We would like to invite you to Literary Universe! We went ahead and prepared a personal account for you where you can access all features of Literary Universe. Please join us in creating the next generation of creative writing and reading!',
    'email.enrollAccount.button': 'अपने खाते में पहुंचें',
    'email.enrollAccount.signature': 'We are looking forward to seeing you,<br />Literary Universe team',
    // Reset password
    'email.resetPassword.messageHtml': 'We have received a request to reset your password for your account. Please click on the button below to continue the process. If you haven\'t made this request, you can ignore this e-mail, but it might be a good time to review your security settings.',
    'email.resetPassword.button': 'पासवर्ड रीसेट करें',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'We are happy to have you on board! Please click the button below to verify this e-mail address.',
    'email.verifyEmail.button': 'इस ईमेल पते की पुष्टि करें',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'आपका खाता अपग्रेड किया गया है',
    'email.adminUpgrade.message': `हमने आपके खाते को अपग्रेड कर दिया है {plan, select,
    explorer {एक्सप्लोरर}
    adventurer {एडवेंचरर}
    storyteller {स्टोरीटेलर}
    other {}
  } टियर अगले {days} दिनों तक।\n\nआनंद लें,\nलिट्रेरी यूनिवर्स टीम`,
    'email.adminUpgrade.messageHtml': `हमने आपके खाते को अपग्रेड कर दिया है {plan, select,
    explorer {एक्सप्लोरर}
    adventurer {एडवेंचरर}
    storyteller {स्टोरीटेलर}
    other {}
  } टियर अगले {days} दिनों तक। आनंद लें!`,
    'email.verification': 'ईमेल सत्यापन',
    'email.verifying': 'आपके ईमेल की सत्यापन की जा रही है। यह कुछ क्षण लगेगा...',
    'email.verified': 'बधाई हो! आपके ईमेल की सत्यापन हो गयी है!'
};