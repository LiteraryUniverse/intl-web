export default {
    'blog.noneMsg': `तुमच्याकडे आतापर्यंत कोणतीही ब्लॉग नाहीत {type, select,
    organization {तुमच्या विश्वासासाठी एक ब्लॉग नाही}
    universe {एक ब्लॉग}
    user {नाहीत}
    other {}
  }.`,
    'blog.create': 'नवीन ब्लॉग तयार करा',
    'blog.settings': `{type, select,
    org {ब्लॉग}
    universe {यूनिवर्स पृष्ठ}
    user {ब्लॉग}
    other {}
  } सेटिंग्ज`,
    'blog.description': 'ब्लॉगचे परिचय',
    'blog.theme': 'थीम',
    'blog.theme.info': 'By adjusting the theme, you will be able to change the look of the page. This feature is not ready at this time.',
    'blog.posts.total': `येथे कोणतेही पोस्ट नाहीत {total, plural,
    zero {एक पोस्ट आहे}
    one {पोस्ट आहेत}
    other {पोस्ट आहेत}
  } या ब्लॉगमध्ये.`,
    'blog.post.create': 'Write a new post',
    'blog.post.update': '{title}संपादन करीत आहे',
    'blog.post.text': 'प्रतिलेख मजकूर',
    'common.slug': 'एसईओ मित्रदर्शक पत्ता',
    'blog.slug.explained': 'Create a nice-looking URL for the post. Avoid using special characters except for "-".',
    'blog.publicView': 'सार्वजनिक दृश्य',
    'blog.post.notfound': 'ब्लॉग प्रतिलेख सापडला नाही',
    'blog.lists.works': `{type, select,
    universes {युनिवर्स}
    stories {कथा}
    fanfiction {फॅन फिक्शन काम}
    other {}
  }`,
    'blog.social.sameAsMain': `सोशल लिंक्स त्यांचे सेट केलेले आहेत ज्यामुळे त्यांनी सेट केलेले आहे त्यामुळे {type, select,
    organization {संघटना सेटिंग्ज}
    user {वापरकर्ता प्रोफाइल}
    other {}
  }`,
    'blog.social.website': 'अधिकृत वेबसाइट',
    'blog.settings.universeSettings': 'विश्वच्या सामान्य सेटिंग्ज प्रमाणे विश्वच्या ब्लॉगे विश्वांच्या पृष्ठांमध्ये समाविष्ट करण्यात आलेले आहेत.',
    'blog.settings.organizationSettings': 'संस्थेच्या पानांमध्ये ब्लॉग एकत्रित केलेले आहेत',
    'blogs.lu': 'अधिकृत साहित्यिक विश्व ब्लॉगे',
    'blogs.featured': 'वैशिष्ट्यपूर्ण ब्लॉगे',
    'blogs.new': 'नवीनतम ब्लॉगे',
    'blogs.title': 'साहित्यिक विश्वाला असलेले ब्लॉगे',
    'blogs.description': 'साहित्यिक विश्व स्थळावरची ब्लॉग यादी.',
    'blogs.visit': 'ब्लॉगला भेट द्या',
    'blog.settingsAria': 'ब्लॉगसाठी सेटींग्ज क्यॅटेगोर्या',
    'blog.settings.blog': 'ब्लॉग',
    'blog.settings.forum': 'मराठीत लिहिलेले ब्लॉग',
    'blog.post.introText': 'परिचय अनुच्छेद',
    'blog.post.writtenBy': 'द्वारे लिहिलेले {usernameDisplay}',
    'blog.post.writtenByFor': 'द्वारे लिहिलेले {usernameDisplay} {publicationName}प्रतिष्ठानासाठी',
    'blog.posts.recent': 'ताज्या पोस्ट',
    'blog.statsPage': 'ब्लॉग आकडेवारी',
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