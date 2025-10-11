export default {
    'blog.noneMsg': `तपाईंलाई हालसम्म कुनै पनि ब्लग छैन {type, select,
    organization {तपाईंको ब्रह्माण्डका लागि ब्लग छैन}
    universe {एउटा ब्लग}
    user {ब्लग छैन}
    other {}
  }.`,
    'blog.create': 'नयाँ ब्लग सिर्जना गर्नुहोस्',
    'blog.settings': `{type, select,
    org {ब्लग}
    universe {ब्रह्माण्ड पृष्ठ}
    user {ब्लग}
    other {}
  } सेटिङ्स`,
    'blog.description': 'ब्लग परिचय',
    'blog.theme': 'थिम',
    'blog.theme.info': 'By adjusting the theme, you will be able to change the look of the page. This feature is not ready at this time.',
    'blog.posts.total': `There {total, plural,
    zero {are no posts}
    one {is one post}
    other {are # posts}
  } in this blog.`,
    'blog.post.create': 'Write a new post',
    'blog.post.update': '{title}सम्पादन गर्दै',
    'blog.post.text': 'पोस्ट पाठ',
    'common.slug': 'SEO सौहार्दपूर्ण ठेगाना',
    'blog.slug.explained': 'Create a nice-looking URL for the post. Avoid using special characters except for "-".',
    'blog.publicView': 'सार्वजनिक दृश्य',
    'blog.post.notfound': 'ब्लग पोस्ट भेटिएन',
    'blog.lists.works': `{type, select,
    universes {ब्रह्माण्डहरू}
    stories {कथाहरू}
    fanfiction {फ्यान फिक्शन कार्य}
    other {}
  }`,
    'blog.social.sameAsMain': `सामाजिक लिङ्कहरू मुख्य {type, select,
    organization {संगठन सेटिङ्समा सेट गरिएका छन्}
    user {प्रयोगकर्ता प्रोफाइल}
    other {}
  }`,
    'blog.social.website': 'आधिकारिक वेबसाइट',
    'blog.settings.universeSettings': 'यूनिभर्स ब्लग यूनिभर्स सेटिङहरूबाट लिएर यूनिभर्स पृष्ठमा एकीकृत गरिएका छन्।',
    'blog.settings.organizationSettings': 'संगठनिक ब्लगहरूले संगठन सामग्रीमा एकीकरण गरिएको छ',
    'blogs.lu': 'आधिकारिक साहित्यिक यूनिभर्स ब्लगहरू',
    'blogs.featured': 'विशेष ब्लगहरू',
    'blogs.new': 'नयाँतम ब्लगहरू',
    'blogs.title': 'साहित्यिक यूनिभर्सका ब्लगहरू',
    'blogs.description': 'साहित्यिक यूनिभर्स प्लेटफर्ममा ब्लगहरूको सूचीबद्धीकरण।',
    'blogs.visit': 'ब्लगमा जानुहोस्',
    'blog.settingsAria': 'ब्लगको सेटिङ्ग श्रेरशचाहरू',
    'blog.settings.blog': 'ब्लग',
    'blog.settings.forum': 'फोरम',
    'blog.post.introText': 'परिचय अनुच्छेद',
    'blog.post.writtenBy': '{usernameDisplay}द्वारा लेखित',
    'blog.post.writtenByFor': '{usernameDisplay} द्वारा लेखित {publicationName}को लागि',
    'blog.posts.recent': 'आधुनिक पोष्टहरू',
    'blog.statsPage': 'ब्लग तथ्यांक',
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
    'blog.qa.success.submit': 'Thank you! Your question has been submitted and will be answered soon.',
    'blog.qa.error.submit': 'Failed to submit question. Please try again.',
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