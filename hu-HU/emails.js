/**
 * @authors Jan Dvorak
 */
export default {
    'email.enrollAccount.subject': 'Meghívás az Irodalmi Univerzumba {username}részére',
    'email.enrollAccount.message': `Üdvözöljük {username}\n\n
    ! Szeretnénk meghívni az Irodalmi Univerzumba! Létrehoztunk Önnek egy speciális személyes fiókot, ahol hozzáférhet az Irodalmi Univerzum összes funkciójához! Kérjük, csatlakozzon hozzánk a következő generációs kreatív írás- és olvasóeszközök létrehozásában!
    Az fiók aktiválásához egyszerűen kattintson az alábbi linkre:\n\n{url}`,
    'email.resetPassword.subject': 'Irodalmi Univerzum jelszó visszaállítás',
    'email.resetPassword.message': `Üdvözöljük {username}!\n\n Megkaptunk egy kérést a jelszava visszaállítására a fiókjához.
        Kérjük, kövesse az alábbi linket a jelszó visszaállításához:\n\n{url}`,
    'email.verifyEmail.subject': 'Irodalmi Univerzum e-mail megerősítés',
    'email.verifyEmail.message': 'Üdvözöljük {username}!\n\n Kérjük, erősítse meg az e-mail címét az alábbi linkre kattintva:\n\n{url}',
    // New html email keys
    'email.salutation': 'Üdvözöljük {username},',
    'email.welcome': 'Üdvözöljük az Irodalmi Univerzumban!',
    'email.signature': 'Üdvözlettel,<br />az Irodalmi Univerzum csapata',
    'email.footer.settingsHtml': 'Az e-mail beállításokat a <a href="{link}">fiókbeállítások</a> között módosíthatja.',
    // Enrollment
    'email.enrollAccount.welcome': 'Üdvözöljük a fedélzeten',
    'email.enrollAccount.messageHtml': 'Szeretettel meghívjuk Önt az Irodalmi Univerzumba! Előreléptünk és elkészítettünk Önnek egy személyes fiókot, ahol hozzáférhet az Irodalmi Univerzum minden funkciójához. Kérjük, csatlakozzon hozzánk a kreatív írás és olvasás következő generációjának megteremtésében!',
    'email.enrollAccount.button': 'Fiókhoz való hozzáférés',
    'email.enrollAccount.signature': 'Szeretettel várjuk Önöket,<br />Irodalmi Univerzum csapata',
    // Reset password
    'email.resetPassword.messageHtml': 'Kaptunk egy kérést, hogy visszaállítsuk a jelszavát a fiókjához. Kérjük, kattintson az alábbi gombra a folyamat folytatásához. Ha még nem küldte el ezt a kérést, akkor figyelmen kívül hagyhatja ezt az e-mailt, de talán itt az ideje, hogy felülvizsgálja a biztonsági beállításait.',
    'email.resetPassword.button': 'Jelszó visszaállítása',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Örülünk, hogy a fedélzeten van! Kérjük, kattintson az alábbi gombra az e-mail cím ellenőrzéséhez.',
    'email.verifyEmail.button': 'Megerősítés a felhasználói e-mail címről',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'A fiókodat frissítettük',
    'email.adminUpgrade.message': `Frissítettük a fiókodat a következőre: {plan, select,
    explorer {Felfedező}
    adventurer {Kalandor}
    storyteller {Mesemondó}
    other {}
  } szintre a következő {days} napra.\n\nJó szórakozást,\nLiterary Universe csapat`,
    'email.adminUpgrade.messageHtml': `A következő {days, number} napokra {plan, select,
    explorer {Felfedező}
    adventurer {Kalandor}
    storyteller {Mesélő}
    other {}
  } szintre emeltük a fiókodat. Jó szórakozást!`,
    'email.verification': 'E-mail ellenőrzése',
    'email.verifying': 'Az e-mail ellenőrzése. Ez csak egy pillanat...',
    'email.verified': 'Nagyszerű hír! Az e-mail címed ellenőrzésre került!',
    // The Way (Author Level Up)
    'theWay.levelUp.emailSubject': 'Gratulálunk! Elérted a szerzői szintet {level, number} az Irodalmi Univerzumban!',
    'theWay.levelUp.emailTitle': 'Gratulálunk! Elérted a szerzői szintet {level, number}!',
    'theWay.levelUp.emailIntro': 'Az írói mesterség iránti elkötelezettségedet megjutalmazták!',
    'theWay.levelUp.emailGenre': 'A {genre} műfajban elérted a {level, number} szintet.',
    'theWay.levelUp.emailContinue': 'Folytasd az utadat, és nyisd ki a The Way of the Author további eredményeit.',
    'theWay.levelUp.viewDashboard': 'Az irányítópult megtekintése',
    // Notifications - General content comment
    'email.notifications.contentComment.subject': 'Új megjegyzés az Ön tartalmához',
    'email.notifications.contentComment.title': 'Új megjegyzés a {contentType}címen.',
    'email.notifications.contentComment.details': 'Cím: {contentTitle} - Cím: A cím: A címtől: {commenterName}',
    'email.notifications.contentComment.cta': 'Megjegyzés megtekintése',
    // Notifications - Beta reader comment
    'email.notifications.betaComment.subject': 'Új béta olvasói visszajelzés',
    'email.notifications.betaComment.title': 'Új béta olvasói visszajelzés',
    'email.notifications.betaComment.details': 'Történet: {storyTitle}{chapter} - A következő cikk: A történet: {commenterName}',
    'email.notifications.betaComment.cta': 'Visszajelzés megtekintése',
    // Notifications - New message
    'email.notifications.newMessage.subject': 'Új üzenete van',
    'email.notifications.newMessage.title': 'Új üzenete van',
    'email.notifications.newMessage.details': 'From: {senderName}',
    'email.notifications.newMessage.cta': 'Üzenet megtekintése',
    // Notifications - Chapter published
    'email.notifications.chapterPublished.subject': 'Új fejezet megjelent',
    'email.notifications.chapterPublished.title': 'Új fejezet megjelent',
    'email.notifications.chapterPublished.details': 'Történet: {storyTitle} - Fejezet: {chapterTitle}{suffix}',
    'email.notifications.chapterPublished.cta': 'Fejezet megnyitása',
    // Notifications - First story created
    'email.notifications.firstStory.subject': 'Itt az első történeted!',
    'email.notifications.firstStory.title': 'Az első történeted élő!',
    'email.notifications.firstStory.intro': 'Csodálatos kezdés! Írj tovább és gyarapítsd a világodat a The Way of the Author hasznos útmutatásaival.',
    'email.notifications.firstStory.details': 'Történet: {storyTitle}',
    'email.notifications.firstStory.ctaResources': 'Folytatás a The Way of the Author oldalon',
    'email.notifications.firstStory.ctaStory': 'Nyisd meg a történeted',
    // Notifications - First universe created
    'email.notifications.firstUniverse.subject': 'Gratulálok az első univerzumodhoz!',
    'email.notifications.firstUniverse.title': 'Gratulálok az első univerzum létrehozásához!',
    'email.notifications.firstUniverse.intro': 'A világépítő utazásod megkezdődik. Íme néhány forrás, amely segít a következő lépések megtételében.',
    'email.notifications.firstUniverse.details': 'Univerzum: {universeName}',
    'email.notifications.firstUniverse.ctaResources': 'Fedezze fel a szerző útját',
    'email.notifications.firstUniverse.ctaUniverse': 'Nyisd meg az univerzumodat',
    // Notifications - First chapter published for a story
    'email.notifications.firstChapterPublished.subject': 'Az első fejezeted megjelent!',
    'email.notifications.firstChapterPublished.title': 'Megjelent a történeted első fejezete!',
    'email.notifications.firstChapterPublished.intro': 'Ossza meg munkáját, gyűjtsön visszajelzést, és tartsa fenn a lendületet.',
    'email.notifications.firstChapterPublished.details': 'Történet: {storyTitle} - Fejezet: {chapterTitle}',
    'email.notifications.firstChapterPublished.ctaChapter': 'Fejezet megnyitása',
    'email.notifications.firstChapterPublished.ctaStory': 'Történet megtekintése',
    // Notifications - Story finished
    'email.notifications.storyFinished.subject': 'Gratulálok a történet befejezéséhez!',
    'email.notifications.storyFinished.title': 'Megcsináltad - a történetednek vége!',
    'email.notifications.storyFinished.intro': 'Ünnepeljük meg ezt a mérföldkövet! Fontolja meg története közzétételét, megosztását vagy beküldését, hogy több olvasóhoz jusson el.',
    'email.notifications.storyFinished.details': 'Történet: {storyTitle}',
    'email.notifications.storyFinished.cta': 'Tekintse meg a történetét',
    // Notifications - Fan club new subscriber
    'email.notifications.newFanSubscriber.subject': 'Új rajongói klub előfizető',
    'email.notifications.newFanSubscriber.title': 'Van egy új rajongói klubtagod!',
    'email.notifications.newFanSubscriber.details': 'Előfizető: {subscriberName}',
    'email.notifications.newFanSubscriber.cta': 'Rajongói klub megtekintése',
    // Notifications - Fan club subscription ended
    'email.notifications.fanUnsubscribed.subject': 'Egy tag elhagyta a rajongói klubodat',
    'email.notifications.fanUnsubscribed.title': 'Egy tag elhagyta a rajongói klubodat',
    'email.notifications.fanUnsubscribed.intro': 'Egy nemrégiben történt változásról szerettük volna tájékoztatni Önöket. Fontolja meg a frissítések vagy exkluzív tartalmak megosztását az elkötelezettség növelése érdekében.',
    'email.notifications.fanUnsubscribed.details': 'Korábbi tag: {name}',
    'email.notifications.fanUnsubscribed.cta': 'Nyitott rajongói klub',
    // Notifications - Friend request
    'email.notifications.friendRequest.subject': 'Új baráti kérés',
    'email.notifications.friendRequest.title': 'Új baráti kérés',
    'email.notifications.friendRequest.details': 'From: {requesterName}',
    'email.notifications.friendRequest.cta': 'Felülvizsgálati kérelem',
    // Notifications - Collaboration invitation
    'email.notifications.collabInvite.subject': 'Együttműködési meghívó',
    'email.notifications.collabInvite.title': 'Együttműködési meghívásod van',
    'email.notifications.collabInvite.details': 'Meghívó: {inviterName} - Szerep: {role} - Cél: {targetType} - {targetTitle}',
    'email.notifications.collabInvite.cta': 'Felülvizsgálati felhívás',
    // Notifications - Organization invitation
    'email.notifications.orgInvite.subject': 'Felhívás egy szervezethez való csatlakozásra',
    'email.notifications.orgInvite.title': 'Meghívjuk Önt a {orgName}weboldalra.',
    'email.notifications.orgInvite.details': 'Meghívó: {inviterName}',
    'email.notifications.orgInvite.cta': 'Felülvizsgálati felhívás',
    // Notifications - Daily digest
    'email.notifications.dailyDigest.subject': 'Az Ön napi frissítései',
    'email.notifications.dailyDigest.title': 'Az Ön napi frissítései',
    'email.notifications.dailyDigest.intro': 'A következők történtek ma.',
    'email.notifications.dailyDigest.cta': 'Minden frissítés megtekintése',
    'email.notifications.dailyDigest.empty': 'Ma nincs frissítés.',
    // Notifications - Followed author posted a new blog
    'email.notifications.followedBlogPost.subject': 'Új blogbejegyzés egy általad követett szerzőtől',
    'email.notifications.followedBlogPost.title': '{authorName} új blogot nyitott',
    'email.notifications.followedBlogPost.details': 'Cím: {postTitle}',
    'email.notifications.followedBlogPost.cta': 'Hozzászólás olvasása',
    // Notifications - Followed author published new work
    'email.notifications.followedNewWork.subject': 'Új mű egy olyan szerzőtől, akit követsz',
    'email.notifications.followedNewWork.title': '{authorName} megjelent egy új {workType}',
    'email.notifications.followedNewWork.details': 'Cím: {title}',
    'email.notifications.followedNewWork.cta': 'A  megtekintése',
    // Story notification emails
    'email.story.newComment.subject': 'Új megjegyzés a "{storyTitle}"',
    'email.story.newComment.body': '{commenterName} hagyott egy megjegyzést a történetéhez "{storyTitle}": {commentText}',
    'email.story.betaComment.subject': 'Új béta visszajelzés a "{storyTitle}"',
    'email.story.betaComment.body': '{commenterName} béta visszajelzést adott a "{storyTitle}" témában: {commentText}',
    'email.story.collaboratorAccepted.subject': 'Új csapattag a "{storyTitle}"',
    'email.story.collaboratorAccepted.body': '{collaboratorName} elfogadta az Ön meghívását, hogy együttműködjön a "{storyTitle}" című művében, mint {role}.',
    'email.story.milestone.subject': 'Gratulálunk! Mérföldkőhöz érkezett a "{storyTitle}"',
    'email.story.milestone.body': 'Nagyszerű hír! A "{chapterTitle}" című fejezeted a "{storyTitle}" honlapról elérte a {count} {milestone}címet. Csak így tovább a nagyszerű munkát!',
    'email.story.betaRevision.subject': 'Új béta felülvizsgálat elérhető: "{chapterTitle}"',
    'email.story.betaRevision.body': '{authorName} közzétette a "{chapterTitle}" új béta felülvizsgálatát a "{storyTitle}" -ről. Visszajelzéseiteket nagyra értékelnénk!',
    'email.story.newChapter.subject': 'Új fejezet elérhető: "{storyTitle}"',
    'email.story.newChapter.body': '{authorName} a "{storyTitle}" új fejezetét tette közzé: "{chapterTitle}". Kellemes olvasást!',
    // Universe notification emails
    'email.universe.newStory.subject': 'Új történet az univerzumban: "{storyTitle}"',
    'email.universe.newStory.body': '{authorName} egy új történetet adott hozzá "{storyTitle}" egy általad követett univerzumhoz. Fedezz fel új kalandokat!',
    'email.universe.collaboratorChange.subject': 'Univerzum együttműködés frissítés',
    'email.universe.collaboratorChange.body': 'Változás történt az Ön által érintett univerzum együttműködési csapatában.',
    'email.universe.update.subject': 'Univerzum frissítve',
    'email.universe.update.body': 'Egy általad követett univerzum új tartalommal frissült.',
    'email.universe.comment.subject': 'Új megjegyzés az univerzumról',
    'email.universe.comment.body': '{commenterName} kommentált egy univerzumot, amit követsz: "{commentText}"',
    // Blog notification emails
    'email.blog.newPost.subject': 'Új blogbejegyzés: "{postTitle}"',
    'email.blog.newPost.body': '{authorName} új blogbejegyzést tett közzé "{postTitle}" egy olyan blogon, amelyet követ.',
    'email.blog.comment.subject': 'Új megjegyzés a blogbejegyzéshez: "{postTitle}"',
    'email.blog.comment.body': '{commenterName} kommentálta a blogbejegyzést "{postTitle}": "{commentText}"',
    'email.blog.update.subject': 'Blog frissítve',
    'email.blog.update.body': 'Az Ön által követett blogot frissítették.',
    // General comment notification emails
    'email.comment.general.subject': 'Új megjegyzés a "{contentTitle}"',
    'email.comment.general.body': '{commenterName} commented on "{contentTitle}": "{commentText}"',
    'email.comment.reply.subject': 'Válasz a megjegyzésére',
    'email.comment.reply.body': '{replierName} válaszolt a "{contentTitle}" megjegyzésére: "{replyText}"',
    'email.comment.like.subject': 'A megjegyzésed tetszett',
    'email.comment.like.body': '{likerName} tetszett a megjegyzésed. Tartsa elkötelezettségét!',
    // Content-specific comment notification emails
    'email.comment.fanArt.subject': 'Új megjegyzés a rajongói művészethez: "{contentTitle}"',
    'email.comment.fanArt.body': '{commenterName} hozzászólás a "{contentTitle}" című rajongói művedhez: "{commentText}"',
    'email.comment.event.subject': 'Új megjegyzés az eseményhez: "{contentTitle}"',
    'email.comment.event.body': '{commenterName} hozzászólt az eseményhez "{contentTitle}": "{commentText}"',
    'email.comment.revision.subject': 'Új megjegyzés a felülvizsgálathoz',
    'email.comment.revision.body': '{commenterName} kommentálta az átdolgozását: "{commentText}"',
    'email.comment.feedback.subject': 'Új megjegyzés a visszajelzésekhez',
    'email.comment.feedback.body': '{commenterName} kommentálta az Ön visszajelzési kérdését: "{commentText}"',
    // Welcome email
    'email.welcome.subject': 'Üdvözöljük az Irodalmi Univerzumban!'
};