/**
 * @authors Jan Dvorak
 */
export default {
    'email.enrollAccount.subject': 'Inbjudan till Literary Universe för {username}',
    'email.enrollAccount.message': `Hej {username}\n\n
    Vi skulle vilja bjuda in dig till Literary Universe! Vi har skapat ett speciellt personligt konto för dig där du kan få tillgång till alla funktioner i Literary Universe! Var med oss och skapa nästa generation av verktyg för kreativt skrivande och läsning!
    För att aktivera ditt konto, klicka bara på länken nedan:\n\n{url}`,
    'email.resetPassword.subject': 'Återställning av lösenord för Literary Universe',
    'email.resetPassword.message': `Hej {username}!\n\n Vi har fått en begäran om att återställa ditt lösenord för ditt konto.
        Var god följ länken nedan för att återställa ditt lösenord:\n\n{url}`,
    'email.verifyEmail.subject': 'E-postverifiering för Literary Universe',
    'email.verifyEmail.message': 'Hej {username}!\n\n Var god verifiera din e-postadress genom att klicka på länken nedan:\n\n{url}',
    // New html email keys
    'email.salutation': 'Hej {username},',
    'email.welcome': 'Välkommen till Literary Universe!',
    'email.signature': 'Med vänliga hälsningar,<br />Literary Universe-teamet',
    // Enrollment
    'email.enrollAccount.welcome': 'Välkommen ombord',
    'email.enrollAccount.messageHtml': 'Vi vill gärna bjuda in dig till Litterärt Universum! Vi har förberett ett personligt konto åt dig där du kan få tillgång till alla funktioner i Literary Universe. Var med och skapa nästa generations kreativa skrivande och läsande!',
    'email.enrollAccount.button': 'Få tillgång till ditt konto',
    'email.enrollAccount.signature': 'Vi ser fram emot att träffa dig,<br />Literary Universe team',
    // Reset password
    'email.resetPassword.messageHtml': 'Vi har fått en begäran om att återställa lösenordet för ditt konto. Vänligen klicka på knappen nedan för att fortsätta processen. Om du inte har gjort denna begäran kan du ignorera detta e-postmeddelande, men det kan vara en bra tid att se över dina säkerhetsinställningar.',
    'email.resetPassword.button': 'Återställ lösenord',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Vi är glada att ha dig ombord! Vänligen klicka på knappen nedan för att verifiera denna e-postadress.',
    'email.verifyEmail.button': 'Verifiera denna e-postadress',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Ditt konto har uppgraderats',
    'email.adminUpgrade.message': `Vi har uppgraderat ditt konto till {plan, select,
    explorer {Utforskare}
    adventurer {Äventyrare}
    storyteller {Berättare}
    other {}
  } nivå för de nästa {days} dagarna.\n\nNjut av det,\nLiterary Universe-teamet`,
    'email.adminUpgrade.messageHtml': `Vi har uppgraderat ditt konto till {plan, select,
    explorer {Utforskare}
    adventurer {Äventyrare}
    storyteller {Berättare}
    other {}
  } nivå för de nästa {days} dagarna. Njut av det!`,
    'email.verification': 'E-postverifiering',
    'email.verifying': 'Verifierar din e-post. Detta kommer bara ta en kort stund...',
    'email.verified': 'Fantastiska nyheter! Din e-post har blivit verifierad!',
    // The Way (Author Level Up)
    'theWay.levelUp.emailSubject': 'Gratulerar, gratulerar, gratulerar! Du har nått författarnivå {level} på Literary Universe!',
    'theWay.levelUp.emailTitle': 'Gratulerar, gratulerar! Du har nått författarnivå {level}!',
    'theWay.levelUp.emailIntro': 'Din hängivenhet till skrivandets hantverk har belönats!',
    'theWay.levelUp.emailGenre': 'Du har uppnått nivån {level} i genren {genre} .',
    'theWay.levelUp.emailContinue': 'Fortsätt din resa och lås upp fler prestationer på The Way of the Author.',
    'theWay.levelUp.viewDashboard': 'Visa din kontrollpanel',
    // Notifications - General content comment
    'email.notifications.contentComment.subject': 'Ny kommentar om ditt innehåll',
    'email.notifications.contentComment.title': 'Ny kommentar på din {contentType}',
    'email.notifications.contentComment.details': 'Titel: {contentTitle} - Från: {commenterName}',
    'email.notifications.contentComment.cta': 'Visa kommentar',
    // Notifications - Beta reader comment
    'email.notifications.betaComment.subject': 'Feedback från nya beta läsare',
    'email.notifications.betaComment.title': 'Feedback från nya beta läsare',
    'email.notifications.betaComment.details': 'Berättelse: {storyTitle}{chapter} - Från: {commenterName}',
    'email.notifications.betaComment.cta': 'Visa feedback',
    // Notifications - New message
    'email.notifications.newMessage.subject': 'Du har ett nytt meddelande',
    'email.notifications.newMessage.title': 'Du har ett nytt meddelande',
    'email.notifications.newMessage.details': 'Från: {senderName}',
    'email.notifications.newMessage.cta': 'Visa meddelande',
    // Notifications - Chapter published
    'email.notifications.chapterPublished.subject': 'Nytt kapitel publicerat',
    'email.notifications.chapterPublished.title': 'Nytt kapitel publicerat',
    'email.notifications.chapterPublished.details': 'Berättelse: {storyTitle} - Kapitel: {chapterTitle}{suffix}',
    'email.notifications.chapterPublished.cta': 'Öppet kapitel',
    // Notifications - First story created
    'email.notifications.firstStory.subject': 'Din första berättelse är här!',
    'email.notifications.firstStory.title': 'Din första berättelse är live!',
    'email.notifications.firstStory.intro': 'Fantastisk start! Fortsätt att skriva och utveckla din värld med hjälp av vägledning på The Way of the Author.',
    'email.notifications.firstStory.details': 'Berättelse: {storyTitle}',
    'email.notifications.firstStory.ctaResources': 'Fortsätt på The Way of the Author',
    'email.notifications.firstStory.ctaStory': 'Öppna din berättelse',
    // Notifications - First universe created
    'email.notifications.firstUniverse.subject': 'Gratulerar till ditt första universum!',
    'email.notifications.firstUniverse.title': 'Grattis till att ha skapat ditt första universum!',
    'email.notifications.firstUniverse.intro': 'Din världsbyggnadsresa börjar. Här är några resurser som hjälper dig att ta nästa steg.',
    'email.notifications.firstUniverse.details': 'Universum: {universeName}',
    'email.notifications.firstUniverse.ctaResources': 'Utforska författarens väg',
    'email.notifications.firstUniverse.ctaUniverse': 'Öppna ditt universum',
    // Notifications - First chapter published for a story
    'email.notifications.firstChapterPublished.subject': 'Ditt första kapitel är publicerat!',
    'email.notifications.firstChapterPublished.title': 'Första kapitlet i din berättelse är publicerat!',
    'email.notifications.firstChapterPublished.intro': 'Dela med dig av ditt arbete, samla in feedback och fortsätt på den inslagna vägen.',
    'email.notifications.firstChapterPublished.details': 'Berättelse: {storyTitle} - Kapitel: {chapterTitle}',
    'email.notifications.firstChapterPublished.ctaChapter': 'Öppet kapitel',
    'email.notifications.firstChapterPublished.ctaStory': 'Visa berättelse',
    // Notifications - Story finished
    'email.notifications.storyFinished.subject': 'Grattis till att ha avslutat din berättelse!',
    'email.notifications.storyFinished.title': 'Du gjorde det - din berättelse är klar!',
    'email.notifications.storyFinished.intro': 'Fira denna milstolpe! Överväg att publicera, dela eller skicka in din berättelse för att nå fler läsare.',
    'email.notifications.storyFinished.details': 'Berättelse: {storyTitle}',
    'email.notifications.storyFinished.cta': 'Se din berättelse',
    // Notifications - Fan club new subscriber
    'email.notifications.newFanSubscriber.subject': 'Ny medlem i fanklubben',
    'email.notifications.newFanSubscriber.title': 'Du har en ny fanclub-prenumerant!',
    'email.notifications.newFanSubscriber.details': 'Prenumerant: {subscriberName}',
    'email.notifications.newFanSubscriber.cta': 'Visa fanclub',
    // Notifications - Fan club subscription ended
    'email.notifications.fanUnsubscribed.subject': 'En medlem lämnade din fanclub',
    'email.notifications.fanUnsubscribed.title': 'En medlem lämnade din fanclub',
    'email.notifications.fanUnsubscribed.intro': 'Vi ville informera dig om en nyligen genomförd förändring. Överväg att dela uppdateringar eller exklusivt innehåll för att öka engagemanget.',
    'email.notifications.fanUnsubscribed.details': 'Tidigare medlem: {name}',
    'email.notifications.fanUnsubscribed.cta': 'Öppen fanclub',
    // Notifications - Friend request
    'email.notifications.friendRequest.subject': 'Ny vänförfrågan',
    'email.notifications.friendRequest.title': 'Ny vänförfrågan',
    'email.notifications.friendRequest.details': 'Från: {requesterName}',
    'email.notifications.friendRequest.cta': 'Begäran om granskning',
    // Notifications - Collaboration invitation
    'email.notifications.collabInvite.subject': 'Inbjudan till samarbete',
    'email.notifications.collabInvite.title': 'Du har en inbjudan till samarbete',
    'email.notifications.collabInvite.details': 'Inbjudare: {inviterName} - Roll: {role} - Mål: {targetType} - {targetTitle}',
    'email.notifications.collabInvite.cta': 'Inbjudan till granskning',
    // Notifications - Organization invitation
    'email.notifications.orgInvite.subject': 'Inbjudan att gå med i en organisation',
    'email.notifications.orgInvite.title': 'Du är inbjuden att gå med på {orgName}',
    'email.notifications.orgInvite.details': 'Uppringare: {inviterName}',
    'email.notifications.orgInvite.cta': 'Inbjudan till granskning',
    // Notifications - Daily digest
    'email.notifications.dailyDigest.subject': 'Dina dagliga uppdateringar',
    'email.notifications.dailyDigest.title': 'Dina dagliga uppdateringar',
    'email.notifications.dailyDigest.intro': 'Här är vad som hände idag.',
    'email.notifications.dailyDigest.cta': 'Visa alla uppdateringar',
    'email.notifications.dailyDigest.empty': 'Inga uppdateringar idag.',
    // Notifications - Followed author posted a new blog
    'email.notifications.followedBlogPost.subject': 'Nytt blogginlägg från en författare som du följer',
    'email.notifications.followedBlogPost.title': '{authorName} postade en ny blogg',
    'email.notifications.followedBlogPost.details': 'Titel: {postTitle}',
    'email.notifications.followedBlogPost.cta': 'Läs inlägget',
    // Notifications - Followed author published new work
    'email.notifications.followedNewWork.subject': 'Nytt verk från en författare som du följer',
    'email.notifications.followedNewWork.title': '{authorName} publicerat en ny {workType}',
    'email.notifications.followedNewWork.details': 'Titel: {title}',
    'email.notifications.followedNewWork.cta': 'Utsikt',
    // Story notification emails
    'email.story.newComment.subject': 'Ny kommentar till "{storyTitle}"',
    'email.story.newComment.body': '{commenterName} lämnade en kommentar till din berättelse "{storyTitle}": {commentText}',
    'email.story.betaComment.subject': 'Ny beta-feedback på "{storyTitle}"',
    'email.story.betaComment.body': '{commenterName} gav beta feedback på "{storyTitle}": {commentText}',
    'email.story.collaboratorAccepted.subject': 'Ny medarbetare för "{storyTitle}"',
    'email.story.collaboratorAccepted.body': '{collaboratorName} har accepterat din inbjudan att samarbeta på "{storyTitle}" som en {role}.',
    'email.story.milestone.subject': 'Gratulerar, gratulerar! Milstolpe uppnådd på "{storyTitle}"',
    'email.story.milestone.body': 'Goda nyheter! Ditt kapitel "{chapterTitle}" från "{storyTitle}" har nått {count} {milestone}. Fortsätt med det fantastiska arbetet!',
    'email.story.betaRevision.subject': 'Ny betaversion tillgänglig: "{chapterTitle}"',
    'email.story.betaRevision.body': '{authorName} har publicerat en ny betaversion av "{chapterTitle}" från "{storyTitle}". Din feedback skulle vara mycket uppskattad!',
    'email.story.newChapter.subject': 'Nytt kapitel tillgängligt: "{storyTitle}"',
    'email.story.newChapter.body': '{authorName} har publicerat ett nytt kapitel av "{storyTitle}": "{chapterTitle}". Trevlig läsning!',
    // Universe notification emails
    'email.universe.newStory.subject': 'Ny berättelse i universum: "{storyTitle}"',
    'email.universe.newStory.body': '{authorName} lagt till en ny berättelse "{storyTitle}" till ett universum du följer. Upptäck nya äventyr!',
    'email.universe.collaboratorChange.subject': 'Uppdatering av Universe-samarbetet',
    'email.universe.collaboratorChange.body': 'Det har skett en förändring i samarbetsteamet för ett universum som du är involverad i.',
    'email.universe.update.subject': 'Universum uppdaterat',
    'email.universe.update.body': 'Ett universum som du följer har uppdaterats med nytt innehåll.',
    'email.universe.comment.subject': 'Ny kommentar om universum',
    'email.universe.comment.body': '{commenterName} kommenterade ett universum som du följer: "{commentText}"',
    // Blog notification emails
    'email.blog.newPost.subject': 'Nytt blogginlägg: "{postTitle}"',
    'email.blog.newPost.body': '{authorName} publicerat ett nytt blogginlägg "{postTitle}" på en blogg som du följer.',
    'email.blog.comment.subject': 'Ny kommentar till blogginlägg: "{postTitle}"',
    'email.blog.comment.body': '{commenterName} kommenterade blogginlägget "{postTitle}": "{commentText}"',
    'email.blog.update.subject': 'Blogg uppdaterad',
    'email.blog.update.body': 'En blogg som du följer har uppdaterats.',
    // General comment notification emails
    'email.comment.general.subject': 'Ny kommentar till "{contentTitle}"',
    'email.comment.general.body': '{commenterName} kommenterade "{contentTitle}": "{commentText}"',
    'email.comment.reply.subject': 'Svara på din kommentar',
    'email.comment.reply.body': '{replierName} svarade på din kommentar om "{contentTitle}": "{replyText}"',
    'email.comment.like.subject': 'Din kommentar gillades',
    'email.comment.like.body': '{likerName} gillade din kommentar. Fortsätt engagera dig!',
    // Content-specific comment notification emails
    'email.comment.fanArt.subject': 'Ny kommentar om fan art: "{contentTitle}"',
    'email.comment.fanArt.body': '{commenterName} kommenterade din fanart "{contentTitle}": "{commentText}"',
    'email.comment.event.subject': 'Ny kommentar om händelse: "{contentTitle}"',
    'email.comment.event.body': '{commenterName} kommenterade händelsen "{contentTitle}": "{commentText}"',
    'email.comment.revision.subject': 'Ny kommentar om revidering',
    'email.comment.revision.body': '{commenterName} kommenterade din revision: "{commentText}"',
    'email.comment.feedback.subject': 'Ny kommentar om återkoppling',
    'email.comment.feedback.body': '{commenterName} kommenterade på din feedbackfråga: "{commentText}"',
    // Welcome email
    'email.welcome.subject': 'Välkommen till Literary Universe!'
};