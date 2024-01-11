/**
 * @authors Jan Dvorak
 */
/* eslint-disable max-len */
export default {
    'email.enrollAccount.subject': 'Jemputan ke Alam Sastera untuk {username}',
    'email.enrollAccount.message': `Hello {username}\n\n
    Kami ingin menjemput anda ke Alam Sastera! Kami telah mencipta akaun peribadi khas untuk anda di mana anda boleh mengakses semua ciri-ciri Alam Sastera! Sila sertai kami dalam mencipta generasi seterusnya alat penulisan kreatif dan membaca!
    Untuk mengaktifkan akaun anda, sila klik pautan di bawah:\n\n{url}`,
    'email.resetPassword.subject': 'Tetapan semula kata laluan Alam Sastera',
    'email.resetPassword.message': `Hello {username}!\n\n Kami telah menerima permintaan untuk menetapkan semula kata laluan akaun anda.
        Sila ikuti pautan di bawah untuk menetapkan semula kata laluan anda:\n\n{url}`,
    'email.verifyEmail.subject': 'Pengesahan e-mel Alam Sastera',
    'email.verifyEmail.message': 'Hello {username}!\n\n Sila sahkan alamat e-mel anda dengan mengklik pautan di bawah:\n\n{url}',
    // New html email keys
    'email.salutation': 'Hello {username},',
    'email.welcome': 'Selamat datang ke Alam Sastera!',
    'email.signature': 'Salam hormat,<br />pasukan Alam Sastera',
    // Enrollment
    'email.enrollAccount.welcome': 'Selamat datang',
    'email.enrollAccount.messageHtml': 'Kami ingin menjemput anda ke Alam Sastera! Kami telah menyediakan akaun peribadi khas untuk anda di mana anda boleh mengakses semua ciri-ciri Alam Sastera! Sila sertai kami dalam mencipta generasi seterusnya penulisan kreatif dan membaca!',
    'email.enrollAccount.button': 'Akses akaun anda',
    'email.enrollAccount.signature': 'Kami menantikan untuk berjumpa dengan anda, pasukan Literary Universe<br />',
    // Reset password
    'email.resetPassword.messageHtml': 'Kami telah menerima permintaan untuk menetapkan semula kata laluan akaun anda, sila klik pada butang di bawah untuk meneruskan proses ini. Jika anda tidak membuat permintaan ini, anda boleh mengabaikan e-mel ini, tetapi ini mungkin adalah masa yang baik untuk mengkaji semula tetapan keselamatan anda.',
    'email.resetPassword.button': 'Tetapkan semula kata laluan',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Kami gembira mempunyai anda bersama kami! Sila klik butang di bawah untuk mengesahkan alamat e-mel ini.',
    'email.verifyEmail.button': 'Mengesahkan alamat e-mel ini',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Akaun anda telah dinaik taraf',
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