export default {
    'blog.noneMsg': `Jelenleg nincs semmilyen {type, select,
    organization {blog}
    universe {blog az univerzuma számára}
    user {blog}
    other {}
  }.`,
    'blog.create': 'Új blog létrehozása',
    'blog.settings': `{type, select,
    org {Blog}
    universe {Univerzum oldal}
    user {Blog}
    other {}
  } beállítások`,
    'blog.description': 'Blog bevezetés',
    'blog.theme': 'Téma',
    'blog.theme.info': 'A téma beállításával megváltoztathatja az oldal megjelenését. Ez a funkció jelenleg még nem készült el.',
    'blog.posts.total': `Ebben a blogban {total, plural,
    zero {nincsenek bejegyzések}
    one {egy bejegyzés}
    other {# bejegyzése van}
  }.`,
    'blog.post.create': 'Write a new post',
    'blog.post.update': 'A(z) {title}szerkesztése',
    'blog.post.text': 'Bejegyzés szövege',
    'common.slug': 'SEO barát URL',
    'blog.slug.explained': 'Hozzon létre egy szépen kinéző URL-címet a bejegyzéshez. Kerülje a speciális karakterek használatát a "-" kivételével.',
    'blog.publicView': 'Nyilvános megtekintés',
    'blog.post.notfound': 'A blogbejegyzés nem található',
    'blog.lists.works': `{type, select,
    universes {Univerzumok}
    stories {Történetek}
    fanfiction {Fan Fiction mű}
    other {}
  }`,
    'blog.social.sameAsMain': `A közösségi linkek ugyanazok, mint amik a {type, select,
    organization {szervezeti beállításokban vannak beállítva}
    user {felhasználói profilban}
    other {}
  }`,
    'blog.social.website': 'Hivatalos weboldal',
    'blog.settings.universeSettings': 'Az univerzum blogok integrálva vannak az univerzum oldalakra, ahol az alapbeállításaik az univerzum beállításairól származnak.',
    'blog.settings.organizationSettings': 'Szervezeti blogok integrálódnak a szervezet oldalába.',
    'blogs.lu': 'Hivatalos Irodalmi Univerzum blogok',
    'blogs.featured': 'Kiemelt blogok',
    'blogs.new': 'Legújabb blogok',
    'blogs.title': 'Irodalmi Univerzum blogjai',
    'blogs.description': 'Blogok felsorolása az Irodalmi Univerzum platformon.',
    'blogs.visit': 'Látogassa meg a blogot',
    'blog.settingsAria': 'Beállítási kategóriák a bloghoz',
    'blog.settings.blog': 'Blog',
    'blog.settings.forum': 'Fórum',
    'blog.post.introText': 'Bevezető bekezdés',
    'blog.post.writtenBy': 'Írta: {usernameDisplay}',
    'blog.post.writtenByFor': 'Írta: {usernameDisplay} {publicationName}részére',
    'blog.posts.recent': 'Legfrissebb bejegyzések',
    'blog.statsPage': 'Blog statisztika',
    'blog.view': 'Blog megtekintése',
    'blog.settings.qa': 'KÉRDÉSEK ÉS VÁLASZOK',
    // Q&A Settings
    'blog.qa.settings.title': 'Kérdés és válasz beállítások',
    'blog.qa.settings.notSupported': 'A kérdés-felelet jelenleg csak a felhasználói és az univerzum blogok esetében támogatott.',
    'blog.qa.settings.enable': 'Kérdések és válaszok engedélyezése',
    'blog.qa.settings.enableQA': 'Lehetővé teszi az olvasók számára, hogy kérdéseket tegyenek fel',
    'blog.qa.settings.enableQA.help': 'Ha engedélyezve van, az olvasók kérdéseket küldhetnek be, amelyekre Ön nyilvánosan vagy privátban válaszolhat.',
    'blog.qa.settings.whoCanAsk': 'Ki tehet fel kérdéseket',
    'blog.qa.settings.askersAllowed.all': 'Minden regisztrált felhasználó',
    'blog.qa.settings.askersAllowed.all.help': 'Az ingyenes felhasználók 1 kérdést kapnak blogonként egy életen át. A LU előfizetők évente 1 kérdést kapnak (az első évben 2 kérdést).',
    'blog.qa.settings.askersAllowed.luOnly': 'Csak LU előfizetők',
    'blog.qa.settings.askersAllowed.luOnly.help': 'Csak aktív LU-előfizetéssel rendelkező felhasználók tehetnek fel kérdéseket.',
    'blog.qa.settings.askersAllowed.fanClubOnly': 'Csak rajongói klubtagoknak',
    'blog.qa.settings.askersAllowed.fanClubOnly.help': 'Csak a rajongói klubtagok tehetnek fel kérdéseket (szintenként meghatározott korlátok).',
    'blog.qa.settings.askersAllowed.luOrFanClub': 'LU előfizetők vagy rajongói klubtagok',
    'blog.qa.settings.askersAllowed.luOrFanClub.help': 'Az LU-előfizetéssel vagy rajongói klubtagsággal rendelkező felhasználók kérdéseket tehetnek fel.',
    'blog.qa.settings.archive': 'Archívum beállítások',
    'blog.qa.settings.showArchiveWhenDisabled': 'A megválaszolt kérdések megjelenítése akkor is, ha a kérdés-felelet funkció le van tiltva',
    'blog.qa.settings.showArchiveWhenDisabled.help': 'Ha letiltja, az olvasók nem tudnak új kérdéseket feltenni, de a korábban megválaszolt kérdéseket továbbra is megtekinthetik.',
    'blog.qa.settings.saved': 'A Q&A beállítások sikeresen mentve',
    // Q&A Admin
    'blog.qa.admin.title': 'Kérdések és válaszok kezelése',
    'blog.qa.admin.tab.pending': 'Pending',
    'blog.qa.admin.tab.answered': 'Válaszolt',
    'blog.qa.admin.tab.ignored': 'Figyelmen kívül hagyta',
    'blog.qa.admin.empty.pending': 'Nincsenek függőben lévő kérdések.',
    'blog.qa.admin.empty.answered': 'Még nincsenek megválaszolt kérdések.',
    'blog.qa.admin.empty.ignored': 'Nincs figyelmen kívül hagyott kérdés.',
    'blog.qa.admin.answerQuestion': 'Válasz Kérdés',
    'blog.qa.admin.visibility.public': 'Nyilvános (mindenki láthatja)',
    'blog.qa.admin.visibility.private': 'Privát (csak a kérdező láthatja)',
    'blog.qa.admin.submitAnswer': 'Válasz beküldése',
    'blog.qa.admin.answer': 'Válasz',
    'blog.qa.admin.ignore': 'Ne törődj a',
    'blog.qa.admin.confirmIgnore': 'Biztos, hogy figyelmen kívül akarja hagyni ezt a kérdést?',
    'blog.qa.admin.pin': 'Pin',
    'blog.qa.admin.unpin': 'Unpin',
    'blog.qa.admin.yourAnswer': 'Az Ön válasza',
    // Q&A Public
    'blog.qa.title': 'Kérdések',
    'blog.qa.askQuestion': 'Kérdés feltevése',
    'blog.qa.submitQuestion': 'Kérdés beküldése',
    'blog.qa.success.submit': 'Köszönöm! Kérdését elküldtük, és hamarosan válaszolunk rá.',
    'blog.qa.error.submit': 'Nem sikerült elküldeni a kérdést. Kérjük, próbálja meg újra.',
    'blog.qa.tab.allAnswered': 'Minden Válaszolt',
    'blog.qa.tab.myQuestions': 'Kérdéseim',
    'blog.qa.empty.all': 'Még nincsenek megválaszolt kérdések.',
    'blog.qa.empty.mine': 'Itt még nem tett fel kérdéseket.',
    'blog.qa.status.pending': 'Pending',
    'blog.qa.status.ignored': 'Figyelmen kívül hagyta',
    'blog.qa.status.private': 'Privát válasz',
    'blog.qa.status.public': 'Nyilvános válasz',
    'blog.qa.role.reader': 'Olvasó',
    'blog.qa.role.author': 'Szerző',
    'blog.qa.pinned': 'Pinned',
    'blog.qa.answeredAgo': 'Válaszolt {time}',
    'blog.qa.loadMore': 'Töltsön többet',
    'blog.qa.warn.luRequired': 'Itt csak LU előfizetők tehetnek fel kérdéseket.',
    'blog.qa.warn.fanClubRequired': 'Itt csak rajongói klubtagok tehetnek fel kérdéseket.',
    'blog.qa.warn.luOrFanRequired': 'Itt csak LU előfizetők vagy rajongói klubtagok tehetnek fel kérdéseket.',
    // Blog post discussions
    'blogs.discussion': 'Megbeszélés',
    'blogs.discussionOnForum': 'A vita erről a blogbejegyzésről folytatódik a fórumainkon.',
    'blogs.joinDiscussion': 'Csatlakozzon a vitához'
};