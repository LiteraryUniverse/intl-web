export default {
    'blog.noneMsg': `Al momento non hai {type, select,
    organization {nessun blog}
    universe {un blog per il tuo universo}
    user {un blog}
    other {}
  }.`,
    'blog.create': 'Crea un nuovo blog',
    'blog.settings': `{type, select,
    org {Blog}
    universe {Pagina dell'universo}
    user {Blog}
    other {}
  } impostazioni`,
    'blog.description': 'Introduzione al blog',
    'blog.theme': 'Tema',
    'blog.theme.info': 'Regolando il tema, potrà cambiare l\'aspetto della pagina. Questa funzione non è ancora pronta.',
    'blog.posts.total': `Non ci sono {total, plural,
    zero {post}
    one {è un post}
    other {sono # post}
  } in questo blog.`,
    'blog.post.create': 'Write a new post',
    'blog.post.update': 'Modifica {title}',
    'blog.post.text': 'Testo del post',
    'common.slug': 'Indirizzo SEO friendly',
    'blog.slug.explained': 'Crei un URL di bell\'aspetto per il post. Eviti di utilizzare caratteri speciali, ad eccezione di "-".',
    'blog.publicView': 'Visibile al pubblico',
    'blog.post.notfound': 'Il post del blog non è stato trovato',
    'blog.lists.works': `{type, select,
    universes {Universi}
    stories {Storie}
    fanfiction {Lavoro di Fan Fiction}
    other {}
  }`,
    'blog.social.sameAsMain': `I collegamenti sociali sono gli stessi impostati in {type, select,
    organization {impostazioni dell'organizzazione}
    user {profilo dell'utente}
    other {}
  }`,
    'blog.social.website': 'Sito web ufficiale',
    'blog.settings.universeSettings': 'I blog dell\'universo sono integrati nelle pagine dell\'universo con le impostazioni di base prese dalle impostazioni dell\'universo.',
    'blog.settings.organizationSettings': 'I blog dell\'organizzazione sono integrati nelle pagine dell\'organizzazione.',
    'blogs.lu': 'Blog ufficiali di Literary Universe',
    'blogs.featured': 'Blog in evidenza',
    'blogs.new': 'Blog più recenti',
    'blogs.title': 'Blog di Literary Universe',
    'blogs.description': 'Elenco dei blog sulla piattaforma Literary Universe.',
    'blogs.visit': 'Visita il blog',
    'blog.settingsAria': 'Categorie delle impostazioni per il blog',
    'blog.settings.blog': 'Blog',
    'blog.settings.forum': 'Forum',
    'blog.post.introText': 'Paragrafo introduttivo',
    'blog.post.writtenBy': 'Scritto da {usernameDisplay}',
    'blog.post.writtenByFor': 'Scritto da {usernameDisplay} per {publicationName}',
    'blog.posts.recent': 'Post recenti',
    'blog.statsPage': 'Statistiche del blog',
    'blog.view': 'Visualizza il blog',
    'blog.settings.qa': 'DOMANDE E RISPOSTE',
    // Q&A Settings
    'blog.qa.settings.title': 'Domande e risposte Impostazioni',
    'blog.qa.settings.notSupported': 'Le domande e risposte sono attualmente supportate solo per i blog degli utenti e degli universi.',
    'blog.qa.settings.enable': 'Abilita le domande e le risposte',
    'blog.qa.settings.enableQA': 'Consentire ai lettori di porre domande',
    'blog.qa.settings.enableQA.help': 'Quando è abilitato, i lettori possono inviare domande alle quali lei può rispondere pubblicamente o privatamente.',
    'blog.qa.settings.whoCanAsk': 'Chi può fare domande',
    'blog.qa.settings.askersAllowed.all': 'Tutti gli utenti registrati',
    'blog.qa.settings.askersAllowed.all.help': 'Gli utenti gratuiti ricevono 1 domanda per ogni vita del blog. Gli abbonati LU ricevono 1 domanda all\'anno (2 nel primo anno).',
    'blog.qa.settings.askersAllowed.luOnly': 'Solo per gli abbonati LU',
    'blog.qa.settings.askersAllowed.luOnly.help': 'Solo gli utenti con un abbonamento LU attivo possono porre domande.',
    'blog.qa.settings.askersAllowed.fanClubOnly': 'Solo per i membri del Fan Club',
    'blog.qa.settings.askersAllowed.fanClubOnly.help': 'Solo i membri del suo Fan Club possono porre domande (limiti definiti per livello).',
    'blog.qa.settings.askersAllowed.luOrFanClub': 'Abbonati LU o membri del Fan Club',
    'blog.qa.settings.askersAllowed.luOrFanClub.help': 'Gli utenti con un abbonamento LU o un\'iscrizione al Fan Club possono porre domande.',
    'blog.qa.settings.archive': 'Impostazioni dell\'archivio',
    'blog.qa.settings.showArchiveWhenDisabled': 'Mostra le domande con risposta anche quando Q&A è disattivato',
    'blog.qa.settings.showArchiveWhenDisabled.help': 'Quando è disattivato, i lettori non potranno porre nuove domande, ma potranno comunque visualizzare le domande a cui hanno risposto in precedenza.',
    'blog.qa.settings.saved': 'Le impostazioni di Q&A sono state salvate con successo',
    // Q&A Admin
    'blog.qa.admin.title': 'Gestisci le domande e le risposte',
    'blog.qa.admin.tab.pending': 'In attesa',
    'blog.qa.admin.tab.answered': 'Risponde',
    'blog.qa.admin.tab.ignored': 'Ignorato',
    'blog.qa.admin.empty.pending': 'Non ci sono domande in sospeso.',
    'blog.qa.admin.empty.answered': 'Non ci sono ancora domande con risposta.',
    'blog.qa.admin.empty.ignored': 'Non ci sono domande ignorate.',
    'blog.qa.admin.answerQuestion': 'Risposta Domanda',
    'blog.qa.admin.visibility.public': 'Pubblico (tutti possono vederlo)',
    'blog.qa.admin.visibility.private': 'Privato (solo chi chiede può vedere)',
    'blog.qa.admin.submitAnswer': 'Invia la risposta',
    'blog.qa.admin.answer': 'Risposta',
    'blog.qa.admin.ignore': 'Ignorare',
    'blog.qa.admin.confirmIgnore': 'È sicuro di voler ignorare questa domanda?',
    'blog.qa.admin.pin': 'Spillo',
    'blog.qa.admin.unpin': 'Spillare',
    'blog.qa.admin.yourAnswer': 'La sua risposta',
    // Q&A Public
    'blog.qa.title': 'Domande',
    'blog.qa.askQuestion': 'Ponga una domanda',
    'blog.qa.submitQuestion': 'Invia la domanda',
    'blog.qa.success.submit': 'Grazie! La sua domanda è stata inoltrata e riceverà presto una risposta.',
    'blog.qa.error.submit': 'Non è stato possibile inviare la domanda. La preghiamo di riprovare.',
    'blog.qa.tab.allAnswered': 'Tutte le risposte',
    'blog.qa.tab.myQuestions': 'Le mie domande',
    'blog.qa.empty.all': 'Non ci sono ancora domande con risposta.',
    'blog.qa.empty.mine': 'Non ha ancora posto alcuna domanda qui.',
    'blog.qa.status.pending': 'In attesa',
    'blog.qa.status.ignored': 'Ignorato',
    'blog.qa.status.private': 'Risposta privata',
    'blog.qa.status.public': 'Risposta pubblica',
    'blog.qa.role.reader': 'Lettore',
    'blog.qa.role.author': 'Autore',
    'blog.qa.pinned': 'Appuntato',
    'blog.qa.answeredAgo': 'Rispondi a {time}',
    'blog.qa.loadMore': 'Carica di più',
    'blog.qa.warn.luRequired': 'Solo gli abbonati LU possono porre domande qui.',
    'blog.qa.warn.fanClubRequired': 'Solo i membri del Fan Club possono porre domande qui.',
    'blog.qa.warn.luOrFanRequired': 'Solo gli abbonati LU o i membri del Fan Club possono porre domande qui.'
};