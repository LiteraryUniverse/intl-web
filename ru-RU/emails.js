/**
 * @authors Jan Dvorak
 */
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
    'email.footer.settingsHtml': 'Вы можете изменить настройки электронной почты в <a href="{link}">настройках Вашей учетной записи</a>.',
    // Enrollment
    'email.enrollAccount.welcome': 'Добро пожаловать на борт',
    'email.enrollAccount.messageHtml': 'Мы хотели бы пригласить вас в Literary Universe! Мы подготовили для вас персональную учётную запись, где вы сможете получить доступ ко всем возможностям Literary Universe. Пожалуйста, присоединяйтесь к нам в создании нового поколения творческого письма и чтения!',
    'email.enrollAccount.button': 'Перейти к учётной записи',
    'email.enrollAccount.signature': 'Мы с нетерпением ждём встречи с вами, <br />команда Literary Universe',
    // Reset password
    'email.resetPassword.messageHtml': 'Мы получили запрос на сброс пароля для вашей учётной записи. Пожалуйста, нажмите на кнопку ниже, чтобы продолжить процесс. Если вы не делали этого запроса, вы можете проигнорировать это письмо, но, возможно, сейчас самое время пересмотреть настройки безопасности.',
    'email.resetPassword.button': 'Сбросить пароль',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Мы рады, что вы с нами! Пожалуйста, нажмите на кнопку ниже, чтобы подтвердить этот адрес электронной почты.',
    'email.verifyEmail.button': 'Подтвердить адрес электронной почты',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Ваша учётная запись была повышена',
    'email.adminUpgrade.message': `Мы повысили вашу учётную запись до уровня {plan, select,
    explorer {исследователя}
    adventurer {авантюриста}
    storyteller {рассказчика}
    other {}
  } на следующие {days} дн.\n\nНаслаждайтесь,\nкоманда Literary Universe`,
    'email.adminUpgrade.messageHtml': `Мы повысили Ваш аккаунт до {plan, select,
    explorer {Исследователь}
    adventurer {Искатель приключений}
    storyteller {Рассказчик}
    other {}
  } уровня на следующие {days, number} дни. Наслаждайтесь!`,
    'email.verification': 'Подтверждение эл. почты',
    'email.verifying': 'Проверка вашей электронной почты. Это займёт всего минуту...',
    'email.verified': 'Отличные новости! Ваш адрес электронной почты был подтверждён!',
    // The Way (Author Level Up)
    'theWay.levelUp.emailSubject': 'Поздравляем! Вы достигли уровня автора {level, number} в Литературной Вселенной!',
    'theWay.levelUp.emailTitle': 'Поздравляем! Вы достигли уровня автора {level, number}!',
    'theWay.levelUp.emailIntro': 'Ваша преданность писательскому ремеслу была вознаграждена!',
    'theWay.levelUp.emailGenre': 'Вы достигли уровня {level, number} в жанре {genre} .',
    'theWay.levelUp.emailContinue': 'Продолжайте свое путешествие и открывайте новые достижения в The Way of the Author.',
    'theWay.levelUp.viewDashboard': 'Просмотрите Вашу приборную панель',
    // Notifications - General content comment
    'email.notifications.contentComment.subject': 'Новый комментарий к Вашему контенту',
    'email.notifications.contentComment.title': 'Новый комментарий к Вашему {contentType}',
    'email.notifications.contentComment.details': 'Название: {contentTitle} - От: {commenterName}',
    'email.notifications.contentComment.cta': 'Посмотреть комментарий',
    // Notifications - Beta reader comment
    'email.notifications.betaComment.subject': 'Новые отзывы бета-ридеров',
    'email.notifications.betaComment.title': 'Новые отзывы бета-ридеров',
    'email.notifications.betaComment.details': 'История: {storyTitle}{chapter} - От: {commenterName}',
    'email.notifications.betaComment.cta': 'Посмотреть отзывы',
    // Notifications - New message
    'email.notifications.newMessage.subject': 'У Вас есть новое сообщение',
    'email.notifications.newMessage.title': 'У Вас есть новое сообщение',
    'email.notifications.newMessage.details': 'От: {senderName}',
    'email.notifications.newMessage.cta': 'Посмотреть сообщение',
    // Notifications - Chapter published
    'email.notifications.chapterPublished.subject': 'Опубликована новая глава',
    'email.notifications.chapterPublished.title': 'Опубликована новая глава',
    'email.notifications.chapterPublished.details': 'История: {storyTitle} - Глава: {chapterTitle}{suffix}',
    'email.notifications.chapterPublished.cta': 'Открытая глава',
    // Notifications - First story created
    'email.notifications.firstStory.subject': 'Ваша первая история здесь!',
    'email.notifications.firstStory.title': 'Ваша первая история уже в эфире!',
    'email.notifications.firstStory.intro': 'Потрясающее начало! Продолжайте писать и развивать свой мир с помощью полезных рекомендаций на "Пути автора".',
    'email.notifications.firstStory.details': 'История: {storyTitle}',
    'email.notifications.firstStory.ctaResources': 'Продолжение "Путь автора',
    'email.notifications.firstStory.ctaStory': 'Откройте свою историю',
    // Notifications - First universe created
    'email.notifications.firstUniverse.subject': 'Поздравляю с Вашей первой вселенной!',
    'email.notifications.firstUniverse.title': 'Поздравляю с созданием Вашей первой вселенной!',
    'email.notifications.firstUniverse.intro': 'Ваше путешествие по созданию мира начинается. Вот несколько ресурсов, которые помогут Вам сделать следующие шаги.',
    'email.notifications.firstUniverse.details': 'Вселенная: {universeName}',
    'email.notifications.firstUniverse.ctaResources': 'Изучите Путь Автора',
    'email.notifications.firstUniverse.ctaUniverse': 'Откройте свою вселенную',
    // Notifications - First chapter published for a story
    'email.notifications.firstChapterPublished.subject': 'Ваша первая глава опубликована!',
    'email.notifications.firstChapterPublished.title': 'Первая глава Вашей истории опубликована!',
    'email.notifications.firstChapterPublished.intro': 'Делитесь своей работой, собирайте отзывы и поддерживайте импульс.',
    'email.notifications.firstChapterPublished.details': 'История: {storyTitle} - Глава: {chapterTitle}',
    'email.notifications.firstChapterPublished.ctaChapter': 'Открытая глава',
    'email.notifications.firstChapterPublished.ctaStory': 'Посмотреть историю',
    // Notifications - Story finished
    'email.notifications.storyFinished.subject': 'Поздравляю с окончанием истории!',
    'email.notifications.storyFinished.title': 'Вы сделали это - Ваша история закончена!',
    'email.notifications.storyFinished.intro': 'Отпразднуйте это знаменательное событие! Опубликуйте, поделитесь или отправьте свою историю, чтобы привлечь больше читателей.',
    'email.notifications.storyFinished.details': 'История: {storyTitle}',
    'email.notifications.storyFinished.cta': 'Просмотрите свою историю',
    // Notifications - Fan club new subscriber
    'email.notifications.newFanSubscriber.subject': 'Новый подписчик фан-клуба',
    'email.notifications.newFanSubscriber.title': 'У Вас появился новый подписчик фан-клуба!',
    'email.notifications.newFanSubscriber.details': 'Подписчик: {subscriberName}',
    'email.notifications.newFanSubscriber.cta': 'Посмотреть фан-клуб',
    // Notifications - Fan club subscription ended
    'email.notifications.fanUnsubscribed.subject': 'Член Вашего фан-клуба',
    'email.notifications.fanUnsubscribed.title': 'Член Вашего фан-клуба',
    'email.notifications.fanUnsubscribed.intro': 'Мы хотели сообщить Вам о недавнем изменении. Подумайте о том, чтобы поделиться обновлениями или эксклюзивным контентом, чтобы повысить вовлеченность.',
    'email.notifications.fanUnsubscribed.details': 'Предыдущий участник: {name}',
    'email.notifications.fanUnsubscribed.cta': 'Открытый фан-клуб',
    // Notifications - Friend request
    'email.notifications.friendRequest.subject': 'Новый запрос друга',
    'email.notifications.friendRequest.title': 'Новый запрос друга',
    'email.notifications.friendRequest.details': 'От: {requesterName}',
    'email.notifications.friendRequest.cta': 'Запрос на рецензию',
    // Notifications - Collaboration invitation
    'email.notifications.collabInvite.subject': 'Приглашение к сотрудничеству',
    'email.notifications.collabInvite.title': 'У Вас есть приглашение к сотрудничеству',
    'email.notifications.collabInvite.details': 'Приглашающая сторона: {inviterName} - Роль: {role} - Цель: {targetType} - {targetTitle}',
    'email.notifications.collabInvite.cta': 'Приглашение на обзор',
    // Notifications - Organization invitation
    'email.notifications.orgInvite.subject': 'Приглашение вступить в организацию',
    'email.notifications.orgInvite.title': 'Приглашаем Вас присоединиться к сайту {orgName}.',
    'email.notifications.orgInvite.details': 'Инвитро: {inviterName}',
    'email.notifications.orgInvite.cta': 'Приглашение на обзор',
    // Notifications - Daily digest
    'email.notifications.dailyDigest.subject': 'Ваши ежедневные обновления',
    'email.notifications.dailyDigest.title': 'Ваши ежедневные обновления',
    'email.notifications.dailyDigest.intro': 'Вот что произошло сегодня.',
    'email.notifications.dailyDigest.cta': 'Посмотреть все обновления',
    'email.notifications.dailyDigest.empty': 'Сегодня никаких обновлений.',
    // Notifications - Followed author posted a new blog
    'email.notifications.followedBlogPost.subject': 'Новая запись в блоге автора, за которым Вы следите',
    'email.notifications.followedBlogPost.title': '{authorName} опубликовал новый блог',
    'email.notifications.followedBlogPost.details': 'Название: {postTitle}',
    'email.notifications.followedBlogPost.cta': 'Читать пост',
    // Notifications - Followed author published new work
    'email.notifications.followedNewWork.subject': 'Новая работа от автора, за которым Вы следите',
    'email.notifications.followedNewWork.title': '{authorName} опубликовал новый {workType}',
    'email.notifications.followedNewWork.details': 'Название: {title}',
    'email.notifications.followedNewWork.cta': 'Посмотреть',
    // Story notification emails
    'email.story.newComment.subject': 'Новый комментарий к "{storyTitle}"',
    'email.story.newComment.body': '{commenterName} оставлен комментарий на вашу историю "{storyTitle}": {commentText}',
    'email.story.betaComment.subject': 'Новый бета-отзыв о "{storyTitle}"',
    'email.story.betaComment.body': '{commenterName} предоставил бета-отзыв на "{storyTitle}": {commentText}',
    'email.story.collaboratorAccepted.subject': 'Новый член команды для "{storyTitle}"',
    'email.story.collaboratorAccepted.body': '{collaboratorName} принял Ваше приглашение сотрудничать с сайтом "{storyTitle}" в качестве {role}.',
    'email.story.milestone.subject': 'Поздравляем! Веха достигнута на сайте "{storyTitle}".',
    'email.story.milestone.body': 'Отличные новости! Ваша глава "{chapterTitle}" из "{storyTitle}" достигла {count} {milestone}. Продолжайте работать в том же духе!',
    'email.story.betaRevision.subject': 'Доступна новая бета-версия: "{chapterTitle}"',
    'email.story.betaRevision.body': '{authorName} опубликовала новую бета-версию "{chapterTitle}" от "{storyTitle}". Ваши отзывы будут очень признательны!',
    'email.story.newChapter.subject': 'Новая глава доступна: "{storyTitle}"',
    'email.story.newChapter.body': '{authorName} опубликовала новую главу "{storyTitle}": "{chapterTitle}". Счастливого чтения!',
    // Universe notification emails
    'email.universe.newStory.subject': 'Новая история во вселенной: "{storyTitle}"',
    'email.universe.newStory.body': '{authorName} добавил новую историю "{storyTitle}" во вселенную, за которой Вы следите. Откройте для себя новые приключения!',
    'email.universe.collaboratorChange.subject': 'Обновление информации о сотрудничестве во Вселенной',
    'email.universe.collaboratorChange.body': 'В команде разработчиков вселенной, в которой Вы участвуете, произошли изменения.',
    'email.universe.update.subject': 'Вселенная обновлена',
    'email.universe.update.body': 'Вселенная, за которой Вы следите, была обновлена новым содержимым.',
    'email.universe.comment.subject': 'Новый комментарий о вселенной',
    'email.universe.comment.body': '{commenterName} прокомментировал вселенную, за которой вы следите: "{commentText}"',
    // Blog notification emails
    'email.blog.newPost.subject': 'Новая запись в блоге: "{postTitle}"',
    'email.blog.newPost.body': '{authorName} Опубликовал новую запись в блоге "{postTitle}" на блоге, за которым Вы следите.',
    'email.blog.comment.subject': 'Новый комментарий к записи в блоге: "{postTitle}"',
    'email.blog.comment.body': '{commenterName} прокомментировал запись в блоге "{postTitle}": "{commentText}"',
    'email.blog.update.subject': 'Обновленный блог',
    'email.blog.update.body': 'Блог, за которым Вы следите, был обновлен.',
    // General comment notification emails
    'email.comment.general.subject': 'Новый комментарий к "{contentTitle}"',
    'email.comment.general.body': '{commenterName} прокомментировал "{contentTitle}": "{commentText}"',
    'email.comment.reply.subject': 'Ответьте на Ваш комментарий',
    'email.comment.reply.body': '{replierName} ответил на Ваш комментарий к "{contentTitle}": "{replyText}"',
    'email.comment.like.subject': 'Ваш комментарий понравился',
    'email.comment.like.body': '{likerName} понравился Ваш комментарий. Продолжайте участвовать!',
    // Content-specific comment notification emails
    'email.comment.fanArt.subject': 'Новый комментарий к фан-арту: "{contentTitle}"',
    'email.comment.fanArt.body': '{commenterName} прокомментировал Ваш фан-арт "{contentTitle}": "{commentText}"',
    'email.comment.event.subject': 'Новый комментарий к событию: "{contentTitle}"',
    'email.comment.event.body': '{commenterName} прокомментировал событие "{contentTitle}": "{commentText}"',
    'email.comment.revision.subject': 'Новый комментарий к пересмотру',
    'email.comment.revision.body': '{commenterName} прокомментировал Вашу ревизию: "{commentText}"',
    'email.comment.feedback.subject': 'Новый комментарий к отзыву',
    'email.comment.feedback.body': '{commenterName} прокомментировал Ваш отзыв: "{commentText}"',
    // Welcome email
    'email.welcome.subject': 'Добро пожаловать в Литературную Вселенную!'
};