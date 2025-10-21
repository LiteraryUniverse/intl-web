export default {
    'blog.noneMsg': `Du har för närvarande inte {type, select,
    organization {någon blogg}
    universe {en blogg för ditt universum}
    user {en blogg}
    other {}
  }.`,
    'blog.create': 'Skapa en ny blogg',
    'blog.settings': `{type, select,
    org {Blogg}
    universe {Universumssida för bloggen}
    user {Blogg}
    other {}
  } inställningar`,
    'blog.description': 'Blogginledning',
    'blog.theme': 'Tema',
    'blog.theme.info': 'Genom att justera temat kommer du att kunna ändra utseendet på sidan. Den här funktionen är inte klar för närvarande.',
    'blog.posts.total': `Det {total, plural,
    zero {finns inga inlägg}
    one {finns ett inlägg}
    other {finns # inlägg}
  } i den här bloggen.`,
    'blog.post.create': 'Write a new post',
    'blog.post.update': 'Redigerar {title}',
    'blog.post.text': 'Inläggstext',
    'common.slug': 'SEO-vänlig adress',
    'blog.slug.explained': 'Skapa en snygg URL för inlägget. Undvik att använda specialtecken förutom "-".',
    'blog.publicView': 'Offentlig visning',
    'blog.post.notfound': 'Blogginlägget hittades inte',
    'blog.lists.works': `{type, select,
    universes {Universes}
    stories {Stories}
    fanfiction {Fan Fiction work}
    other {}
  }`,
    'blog.social.sameAsMain': `Sociala länkar är desamma som anges i {type, select,
    organization {organisationsinställningar}
    user {användarprofil}
    other {}
  }`,
    'blog.social.website': 'Officiell webbplats',
    'blog.settings.universeSettings': 'Universumsbloggar integreras i universumssidor med sina grundläggande inställningar tagna från universumsinställningar.',
    'blog.settings.organizationSettings': 'Organisationsbloggar är integrerade i organisationsidorna.',
    'blogs.lu': 'Officiella Litterärt Universum-bloggar',
    'blogs.featured': 'Utvalda bloggar',
    'blogs.new': 'Senaste bloggarna',
    'blogs.title': 'Bloggar i Litterärt Universum',
    'blogs.description': 'Lista över bloggar på Litterärt Universum-plattformen.',
    'blogs.visit': 'Besök bloggen',
    'blog.settingsAria': 'Inställningskategorier för bloggen',
    'blog.settings.blog': 'Blogg',
    'blog.settings.forum': 'Forum',
    'blog.post.introText': 'Introduktionsstycke',
    'blog.post.writtenBy': 'Skriven av {usernameDisplay}',
    'blog.post.writtenByFor': 'Skrivs av {usernameDisplay} för {publicationName}',
    'blog.posts.recent': 'Senaste inlägg',
    'blog.statsPage': 'Bloggstatistik',
    'blog.view': 'Visa blogg',
    'blog.settings.qa': 'FRÅGOR OCH SVAR',
    // Q&A Settings
    'blog.qa.settings.title': 'Frågor och svar Inställningar',
    'blog.qa.settings.notSupported': 'Frågor och svar stöds för närvarande endast för användar- och universumsbloggar.',
    'blog.qa.settings.enable': 'Aktivera frågor och svar',
    'blog.qa.settings.enableQA': 'Ge läsarna möjlighet att ställa frågor',
    'blog.qa.settings.enableQA.help': 'När funktionen är aktiverad kan läsarna skicka in frågor som du kan besvara offentligt eller privat.',
    'blog.qa.settings.whoCanAsk': 'Vem kan ställa frågor?',
    'blog.qa.settings.askersAllowed.all': 'Alla registrerade användare',
    'blog.qa.settings.askersAllowed.all.help': 'Gratisanvändare får 1 fråga per blogglivstid. LU-prenumeranter får 1 fråga per år (2 under sitt första år).',
    'blog.qa.settings.askersAllowed.luOnly': 'Endast LU-abonnenter',
    'blog.qa.settings.askersAllowed.luOnly.help': 'Endast användare med ett aktivt LU-abonnemang kan ställa frågor.',
    'blog.qa.settings.askersAllowed.fanClubOnly': 'Endast medlemmar i Fan Club',
    'blog.qa.settings.askersAllowed.fanClubOnly.help': 'Endast dina Fan Club-medlemmar kan ställa frågor (gränser definieras per nivå).',
    'blog.qa.settings.askersAllowed.luOrFanClub': 'LU-prenumeranter eller Fan Club-medlemmar',
    'blog.qa.settings.askersAllowed.luOrFanClub.help': 'Användare med antingen en LU-prenumeration eller ett Fan Club-medlemskap kan ställa frågor.',
    'blog.qa.settings.archive': 'Inställningar för arkiv',
    'blog.qa.settings.showArchiveWhenDisabled': 'Visa besvarade frågor även när Q&A är inaktiverat',
    'blog.qa.settings.showArchiveWhenDisabled.help': 'När funktionen är inaktiverad kan läsarna inte ställa nya frågor, men de kan fortfarande se tidigare besvarade frågor.',
    'blog.qa.settings.saved': 'Q&A-inställningarna har sparats framgångsrikt',
    // Q&A Admin
    'blog.qa.admin.title': 'Hantera frågor och svar',
    'blog.qa.admin.tab.pending': 'Avvaktande',
    'blog.qa.admin.tab.answered': 'Besvarad',
    'blog.qa.admin.tab.ignored': 'Ignorerad',
    'blog.qa.admin.empty.pending': 'Inga oavslutade frågor.',
    'blog.qa.admin.empty.answered': 'Inga besvarade frågor ännu.',
    'blog.qa.admin.empty.ignored': 'Inga ignorerade frågor.',
    'blog.qa.admin.answerQuestion': 'Svar på frågan',
    'blog.qa.admin.visibility.public': 'Offentligt (alla kan se)',
    'blog.qa.admin.visibility.private': 'Privat (endast frågeställaren kan se)',
    'blog.qa.admin.submitAnswer': 'Skicka in svar',
    'blog.qa.admin.answer': 'Svar',
    'blog.qa.admin.ignore': 'Ignorera',
    'blog.qa.admin.confirmIgnore': 'Är du säker på att du vill ignorera den här frågan?',
    'blog.qa.admin.pin': 'Stift',
    'blog.qa.admin.unpin': 'Plocka upp',
    'blog.qa.admin.yourAnswer': 'Ditt svar',
    // Q&A Public
    'blog.qa.title': 'Frågor och svar',
    'blog.qa.askQuestion': 'Ställ en fråga',
    'blog.qa.submitQuestion': 'Skicka in fråga',
    'blog.qa.success.submit': 'Tack så mycket! Din fråga har skickats in och kommer att besvaras inom kort.',
    'blog.qa.error.submit': 'Misslyckades med att skicka in frågan. Vänligen försök igen.',
    'blog.qa.tab.allAnswered': 'Alla besvarade',
    'blog.qa.tab.myQuestions': 'Mina frågor',
    'blog.qa.empty.all': 'Inga besvarade frågor ännu.',
    'blog.qa.empty.mine': 'Du har inte ställt några frågor här ännu.',
    'blog.qa.status.pending': 'Avvaktande',
    'blog.qa.status.ignored': 'Ignorerad',
    'blog.qa.status.private': 'Privat svar',
    'blog.qa.status.public': 'Offentligt svar',
    'blog.qa.role.reader': 'Läsare',
    'blog.qa.role.author': 'Författaren',
    'blog.qa.pinned': 'Pinned',
    'blog.qa.answeredAgo': 'Besvarad {time}',
    'blog.qa.loadMore': 'Ladda mer',
    'blog.qa.warn.luRequired': 'Endast LU-prenumeranter kan ställa frågor här.',
    'blog.qa.warn.fanClubRequired': 'Endast Fan Club-medlemmar kan ställa frågor här.',
    'blog.qa.warn.luOrFanRequired': 'Endast prenumeranter på LU eller medlemmar i Fan Club kan ställa frågor här.',
    // Blog post discussions
    'blogs.discussion': 'Diskussion',
    'blogs.discussionOnForum': 'Diskussionen om detta blogginlägg fortsätter i våra forum.',
    'blogs.joinDiscussion': 'Delta i diskussionen'
};