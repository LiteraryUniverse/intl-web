/**
 * @authors Jan Dvorak
 */
export default {
    'email.enrollAccount.subject': 'Uitnodiging voor het Literair Universum voor {username}',
    'email.enrollAccount.message': `Hallo {username}\n\n
    We willen je graag uitnodigen voor het Literair Universum! We hebben een speciaal persoonlijk account voor je aangemaakt waar je toegang hebt tot alle functies van het Literair Universum! Doe met ons mee in het creëren van de volgende generatie creatieve schrijf- en leestools!
    Om je account te activeren, klik eenvoudig op de onderstaande link:\n\n{url}`,
    'email.resetPassword.subject': 'Wachtwoord resetten voor het Literair Universum',
    'email.resetPassword.message': `Hallo {username}!\n\n We hebben een verzoek ontvangen om je wachtwoord te resetten voor je account.
        Volg de onderstaande link om je wachtwoord te resetten:\n\n{url}`,
    'email.verifyEmail.subject': 'E-mailverificatie voor het Literair Universum',
    'email.verifyEmail.message': 'Hallo {username}!\n\n Verifieer je e-mailadres door op de onderstaande link te klikken:\n\n{url}',
    // New html email keys
    'email.salutation': 'Hallo {username},',
    'email.welcome': 'Welkom bij het Literair Universum!',
    'email.signature': 'Met vriendelijke groet,<br />Team Literair Universum',
    // Enrollment
    'email.enrollAccount.welcome': 'Welkom aan boord',
    'email.enrollAccount.messageHtml': 'Wij willen u graag uitnodigen voor Literary Universe! We hebben een persoonlijke account voor u aangemaakt waarmee u toegang krijgt tot alle functies van Literary Universe. Doe met ons mee om de volgende generatie creatief schrijven en lezen te creëren!',
    'email.enrollAccount.button': 'Toegang tot je account',
    'email.enrollAccount.signature': 'We kijken uit naar uw komst,<br />Literary Universe team',
    // Reset password
    'email.resetPassword.messageHtml': 'Wij hebben een verzoek ontvangen om uw wachtwoord voor uw account opnieuw in te stellen. Klik op de knop hieronder om het proces voort te zetten. Als u dit verzoek niet hebt gedaan, kunt u deze e-mail negeren, maar het is misschien een goed moment om uw beveiligingsinstellingen te controleren.',
    'email.resetPassword.button': 'Wachtwoord resetten',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'We zijn blij u aan boord te hebben! Klik op de knop hieronder om dit e-mailadres te verifiëren.',
    'email.verifyEmail.button': 'Verifieer dit e-mailadres',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Je account is geüpgraded',
    'email.adminUpgrade.message': `We hebben uw account geüpgraded naar {plan, select,
    explorer {Ontdekkingsreiziger}
    adventurer {Avonturier}
    storyteller {Verhalenverteller}
    other {}
  } niveau voor de komende {days} dagen.\n\nGeniet ervan,\nLiterary Universe team`,
    'email.adminUpgrade.messageHtml': `We hebben uw account geüpgraded naar {plan, select,
    explorer {Ontdekkingsreiziger}
    adventurer {Avonturier}
    storyteller {Verhalenverteller}
    other {}
  } niveau voor de komende {days} dagen. Geniet ervan!`,
    'email.verification': 'E-mail verificatie',
    'email.verifying': 'Uw e-mail verifiëren. Dit duurt slechts een moment...',
    'email.verified': 'Geweldig nieuws! Uw e-mail is geverifieerd!',
    // The Way (Author Level Up)
    'theWay.levelUp.emailSubject': 'Gefeliciteerd! U hebt het Auteurniveau {level} op Literary Universe bereikt!',
    'theWay.levelUp.emailTitle': 'Gefeliciteerd! U hebt Auteursniveau {level}bereikt!',
    'theWay.levelUp.emailIntro': 'Uw toewijding aan de ambacht van het schrijven is beloond!',
    'theWay.levelUp.emailGenre': 'U hebt niveau {level} bereikt in het genre {genre} .',
    'theWay.levelUp.emailContinue': 'Vervolg uw reis en speel meer prestaties vrij op De Weg van de Auteur.',
    'theWay.levelUp.viewDashboard': 'Uw dashboard bekijken',
    // Notifications - General content comment
    'email.notifications.contentComment.subject': 'Nieuw commentaar op uw inhoud',
    'email.notifications.contentComment.title': 'Nieuwe reactie op uw {contentType}',
    'email.notifications.contentComment.details': 'Titel: {contentTitle} - Van: {commenterName}',
    'email.notifications.contentComment.cta': 'Commentaar bekijken',
    // Notifications - Beta reader comment
    'email.notifications.betaComment.subject': 'Feedback van nieuwe bètalezers',
    'email.notifications.betaComment.title': 'Feedback van nieuwe bètalezers',
    'email.notifications.betaComment.details': 'Verhaal: {storyTitle}{chapter} - Van: {commenterName}',
    'email.notifications.betaComment.cta': 'Feedback bekijken',
    // Notifications - New message
    'email.notifications.newMessage.subject': 'U hebt een nieuw bericht',
    'email.notifications.newMessage.title': 'U hebt een nieuw bericht',
    'email.notifications.newMessage.details': 'Van: {senderName}',
    'email.notifications.newMessage.cta': 'Bericht bekijken',
    // Notifications - Chapter published
    'email.notifications.chapterPublished.subject': 'Nieuw hoofdstuk gepubliceerd',
    'email.notifications.chapterPublished.title': 'Nieuw hoofdstuk gepubliceerd',
    'email.notifications.chapterPublished.details': 'Verhaal: {storyTitle} - Hoofdstuk: {chapterTitle}{suffix}',
    'email.notifications.chapterPublished.cta': 'Open hoofdstuk',
    // Notifications - First story created
    'email.notifications.firstStory.subject': 'Uw eerste verhaal staat hier!',
    'email.notifications.firstStory.title': 'Uw eerste verhaal is live!',
    'email.notifications.firstStory.intro': 'Geweldige start! Blijf schrijven en laat uw wereld groeien met behulpzame begeleiding op De Weg van de Auteur.',
    'email.notifications.firstStory.details': 'Verhaal: {storyTitle}',
    'email.notifications.firstStory.ctaResources': 'Ga verder op De Weg van de Auteur',
    'email.notifications.firstStory.ctaStory': 'Open uw verhaal',
    // Notifications - First universe created
    'email.notifications.firstUniverse.subject': 'Gefeliciteerd met uw eerste universum!',
    'email.notifications.firstUniverse.title': 'Gefeliciteerd met het creëren van uw eerste universum!',
    'email.notifications.firstUniverse.intro': 'Uw wereldbouwreis begint. Hier zijn enkele bronnen om u te helpen de volgende stappen te zetten.',
    'email.notifications.firstUniverse.details': 'Universum: {universeName}',
    'email.notifications.firstUniverse.ctaResources': 'De weg van de auteur verkennen',
    'email.notifications.firstUniverse.ctaUniverse': 'Open uw universum',
    // Notifications - First chapter published for a story
    'email.notifications.firstChapterPublished.subject': 'Uw eerste hoofdstuk is gepubliceerd!',
    'email.notifications.firstChapterPublished.title': 'Het eerste hoofdstuk van uw verhaal is gepubliceerd!',
    'email.notifications.firstChapterPublished.intro': 'Deel uw werk, verzamel feedback en houd de vaart erin.',
    'email.notifications.firstChapterPublished.details': 'Verhaal: {storyTitle} - Hoofdstuk: {chapterTitle}',
    'email.notifications.firstChapterPublished.ctaChapter': 'Open hoofdstuk',
    'email.notifications.firstChapterPublished.ctaStory': 'Bekijk verhaal',
    // Notifications - Story finished
    'email.notifications.storyFinished.subject': 'Gefeliciteerd met de voltooiing van uw verhaal!',
    'email.notifications.storyFinished.title': 'Het is u gelukt - uw verhaal is af!',
    'email.notifications.storyFinished.intro': 'Vier deze mijlpaal! Overweeg om uw verhaal te publiceren, te delen of in te sturen om meer lezers te bereiken.',
    'email.notifications.storyFinished.details': 'Verhaal: {storyTitle}',
    'email.notifications.storyFinished.cta': 'Bekijk uw verhaal',
    // Notifications - Fan club new subscriber
    'email.notifications.newFanSubscriber.subject': 'Nieuwe abonnee van de fanclub',
    'email.notifications.newFanSubscriber.title': 'U hebt een nieuwe abonnee voor de fanclub!',
    'email.notifications.newFanSubscriber.details': 'Abonnee: {subscriberName}',
    'email.notifications.newFanSubscriber.cta': 'Fanclub bekijken',
    // Notifications - Fan club subscription ended
    'email.notifications.fanUnsubscribed.subject': 'Een lid heeft uw fanclub verlaten',
    'email.notifications.fanUnsubscribed.title': 'Een lid heeft uw fanclub verlaten',
    'email.notifications.fanUnsubscribed.intro': 'We wilden u op de hoogte brengen van een recente verandering. Overweeg om updates of exclusieve inhoud te delen om de betrokkenheid te vergroten.',
    'email.notifications.fanUnsubscribed.details': 'Voormalig lid: {name}',
    'email.notifications.fanUnsubscribed.cta': 'Open fanclub',
    // Notifications - Friend request
    'email.notifications.friendRequest.subject': 'Nieuw vriendschapsverzoek',
    'email.notifications.friendRequest.title': 'Nieuw vriendschapsverzoek',
    'email.notifications.friendRequest.details': 'Van: {requesterName}',
    'email.notifications.friendRequest.cta': 'Beoordelingsverzoek',
    // Notifications - Collaboration invitation
    'email.notifications.collabInvite.subject': 'Uitnodiging voor samenwerking',
    'email.notifications.collabInvite.title': 'U hebt een uitnodiging voor samenwerking',
    'email.notifications.collabInvite.details': 'Uitnodiger: {inviterName} - Rol: {role} - Doel: {targetType} - {targetTitle}',
    'email.notifications.collabInvite.cta': 'Uitnodiging herzien',
    // Notifications - Organization invitation
    'email.notifications.orgInvite.subject': 'Uitnodiging om lid te worden van een organisatie',
    'email.notifications.orgInvite.title': 'U bent uitgenodigd om deel te nemen aan {orgName}',
    'email.notifications.orgInvite.details': 'Uitlokker: {inviterName}',
    'email.notifications.orgInvite.cta': 'Uitnodiging herzien',
    // Notifications - Daily digest
    'email.notifications.dailyDigest.subject': 'Uw dagelijkse updates',
    'email.notifications.dailyDigest.title': 'Uw dagelijkse updates',
    'email.notifications.dailyDigest.intro': 'Dit is wat er vandaag is gebeurd.',
    'email.notifications.dailyDigest.cta': 'Alle updates bekijken',
    'email.notifications.dailyDigest.empty': 'Geen updates vandaag.',
    // Notifications - Followed author posted a new blog
    'email.notifications.followedBlogPost.subject': 'Nieuw blogbericht van een auteur die u volgt',
    'email.notifications.followedBlogPost.title': '{authorName} nieuwe blog geplaatst',
    'email.notifications.followedBlogPost.details': 'Titel: {postTitle}',
    'email.notifications.followedBlogPost.cta': 'Lees post',
    // Notifications - Followed author published new work
    'email.notifications.followedNewWork.subject': 'Nieuw werk van een auteur die u volgt',
    'email.notifications.followedNewWork.title': '{authorName} een nieuwe {workType}gepubliceerd.',
    'email.notifications.followedNewWork.details': 'Titel: {title}',
    'email.notifications.followedNewWork.cta': 'Bekijk'
};