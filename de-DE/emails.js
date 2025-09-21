/**
 * @authors Jan Dvorak
 */
export default {
    'email.enrollAccount.subject': 'Einladung zum Literarischen Universum für {username}',
    'email.enrollAccount.message': `Hallo {username}\n\n
    Wir möchten Sie zu Literary Universe einladen! Wir haben für Sie ein spezielles persönliches Konto eingerichtet, mit dem Sie auf alle Funktionen von Literary Universe zugreifen können! Bitte schließen Sie sich uns an, um die nächste Generation von kreativen Schreib- und Lesewerkzeugen zu schaffen!
    Um Ihr Konto zu aktivieren, klicken Sie einfach auf den folgenden Link:\n\n{url}`,
    'email.resetPassword.subject': 'Literarisches Universum Passwort zurücksetzen',
    'email.resetPassword.message': `Hallo {username}!\n\n Wir haben eine Anfrage erhalten, Ihr Passwort für Ihr Konto zurückzusetzen.
        Bitte folgen Sie dem unten stehenden Link, um Ihr Passwort zurückzusetzen:\n\n{url}`,
    'email.verifyEmail.subject': 'Literary Universe E-Mail-Verifizierung',
    'email.verifyEmail.message': 'Hallo {username}!\n\n Bitte verifizieren Sie Ihre E-Mail-Adresse, indem Sie auf den unten stehenden Link klicken:\n\n{url}',
    // New html email keys
    'email.salutation': 'Hallo {username},',
    'email.welcome': 'Willkommen im Literary Universe!',
    'email.signature': 'Mit freundlichen Grüßen,<br />Literary Universe Team',
    'email.footer.settingsHtml': 'Sie können Ihre E-Mail-Einstellungen in <a href="{link}">Ihren Kontoeinstellungen</a> ändern.',
    // Enrollment
    'email.enrollAccount.welcome': 'Willkommen an Bord',
    'email.enrollAccount.messageHtml': 'Wir möchten Sie zu Literary Universe einladen! Wir haben für Sie ein persönliches Konto eingerichtet, mit dem Sie auf alle Funktionen von Literary Universe zugreifen können. Bitte helfen Sie uns, die nächste Generation des kreativen Schreibens und Lesens zu schaffen!',
    'email.enrollAccount.button': 'Zugriff auf Ihr Konto',
    'email.enrollAccount.signature': 'Wir freuen uns auf Sie,<br />Literary Universe Team',
    // Reset password
    'email.resetPassword.messageHtml': 'Wir haben eine Anfrage erhalten, Ihr Passwort für Ihr Konto zurückzusetzen. Bitte klicken Sie auf die Schaltfläche unten, um den Vorgang fortzusetzen. Wenn Sie diese Anfrage nicht gestellt haben, können Sie diese E-Mail ignorieren, aber es wäre vielleicht ein guter Zeitpunkt, Ihre Sicherheitseinstellungen zu überprüfen.',
    'email.resetPassword.button': 'Passwort zurücksetzen',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Wir freuen uns, Sie an Bord zu haben! Bitte klicken Sie auf die Schaltfläche unten, um diese E-Mail-Adresse zu bestätigen.',
    'email.verifyEmail.button': 'Überprüfen Sie diese E-Mail-Adresse',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Ihr Konto wurde hochgestuft',
    'email.adminUpgrade.message': `Wir haben Ihr Konto auf {plan, select,
    explorer {Entdecker}
    adventurer {Abenteurer}
    storyteller {Geschichtenerzähler}
    other {}
  } Stufe für die nächsten {days} Tage.\n\nFreude,\nLiterary Universe Team`,
    'email.adminUpgrade.messageHtml': `Wir haben Ihr Konto auf {plan, select,
    explorer {Explorer}
    adventurer {Adventurer}
    storyteller {Storyteller}
    other {}
  } tier für die nächsten {days, number} Tage hochgestuft. Viel Spaß!`,
    'email.verification': 'E-Mail-Überprüfung',
    'email.verifying': 'Überprüfen Sie Ihre E-Mail. Dies dauert nur einen Moment...',
    'email.verified': 'Tolle Neuigkeiten! Ihre E-Mail wurde verifiziert!',
    // The Way (Author Level Up)
    'theWay.levelUp.emailSubject': 'Herzlichen Glückwunsch! Sie haben die Autorenstufe {level, number} auf Literary Universe erreicht!',
    'theWay.levelUp.emailTitle': 'Herzlichen Glückwunsch! Sie haben die Autorenstufe erreicht {level, number}!',
    'theWay.levelUp.emailIntro': 'Ihre Hingabe an das Handwerk des Schreibens wurde belohnt!',
    'theWay.levelUp.emailGenre': 'Sie haben die Stufe {level, number} im Genre {genre} erreicht.',
    'theWay.levelUp.emailContinue': 'Setzen Sie Ihre Reise fort und schalten Sie weitere Erfolge auf The Way of the Author frei.',
    'theWay.levelUp.viewDashboard': 'Ihr Dashboard anzeigen',
    // Notifications - General content comment
    'email.notifications.contentComment.subject': 'Neuer Kommentar zu Ihrem Inhalt',
    'email.notifications.contentComment.title': 'Neuer Kommentar zu Ihrer {contentType}',
    'email.notifications.contentComment.details': 'Titel: {contentTitle} - Von: {commenterName}',
    'email.notifications.contentComment.cta': 'Kommentar ansehen',
    // Notifications - Beta reader comment
    'email.notifications.betaComment.subject': 'Neues Beta-Leser-Feedback',
    'email.notifications.betaComment.title': 'Neues Beta-Leser-Feedback',
    'email.notifications.betaComment.details': 'Geschichte: {storyTitle}{chapter} - Von: {commenterName}',
    'email.notifications.betaComment.cta': 'Feedback ansehen',
    // Notifications - New message
    'email.notifications.newMessage.subject': 'Sie haben eine neue Nachricht',
    'email.notifications.newMessage.title': 'Sie haben eine neue Nachricht',
    'email.notifications.newMessage.details': 'Von: {senderName}',
    'email.notifications.newMessage.cta': 'Nachricht ansehen',
    // Notifications - Chapter published
    'email.notifications.chapterPublished.subject': 'Neues Kapitel veröffentlicht',
    'email.notifications.chapterPublished.title': 'Neues Kapitel veröffentlicht',
    'email.notifications.chapterPublished.details': 'Geschichte: {storyTitle} - Kapitel: {chapterTitle}{suffix}',
    'email.notifications.chapterPublished.cta': 'Kapitel öffnen',
    // Notifications - First story created
    'email.notifications.firstStory.subject': 'Ihre erste Geschichte ist da!',
    'email.notifications.firstStory.title': 'Ihre erste Geschichte ist live!',
    'email.notifications.firstStory.intro': 'Ein großartiger Start! Schreiben Sie weiter und erweitern Sie Ihre Welt mit hilfreichen Anleitungen auf dem Weg des Autors.',
    'email.notifications.firstStory.details': 'Geschichte: {storyTitle}',
    'email.notifications.firstStory.ctaResources': 'Weiter auf Der Weg des Autors',
    'email.notifications.firstStory.ctaStory': 'Öffnen Sie Ihre Geschichte',
    // Notifications - First universe created
    'email.notifications.firstUniverse.subject': 'Herzlichen Glückwunsch zu Ihrem ersten Universum!',
    'email.notifications.firstUniverse.title': 'Herzlichen Glückwunsch zur Schaffung Ihres ersten Universums!',
    'email.notifications.firstUniverse.intro': 'Ihre Reise in die Welt beginnt. Hier finden Sie einige Ressourcen, die Ihnen bei den nächsten Schritten helfen.',
    'email.notifications.firstUniverse.details': 'Universum: {universeName}',
    'email.notifications.firstUniverse.ctaResources': 'Entdecken Sie den Weg des Autors',
    'email.notifications.firstUniverse.ctaUniverse': 'Öffnen Sie Ihr Universum',
    // Notifications - First chapter published for a story
    'email.notifications.firstChapterPublished.subject': 'Ihr erstes Kapitel ist veröffentlicht!',
    'email.notifications.firstChapterPublished.title': 'Das erste Kapitel Ihrer Geschichte ist veröffentlicht!',
    'email.notifications.firstChapterPublished.intro': 'Teilen Sie Ihre Arbeit, holen Sie Feedback ein und halten Sie den Schwung aufrecht.',
    'email.notifications.firstChapterPublished.details': 'Geschichte: {storyTitle} - Kapitel: {chapterTitle}',
    'email.notifications.firstChapterPublished.ctaChapter': 'Kapitel öffnen',
    'email.notifications.firstChapterPublished.ctaStory': 'Geschichte ansehen',
    // Notifications - Story finished
    'email.notifications.storyFinished.subject': 'Herzlichen Glückwunsch zur Fertigstellung Ihrer Geschichte!',
    'email.notifications.storyFinished.title': 'Sie haben es geschafft - Ihre Geschichte ist fertig!',
    'email.notifications.storyFinished.intro': 'Feiern Sie diesen Meilenstein! Erwägen Sie, Ihre Geschichte zu veröffentlichen, zu teilen oder einzureichen, um mehr Leser zu erreichen.',
    'email.notifications.storyFinished.details': 'Geschichte: {storyTitle}',
    'email.notifications.storyFinished.cta': 'Ihre Geschichte ansehen',
    // Notifications - Fan club new subscriber
    'email.notifications.newFanSubscriber.subject': 'Neuer Fanclub-Abonnent',
    'email.notifications.newFanSubscriber.title': 'Sie haben einen neuen Fanclub-Abonnenten!',
    'email.notifications.newFanSubscriber.details': 'Abonnent: {subscriberName}',
    'email.notifications.newFanSubscriber.cta': 'Fanclub ansehen',
    // Notifications - Fan club subscription ended
    'email.notifications.fanUnsubscribed.subject': 'Ein Mitglied hat Ihren Fanclub verlassen',
    'email.notifications.fanUnsubscribed.title': 'Ein Mitglied hat Ihren Fanclub verlassen',
    'email.notifications.fanUnsubscribed.intro': 'Wir möchten Sie über eine aktuelle Änderung informieren. Denken Sie daran, Updates oder exklusive Inhalte zu teilen, um Ihr Engagement zu steigern.',
    'email.notifications.fanUnsubscribed.details': 'Ehemaliges Mitglied: {name}',
    'email.notifications.fanUnsubscribed.cta': 'Fanclub öffnen',
    // Notifications - Friend request
    'email.notifications.friendRequest.subject': 'Neue Freundschaftsanfrage',
    'email.notifications.friendRequest.title': 'Neue Freundschaftsanfrage',
    'email.notifications.friendRequest.details': 'Von: {requesterName}',
    'email.notifications.friendRequest.cta': 'Anfrage zur Überprüfung',
    // Notifications - Collaboration invitation
    'email.notifications.collabInvite.subject': 'Einladung zur Zusammenarbeit',
    'email.notifications.collabInvite.title': 'Sie haben eine Einladung zur Zusammenarbeit',
    'email.notifications.collabInvite.details': 'Einladender: {inviterName} - Rolle: {role} - Ziel: {targetType} - {targetTitle}',
    'email.notifications.collabInvite.cta': 'Einladung zur Überprüfung',
    // Notifications - Organization invitation
    'email.notifications.orgInvite.subject': 'Einladung zum Beitritt zu einer Organisation',
    'email.notifications.orgInvite.title': 'Sie sind eingeladen, {orgName}beizutreten.',
    'email.notifications.orgInvite.details': 'Einlader: {inviterName}',
    'email.notifications.orgInvite.cta': 'Einladung zur Überprüfung',
    // Notifications - Daily digest
    'email.notifications.dailyDigest.subject': 'Ihre täglichen Updates',
    'email.notifications.dailyDigest.title': 'Ihre täglichen Updates',
    'email.notifications.dailyDigest.intro': 'Das ist heute passiert.',
    'email.notifications.dailyDigest.cta': 'Alle Updates anzeigen',
    'email.notifications.dailyDigest.empty': 'Keine Updates heute.',
    // Notifications - Followed author posted a new blog
    'email.notifications.followedBlogPost.subject': 'Neuer Blogbeitrag von einem Autor, dem Sie folgen',
    'email.notifications.followedBlogPost.title': '{authorName} einen neuen Blog veröffentlicht',
    'email.notifications.followedBlogPost.details': 'Titel: {postTitle}',
    'email.notifications.followedBlogPost.cta': 'Beitrag lesen',
    // Notifications - Followed author published new work
    'email.notifications.followedNewWork.subject': 'Neues Werk von einem Autor, dem Sie folgen',
    'email.notifications.followedNewWork.title': '{authorName} eine neue {workType}veröffentlicht.',
    'email.notifications.followedNewWork.details': 'Titel: {title}',
    'email.notifications.followedNewWork.cta': 'Siehe',
    // Story notification emails
    'email.story.newComment.subject': 'Neuer Kommentar zu "{storyTitle}"',
    'email.story.newComment.body': '{commenterName} Hinterlassen Sie einen Kommentar zu Ihrer Geschichte "{storyTitle}": {commentText}',
    'email.story.betaComment.subject': 'Neues Beta-Feedback zu "{storyTitle}"',
    'email.story.betaComment.body': '{commenterName} hat eine Beta-Bewertung für "{storyTitle}" abgegeben: {commentText}',
    'email.story.collaboratorAccepted.subject': 'Neues Teammitglied für "{storyTitle}"',
    'email.story.collaboratorAccepted.body': '{collaboratorName} hat Ihre Einladung angenommen, an "{storyTitle}" als {role}mitzuarbeiten.',
    'email.story.milestone.subject': 'Herzlichen Glückwunsch! Meilenstein erreicht auf "{storyTitle}"',
    'email.story.milestone.body': 'Tolle Neuigkeiten! Ihr Kapitel "{chapterTitle}" von "{storyTitle}" hat {count} {milestone}erreicht. Setzen Sie Ihre großartige Arbeit fort!',
    'email.story.betaRevision.subject': 'Neue Beta-Version verfügbar: "{chapterTitle}"',
    'email.story.betaRevision.body': '{authorName} hat eine neue Beta-Version von "{chapterTitle}" von "{storyTitle}" veröffentlicht. Wir würden uns sehr über Ihr Feedback freuen!',
    'email.story.newChapter.subject': 'Neues Kapitel verfügbar: "{storyTitle}"',
    'email.story.newChapter.body': '{authorName} hat ein neues Kapitel von "{storyTitle}" veröffentlicht: "{chapterTitle}". Viel Spaß beim Lesen!',
    // Universe notification emails
    'email.universe.newStory.subject': 'Neue Geschichte im Universum: "{storyTitle}"',
    'email.universe.newStory.body': '{authorName} eine neue Geschichte "{storyTitle}" zu einem Universum hinzugefügt, dem Sie folgen. Entdecken Sie neue Abenteuer!',
    'email.universe.collaboratorChange.subject': 'Update zur Zusammenarbeit im Universum',
    'email.universe.collaboratorChange.body': 'Es hat einen Wechsel im Team für die Zusammenarbeit an einem Universum gegeben, an dem Sie beteiligt sind.',
    'email.universe.update.subject': 'Universum aktualisiert',
    'email.universe.update.body': 'Ein Universum, dem Sie folgen, wurde mit neuen Inhalten aktualisiert.',
    'email.universe.comment.subject': 'Neuer Kommentar zum Universum',
    'email.universe.comment.body': '{commenterName} kommentierte ein Universum, das Sie verfolgen: "{commentText}"',
    // Blog notification emails
    'email.blog.newPost.subject': 'Neuer Blogbeitrag: "{postTitle}"',
    'email.blog.newPost.body': '{authorName} einen neuen Blog-Beitrag "{postTitle}" in einem Blog veröffentlicht, dem Sie folgen.',
    'email.blog.comment.subject': 'Neuer Kommentar zum Blogbeitrag: "{postTitle}"',
    'email.blog.comment.body': '{commenterName} Kommentierte den Blog-Eintrag "{postTitle}": "{commentText}"',
    'email.blog.update.subject': 'Blog aktualisiert',
    'email.blog.update.body': 'Ein Blog, dem Sie folgen, wurde aktualisiert.',
    // General comment notification emails
    'email.comment.general.subject': 'Neuer Kommentar zu "{contentTitle}"',
    'email.comment.general.body': '{commenterName} kommentiert zu "{contentTitle}": "{commentText}"',
    'email.comment.reply.subject': 'Antwort auf Ihren Kommentar',
    'email.comment.reply.body': '{replierName} antwortete auf Ihren Kommentar zu "{contentTitle}": "{replyText}"',
    'email.comment.like.subject': 'Ihr Kommentar wurde geliked',
    'email.comment.like.body': '{likerName} Ihr Kommentar hat mir gefallen. Engagieren Sie sich weiter!',
    // Content-specific comment notification emails
    'email.comment.fanArt.subject': 'Neuer Kommentar zu Fan-Art: "{contentTitle}"',
    'email.comment.fanArt.body': '{commenterName} Kommentieren Sie Ihr Fan-Art "{contentTitle}": "{commentText}"',
    'email.comment.event.subject': 'Neuer Kommentar zum Ereignis: "{contentTitle}"',
    'email.comment.event.body': '{commenterName} kommentiert das Ereignis "{contentTitle}": "{commentText}"',
    'email.comment.revision.subject': 'Neuer Kommentar zur Überarbeitung',
    'email.comment.revision.body': '{commenterName} kommentierte Ihre Überarbeitung: "{commentText}"',
    'email.comment.feedback.subject': 'Neuer Kommentar zum Feedback',
    'email.comment.feedback.body': '{commenterName} kommentierte Ihre Feedback-Ausgabe: "{commentText}"',
    // Welcome email
    'email.welcome.subject': 'Willkommen im Literarischen Universum!'
};