export default {
    'blog.noneMsg': `Sinulla ei tällä hetkellä ole {type, select,
    organization {mitään blogia}
    universe {blogia universumillesi}
    user {blogia}
    other {}
  }.`,
    'blog.create': 'Luo uusi blogi',
    'blog.settings': `{type, select,
    org {Blogi}
    universe {Universumi sivu}
    user {Blogi}
    other {}
  } asetukset`,
    'blog.description': 'Blogiesittely',
    'blog.theme': 'Teema',
    'blog.theme.info': 'Säätämällä teemaa voit muuttaa sivun ulkoasua. Tämä ominaisuus ei ole valmis tällä hetkellä.',
    'blog.posts.total': `Siellä {total, plural,
    zero {ei ole viestejä}
    one {on yksi viesti}
    other {on # viestiä}
  } tässä blogissa.`,
    'blog.post.create': 'Write a new post',
    'blog.post.update': 'Muokkaa viestiä ! {title}',
    'blog.post.text': 'Viestin teksti',
    'common.slug': 'SEO-ystävällinen osoite',
    'blog.slug.explained': 'Luo postaukselle nätin näköinen URL-osoite. Vältä erikoismerkkejä lukuun ottamatta "-".',
    'blog.publicView': 'Julkinen näkymä',
    'blog.post.notfound': 'Blogiviestiä ei löytynyt',
    'blog.lists.works': `{type, select,
    universes {Universet}
    stories {Tarinat}
    fanfiction {Fanifiktio teos}
    other {}
  }`,
    'blog.social.sameAsMain': `Sosiaaliset linkit ovat samat kuin {type, select,
    organization {organisaation asetukset}
    user {käyttäjäprofiili}
    other {}
  }`,
    'blog.social.website': 'Virallinen verkkosivusto',
    'blog.settings.universeSettings': 'Universe-blogeja integroidaan universumisivuille yleisillä asetuksilla.',
    'blog.settings.organizationSettings': 'Organisaatioblogit on integroitu organisaatiosivuihin.',
    'blogs.lu': 'Virallisesti kirjallisuuden universumin blogit',
    'blogs.featured': 'Esittelyssä olevat blogit',
    'blogs.new': 'Uusimmat blogit',
    'blogs.title': 'Kirjallisuuden universumin blogit',
    'blogs.description': 'Listaus blogeista kirjallisuuden universumissa',
    'blogs.visit': 'Siirry blogiin',
    'blog.settingsAria': 'Blogiasetuksien luokat',
    'blog.settings.blog': 'Blogi',
    'blog.settings.forum': 'Foorumi',
    'blog.post.introText': 'Johdantokappale',
    'blog.post.writtenBy': 'Kirjoittanut {usernameDisplay}',
    'blog.post.writtenByFor': 'Kirjoittanut {usernameDisplay} kohteelle {publicationName}',
    'blog.posts.recent': 'Viimeisimmät viestit',
    'blog.statsPage': 'Blogitilastot',
    'blog.view': 'Näytä blogi',
    'blog.settings.qa': 'KYSYMYKSET JA VASTAUKSET',
    // Q&A Settings
    'blog.qa.settings.title': 'Q&A Asetukset',
    'blog.qa.settings.notSupported': 'Kysymyksiä ja vastauksia tuetaan tällä hetkellä vain käyttäjä- ja universumiblogeissa.',
    'blog.qa.settings.enable': 'Ota Q&A käyttöön',
    'blog.qa.settings.enableQA': 'Anna lukijoiden esittää kysymyksiä',
    'blog.qa.settings.enableQA.help': 'Kun tämä on käytössä, lukijat voivat lähettää kysymyksiä, joihin voit vastata julkisesti tai yksityisesti.',
    'blog.qa.settings.whoCanAsk': 'Kuka voi esittää kysymyksiä',
    'blog.qa.settings.askersAllowed.all': 'Kaikki rekisteröityneet käyttäjät',
    'blog.qa.settings.askersAllowed.all.help': 'Ilmaiskäyttäjät saavat 1 kysymyksen blogin elinkaaren aikana. LU-tilaajat saavat 1 kysymyksen vuodessa (2 ensimmäisenä vuonna).',
    'blog.qa.settings.askersAllowed.luOnly': 'Vain LU-tilaajille',
    'blog.qa.settings.askersAllowed.luOnly.help': 'Vain käyttäjät, joilla on aktiivinen LU-tilaus, voivat esittää kysymyksiä.',
    'blog.qa.settings.askersAllowed.fanClubOnly': 'Vain Fan Clubin jäsenet',
    'blog.qa.settings.askersAllowed.fanClubOnly.help': 'Vain faniklubisi jäsenet voivat esittää kysymyksiä (rajoitukset on määritelty tasokohtaisesti).',
    'blog.qa.settings.askersAllowed.luOrFanClub': 'LU-tilaajat tai Fan Clubin jäsenet',
    'blog.qa.settings.askersAllowed.luOrFanClub.help': 'Käyttäjät, joilla on joko LU-tilaus tai Fan Club -jäsenyys, voivat esittää kysymyksiä.',
    'blog.qa.settings.archive': 'Arkistoasetukset',
    'blog.qa.settings.showArchiveWhenDisabled': 'Näytä vastatut kysymykset myös silloin, kun Q&A on poistettu käytöstä',
    'blog.qa.settings.showArchiveWhenDisabled.help': 'Kun se on poistettu käytöstä, lukijat eivät voi esittää uusia kysymyksiä, mutta he voivat silti tarkastella aiemmin vastattuja kysymyksiä.',
    'blog.qa.settings.saved': 'Q&A-asetukset tallennettu onnistuneesti',
    // Q&A Admin
    'blog.qa.admin.title': 'Hallitse Q&A',
    'blog.qa.admin.tab.pending': 'Vireillä',
    'blog.qa.admin.tab.answered': 'Vastattu',
    'blog.qa.admin.tab.ignored': 'Ei huomioitu',
    'blog.qa.admin.empty.pending': 'Ei avoimia kysymyksiä.',
    'blog.qa.admin.empty.answered': 'Ei vielä vastattuja kysymyksiä.',
    'blog.qa.admin.empty.ignored': 'Ei huomiotta jätettyjä kysymyksiä.',
    'blog.qa.admin.answerQuestion': 'Vastaus Kysymys',
    'blog.qa.admin.visibility.public': 'Julkinen (kaikki voivat nähdä)',
    'blog.qa.admin.visibility.private': 'Yksityinen (vain kysyjä näkee)',
    'blog.qa.admin.submitAnswer': 'Lähetä vastaus',
    'blog.qa.admin.answer': 'Vastaa',
    'blog.qa.admin.ignore': 'Älä välitä',
    'blog.qa.admin.confirmIgnore': 'Oletko varma, että haluat jättää tämän kysymyksen huomiotta?',
    'blog.qa.admin.pin': 'Pin',
    'blog.qa.admin.unpin': 'Irrota nasta',
    'blog.qa.admin.yourAnswer': 'Vastauksesi',
    // Q&A Public
    'blog.qa.title': 'Kysymykset',
    'blog.qa.askQuestion': 'Kysy kysymys',
    'blog.qa.submitQuestion': 'Lähetä kysymys',
    'blog.qa.tab.allAnswered': 'Kaikki Vastattu',
    'blog.qa.tab.myQuestions': 'Kysymykseni',
    'blog.qa.empty.all': 'Ei vielä vastattuja kysymyksiä.',
    'blog.qa.empty.mine': 'Et ole vielä esittänyt yhtään kysymystä täällä.',
    'blog.qa.status.pending': 'Vireillä',
    'blog.qa.status.ignored': 'Ei huomioitu',
    'blog.qa.status.private': 'Yksityinen vastaus',
    'blog.qa.status.public': 'Julkinen vastaus',
    'blog.qa.role.reader': 'Lukija',
    'blog.qa.role.author': 'Kirjoittaja',
    'blog.qa.pinned': 'Pinnattu',
    'blog.qa.answeredAgo': 'Vastattu {time}',
    'blog.qa.loadMore': 'Lataa lisää',
    'blog.qa.warn.luRequired': 'Vain LU-tilaajat voivat esittää kysymyksiä täällä.',
    'blog.qa.warn.fanClubRequired': 'Vain Fan Clubin jäsenet voivat esittää kysymyksiä täällä.',
    'blog.qa.warn.luOrFanRequired': 'Vain LU-tilaajat tai Fan Clubin jäsenet voivat esittää kysymyksiä täällä.'
};