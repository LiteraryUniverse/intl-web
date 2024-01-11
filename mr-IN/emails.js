/**
 * @authors Jan Dvorak
 */
/* eslint-disable max-len */
export default {
    'email.enrollAccount.subject': '{username}साठी साहित्यिक विश्वात आमंत्रण!',
    'email.enrollAccount.message': `नमस्कार {username}\n\n
    आम्ही आपले साहित्यिक विश्वात स्वागत करू! आपल्याला साहित्यिक विश्वाच्या सर्व सुविधांची प्रवेशिका असलेले वैयक्तिक खाते तयार केले आहे! कृपया आपल्यासह साहित्यिक लेखन आणि वाचन साधनांची पुढील पीढी तयार करण्यात आमच्यास जोडण्यासाठी आमच्यास सहभागी व्हा!
    आपले खाते सक्रिय करण्यासाठी, कृपया खालील दिलेल्या दुवा वर क्लिक करा:\n\n{url}`,
    'email.resetPassword.subject': 'साहित्यिक विश्वातील संकेतशब्द रीसेट करा',
    'email.resetPassword.message': `नमस्कार {username}!\n\n आपल्या खात्यासाठी आपला संकेतशब्द रीसेट करण्याची विनंती आम्हाला मिळाली आहे.
        कृपया आपला संकेतशब्द रीसेट करण्यासाठी खालील दिलेल्या दुव्यावर क्लिक करा:\n\n{url}`,
    'email.verifyEmail.subject': 'साहित्यिक विश्वाची ईमेल सत्यापन करा',
    'email.verifyEmail.message': 'नमस्कार {username}!\n\n कृपया खालील दिलेल्या दुव्यावर क्लिक करून आपला ईमेल पत्ता सत्यापित करा:\n\n{url}',
    // New html email keys
    'email.salutation': 'नमस्कार {username},',
    'email.welcome': 'साहित्यिक विश्वात आपले स्वागत आहे!',
    'email.signature': 'आभारी,<br />साहित्यिक विश्वाची टीम',
    // Enrollment
    'email.enrollAccount.welcome': 'स्वागत आहोत',
    'email.enrollAccount.messageHtml': 'आपल्यास साहित्यिक विश्वात सामील होण्यासाठी आम्ही आपल्याला आमच्यास वैयक्तिक खाते तयार केले आहे, ज्यामुळे आपण साहित्यिक लेखन आणि वाचनाच्या सर्व सुविधांची वापर करू शकता! कृपया आमच्यास जोडण्यासाठी आपल्याला आमच्यास सहभागी व्हायला आमच्यास आमंत्रित करत आहोत!',
    'email.enrollAccount.button': 'आपले खाते प्रवेश करा',
    'email.enrollAccount.signature': 'आपले दर्शन घेण्यासाठी आम्ही आपले प्रतीक्षा करीत आहोत,<br />लिटररी युनिवर्स टीम',
    // Reset password
    'email.resetPassword.messageHtml': 'आपल्या खात्याचे संकेतशब्द रीसेट करण्यासाठी आम्हाला एक विनंती मिळाली आहे, कृपया प्रक्रिया सुरू ठेवण्यासाठी खात्री करणारे बटणावर क्लिक करा. जर तुम्ही ही विनंती केली नसाल तर तुम्ही ही ईमेल वगळली जाऊ शकते, पण तुमच्या सुरक्षा सेटिंग्जची पुनरावलोकन करण्यासाठी अच्छा वेळ आहे.',
    'email.resetPassword.button': 'संकेतशब्द रीसेट करा',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'आपल्याला बोर्डवर असायला आनंद आहे! कृपया ही ईमेल पत्ता सत्यापित करण्यासाठी खात्री करणारे बटणावर क्लिक करा.',
    'email.verifyEmail.button': 'ही ईमेल पत्ता सत्यापित करा',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'तुमचे खाते अपग्रेड केले गेले आहे',
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