/**
 * @authors Jan Dvorak
 */
export default {
    'email.enrollAccount.subject': 'Invitation à l\'Univers Littéraire pour {username}',
    'email.enrollAccount.message': `Bonjour {username}\n\n
    Nous avons le plaisir de vous inviter sur L'Univers Littéraire ! Nous avons créé un compte personnel spécial pour vous où vous pouvez accéder à toutes les fonctionnalités de L'Univers Littéraire ! Rejoignez-nous pour créer la prochaine génération d'outils d'écriture et de lecture créative !
    Pour activer votre compte, il vous suffit de cliquer sur le lien ci-dessous :\n\n{url}`,
    'email.resetPassword.subject': 'Réinitialisation du mot de passe de l\'Univers Littéraire',
    'email.resetPassword.message': `Bonjour {username}!\n\n Nous avons reçu une demande de réinitialisation du mot de passe de votre compte.
        Veuillez suivre le lien ci-dessous pour réinitialiser votre mot de passe :\n\n{url}`,
    'email.verifyEmail.subject': 'Vérification de l\'e-mail de L\'Univers Littéraire',
    'email.verifyEmail.message': 'Bonjour {username}!\n\n Veuillez vérifier votre adresse e-mail en cliquant sur le lien ci-dessous :\n\n{url}',
    // New html email keys
    'email.salutation': 'Bonjour {username},',
    'email.welcome': 'Bienvenue dans L\'Univers Littéraire !',
    'email.signature': 'Sincèrement,<br />L\'équipe de L\'Univers Littéraire',
    // Enrollment
    'email.enrollAccount.welcome': 'Bienvenue à bord',
    'email.enrollAccount.messageHtml': 'Nous aimerions vous inviter à l\'Univers Littéraire ! Nous avons créé pour vous un compte personnel qui vous permettra d\'accéder à toutes les fonctionnalités de Literary Universe. Rejoignez-nous pour créer la prochaine génération d\'écriture et de lecture créatives !',
    'email.enrollAccount.button': 'Accéder à votre compte',
    'email.enrollAccount.signature': 'Nous vous attendons avec impatience,<br />L\'équipe de l\'Univers Littéraire',
    // Reset password
    'email.resetPassword.messageHtml': 'Nous avons reçu une demande de réinitialisation du mot de passe de votre compte. Veuillez cliquer sur le bouton ci-dessous pour poursuivre la procédure. Si vous n\'avez pas fait cette demande, vous pouvez ignorer cet e-mail, mais il serait peut-être bon de revoir vos paramètres de sécurité.',
    'email.resetPassword.button': 'Réinitialiser le mot de passe',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Nous sommes heureux de vous compter parmi nous ! Veuillez cliquer sur le bouton ci-dessous pour vérifier cette adresse e-mail.',
    'email.verifyEmail.button': 'Vérifier cette adresse email',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Votre compte a été mis à jour',
    'email.adminUpgrade.message': `Nous avons mis à jour votre compte au niveau {plan, select,
    explorer {Explorateur}
    adventurer {Aventurier}
    storyteller {Compteur}
    other {}
  } pour les prochains {days} jours.\n\nProfitez,\nl'équipe de l'Univers Littéraire`,
    'email.adminUpgrade.messageHtml': `Nous avons mis à jour votre compte au niveau {plan, select,
    explorer {Explorateur}
    adventurer {Aventurier}
    storyteller {Compteur}
    other {}
  } pour les prochains {days} jours. Profitez !`,
    'email.verification': 'Vérification de l\'email',
    'email.verifying': 'Vérification de votre email. Cela ne prendra qu\'un instant...',
    'email.verified': 'Bonnes nouvelles ! Votre email a été vérifié !',
    // The Way (Author Level Up)
    'theWay.levelUp.emailSubject': 'Félicitations ! Vous avez atteint le niveau d\'auteur {level} sur Literary Universe !',
    'theWay.levelUp.emailTitle': 'Félicitations ! Vous avez atteint le niveau d\'auteur {level}!',
    'theWay.levelUp.emailIntro': 'Votre dévouement à l\'art de l\'écriture a été récompensé !',
    'theWay.levelUp.emailGenre': 'Vous avez atteint le niveau {level} dans le genre {genre} .',
    'theWay.levelUp.emailContinue': 'Poursuivez votre voyage et débloquez d\'autres réalisations sur La voie de l\'auteur.',
    'theWay.levelUp.viewDashboard': 'Voir votre tableau de bord',
    // Notifications - General content comment
    'email.notifications.contentComment.subject': 'Nouveau commentaire sur votre contenu',
    'email.notifications.contentComment.title': 'Nouveau commentaire sur votre {contentType}',
    'email.notifications.contentComment.details': 'Titre : {contentTitle} - De : {commenterName}',
    'email.notifications.contentComment.cta': 'Voir le commentaire',
    // Notifications - Beta reader comment
    'email.notifications.betaComment.subject': 'Nouveaux commentaires de lecteurs bêta',
    'email.notifications.betaComment.title': 'Nouveaux commentaires de lecteurs bêta',
    'email.notifications.betaComment.details': 'Histoire : {storyTitle}{chapter} - De : {commenterName}',
    'email.notifications.betaComment.cta': 'Voir le feedback',
    // Notifications - New message
    'email.notifications.newMessage.subject': 'Vous avez un nouveau message',
    'email.notifications.newMessage.title': 'Vous avez un nouveau message',
    'email.notifications.newMessage.details': 'De : {senderName}',
    'email.notifications.newMessage.cta': 'Voir le message',
    // Notifications - Chapter published
    'email.notifications.chapterPublished.subject': 'Publication d\'un nouveau chapitre',
    'email.notifications.chapterPublished.title': 'Publication d\'un nouveau chapitre',
    'email.notifications.chapterPublished.details': 'Histoire : {storyTitle} - Chapitre : {chapterTitle}{suffix}',
    'email.notifications.chapterPublished.cta': 'Ouvrir le chapitre',
    // Notifications - First story created
    'email.notifications.firstStory.subject': 'Votre première histoire est ici !',
    'email.notifications.firstStory.title': 'Votre premier article est en ligne !',
    'email.notifications.firstStory.intro': 'Un début étonnant ! Continuez à écrire et à développer votre univers grâce aux conseils utiles de La voie de l\'auteur.',
    'email.notifications.firstStory.details': 'Histoire : {storyTitle}',
    'email.notifications.firstStory.ctaResources': 'Continuer sur La voie de l\'auteur',
    'email.notifications.firstStory.ctaStory': 'Ouvrez votre histoire',
    // Notifications - First universe created
    'email.notifications.firstUniverse.subject': 'Félicitations pour votre premier univers !',
    'email.notifications.firstUniverse.title': 'Félicitations pour la création de votre premier univers !',
    'email.notifications.firstUniverse.intro': 'Votre voyage de construction du monde commence. Voici quelques ressources qui vous aideront à franchir les étapes suivantes.',
    'email.notifications.firstUniverse.details': 'L\'univers : {universeName}',
    'email.notifications.firstUniverse.ctaResources': 'Explorer la voie de l\'auteur',
    'email.notifications.firstUniverse.ctaUniverse': 'Ouvrez votre univers',
    // Notifications - First chapter published for a story
    'email.notifications.firstChapterPublished.subject': 'Votre premier chapitre est publié !',
    'email.notifications.firstChapterPublished.title': 'Le premier chapitre de votre histoire est publié !',
    'email.notifications.firstChapterPublished.intro': 'Partagez votre travail, recueillez des commentaires et maintenez l\'élan.',
    'email.notifications.firstChapterPublished.details': 'Histoire : {storyTitle} - Chapitre : {chapterTitle}',
    'email.notifications.firstChapterPublished.ctaChapter': 'Ouvrir le chapitre',
    'email.notifications.firstChapterPublished.ctaStory': 'Voir l\'histoire',
    // Notifications - Story finished
    'email.notifications.storyFinished.subject': 'Félicitations pour avoir terminé votre histoire !',
    'email.notifications.storyFinished.title': 'Vous l\'avez fait - votre histoire est terminée !',
    'email.notifications.storyFinished.intro': 'Célébrez cette étape ! Envisagez de publier, de partager ou de soumettre votre histoire pour toucher davantage de lecteurs.',
    'email.notifications.storyFinished.details': 'Histoire : {storyTitle}',
    'email.notifications.storyFinished.cta': 'Voir votre histoire',
    // Notifications - Fan club new subscriber
    'email.notifications.newFanSubscriber.subject': 'Nouvel abonné au fan club',
    'email.notifications.newFanSubscriber.title': 'Vous avez un nouvel abonné au fan club !',
    'email.notifications.newFanSubscriber.details': 'Abonné : {subscriberName}',
    'email.notifications.newFanSubscriber.cta': 'Voir le fan club',
    // Notifications - Fan club subscription ended
    'email.notifications.fanUnsubscribed.subject': 'Un membre a quitté votre fan club',
    'email.notifications.fanUnsubscribed.title': 'Un membre a quitté votre fan club',
    'email.notifications.fanUnsubscribed.intro': 'Nous voulions vous informer d\'un changement récent. Pensez à partager des mises à jour ou du contenu exclusif pour stimuler l\'engagement.',
    'email.notifications.fanUnsubscribed.details': 'Ancien membre : {name}',
    'email.notifications.fanUnsubscribed.cta': 'Ouvrir un fan club',
    // Notifications - Friend request
    'email.notifications.friendRequest.subject': 'Nouvelle demande d\'ami',
    'email.notifications.friendRequest.title': 'Nouvelle demande d\'ami',
    'email.notifications.friendRequest.details': 'De : {requesterName}',
    'email.notifications.friendRequest.cta': 'Demande de révision',
    // Notifications - Collaboration invitation
    'email.notifications.collabInvite.subject': 'Invitation à la collaboration',
    'email.notifications.collabInvite.title': 'Vous avez une invitation à collaborer',
    'email.notifications.collabInvite.details': 'Invitant : {inviterName} - Rôle : Rôle : Rôle : Rôle : Rôle : Rôle : Rôle : Rôle {role} - Cible : {targetType} - {targetTitle}',
    'email.notifications.collabInvite.cta': 'Invitation à réviser',
    // Notifications - Organization invitation
    'email.notifications.orgInvite.subject': 'Invitation à rejoindre une organisation',
    'email.notifications.orgInvite.title': 'Vous êtes invités à rejoindre {orgName}',
    'email.notifications.orgInvite.details': 'Inviteur : {inviterName}',
    'email.notifications.orgInvite.cta': 'Invitation à réviser',
    // Notifications - Daily digest
    'email.notifications.dailyDigest.subject': 'Vos mises à jour quotidiennes',
    'email.notifications.dailyDigest.title': 'Vos mises à jour quotidiennes',
    'email.notifications.dailyDigest.intro': 'Voici ce qui s\'est passé aujourd\'hui.',
    'email.notifications.dailyDigest.cta': 'Voir toutes les mises à jour',
    'email.notifications.dailyDigest.empty': 'Pas de mise à jour aujourd\'hui.',
    // Notifications - Followed author posted a new blog
    'email.notifications.followedBlogPost.subject': 'Nouvel article de blog d\'un auteur que vous suivez',
    'email.notifications.followedBlogPost.title': '{authorName} a publié un nouveau blog',
    'email.notifications.followedBlogPost.details': 'Titre : {postTitle}',
    'email.notifications.followedBlogPost.cta': 'Lire la suite',
    // Notifications - Followed author published new work
    'email.notifications.followedNewWork.subject': 'Nouveau travail d\'un auteur que vous suivez',
    'email.notifications.followedNewWork.title': '{authorName} a publié un nouveau site {workType}',
    'email.notifications.followedNewWork.details': 'Titre : {title}',
    'email.notifications.followedNewWork.cta': 'Voir',
    // Story notification emails
    'email.story.newComment.subject': 'Nouveau commentaire sur "{storyTitle}"',
    'email.story.newComment.body': '{commenterName} a laissé un commentaire sur votre histoire "{storyTitle}" : {commentText}',
    'email.story.betaComment.subject': 'Nouveaux commentaires sur la version bêta de "{storyTitle}"',
    'email.story.betaComment.body': '{commenterName} a fourni un feed-back bêta sur "{storyTitle}" : {commentText}',
    'email.story.collaboratorAccepted.subject': 'Nouveau membre de l\'équipe "{storyTitle}"',
    'email.story.collaboratorAccepted.body': '{collaboratorName} a accepté votre invitation à collaborer à "{storyTitle}" en tant que {role}.',
    'email.story.milestone.subject': 'Félicitations ! Étape franchie sur "{storyTitle}"',
    'email.story.milestone.body': 'Excellente nouvelle ! Votre chapitre "{chapterTitle}" de "{storyTitle}" a atteint {count} {milestone}. Continuez à faire du bon travail !',
    'email.story.betaRevision.subject': 'Nouvelle révision bêta disponible : "{chapterTitle}"',
    'email.story.betaRevision.body': '{authorName} a publié une nouvelle révision bêta de "{chapterTitle}" à partir de "{storyTitle}". Vos commentaires sont les bienvenus !',
    'email.story.newChapter.subject': 'Nouveau chapitre disponible : "{storyTitle}"',
    'email.story.newChapter.body': '{authorName} a publié un nouveau chapitre de "{storyTitle}" : "{chapterTitle}". Bonne lecture !',
    // Universe notification emails
    'email.universe.newStory.subject': 'Nouvelle histoire dans l\'univers : "{storyTitle}"',
    'email.universe.newStory.body': '{authorName} a ajouté une nouvelle histoire "{storyTitle}" à un univers que vous suivez. Découvrez de nouvelles aventures !',
    'email.universe.collaboratorChange.subject': 'Mise à jour de la collaboration avec Universe',
    'email.universe.collaboratorChange.body': 'L\'équipe de collaboration d\'un univers auquel vous participez a changé.',
    'email.universe.update.subject': 'Univers mis à jour',
    'email.universe.update.body': 'Un univers que vous suivez a été mis à jour avec du nouveau contenu.',
    'email.universe.comment.subject': 'Nouveau commentaire sur l\'univers',
    'email.universe.comment.body': '{commenterName} commenté un univers que vous suivez : "{commentText}"',
    // Blog notification emails
    'email.blog.newPost.subject': 'Nouveau billet de blog : "{postTitle}"',
    'email.blog.newPost.body': '{authorName} a publié un nouvel article "{postTitle}" sur un blog que vous suivez.',
    'email.blog.comment.subject': 'Nouveau commentaire sur l\'article du blog : "{postTitle}"',
    'email.blog.comment.body': '{commenterName} a commenté l\'article de blog "{postTitle}" : "{commentText}"',
    'email.blog.update.subject': 'Blog mis à jour',
    'email.blog.update.body': 'Un blog que vous suivez a été mis à jour.',
    // General comment notification emails
    'email.comment.general.subject': 'Nouveau commentaire sur "{contentTitle}"',
    'email.comment.general.body': '{commenterName} a commenté sur "{contentTitle}" : "{commentText}"',
    'email.comment.reply.subject': 'Répondre à votre commentaire',
    'email.comment.reply.body': '{replierName} a répondu à votre commentaire sur "{contentTitle}" : "{replyText}"',
    'email.comment.like.subject': 'Votre commentaire a été apprécié',
    'email.comment.like.body': '{likerName} J\'ai apprécié votre commentaire. Continuez à vous engager !',
    // Content-specific comment notification emails
    'email.comment.fanArt.subject': 'Nouveau commentaire sur le fan art : "{contentTitle}"',
    'email.comment.fanArt.body': '{commenterName} a commenté votre fan art "{contentTitle}" : "{commentText}"',
    'email.comment.event.subject': 'Nouveau commentaire sur l\'événement : "{contentTitle}"',
    'email.comment.event.body': '{commenterName} a commenté l\'événement "{contentTitle}" : "{commentText}"',
    'email.comment.revision.subject': 'Nouveau commentaire sur la révision',
    'email.comment.revision.body': '{commenterName} a commenté votre révision : "{commentText}"',
    'email.comment.feedback.subject': 'Nouveau commentaire sur le retour d\'information',
    'email.comment.feedback.body': '{commenterName} a commenté votre problème de retour d\'information : "{commentText}"',
    // Welcome email
    'email.welcome.subject': 'Bienvenue dans l\'Univers littéraire !'
};