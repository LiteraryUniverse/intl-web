export default {
    'blog.noneMsg': `Ahora mismo no tienes {type, select,
    organization {ningún blog}
    universe {un blog para tu universo}
    user {un blog}
    other {}
  }.`,
    'blog.create': 'Crear un blog nuevo',
    'blog.settings': `{type, select,
    org {Blog}
    universe {Página del universo}
    user {Blog}
    other {}
  } configuraciones`,
    'blog.description': 'Introducción del blog',
    'blog.theme': 'Tema',
    'blog.theme.info': 'Ajustando el tema, podrás cambiar el aspecto de la página. Esta función no está lista en este momento.',
    'blog.posts.total': `{total, plural,
    zero {No hay publicaciones}
    one {Hay una publicación}
    other {Hay # publicaciones}
  } en este blog.`,
    'blog.post.create': 'Escribir una nueva publicación',
    'blog.post.update': 'Editando {title}',
    'blog.post.text': 'Publicar texto',
    'common.slug': 'Dirección SEO friendly',
    'blog.slug.explained': 'Cree una URL atractiva para la entrada. Evite utilizar caracteres especiales excepto "-".',
    'blog.publicView': 'Vista pública',
    'blog.post.notfound': 'No se encontró la publicación',
    'blog.lists.works': `{type, select,
    universes {Universos}
    stories {Historias}
    fanfiction {Obra de Fan Fiction}
    other {}
  }`,
    'blog.social.sameAsMain': `Tus enlaces a redes sociales son tal y como se determina en {type, select,
    organization {configuración de organización}
    user {perfil de usuario}
    other {}
  }`,
    'blog.social.website': 'Sitio web oficial',
    'blog.settings.universeSettings': 'Los blogs del universo se integran en páginas del universo y toman su configuración de la del universo.',
    'blog.settings.organizationSettings': 'Los blogs de la organización se integran en las páginas de la organización.',
    'blogs.lu': 'Blogs oficiales de Literary Universe',
    'blogs.featured': 'Blogs destacados',
    'blogs.new': 'Blogs más recientes',
    'blogs.title': 'Blogs de Literary Universe',
    'blogs.description': 'Lista de blogs en la plataforma de Literary Universe.',
    'blogs.visit': 'Visitar blog',
    'blog.settingsAria': 'Configuración de las categorías del blog',
    'blog.settings.blog': 'Blog',
    'blog.settings.forum': 'Foro',
    'blog.post.introText': 'Introducción',
    'blog.post.writtenBy': 'Escrito por {usernameDisplay}',
    'blog.post.writtenByFor': 'Escrito por {usernameDisplay} para {publicationName}',
    'blog.posts.recent': 'Publicaciones recientes',
    'blog.statsPage': 'Estadísticas del blog',
    'blog.view': 'Ver blog',
    'blog.settings.qa': 'PREGUNTAS Y RESPUESTAS',
    // Q&A Settings
    'blog.qa.settings.title': 'Preguntas y respuestas',
    'blog.qa.settings.notSupported': 'Actualmente, las preguntas y respuestas sólo son compatibles con los blogs de usuarios y universos.',
    'blog.qa.settings.enable': 'Habilitar las preguntas y respuestas',
    'blog.qa.settings.enableQA': 'Permita que los lectores hagan preguntas',
    'blog.qa.settings.enableQA.help': 'Cuando está activada, los lectores pueden enviar preguntas que usted puede responder de forma pública o privada.',
    'blog.qa.settings.whoCanAsk': 'Quién puede hacer preguntas',
    'blog.qa.settings.askersAllowed.all': 'Todos los usuarios registrados',
    'blog.qa.settings.askersAllowed.all.help': 'Los usuarios gratuitos obtienen 1 pregunta por blog de por vida. Los suscriptores de LU obtienen 1 pregunta al año (2 en su primer año).',
    'blog.qa.settings.askersAllowed.luOnly': 'Sólo abonados LU',
    'blog.qa.settings.askersAllowed.luOnly.help': 'Sólo los usuarios con una suscripción LU activa pueden hacer preguntas.',
    'blog.qa.settings.askersAllowed.fanClubOnly': 'Sólo para miembros del Club de Fans',
    'blog.qa.settings.askersAllowed.fanClubOnly.help': 'Sólo los miembros de su Club de Fans pueden hacer preguntas (límites definidos por nivel).',
    'blog.qa.settings.askersAllowed.luOrFanClub': 'Suscriptores de LU o miembros del club de fans',
    'blog.qa.settings.askersAllowed.luOrFanClub.help': 'Los usuarios suscritos a LU o miembros del Club de Fans pueden hacer preguntas.',
    'blog.qa.settings.archive': 'Configuración del archivo',
    'blog.qa.settings.showArchiveWhenDisabled': 'Mostrar las preguntas contestadas incluso cuando las preguntas y respuestas están desactivadas',
    'blog.qa.settings.showArchiveWhenDisabled.help': 'Si se desactiva, los lectores no podrán hacer nuevas preguntas, pero podrán seguir viendo las preguntas respondidas anteriormente.',
    'blog.qa.settings.saved': 'Ajustes de preguntas y respuestas guardados correctamente',
    // Q&A Admin
    'blog.qa.admin.title': 'Gestionar las preguntas y respuestas',
    'blog.qa.admin.tab.pending': 'Pendiente',
    'blog.qa.admin.tab.answered': 'Respuesta',
    'blog.qa.admin.tab.ignored': 'Ignorado',
    'blog.qa.admin.empty.pending': 'No hay preguntas pendientes.',
    'blog.qa.admin.empty.answered': 'Aún no hay preguntas contestadas.',
    'blog.qa.admin.empty.ignored': 'No hay preguntas ignoradas.',
    'blog.qa.admin.answerQuestion': 'Respuesta Pregunta',
    'blog.qa.admin.visibility.public': 'Público (todo el mundo puede verlo)',
    'blog.qa.admin.visibility.private': 'Privado (sólo el que pregunta puede ver)',
    'blog.qa.admin.submitAnswer': 'Enviar respuesta',
    'blog.qa.admin.answer': 'Respuesta',
    'blog.qa.admin.ignore': 'Ignore',
    'blog.qa.admin.confirmIgnore': '¿Está seguro de que quiere ignorar esta pregunta?',
    'blog.qa.admin.pin': 'Pin',
    'blog.qa.admin.unpin': 'Desenganche',
    'blog.qa.admin.yourAnswer': 'Su respuesta',
    // Q&A Public
    'blog.qa.title': 'Preguntas',
    'blog.qa.askQuestion': 'Formule una pregunta',
    'blog.qa.submitQuestion': 'Enviar pregunta',
    'blog.qa.success.submit': 'Gracias. Su pregunta ha sido enviada y será respondida en breve.',
    'blog.qa.error.submit': 'No se ha podido enviar la pregunta. Por favor, inténtelo de nuevo.',
    'blog.qa.tab.allAnswered': 'Todas las respuestas',
    'blog.qa.tab.myQuestions': 'Mis preguntas',
    'blog.qa.empty.all': 'Aún no hay preguntas contestadas.',
    'blog.qa.empty.mine': 'Aún no ha formulado ninguna pregunta aquí.',
    'blog.qa.status.pending': 'Pendiente',
    'blog.qa.status.ignored': 'Ignorado',
    'blog.qa.status.private': 'Respuesta privada',
    'blog.qa.status.public': 'Respuesta pública',
    'blog.qa.role.reader': 'Lector',
    'blog.qa.role.author': 'Autor',
    'blog.qa.pinned': 'Pinned',
    'blog.qa.answeredAgo': 'Respuesta {time}',
    'blog.qa.loadMore': 'Cargar más',
    'blog.qa.warn.luRequired': 'Sólo los suscriptores de LU pueden hacer preguntas aquí.',
    'blog.qa.warn.fanClubRequired': 'Sólo los miembros del Club de Fans pueden hacer preguntas aquí.',
    'blog.qa.warn.luOrFanRequired': 'Sólo los suscriptores de LU o los miembros del Club de Fans pueden hacer preguntas aquí.'
};