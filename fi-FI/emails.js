/**
 * @authors Jan Dvorak
 */
export default {
    'email.enrollAccount.subject': 'Kutsu Literary Universeen {username}',
    'email.enrollAccount.message': `Hei {username}\n\n
    Haluamme kutsua sinut Literary Universeen! Olemme luoneet sinulle oman henkilökohtaisen tilin, josta voit käyttää kaikkia Literary Universen ominaisuuksia! Liity kanssamme luomaan seuraavan sukupolven luovan kirjoittamisen ja lukemisen työkaluja!
    Aktivoidaksesi tilisi, klikkaa alla olevaa linkkiä:\n\n{url}`,
    'email.resetPassword.subject': 'Literary Universen salasanan palautus',
    'email.resetPassword.message': `Hei {username}!\n\n Olemme vastaanottaneet pyynnön nollata salasanasi tilillesi.
        Ole hyvä ja seuraa alla olevaa linkkiä palauttaaksesi salasanasi:\n\n{url}`,
    'email.verifyEmail.subject': 'Literary Universen sähköpostin vahvistus',
    'email.verifyEmail.message': 'Hei {username}!\n\n Vahvista sähköpostiosoitteesi klikkaamalla alla olevaa linkkiä:\n\n{url}',
    // New html email keys
    'email.salutation': 'Hei {username},',
    'email.welcome': 'Tervetuloa Literary Universeen!',
    'email.signature': 'Ystävällisin terveisin,<br />Literary Universen tiimi',
    // Enrollment
    'email.enrollAccount.welcome': 'Tervetuloa kyytiin',
    'email.enrollAccount.messageHtml': 'Haluamme kutsua sinut Literary Universeen! Valmistelimme sinulle henkilökohtaisen tilin, jolla pääset käyttämään kaikkia Literary Universen ominaisuuksia. Tule mukaan luomaan luovan kirjoittamisen ja lukemisen seuraavaa sukupolvea!',
    'email.enrollAccount.button': 'Avaa tilisi',
    'email.enrollAccount.signature': 'Odotamme innolla tapaamistanne,<br />Literary Universe -tiimi.',
    // Reset password
    'email.resetPassword.messageHtml': 'Olemme saaneet pyynnön tilisi salasanan palauttamisesta. Klikkaa alla olevaa painiketta jatkaaksesi prosessia. Jos et ole tehnyt tätä pyyntöä, voit jättää tämän sähköpostiviestin huomiotta, mutta saattaa olla hyvä aika tarkistaa suojausasetuksesi.',
    'email.resetPassword.button': 'Palauta salasana',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Olemme iloisia saadessamme sinut mukaan! Vahvista tämä sähköpostiosoite klikkaamalla alla olevaa painiketta.',
    'email.verifyEmail.button': 'Vahvista tämä sähköpostiosoite',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Tilisi on päivitetty',
    'email.adminUpgrade.message': `Olemme päivittäneet tilisi {plan, select,
    explorer {Explorer}
    adventurer {Seikkailija}
    storyteller {Kertoja}
    other {}
  } tasolle seuraavaksi {days} päiväksi.\n\nNauti,\nLiterary Universe -tiimi`,
    'email.adminUpgrade.messageHtml': `Olemme nostaneet tilisi {plan, select,
    explorer {Tutkija}
    adventurer {Seikkailija}
    storyteller {Tarinankertoja}
    other {}
  } tasolle seuraaviksi {days, number} päiviksi. Nauti!`,
    'email.verification': 'Sähköpostin vahvistus',
    'email.verifying': 'Vahvistetaan sähköpostiasi. Tämä vie vain hetken...',
    'email.verified': 'Hienoa uutista! Sähköpostisi on vahvistettu!',
    // The Way (Author Level Up)
    'theWay.levelUp.emailSubject': 'Onnittelut! Olet saavuttanut kirjailijatason {level, number} Literary Universessa!',
    'theWay.levelUp.emailTitle': 'Onnittelut! Olet saavuttanut kirjailijatason {level, number}!',
    'theWay.levelUp.emailIntro': 'Omistautumisesi kirjoittamisen käsityölle on palkittu!',
    'theWay.levelUp.emailGenre': 'Olet saavuttanut tason {level, number} {genre} genressä.',
    'theWay.levelUp.emailContinue': 'Jatka matkaasi ja avaa lisää saavutuksia The Way of the Author -pelissä.',
    'theWay.levelUp.viewDashboard': 'Näytä kojelauta',
    // Notifications - General content comment
    'email.notifications.contentComment.subject': 'Uusi kommentti sisällöstäsi',
    'email.notifications.contentComment.title': 'Uusi kommentti osoitteessa {contentType}',
    'email.notifications.contentComment.details': 'Otsikko: {contentTitle} - Nimi: From: {commenterName}',
    'email.notifications.contentComment.cta': 'Näytä kommentti',
    // Notifications - Beta reader comment
    'email.notifications.betaComment.subject': 'Uusi beta-lukijapalaute',
    'email.notifications.betaComment.title': 'Uusi beta-lukijapalaute',
    'email.notifications.betaComment.details': 'Tarina: {storyTitle}{chapter} - Juttu: From: {commenterName}',
    'email.notifications.betaComment.cta': 'Näytä palaute',
    // Notifications - New message
    'email.notifications.newMessage.subject': 'Sinulla on uusi viesti',
    'email.notifications.newMessage.title': 'Sinulla on uusi viesti',
    'email.notifications.newMessage.details': 'From: {senderName}',
    'email.notifications.newMessage.cta': 'Näytä viesti',
    // Notifications - Chapter published
    'email.notifications.chapterPublished.subject': 'Uusi luku julkaistu',
    'email.notifications.chapterPublished.title': 'Uusi luku julkaistu',
    'email.notifications.chapterPublished.details': 'Tarina: {storyTitle} - Kertomus: Luku: {chapterTitle}{suffix}',
    'email.notifications.chapterPublished.cta': 'Avaa luku',
    // Notifications - First story created
    'email.notifications.firstStory.subject': 'Ensimmäinen tarinasi on täällä!',
    'email.notifications.firstStory.title': 'Ensimmäinen tarinasi on julkaistu!',
    'email.notifications.firstStory.intro': 'Uskomaton alku! Jatka kirjoittamista ja kasvata maailmaasi kirjailijan tien avuliaiden ohjeiden avulla.',
    'email.notifications.firstStory.details': 'Tarina: {storyTitle}',
    'email.notifications.firstStory.ctaResources': 'Jatka aiheesta Kirjailijan tie',
    'email.notifications.firstStory.ctaStory': 'Avaa tarinasi',
    // Notifications - First universe created
    'email.notifications.firstUniverse.subject': 'Onnittelut ensimmäisestä maailmankaikkeudestasi!',
    'email.notifications.firstUniverse.title': 'Onnittelut ensimmäisen universumin luomisesta!',
    'email.notifications.firstUniverse.intro': 'Maailmankehitysmatkasi alkaa. Seuraavassa on joitakin resursseja, jotka auttavat sinua ottamaan seuraavat askeleet.',
    'email.notifications.firstUniverse.details': 'Maailmankaikkeus: {universeName}',
    'email.notifications.firstUniverse.ctaResources': 'Tutustu kirjailijan tiehen',
    'email.notifications.firstUniverse.ctaUniverse': 'Avaa maailmankaikkeutesi',
    // Notifications - First chapter published for a story
    'email.notifications.firstChapterPublished.subject': 'Ensimmäinen luku on julkaistu!',
    'email.notifications.firstChapterPublished.title': 'Tarinasi ensimmäinen luku on julkaistu!',
    'email.notifications.firstChapterPublished.intro': 'Jaa työsi, kerää palautetta ja pidä vauhtia yllä.',
    'email.notifications.firstChapterPublished.details': 'Tarina: {storyTitle} - Kertomus: Luku: {chapterTitle}',
    'email.notifications.firstChapterPublished.ctaChapter': 'Avaa luku',
    'email.notifications.firstChapterPublished.ctaStory': 'Katso tarina',
    // Notifications - Story finished
    'email.notifications.storyFinished.subject': 'Onnittelut tarinasi loppuun saattamisesta!',
    'email.notifications.storyFinished.title': 'Teit sen - tarinasi on valmis!',
    'email.notifications.storyFinished.intro': 'Juhli tätä virstanpylvästä! Harkitse tarinasi julkaisemista, jakamista tai lähettämistä, jotta tavoitat enemmän lukijoita.',
    'email.notifications.storyFinished.details': 'Tarina: {storyTitle}',
    'email.notifications.storyFinished.cta': 'Näytä tarinasi',
    // Notifications - Fan club new subscriber
    'email.notifications.newFanSubscriber.subject': 'Uusi faniklubin tilaaja',
    'email.notifications.newFanSubscriber.title': 'Sinulla on uusi faniklubin tilaaja!',
    'email.notifications.newFanSubscriber.details': 'Tilaaja: {subscriberName}',
    'email.notifications.newFanSubscriber.cta': 'Näytä faniklubi',
    // Notifications - Fan club subscription ended
    'email.notifications.fanUnsubscribed.subject': 'Jäsen jätti faniklubisi',
    'email.notifications.fanUnsubscribed.title': 'Jäsen jätti faniklubisi',
    'email.notifications.fanUnsubscribed.intro': 'Halusimme kertoa sinulle äskettäisestä muutoksesta. Harkitse päivitysten tai eksklusiivisen sisällön jakamista sitoutumisen lisäämiseksi.',
    'email.notifications.fanUnsubscribed.details': 'Entinen jäsen: {name}',
    'email.notifications.fanUnsubscribed.cta': 'Avoin faniklubi',
    // Notifications - Friend request
    'email.notifications.friendRequest.subject': 'Uusi ystäväpyyntö',
    'email.notifications.friendRequest.title': 'Uusi ystäväpyyntö',
    'email.notifications.friendRequest.details': 'From: {requesterName}',
    'email.notifications.friendRequest.cta': 'Tarkistuspyyntö',
    // Notifications - Collaboration invitation
    'email.notifications.collabInvite.subject': 'Yhteistyökutsu',
    'email.notifications.collabInvite.title': 'Sinulla on kutsu yhteistyöhön',
    'email.notifications.collabInvite.details': 'Kutsuja: {inviterName} - Kutsuja: Rooli: {role} - Kohde: {targetType} - {targetTitle}',
    'email.notifications.collabInvite.cta': 'Arvostelukutsu',
    // Notifications - Organization invitation
    'email.notifications.orgInvite.subject': 'Kutsu liittyä järjestöön',
    'email.notifications.orgInvite.title': 'Sinut on kutsuttu mukaan {orgName}',
    'email.notifications.orgInvite.details': 'Kutsuja: {inviterName}',
    'email.notifications.orgInvite.cta': 'Arvostelukutsu',
    // Notifications - Daily digest
    'email.notifications.dailyDigest.subject': 'Päivittäiset päivitykset',
    'email.notifications.dailyDigest.title': 'Päivittäiset päivitykset',
    'email.notifications.dailyDigest.intro': 'Tänään tapahtui seuraavaa.',
    'email.notifications.dailyDigest.cta': 'Katso kaikki päivitykset',
    'email.notifications.dailyDigest.empty': 'Ei päivityksiä tänään.',
    // Notifications - Followed author posted a new blog
    'email.notifications.followedBlogPost.subject': 'Uusi blogikirjoitus seuraamaltasi kirjoittajalta',
    'email.notifications.followedBlogPost.title': '{authorName} julkaisi uuden blogin',
    'email.notifications.followedBlogPost.details': 'Nimike: {postTitle}',
    'email.notifications.followedBlogPost.cta': 'Lue viesti',
    // Notifications - Followed author published new work
    'email.notifications.followedNewWork.subject': 'Uusi teos seuraamaltasi kirjailijalta',
    'email.notifications.followedNewWork.title': '{authorName} julkaisi uuden {workType}',
    'email.notifications.followedNewWork.details': 'Nimike: {title}',
    'email.notifications.followedNewWork.cta': 'Näytä',
    // Story notification emails
    'email.story.newComment.subject': 'Uusi kommentti aiheesta "{storyTitle}"',
    'email.story.newComment.body': '{commenterName} jätti kommentin tarinaan "{storyTitle}": {commentText}',
    'email.story.betaComment.subject': 'Uusi beta-palaute "{storyTitle}"',
    'email.story.betaComment.body': '{commenterName} antoi beetapalautetta tuotteesta "{storyTitle}": {commentText}',
    'email.story.collaboratorAccepted.subject': 'Uusi tiimin jäsen "{storyTitle}"',
    'email.story.collaboratorAccepted.body': '{collaboratorName} on hyväksynyt kutsunne tehdä yhteistyötä "{storyTitle}" {role}.',
    'email.story.milestone.subject': 'Onnittelut! Saavutettu virstanpylväs "{storyTitle}"',
    'email.story.milestone.body': 'Hienoja uutisia! Luku "{chapterTitle}" alkaen "{storyTitle}" on saavuttanut {count} {milestone}. Jatkakaa hienoa työtä!',
    'email.story.betaRevision.subject': 'Uusi beta-versio saatavilla: "{chapterTitle}"',
    'email.story.betaRevision.body': '{authorName} on julkaissut uuden beta-version "{chapterTitle}" alkaen "{storyTitle}". Palautteesi olisi erittäin tervetullutta!',
    'email.story.newChapter.subject': 'Uusi luku saatavilla: "{storyTitle}"',
    'email.story.newChapter.body': '{authorName} on julkaissut uuden luvun "{storyTitle}": "{chapterTitle}". Hyvää lukemista!',
    // Universe notification emails
    'email.universe.newStory.subject': 'Uusi tarina universumissa: "{storyTitle}"',
    'email.universe.newStory.body': '{authorName} lisäsi uuden tarinan "{storyTitle}" universumiin, jota seuraat. Tutustu uusiin seikkailuihin!',
    'email.universe.collaboratorChange.subject': 'Universum-yhteistyön päivitys',
    'email.universe.collaboratorChange.body': 'Yhteistyöryhmässä on tapahtunut muutos universumissa, jossa olet mukana.',
    'email.universe.update.subject': 'Universum päivitetty',
    'email.universe.update.body': 'Seuraamasi universumi on päivitetty uudella sisällöllä.',
    'email.universe.comment.subject': 'Uusi kommentti maailmankaikkeudesta',
    'email.universe.comment.body': '{commenterName} kommentoi universumia, jota seuraat: "{commentText}"',
    // Blog notification emails
    'email.blog.newPost.subject': 'Uusi blogikirjoitus: "{postTitle}"',
    'email.blog.newPost.body': '{authorName} julkaisi uuden blogikirjoituksen "{postTitle}" seuraamassasi blogissa.',
    'email.blog.comment.subject': 'Uusi kommentti blogikirjoitukseen: "{postTitle}"',
    'email.blog.comment.body': '{commenterName} kommentoi blogikirjoitusta "{postTitle}": "{commentText}"',
    'email.blog.update.subject': 'Blogi päivitetty',
    'email.blog.update.body': 'Seuraamasi blogi on päivitetty.',
    // General comment notification emails
    'email.comment.general.subject': 'Uusi kommentti aiheesta "{contentTitle}"',
    'email.comment.general.body': '{commenterName} kommentoi artikkelia "{contentTitle}": "{commentText}"',
    'email.comment.reply.subject': 'Vastaa kommenttiisi',
    'email.comment.reply.body': '{replierName} vastasi kommenttiisi aiheeseen "{contentTitle}": "{replyText}"',
    'email.comment.like.subject': 'Kommenttisi pidettiin',
    'email.comment.like.body': '{likerName} pidin kommentistasi. Jatka sitoutumista!',
    // Content-specific comment notification emails
    'email.comment.fanArt.subject': 'Uusi kommentti fanitaiteesta: "{contentTitle}"',
    'email.comment.fanArt.body': '{commenterName} kommentoi fanitaidettasi "{contentTitle}": "{commentText}"',
    'email.comment.event.subject': 'Uusi kommentti tapahtumasta: "{contentTitle}"',
    'email.comment.event.body': '{commenterName} kommentoi tapahtumaa "{contentTitle}": "{commentText}"',
    'email.comment.revision.subject': 'Uusi huomautus tarkistuksesta',
    'email.comment.revision.body': '{commenterName} kommentoi tarkistustasi: "{commentText}"',
    'email.comment.feedback.subject': 'Uusi kommentti palautteesta',
    'email.comment.feedback.body': '{commenterName} kommentoi palauteasiaa: "{commentText}"',
    // Welcome email
    'email.welcome.subject': 'Tervetuloa kirjallisuuden universumiin!'
};