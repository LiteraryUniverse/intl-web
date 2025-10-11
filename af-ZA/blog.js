export default {
    'blog.noneMsg': `Jy het tans geen {type, select,
    organization {enige blog}
    universe {'n blog vir jou heelal}
    user {'n blog}
    other {}
  }.`,
    'blog.create': 'Skep \'n nuwe blog',
    'blog.settings': `{type, select,
    org {Blog}
    universe {heelal bladsy}
    user {Blog}
    other {}
  } instellings`,
    'blog.description': 'Blog inleiding',
    'blog.theme': 'Tema',
    'blog.theme.info': 'By adjusting the theme, you will be able to change the look of the page. This feature is not ready at this time.',
    'blog.posts.total': `Daar {total, plural,
    zero {is geen plasings}
    one {is een plasing}
    other {is # plasings}
  } in hierdie blog nie.`,
    'blog.post.create': 'Write a new post',
    'blog.post.update': 'Wysig {title}',
    'blog.post.text': 'Plasing teks',
    'common.slug': 'SEO vriendelike adres',
    'blog.slug.explained': 'Create a nice-looking URL for the post. Avoid using special characters except for "-".',
    'blog.publicView': 'Openbare aansig',
    'blog.post.notfound': 'Blog plasing kon nie gevind word nie',
    'blog.lists.works': `{type, select,
    universes {Heelalle}
    stories {Stories}
    fanfiction {Fan Fiksie werk}
    other {}
  }`,
    'blog.social.sameAsMain': `Sosiale skakels is dieselfde as ingestel in {type, select,
    organization {organisasie-instellings}
    user {gebruikersprofiel}
    other {}
  }`,
    'blog.social.website': 'Amptelike webwerf',
    'blog.settings.universeSettings': 'Heelal blogs word geintegreer in heelal bladsye met hul basiese instellings geneem vanaf heelal instellings.',
    'blog.settings.organizationSettings': 'Organisasieblogs is geïntegreer in organisasiebladsye.',
    'blogs.lu': 'Amptelike Literêre Heelal blogs',
    'blogs.featured': 'Uitgeligte blogs',
    'blogs.new': 'Nuutste blogs',
    'blogs.title': 'Blogs van Literêre Heelal',
    'blogs.description': 'Lys van blogs op die Literêre Heelal platform.',
    'blogs.visit': 'Besoek blog',
    'blog.settingsAria': 'Instellingskategorieë vir die blog',
    'blog.settings.blog': 'Blog',
    'blog.settings.forum': 'Forum',
    'blog.post.introText': 'Inleidende paragraaf',
    'blog.post.writtenBy': 'Geskryf deur {usernameDisplay}',
    'blog.post.writtenByFor': 'Geskryf deur {usernameDisplay} vir {publicationName}',
    'blog.posts.recent': 'Onlangse plasings',
    'blog.statsPage': 'Blog statistieke',
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