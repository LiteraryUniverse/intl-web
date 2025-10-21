export default {
    'blog.noneMsg': `நீங்கள் தற்போது {type, select,
    organization {எந்த வலைப்பதிவும் இல்லை}
    universe {உங்கள் உலகத்திற்கு}
    user {தற்போதைய முனைவோர் செழுத்த ஒரு வலைப்பதிவை ஒரு வலைப்பு}
    other {}
  }.`,
    'blog.create': 'புதிய வலைப்பதிவை உருவாக்கவும்',
    'blog.settings': `{type, select,
    org {புதினமான வலைப்பதிவு}
    universe {பரலோக பக்கம்}
    user {வலைப்பதிவு}
    other {}
  } அமைப்புகள்`,
    'blog.description': 'வலைப்பதிவின் அறிமுகம்',
    'blog.theme': 'தீம்',
    'blog.theme.info': 'By adjusting the theme, you will be able to change the look of the page. This feature is not ready at this time.',
    'blog.posts.total': `ப்ளாகில் {total, plural,
    zero {புதினமான பதிவுகள் இல்லை.}
    one {ஐ ஒரு பதிவு கொடுப்பான்!}
    other {பதிவுகள் இருக்கின்றன!}
  } .`,
    'blog.post.create': 'Write a new post',
    'blog.post.update': 'மாற்றப்பட்ட பதிவு {title}',
    'blog.post.text': 'பதிவு உரை',
    'common.slug': 'SEO அமிழ்தியான முகவரி',
    'blog.slug.explained': 'Create a nice-looking URL for the post. Avoid using special characters except for "-".',
    'blog.publicView': 'பொது பார்வை',
    'blog.post.notfound': 'வலைப்பதிவு பதிவைக் கண்டறியாமல் உள்ளது',
    'blog.lists.works': `{type, select,
    universes {உலகங்கள்}
    stories {கதைகள்}
    fanfiction {ரசிகர் உண்மைகள் பணிகள்}
    other {}
  }`,
    'blog.social.sameAsMain': `சமூக இணையங்கள் பிரத்தியேக அமைப்புகளின் பொது இணைப்புகள் ஆகும் {type, select,
    organization {அமைப்பு அமைப்பின் அமைப்புகள்}
    user {பயனர் சுட்டிகள்}
    other {}
  }`,
    'blog.social.website': 'அதிகாரப்பூர்வ இணையதளம்',
    'blog.settings.universeSettings': 'பரலோக பக்கங்களில் பாடக்குறிப்புகளுடன் இணைக்கப்பட்டுள்ளன வலைப்பதிவு பகுதிகள் அடிப்படை அமைப்புகளை எடுக்கும்.',
    'blog.settings.organizationSettings': 'முனைவோர் வலைப்புத்தகங்கள் அமைப்படும்.',
    'blogs.lu': 'அதிகாரப்பூர்வ இலக்கண பரலோக வலைப்பதிவுகள்',
    'blogs.featured': 'சிறப்பு வலைப்பதிவுகள்',
    'blogs.new': 'புதிய வலைப்பதிவுகள்',
    'blogs.title': 'இலக்கண பரலோகம் வலைப்பதிவுகள்',
    'blogs.description': 'இலக்கண பரலோகம் தளத்தின் வலைப்பதிவுகளின் பட்டியல்.',
    'blogs.visit': 'வலைப்பதிவைப் பார்க்க',
    'blog.settingsAria': 'வலைப்பூட்டுகளுக்கான அமைப்புகள்',
    'blog.settings.blog': 'புலங்கள்',
    'blog.settings.forum': 'வலைப்புத்தகம்',
    'blog.post.introText': 'அறிமுக பதிப்பு',
    'blog.post.writtenBy': 'எழுதியவர் {usernameDisplay}',
    'blog.post.writtenByFor': 'எழுதியவர் {usernameDisplay} உங்களது {publicationName}',
    'blog.posts.recent': 'சமீபத்திய பதிவுகள்',
    'blog.statsPage': 'வலைப்பதிவு புள்ளிவிபரங்கள்',
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