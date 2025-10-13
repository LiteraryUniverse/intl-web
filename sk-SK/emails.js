/**
 * @authors Jan Dvorak
 */
export default {
    'email.enrollAccount.subject': 'Pozvánka do Literary Universe pre {username}',
    'email.enrollAccount.message': `Ahoj {username}\n\n
    Radi by sme Vás pozvali do Literary Universe! Vytvorili sme pre vás špeciálne osobné konto, kde máte prístup ku všetkým funkciám Literary Universe! Pridajte sa k nám pri vytváraní novej generácie nástrojov na tvorivé písanie a čítanie!
    Ak chcete aktivovať svoje konto, jednoducho kliknite na odkaz nižšie:\n\n{url}`,
    'email.resetPassword.subject': 'Literary Universe resetovanie hesla',
    'email.resetPassword.message': `Dobrý deň, {username}!\n\n Dostali sme žiadosť o obnovenie hesla k vášmu kontu.
        Pre obnovenie hesla prosím postupujte podľa nasledujúceho odkazu:\n\n{url}`,
    'email.verifyEmail.subject': 'Overenie e-mailu Literary Universe',
    'email.verifyEmail.message': 'Ahoj {username}!\n\n Prosím, overte svoju e-mailovú adresu kliknutím na odkaz nižšie:\n\n{url}',
    // New html email keys
    'email.salutation': 'Dobrý deň, {username},',
    'email.welcome': 'Vitajte v Literary Universe!',
    'email.signature': 'S úctou,<br>tím Literary Universe</br>',
    'email.footer.settingsHtml': 'Nastavenia e-mailu môžete zmeniť v <link>nastaveniach konta</link>.',
    // Enrollment
    'email.enrollAccount.welcome': 'Vitajte na palube',
    'email.enrollAccount.messageHtml': 'Radi by sme vás pozvali do Literárneho vesmíru! Pripravili sme pre vás osobné konto, na ktorom máte prístup ku všetkým funkciám Literárneho vesmíru. Pridajte sa k nám pri vytváraní novej generácie tvorivého písania a čítania!',
    'email.enrollAccount.button': 'Prístup k vášmu účtu',
    'email.enrollAccount.signature': 'Tešíme sa na vás,<br>tím Literárneho vesmíru</br>',
    // Reset password
    'email.resetPassword.messageHtml': 'Dostali sme žiadosť o obnovenie hesla vášho konta. Kliknutím na tlačidlo nižšie môžete pokračovať v procese. Ak ste túto žiadosť nepodali, môžete tento e-mail ignorovať, ale možno je vhodný čas skontrolovať svoje bezpečnostné nastavenia.',
    'email.resetPassword.button': 'Obnovenie hesla',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Sme radi, že ste sa k nám pripojili! Kliknutím na tlačidlo nižšie overíte túto e-mailovú adresu.',
    'email.verifyEmail.button': 'Overenie tejto e-mailovej adresy',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Váš účet bol upgradovaný',
    'email.adminUpgrade.message': `Váš účet sme aktualizovali na {plan, select,
    explorer {Prieskumník}
    adventurer {Dobrodruh}
    storyteller {Rozprávač}
    other {}
  } úroveň na najbližšie {days} dni.\n\nUžívajte si to,\nLiterary Universe tím`,
    'email.adminUpgrade.messageHtml': `Vaše konto sme povýšili na {plan, select,
    explorer {Explorer}
    adventurer {Adventurer}
    storyteller {Storyteller}
    other {}
  } tier na nasledujúce {days, number} dni. Užite si to!`,
    'email.verification': 'Overenie e-mailu',
    'email.verifying': 'Overenie vášho e-mailu. Zaberie to len chvíľu...',
    'email.verified': 'Skvelé správy! Váš e-mail bol overený!',
    // The Way (Author Level Up)
    'theWay.levelUp.emailSubject': 'Gratulujeme! Dosiahli ste autorskú úroveň {level, number} na Literárnom vesmíre!',
    'theWay.levelUp.emailTitle': 'Gratulujeme! Dosiahli ste autorskú úroveň {level, number}!',
    'theWay.levelUp.emailIntro': 'Vaša oddanosť spisovateľskému remeslu bola odmenená!',
    'theWay.levelUp.emailGenre': 'Dosiahli ste úroveň {level, number} v žánri {genre} .',
    'theWay.levelUp.emailContinue': 'Pokračujte v ceste a odomknite ďalšie úspechy v hre The Way of the Author.',
    'theWay.levelUp.viewDashboard': 'Zobrazenie prístrojového panela',
    // Notifications - General content comment
    'email.notifications.contentComment.subject': 'Nový komentár k vášmu obsahu',
    'email.notifications.contentComment.title': 'Nový komentár na {contentType}',
    'email.notifications.contentComment.details': 'Názov: {contentTitle} - Od: {commenterName}',
    'email.notifications.contentComment.cta': 'Zobraziť komentár',
    // Notifications - Beta reader comment
    'email.notifications.betaComment.subject': 'Nová spätná väzba od beta čitateľa',
    'email.notifications.betaComment.title': 'Nová spätná väzba od beta čitateľa',
    'email.notifications.betaComment.details': 'Príbeh: {storyTitle}{chapter} - Od: {commenterName}',
    'email.notifications.betaComment.cta': 'Zobraziť spätnú väzbu',
    // Notifications - New message
    'email.notifications.newMessage.subject': 'Máte novú správu',
    'email.notifications.newMessage.title': 'Máte novú správu',
    'email.notifications.newMessage.details': 'Od: {senderName}',
    'email.notifications.newMessage.cta': 'Zobraziť správu',
    // Notifications - Chapter published
    'email.notifications.chapterPublished.subject': 'Uverejnená nová kapitola',
    'email.notifications.chapterPublished.title': 'Uverejnená nová kapitola',
    'email.notifications.chapterPublished.details': 'Príbeh: {storyTitle} - Kapitola: {chapterTitle}{suffix}',
    'email.notifications.chapterPublished.cta': 'Otvorená kapitola',
    // Notifications - First story created
    'email.notifications.firstStory.subject': 'Váš prvý príbeh je tu!',
    'email.notifications.firstStory.title': 'Váš prvý príbeh je naživo!',
    'email.notifications.firstStory.intro': 'Úžasný začiatok! Pokračujte v písaní a rozvíjajte svoj svet s užitočným poradenstvom na Ceste autora.',
    'email.notifications.firstStory.details': 'Príbeh: {storyTitle}',
    'email.notifications.firstStory.ctaResources': 'Pokračovať na stránke Cesta autora',
    'email.notifications.firstStory.ctaStory': 'Otvorte svoj príbeh',
    // Notifications - First story published (with level 1 achievement)
    'email.notifications.firstStoryPublished.subject': '🎉 Gratulujeme! Váš prvý príbeh je publikovaný a dosiahli ste autorskú úroveň 1!',
    'email.notifications.firstStoryPublished.title': '🎉 Vaša cesta sa začína!',
    'email.notifications.firstStoryPublished.intro': 'Gratulujeme k vydaniu prvého príbehu! Je to významný míľnik na vašej tvorivej ceste.',
    'email.notifications.firstStoryPublished.levelAchievement': '🌟 Dosiahli ste autorskú úroveň 1 na Ceste autora! Toto je len začiatok neuveriteľného dobrodružstva v rozprávaní príbehov.',
    'email.notifications.firstStoryPublished.encouragement': 'Každý veľký autor začínal svojím prvým publikovaným dielom. Píšte ďalej, rozvíjajte sa a nechajte svoju kreativitu prekvitať. Komunita Literárneho vesmíru je tu, aby vás podporovala na každom kroku.',
    'email.notifications.firstStoryPublished.ctaTheWay': 'Preskúmajte Cesta autora',
    'email.notifications.firstStoryPublished.ctaStory': 'Zobraziť váš publikovaný príbeh',
    // Notifications - First universe created
    'email.notifications.firstUniverse.subject': 'Gratulujeme k vášmu prvému vesmíru!',
    'email.notifications.firstUniverse.title': 'Gratulujeme k vytvoreniu prvého vesmíru!',
    'email.notifications.firstUniverse.intro': 'Vaša cesta za budovaním sveta sa začína. Tu je niekoľko zdrojov, ktoré vám pomôžu urobiť ďalšie kroky.',
    'email.notifications.firstUniverse.details': 'Vesmír: {universeName}',
    'email.notifications.firstUniverse.ctaResources': 'Preskúmajte Cesta autora',
    'email.notifications.firstUniverse.ctaUniverse': 'Otvorte svoj vesmír',
    // Notifications - First chapter published for a story
    'email.notifications.firstChapterPublished.subject': 'Vaša prvá kapitola je publikovaná!',
    'email.notifications.firstChapterPublished.title': 'Prvá kapitola vášho príbehu je uverejnená!',
    'email.notifications.firstChapterPublished.intro': 'Zdieľajte svoju prácu, získavajte spätnú väzbu a udržujte dynamiku.',
    'email.notifications.firstChapterPublished.details': 'Príbeh: {storyTitle} - Kapitola: {chapterTitle}',
    'email.notifications.firstChapterPublished.ctaChapter': 'Otvorená kapitola',
    'email.notifications.firstChapterPublished.ctaStory': 'Zobraziť príbeh',
    // Notifications - Story finished
    'email.notifications.storyFinished.subject': 'Gratulujeme k dokončeniu príbehu!',
    'email.notifications.storyFinished.title': 'Dokázali ste to - váš príbeh je dokončený!',
    'email.notifications.storyFinished.intro': 'Oslávte tento míľnik! Zvážte zverejnenie, zdieľanie alebo zaslanie svojho príbehu, aby ste oslovili viac čitateľov.',
    'email.notifications.storyFinished.details': 'Príbeh: {storyTitle}',
    'email.notifications.storyFinished.cta': 'Zobraziť váš príbeh',
    // Notifications - Fan club new subscriber
    'email.notifications.newFanSubscriber.subject': 'Nový predplatiteľ fanklubu',
    'email.notifications.newFanSubscriber.title': 'Máte nového predplatiteľa fanklubu!',
    'email.notifications.newFanSubscriber.details': 'Odberateľ: {subscriberName}',
    'email.notifications.newFanSubscriber.cta': 'Zobraziť fanklub',
    // Notifications - Fan club subscription ended
    'email.notifications.fanUnsubscribed.subject': 'Člen opustil váš fanklub',
    'email.notifications.fanUnsubscribed.title': 'Člen opustil váš fanklub',
    'email.notifications.fanUnsubscribed.intro': 'Chceli sme vás informovať o nedávnej zmene. Zvážte zdieľanie aktualizácií alebo exkluzívneho obsahu, aby ste zvýšili angažovanosť.',
    'email.notifications.fanUnsubscribed.details': 'Bývalý člen: {name}',
    'email.notifications.fanUnsubscribed.cta': 'Otvorený fanklub',
    // Notifications - Friend request
    'email.notifications.friendRequest.subject': 'Nová žiadosť o priateľstvo',
    'email.notifications.friendRequest.title': 'Nová žiadosť o priateľstvo',
    'email.notifications.friendRequest.details': 'Od: {requesterName}',
    'email.notifications.friendRequest.cta': 'Žiadosť o preskúmanie',
    // Notifications - Collaboration invitation
    'email.notifications.collabInvite.subject': 'Pozvánka na spoluprácu',
    'email.notifications.collabInvite.title': 'Máte pozvánku na spoluprácu',
    'email.notifications.collabInvite.details': 'Pozývateľ: {inviterName} - Úloha: {role} - Cieľ: {targetType} - {targetTitle}',
    'email.notifications.collabInvite.cta': 'Pozvánka na recenziu',
    // Notifications - Organization invitation
    'email.notifications.orgInvite.subject': 'Pozvanie do organizácie',
    'email.notifications.orgInvite.title': 'Pozývame vás na stránku {orgName}',
    'email.notifications.orgInvite.details': 'Pozývateľ: {inviterName}',
    'email.notifications.orgInvite.cta': 'Pozvánka na recenziu',
    // Notifications - Daily digest
    'email.notifications.dailyDigest.subject': 'Vaše denné aktualizácie',
    'email.notifications.dailyDigest.title': 'Vaše denné aktualizácie',
    'email.notifications.dailyDigest.intro': 'Dnes sa stalo toto.',
    'email.notifications.dailyDigest.cta': 'Zobraziť všetky aktualizácie',
    'email.notifications.dailyDigest.empty': 'Dnes žiadne aktualizácie.',
    // Notifications - Followed author posted a new blog
    'email.notifications.followedBlogPost.subject': 'Nový príspevok na blogu od autora, ktorého sledujete',
    'email.notifications.followedBlogPost.title': '{authorName} zverejnil nový blog',
    'email.notifications.followedBlogPost.details': 'Názov: {postTitle}',
    'email.notifications.followedBlogPost.cta': 'Prečítajte si príspevok',
    // Notifications - Followed author published new work
    'email.notifications.followedNewWork.subject': 'Nové dielo od autora, ktorého sledujete',
    'email.notifications.followedNewWork.title': '{authorName} uverejnila novú stránku {workType}.',
    'email.notifications.followedNewWork.details': 'Názov: {title}',
    'email.notifications.followedNewWork.cta': 'Zobraziť',
    // Story notification emails
    'email.story.newComment.subject': 'Nový komentár k "{storyTitle}"',
    'email.story.newComment.body': '{commenterName} zanechal komentár k vášmu príbehu "{storyTitle}": {commentText}',
    'email.story.betaComment.subject': 'Nová beta spätná väzba na "{storyTitle}"',
    'email.story.betaComment.body': '{commenterName} poskytol beta spätnú väzbu na "{storyTitle}": {commentText}',
    'email.story.collaboratorAccepted.subject': 'Nový člen tímu pre "{storyTitle}"',
    'email.story.collaboratorAccepted.body': '{collaboratorName} prijala vaše pozvanie na spoluprácu na stránke{storyTitle}ako {role}.',
    'email.story.milestone.subject': 'Gratulujeme! Míľnik dosiahnutý na "{storyTitle}"',
    'email.story.milestone.body': 'Skvelé správy! Vaša kapitola "{chapterTitle}" z "{storyTitle}" dosiahla {count} {milestone}. Pokračujte v skvelej práci!',
    'email.story.betaRevision.subject': 'K dispozícii je nová beta verzia: "{chapterTitle}"',
    'email.story.betaRevision.body': '{authorName} zverejnila novú beta verziu "{chapterTitle}" z "{storyTitle}". Budeme veľmi vďační za vašu spätnú väzbu!',
    'email.story.newChapter.subject': 'K dispozícii je nová kapitola: "{storyTitle}"',
    'email.story.newChapter.body': '{authorName} uverejnila novú kapitolu "{storyTitle}": "{chapterTitle}". Príjemné čítanie!',
    // Universe notification emails
    'email.universe.newStory.subject': 'Nový príbeh vo vesmíre: "{storyTitle}"',
    'email.universe.newStory.body': '{authorName} pridaný nový príbeh "{storyTitle}" do sveta, ktorý sledujete. Objavte nové dobrodružstvá!',
    'email.universe.collaboratorChange.subject': 'Aktualizácia spolupráce s vesmírom',
    'email.universe.collaboratorChange.body': 'V tíme pre spoluprácu na vesmíre, na ktorom sa podieľate, došlo k zmene.',
    'email.universe.update.subject': 'Vesmír aktualizovaný',
    'email.universe.update.body': 'Sledovaný vesmír bol aktualizovaný novým obsahom.',
    'email.universe.comment.subject': 'Nový komentár k vesmíru',
    'email.universe.comment.body': '{commenterName} komentoval vesmír, ktorý sledujete: "{commentText}"',
    // Blog notification emails
    'email.blog.newPost.subject': 'Nový príspevok na blogu: "{postTitle}"',
    'email.blog.newPost.body': '{authorName} zverejnil nový príspevok na blogu "{postTitle}" na blogu, ktorý sledujete.',
    'email.blog.comment.subject': 'Nový komentár na blogu: "{postTitle}"',
    'email.blog.comment.body': '{commenterName} komentoval príspevok na blogu "{postTitle}": "{commentText}"',
    'email.blog.update.subject': 'Blog aktualizovaný',
    'email.blog.update.body': 'Blog, ktorý sledujete, bol aktualizovaný.',
    // General comment notification emails
    'email.comment.general.subject': 'Nový komentár k "{contentTitle}"',
    'email.comment.general.body': '{commenterName} komentoval "{contentTitle}": "{commentText}"',
    'email.comment.reply.subject': 'Odpoveď na váš komentár',
    'email.comment.reply.body': '{replierName} odpovedal na váš komentár k "{contentTitle}": "{replyText}"',
    'email.comment.like.subject': 'Váš komentár sa páčil',
    'email.comment.like.body': '{likerName} páčil váš komentár. Pokračujte v zapojení!',
    // Content-specific comment notification emails
    'email.comment.fanArt.subject': 'Nový komentár k fanúšikovskému umeniu: "{contentTitle}"',
    'email.comment.fanArt.body': '{commenterName} komentoval váš fan art "{contentTitle}": "{commentText}"',
    'email.comment.event.subject': 'Nový komentár k udalosti: "{contentTitle}"',
    'email.comment.event.body': '{commenterName} komentoval udalosť "{contentTitle}": "{commentText}"',
    'email.comment.revision.subject': 'Nová pripomienka k revízii',
    'email.comment.revision.body': '{commenterName} komentoval vašu revíziu: "{commentText}"',
    'email.comment.feedback.subject': 'Nový komentár k spätnej väzbe',
    'email.comment.feedback.body': '{commenterName} komentoval váš problém so spätnou väzbou: "{commentText}"',
    // Welcome email
    'email.welcome.subject': 'Vitajte v Literárnom vesmíre!'
};