/**
 * @authors Jan Dvorak
 */
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
    'email.enrollAccount.messageHtml': 'We would like to invite you to Literary Universe! We went ahead and prepared a personal account for you where you can access all features of Literary Universe. Please join us in creating the next generation of creative writing and reading!',
    'email.enrollAccount.button': 'तपाईंको खातामा पहुँच गर्नुहोस्',
    'email.enrollAccount.signature': 'We are looking forward to seeing you,<br />Literary Universe team',
    // Reset password
    'email.resetPassword.messageHtml': 'We have received a request to reset your password for your account. Please click on the button below to continue the process. If you haven\'t made this request, you can ignore this e-mail, but it might be a good time to review your security settings.',
    'email.resetPassword.button': 'पासवर्ड रीसेट करें',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'We are happy to have you on board! Please click the button below to verify this e-mail address.',
    'email.verifyEmail.button': 'इस ईमेल पते की पुष्टि करें',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'आपका खाता अपग्रेड कर दिया गया है',
    'email.adminUpgrade.message': `हामीले तपाईंको खाता अपग्रेड गर्यौं {plan, select,
    explorer {खोजीकर्ता}
    adventurer {भ्रमणकर्ता}
    storyteller {कथाकार}
    other {}
  } तहमा अर्को {days} दिनहरूसाथै।\n\nआनन्द लिनुहोस्,\nLiterary Universe टोली`,
    'email.adminUpgrade.messageHtml': `हामीले तपाईंको खाता अपग्रेड गर्यौं {plan, select,
    explorer {खोजीकर्ता}
    adventurer {भ्रमणकर्ता}
    storyteller {कथाकार}
    other {}
  } तहमा अर्को {days} दिनहरूसाथै। आनन्द लिनुहोस्!`,
    'email.verification': 'ईमेल सत्यापन',
    'email.verifying': 'तपाईंको ईमेल सत्यापन गर्दैछौं। यो केही क्षण लिनेछ...',
    'email.verified': 'धेरै रमाइलो खबर! तपाईंको ईमेल सत्यापित भयो!'
};