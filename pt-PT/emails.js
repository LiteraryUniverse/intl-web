/**
 * @authors Jan Dvorak
 */
export default {
    'email.enrollAccount.subject': 'Convite ao Universo Literário para {username}',
    'email.enrollAccount.message': `Olá {username}\n\n
    Gostaríamos de convidá-lo a visitar o Universo Literário! Criámos uma conta pessoal especial para si onde pode aceder a todas as funcionalidades do Universo Literário! Junte-se a nós na criação da próxima geração de ferramentas criativas de escrita e leitura!
    Para ativar a sua conta, basta clicar no link abaixo:\n\n{url}`,
    'email.resetPassword.subject': 'Reinicialização da palavra passe do Universo Literário',
    'email.resetPassword.message': `Olá {username}!\n\n Recebemos um pedido para reinicializar a sua palavra passe da sua conta.
        Siga o link abaixo para reinicializar a sua palavra passe:\n\n{url}`,
    'email.verifyEmail.subject': 'Verificação do email do Universo Literário',
    'email.verifyEmail.message': 'Olá {username}!\n\n Por favor, verifique o seu email, clicando no link abaixo:\n\n{url}',
    // New html email keys
    'email.salutation': 'Olá {username},',
    'email.welcome': 'Bem-vindo ao Universo Literário!',
    'email.signature': 'Atenciosamente,<br />Equipa do Universo Literário',
    'email.footer.settingsHtml': 'Pode alterar as suas definições de correio eletrónico nas <a href="{link}">definições da sua conta</a>.',
    // Enrollment
    'email.enrollAccount.welcome': 'Bem-vindo a bordo',
    'email.enrollAccount.messageHtml': 'Gostaríamos de o convidar para o Universo Literário! Preparámos uma conta pessoal para si, onde poderá aceder a todas as funcionalidades do Universo Literário. Junte-se a nós na criação da próxima geração de escrita e leitura criativas!',
    'email.enrollAccount.button': 'Aceda à sua conta',
    'email.enrollAccount.signature': 'Esperamos por si,<br />Equipa do Universo Literário',
    // Reset password
    'email.resetPassword.messageHtml': 'Recebemos um pedido para repor a palavra-passe da sua conta. Clique no botão abaixo para continuar o processo. Se não tiver efectuado este pedido, pode ignorar esta mensagem de correio eletrónico, mas talvez seja uma boa altura para rever as suas definições de segurança.',
    'email.resetPassword.button': 'Redefinir palavra passe',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Estamos felizes por o ter a bordo! Clique no botão abaixo para verificar este endereço de correio eletrónico.',
    'email.verifyEmail.button': 'Verifique este endereço de email',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'A sua conta foi atualizada',
    'email.adminUpgrade.message': `Atualizámos a sua conta para o nível de {plan, select,
    explorer {Explorador}
    adventurer {Aventureiro}
    storyteller {Contador de Histórias}
    other {}
  } para os próximos {days} dias.\n\nAproveite,\nEquipa do Universo Literário`,
    'email.adminUpgrade.messageHtml': `Actualizámos a sua conta para {plan, select,
    explorer {Explorador}
    adventurer {Aventureiro}
    storyteller {Contador de Histórias}
    other {~}
  } para os próximos {days, number} dias. Divirta-se!`,
    'email.verification': 'Verificação de email',
    'email.verifying': 'Verificando o seu email. Isto vai demorar apenas um momento...',
    'email.verified': 'Grandes notícias! O seu email foi verificado!',
    // The Way (Author Level Up)
    'theWay.levelUp.emailSubject': 'Parabéns para si! Alcançou o Nível de Autor {level, number} no Universo Literário!',
    'theWay.levelUp.emailTitle': 'Parabéns! Alcançou o Nível de Autor {level, number}!',
    'theWay.levelUp.emailIntro': 'A sua dedicação ao ofício da escrita foi recompensada!',
    'theWay.levelUp.emailGenre': 'Alcançou o nível {level, number} no género {genre} .',
    'theWay.levelUp.emailContinue': 'Continue a sua viagem e desbloqueie mais conquistas em The Way of the Author.',
    'theWay.levelUp.viewDashboard': 'Ver o seu painel de controlo',
    // Notifications - General content comment
    'email.notifications.contentComment.subject': 'Novo comentário sobre o seu conteúdo',
    'email.notifications.contentComment.title': 'Novo comentário no seu {contentType}',
    'email.notifications.contentComment.details': 'Título: {contentTitle} - De: {commenterName}',
    'email.notifications.contentComment.cta': 'Ver comentário',
    // Notifications - Beta reader comment
    'email.notifications.betaComment.subject': 'Comentários de novos leitores beta',
    'email.notifications.betaComment.title': 'Comentários de novos leitores beta',
    'email.notifications.betaComment.details': 'História: {storyTitle}{chapter} - De: {commenterName}',
    'email.notifications.betaComment.cta': 'Ver comentários',
    // Notifications - New message
    'email.notifications.newMessage.subject': 'Tem uma nova mensagem',
    'email.notifications.newMessage.title': 'Tem uma nova mensagem',
    'email.notifications.newMessage.details': 'De: {senderName}',
    'email.notifications.newMessage.cta': 'Ver mensagem',
    // Notifications - Chapter published
    'email.notifications.chapterPublished.subject': 'Novo capítulo publicado',
    'email.notifications.chapterPublished.title': 'Novo capítulo publicado',
    'email.notifications.chapterPublished.details': 'História: {storyTitle} - Capítulo: {chapterTitle}{suffix}',
    'email.notifications.chapterPublished.cta': 'Abrir capítulo',
    // Notifications - First story created
    'email.notifications.firstStory.subject': 'A sua primeira história está aqui!',
    'email.notifications.firstStory.title': 'A sua primeira história está em direto!',
    'email.notifications.firstStory.intro': 'Um começo fantástico! Continue a escrever e a fazer crescer o seu mundo com orientações úteis em O Caminho do Autor.',
    'email.notifications.firstStory.details': 'História: {storyTitle}',
    'email.notifications.firstStory.ctaResources': 'Continuar em O Caminho do Autor',
    'email.notifications.firstStory.ctaStory': 'Abra a sua história',
    // Notifications - First universe created
    'email.notifications.firstUniverse.subject': 'Parabéns pelo seu primeiro universo!',
    'email.notifications.firstUniverse.title': 'Parabéns pela criação do seu primeiro universo!',
    'email.notifications.firstUniverse.intro': 'A sua viagem de construção do mundo começa. Aqui estão alguns recursos para o ajudar a dar os próximos passos.',
    'email.notifications.firstUniverse.details': 'Universo: {universeName}',
    'email.notifications.firstUniverse.ctaResources': 'Explore O Caminho do Autor',
    'email.notifications.firstUniverse.ctaUniverse': 'Abra o seu universo',
    // Notifications - First chapter published for a story
    'email.notifications.firstChapterPublished.subject': 'O seu primeiro capítulo foi publicado!',
    'email.notifications.firstChapterPublished.title': 'O primeiro capítulo da sua história foi publicado!',
    'email.notifications.firstChapterPublished.intro': 'Partilhe o seu trabalho, obtenha feedback e mantenha a dinâmica.',
    'email.notifications.firstChapterPublished.details': 'História: {storyTitle} - Capítulo: {chapterTitle}',
    'email.notifications.firstChapterPublished.ctaChapter': 'Abrir capítulo',
    'email.notifications.firstChapterPublished.ctaStory': 'Ver a história',
    // Notifications - Story finished
    'email.notifications.storyFinished.subject': 'Parabéns por ter terminado a sua história!',
    'email.notifications.storyFinished.title': 'Conseguiu - a sua história está terminada!',
    'email.notifications.storyFinished.intro': 'Celebre este marco histórico! Considere publicar, partilhar ou enviar a sua história para chegar a mais leitores.',
    'email.notifications.storyFinished.details': 'História: {storyTitle}',
    'email.notifications.storyFinished.cta': 'Ver a sua história',
    // Notifications - Fan club new subscriber
    'email.notifications.newFanSubscriber.subject': 'Novo assinante do clube de fãs',
    'email.notifications.newFanSubscriber.title': 'Tem um novo assinante no seu clube de fãs!',
    'email.notifications.newFanSubscriber.details': 'Subscritor: {subscriberName}',
    'email.notifications.newFanSubscriber.cta': 'Ver clube de fãs',
    // Notifications - Fan club subscription ended
    'email.notifications.fanUnsubscribed.subject': 'Um membro deixou o seu clube de fãs',
    'email.notifications.fanUnsubscribed.title': 'Um membro deixou o seu clube de fãs',
    'email.notifications.fanUnsubscribed.intro': 'Queríamos informá-lo sobre uma alteração recente. Considere a possibilidade de partilhar actualizações ou conteúdos exclusivos para aumentar o envolvimento.',
    'email.notifications.fanUnsubscribed.details': 'Antigo membro: {name}',
    'email.notifications.fanUnsubscribed.cta': 'Clube de fãs aberto',
    // Notifications - Friend request
    'email.notifications.friendRequest.subject': 'Novo pedido de amizade',
    'email.notifications.friendRequest.title': 'Novo pedido de amizade',
    'email.notifications.friendRequest.details': 'De: {requesterName}',
    'email.notifications.friendRequest.cta': 'Pedido de revisão',
    // Notifications - Collaboration invitation
    'email.notifications.collabInvite.subject': 'Convite à colaboração',
    'email.notifications.collabInvite.title': 'Tem um convite de colaboração',
    'email.notifications.collabInvite.details': 'Convidador: {inviterName} - Papel: {role} - Alvo: {targetType} - {targetTitle}',
    'email.notifications.collabInvite.cta': 'Convite para revisão',
    // Notifications - Organization invitation
    'email.notifications.orgInvite.subject': 'Convite para aderir a uma organização',
    'email.notifications.orgInvite.title': 'Está convidado a juntar-se a {orgName}',
    'email.notifications.orgInvite.details': 'Invitador: {inviterName}',
    'email.notifications.orgInvite.cta': 'Convite para revisão',
    // Notifications - Daily digest
    'email.notifications.dailyDigest.subject': 'As suas actualizações diárias',
    'email.notifications.dailyDigest.title': 'As suas actualizações diárias',
    'email.notifications.dailyDigest.intro': 'Eis o que aconteceu hoje.',
    'email.notifications.dailyDigest.cta': 'Ver todas as actualizações',
    'email.notifications.dailyDigest.empty': 'Hoje não há actualizações.',
    // Notifications - Followed author posted a new blog
    'email.notifications.followedBlogPost.subject': 'Nova publicação no blogue de um autor que segue',
    'email.notifications.followedBlogPost.title': '{authorName} publicou um novo blogue',
    'email.notifications.followedBlogPost.details': 'Título: {postTitle}',
    'email.notifications.followedBlogPost.cta': 'Leia a publicação',
    // Notifications - Followed author published new work
    'email.notifications.followedNewWork.subject': 'Novo trabalho de um autor que segue',
    'email.notifications.followedNewWork.title': '{authorName} publicou um novo {workType}',
    'email.notifications.followedNewWork.details': 'Título: {title}',
    'email.notifications.followedNewWork.cta': 'Veja',
    // Story notification emails
    'email.story.newComment.subject': 'Novo comentário em "{storyTitle}"',
    'email.story.newComment.body': '{commenterName} deixou um comentário sobre a sua história "{storyTitle}": {commentText}',
    'email.story.betaComment.subject': 'Novo feedback beta sobre "{storyTitle}"',
    'email.story.betaComment.body': '{commenterName} forneceu feedback beta sobre "{storyTitle}": {commentText}',
    'email.story.collaboratorAccepted.subject': 'Novo membro da equipa para "{storyTitle}"',
    'email.story.collaboratorAccepted.body': '{collaboratorName} aceitou o seu convite para colaborar em "{storyTitle}" como {role}.',
    'email.story.milestone.subject': 'Parabéns! Objetivo alcançado em "{storyTitle}"',
    'email.story.milestone.body': 'Boas notícias! O seu capítulo "{chapterTitle}" de "{storyTitle}" chegou a {count} {milestone}. Continue com o ótimo trabalho!',
    'email.story.betaRevision.subject': 'Nova revisão beta disponível: "{chapterTitle}"',
    'email.story.betaRevision.body': '{authorName} publicou uma nova revisão beta de "{chapterTitle}" de "{storyTitle}". Os seus comentários serão muito apreciados!',
    'email.story.newChapter.subject': 'Novo capítulo disponível: "{storyTitle}"',
    'email.story.newChapter.body': '{authorName} publicou um novo capítulo de "{storyTitle}": "{chapterTitle}". Boa leitura!',
    // Universe notification emails
    'email.universe.newStory.subject': 'Nova história no universo: "{storyTitle}"',
    'email.universe.newStory.body': '{authorName} adicionou uma nova história "{storyTitle}" a um universo que está a seguir. Descubra novas aventuras!',
    'email.universe.collaboratorChange.subject': 'Atualização da colaboração no universo',
    'email.universe.collaboratorChange.body': 'Houve uma mudança na equipa de colaboração de um universo em que está envolvido.',
    'email.universe.update.subject': 'Universo atualizado',
    'email.universe.update.body': 'Um universo que está a seguir foi atualizado com novos conteúdos.',
    'email.universe.comment.subject': 'Novo comentário sobre o universo',
    'email.universe.comment.body': '{commenterName} comentou sobre um universo que está a seguir: "{commentText}"',
    // Blog notification emails
    'email.blog.newPost.subject': 'Nova publicação no blogue: "{postTitle}"',
    'email.blog.newPost.body': '{authorName} publicou um novo post "{postTitle}" num blogue que está a seguir.',
    'email.blog.comment.subject': 'Novo comentário na publicação do blogue: "{postTitle}"',
    'email.blog.comment.body': '{commenterName} comentou o post no blogue "{postTitle}": "{commentText}"',
    'email.blog.update.subject': 'Blogue atualizado',
    'email.blog.update.body': 'Um blogue que está a seguir foi atualizado.',
    // General comment notification emails
    'email.comment.general.subject': 'Novo comentário em "{contentTitle}"',
    'email.comment.general.body': '{commenterName} comentou em "{contentTitle}": "{commentText}"',
    'email.comment.reply.subject': 'Responder ao seu comentário',
    'email.comment.reply.body': '{replierName} respondeu ao seu comentário sobre "{contentTitle}": "{replyText}"',
    'email.comment.like.subject': 'O seu comentário foi apreciado',
    'email.comment.like.body': '{likerName} gostou do seu comentário. Continue a envolver-se!',
    // Content-specific comment notification emails
    'email.comment.fanArt.subject': 'Novo comentário sobre arte de fãs: "{contentTitle}"',
    'email.comment.fanArt.body': '{commenterName} comentou a sua arte de fã "{contentTitle}": "{commentText}"',
    'email.comment.event.subject': 'Novo comentário sobre o evento: "{contentTitle}"',
    'email.comment.event.body': '{commenterName} comentou o evento "{contentTitle}": "{commentText}"',
    'email.comment.revision.subject': 'Novo comentário sobre a revisão',
    'email.comment.revision.body': '{commenterName} comentou a sua revisão: "{commentText}"',
    'email.comment.feedback.subject': 'Novo comentário sobre o feedback',
    'email.comment.feedback.body': '{commenterName} comentou a sua questão de feedback: "{commentText}"',
    // Welcome email
    'email.welcome.subject': 'Bem-vindo ao Universo Literário!'
};