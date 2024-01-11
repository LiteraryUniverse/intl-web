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
    'email.enrollAccount.signature': 'გვიამბებთ, რომ გიხდით ხელმეორედ ხელმისაწვდომი,<br />ლიტერატურის უნივერსიტეტის გუნდი',
    // Reset password
    'email.resetPassword.messageHtml': 'მიიღეთ მოთხოვნა თქვენი პაროლის განულებისთვის, გთხოვთ, დააწკაპუნეთ ღილაკზე ქვემოთ, რათა გაგრძელოთ პროცესი. თუ არ განისაზღვრეთ ამ მოთხოვნას, შეგიძლიათ არასაჭიროების შემოწმება, მაგრამ ეს შესაძლებლობაა კარგი დრო თქვენი უსაფრთხოების პარამეტრების განახლებისთვის.',
    'email.resetPassword.button': 'პაროლის განულება',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'გვიამბებთ, რომ გვთავაზობთ თქვენს მიერ არჩეულ პროექტში მონაწილეობას! გთხოვთ, დააწკაპუნოთ ღილაკზე ქვემოთ, რათა დაამოწმოთ ეს ელ-ფოსტის მისამართი.',
    'email.verifyEmail.button': 'ეს ელ-ფოსტის მისამართის დამოწმება',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'თქვენი ანგარიში განახლებულია',
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