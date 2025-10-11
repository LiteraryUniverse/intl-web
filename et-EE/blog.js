export default {
    'blog.noneMsg': `Teil ei ole praegu {type, select,
    organization {ühtegi blogi}
    universe {blogi oma universumi jaoks}
    user {blogi}
    other {}
  }.`,
    'blog.create': 'Loo uus blogi',
    'blog.settings': `{type, select,
    org {Blogi}
    universe {Universumi leht}
    user {Blogi}
    other {}
  } seaded`,
    'blog.description': 'Blogi sissejuhatus',
    'blog.theme': 'Teema',
    'blog.theme.info': 'Teemat kohandades saate muuta lehe välimust. See funktsioon ei ole praegu veel valmis.',
    'blog.posts.total': `Selles blogis pole {total, plural,
    zero {postitusi}
    one {on üks postitus}
    other {on # postitused}
  }.`,
    'blog.post.create': 'Write a new post',
    'blog.post.update': 'Redigeeritakse {title}',
    'blog.post.text': 'Postituse tekst',
    'common.slug': 'SEO sõbralik aadress',
    'blog.slug.explained': 'Looge postituse jaoks kena välimusega URL. Vältige erimärkide kasutamist, välja arvatud "-".',
    'blog.publicView': 'Avalik vaade',
    'blog.post.notfound': 'Blogi postitust ei leitud',
    'blog.lists.works': `{type, select,
    universes {Universumid}
    stories {Lood}
    fanfiction {Fännikirjanduse teos}
    other {}
  }`,
    'blog.social.sameAsMain': `Sotsiaalsed lingid on samad kui määratud {type, select,
    organization {organisatsiooni seadetes}
    user {kasutaja profiilis}
    other {}
  }`,
    'blog.social.website': 'Ametlik veebileht',
    'blog.settings.universeSettings': 'Universe blogid on integreeritud universumi lehtedega, võttes arvesse nende põhiseadeid.',
    'blog.settings.organizationSettings': 'Organisatsiooni blogid on integreeritud organisatsiooni lehtedesse.',
    'blogs.lu': 'Ametlik Kirjandusliku Universumi blogid',
    'blogs.featured': 'Esiletõstetud blogid',
    'blogs.new': 'Uusimad blogid',
    'blogs.title': 'Kirjandusliku Universumi blogid',
    'blogs.description': 'Loendi kujul olevad blogid Kirjandusliku Universumi platvormil.',
    'blogs.visit': 'Külasta blogi',
    'blog.settingsAria': 'Sätete kategooriad blogile',
    'blog.settings.blog': 'Blogi',
    'blog.settings.forum': 'Foorum',
    'blog.post.introText': 'Sissejuhatav lõik',
    'blog.post.writtenBy': 'Kirjutas {usernameDisplay}',
    'blog.post.writtenByFor': 'Kirjutas {usernameDisplay} {publicationName}jaoks',
    'blog.posts.recent': 'Viimased postitused',
    'blog.statsPage': 'Blogi statistika',
    'blog.view': 'Vaata blogi',
    'blog.settings.qa': 'KÜSIMUSED JA VASTUSED',
    // Q&A Settings
    'blog.qa.settings.title': 'Küsimused ja vastused Seaded',
    'blog.qa.settings.notSupported': 'Küsimused ja vastused on praegu toetatud ainult kasutajate ja universumi blogide puhul.',
    'blog.qa.settings.enable': 'Võimaldage küsimuste ja vastuste esitamine',
    'blog.qa.settings.enableQA': 'Võimaldage lugejatel esitada küsimusi',
    'blog.qa.settings.enableQA.help': 'Kui see on lubatud, saavad lugejad esitada küsimusi, millele saate vastata avalikult või privaatselt.',
    'blog.qa.settings.whoCanAsk': 'Kes võib esitada küsimusi',
    'blog.qa.settings.askersAllowed.all': 'Kõik registreeritud kasutajad',
    'blog.qa.settings.askersAllowed.all.help': 'Tasuta kasutajad saavad 1 küsimuse blogi eluea kohta. LU-tellijad saavad 1 küsimuse aastas (2 esimesel aastal).',
    'blog.qa.settings.askersAllowed.luOnly': 'Ainult LU tellijatele',
    'blog.qa.settings.askersAllowed.luOnly.help': 'Küsimusi saavad esitada ainult aktiivse LU-tellimusega kasutajad.',
    'blog.qa.settings.askersAllowed.fanClubOnly': 'Ainult fänniklubi liikmed',
    'blog.qa.settings.askersAllowed.fanClubOnly.help': 'Küsimusi saavad esitada ainult teie fänniklubi liikmed (piirangud on määratud iga tasandi kohta).',
    'blog.qa.settings.askersAllowed.luOrFanClub': 'LU tellijad või fänniklubi liikmed',
    'blog.qa.settings.askersAllowed.luOrFanClub.help': 'Kasutajad, kellel on kas LU-tellimus või Fänniklubi liikmelisus, saavad esitada küsimusi.',
    'blog.qa.settings.archive': 'Arhiiviseadistused',
    'blog.qa.settings.showArchiveWhenDisabled': 'Näita vastatud küsimusi isegi siis, kui küsimused ja vastused on välja lülitatud',
    'blog.qa.settings.showArchiveWhenDisabled.help': 'Kui see on välja lülitatud, ei saa lugejad esitada uusi küsimusi, kuid nad saavad siiski vaadata varem vastatud küsimusi.',
    'blog.qa.settings.saved': 'Küsimuste ja vastuste seaded edukalt salvestatud',
    // Q&A Admin
    'blog.qa.admin.title': 'Halda küsimusi ja vastuseid',
    'blog.qa.admin.tab.pending': 'Pending',
    'blog.qa.admin.tab.answered': 'Vastatud',
    'blog.qa.admin.tab.ignored': 'Ignoreeritud',
    'blog.qa.admin.empty.pending': 'Puuduvad lahendamata küsimused.',
    'blog.qa.admin.empty.answered': 'Küsimustele ei ole veel vastatud.',
    'blog.qa.admin.empty.ignored': 'Küsimusi ei jäeta tähelepanuta.',
    'blog.qa.admin.answerQuestion': 'Vastus Küsimus',
    'blog.qa.admin.visibility.public': 'Avalik (kõik saavad näha)',
    'blog.qa.admin.visibility.private': 'Privaatne (ainult küsija näeb)',
    'blog.qa.admin.submitAnswer': 'Vastuse esitamine',
    'blog.qa.admin.answer': 'Vastus',
    'blog.qa.admin.ignore': 'Ignoreeri',
    'blog.qa.admin.confirmIgnore': 'Kas olete kindel, et soovite seda küsimust ignoreerida?',
    'blog.qa.admin.pin': 'Pin',
    'blog.qa.admin.unpin': 'Unpin',
    'blog.qa.admin.yourAnswer': 'Teie vastus',
    // Q&A Public
    'blog.qa.title': 'Küsimused',
    'blog.qa.askQuestion': 'Küsi küsimus',
    'blog.qa.submitQuestion': 'Küsimuse esitamine',
    'blog.qa.success.submit': 'Aitäh! Teie küsimus on esitatud ja sellele vastatakse peagi.',
    'blog.qa.error.submit': 'Küsimuse esitamine ebaõnnestus. Palun proovige uuesti.',
    'blog.qa.tab.allAnswered': 'Kõik Vastatud',
    'blog.qa.tab.myQuestions': 'Minu küsimused',
    'blog.qa.empty.all': 'Küsimustele ei ole veel vastatud.',
    'blog.qa.empty.mine': 'Te ei ole siin veel ühtegi küsimust esitanud.',
    'blog.qa.status.pending': 'Pending',
    'blog.qa.status.ignored': 'Ignoreeritud',
    'blog.qa.status.private': 'Erapoolne vastus',
    'blog.qa.status.public': 'Avalik vastus',
    'blog.qa.role.reader': 'Lugeja',
    'blog.qa.role.author': 'Autor',
    'blog.qa.pinned': 'Pinnitud',
    'blog.qa.answeredAgo': 'Vastatud {time}',
    'blog.qa.loadMore': 'Laadige rohkem',
    'blog.qa.warn.luRequired': 'Küsimusi saavad siin esitada ainult LU-tellijad.',
    'blog.qa.warn.fanClubRequired': 'Küsimusi saavad siin esitada ainult fänniklubi liikmed.',
    'blog.qa.warn.luOrFanRequired': 'Küsimusi saavad siin esitada ainult LU tellijad või fänniklubi liikmed.'
};