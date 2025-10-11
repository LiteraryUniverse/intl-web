export default {
    'blog.noneMsg': `Vous n'avez actuellement {type, select,
    organization {aucun blog}
    universe {un blog pour votre univers}
    user {un blog}
    other {}
  }.`,
    'blog.create': 'Créer un nouveau blog',
    'blog.settings': `Paramètres {type, select,
    org {du blog}
    universe {de la page univers}
    user {du blog}
    other {}
  }`,
    'blog.description': 'Introduction au blog',
    'blog.theme': 'Thème',
    'blog.theme.info': 'En ajustant le thème, vous pourrez modifier l\'aspect de la page. Cette fonctionnalité n\'est pas encore prête.',
    'blog.posts.total': `Il y a {total, plural,
    zero {pas de post}
    one {un post}
    other {# posts}
  } dans ce blog.`,
    'blog.post.create': 'Write a new post',
    'blog.post.update': 'Modification de {title}',
    'blog.post.text': 'Poster le texte',
    'common.slug': 'Adresse conviviale pour le SEO',
    'blog.slug.explained': 'Créez une URL attrayante pour le message. Évitez d\'utiliser des caractères spéciaux, à l\'exception de "-".',
    'blog.publicView': 'Vue publique',
    'blog.post.notfound': 'Le post du blog n\'a pas été trouvé',
    'blog.lists.works': `{type, select,
    universes {Univers}
    stories {Histoires}
    fanfiction {Œuvre de fanfiction}
    other {}
  }`,
    'blog.social.sameAsMain': `Les liens sociaux sont les mêmes que ceux définis dans {type, select,
    organization {les paramètres de l'organisation}
    user {le profil d'utilisateur}
    other {}
  }`,
    'blog.social.website': 'Site officiel',
    'blog.settings.universeSettings': 'Les blogs de l\'univers sont intégrés aux pages de l\'univers et leurs paramètres de base proviennent des paramètres de l\'univers.',
    'blog.settings.organizationSettings': 'Les blogs de l\'organisation sont intégrés dans les pages de l\'organisation.',
    'blogs.lu': 'Blogs officiels de l\'Univers Littéraire',
    'blogs.featured': 'Blogs en vedette',
    'blogs.new': 'Blogs les plus récents',
    'blogs.title': 'Blogs de l\'Univers Littéraire',
    'blogs.description': 'Liste des blogs de la plateforme de l\'Univers Littéraire.',
    'blogs.visit': 'Visitez le blog',
    'blog.settingsAria': 'Paramètres des catégories pour le blog',
    'blog.settings.blog': 'Blog',
    'blog.settings.forum': 'Forum',
    'blog.post.introText': 'Paragraphe d\'introduction',
    'blog.post.writtenBy': 'Écrit par {usernameDisplay}',
    'blog.post.writtenByFor': 'Écrit par {usernameDisplay} pour {publicationName}',
    'blog.posts.recent': 'Publications récentes',
    'blog.statsPage': 'Statistiques du blog',
    'blog.view': 'Voir le blog',
    'blog.settings.qa': 'Q&R',
    // Q&A Settings
    'blog.qa.settings.title': 'Q&R Paramètres',
    'blog.qa.settings.notSupported': 'Les questions-réponses ne sont actuellement prises en charge que pour les blogs d\'utilisateurs et d\'univers.',
    'blog.qa.settings.enable': 'Activer les questions-réponses',
    'blog.qa.settings.enableQA': 'Permettre aux lecteurs de poser des questions',
    'blog.qa.settings.enableQA.help': 'Lorsque cette option est activée, les lecteurs peuvent soumettre des questions auxquelles vous pouvez répondre publiquement ou en privé.',
    'blog.qa.settings.whoCanAsk': 'Qui peut poser des questions ?',
    'blog.qa.settings.askersAllowed.all': 'Tous les utilisateurs enregistrés',
    'blog.qa.settings.askersAllowed.all.help': 'Les utilisateurs gratuits reçoivent 1 question par blog à vie. Les abonnés LU reçoivent 1 question par an (2 la première année).',
    'blog.qa.settings.askersAllowed.luOnly': 'Abonnés LU uniquement',
    'blog.qa.settings.askersAllowed.luOnly.help': 'Seuls les utilisateurs ayant un abonnement LU actif peuvent poser des questions.',
    'blog.qa.settings.askersAllowed.fanClubOnly': 'Membres du Fan Club uniquement',
    'blog.qa.settings.askersAllowed.fanClubOnly.help': 'Seuls les membres de votre Fan Club peuvent poser des questions (limites définies par niveau).',
    'blog.qa.settings.askersAllowed.luOrFanClub': 'Abonnés LU ou membres du Fan Club',
    'blog.qa.settings.askersAllowed.luOrFanClub.help': 'Les utilisateurs disposant d\'un abonnement LU ou d\'une adhésion au Fan Club peuvent poser des questions.',
    'blog.qa.settings.archive': 'Paramètres de l\'archive',
    'blog.qa.settings.showArchiveWhenDisabled': 'Afficher les questions répondues même si la fonction Q&A est désactivée',
    'blog.qa.settings.showArchiveWhenDisabled.help': 'Si cette option est désactivée, les lecteurs ne pourront plus poser de nouvelles questions, mais ils pourront toujours consulter les questions auxquelles ils ont déjà répondu.',
    'blog.qa.settings.saved': 'Les paramètres des questions et réponses ont été sauvegardés avec succès',
    // Q&A Admin
    'blog.qa.admin.title': 'Gérer les questions-réponses',
    'blog.qa.admin.tab.pending': 'En attente',
    'blog.qa.admin.tab.answered': 'Répondu',
    'blog.qa.admin.tab.ignored': 'Ignoré',
    'blog.qa.admin.empty.pending': 'Pas de questions en suspens.',
    'blog.qa.admin.empty.answered': 'Aucune question n\'a encore reçu de réponse.',
    'blog.qa.admin.empty.ignored': 'Aucune question ignorée.',
    'blog.qa.admin.answerQuestion': 'Réponse Question',
    'blog.qa.admin.visibility.public': 'Public (tout le monde peut voir)',
    'blog.qa.admin.visibility.private': 'Privé (seul le demandeur peut le voir)',
    'blog.qa.admin.submitAnswer': 'Soumettre la réponse',
    'blog.qa.admin.answer': 'Réponse',
    'blog.qa.admin.ignore': 'Ignorer',
    'blog.qa.admin.confirmIgnore': 'Êtes-vous sûr de vouloir ignorer cette question ?',
    'blog.qa.admin.pin': 'Épingle',
    'blog.qa.admin.unpin': 'Épingler',
    'blog.qa.admin.yourAnswer': 'Votre réponse',
    // Q&A Public
    'blog.qa.title': 'Questions',
    'blog.qa.askQuestion': 'Posez une question',
    'blog.qa.submitQuestion': 'Soumettre une question',
    'blog.qa.tab.allAnswered': 'Toutes les réponses',
    'blog.qa.tab.myQuestions': 'Mes questions',
    'blog.qa.empty.all': 'Aucune question n\'a encore reçu de réponse.',
    'blog.qa.empty.mine': 'Vous n\'avez pas encore posé de questions ici.',
    'blog.qa.status.pending': 'En attente',
    'blog.qa.status.ignored': 'Ignoré',
    'blog.qa.status.private': 'Réponse privée',
    'blog.qa.status.public': 'Réponse publique',
    'blog.qa.role.reader': 'Lecteur',
    'blog.qa.role.author': 'Auteur',
    'blog.qa.pinned': 'Épinglé',
    'blog.qa.answeredAgo': 'Réponse : {time}',
    'blog.qa.loadMore': 'En savoir plus',
    'blog.qa.warn.luRequired': 'Seuls les abonnés LU peuvent poser des questions ici.',
    'blog.qa.warn.fanClubRequired': 'Seuls les membres du Fan Club peuvent poser des questions ici.',
    'blog.qa.warn.luOrFanRequired': 'Seuls les abonnés LU ou les membres du Fan Club peuvent poser des questions ici.'
};