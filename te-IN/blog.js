export default {
    'blog.noneMsg': `మీరు ప్రస్తుతం ఎందుకున్నారు కాదు {type, select,
    organization {ఏదీనికి సంబంధించిన బ్లాగు లేదు}
    universe {మీ యూనివర్స్ కోసం ఒక బ్లాగు లేదు}
    user {బ్లాగు లేదు}
    other {}
  }.`,
    'blog.create': 'కొత్త బ్లాగ్ సృష్టించండి',
    'blog.settings': `{type, select,
    org {బ్లాగ్}
    universe {యూనివర్స్ పేజీ}
    user {బ్లాగ్}
    other {}
  } అమరికై సెట్టింగ్లు`,
    'blog.description': 'బ్లాగ్ పరిచయం',
    'blog.theme': 'థీమ్',
    'blog.theme.info': 'By adjusting the theme, you will be able to change the look of the page. This feature is not ready at this time.',
    'blog.posts.total': `ఇక్కడ ఈ బ్లాగ్లో {total, plural,
    zero {పోస్టులు}
    one {ఒక పోస్టు}
    other {పోస్టులు}
  } ఉన్నాయి.`,
    'blog.post.create': 'Write a new post',
    'blog.post.update': 'సవరించు {title}',
    'blog.post.text': 'పోస్టు వచనం',
    'common.slug': 'SEO సౌజన్యం గూర్చి చిరునామా',
    'blog.slug.explained': 'Create a nice-looking URL for the post. Avoid using special characters except for "-".',
    'blog.publicView': 'పబ్లిక్ వీక్షణ',
    'blog.post.notfound': 'బ్లాగ్ పోస్టు కనపడలేదు',
    'blog.lists.works': `{type, select,
    universes {యూనివర్స్}
    stories {కథలు}
    fanfiction {ఫాన్ ఫిక్షన్ పని}
    other {}
  }`,
    'blog.social.sameAsMain': `సామాజిక లింక్స్ ముఖ్య సెట్ చేసినందున ఒకే అవస్థలో ఉన్నాయి {type, select,
    organization {సంస్థ సెట్టింగ్లలో}
    user {వాడుకరి ప్రొఫైల్లో}
    other {}
  }`,
    'blog.social.website': 'అధికారిక వెబ్సైట్',
    'blog.settings.universeSettings': 'యూనివర్స్ బ్లాగ్లు యూనివర్సు సెట్టింగ్ల నుండి అందుబాటులో ఉన్నాయి.',
    'blog.settings.organizationSettings': 'సంఘటన బ్లాగ్లు సంఘటన సంపుటలలో ఏకీకరించబడ్డాయి.',
    'blogs.lu': 'అధికారిక సాహిత్య యూనివర్స్ బ్లాగ్లు',
    'blogs.featured': 'ఫీచర్ చేయబడిన బ్లాగ్లు',
    'blogs.new': 'క్రొత్తతరమైన బ్లాగ్లు',
    'blogs.title': 'సాహిత్య యూనివర్స్ బ్లాగ్లు',
    'blogs.description': 'సాహిత్య యూనివర్స్ ప్లాట్‌ఫారమ్ లో ఉన్న బ్లాగ్ల జాబితా.',
    'blogs.visit': 'బ్లాగ్ని సందర్శించండి',
    'blog.settingsAria': 'బ్లాగ్ కొత్త  పరికరాల కోసం',
    'blog.settings.blog': 'బ్లాగ్',
    'blog.settings.forum': 'ఫోరం',
    'blog.post.introText': 'పరిచయ పేరణా వాక్యం',
    'blog.post.writtenBy': 'రాచించినది {usernameDisplay}',
    'blog.post.writtenByFor': 'రాచినది {usernameDisplay} {publicationName}కోసం',
    'blog.posts.recent': 'ఇటరాల పోస్టులు',
    'blog.statsPage': 'బ్లాగ్ సంఖ్యలు',
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