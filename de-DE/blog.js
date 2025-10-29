export default {
    'blog.noneMsg': `Du hast derzeit kein {type, select,
    organization {Blog}
    universe {Blog für dein Universum}
    user {Blog}
    other {Blog}
  }.`,
    'blog.create': 'Neuen Blog anlegen',
    'blog.settings': `{type, select,
    org {Blog}
    universe {Universum Seite}
    user {Blog}
    other {}
  } Einstellungen`,
    'blog.description': 'Blog-Einführung',
    'blog.theme': 'Thema',
    'blog.theme.info': 'Indem Sie das Thema anpassen, können Sie das Aussehen der Seite ändern. Diese Funktion ist derzeit noch nicht verfügbar.',
    'blog.posts.total': `Da {total, plural,
    one {ist ein Beitrag}
    other {sind # Beiträge}
  } in diesem Blog.`,
    'blog.post.create': 'Write a new post',
    'blog.post.update': 'Bearbeitung von {title}',
    'blog.post.text': 'Beitragstext',
    'common.slug': 'SEO-freundliche Adresse',
    'blog.slug.explained': 'Erstellen Sie eine ansprechende URL für den Beitrag. Vermeiden Sie die Verwendung von Sonderzeichen außer "-".',
    'blog.publicView': 'Öffentliche Ansicht',
    'blog.post.notfound': 'Blogbeitrag wurde nicht gefunden',
    'blog.lists.works': `{type, select,
    universes {Universen}
    stories {Geschichten}
    fanfiction {Fan Fiction Arbeit}
    other {}
  }`,
    'blog.social.sameAsMain': `Soziale Links sind die gleichen wie in {type, select,
    organization {Organisationseinstellungen}
    user {Benutzerprofil}
    other {}
  }`,
    'blog.social.website': 'Offizielle Website',
    'blog.settings.universeSettings': 'Universe-Blogs sind in Universe-Seiten integriert, deren Grundeinstellungen aus den Universe-Einstellungen übernommen werden.',
    'blog.settings.organizationSettings': 'Organisationsblogs sind in Organisationsseiten integriert.',
    'blogs.lu': 'Offizielle Literary Universe-Blogs',
    'blogs.featured': 'Ausgewählte Blogs',
    'blogs.new': 'Neueste Blogs',
    'blogs.title': 'Blogs des Literary Universe',
    'blogs.description': 'Auflistung von Blogs auf der Plattform Literary Universe.',
    'blogs.visit': 'Blog besuchen',
    'blog.settingsAria': 'Kategorien für den Blog einstellen',
    'blog.settings.blog': 'Blog',
    'blog.settings.forum': 'Forum',
    'blog.post.introText': 'Einleitung Absatz',
    'blog.post.writtenBy': 'Geschrieben von {usernameDisplay}',
    'blog.post.writtenByFor': 'Geschrieben von {usernameDisplay} für {publicationName}',
    'blog.posts.recent': 'Aktuelle Beiträge',
    'blog.statsPage': 'Blog-Statistiken',
    'blog.view': 'Blog ansehen',
    'blog.settings.qa': 'FRAGEN UND ANTWORTEN',
    // Q&A Settings
    'blog.qa.settings.title': 'Q&A Einstellungen',
    'blog.qa.settings.notSupported': 'Q&A wird derzeit nur für Benutzer- und Universum-Blogs unterstützt.',
    'blog.qa.settings.enable': 'Q&A aktivieren',
    'blog.qa.settings.enableQA': 'Erlauben Sie Lesern, Fragen zu stellen',
    'blog.qa.settings.enableQA.help': 'Wenn diese Funktion aktiviert ist, können Leser Fragen stellen, die Sie öffentlich oder privat beantworten können.',
    'blog.qa.settings.whoCanAsk': 'Wer kann Fragen stellen',
    'blog.qa.settings.askersAllowed.all': 'Alle registrierten Benutzer',
    'blog.qa.settings.askersAllowed.all.help': 'Kostenlose Benutzer erhalten 1 Frage pro Blogleben. LU-Abonnenten erhalten 1 Frage pro Jahr (2 im ersten Jahr).',
    'blog.qa.settings.askersAllowed.luOnly': 'Nur für LU-Abonnenten',
    'blog.qa.settings.askersAllowed.luOnly.help': 'Nur Benutzer mit einem aktiven LU-Abonnement können Fragen stellen.',
    'blog.qa.settings.askersAllowed.fanClubOnly': 'Nur für Fanclub-Mitglieder',
    'blog.qa.settings.askersAllowed.fanClubOnly.help': 'Nur Ihre Fanclub-Mitglieder können Fragen stellen (je nach Stufe sind die Grenzen festgelegt).',
    'blog.qa.settings.askersAllowed.luOrFanClub': 'LU-Abonnenten oder Fanclub-Mitglieder',
    'blog.qa.settings.askersAllowed.luOrFanClub.help': 'Benutzer, die entweder ein LU-Abonnement oder eine Fanclub-Mitgliedschaft haben, können Fragen stellen.',
    'blog.qa.settings.archive': 'Archiv-Einstellungen',
    'blog.qa.settings.showArchiveWhenDisabled': 'Beantwortete Fragen anzeigen, auch wenn Q&A deaktiviert ist',
    'blog.qa.settings.showArchiveWhenDisabled.help': 'Wenn diese Funktion deaktiviert ist, können die Leser keine neuen Fragen mehr stellen, aber sie können immer noch bereits beantwortete Fragen einsehen.',
    'blog.qa.settings.saved': 'Q&A-Einstellungen erfolgreich gespeichert',
    // Q&A Admin
    'blog.qa.admin.title': 'Q&A verwalten',
    'blog.qa.admin.tab.pending': 'Anhängig',
    'blog.qa.admin.tab.answered': 'Beantwortet',
    'blog.qa.admin.tab.ignored': 'Ignoriert',
    'blog.qa.admin.empty.pending': 'Keine offenen Fragen.',
    'blog.qa.admin.empty.answered': 'Noch keine Fragen beantwortet.',
    'blog.qa.admin.empty.ignored': 'Keine ignorierten Fragen.',
    'blog.qa.admin.answerQuestion': 'Antwort Frage',
    'blog.qa.admin.visibility.public': 'Öffentlich (jeder kann es sehen)',
    'blog.qa.admin.visibility.private': 'Privat (nur der Fragesteller kann es sehen)',
    'blog.qa.admin.submitAnswer': 'Antwort abschicken',
    'blog.qa.admin.answer': 'Antwort',
    'blog.qa.admin.ignore': 'Ignorieren Sie',
    'blog.qa.admin.confirmIgnore': 'Sind Sie sicher, dass Sie diese Frage ignorieren wollen?',
    'blog.qa.admin.pin': 'Stift',
    'blog.qa.admin.unpin': 'Unpin',
    'blog.qa.admin.yourAnswer': 'Ihre Antwort',
    // Q&A Public
    'blog.qa.title': 'Fragen',
    'blog.qa.askQuestion': 'Eine Frage stellen',
    'blog.qa.submitQuestion': 'Frage einreichen',
    'blog.qa.success.submit': 'Vielen Dank! Ihre Frage wurde eingereicht und wird in Kürze beantwortet werden.',
    'blog.qa.error.submit': 'Frage konnte nicht übermittelt werden. Bitte versuchen Sie es erneut.',
    'blog.qa.tab.allAnswered': 'Alle Antworten',
    'blog.qa.tab.myQuestions': 'Meine Fragen',
    'blog.qa.empty.all': 'Noch keine Fragen beantwortet.',
    'blog.qa.empty.mine': 'Sie haben hier noch keine Fragen gestellt.',
    'blog.qa.status.pending': 'Anhängig',
    'blog.qa.status.ignored': 'Ignoriert',
    'blog.qa.status.private': 'Private Antwort',
    'blog.qa.status.public': 'Öffentliche Antwort',
    'blog.qa.role.reader': 'Leser',
    'blog.qa.role.author': 'Autor',
    'blog.qa.pinned': 'Angeheftet',
    'blog.qa.answeredAgo': 'Beantwortet {time}',
    'blog.qa.loadMore': 'Mehr laden',
    'blog.qa.warn.luRequired': 'Nur LU-Abonnenten können hier Fragen stellen.',
    'blog.qa.warn.fanClubRequired': 'Nur Fanclub-Mitglieder können hier Fragen stellen.',
    'blog.qa.warn.luOrFanRequired': 'Nur LU-Abonnenten oder Fanclub-Mitglieder können hier Fragen stellen.',
    // Blog post discussions
    'blogs.discussion': 'Diskussion',
    'blogs.discussionOnForum': 'Die Diskussion zu diesem Blogbeitrag geht in unseren Foren weiter.',
    'blogs.joinDiscussion': 'Beteiligen Sie sich an der Diskussion'
};