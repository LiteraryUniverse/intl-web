/**
 * @authors Jan Dvorak
 */
/* eslint-disable max-len */
export default {
    'email.enrollAccount.subject': 'Запрошення приєднатися до спільноти Літературного Всесвіту для {username}',
    'email.enrollAccount.message': `Вітаємо, {username}\n\n
     Запрошуємо вас до Літературного Всесвіту! Ми заздалегідь підготували для вас особистий кабінет, де ви зможете отримати доступ до всіх функцій Літературного Всесвіту! Приєднуйтеся до нас та допоможіть створити наступне покоління майстерних письменників!
     Щоб активувати обліковий запис, просто перейдіть за посиланням нижче:\n\n{url}`,
    'email.resetPassword.subject': 'Скидання паролю до Літературного Всесвіту',
    'email.resetPassword.message': `Вітаємо, {username}!\n\n Ми отримали запит на зміну паролю до вашого облікового запису.
        Будь ласка, перейдіть за посиланням нижче, щоб змінити пароль:\n\n{url}`,
    'email.verifyEmail.subject': 'Верифікація електронної пошти для Літературного Всесвіту',
    'email.verifyEmail.message': 'Привіт, {username}!\n\n Будь ласка, підтвердьте свою електронну адресу, перейшовши за посиланням нижче:\n\n{url}',
    // New html email keys
    'email.salutation': 'Вітаємо, {username}',
    'email.welcome': 'Ласкаво просимо до Літературного Всесвіту!',
    'email.signature': 'З повагою, <br />Команда Літературного Всесвіту',
    // Enrollment
    'email.enrollAccount.welcome': 'Вітаємо на борту',
    'email.enrollAccount.messageHtml': 'Запрошуємо вас до Літературного Всесвіту! Ми заздалегідь підготували для вас особистий кабінет, де ви зможете отримати доступ до всіх функцій Літературного Всесвіту! Приєднуйтеся до нас та допоможіть створити наступне покоління майстерних письменників!',
    'email.enrollAccount.button': 'Доступ до свого облікового запису',
    'email.enrollAccount.signature': 'З нетерпінням чекаємо на вас,<br />команда Літературного Всесвіту',
    // Reset password
    'email.resetPassword.messageHtml': 'Ми отримали запит на зміну паролю до вашого облікового запису, будь ласка, натисніть на кнопку нижче, щоб продовжити. Якщо ви не робили такого запиту, ви можете проігнорувати цей лист та рекомендуємо переглянути ваші налаштування безпеки.',
    'email.resetPassword.button': 'Змінити пароль',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Ми раді бачити вас на борту! Будь ласка, натисніть кнопку нижче, щоб підтвердити цю адресу електронної пошти.',
    'email.verifyEmail.button': 'Підтвердіть цю адресу електронної пошти',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Ваш обліковий запис оновлено',
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
    'email.verification': 'Перевірка електронної пошти',
    'email.verifying': 'Перевірка електронної пошти. Це займе лише мить...',
    'email.verified': 'Відмінна новина! Ваша електронна пошта була перевірена!'
};    /* eslint-enable max-len */