/**
 * @authors Jan Dvorak
 */
/* eslint-disable max-len */
export default {
    'email.enrollAccount.subject': 'Invitation to Literary Universe for {username}',
    'email.enrollAccount.message': `Hello {username}\n\n
    We would like to invite you to Literary Universe! We have created a special personal account for you where you can access all features of Literary Universe! Please join us in creating the next generation of creative writing and reading tools!
    To activate your account, simply click the link below:\n\n{url}`,
    'email.resetPassword.subject': 'Literary Universe reset password',
    'email.resetPassword.message': `Hello {username}!\n\n We have received a request to reset your password for your account.
        Please follow the link bellow to reset your password:\n\n{url}`,
    'email.verifyEmail.subject': 'Literary Universe e-mail verification',
    'email.verifyEmail.message': 'Hello {username}!\n\n Please verify your e-mail address by clicking on the link below:\n\n{url}',
    // New html email keys
    'email.salutation': 'Hello {username},',
    'email.welcome': 'Welcome to Literary Universe!',
    'email.signature': 'Sincerely,<br />Literary Universe team',
    // Enrollment
    'email.enrollAccount.welcome': 'Welcome aboard',
    'email.enrollAccount.messageHtml': 'We would like to invite you to Literary Universe! We went ahead and prepared a personal account for you where you can access all features of Literary Universe! Please join us in creating the next generation of creative writing and reading!',
    'email.enrollAccount.button': 'Access your account',
    'email.enrollAccount.signature': 'We are looking forward to see you,<br />Literary Universe team',
    // Reset password
    'email.resetPassword.messageHtml': 'យើងបានទទួលការស្នើសុំកំណើតឡើងដើម្បីកំណត់ពាក្យសម្ងាត់របស់អ្នកសម្រាប់គណនីរបស់អ្នក, សូមចុចលើប៊ូតុងខាងក្រោមដើម្បីបន្តបន្ទាប់ពីវិញ។ ប្រសិនបើអ្នកមិនបានស្នើសុំការស្នើសុំនេះសូមមេត្តាប្រាប់ពួកគេបន្តិចម្បងនេះទេ, ប៉ុន្តែនេះគឺជាព័ត៌មានល្អប្រសើរសំរាប់អ្នកក្នុងការពិនិត្យការកំណត់សុវត្ថិភាពរបស់អ្នក។',
    'email.resetPassword.button': 'កំណត់ពាក្យសម្ងាត់ឡើងវិញ',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'យើងរីករាយដោយមិនចេញពីកន្លែងផ្សេងទៀតទេ! សូមចុចលើប៊ូតុងខាងក្រោមដើម្បីផ្ទៀងផ្ទាត់អាសយដ្ឋានអ៊ីម៉ែលនេះ។',
    'email.verifyEmail.button': 'ផ្ទៀងផ្ទាត់អាសយដ្ឋានអ៊ីម៉ែលនេះ',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'គណនីរបស់អ្នកត្រូវបានធ្វើបូកបន្តបន្ទាប់',
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