/**
 * @authors Jan Dvorak
 */
export default {
    'email.enrollAccount.subject': 'Invitación a Literary Universe para {username}',
    'email.enrollAccount.message': `Hola {username}\n\n
    ¡Nos gustaría invitarte a Literary Universe! ¡Hemos creado una cuenta personal especial para ti en la que puedes acceder a todas las funciones de Literary Universe! ¡Únete a nosotros para crear la generación futura de herramientas de escritura y lectura creativas!
    Para activar tu cuenta, haz clic en en siguiente enlace: \n\n{url}`,
    'email.resetPassword.subject': 'Restablecer contraseña para Literary Universe',
    'email.resetPassword.message': `Hola  {username}!\n\n Hemos recibido una solicitud para restablecer la contraseña para tu cuenta.
        Por favor, continúa al siguiente enlace para restablecer la contraseña:\n\n{url}`,
    'email.verifyEmail.subject': 'Verificación de e-mail para Literary Universe',
    'email.verifyEmail.message': '¡Hola {username}!\n\n Por favor, verifica tu dirección de correo electrónico haciendo clic en el siguiente enlace:\n\n{url}',
    // New html email keys
    'email.salutation': 'Hola {username},',
    'email.welcome': '¡Bienvenido a Literary Universe!',
    'email.signature': 'Atentamente,<br />el equipo de Literary Universe',
    // Enrollment
    'email.enrollAccount.welcome': 'Bienvenido a bordo',
    'email.enrollAccount.messageHtml': '¡Nos gustaría invitarle a Universo Literario! Nos hemos adelantado y le hemos preparado una cuenta personal desde la que podrá acceder a todas las funciones del Universo Literario. ¡Únase a nosotros para crear la próxima generación de escritura y lectura creativas!',
    'email.enrollAccount.button': 'Accede a tu cuenta',
    'email.enrollAccount.signature': 'Le esperamos, equipo de<br />Universo Literario',
    // Reset password
    'email.resetPassword.messageHtml': 'Hemos recibido una solicitud para restablecer la contraseña de su cuenta. Por favor, haga clic en el botón de abajo para continuar con el proceso. Si no ha realizado esta solicitud, puede ignorar este correo electrónico, pero puede ser un buen momento para revisar su configuración de seguridad.',
    'email.resetPassword.button': 'Restablecer contraseña',
    // E-mail verification
    'email.verifyEmail.messageHtml': '¡Nos alegramos de tenerle a bordo! Por favor, haga clic en el botón de abajo para verificar esta dirección de correo electrónico.',
    'email.verifyEmail.button': 'Verificar dirección de e-mail',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Tu cuenta ha subido de categoría',
    'email.adminUpgrade.message': `Hemos mejorado tu cuenta a {plan, select,
    explorer {explorador}
    adventurer {aventurero}
    storyteller {cuentacuentos}
    other {}
  } para los próximos {days} días.\n\nQue lo disfrutes,\nequipo de Literary Universe`,
    'email.adminUpgrade.messageHtml': `Hemos mejorado tu cuenta a {plan, select,
    explorer {explorador}
    adventurer {aventurero}
    storyteller {cuentacuentos}
    other {}
  } para los próximos {days} días. ¡Que lo disfrutes!`,
    'email.verification': 'Verificación de e-mail',
    'email.verifying': 'Verificando tu e-mail. Esto solo llevará un momento...',
    'email.verified': '¡Buenas noticias! ¡Tu correo electrónico se ha verificado!',
    // The Way (Author Level Up)
    'theWay.levelUp.emailSubject': '¡Enhorabuena! ¡Ha alcanzado el nivel de autor {level} en Universo Literario!',
    'theWay.levelUp.emailTitle': '¡Enhorabuena! ¡Ha alcanzado el nivel de autor {level}!',
    'theWay.levelUp.emailIntro': '¡Su dedicación al oficio de escribir ha sido recompensada!',
    'theWay.levelUp.emailGenre': 'Ha alcanzado el nivel {level} en el género {genre} .',
    'theWay.levelUp.emailContinue': 'Continúe su viaje y desbloquee más logros en El camino del autor.',
    'theWay.levelUp.viewDashboard': 'Ver su panel de control',
    // Notifications - General content comment
    'email.notifications.contentComment.subject': 'Nuevo comentario sobre su contenido',
    'email.notifications.contentComment.title': 'Nuevo comentario en su {contentType}',
    'email.notifications.contentComment.details': 'Título: {contentTitle} - De: {commenterName}',
    'email.notifications.contentComment.cta': 'Ver comentario',
    // Notifications - Beta reader comment
    'email.notifications.betaComment.subject': 'Nuevos comentarios de los lectores beta',
    'email.notifications.betaComment.title': 'Nuevos comentarios de los lectores beta',
    'email.notifications.betaComment.details': 'Historia: {storyTitle}{chapter} - De: {commenterName}',
    'email.notifications.betaComment.cta': 'Ver comentarios',
    // Notifications - New message
    'email.notifications.newMessage.subject': 'Tiene un nuevo mensaje',
    'email.notifications.newMessage.title': 'Tiene un nuevo mensaje',
    'email.notifications.newMessage.details': 'De: {senderName}',
    'email.notifications.newMessage.cta': 'Ver mensaje',
    // Notifications - Chapter published
    'email.notifications.chapterPublished.subject': 'Nuevo capítulo publicado',
    'email.notifications.chapterPublished.title': 'Nuevo capítulo publicado',
    'email.notifications.chapterPublished.details': 'Historia: {storyTitle} - Capítulo: {chapterTitle}{suffix}',
    'email.notifications.chapterPublished.cta': 'Abrir capítulo',
    // Notifications - First story created
    'email.notifications.firstStory.subject': '¡Su primera historia está aquí!',
    'email.notifications.firstStory.title': '¡Su primera historia está en directo!',
    'email.notifications.firstStory.intro': '¡Un comienzo asombroso! Siga escribiendo y haciendo crecer su mundo con las útiles orientaciones de El camino del autor.',
    'email.notifications.firstStory.details': 'Historia: {storyTitle}',
    'email.notifications.firstStory.ctaResources': 'Continuar en El camino del autor',
    'email.notifications.firstStory.ctaStory': 'Abra su historia',
    // Notifications - First universe created
    'email.notifications.firstUniverse.subject': '¡Enhorabuena por su primer universo!',
    'email.notifications.firstUniverse.title': '¡Enhorabuena por crear su primer universo!',
    'email.notifications.firstUniverse.intro': 'Comienza su viaje de construcción del mundo. Aquí tiene algunos recursos que le ayudarán a dar los siguientes pasos.',
    'email.notifications.firstUniverse.details': 'Universo: {universeName}',
    'email.notifications.firstUniverse.ctaResources': 'Explorar el camino del autor',
    'email.notifications.firstUniverse.ctaUniverse': 'Abra su universo',
    // Notifications - First chapter published for a story
    'email.notifications.firstChapterPublished.subject': '¡Su primer capítulo está publicado!',
    'email.notifications.firstChapterPublished.title': '¡El primer capítulo de su historia está publicado!',
    'email.notifications.firstChapterPublished.intro': 'Comparta su trabajo, recabe opiniones y mantenga el impulso.',
    'email.notifications.firstChapterPublished.details': 'Historia: {storyTitle} - Capítulo: {chapterTitle}',
    'email.notifications.firstChapterPublished.ctaChapter': 'Abrir capítulo',
    'email.notifications.firstChapterPublished.ctaStory': 'Ver artículo',
    // Notifications - Story finished
    'email.notifications.storyFinished.subject': '¡Enhorabuena por terminar su historia!',
    'email.notifications.storyFinished.title': 'Lo ha conseguido: ¡su historia está terminada!',
    'email.notifications.storyFinished.intro': '¡Celebre este hito! Considere la posibilidad de publicar, compartir o enviar su historia para llegar a más lectores.',
    'email.notifications.storyFinished.details': 'Historia: {storyTitle}',
    'email.notifications.storyFinished.cta': 'Ver su historia',
    // Notifications - Fan club new subscriber
    'email.notifications.newFanSubscriber.subject': 'Nuevo suscriptor del club de fans',
    'email.notifications.newFanSubscriber.title': '¡Tiene un nuevo suscriptor del club de fans!',
    'email.notifications.newFanSubscriber.details': 'Suscriptor: {subscriberName}',
    'email.notifications.newFanSubscriber.cta': 'Ver club de fans',
    // Notifications - Fan club subscription ended
    'email.notifications.fanUnsubscribed.subject': 'Un miembro abandonó su club de fans',
    'email.notifications.fanUnsubscribed.title': 'Un miembro abandonó su club de fans',
    'email.notifications.fanUnsubscribed.intro': 'Queríamos informarle de un cambio reciente. Considere la posibilidad de compartir actualizaciones o contenidos exclusivos para impulsar la participación.',
    'email.notifications.fanUnsubscribed.details': 'Antiguo miembro: {name}',
    'email.notifications.fanUnsubscribed.cta': 'Club de fans abierto',
    // Notifications - Friend request
    'email.notifications.friendRequest.subject': 'Nueva solicitud de amistad',
    'email.notifications.friendRequest.title': 'Nueva solicitud de amistad',
    'email.notifications.friendRequest.details': 'De: {requesterName}',
    'email.notifications.friendRequest.cta': 'Solicitud de revisión',
    // Notifications - Collaboration invitation
    'email.notifications.collabInvite.subject': 'Invitación a colaborar',
    'email.notifications.collabInvite.title': 'Tiene una invitación de colaboración',
    'email.notifications.collabInvite.details': 'Invitador: {inviterName} - Papel: {role} - Objetivo: {targetType} - {targetTitle}',
    'email.notifications.collabInvite.cta': 'Invitación a revisión',
    // Notifications - Organization invitation
    'email.notifications.orgInvite.subject': 'Invitación a unirse a una organización',
    'email.notifications.orgInvite.title': 'Le invitamos a unirse a {orgName}',
    'email.notifications.orgInvite.details': 'Invitador: {inviterName}',
    'email.notifications.orgInvite.cta': 'Invitación a revisión',
    // Notifications - Daily digest
    'email.notifications.dailyDigest.subject': 'Sus actualizaciones diarias',
    'email.notifications.dailyDigest.title': 'Sus actualizaciones diarias',
    'email.notifications.dailyDigest.intro': 'Esto es lo que ha ocurrido hoy.',
    'email.notifications.dailyDigest.cta': 'Ver todas las actualizaciones',
    'email.notifications.dailyDigest.empty': 'Hoy no hay novedades.',
    // Notifications - Followed author posted a new blog
    'email.notifications.followedBlogPost.subject': 'Nueva entrada en el blog de un autor al que sigue',
    'email.notifications.followedBlogPost.title': '{authorName} ha publicado un nuevo blog',
    'email.notifications.followedBlogPost.details': 'Título: {postTitle}',
    'email.notifications.followedBlogPost.cta': 'Leer el post',
    // Notifications - Followed author published new work
    'email.notifications.followedNewWork.subject': 'Nueva obra de un autor al que sigue',
    'email.notifications.followedNewWork.title': '{authorName} publicó un nuevo {workType}',
    'email.notifications.followedNewWork.details': 'Título: {title}',
    'email.notifications.followedNewWork.cta': 'Ver'
};