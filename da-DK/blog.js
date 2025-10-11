export default {
    'blog.noneMsg': `Du har i øjeblikket ingen {type, select,
    organization {blog}
    universe {en blog til dit univers}
    user {en blog}
    other {}
  }.`,
    'blog.create': 'Opret en ny blog',
    'blog.settings': `{type, select,
    org {Blog}
    universe {Universe side}
    user {Blog}
    other {}
  } indstillinger`,
    'blog.description': 'Blog introduktion',
    'blog.theme': 'Tema',
    'blog.theme.info': 'Ved at justere temaet kan du ændre sidens udseende. Denne funktion er ikke klar på nuværende tidspunkt.',
    'blog.posts.total': `Der {total, plural,
    zero {er ingen indlæg}
    one {er et indlæg}
    other {er # indlæg}
  } i denne blog.`,
    'blog.post.create': 'Write a new post',
    'blog.post.update': 'Rediger {title}',
    'blog.post.text': 'Indlægtekst',
    'common.slug': 'SEO-venlig adresse',
    'blog.slug.explained': 'Lav en flot URL til indlægget. Undgå at bruge specialtegn undtagen "-".',
    'blog.publicView': 'Offentlig visning',
    'blog.post.notfound': 'Blogindlæg blev ikke fundet',
    'blog.lists.works': `{type, select,
    universes {Universer}
    stories {Historier}
    fanfiction {Fan Fiction værk}
    other {}
  }`,
    'blog.social.sameAsMain': `Sociale links er de samme som indstillet i {type, select,
    organization {organisationsindstillinger}
    user {brugerprofil}
    other {}
  }`,
    'blog.social.website': 'Officiel hjemmeside',
    'blog.settings.universeSettings': 'Universblogs er integreret i universsider med deres grundlæggende indstillinger taget fra universindstillinger.',
    'blog.settings.organizationSettings': 'Organisationsblogs er integreret i organisationsider.',
    'blogs.lu': 'Officielle Literary Universe blogs',
    'blogs.featured': 'Udvalgte blogs',
    'blogs.new': 'Nyeste blogs',
    'blogs.title': 'Blogs fra Literary Universe',
    'blogs.description': 'Oversigt over blogs på Literary Universe-platformen.',
    'blogs.visit': 'Besøg blog',
    'blog.settingsAria': 'Indstillingskategorier for bloggen',
    'blog.settings.blog': 'Blog',
    'blog.settings.forum': 'Forum',
    'blog.post.introText': 'Introduktionstekst',
    'blog.post.writtenBy': 'Skrevet af {usernameDisplay}',
    'blog.post.writtenByFor': 'Skrevet af {usernameDisplay} til {publicationName}',
    'blog.posts.recent': 'Seneste indlæg',
    'blog.statsPage': 'Blog statistik',
    'blog.view': 'Se blog',
    'blog.settings.qa': 'SPØRGSMÅL OG SVAR',
    // Q&A Settings
    'blog.qa.settings.title': 'Spørgsmål og svar Indstillinger',
    'blog.qa.settings.notSupported': 'Spørgsmål og svar understøttes i øjeblikket kun for bruger- og universblogs.',
    'blog.qa.settings.enable': 'Aktivér spørgsmål og svar',
    'blog.qa.settings.enableQA': 'Giv læserne mulighed for at stille spørgsmål',
    'blog.qa.settings.enableQA.help': 'Når det er aktiveret, kan læserne indsende spørgsmål, som du kan besvare offentligt eller privat.',
    'blog.qa.settings.whoCanAsk': 'Hvem kan stille spørgsmål?',
    'blog.qa.settings.askersAllowed.all': 'Alle registrerede brugere',
    'blog.qa.settings.askersAllowed.all.help': 'Gratis brugere får 1 spørgsmål pr. blogs levetid. LU-abonnenter får 1 spørgsmål om året (2 det første år).',
    'blog.qa.settings.askersAllowed.luOnly': 'Kun for LU-abonnenter',
    'blog.qa.settings.askersAllowed.luOnly.help': 'Kun brugere med et aktivt LU-abonnement kan stille spørgsmål.',
    'blog.qa.settings.askersAllowed.fanClubOnly': 'Kun medlemmer af fanklubben',
    'blog.qa.settings.askersAllowed.fanClubOnly.help': 'Kun dine fanklubmedlemmer kan stille spørgsmål (grænser defineret pr. niveau).',
    'blog.qa.settings.askersAllowed.luOrFanClub': 'LU-abonnenter eller medlemmer af fanklubber',
    'blog.qa.settings.askersAllowed.luOrFanClub.help': 'Brugere med enten et LU-abonnement eller et Fan Club-medlemskab kan stille spørgsmål.',
    'blog.qa.settings.archive': 'Indstillinger for arkiv',
    'blog.qa.settings.showArchiveWhenDisabled': 'Vis besvarede spørgsmål, selv når Q&A er deaktiveret',
    'blog.qa.settings.showArchiveWhenDisabled.help': 'Når den er deaktiveret, kan læserne ikke stille nye spørgsmål, men de kan stadig se tidligere besvarede spørgsmål.',
    'blog.qa.settings.saved': 'Q&A-indstillinger gemt med succes',
    // Q&A Admin
    'blog.qa.admin.title': 'Administrer spørgsmål og svar',
    'blog.qa.admin.tab.pending': 'Afventer',
    'blog.qa.admin.tab.answered': 'Besvaret',
    'blog.qa.admin.tab.ignored': 'Ignoreret',
    'blog.qa.admin.empty.pending': 'Ingen udestående spørgsmål.',
    'blog.qa.admin.empty.answered': 'Ingen besvarede spørgsmål endnu.',
    'blog.qa.admin.empty.ignored': 'Ingen ignorerede spørgsmål.',
    'blog.qa.admin.answerQuestion': 'Svar på spørgsmål',
    'blog.qa.admin.visibility.public': 'Offentlig (alle kan se)',
    'blog.qa.admin.visibility.private': 'Privat (kun spørgeren kan se)',
    'blog.qa.admin.submitAnswer': 'Indsend svar',
    'blog.qa.admin.answer': 'Svar',
    'blog.qa.admin.ignore': 'Ignorer',
    'blog.qa.admin.confirmIgnore': 'Er du sikker på, at du vil ignorere dette spørgsmål?',
    'blog.qa.admin.pin': 'Nål',
    'blog.qa.admin.unpin': 'Tag stikket ud',
    'blog.qa.admin.yourAnswer': 'Dit svar',
    // Q&A Public
    'blog.qa.title': 'Spørgsmål',
    'blog.qa.askQuestion': 'Stil et spørgsmål',
    'blog.qa.submitQuestion': 'Indsend spørgsmål',
    'blog.qa.success.submit': 'Tak skal du have! Dit spørgsmål er indsendt og vil snart blive besvaret.',
    'blog.qa.error.submit': 'Kunne ikke indsende spørgsmål. Prøv venligst igen.',
    'blog.qa.tab.allAnswered': 'Alle besvarede',
    'blog.qa.tab.myQuestions': 'Mine spørgsmål',
    'blog.qa.empty.all': 'Ingen besvarede spørgsmål endnu.',
    'blog.qa.empty.mine': 'Du har ikke stillet nogen spørgsmål her endnu.',
    'blog.qa.status.pending': 'Afventer',
    'blog.qa.status.ignored': 'Ignoreret',
    'blog.qa.status.private': 'Privat svar',
    'blog.qa.status.public': 'Offentligt svar',
    'blog.qa.role.reader': 'Læser',
    'blog.qa.role.author': 'Forfatter',
    'blog.qa.pinned': 'Fastgjort',
    'blog.qa.answeredAgo': 'Besvaret {time}',
    'blog.qa.loadMore': 'Læs mere',
    'blog.qa.warn.luRequired': 'Kun LU-abonnenter kan stille spørgsmål her.',
    'blog.qa.warn.fanClubRequired': 'Kun fanklubmedlemmer kan stille spørgsmål her.',
    'blog.qa.warn.luOrFanRequired': 'Kun LU-abonnenter eller fanklubmedlemmer kan stille spørgsmål her.'
};