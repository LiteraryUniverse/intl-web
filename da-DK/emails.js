/**
 * @authors Jan Dvorak
 */
export default {
    'email.enrollAccount.subject': 'Invitation til Literary Universe for {username}',
    'email.enrollAccount.message': `Hej {username}\n\n
    Vi vil gerne invitere dig til Literary Universe! Vi har oprettet en speciel personlig konto til dig, hvor du kan få adgang til alle funktioner i Literary Universe! Vær med til at skabe næste generation af kreative skrive- og læseværktøjer!
    For at aktivere din konto, skal du blot klikke på linket nedenfor:\n\n{url}`,
    'email.resetPassword.subject': 'Literary Universe nulstil adgangskode',
    'email.resetPassword.message': `Hej {username}!\n\n Vi har modtaget en anmodning om at nulstille din adgangskode til din konto.
        Følg venligst linket nedenfor for at nulstille din adgangskode:\n\n{url}`,
    'email.verifyEmail.subject': 'Literary Universe e-mail verifikation',
    'email.verifyEmail.message': 'Hej {username}!\n\n Verificer venligst din e-mailadresse ved at klikke på linket nedenfor:\n\n{url}',
    // New html email keys
    'email.salutation': 'Hej {username},',
    'email.welcome': 'Velkommen til Litterære Universe!',
    'email.signature': 'Venlig hilsen,<br />Literary Universe-teamet',
    // Enrollment
    'email.enrollAccount.welcome': 'Velkommen om bord',
    'email.enrollAccount.messageHtml': 'Vi vil gerne invitere dig til Litterært Univers! Vi har oprettet en personlig konto til dig, hvor du kan få adgang til alle funktioner i Literary Universe. Vær med til at skabe den næste generation af kreativ skrivning og læsning!',
    'email.enrollAccount.button': 'Få adgang til din konto',
    'email.enrollAccount.signature': 'Vi glæder os til at se dig,<br />Literary Universe team',
    // Reset password
    'email.resetPassword.messageHtml': 'Vi har modtaget en anmodning om at nulstille din adgangskode til din konto. Klik på knappen nedenfor for at fortsætte processen. Hvis du ikke har anmodet om dette, kan du ignorere denne e-mail, men det er måske et godt tidspunkt at gennemgå dine sikkerhedsindstillinger.',
    'email.resetPassword.button': 'Nulstil adgangskode',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Vi er glade for at have dig om bord! Klik på knappen nedenfor for at bekræfte denne e-mailadresse.',
    'email.verifyEmail.button': 'Verificer denne e-mail-adresse',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Din konto er blevet opgraderet',
    'email.adminUpgrade.message': `Vi har opgraderet din konto til {plan, select,
    explorer {Udforsker}
    adventurer {Eventyrer}
    storyteller {Historiefortæller}
    other {}
  } niveau i de næste {days} dage.\n\nNyd det,\nLiterary Universe team`,
    'email.adminUpgrade.messageHtml': `Vi har opgraderet din konto til {plan, select,
    explorer {Udforsker}
    adventurer {Eventyrer}
    storyteller {Historiefortæller}
    other {}
  } niveau i de næste {days} dage. Nyd det!`,
    'email.verification': 'E-mail verifikation',
    'email.verifying': 'Verificerer din e-mail. Dette vil kun tage et øjeblik...',
    'email.verified': 'Fantastiske nyheder! Din e-mail er blevet verificeret!',
    // The Way (Author Level Up)
    'theWay.levelUp.emailSubject': 'Vi ønsker dig tillykke! Du har nået forfatterniveauet {level} på Literary Universe!',
    'theWay.levelUp.emailTitle': 'Tillykke med det! Du har nået forfatterniveauet {level}!',
    'theWay.levelUp.emailIntro': 'Din dedikation til skrivehåndværket er blevet belønnet!',
    'theWay.levelUp.emailGenre': 'Du har nået niveau {level} i genren {genre} .',
    'theWay.levelUp.emailContinue': 'Fortsæt din rejse, og lås op for flere præstationer i The Way of the Author.',
    'theWay.levelUp.viewDashboard': 'Se dit dashboard',
    // Notifications - General content comment
    'email.notifications.contentComment.subject': 'Ny kommentar til dit indhold',
    'email.notifications.contentComment.title': 'Ny kommentar på din {contentType}',
    'email.notifications.contentComment.details': 'Titel: {contentTitle} - Fra: {commenterName}',
    'email.notifications.contentComment.cta': 'Se kommentar',
    // Notifications - Beta reader comment
    'email.notifications.betaComment.subject': 'Ny feedback fra beta-læsere',
    'email.notifications.betaComment.title': 'Ny feedback fra beta-læsere',
    'email.notifications.betaComment.details': 'Historie: {storyTitle}{chapter} - Fra: {commenterName}',
    'email.notifications.betaComment.cta': 'Se feedback',
    // Notifications - New message
    'email.notifications.newMessage.subject': 'Du har en ny besked',
    'email.notifications.newMessage.title': 'Du har en ny besked',
    'email.notifications.newMessage.details': 'Fra: {senderName}',
    'email.notifications.newMessage.cta': 'Se besked',
    // Notifications - Chapter published
    'email.notifications.chapterPublished.subject': 'Nyt kapitel udgivet',
    'email.notifications.chapterPublished.title': 'Nyt kapitel udgivet',
    'email.notifications.chapterPublished.details': 'Historie: {storyTitle} - Kapitel: {chapterTitle}{suffix}',
    'email.notifications.chapterPublished.cta': 'Åbent kapitel',
    // Notifications - First story created
    'email.notifications.firstStory.subject': 'Din første historie er her!',
    'email.notifications.firstStory.title': 'Din første historie er live!',
    'email.notifications.firstStory.intro': 'Fantastisk start! Bliv ved med at skrive og få din verden til at vokse med nyttig vejledning på The Way of the Author.',
    'email.notifications.firstStory.details': 'Historie: {storyTitle}',
    'email.notifications.firstStory.ctaResources': 'Fortsæt på Forfatterens vej',
    'email.notifications.firstStory.ctaStory': 'Åbn din historie',
    // Notifications - First universe created
    'email.notifications.firstUniverse.subject': 'Tillykke med dit første univers!',
    'email.notifications.firstUniverse.title': 'Tillykke med at have skabt dit første univers!',
    'email.notifications.firstUniverse.intro': 'Din worldbuilding-rejse begynder. Her er nogle ressourcer, der kan hjælpe dig med at tage de næste skridt.',
    'email.notifications.firstUniverse.details': 'Universet: {universeName}',
    'email.notifications.firstUniverse.ctaResources': 'Udforsk forfatterens vej',
    'email.notifications.firstUniverse.ctaUniverse': 'Åbn dit univers',
    // Notifications - First chapter published for a story
    'email.notifications.firstChapterPublished.subject': 'Dit første kapitel er udgivet!',
    'email.notifications.firstChapterPublished.title': 'Din histories første kapitel er udgivet!',
    'email.notifications.firstChapterPublished.intro': 'Del dit arbejde, få feedback, og hold momentum i gang.',
    'email.notifications.firstChapterPublished.details': 'Historie: {storyTitle} - Kapitel: {chapterTitle}',
    'email.notifications.firstChapterPublished.ctaChapter': 'Åbent kapitel',
    'email.notifications.firstChapterPublished.ctaStory': 'Se historien',
    // Notifications - Story finished
    'email.notifications.storyFinished.subject': 'Tillykke med at have afsluttet din historie!',
    'email.notifications.storyFinished.title': 'Du gjorde det - din historie er færdig!',
    'email.notifications.storyFinished.intro': 'Fejr denne milepæl! Overvej at udgive, dele eller indsende din historie for at nå ud til flere læsere.',
    'email.notifications.storyFinished.details': 'Historie: {storyTitle}',
    'email.notifications.storyFinished.cta': 'View your story',
    // Notifications - Fan club new subscriber
    'email.notifications.newFanSubscriber.subject': 'New fan club subscriber',
    'email.notifications.newFanSubscriber.title': 'You have a new fan club subscriber!',
    'email.notifications.newFanSubscriber.details': 'Subscriber: {subscriberName}',
    'email.notifications.newFanSubscriber.cta': 'View fan club',
    // Notifications - Fan club subscription ended
    'email.notifications.fanUnsubscribed.subject': 'A member left your fan club',
    'email.notifications.fanUnsubscribed.title': 'A member left your fan club',
    'email.notifications.fanUnsubscribed.intro': 'We wanted to let you know about a recent change. Consider sharing updates or exclusive content to boost engagement.',
    'email.notifications.fanUnsubscribed.details': 'Former member: {name}',
    'email.notifications.fanUnsubscribed.cta': 'Open fan club',
    // Notifications - Friend request
    'email.notifications.friendRequest.subject': 'New friend request',
    'email.notifications.friendRequest.title': 'New friend request',
    'email.notifications.friendRequest.details': 'From: {requesterName}',
    'email.notifications.friendRequest.cta': 'Review request',
    // Notifications - Collaboration invitation
    'email.notifications.collabInvite.subject': 'Collaboration invitation',
    'email.notifications.collabInvite.title': 'You have a collaboration invitation',
    'email.notifications.collabInvite.details': 'Inviter: {inviterName} • Role: {role} • Target: {targetType} — {targetTitle}',
    'email.notifications.collabInvite.cta': 'Review invitation',
    // Notifications - Organization invitation
    'email.notifications.orgInvite.subject': 'Invitation to join an organization',
    'email.notifications.orgInvite.title': 'You\'re invited to join {orgName}',
    'email.notifications.orgInvite.details': 'Inviter: {inviterName}',
    'email.notifications.orgInvite.cta': 'Review invitation',
    // Notifications - Daily digest
    'email.notifications.dailyDigest.subject': 'Your daily updates',
    'email.notifications.dailyDigest.title': 'Your daily updates',
    'email.notifications.dailyDigest.intro': 'Here is what happened today.',
    'email.notifications.dailyDigest.cta': 'View all updates',
    'email.notifications.dailyDigest.empty': 'No updates today.',
    // Notifications - Followed author posted a new blog
    'email.notifications.followedBlogPost.subject': 'New blog post from an author you follow',
    'email.notifications.followedBlogPost.title': '{authorName} posted a new blog',
    'email.notifications.followedBlogPost.details': 'Title: {postTitle}',
    'email.notifications.followedBlogPost.cta': 'Read post',
    // Notifications - Followed author published new work
    'email.notifications.followedNewWork.subject': 'New work from an author you follow',
    'email.notifications.followedNewWork.title': '{authorName} published a new {workType}',
    'email.notifications.followedNewWork.details': 'Title: {title}',
    'email.notifications.followedNewWork.cta': 'View'
};