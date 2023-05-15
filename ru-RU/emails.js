/**
 * @authors Jan Dvorak
 */
/* eslint-disable max-len */
export default {
    'email.enrollAccount.subject': 'Приглашение в Literary Universe для {username}',
    'email.enrollAccount.message': `Здравствуйте {username}\n\n
    Мы хотели бы пригласить вас в Literary Universe! Мы создали для вас специальную личную учётную запись, где вы можете получить доступ ко всем возможностям Literary Universe! Пожалуйста, присоединяйтесь к нам в создании нового поколения инструментов для творческого письма и чтения!
    Чтобы активировать свою учётную запись, просто нажмите на ссылку ниже:\n\n{url}`,
    'email.resetPassword.subject': 'Literary Universe - сброс пароля',
    'email.resetPassword.message': `Здравствуйте {username}!\n\n Мы получили запрос на сброс пароля для вашей учётной записи.
        Пожалуйста, перейдите по ссылке ниже, чтобы сбросить пароль:\n\n{url}`,
    'email.verifyEmail.subject': 'Literary Universe - подтверждение электронной почты',
    'email.verifyEmail.message': 'Здравствуйте {username}!\n\n Пожалуйста, подтвердите свой адрес электронной почты, перейдя по ссылке ниже:\n\n{url}',
    // New html email keys
    'email.salutation': 'Здравствуйте {username},',
    'email.welcome': 'Добро пожаловать в Literary Universe!',
    'email.signature': 'Искренне ваша,<br />команда Literary Universe',
    // Enrollment
    'email.enrollAccount.welcome': 'Добро пожаловать на борт',
    'email.enrollAccount.messageHtml': 'Мы хотели бы пригласить вас в Literary Universe! Мы подготовили для вас личную учётную запись, где вы сможете получить доступ ко всем возможностям Literary Universe! Пожалуйста, присоединяйтесь к нам в создании нового поколения творческого письма и чтения!',
    'email.enrollAccount.button': 'Перейти к учётной записи',
    'email.enrollAccount.signature': 'Мы с нетерпением ждём встречи с вами,<br />команда Literary Universe',
    // Reset password
    'email.resetPassword.messageHtml': 'Мы получили запрос на сброс пароля для вашей учётной записи, пожалуйста, нажмите на кнопку ниже, чтобы продолжить процесс. Если вы не делали этого запроса, вы можете проигнорировать это письмо, но, возможно, сейчас самое время пересмотреть настройки безопасности.',
    'email.resetPassword.button': 'Сбросить пароль',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Мы рады видеть вас на борту! Пожалуйста, нажмите на кнопку ниже, чтобы подтвердить этот адрес электронной почты.',
    'email.verifyEmail.button': 'Подтвердить адрес электронной почты',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Ваша учётная запись была повышена',
    'email.adminUpgrade.message': `Мы повысили вашу учётную запись до уровня {plan, select,
    explorer {исследователя}
    adventurer {авантюриста}
    storyteller {рассказчика}
    other {}
  } на следующие {days} дн.\n\nНаслаждайтесь,\nкоманда Literary Universe`,
    'email.adminUpgrade.messageHtml': `Мы повысили вашу учётную запись до уровня {plan, select,
    explorer {исследователя}
    adventurer {авантюриста}
    storyteller {рассказчика}
    other {}
  } на следующие {days} дн. Наслаждайтесь!`,
    'email.verification': 'Подтверждение эл. почты',
    'email.verifying': 'Проверка вашей электронной почты. Это займёт всего минуту...',
    'email.verified': 'Отличные новости! Ваш адрес электронной почты был подтверждён!'
};    /* eslint-enable max-len */