export default {
    'blog.noneMsg': `Actualment no tens cap blog per al teu univers {type, select,
    organization {un blog}
    universe {un blog per al teu univers}
    user {un blog}
    other {}
  }.`,
    'blog.create': 'Crear un nou blog',
    'blog.settings': `{type, select,
    org {Pàgina del blog de l'univers}
    universe {Configuració del blog}
    user {Blog}
    other {}
  } settings`,
    'blog.description': 'Introducció al blog',
    'blog.theme': 'Tema',
    'blog.theme.info': 'By adjusting the theme, you will be able to change the look of the page. This feature is not ready at this time.',
    'blog.posts.total': `Hi ha {total, plural,
    zero {cap entrada}
    one {una entrada}
    other {# entrades}
  } en aquest blog.`,
    'blog.post.create': 'Write a new post',
    'blog.post.update': 'Editar {title}',
    'blog.post.text': 'Text de l\'entrada',
    'common.slug': 'Adreça SEO amigable',
    'blog.slug.explained': 'Create a nice-looking URL for the post. Avoid using special characters except for "-".',
    'blog.publicView': 'Vista pública',
    'blog.post.notfound': 'No s\'ha trobat l\'entrada del blog',
    'blog.lists.works': `{type, select,
    universes {Universos}
    stories {Històries}
    fanfiction {Obra de Fan Fiction}
    other {}
  }`,
    'blog.social.sameAsMain': `Els enllaços socials són els mateixos que els establerts a la {type, select,
    organization {configuració de l'organització}
    user {perfil d'usuari}
    other {}
  }`,
    'blog.social.website': 'Lloc web oficial',
    'blog.settings.universeSettings': 'Els blogs d\'univers estan integrats a les pàgines d\'univers amb la configuració bàsica presa de la configuració de l\'univers.',
    'blog.settings.organizationSettings': 'Els blogs de l\'organització estan integrats a les pàgines de l\'organització.',
    'blogs.lu': 'Blogs oficials de Literary Universe',
    'blogs.featured': 'Blogs destacats',
    'blogs.new': 'Blogs més recents',
    'blogs.title': 'Blogs de Literary Universe',
    'blogs.description': 'Llistat de blogs a la plataforma de Literary Universe.',
    'blogs.visit': 'Visita el blog',
    'blog.settingsAria': 'Categories de configuració per al blog',
    'blog.settings.blog': 'Blog',
    'blog.settings.forum': 'Fòrum',
    'blog.post.introText': 'Paràgraf d\'introducció',
    'blog.post.writtenBy': 'Escrit per {usernameDisplay}',
    'blog.post.writtenByFor': 'Escrit per {usernameDisplay} per a {publicationName}',
    'blog.posts.recent': 'Entrades recents',
    'blog.statsPage': 'Estadístiques del blog',
    'blog.view': 'View Blog',
    'blog.settings.qa': 'Q&A',
    // Q&A Settings
    'blog.qa.settings.title': 'Q&A Settings',
    'blog.qa.settings.notSupported': 'Q&A is currently only supported for user and universe blogs.',
    'blog.qa.settings.enable': 'Enable Q&A',
    'blog.qa.settings.enableQA': 'Allow readers to ask questions',
    'blog.qa.settings.enableQA.help': 'When enabled, readers can submit questions that you can answer publicly or privately.',
    'blog.qa.settings.whoCanAsk': 'Who can ask questions',
    'blog.qa.settings.askersAllowed.all': 'All registered users',
    'blog.qa.settings.askersAllowed.all.help': 'Free users get 1 question per blog lifetime. LU subscribers get 1 question per year (2 in their first year).',
    'blog.qa.settings.askersAllowed.luOnly': 'LU subscribers only',
    'blog.qa.settings.askersAllowed.luOnly.help': 'Only users with an active LU subscription can ask questions.',
    'blog.qa.settings.askersAllowed.fanClubOnly': 'Fan Club members only',
    'blog.qa.settings.askersAllowed.fanClubOnly.help': 'Only your Fan Club members can ask questions (limits defined per tier).',
    'blog.qa.settings.askersAllowed.luOrFanClub': 'LU subscribers or Fan Club members',
    'blog.qa.settings.askersAllowed.luOrFanClub.help': 'Users with either an LU subscription or Fan Club membership can ask questions.',
    'blog.qa.settings.archive': 'Archive Settings',
    'blog.qa.settings.showArchiveWhenDisabled': 'Show answered questions even when Q&A is disabled',
    'blog.qa.settings.showArchiveWhenDisabled.help': 'When disabled, readers won\'t be able to ask new questions, but they can still view previously answered questions.',
    'blog.qa.settings.saved': 'Q&A settings saved successfully',
    // Q&A Admin
    'blog.qa.admin.title': 'Manage Q&A',
    'blog.qa.admin.tab.pending': 'Pending',
    'blog.qa.admin.tab.answered': 'Answered',
    'blog.qa.admin.tab.ignored': 'Ignored',
    'blog.qa.admin.empty.pending': 'No pending questions.',
    'blog.qa.admin.empty.answered': 'No answered questions yet.',
    'blog.qa.admin.empty.ignored': 'No ignored questions.',
    'blog.qa.admin.answerQuestion': 'Answer Question',
    'blog.qa.admin.visibility.public': 'Public (everyone can see)',
    'blog.qa.admin.visibility.private': 'Private (only asker can see)',
    'blog.qa.admin.submitAnswer': 'Submit Answer',
    'blog.qa.admin.answer': 'Answer',
    'blog.qa.admin.ignore': 'Ignore',
    'blog.qa.admin.confirmIgnore': 'Are you sure you want to ignore this question?',
    'blog.qa.admin.pin': 'Pin',
    'blog.qa.admin.unpin': 'Unpin',
    'blog.qa.admin.yourAnswer': 'Your Answer',
    // Q&A Public
    'blog.qa.title': 'Questions',
    'blog.qa.askQuestion': 'Ask a Question',
    'blog.qa.submitQuestion': 'Submit Question',
    'blog.qa.tab.allAnswered': 'All Answered',
    'blog.qa.tab.myQuestions': 'My Questions',
    'blog.qa.empty.all': 'No answered questions yet.',
    'blog.qa.empty.mine': 'You have not asked any questions here yet.',
    'blog.qa.status.pending': 'Pending',
    'blog.qa.status.ignored': 'Ignored',
    'blog.qa.status.private': 'Private Answer',
    'blog.qa.status.public': 'Public Answer',
    'blog.qa.role.reader': 'Reader',
    'blog.qa.role.author': 'Author',
    'blog.qa.pinned': 'Pinned',
    'blog.qa.answeredAgo': 'Answered {time}',
    'blog.qa.loadMore': 'Load more',
    'blog.qa.warn.luRequired': 'Only LU subscribers can ask questions here.',
    'blog.qa.warn.fanClubRequired': 'Only Fan Club members can ask questions here.',
    'blog.qa.warn.luOrFanRequired': 'Only LU subscribers or Fan Club members can ask questions here.'
};