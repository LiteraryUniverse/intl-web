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
    'email.signature': 'З повагою<br>, команда Літературного Всесвіту</br>',
    'email.footer.settingsHtml': 'Ви можете змінити налаштування електронної пошти в <link>налаштуваннях свого а</link>каунта.',
    // Enrollment
    'email.enrollAccount.welcome': 'Вітаємо на борту',
    'email.enrollAccount.messageHtml': 'Запрошуємо вас до Літературного Всесвіту! Ми заздалегідь підготували для вас особистий кабінет, де ви зможете отримати доступ до всіх можливостей Літературного Всесвіту. Приєднуйтесь до нас у створенні нового покоління творчих письменників та читачів!',
    'email.enrollAccount.button': 'Доступ до свого облікового запису',
    'email.enrollAccount.signature': 'З нетерпінням чекаємо на зустріч з вами<br>, команда Літературного Всесвіту</br>',
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
    'email.adminUpgrade.messageHtml': `Ми оновили ваш акаунт до рівня {plan, select,
    explorer {Дослідник}
    adventurer {Шукач пригод}
    storyteller {Оповідач}
    other {}
  } на найближчі {days, number} дні. Насолоджуйтесь!`,
    'email.verification': 'Верифікація електронної пошти',
    'email.verifying': 'Верифікація електронної пошти. Це займе всього хвилину...',
    'email.verified': 'Чудові новини! Вашу електронну пошту підтверджено!',
    // The Way (Author Level Up)
    'theWay.levelUp.emailSubject': 'Вітаємо! Ви досягли рівня автора {level, number} на Літературному Всесвіті!',
    'theWay.levelUp.emailTitle': 'Вітаємо! Ви досягли рівня автора {level, number}!',
    'theWay.levelUp.emailIntro': 'Ваша відданість письменницькому ремеслу була винагороджена!',
    'theWay.levelUp.emailGenre': 'Ви досягли рівня {level, number} у жанрі {genre} .',
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
    // Notifications - First story published (with level 1 achievement)
    'email.notifications.firstStoryPublished.subject': '🎉 Вітаємо! Ваше перше оповідання опубліковано, і ви досягли авторського рівня 1!',
    'email.notifications.firstStoryPublished.title': 'Твоя подорож починається!',
    'email.notifications.firstStoryPublished.intro': 'Вітаємо з публікацією вашого першого оповідання! Це важлива віха на вашому творчому шляху.',
    'email.notifications.firstStoryPublished.levelAchievement': 'Ви досягли 1-го авторського рівня на "Шляху автора"! Це лише початок неймовірної пригоди в сторітелінгу.',
    'email.notifications.firstStoryPublished.encouragement': 'Кожен великий автор починав зі своєї першої публікації. Продовжуйте писати, розвивайтеся і нехай ваша творчість процвітає. Спільнота "Літературного Всесвіту" готова підтримати вас на кожному кроці.',
    'email.notifications.firstStoryPublished.ctaTheWay': 'Дослідити шлях автора',
    'email.notifications.firstStoryPublished.ctaStory': 'Переглянути свою опубліковану історію',
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
    'email.notifications.followedNewWork.cta': 'Вигляд',
    // Story notification emails
    'email.story.newComment.subject': 'Новий коментар на "{storyTitle}"',
    'email.story.newComment.body': '{commenterName} залишив коментар до вашої історії "{storyTitle}": {commentText}',
    'email.story.betaComment.subject': 'Нові бета-відгуки на "{storyTitle}"',
    'email.story.betaComment.body': '{commenterName} надали бета-відгуки на "{storyTitle}": {commentText}',
    'email.story.collaboratorAccepted.subject': 'Новий член команди "{storyTitle}"',
    'email.story.collaboratorAccepted.body': '{collaboratorName} прийняв ваше запрошення до співпраці на "{storyTitle}" як {role}.',
    'email.story.milestone.subject': 'Вітаємо! Досягнуто віху на сайті "{storyTitle}"',
    'email.story.milestone.body': 'Чудові новини! Ваш розділ "{chapterTitle}" з "{storyTitle}" досяг {count} {milestone}. Продовжуйте працювати!',
    'email.story.betaRevision.subject': 'Доступна нова бета-версія: "{chapterTitle}"',
    'email.story.betaRevision.body': '{authorName} опублікувала нову бета-версію "{chapterTitle}" з "{storyTitle}". Будемо вдячні за ваші відгуки!',
    'email.story.newChapter.subject': 'Доступна нова глава: "{storyTitle}"',
    'email.story.newChapter.body': '{authorName} опублікував нову главу "{storyTitle}": "{chapterTitle}". Приємного читання!',
    // Universe notification emails
    'email.universe.newStory.subject': 'Нова історія у всесвіті: "{storyTitle}"',
    'email.universe.newStory.body': '{authorName} додали нову історію "{storyTitle}" до всесвіту, за яким ви стежите. Відкрийте для себе нові пригоди!',
    'email.universe.collaboratorChange.subject': 'Оновлення співпраці зі Всесвітом',
    'email.universe.collaboratorChange.body': 'Відбулися зміни в команді, яка займається розробкою всесвіту, в якому ви працюєте.',
    'email.universe.update.subject': 'Оновлення Всесвіту',
    'email.universe.update.body': 'Всесвіт, за яким ви стежите, було оновлено новим контентом.',
    'email.universe.comment.subject': 'Новий коментар про всесвіт',
    'email.universe.comment.body': '{commenterName} прокоментував всесвіт, за яким ви стежите: "{commentText}"',
    // Blog notification emails
    'email.blog.newPost.subject': 'Нова публікація в блозі: "{postTitle}"',
    'email.blog.newPost.body': '{authorName} опублікував новий запис "{postTitle}" у блозі, за яким ви стежите.',
    'email.blog.comment.subject': 'Новий коментар до публікації в блозі: "{postTitle}"',
    'email.blog.comment.body': '{commenterName} прокоментували публікацію в блозі "{postTitle}": "{commentText}"',
    'email.blog.update.subject': 'Оновлений блог',
    'email.blog.update.body': 'Блог, за яким ви стежите, оновлено.',
    // General comment notification emails
    'email.comment.general.subject': 'Новий коментар на "{contentTitle}"',
    'email.comment.general.body': '{commenterName} прокоментував "{contentTitle}": "{commentText}"',
    'email.comment.reply.subject': 'Відповісти на ваш коментар',
    'email.comment.reply.body': '{replierName} відповів на ваш коментар на "{contentTitle}": "{replyText}"',
    'email.comment.like.subject': 'Ваш коментар сподобався',
    'email.comment.like.body': '{likerName} сподобався ваш коментар. Продовжуйте брати участь!',
    // Content-specific comment notification emails
    'email.comment.fanArt.subject': 'Новий коментар до фан-арту: "{contentTitle}"',
    'email.comment.fanArt.body': '{commenterName} прокоментував ваш фан-арт "{contentTitle}": "{commentText}"',
    'email.comment.event.subject': 'Новий коментар до події: "{contentTitle}"',
    'email.comment.event.body': '{commenterName} прокоментували подію "{contentTitle}": "{commentText}"',
    'email.comment.revision.subject': 'Новий коментар щодо перегляду',
    'email.comment.revision.body': '{commenterName} прокоментували вашу правку: "{commentText}"',
    'email.comment.feedback.subject': 'Новий коментар до зворотного зв\'язку',
    'email.comment.feedback.body': '{commenterName} прокоментували вашу проблему зі зворотним зв\'язком: "{commentText}"',
    // Welcome email
    'email.welcome.subject': 'Ласкаво просимо до Літературного Всесвіту!'
};