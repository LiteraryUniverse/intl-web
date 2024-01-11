/**
 * @authors Jan Dvorak
 */
/* eslint-disable max-len */
export default {
    'email.enrollAccount.subject': 'Imbitasyon sa Literary Universe para kay {username}',
    'email.enrollAccount.message': `Kamusta {username}\n\n
    ! Nais naming imbitahan ka sa Literary Universe! Nag-create kami ng espesyal na personal na account para sa iyo kung saan maaari mong ma-access ang lahat ng mga tampok ng Literary Universe! Sumali sa amin sa paglikha ng susunod na henerasyon ng mga tool sa malikhain at pagbabasa!
    Upang i-activate ang iyong account, i-click lamang ang link sa ibaba:\n\n{url}`,
    'email.resetPassword.subject': 'Reset ng Password sa Literary Universe',
    'email.resetPassword.message': `Kamusta {username}!\n\n Natanggap namin ang kahilingan na i-reset ang iyong password para sa iyong account.
        Mangyaring sundan ang link sa ibaba upang i-reset ang iyong password:\n\n{url}`,
    'email.verifyEmail.subject': 'Pagpapatunay ng E-mail sa Literary Universe',
    'email.verifyEmail.message': 'Kamusta {username}!\n\n Mangyaring patunayan ang iyong e-mail address sa pamamagitan ng pag-click sa link sa ibaba:\n\n{url}',
    // New html email keys
    'email.salutation': 'Kamusta {username},',
    'email.welcome': 'Maligayang pagdating sa Literary Universe!',
    'email.signature': 'Buong katapatan,<br />Literary Universe team',
    // Enrollment
    'email.enrollAccount.welcome': 'Maligayang pagdating sa Literary Universe!',
    'email.enrollAccount.messageHtml': 'Nais naming imbitahan ka sa Literary Universe! Kami ay naghanda ng personal na account para sa iyo kung saan maaari mong ma-access ang lahat ng mga tampok ng Literary Universe! Sumali sa amin sa paglikha ng susunod na henerasyon ng malikhain at pagbabasa!',
    'email.enrollAccount.button': 'Buksan ang iyong account',
    'email.enrollAccount.signature': 'We are looking forward to see you,<br />Literary Universe team',
    // Reset password
    'email.resetPassword.messageHtml': 'Nakatanggap kami ng kahilingan na i-reset ang iyong password para sa iyong account, mangyaring i-click ang button sa ibaba upang magpatuloy sa proseso. Kung hindi mo ginawa ang kahilingang ito, maaari mong ipagwalang-bahala ang e-mail na ito, ngunit maaaring ito ang tamang panahon upang tingnan ang iyong mga setting sa seguridad.',
    'email.resetPassword.button': 'I-reset ang password',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Maligaya kami na ikaw ay sumali! Mangyaring i-click ang button sa ibaba upang patunayan ang e-mail address na ito.',
    'email.verifyEmail.button': 'Patunayan ang e-mail address na ito',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Ang iyong account ay na-upgrade',
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