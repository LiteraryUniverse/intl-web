/**
 * @authors Jan Dvorak
 */
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
    'email.enrollAccount.messageHtml': 'Запрошуємо вас до Літературного Всесвіту! Ми заздалегідь підготували для вас особистий кабінет, де ви зможете отримати доступ до всіх можливостей Літературного Всесвіту. Приєднуйтесь до нас у створенні нового покоління творчих письменників та читачів!',
    'email.enrollAccount.button': 'Доступ до свого облікового запису',
    'email.enrollAccount.signature': 'З нетерпінням чекаємо на зустріч з вами, команда<br />Літературного Всесвіту',
    // Reset password
    'email.resetPassword.messageHtml': 'Ми отримали запит на зміну паролю до вашого облікового запису. Будь ласка, натисніть на кнопку нижче, щоб продовжити процес. Якщо ви не робили цього запиту, ви можете проігнорувати цей лист, але це може бути гарним моментом для перегляду ваших налаштувань безпеки.',
    'email.resetPassword.button': 'Змінити пароль',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Ми раді бачити вас на борту! Будь ласка, натисніть кнопку нижче, щоб підтвердити цю адресу електронної пошти.',
    'email.verifyEmail.button': 'Підтвердіть цю адресу електронної пошти',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Ваш обліковий запис оновлено',
    'email.adminUpgrade.message': `Ми оновили ваш обліковий запис до звання {plan, select,
    explorer {Дослідник}
    adventurer {Шукач пригод}
    storyteller {Оповідач}
    other {}
  } на наступні {days} днів.\n\nХай щастить,\nкоманда Літературного Всесвіту`,
    'email.adminUpgrade.messageHtml': `Ми оновили ваш обліковий запис до звання {plan, select,
    explorer {Дослідник}
    adventurer {Шукач пригод}
    storyteller {Оповідач}
    other {}
  } на наступні {days} днів. Хай щастить!`,
    'email.verification': 'Верифікація електронної пошти',
    'email.verifying': 'Верифікація електронної пошти. Це займе всього хвилину...',
    'email.verified': 'Чудові новини! Вашу електронну пошту підтверджено!',
    // The Way (Author Level Up)
    'theWay.levelUp.emailSubject': 'Вітаємо! Ви досягли рівня автора {level} на Літературному Всесвіті!',
    'theWay.levelUp.emailTitle': 'Вітаємо! Ви досягли рівня автора {level}!',
    'theWay.levelUp.emailIntro': 'Ваша відданість письменницькому ремеслу була винагороджена!',
    'theWay.levelUp.emailGenre': 'Ви досягли рівня {level} у жанрі {genre} .',
    'theWay.levelUp.emailContinue': 'Продовжуйте свою подорож і відкривайте більше досягнень на Шляху автора.',
    'theWay.levelUp.viewDashboard': 'Перегляньте свою інформаційну панель',
    // Notifications - General content comment
    'email.notifications.contentComment.subject': 'Новий коментар до вашого вмісту',
    'email.notifications.contentComment.title': 'Новий коментар на вашому {contentType}',
    'email.notifications.contentComment.details': 'Назва: {contentTitle} - Від: {commenterName}',
    'email.notifications.contentComment.cta': 'Переглянути коментар',
    // Notifications - Beta reader comment
    'email.notifications.betaComment.subject': 'Нові відгуки бета-читачів',
    'email.notifications.betaComment.title': 'Нові відгуки бета-читачів',
    'email.notifications.betaComment.details': 'Історія: {storyTitle}{chapter} - Від: {commenterName}',
    'email.notifications.betaComment.cta': 'Переглянути відгуки',
    // Notifications - New message
    'email.notifications.newMessage.subject': 'У вас нове повідомлення',
    'email.notifications.newMessage.title': 'У вас нове повідомлення',
    'email.notifications.newMessage.details': 'Звідки? {senderName}',
    'email.notifications.newMessage.cta': 'Переглянути повідомлення',
    // Notifications - Chapter published
    'email.notifications.chapterPublished.subject': 'Опубліковано нову главу',
    'email.notifications.chapterPublished.title': 'Опубліковано нову главу',
    'email.notifications.chapterPublished.details': 'Історія: {storyTitle} - Розділ: {chapterTitle}{suffix}',
    'email.notifications.chapterPublished.cta': 'Відкритий розділ',
    // Notifications - First story created
    'email.notifications.firstStory.subject': 'Ваша перша історія тут!',
    'email.notifications.firstStory.title': 'Ваша перша історія в прямому ефірі!',
    'email.notifications.firstStory.intro': 'Чудовий початок! Продовжуйте писати і розвивати свій світ за допомогою корисних порад на "Шляху автора".',
    'email.notifications.firstStory.details': 'Історія: {storyTitle}',
    'email.notifications.firstStory.ctaResources': 'Продовжити читання "Шлях автора',
    'email.notifications.firstStory.ctaStory': 'Відкрий свою історію',
    // Notifications - First universe created
    'email.notifications.firstUniverse.subject': 'Вітаємо з першим всесвітом!',
    'email.notifications.firstUniverse.title': 'Вітаємо зі створенням вашого першого всесвіту!',
    'email.notifications.firstUniverse.intro': 'Ваша мандрівка світобудівництва починається. Ось деякі ресурси, які допоможуть вам зробити наступні кроки.',
    'email.notifications.firstUniverse.details': 'Всесвіт: {universeName}',
    'email.notifications.firstUniverse.ctaResources': 'Дослідити шлях автора',
    'email.notifications.firstUniverse.ctaUniverse': 'Відкрий свій всесвіт',
    // Notifications - First chapter published for a story
    'email.notifications.firstChapterPublished.subject': 'Ваш перший розділ опубліковано!',
    'email.notifications.firstChapterPublished.title': 'Перший розділ вашої історії опубліковано!',
    'email.notifications.firstChapterPublished.intro': 'Діліться своїми роботами, збирайте відгуки та не зупиняйтеся на досягнутому.',
    'email.notifications.firstChapterPublished.details': 'Історія: {storyTitle} - Розділ: {chapterTitle}',
    'email.notifications.firstChapterPublished.ctaChapter': 'Відкритий розділ',
    'email.notifications.firstChapterPublished.ctaStory': 'Переглянути історію',
    // Notifications - Story finished
    'email.notifications.storyFinished.subject': 'Вітаємо з завершенням вашої історії!',
    'email.notifications.storyFinished.title': 'Ви зробили це - ваша історія закінчена!',
    'email.notifications.storyFinished.intro': 'Відсвяткуйте цю подію! Подумайте про те, щоб опублікувати, поділитися або надіслати свою історію, щоб охопити більше читачів.',
    'email.notifications.storyFinished.details': 'Історія: {storyTitle}',
    'email.notifications.storyFinished.cta': 'Переглянути свою історію',
    // Notifications - Fan club new subscriber
    'email.notifications.newFanSubscriber.subject': 'Новий підписник фан-клубу',
    'email.notifications.newFanSubscriber.title': 'У вас новий підписник фан-клубу!',
    'email.notifications.newFanSubscriber.details': 'Передплатник: {subscriberName}',
    'email.notifications.newFanSubscriber.cta': 'Переглянути фан-клуб',
    // Notifications - Fan club subscription ended
    'email.notifications.fanUnsubscribed.subject': 'Учасник покинув ваш фан-клуб',
    'email.notifications.fanUnsubscribed.title': 'Учасник покинув ваш фан-клуб',
    'email.notifications.fanUnsubscribed.intro': 'Ми хотіли б повідомити вам про нещодавні зміни. Подумайте про те, щоб поділитися оновленнями або ексклюзивним контентом, щоб підвищити залученість.',
    'email.notifications.fanUnsubscribed.details': 'Колишній учасник: {name}',
    'email.notifications.fanUnsubscribed.cta': 'Відкрити фан-клуб',
    // Notifications - Friend request
    'email.notifications.friendRequest.subject': 'Новий запит на дружбу',
    'email.notifications.friendRequest.title': 'Новий запит на дружбу',
    'email.notifications.friendRequest.details': 'Звідки? {requesterName}',
    'email.notifications.friendRequest.cta': 'Запит на перегляд',
    // Notifications - Collaboration invitation
    'email.notifications.collabInvite.subject': 'Запрошення до співпраці',
    'email.notifications.collabInvite.title': 'Ви отримали запрошення до співпраці',
    'email.notifications.collabInvite.details': 'Запрошувач: {inviterName} - Роль: {role} - Адреса: {targetType} - {targetTitle}',
    'email.notifications.collabInvite.cta': 'Запрошення на огляд',
    // Notifications - Organization invitation
    'email.notifications.orgInvite.subject': 'Запрошення до вступу в організацію',
    'email.notifications.orgInvite.title': 'Запрошуємо вас приєднатися до {orgName}',
    'email.notifications.orgInvite.details': 'Запрошуємо: {inviterName}',
    'email.notifications.orgInvite.cta': 'Запрошення на огляд',
    // Notifications - Daily digest
    'email.notifications.dailyDigest.subject': 'Ваші щоденні оновлення',
    'email.notifications.dailyDigest.title': 'Ваші щоденні оновлення',
    'email.notifications.dailyDigest.intro': 'Ось що сталося сьогодні.',
    'email.notifications.dailyDigest.cta': 'Переглянути всі оновлення',
    'email.notifications.dailyDigest.empty': 'Сьогодні ніяких оновлень.',
    // Notifications - Followed author posted a new blog
    'email.notifications.followedBlogPost.subject': 'Новий запис у блозі від автора, за яким ви стежите',
    'email.notifications.followedBlogPost.title': '{authorName} опублікували новий блог',
    'email.notifications.followedBlogPost.details': 'Назва: {postTitle}',
    'email.notifications.followedBlogPost.cta': 'Читати пост',
    // Notifications - Followed author published new work
    'email.notifications.followedNewWork.subject': 'Нова робота від автора, за яким ви стежите',
    'email.notifications.followedNewWork.title': '{authorName} опублікував новий {workType}',
    'email.notifications.followedNewWork.details': 'Назва: {title}',
    'email.notifications.followedNewWork.cta': 'Вигляд'
};