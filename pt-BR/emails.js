/**
 * @authors Jan Dvorak
 */
export default {
    'email.enrollAccount.subject': 'Convite para Universo Literário para {username}',
    'email.enrollAccount.message': `Olá {username}\n\n
    Gostaríamos de convidá-lo para o universo literário! Nós criamos uma conta pessoal especial para você, onde você pode acessar todas as funcionalidades do universo literário! Por favor, junte-se a nós na criação da próxima geração de ferramentas de escrita e leitura criativas!
    Para ativar a sua conta, basta clicar no link abaixo:\n\n{url}`,
    'email.resetPassword.subject': 'Senha de redefinição Universa Literária',
    'email.resetPassword.message': `Olá {username}!\n\n Recebemos um pedido para redefinir a sua senha da sua conta.
        Por favor, siga o link abaixo para redefinir sua senha:\n\n{url}`,
    'email.verifyEmail.subject': 'Verificação de e-mail Universo Literária',
    'email.verifyEmail.message': 'Olá {username}!\n\n Por favor, verifique o seu endereço de e-mail clicando no link abaixo:\n\n{url}',
    // New html email keys
    'email.salutation': 'Olá {username},',
    'email.welcome': 'Bem-vindo ao Universo Literário!',
    'email.signature': 'Atenciosamente<br>, equipe do Universo Literário</br>',
    'email.footer.settingsHtml': 'O senhor pode alterar suas configurações de e-mail nas <link>configurações de sua conta</link>.',
    // Enrollment
    'email.enrollAccount.welcome': 'Bem-vindo a bordo',
    'email.enrollAccount.messageHtml': 'Gostaríamos de convidar o senhor para o Universo Literário! Preparamos uma conta pessoal para o senhor, onde poderá acessar todos os recursos do Literary Universe. Junte-se a nós na criação da próxima geração de escrita e leitura criativa!',
    'email.enrollAccount.button': 'Acessar sua conta',
    'email.enrollAccount.signature': 'Estamos ansiosos para ver o senhor<br>, equipe do Universo Literário</br>',
    // Reset password
    'email.resetPassword.messageHtml': 'Recebemos uma solicitação para redefinir a senha da sua conta. Clique no botão abaixo para continuar o processo. Se o senhor não tiver feito essa solicitação, poderá ignorar este e-mail, mas talvez seja uma boa hora para rever suas configurações de segurança.',
    'email.resetPassword.button': 'Redefinir senha',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Estamos felizes por ter o senhor a bordo! Clique no botão abaixo para verificar este endereço de e-mail.',
    'email.verifyEmail.button': 'Verifique seu endereço de email',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Sua conta foi atualizada',
    'email.adminUpgrade.message': `Atualizamos sua conta para {plan, select,
    explorer {Explorador}
    adventurer {Aventureiro}
    storyteller {Storyteller}
    other {}
  } nível pelos próximos {days} dias.\n\nDivirta-se,\nEquipe do Universo Literário`,
    'email.adminUpgrade.messageHtml': `Atualizamos sua conta para {plan, select,
    explorer {Explorer}
    adventurer {Adventurer}
    storyteller {Storyteller}
    other {~}
  } tier para os próximos {days, number} dias. O senhor pode aproveitar!`,
    'email.verification': 'Verificação por e-mail',
    'email.verifying': 'Verificação de seu e-mail. Isto levará apenas um momento...',
    'email.verified': 'Ótimas notícias! Seu e-mail foi verificado!',
    // The Way (Author Level Up)
    'theWay.levelUp.emailSubject': 'Parabéns! O senhor atingiu o nível de autor {level, number} no Literary Universe!',
    'theWay.levelUp.emailTitle': 'Parabéns! O senhor atingiu o Nível de Autor {level, number}!',
    'theWay.levelUp.emailIntro': 'Sua dedicação ao ofício da escrita foi recompensada!',
    'theWay.levelUp.emailGenre': 'O senhor atingiu o nível {level, number} no gênero {genre} .',
    'theWay.levelUp.emailContinue': 'Continue sua jornada e desbloqueie mais conquistas em The Way of the Author.',
    'theWay.levelUp.viewDashboard': 'Visualizar seu painel de controle',
    // Notifications - General content comment
    'email.notifications.contentComment.subject': 'Novo comentário sobre seu conteúdo',
    'email.notifications.contentComment.title': 'Novo comentário no site do senhor {contentType}',
    'email.notifications.contentComment.details': 'Título: {contentTitle} - De: {commenterName}',
    'email.notifications.contentComment.cta': 'Ver comentário',
    // Notifications - Beta reader comment
    'email.notifications.betaComment.subject': 'Novos comentários de leitores beta',
    'email.notifications.betaComment.title': 'Novos comentários de leitores beta',
    'email.notifications.betaComment.details': 'História: {storyTitle}{chapter} - De: {commenterName}',
    'email.notifications.betaComment.cta': 'Ver comentários',
    // Notifications - New message
    'email.notifications.newMessage.subject': 'O senhor tem uma nova mensagem',
    'email.notifications.newMessage.title': 'O senhor tem uma nova mensagem',
    'email.notifications.newMessage.details': 'De: {senderName}',
    'email.notifications.newMessage.cta': 'Ver mensagem',
    // Notifications - Chapter published
    'email.notifications.chapterPublished.subject': 'Novo capítulo publicado',
    'email.notifications.chapterPublished.title': 'Novo capítulo publicado',
    'email.notifications.chapterPublished.details': 'História: {storyTitle} - Capítulo: {chapterTitle}{suffix}',
    'email.notifications.chapterPublished.cta': 'Abrir capítulo',
    // Notifications - First story created
    'email.notifications.firstStory.subject': 'Sua primeira história está aqui!',
    'email.notifications.firstStory.title': 'Sua primeira história está no ar!',
    'email.notifications.firstStory.intro': 'Um começo incrível! Continue escrevendo e ampliando seu mundo com as orientações úteis do The Way of the Author.',
    'email.notifications.firstStory.details': 'História: {storyTitle}',
    'email.notifications.firstStory.ctaResources': 'Continuar em The Way of the Author',
    'email.notifications.firstStory.ctaStory': 'Abra sua história',
    // Notifications - First story published (with level 1 achievement)
    'email.notifications.firstStoryPublished.subject': 'Parabéns! Sua primeira história foi publicada e o senhor atingiu o Nível 1 de Autor!',
    'email.notifications.firstStoryPublished.title': '🎉 Sua jornada começa!',
    'email.notifications.firstStoryPublished.intro': 'Parabéns por publicar sua primeira história! Esse é um marco importante em sua jornada criativa.',
    'email.notifications.firstStoryPublished.levelAchievement': 'O senhor atingiu o Nível 1 de Autor em O Caminho do Autor! Este é apenas o começo de uma incrível aventura de contar histórias.',
    'email.notifications.firstStoryPublished.encouragement': 'Todo grande autor começou com seu primeiro trabalho publicado. Continue escrevendo, continue crescendo e deixe sua criatividade florescer. A comunidade do Universo Literário está aqui para apoiá-lo em cada etapa do caminho.',
    'email.notifications.firstStoryPublished.ctaTheWay': 'Explore o Caminho do Autor',
    'email.notifications.firstStoryPublished.ctaStory': 'Veja sua história publicada',
    // Notifications - First universe created
    'email.notifications.firstUniverse.subject': 'Parabéns pelo seu primeiro universo!',
    'email.notifications.firstUniverse.title': 'Parabéns por criar seu primeiro universo!',
    'email.notifications.firstUniverse.intro': 'Sua jornada de construção de mundos começa. Aqui estão alguns recursos para ajudá-lo a dar os próximos passos.',
    'email.notifications.firstUniverse.details': 'Universo: {universeName}',
    'email.notifications.firstUniverse.ctaResources': 'Explore o Caminho do Autor',
    'email.notifications.firstUniverse.ctaUniverse': 'Abra seu universo',
    // Notifications - First chapter published for a story
    'email.notifications.firstChapterPublished.subject': 'Seu primeiro capítulo foi publicado!',
    'email.notifications.firstChapterPublished.title': 'O primeiro capítulo de sua história foi publicado!',
    'email.notifications.firstChapterPublished.intro': 'Compartilhe seu trabalho, obtenha feedback e mantenha o ritmo.',
    'email.notifications.firstChapterPublished.details': 'História: {storyTitle} - Capítulo: {chapterTitle}',
    'email.notifications.firstChapterPublished.ctaChapter': 'Abrir capítulo',
    'email.notifications.firstChapterPublished.ctaStory': 'Ver história',
    // Notifications - Story finished
    'email.notifications.storyFinished.subject': 'Parabéns por terminar sua história!',
    'email.notifications.storyFinished.title': 'O senhor conseguiu - sua história está concluída!',
    'email.notifications.storyFinished.intro': 'Comemore esse marco! Considere a possibilidade de publicar, compartilhar ou enviar sua história para alcançar mais leitores.',
    'email.notifications.storyFinished.details': 'História: {storyTitle}',
    'email.notifications.storyFinished.cta': 'Veja sua história',
    // Notifications - Fan club new subscriber
    'email.notifications.newFanSubscriber.subject': 'Novo assinante do fã-clube',
    'email.notifications.newFanSubscriber.title': 'O senhor tem um novo assinante no fã-clube!',
    'email.notifications.newFanSubscriber.details': 'Assinante: {subscriberName}',
    'email.notifications.newFanSubscriber.cta': 'Ver fã-clube',
    // Notifications - Fan club subscription ended
    'email.notifications.fanUnsubscribed.subject': 'Um membro deixou seu fã-clube',
    'email.notifications.fanUnsubscribed.title': 'Um membro deixou seu fã-clube',
    'email.notifications.fanUnsubscribed.intro': 'Gostaríamos de informá-lo sobre uma mudança recente. Considere compartilhar atualizações ou conteúdo exclusivo para aumentar o envolvimento.',
    'email.notifications.fanUnsubscribed.details': 'Ex-membro: {name}',
    'email.notifications.fanUnsubscribed.cta': 'Clube de fãs aberto',
    // Notifications - Friend request
    'email.notifications.friendRequest.subject': 'Nova solicitação de amizade',
    'email.notifications.friendRequest.title': 'Nova solicitação de amizade',
    'email.notifications.friendRequest.details': 'De: {requesterName}',
    'email.notifications.friendRequest.cta': 'Solicitação de revisão',
    // Notifications - Collaboration invitation
    'email.notifications.collabInvite.subject': 'Convite de colaboração',
    'email.notifications.collabInvite.title': 'O senhor tem um convite de colaboração',
    'email.notifications.collabInvite.details': 'Convidados: {inviterName} - Role: {role} - Alvo: {targetType} - {targetTitle}',
    'email.notifications.collabInvite.cta': 'Convite para revisão',
    // Notifications - Organization invitation
    'email.notifications.orgInvite.subject': 'Convite para participar de uma organização',
    'email.notifications.orgInvite.title': 'O senhor está convidado a participar do {orgName}',
    'email.notifications.orgInvite.details': 'Inviter: {inviterName}',
    'email.notifications.orgInvite.cta': 'Convite para revisão',
    // Notifications - Daily digest
    'email.notifications.dailyDigest.subject': 'Suas atualizações diárias',
    'email.notifications.dailyDigest.title': 'Suas atualizações diárias',
    'email.notifications.dailyDigest.intro': 'Eis o que aconteceu hoje.',
    'email.notifications.dailyDigest.cta': 'Ver todas as atualizações',
    'email.notifications.dailyDigest.empty': 'Não há atualizações hoje.',
    // Notifications - Followed author posted a new blog
    'email.notifications.followedBlogPost.subject': 'Nova publicação no blog de um autor que o senhor segue',
    'email.notifications.followedBlogPost.title': '{authorName} postou um novo blog',
    'email.notifications.followedBlogPost.details': 'Título: {postTitle}',
    'email.notifications.followedBlogPost.cta': 'Leia o post',
    // Notifications - Followed author published new work
    'email.notifications.followedNewWork.subject': 'Novo trabalho de um autor que o senhor segue',
    'email.notifications.followedNewWork.title': '{authorName} publicou um novo {workType}',
    'email.notifications.followedNewWork.details': 'Título: {title}',
    'email.notifications.followedNewWork.cta': 'Ver',
    // Story notification emails
    'email.story.newComment.subject': 'Novo comentário em "{storyTitle}"',
    'email.story.newComment.body': '{commenterName} deixou um comentário em sua história "{storyTitle}": {commentText}',
    'email.story.betaComment.subject': 'Novo feedback beta sobre "{storyTitle}"',
    'email.story.betaComment.body': '{commenterName} forneceu feedback beta sobre "{storyTitle}": {commentText}',
    'email.story.collaboratorAccepted.subject': 'Novo membro da equipe do "{storyTitle}"',
    'email.story.collaboratorAccepted.body': '{collaboratorName} aceitou seu convite para colaborar em "{storyTitle}" como {role}.',
    'email.story.milestone.subject': 'Parabéns! Marco alcançado em "{storyTitle}"',
    'email.story.milestone.body': 'Ótimas notícias! Seu capítulo "{chapterTitle}" de "{storyTitle}" chegou a {count} {milestone}. Continue com seu excelente trabalho!',
    'email.story.betaRevision.subject': 'Nova revisão beta disponível: "{chapterTitle}"',
    'email.story.betaRevision.body': '{authorName} publicou uma nova revisão beta de "{chapterTitle}" de "{storyTitle}". Seus comentários serão muito apreciados!',
    'email.story.newChapter.subject': 'Novo capítulo disponível: "{storyTitle}"',
    'email.story.newChapter.body': '{authorName} publicou um novo capítulo de "{storyTitle}": "{chapterTitle}". Boa leitura!',
    // Universe notification emails
    'email.universe.newStory.subject': 'Nova história no universo: "{storyTitle}"',
    'email.universe.newStory.body': '{authorName} adicionou uma nova história "{storyTitle}" a um universo que o senhor está acompanhando. Descubra novas aventuras!',
    'email.universe.collaboratorChange.subject': 'Atualização da colaboração do universo',
    'email.universe.collaboratorChange.body': 'Houve uma mudança na equipe de colaboração de um universo com o qual o senhor está envolvido.',
    'email.universe.update.subject': 'Universo atualizado',
    'email.universe.update.body': 'Um universo que o senhor está seguindo foi atualizado com novo conteúdo.',
    'email.universe.comment.subject': 'Novo comentário sobre o universo',
    'email.universe.comment.body': '{commenterName} comentou sobre um universo que o senhor está acompanhando: "{commentText}"',
    // Blog notification emails
    'email.blog.newPost.subject': 'Nova postagem no blog: "{postTitle}"',
    'email.blog.newPost.body': '{authorName} publicou uma nova postagem no blog "{postTitle}" em um blog que o senhor segue.',
    'email.blog.comment.subject': 'Novo comentário na postagem do blog: "{postTitle}"',
    'email.blog.comment.body': '{commenterName} comentou na postagem do blog "{postTitle}": "{commentText}"',
    'email.blog.update.subject': 'Blog atualizado',
    'email.blog.update.body': 'Um blog que o senhor está seguindo foi atualizado.',
    // General comment notification emails
    'email.comment.general.subject': 'Novo comentário em "{contentTitle}"',
    'email.comment.general.body': '{commenterName} comentou em "{contentTitle}": "{commentText}"',
    'email.comment.reply.subject': 'Responder ao seu comentário',
    'email.comment.reply.body': '{replierName} Respondeu ao seu comentário sobre "{contentTitle}": "{replyText}"',
    'email.comment.like.subject': 'Seu comentário foi apreciado',
    'email.comment.like.body': '{likerName} Gostei do seu comentário. Continue participando!',
    // Content-specific comment notification emails
    'email.comment.fanArt.subject': 'Novo comentário sobre arte de fã: "{contentTitle}"',
    'email.comment.fanArt.body': '{commenterName} comentou sobre sua arte de fã "{contentTitle}": "{commentText}"',
    'email.comment.event.subject': 'Novo comentário sobre o evento: "{contentTitle}"',
    'email.comment.event.body': '{commenterName} comentou sobre o evento "{contentTitle}": "{commentText}"',
    'email.comment.revision.subject': 'Novo comentário sobre a revisão',
    'email.comment.revision.body': '{commenterName} comentou sobre sua revisão: "{commentText}"',
    'email.comment.feedback.subject': 'Novo comentário sobre o feedback',
    'email.comment.feedback.body': '{commenterName} comentou sobre sua questão de feedback: "{commentText}"',
    // Welcome email
    'email.welcome.subject': 'Bem-vindo ao Universo Literário!'
};