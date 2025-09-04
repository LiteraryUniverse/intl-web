/**
 * @authors Jan Dvorak
 */
export default {
    'email.enrollAccount.subject': 'Pozvánka na Literary Universe pro {username}',
    'email.enrollAccount.message': `Dobrý den {username},\n\n
    Chtěli bychom Vás pozvat na Literary Universe! Vytvořili jsme pro Vás speciální osobní účet na kterém můžete otestovat všechny funkce Literary Universe! Doufáme že s námi budete vytvářet další generaci nástrojů pro kreativní psaní a čtení!
To activate your account, simply click the link below:\n\n{url}`,
    'email.resetPassword.subject': 'Literary Universe reset hesla k účtu',
    'email.resetPassword.message': `Dobrý den {username}!\n\n Obdrželi jsme Váš požadavek na resetování Vašeho hesla.
        Navštivte následující odkaz k dokončení tohoto procesu:\n\n{url}`,
    'email.verifyEmail.subject': 'Literary Universe potvrzení e-mailu',
    'email.verifyEmail.message': 'Dobrý den {username}!\\n\\n Prosím potvrďte tuto e-mailovou adresu návštěvou tohoto odkazu:\\n{url}',
    // New html email keys
    'email.salutation': 'Dobrý den {username},',
    'email.welcome': 'Vítejte na Literary Universe!',
    'email.signature': 'S přáním hezkého dne,<br />Literary Universe tým',
    // Enrollment
    'email.enrollAccount.welcome': 'Vítejte na palubě',
    'email.enrollAccount.messageHtml': 'Rádi bychom vás pozvali do Literárního vesmíru! Připravili jsme pro vás osobní účet, kde máte přístup ke všem funkcím Literárního vesmíru. Připojte se k nám a vytvořte novou generaci tvůrčího psaní a čtení!',
    'email.enrollAccount.button': 'Zpřístupnit účet',
    'email.enrollAccount.signature': 'Těšíme se na vás,<br />Literary Universe team',
    // Reset password
    'email.resetPassword.messageHtml': 'Obdrželi jsme žádost o obnovení hesla k vašemu účtu. Pro pokračování v procesu klikněte na tlačítko níže. Pokud jste tuto žádost nepodali, můžete tento e-mail ignorovat, ale možná je vhodný čas zkontrolovat nastavení zabezpečení.',
    'email.resetPassword.button': 'Resetovat heslo',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Jsme rádi, že jste se k nám připojili! Klikněte prosím na tlačítko níže pro ověření této e-mailové adresy.',
    'email.verifyEmail.button': 'Potvrzení e-mailové adresy',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Váš účet byl upgradován',
    'email.adminUpgrade.message': `Upgradovali jsme Váš účet na {plan, select,
    explorer {Explorer}
    adventurer {Adventurer}
    storyteller {Storyteller}
    other {}
  } plán na následujících {days} dní.\n\n
S přáním hezkého dne,\n
Literary Universe tým`,
    'email.adminUpgrade.messageHtml': `Upgradovali jsme Váš účet na {plan, select,
    explorer {Explorer}
    adventurer {Adventurer}
    storyteller {Storyteller}
    other {}
  } plán na následujících {days} dní.`,
    'email.verification': 'Ověření emailu',
    'email.verifying': 'Ověřování Vašeho e-mailu. Tohle může chvilku trvat...',
    'email.verified': 'Skvělá zpráva! Váš e-mail byl ověřen!',
    // The Way (Author Level Up)
    'theWay.levelUp.emailSubject': 'Gratulujeme! Dosáhli jste autorské úrovně {level} na Literárním vesmíru!',
    'theWay.levelUp.emailTitle': 'Gratulujeme! Dosáhli jste autorské úrovně {level}!',
    'theWay.levelUp.emailIntro': 'Vaše oddanost spisovatelskému řemeslu byla odměněna!',
    'theWay.levelUp.emailGenre': 'V žánru {genre} jste dosáhli úrovně {level} .',
    'theWay.levelUp.emailContinue': 'Pokračujte ve své cestě a odemkněte další úspěchy na autorské cestě.',
    'theWay.levelUp.viewDashboard': 'Zobrazení přístrojové desky',
    // Notifications - General content comment
    'email.notifications.contentComment.subject': 'Nový komentář k vašemu obsahu',
    'email.notifications.contentComment.title': 'Nový komentář na {contentType}',
    'email.notifications.contentComment.details': 'Název: {contentTitle} - Od: Z: {commenterName}',
    'email.notifications.contentComment.cta': 'Zobrazit komentář',
    // Notifications - Beta reader comment
    'email.notifications.betaComment.subject': 'Nová zpětná vazba od beta čtenářů',
    'email.notifications.betaComment.title': 'Nová zpětná vazba od beta čtenářů',
    'email.notifications.betaComment.details': 'Příběh: {storyTitle}{chapter} - Od: {commenterName}',
    'email.notifications.betaComment.cta': 'Zobrazit zpětnou vazbu',
    // Notifications - New message
    'email.notifications.newMessage.subject': 'Máte novou zprávu',
    'email.notifications.newMessage.title': 'Máte novou zprávu',
    'email.notifications.newMessage.details': 'Od: {senderName}',
    'email.notifications.newMessage.cta': 'Zobrazit zprávu',
    // Notifications - Chapter published
    'email.notifications.chapterPublished.subject': 'Zveřejněna nová kapitola',
    'email.notifications.chapterPublished.title': 'Zveřejněna nová kapitola',
    'email.notifications.chapterPublished.details': 'Příběh: {storyTitle} - Kapitola: Příběh: {chapterTitle}{suffix}',
    'email.notifications.chapterPublished.cta': 'Otevřená kapitola',
    // Notifications - First story created
    'email.notifications.firstStory.subject': 'Váš první příběh je zde!',
    'email.notifications.firstStory.title': 'Váš první příběh je v provozu!',
    'email.notifications.firstStory.intro': 'Úžasný začátek! Pište dál a rozšiřujte svůj svět pomocí užitečných pokynů na stránkách Cesta autora.',
    'email.notifications.firstStory.details': 'Příběh: {storyTitle}',
    'email.notifications.firstStory.ctaResources': 'Pokračovat na stránce Cesta autora',
    'email.notifications.firstStory.ctaStory': 'Otevřete svůj příběh',
    // Notifications - First universe created
    'email.notifications.firstUniverse.subject': 'Gratulujeme k prvnímu vesmíru!',
    'email.notifications.firstUniverse.title': 'Gratulujeme k vytvoření prvního vesmíru!',
    'email.notifications.firstUniverse.intro': 'Vaše cesta k budování světa začíná. Zde je několik zdrojů, které vám pomohou podniknout další kroky.',
    'email.notifications.firstUniverse.details': 'Vesmír: {universeName}',
    'email.notifications.firstUniverse.ctaResources': 'Prozkoumat Cesta autora',
    'email.notifications.firstUniverse.ctaUniverse': 'Otevřete svůj vesmír',
    // Notifications - First chapter published for a story
    'email.notifications.firstChapterPublished.subject': 'Vaše první kapitola je zveřejněna!',
    'email.notifications.firstChapterPublished.title': 'První kapitola vašeho příběhu je zveřejněna!',
    'email.notifications.firstChapterPublished.intro': 'Sdílejte svou práci, sbírejte zpětnou vazbu a udržujte dynamiku.',
    'email.notifications.firstChapterPublished.details': 'Příběh: {storyTitle} - Kapitola: Příběh: {chapterTitle}',
    'email.notifications.firstChapterPublished.ctaChapter': 'Otevřená kapitola',
    'email.notifications.firstChapterPublished.ctaStory': 'Zobrazit příběh',
    // Notifications - Story finished
    'email.notifications.storyFinished.subject': 'Gratulujeme k dokončení příběhu!',
    'email.notifications.storyFinished.title': 'Dokázali jste to - váš příběh je dokončen!',
    'email.notifications.storyFinished.intro': 'Oslavte tento milník! Zvažte zveřejnění, sdílení nebo odeslání svého příběhu, abyste oslovili více čtenářů.',
    'email.notifications.storyFinished.details': 'Příběh: {storyTitle}',
    'email.notifications.storyFinished.cta': 'Zobrazit váš příběh',
    // Notifications - Fan club new subscriber
    'email.notifications.newFanSubscriber.subject': 'Nový předplatitel fanklubu',
    'email.notifications.newFanSubscriber.title': 'Máte nového předplatitele fanklubu!',
    'email.notifications.newFanSubscriber.details': 'Předplatitel: {subscriberName}',
    'email.notifications.newFanSubscriber.cta': 'Zobrazit fanklub',
    // Notifications - Fan club subscription ended
    'email.notifications.fanUnsubscribed.subject': 'Člen opustil váš fanklub',
    'email.notifications.fanUnsubscribed.title': 'Člen opustil váš fanklub',
    'email.notifications.fanUnsubscribed.intro': 'Rádi bychom vás informovali o nedávné změně. Zvažte sdílení aktualizací nebo exkluzivního obsahu, abyste zvýšili zapojení.',
    'email.notifications.fanUnsubscribed.details': 'Bývalý člen: {name}',
    'email.notifications.fanUnsubscribed.cta': 'Otevřený fanklub',
    // Notifications - Friend request
    'email.notifications.friendRequest.subject': 'Nová žádost o přátelství',
    'email.notifications.friendRequest.title': 'Nová žádost o přátelství',
    'email.notifications.friendRequest.details': 'Od: {requesterName}',
    'email.notifications.friendRequest.cta': 'Žádost o přezkoumání',
    // Notifications - Collaboration invitation
    'email.notifications.collabInvite.subject': 'Pozvánka ke spolupráci',
    'email.notifications.collabInvite.title': 'Máte pozvánku ke spolupráci',
    'email.notifications.collabInvite.details': 'Pozvánka: {inviterName} - Role: {role} - Cíl: {targetType} - {targetTitle}',
    'email.notifications.collabInvite.cta': 'Pozvánka na recenzi',
    // Notifications - Organization invitation
    'email.notifications.orgInvite.subject': 'Pozvánka do organizace',
    'email.notifications.orgInvite.title': 'Jste zváni, abyste se připojili k {orgName}',
    'email.notifications.orgInvite.details': 'Inviter: {inviterName}',
    'email.notifications.orgInvite.cta': 'Pozvánka na recenzi',
    // Notifications - Daily digest
    'email.notifications.dailyDigest.subject': 'Vaše denní aktualizace',
    'email.notifications.dailyDigest.title': 'Vaše denní aktualizace',
    'email.notifications.dailyDigest.intro': 'Dnes se stalo toto.',
    'email.notifications.dailyDigest.cta': 'Zobrazit všechny aktualizace',
    'email.notifications.dailyDigest.empty': 'Dnes žádné aktualizace.',
    // Notifications - Followed author posted a new blog
    'email.notifications.followedBlogPost.subject': 'Nový příspěvek na blogu od autora, kterého sledujete',
    'email.notifications.followedBlogPost.title': '{authorName} zveřejnil nový blog',
    'email.notifications.followedBlogPost.details': 'Název: {postTitle}',
    'email.notifications.followedBlogPost.cta': 'Přečtěte si příspěvek',
    // Notifications - Followed author published new work
    'email.notifications.followedNewWork.subject': 'Nové dílo od autora, kterého sledujete',
    'email.notifications.followedNewWork.title': '{authorName} zveřejnil novou stránku {workType}',
    'email.notifications.followedNewWork.details': 'Název: {title}',
    'email.notifications.followedNewWork.cta': 'Zobrazit'
};