/**
 * @authors Jan Dvorak
 */
export default {
    'email.enrollAccount.subject': 'Zaproszenie do Literary Universe dla {username}',
    'email.enrollAccount.message': `Witaj {username}\n\n
    Chcielibyśmy zaprosić Cię do Literary Universe! Stworzyliśmy dla Ciebie specjalne osobiste konto, z którego możesz korzystać z wszystkich funkcji Literary Universe! Proszę, dołącz do nas w tworzeniu nowej generacji narzędzi do kreatywnego pisania i czytania!
    Aby aktywować swoje konto, po prostu kliknij na poniższy link:\n\n{url}`,
    'email.resetPassword.subject': 'Wyzerowanie hasła Literary Universe',
    'email.resetPassword.message': `Witaj {username}!\n\nDostaliśmy prośbę o zresetowanie hasła do Twojego konta.
        Proszę kliknąć na poniższy link, aby zresetować swoje hasło: \n\n{url}`,
    'email.verifyEmail.subject': 'Weryfikacja poczty elektronicznej Literary Universe',
    'email.verifyEmail.message': 'Witaj {username}!\n\n Proszę zweryfikować swój adres e-mail klikając na poniższy link:\n\n{url}',
    // New html email keys
    'email.salutation': 'Witaj {username},',
    'email.welcome': 'Witamy w Literary Universe!',
    'email.signature': 'Z poważaniem,<br />Zespół Literary Universe',
    // Enrollment
    'email.enrollAccount.welcome': 'Witamy na pokładzie',
    'email.enrollAccount.messageHtml': 'Chcielibyśmy zaprosić Państwa do Literary Universe! Przygotowaliśmy dla Państwa osobiste konto, dzięki któremu uzyskają Państwo dostęp do wszystkich funkcji Literary Universe. Prosimy dołączyć do nas w tworzeniu nowej generacji kreatywnego pisania i czytania!',
    'email.enrollAccount.button': 'Dostęp do swojego konta',
    'email.enrollAccount.signature': 'Czekamy na Państwa,<br />Zespół Literary Universe',
    // Reset password
    'email.resetPassword.messageHtml': 'Otrzymaliśmy prośbę o zresetowanie hasła do Państwa konta. Proszę kliknąć poniższy przycisk, aby kontynuować proces. Jeśli nie zgłosił(a) Pan(i) takiej prośby, może Pan(i) zignorować tę wiadomość e-mail, ale może to być dobry moment na sprawdzenie ustawień zabezpieczeń.',
    'email.resetPassword.button': 'Resetowanie hasła',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Cieszymy się, że mamy Państwa na pokładzie! Proszę kliknąć przycisk poniżej, aby zweryfikować ten adres e-mail.',
    'email.verifyEmail.button': 'Zweryfikuj ten adres e-mail',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Twoje konto zostało uaktualnione',
    'email.adminUpgrade.message': `Ulepszyliśmy Twoje konto do {plan, select,
    explorer {Odkrywca}
    adventurer {Inwestor przygód}
    storyteller {Historzy}
    other {}
  } Poziom na następne {days} dni.\n\nCiesz się,\nZespół Literary Universe`,
    'email.adminUpgrade.messageHtml': `Ulepszyliśmy Twoje konto do {plan, select,
    explorer {Eksplorator}
    adventurer {Inwestor przygód}
    storyteller {Historzy}
    other {}
  } Poziom na następne {days} dni. Miłej radości!`,
    'email.verification': 'Weryfikacja poczty elektronicznej',
    'email.verifying': 'Weryfikacja Twojego e-maila. To zajmie tylko chwilę...',
    'email.verified': 'Wspaniała wiadomość! Twój e-mail został zweryfikowany!',
    // The Way (Author Level Up)
    'theWay.levelUp.emailSubject': 'Gratulacje! Osiągnęli Państwo poziom autora {level} na Literary Universe!',
    'theWay.levelUp.emailTitle': 'Gratulacje! Osiągnęli Państwo poziom autora {level}!',
    'theWay.levelUp.emailIntro': 'Pana poświęcenie dla rzemiosła pisarskiego zostało nagrodzone!',
    'theWay.levelUp.emailGenre': 'Osiągnęli Państwo poziom {level} w gatunku {genre} .',
    'theWay.levelUp.emailContinue': 'Proszę kontynuować swoją podróż i odblokować więcej osiągnięć w The Way of the Author.',
    'theWay.levelUp.viewDashboard': 'Wyświetlanie pulpitu nawigacyjnego',
    // Notifications - General content comment
    'email.notifications.contentComment.subject': 'Nowy komentarz do Państwa treści',
    'email.notifications.contentComment.title': 'Nowy komentarz na Państwa {contentType}',
    'email.notifications.contentComment.details': 'Tytuł: {contentTitle} - Od: {commenterName}',
    'email.notifications.contentComment.cta': 'Proszę zobaczyć komentarz',
    // Notifications - Beta reader comment
    'email.notifications.betaComment.subject': 'Nowe opinie beta czytelników',
    'email.notifications.betaComment.title': 'Nowe opinie beta czytelników',
    'email.notifications.betaComment.details': 'Historia: {storyTitle}{chapter} - Od: {commenterName}',
    'email.notifications.betaComment.cta': 'Proszę zobaczyć opinie',
    // Notifications - New message
    'email.notifications.newMessage.subject': 'Mają Państwo nową wiadomość',
    'email.notifications.newMessage.title': 'Mają Państwo nową wiadomość',
    'email.notifications.newMessage.details': 'Od: {senderName}',
    'email.notifications.newMessage.cta': 'Proszę wyświetlić wiadomość',
    // Notifications - Chapter published
    'email.notifications.chapterPublished.subject': 'Opublikowano nowy rozdział',
    'email.notifications.chapterPublished.title': 'Opublikowano nowy rozdział',
    'email.notifications.chapterPublished.details': 'Historia: {storyTitle} - Rozdział: {chapterTitle}{suffix}',
    'email.notifications.chapterPublished.cta': 'Rozdział otwarty',
    // Notifications - First story created
    'email.notifications.firstStory.subject': 'Państwa pierwsza historia jest tutaj!',
    'email.notifications.firstStory.title': 'Państwa pierwsza historia jest już dostępna!',
    'email.notifications.firstStory.intro': 'Niesamowity początek! Proszę pisać dalej i rozwijać swój świat dzięki pomocnym wskazówkom na The Way of the Author.',
    'email.notifications.firstStory.details': 'Historia: {storyTitle}',
    'email.notifications.firstStory.ctaResources': 'Proszę kontynuować Drogę autora',
    'email.notifications.firstStory.ctaStory': 'Proszę otworzyć swoją historię',
    // Notifications - First universe created
    'email.notifications.firstUniverse.subject': 'Gratulujemy pierwszego wszechświata!',
    'email.notifications.firstUniverse.title': 'Gratulujemy stworzenia pierwszego uniwersum!',
    'email.notifications.firstUniverse.intro': 'Rozpoczyna się Państwa podróż do budowania świata. Oto kilka zasobów, które pomogą Państwu podjąć kolejne kroki.',
    'email.notifications.firstUniverse.details': 'Wszechświat: {universeName}',
    'email.notifications.firstUniverse.ctaResources': 'Poznaj drogę autora',
    'email.notifications.firstUniverse.ctaUniverse': 'Proszę otworzyć swój wszechświat',
    // Notifications - First chapter published for a story
    'email.notifications.firstChapterPublished.subject': 'Pana pierwszy rozdział został opublikowany!',
    'email.notifications.firstChapterPublished.title': 'Pierwszy rozdział Pana historii został opublikowany!',
    'email.notifications.firstChapterPublished.intro': 'Proszę dzielić się swoją pracą, zbierać opinie i utrzymywać tempo.',
    'email.notifications.firstChapterPublished.details': 'Historia: {storyTitle} - Rozdział: {chapterTitle}',
    'email.notifications.firstChapterPublished.ctaChapter': 'Rozdział otwarty',
    'email.notifications.firstChapterPublished.ctaStory': 'Proszę zobaczyć historię',
    // Notifications - Story finished
    'email.notifications.storyFinished.subject': 'Gratuluję ukończenia Pana historii!',
    'email.notifications.storyFinished.title': 'Udało się Panu - Pana historia jest skończona!',
    'email.notifications.storyFinished.intro': 'Proszę uczcić ten kamień milowy! Proszę rozważyć opublikowanie, udostępnienie lub przesłanie swojej historii, aby dotrzeć do większej liczby czytelników.',
    'email.notifications.storyFinished.details': 'Historia: {storyTitle}',
    'email.notifications.storyFinished.cta': 'Proszę wyświetlić swoją historię',
    // Notifications - Fan club new subscriber
    'email.notifications.newFanSubscriber.subject': 'Nowy subskrybent fanklubu',
    'email.notifications.newFanSubscriber.title': 'Ma Pan nowego subskrybenta fanklubu!',
    'email.notifications.newFanSubscriber.details': 'Subskrybent: {subscriberName}',
    'email.notifications.newFanSubscriber.cta': 'Zobacz fanklub',
    // Notifications - Fan club subscription ended
    'email.notifications.fanUnsubscribed.subject': 'Członek opuścił pański fanklub',
    'email.notifications.fanUnsubscribed.title': 'Członek opuścił pański fanklub',
    'email.notifications.fanUnsubscribed.intro': 'Chcieliśmy poinformować Państwa o niedawnej zmianie. Proszę rozważyć udostępnianie aktualizacji lub ekskluzywnych treści, aby zwiększyć zaangażowanie.',
    'email.notifications.fanUnsubscribed.details': 'Były członek: {name}',
    'email.notifications.fanUnsubscribed.cta': 'Otwarty fanklub',
    // Notifications - Friend request
    'email.notifications.friendRequest.subject': 'Nowe zaproszenie do znajomych',
    'email.notifications.friendRequest.title': 'Nowe zaproszenie do znajomych',
    'email.notifications.friendRequest.details': 'Od: {requesterName}',
    'email.notifications.friendRequest.cta': 'Prośba o recenzję',
    // Notifications - Collaboration invitation
    'email.notifications.collabInvite.subject': 'Zaproszenie do współpracy',
    'email.notifications.collabInvite.title': 'Mają Państwo zaproszenie do współpracy',
    'email.notifications.collabInvite.details': 'Zapraszający: {inviterName} - Rola: {role} - Cel: {targetType} - {targetTitle}',
    'email.notifications.collabInvite.cta': 'Zaproszenie na przegląd',
    // Notifications - Organization invitation
    'email.notifications.orgInvite.subject': 'Zaproszenie do dołączenia do organizacji',
    'email.notifications.orgInvite.title': 'Zapraszamy Państwa na stronę {orgName}',
    'email.notifications.orgInvite.details': 'Zapraszający: {inviterName}',
    'email.notifications.orgInvite.cta': 'Zaproszenie na przegląd',
    // Notifications - Daily digest
    'email.notifications.dailyDigest.subject': 'Państwa codzienne aktualizacje',
    'email.notifications.dailyDigest.title': 'Państwa codzienne aktualizacje',
    'email.notifications.dailyDigest.intro': 'Oto, co wydarzyło się dzisiaj.',
    'email.notifications.dailyDigest.cta': 'Proszę zobaczyć wszystkie aktualizacje',
    'email.notifications.dailyDigest.empty': 'Brak aktualizacji w dniu dzisiejszym.',
    // Notifications - Followed author posted a new blog
    'email.notifications.followedBlogPost.subject': 'Nowy wpis na blogu autora, którego Państwo obserwują',
    'email.notifications.followedBlogPost.title': '{authorName} opublikował nowy blog',
    'email.notifications.followedBlogPost.details': 'Tytuł: {postTitle}',
    'email.notifications.followedBlogPost.cta': 'Proszę przeczytać post',
    // Notifications - Followed author published new work
    'email.notifications.followedNewWork.subject': 'Nowy utwór autora, którego Państwo obserwują',
    'email.notifications.followedNewWork.title': '{authorName} opublikował nową stronę {workType}',
    'email.notifications.followedNewWork.details': 'Tytuł: {title}',
    'email.notifications.followedNewWork.cta': 'Widok'
};