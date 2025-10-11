/**
 * @authors Jan Dvorak
 */
export default {
    'email.enrollAccount.subject': 'Invitație în Universul Literar pentru {username}',
    'email.enrollAccount.message': `Bună {username}\n\n
    Ne-ar plăcea să te invităm în Universul Literar! Ți-am creat un cont personal special în care poți accesa toate funcțiile Universului Literar! Te rugăm să ni te alături în crearea următoarei generații de instrumente pentru scriere și lectură creative!
    Pentru a-ți activa contul, pur și simplu apasă pe link-ul de mai jos:\n\n{url}`,
    'email.resetPassword.subject': 'Resetare parolă Universul Literar',
    'email.resetPassword.message': `Bună {username}!\n\n Am primit o cerere de resetare a parolei pentru contul tău.
        Te rugăm să urmezi link-ul de mai jos pentru a-ți reseta parola:\n\n{url}`,
    'email.verifyEmail.subject': 'Verificare e-mail Universul Literar',
    'email.verifyEmail.message': 'Bună {username}!\n\n Te rugăm să-ți verifici adresa de e-mail apăsând pe link-ul de mai jos:\n\n{url}',
    // New html email keys
    'email.salutation': 'Bună {username},',
    'email.welcome': 'Bun venit în Universul Literar!',
    'email.signature': 'Cu sinceritate<br>,Echipa Universul Literar</br>',
    'email.footer.settingsHtml': 'Puteți modifica setările de e-mail în <link>setările contului dvs</link>.',
    // Enrollment
    'email.enrollAccount.welcome': 'Bun venit la bord',
    'email.enrollAccount.messageHtml': 'Dorim să vă invităm în Universul Literar! Ți-am pregătit un cont personal unde poți accesa toate funcțiile Universului Literar. Te rugăm să ni te alături în crearea următoarei generații de scriere creativă și lectură!',
    'email.enrollAccount.button': 'Accesează-ți contul',
    'email.enrollAccount.signature': 'Așteptăm cu nerăbdare să vă vedem<br>, echipa Literary Universe</br>',
    // Reset password
    'email.resetPassword.messageHtml': 'Am primit o cerere de resetare a parolei pentru contul dvs. Vă rugăm să faceți clic pe butonul de mai jos pentru a continua procesul. Dacă nu ați făcut această solicitare, puteți ignora acest e-mail, dar ar putea fi un moment bun să vă revizuiți setările de securitate.',
    'email.resetPassword.button': 'Resetează parola',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Suntem bucuroși să vă avem la bord! Vă rugăm să faceți clic pe butonul de mai jos pentru a verifica această adresă de e-mail.',
    'email.verifyEmail.button': 'Verifică această adresă de e-mail',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Contul tău a fost actualizat',
    'email.adminUpgrade.message': `Ți-am actualizat contul la {plan, select,
    explorer {Explorator}
    adventurer {Aventurier}
    storyteller {Povestitor}
    other {}
  } nivel pentru următoarele {days} zile.\n\nDistracție plăcută,\nEchipa Universului Literar`,
    'email.adminUpgrade.messageHtml': `Ți-am actualizat contul la {plan, select,
    explorer {Explorator}
    adventurer {Aventurier}
    storyteller {Storyteller}
    other {}
  } nivel pentru următoarele {days, number} zile. Distracție plăcută!`,
    'email.verification': 'Verificare e-mail',
    'email.verifying': 'Se verifică adresa ta de e-mail. Acest proces va dura doar un moment...',
    'email.verified': 'Vestea bună! Adresa ta de e-mail a fost verificată!',
    // The Way (Author Level Up)
    'theWay.levelUp.emailSubject': 'Felicitări! Ai ajuns la nivelul de Autor {level, number} pe Literary Universe!',
    'theWay.levelUp.emailTitle': 'Felicitări! Ai atins nivelul Autor {level, number}!',
    'theWay.levelUp.emailIntro': 'Dedicarea ta pentru meseria de scriitor a fost răsplătită!',
    'theWay.levelUp.emailGenre': 'Ați atins nivelul {level, number} în genul {genre} .',
    'theWay.levelUp.emailContinue': 'Continuă-ți călătoria și deblochează mai multe realizări în The Way of the Author.',
    'theWay.levelUp.viewDashboard': 'Vizualizați tabloul dvs. de bord',
    // Notifications - General content comment
    'email.notifications.contentComment.subject': 'Comentariu nou pe conținutul dvs.',
    'email.notifications.contentComment.title': 'Comentariu nou pe {contentType}',
    'email.notifications.contentComment.details': 'Titlu: {contentTitle} - De la: {commenterName}',
    'email.notifications.contentComment.cta': 'Vezi comentariul',
    // Notifications - Beta reader comment
    'email.notifications.betaComment.subject': 'Noul feedback al cititorului beta',
    'email.notifications.betaComment.title': 'Noul feedback al cititorului beta',
    'email.notifications.betaComment.details': 'Poveste: {storyTitle}{chapter} - De la: {commenterName}',
    'email.notifications.betaComment.cta': 'Vezi feedback',
    // Notifications - New message
    'email.notifications.newMessage.subject': 'Aveți un mesaj nou',
    'email.notifications.newMessage.title': 'Aveți un mesaj nou',
    'email.notifications.newMessage.details': 'De la: {senderName}',
    'email.notifications.newMessage.cta': 'Vezi mesajul',
    // Notifications - Chapter published
    'email.notifications.chapterPublished.subject': 'Capitol nou publicat',
    'email.notifications.chapterPublished.title': 'Capitol nou publicat',
    'email.notifications.chapterPublished.details': 'Poveste: {storyTitle} - Capitolul: {chapterTitle}{suffix}',
    'email.notifications.chapterPublished.cta': 'Deschideți capitolul',
    // Notifications - First story created
    'email.notifications.firstStory.subject': 'Prima ta poveste este aici!',
    'email.notifications.firstStory.title': 'Prima ta poveste este în direct!',
    'email.notifications.firstStory.intro': 'Un început uimitor! Continuați să scrieți și să vă dezvoltați lumea cu îndrumări utile pe Calea autorului.',
    'email.notifications.firstStory.details': 'Poveste: {storyTitle}',
    'email.notifications.firstStory.ctaResources': 'Continuați pe Calea autorului',
    'email.notifications.firstStory.ctaStory': 'Deschide-ți povestea',
    // Notifications - First story published (with level 1 achievement)
    'email.notifications.firstStoryPublished.subject': '🎉 Felicitări! Prima ta poveste a fost publicată și ai atins nivelul de autor 1!',
    'email.notifications.firstStoryPublished.title': '🎉 Călătoria ta începe!',
    'email.notifications.firstStoryPublished.intro': 'Felicitări pentru publicarea primei tale povestiri! Aceasta este o etapă importantă în călătoria ta creativă.',
    'email.notifications.firstStoryPublished.levelAchievement': '🌟 Ați ajuns la nivelul 1 de autor pe Calea autorului! Acesta este doar începutul unei aventuri incredibile în povestire.',
    'email.notifications.firstStoryPublished.encouragement': 'Fiecare mare autor a început cu prima sa lucrare publicată. Continuă să scrii, continuă să crești și lasă-ți creativitatea să înflorească. Comunitatea Literary Universe este aici pentru a vă sprijini la fiecare pas.',
    'email.notifications.firstStoryPublished.ctaTheWay': 'Explorează Calea autorului',
    'email.notifications.firstStoryPublished.ctaStory': 'Vezi povestea ta publicată',
    // Notifications - First universe created
    'email.notifications.firstUniverse.subject': 'Felicitări pentru primul tău univers!',
    'email.notifications.firstUniverse.title': 'Felicitări pentru crearea primului tău univers!',
    'email.notifications.firstUniverse.intro': 'Călătoria dvs. de construire a lumii începe. Iată câteva resurse care să vă ajute să faceți următorii pași.',
    'email.notifications.firstUniverse.details': 'Univers: {universeName}',
    'email.notifications.firstUniverse.ctaResources': 'Explorează Calea autorului',
    'email.notifications.firstUniverse.ctaUniverse': 'Deschide-ți universul',
    // Notifications - First chapter published for a story
    'email.notifications.firstChapterPublished.subject': 'Primul tău capitol este publicat!',
    'email.notifications.firstChapterPublished.title': 'Primul capitol al povestirii tale a fost publicat!',
    'email.notifications.firstChapterPublished.intro': 'Împărtășiți-vă munca, obțineți feedback și mențineți ritmul.',
    'email.notifications.firstChapterPublished.details': 'Poveste: {storyTitle} - Capitolul: {chapterTitle}',
    'email.notifications.firstChapterPublished.ctaChapter': 'Deschideți capitolul',
    'email.notifications.firstChapterPublished.ctaStory': 'Vezi povestea',
    // Notifications - Story finished
    'email.notifications.storyFinished.subject': 'Felicitări pentru finalizarea poveștii tale!',
    'email.notifications.storyFinished.title': 'Ai reușit - povestea ta este gata!',
    'email.notifications.storyFinished.intro': 'Sărbătoriți această etapă! Luați în considerare publicarea, partajarea sau trimiterea poveștii dvs. pentru a ajunge la mai mulți cititori.',
    'email.notifications.storyFinished.details': 'Poveste: {storyTitle}',
    'email.notifications.storyFinished.cta': 'Vezi povestea ta',
    // Notifications - Fan club new subscriber
    'email.notifications.newFanSubscriber.subject': 'Abonat nou la fan club',
    'email.notifications.newFanSubscriber.title': 'Aveți un nou abonat la fan club!',
    'email.notifications.newFanSubscriber.details': 'Abonat: {subscriberName}',
    'email.notifications.newFanSubscriber.cta': 'Vezi fan club',
    // Notifications - Fan club subscription ended
    'email.notifications.fanUnsubscribed.subject': 'Un membru ți-a părăsit fan clubul',
    'email.notifications.fanUnsubscribed.title': 'Un membru ți-a părăsit fan clubul',
    'email.notifications.fanUnsubscribed.intro': 'Am vrut să vă informăm despre o schimbare recentă. Luați în considerare partajarea actualizărilor sau a conținutului exclusiv pentru a stimula implicarea.',
    'email.notifications.fanUnsubscribed.details': 'Fost membru: {name}',
    'email.notifications.fanUnsubscribed.cta': 'Fan club deschis',
    // Notifications - Friend request
    'email.notifications.friendRequest.subject': 'Cerere nouă de prietenie',
    'email.notifications.friendRequest.title': 'Cerere nouă de prietenie',
    'email.notifications.friendRequest.details': 'De la: {requesterName}',
    'email.notifications.friendRequest.cta': 'Cerere de revizuire',
    // Notifications - Collaboration invitation
    'email.notifications.collabInvite.subject': 'Invitație de colaborare',
    'email.notifications.collabInvite.title': 'Aveți o invitație de colaborare',
    'email.notifications.collabInvite.details': 'Invitator: {inviterName} - Rol: {role} - Țintă: {targetType} - {targetTitle}',
    'email.notifications.collabInvite.cta': 'Invitație la revizuire',
    // Notifications - Organization invitation
    'email.notifications.orgInvite.subject': 'Invitație de a adera la o organizație',
    'email.notifications.orgInvite.title': 'Sunteți invitați să vă alăturați {orgName}',
    'email.notifications.orgInvite.details': 'Invitator: {inviterName}',
    'email.notifications.orgInvite.cta': 'Invitație la revizuire',
    // Notifications - Daily digest
    'email.notifications.dailyDigest.subject': 'Actualizările dvs. zilnice',
    'email.notifications.dailyDigest.title': 'Actualizările dvs. zilnice',
    'email.notifications.dailyDigest.intro': 'Iată ce s-a întâmplat astăzi.',
    'email.notifications.dailyDigest.cta': 'Vezi toate actualizările',
    'email.notifications.dailyDigest.empty': 'Nu există actualizări astăzi.',
    // Notifications - Followed author posted a new blog
    'email.notifications.followedBlogPost.subject': 'O nouă postare pe blog de la un autor pe care îl urmăriți',
    'email.notifications.followedBlogPost.title': '{authorName} a postat un blog nou',
    'email.notifications.followedBlogPost.details': 'Titlu: {postTitle}',
    'email.notifications.followedBlogPost.cta': 'Citește postul',
    // Notifications - Followed author published new work
    'email.notifications.followedNewWork.subject': 'Lucrare nouă de la un autor pe care îl urmăriți',
    'email.notifications.followedNewWork.title': '{authorName} a publicat un nou {workType}',
    'email.notifications.followedNewWork.details': 'Titlu: {title}',
    'email.notifications.followedNewWork.cta': 'Vizualizare',
    // Story notification emails
    'email.story.newComment.subject': 'Comentariu nou pe "{storyTitle}"',
    'email.story.newComment.body': '{commenterName} a lăsat un comentariu cu privire la povestea ta "{storyTitle}": {commentText}',
    'email.story.betaComment.subject': 'Noul feedback beta pe "{storyTitle}"',
    'email.story.betaComment.body': '{commenterName} a furnizat feedback beta pentru "{storyTitle}": {commentText}',
    'email.story.collaboratorAccepted.subject': 'Un nou membru al echipei pentru "{storyTitle}"',
    'email.story.collaboratorAccepted.body': '{collaboratorName} a acceptat invitația dumneavoastră de a colabora la "{storyTitle}" în calitate de {role}.',
    'email.story.milestone.subject': 'Felicitări! Reper atins pe "{storyTitle}"',
    'email.story.milestone.body': 'Vești bune! Capitolul tău "{chapterTitle}" din "{storyTitle}" a ajuns la {count} {milestone}. Continuați munca minunată!',
    'email.story.betaRevision.subject': 'Noua revizuire beta disponibilă: "{chapterTitle}"',
    'email.story.betaRevision.body': '{authorName} a publicat o nouă revizuire beta a "{chapterTitle}" din "{storyTitle}". Feedback-ul dvs. ar fi foarte apreciat!',
    'email.story.newChapter.subject': 'Nou capitol disponibil: "{storyTitle}"',
    'email.story.newChapter.body': '{authorName} a publicat un nou capitol din "{storyTitle}": "{chapterTitle}". Lectură plăcută!',
    // Universe notification emails
    'email.universe.newStory.subject': 'Poveste nouă în univers: "{storyTitle}"',
    'email.universe.newStory.body': '{authorName} a adăugat o poveste nouă "{storyTitle}" la un univers pe care îl urmărești. Descoperă noi aventuri!',
    'email.universe.collaboratorChange.subject': 'Actualizarea colaborării Univers',
    'email.universe.collaboratorChange.body': 'A avut loc o schimbare în echipa de colaborare pentru un univers în care sunteți implicat.',
    'email.universe.update.subject': 'Univers actualizat',
    'email.universe.update.body': 'Un univers pe care îl urmărești a fost actualizat cu conținut nou.',
    'email.universe.comment.subject': 'Nou comentariu privind universul',
    'email.universe.comment.body': '{commenterName} ați comentat un univers pe care îl urmăriți: "{commentText}"',
    // Blog notification emails
    'email.blog.newPost.subject': 'Post nou pe blog: "{postTitle}"',
    'email.blog.newPost.body': '{authorName} a publicat o nouă postare pe blog "{postTitle}" pe un blog pe care îl urmăriți.',
    'email.blog.comment.subject': 'Comentariu nou pe blog post: "{postTitle}"',
    'email.blog.comment.body': '{commenterName} a comentat pe blog post "{postTitle}": "{commentText}"',
    'email.blog.update.subject': 'Blog actualizat',
    'email.blog.update.body': 'Un blog pe care îl urmăriți a fost actualizat.',
    // General comment notification emails
    'email.comment.general.subject': 'Comentariu nou pe "{contentTitle}"',
    'email.comment.general.body': '{commenterName} a comentat pe "{contentTitle}": "{commentText}"',
    'email.comment.reply.subject': 'Răspundeți la comentariul dvs.',
    'email.comment.reply.body': '{replierName} a răspuns comentariului dvs. la "{contentTitle}": "{replyText}"',
    'email.comment.like.subject': 'Comentariul tău a fost apreciat',
    'email.comment.like.body': '{likerName} mi-a plăcut comentariul tău. Continuă să te implici!',
    // Content-specific comment notification emails
    'email.comment.fanArt.subject': 'Un nou comentariu despre fan art: "{contentTitle}"',
    'email.comment.fanArt.body': '{commenterName} a comentat pe fan art dvs. "{contentTitle}": "{commentText}"',
    'email.comment.event.subject': 'Comentariu nou privind evenimentul: "{contentTitle}"',
    'email.comment.event.body': '{commenterName} a comentat evenimentul "{contentTitle}": "{commentText}"',
    'email.comment.revision.subject': 'Comentariu nou privind revizuirea',
    'email.comment.revision.body': '{commenterName} a comentat revizuirea dumneavoastră: "{commentText}"',
    'email.comment.feedback.subject': 'Comentariu nou privind feedback-ul',
    'email.comment.feedback.body': '{commenterName} a comentat pe problema dvs. de feedback: "{commentText}"',
    // Welcome email
    'email.welcome.subject': 'Bine ați venit la Literary Universe!'
};