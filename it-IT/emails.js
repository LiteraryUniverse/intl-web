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
    'email.adminUpgrade.messageHtml': `Abbiamo aggiornato il tuo account a livello {plan, select,
    explorer {Esploratore}
    adventurer {Avventuriero}
    storyteller {Cantastorie}
    other {}
  } per i prossimi {days} giorni. Divertiti!`,
    'email.verification': 'Verifica e-mail',
    'email.verifying': 'Verifica della tua e-mail. Ci vorrà solo un momento...',
    'email.verified': 'Buone notizie! La tua e-mail è stata verificata!',
    // The Way (Author Level Up)
    'theWay.levelUp.emailSubject': 'Congratulazioni! Ha raggiunto il Livello Autore {level} su Universo Letterario!',
    'theWay.levelUp.emailTitle': 'Congratulazioni! Ha raggiunto il Livello Autore {level}!',
    'theWay.levelUp.emailIntro': 'La sua dedizione all\'arte della scrittura è stata premiata!',
    'theWay.levelUp.emailGenre': 'Ha raggiunto il livello {level} nel genere {genre} .',
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
    'email.notifications.followedNewWork.cta': 'Vista'
};