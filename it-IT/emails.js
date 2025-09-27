/**
 * @authors Jan Dvorak
 */
export default {
    'email.enrollAccount.subject': 'Invito a Literary Universe per {username}',
    'email.enrollAccount.message': `Hello {username}\n\n
    Ti invitiamo a Literary Universe! Abbiamo creato per te uno speciale account personale dove puoi accedere a tutte le funzionalità di Literary Universe! Unisciti a noi per dare vita alla prossima generazione di scrittura creativa e strumenti di lettura!
    Per attivare il tuo account, clicca qui:\n\n{url}`,
    'email.resetPassword.subject': 'Literary Universe reimposta la password',
    'email.resetPassword.message': `Ciao {username}!\n\n Abbiamo ricevuto una richiesta per reimpostare la password del tuo account.
        Clicca il link qui sotto per reimpostare la password:\n\n{url}`,
    'email.verifyEmail.subject': 'Literary Universe verifica la tua e-mail',
    'email.verifyEmail.message': 'Ciao {username}!\n\n Verifica il tuo indirizzo e-mail cliccando sul link sottostante:\n\n{url}',
    // New html email keys
    'email.salutation': 'Ciao {username},',
    'email.welcome': 'Benvenuto a Literary Universe!',
    'email.signature': 'Cordialmente,<br />il team di Literary Universe',
    'email.footer.settingsHtml': 'Può modificare le impostazioni dell\'e-mail nelle <a href="{link}">impostazioni del suo account</a>.',
    // Enrollment
    'email.enrollAccount.welcome': 'Benvenuto/a a bordo',
    'email.enrollAccount.messageHtml': 'Vorremmo invitarla all\'Universo Letterario! Abbiamo preparato un account personale per lei, dove potrà accedere a tutte le funzioni di Literary Universe. Si unisca a noi per creare la prossima generazione di scrittura e lettura creativa!',
    'email.enrollAccount.button': 'Accedi al tuo account',
    'email.enrollAccount.signature': 'Non vediamo l\'ora di vederla, team di Universo Letterario<br />',
    // Reset password
    'email.resetPassword.messageHtml': 'Abbiamo ricevuto una richiesta di reimpostare la password del suo account. Clicchi sul pulsante sottostante per continuare il processo. Se non ha fatto questa richiesta, può ignorare questa e-mail, ma potrebbe essere un buon momento per rivedere le sue impostazioni di sicurezza.',
    'email.resetPassword.button': 'Reimposta password',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Siamo felici di averla a bordo! Clicchi sul pulsante sottostante per verificare questo indirizzo e-mail.',
    'email.verifyEmail.button': 'Verifica indirizzo e-mail',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Il tuo account è stato aggiornato',
    'email.adminUpgrade.message': `Abbiamo aggiornato il tuo account a livello {plan, select,
    explorer {Esploratore}
    adventurer {Avventuriero}
    storyteller {Cantastorie}
    other {}
  } per i prossimi {days} giorni.\n\nDivertiti,\nil team di Literary Universe`,
    'email.adminUpgrade.messageHtml': `Abbiamo aggiornato il suo account a {plan, select,
    explorer {Esploratore}
    adventurer {Avventuriero}
    storyteller {Cantastorie}
    other {}
  } livello per i prossimi {days, number} giorni. Buon divertimento!`,
    'email.verification': 'Verifica e-mail',
    'email.verifying': 'Verifica della tua e-mail. Ci vorrà solo un momento...',
    'email.verified': 'Buone notizie! La tua e-mail è stata verificata!',
    // The Way (Author Level Up)
    'theWay.levelUp.emailSubject': 'Congratulazioni! Ha raggiunto il livello Autore {level, number} su Universo Letterario!',
    'theWay.levelUp.emailTitle': 'Congratulazioni! Ha raggiunto il livello Autore {level, number}!',
    'theWay.levelUp.emailIntro': 'La sua dedizione all\'arte della scrittura è stata premiata!',
    'theWay.levelUp.emailGenre': 'Ha raggiunto il livello {level, number} nel genere {genre} .',
    'theWay.levelUp.emailContinue': 'Continui il suo viaggio e sblocchi altri traguardi su La Via dell\'Autore.',
    'theWay.levelUp.viewDashboard': 'Visualizza il suo cruscotto',
    // Notifications - General content comment
    'email.notifications.contentComment.subject': 'Un nuovo commento sul suo contenuto',
    'email.notifications.contentComment.title': 'Nuovo commento sul suo {contentType}',
    'email.notifications.contentComment.details': 'Titolo: {contentTitle} - Da: {commenterName}',
    'email.notifications.contentComment.cta': 'Visualizza commento',
    // Notifications - Beta reader comment
    'email.notifications.betaComment.subject': 'Feedback del nuovo lettore beta',
    'email.notifications.betaComment.title': 'Feedback del nuovo lettore beta',
    'email.notifications.betaComment.details': 'Storia: {storyTitle}{chapter} - Da: {commenterName}',
    'email.notifications.betaComment.cta': 'Visualizza il feedback',
    // Notifications - New message
    'email.notifications.newMessage.subject': 'C\'è un nuovo messaggio',
    'email.notifications.newMessage.title': 'C\'è un nuovo messaggio',
    'email.notifications.newMessage.details': 'Da: {senderName}',
    'email.notifications.newMessage.cta': 'Visualizza il messaggio',
    // Notifications - Chapter published
    'email.notifications.chapterPublished.subject': 'Pubblicato un nuovo capitolo',
    'email.notifications.chapterPublished.title': 'Pubblicato un nuovo capitolo',
    'email.notifications.chapterPublished.details': 'Storia: {storyTitle} - Capitolo: {chapterTitle}{suffix}',
    'email.notifications.chapterPublished.cta': 'Capitolo aperto',
    // Notifications - First story created
    'email.notifications.firstStory.subject': 'La sua prima storia è qui!',
    'email.notifications.firstStory.title': 'La sua prima storia è in diretta!',
    'email.notifications.firstStory.intro': 'Un inizio sorprendente! Continui a scrivere e a far crescere il suo mondo con la guida utile de La Via dell\'Autore.',
    'email.notifications.firstStory.details': 'Storia: {storyTitle}',
    'email.notifications.firstStory.ctaResources': 'Continua su La via dell\'autore',
    'email.notifications.firstStory.ctaStory': 'Apra la sua storia',
    // Notifications - First universe created
    'email.notifications.firstUniverse.subject': 'Congratulazioni per il suo primo universo!',
    'email.notifications.firstUniverse.title': 'Congratulazioni per aver creato il suo primo universo!',
    'email.notifications.firstUniverse.intro': 'Inizia il suo viaggio nella costruzione del mondo. Ecco alcune risorse per aiutarla a compiere i prossimi passi.',
    'email.notifications.firstUniverse.details': 'Universo: {universeName}',
    'email.notifications.firstUniverse.ctaResources': 'Esplori la Via dell\'Autore',
    'email.notifications.firstUniverse.ctaUniverse': 'Apra il suo universo',
    // Notifications - First chapter published for a story
    'email.notifications.firstChapterPublished.subject': 'Il suo primo capitolo è stato pubblicato!',
    'email.notifications.firstChapterPublished.title': 'Il primo capitolo della sua storia è stato pubblicato!',
    'email.notifications.firstChapterPublished.intro': 'Condivida il suo lavoro, raccolga feedback e mantenga lo slancio.',
    'email.notifications.firstChapterPublished.details': 'Storia: {storyTitle} - Capitolo: {chapterTitle}',
    'email.notifications.firstChapterPublished.ctaChapter': 'Capitolo aperto',
    'email.notifications.firstChapterPublished.ctaStory': 'Visualizza la storia',
    // Notifications - Story finished
    'email.notifications.storyFinished.subject': 'Congratulazioni per aver terminato la sua storia!',
    'email.notifications.storyFinished.title': 'Ce l\'ha fatta: la sua storia è finita!',
    'email.notifications.storyFinished.intro': 'Festeggi questa pietra miliare! Prenda in considerazione la possibilità di pubblicare, condividere o inviare la sua storia per raggiungere più lettori.',
    'email.notifications.storyFinished.details': 'Storia: {storyTitle}',
    'email.notifications.storyFinished.cta': 'Visualizza la sua storia',
    // Notifications - Fan club new subscriber
    'email.notifications.newFanSubscriber.subject': 'Nuovo iscritto al fan club',
    'email.notifications.newFanSubscriber.title': 'Ha un nuovo iscritto al fan club!',
    'email.notifications.newFanSubscriber.details': 'Abbonato: {subscriberName}',
    'email.notifications.newFanSubscriber.cta': 'Visualizza il fan club',
    // Notifications - Fan club subscription ended
    'email.notifications.fanUnsubscribed.subject': 'Un membro ha lasciato il suo fan club',
    'email.notifications.fanUnsubscribed.title': 'Un membro ha lasciato il suo fan club',
    'email.notifications.fanUnsubscribed.intro': 'Volevamo informarla di un recente cambiamento. Consideri la possibilità di condividere aggiornamenti o contenuti esclusivi per aumentare il coinvolgimento.',
    'email.notifications.fanUnsubscribed.details': 'Ex utente: {name}',
    'email.notifications.fanUnsubscribed.cta': 'Aprire il fan club',
    // Notifications - Friend request
    'email.notifications.friendRequest.subject': 'Nuova richiesta di amicizia',
    'email.notifications.friendRequest.title': 'Nuova richiesta di amicizia',
    'email.notifications.friendRequest.details': 'Da: {requesterName}',
    'email.notifications.friendRequest.cta': 'Richiesta di revisione',
    // Notifications - Collaboration invitation
    'email.notifications.collabInvite.subject': 'Invito alla collaborazione',
    'email.notifications.collabInvite.title': 'Lei ha un invito alla collaborazione',
    'email.notifications.collabInvite.details': 'Invitante: {inviterName} - Ruolo: {role} - Destinatario: {targetType} - {targetTitle}',
    'email.notifications.collabInvite.cta': 'Invito a recensire',
    // Notifications - Organization invitation
    'email.notifications.orgInvite.subject': 'Invito a unirsi a un\'organizzazione',
    'email.notifications.orgInvite.title': 'È invitato a partecipare a {orgName}',
    'email.notifications.orgInvite.details': 'Invitatore: {inviterName}',
    'email.notifications.orgInvite.cta': 'Invito a recensire',
    // Notifications - Daily digest
    'email.notifications.dailyDigest.subject': 'I suoi aggiornamenti quotidiani',
    'email.notifications.dailyDigest.title': 'I suoi aggiornamenti quotidiani',
    'email.notifications.dailyDigest.intro': 'Ecco cosa è successo oggi.',
    'email.notifications.dailyDigest.cta': 'Visualizza tutti gli aggiornamenti',
    'email.notifications.dailyDigest.empty': 'Oggi non ci sono aggiornamenti.',
    // Notifications - Followed author posted a new blog
    'email.notifications.followedBlogPost.subject': 'Un nuovo post sul blog di un autore che lei segue',
    'email.notifications.followedBlogPost.title': '{authorName} ha aperto un nuovo blog',
    'email.notifications.followedBlogPost.details': 'Titolo: {postTitle}',
    'email.notifications.followedBlogPost.cta': 'Leggi il post',
    // Notifications - Followed author published new work
    'email.notifications.followedNewWork.subject': 'Un nuovo lavoro di un autore che lei segue',
    'email.notifications.followedNewWork.title': '{authorName} ha pubblicato un nuovo {workType}',
    'email.notifications.followedNewWork.details': 'Titolo: {title}',
    'email.notifications.followedNewWork.cta': 'Vista',
    // Story notification emails
    'email.story.newComment.subject': 'Nuovo commento su "{storyTitle}"',
    'email.story.newComment.body': '{commenterName} ha lasciato un commento sulla sua storia "{storyTitle}": {commentText}',
    'email.story.betaComment.subject': 'Un nuovo feedback beta su "{storyTitle}".',
    'email.story.betaComment.body': '{commenterName} ha fornito un feedback beta su "{storyTitle}": {commentText}',
    'email.story.collaboratorAccepted.subject': 'Nuovo membro del team per "{storyTitle}".',
    'email.story.collaboratorAccepted.body': '{collaboratorName} ha accettato il suo invito a collaborare a "{storyTitle}" come {role}.',
    'email.story.milestone.subject': 'Congratulazioni! Pietra miliare raggiunta su "{storyTitle}".',
    'email.story.milestone.body': 'Ottime notizie! Il suo capitolo "{chapterTitle}" da "{storyTitle}" ha raggiunto {count} {milestone}. Continui a fare un ottimo lavoro!',
    'email.story.betaRevision.subject': 'È disponibile una nuova revisione beta: "{chapterTitle}"',
    'email.story.betaRevision.body': '{authorName} ha pubblicato una nuova revisione beta di "{chapterTitle}" da "{storyTitle}". Il suo feedback sarà molto apprezzato!',
    'email.story.newChapter.subject': 'Nuovo capitolo disponibile: "{storyTitle}"',
    'email.story.newChapter.body': '{authorName} ha pubblicato un nuovo capitolo di "{storyTitle}": "{chapterTitle}". Buona lettura!',
    // Universe notification emails
    'email.universe.newStory.subject': 'Nuova storia nell\'universo: "{storyTitle}"',
    'email.universe.newStory.body': '{authorName} ha aggiunto una nuova storia "{storyTitle}" a un universo che sta seguendo. Scopra nuove avventure!',
    'email.universe.collaboratorChange.subject': 'Aggiornamento sulla collaborazione con l\'Universo',
    'email.universe.collaboratorChange.body': 'C\'è stato un cambiamento nel team di collaborazione per un universo in cui lei è coinvolto.',
    'email.universe.update.subject': 'Universo aggiornato',
    'email.universe.update.body': 'Un universo che sta seguendo è stato aggiornato con nuovi contenuti.',
    'email.universe.comment.subject': 'Nuovo commento sull\'universo',
    'email.universe.comment.body': '{commenterName} ha commentato un universo che sta seguendo: "{commentText}"',
    // Blog notification emails
    'email.blog.newPost.subject': 'Nuovo post sul blog: "{postTitle}"',
    'email.blog.newPost.body': '{authorName} ha pubblicato un nuovo post sul blog "{postTitle}" su un blog che lei segue.',
    'email.blog.comment.subject': 'Nuovo commento al post del blog: "{postTitle}"',
    'email.blog.comment.body': '{commenterName} ha commentato il post del blog "{postTitle}": "{commentText}".',
    'email.blog.update.subject': 'Blog aggiornato',
    'email.blog.update.body': 'Un blog che sta seguendo è stato aggiornato.',
    // General comment notification emails
    'email.comment.general.subject': 'Nuovo commento su "{contentTitle}"',
    'email.comment.general.body': '{commenterName} ha commentato "{contentTitle}": "{commentText}".',
    'email.comment.reply.subject': 'Rispondi al tuo commento',
    'email.comment.reply.body': '{replierName} ha risposto al suo commento su "{contentTitle}": "{replyText}".',
    'email.comment.like.subject': 'Il suo commento è stato apprezzato',
    'email.comment.like.body': '{likerName} mi è piaciuto il suo commento. Continui a impegnarsi!',
    // Content-specific comment notification emails
    'email.comment.fanArt.subject': 'Nuovo commento sulla fan art: "{contentTitle}"',
    'email.comment.fanArt.body': '{commenterName} ha commentato la sua fan art "{contentTitle}": "{commentText}".',
    'email.comment.event.subject': 'Nuovo commento sull\'evento: "{contentTitle}"',
    'email.comment.event.body': '{commenterName} ha commentato l\'evento "{contentTitle}": "{commentText}".',
    'email.comment.revision.subject': 'Nuovo commento sulla revisione',
    'email.comment.revision.body': '{commenterName} ha commentato la sua revisione: "{commentText}"',
    'email.comment.feedback.subject': 'Nuovo commento sul feedback',
    'email.comment.feedback.body': '{commenterName} ha commentato il suo problema di feedback: "{commentText}"',
    // Welcome email
    'email.welcome.subject': 'Benvenuto nell\'Universo Letterario!'
};