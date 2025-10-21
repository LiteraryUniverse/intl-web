export default {
    'blog.noneMsg': `वर्तमान में आपके पास {type, select,
    organization {कोई भी ब्लॉग नहीं हैं}
    universe {एक यूनिवर्स के लिए ब्लॉग}
    user {एक ब्लॉग}
    other {}
  }।`,
    'blog.create': 'नया ब्लॉग बनाएं',
    'blog.settings': `{type, select,
    org {ब्लॉग}
    universe {यूनिवर्स पेज}
    user {ब्लॉग}
    other {}
  } सेटिंग्स`,
    'blog.description': 'ब्लॉग परिचय',
    'blog.theme': 'थीम',
    'blog.theme.info': 'By adjusting the theme, you will be able to change the look of the page. This feature is not ready at this time.',
    'blog.posts.total': `यहाँ {total, plural,
    zero {कोई पोस्ट नहीं है}
    one {एक पोस्ट है}
    other {कुल # पोस्ट हैं}
  } इस ब्लॉग में।`,
    'blog.post.create': 'Write a new post',
    'blog.post.update': 'संपादन कर रही हैं {title}',
    'blog.post.text': 'पोस्ट टेक्स्ट',
    'common.slug': 'एसईओ फ्रेंडली पता',
    'blog.slug.explained': 'Create a nice-looking URL for the post. Avoid using special characters except for "-".',
    'blog.publicView': 'सार्वजनिक दृश्य',
    'blog.post.notfound': 'ब्लॉग पोस्ट नहीं मिली',
    'blog.lists.works': `{type, select,
    universes {ब्रह्मांड}
    stories {कहानियाँ}
    fanfiction {फैन फिक्शन कार्य}
    other {}
  }`,
    'blog.social.sameAsMain': `सामाजिक संपर्क उसी तरह हैं जैसा की सेट हैं {type, select,
    organization {संगठन सेटिंग्स}
    user {उपयोगकर्ता प्रोफाइल}
    other {}
  }`,
    'blog.social.website': 'आधिकारिक वेबसाइट',
    'blog.settings.universeSettings': 'यूनिवर्स ब्लॉग यूनिवर्स सेटिंग से अपनी सामान्य सेटिंग ले लेते हैं।',
    'blog.settings.organizationSettings': 'संगठन ब्लॉग संगठन पृष्ठों में एकीकृत हैं।',
    'blogs.lu': 'आधिकारिक साहित्यिक यूनिवर्स ब्लॉग',
    'blogs.featured': 'चयनित ब्लॉग',
    'blogs.new': 'नवीनतम ब्लॉग',
    'blogs.title': 'लिटररी यूनिवर्स के ब्लॉग',
    'blogs.description': 'लिटररी यूनिवर्स प्लेटफॉर्म पर ब्लॉग की सूची।',
    'blogs.visit': 'ब्लॉग पर जाएं',
    'blog.settingsAria': 'ब्लॉग के लिए सेटिंग्स श्रेणियाँ',
    'blog.settings.blog': 'ब्लॉग',
    'blog.settings.forum': 'फोरम',
    'blog.post.introText': 'परिचय पैराग्राफ',
    'blog.post.writtenBy': 'लेखक: {usernameDisplay}',
    'blog.post.writtenByFor': 'लिखा गया हैं {usernameDisplay} के लिए {publicationName}',
    'blog.posts.recent': 'हाल के पोस्ट',
    'blog.statsPage': 'ब्लॉग सांख्यिकी',
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
    'blog.qa.warn.luOrFanRequired': 'Only LU subscribers or Fan Club members can ask questions here.',
    // Blog post discussions
    'blogs.discussion': 'Discussion',
    'blogs.discussionOnForum': 'The discussion for this blog post continues on our forums.',
    'blogs.joinDiscussion': 'Join the discussion'
};