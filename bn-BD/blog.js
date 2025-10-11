export default {
    'blog.noneMsg': `You currently don't have {type, select,
    organization {any blog}
    universe {a blog for your universe}
    user {a blog}
    other {}
  }.`,
    'blog.create': 'একটি নতুন ব্লগ তৈরি করুন',
    'blog.settings': `{type, select,
    org {ব্লগ}
    universe {ইউনিভার্স পৃষ্ঠা}
    user {ব্লগ}
    other {}
  } সেটিংস`,
    'blog.description': 'ব্লগ পরিচিতি',
    'blog.theme': 'থিম',
    'blog.theme.info': 'By adjusting the theme, you will be able to change the look of the page. This feature is not ready at this time.',
    'blog.posts.total': `There {total, plural,
    zero {are no posts}
    one {is one post}
    other {are # posts}
  } in this blog.`,
    'blog.post.create': 'Write a new post',
    'blog.post.update': '{title}সম্পাদনা করা হচ্ছে',
    'blog.post.text': 'পোস্ট পাঠ্য',
    'common.slug': 'এসইও বন্ধুত্বপূর্ণ ঠিকানা',
    'blog.slug.explained': 'Create a nice-looking URL for the post. Avoid using special characters except for "-".',
    'blog.publicView': 'পাবলিক দৃশ্য',
    'blog.post.notfound': 'ব্লগ পোস্ট পাওয়া যায়নি',
    'blog.lists.works': `{type, select,
    universes {বিশ্বজুড়ে}
    stories {গল্পগুচ্ছ}
    fanfiction {ফ্যান ফিকশন কাজ}
    other {}
  }`,
    'blog.social.sameAsMain': `সামাজিক লিঙ্কগুলি একই হিসাবে সেট করা হয় যেমন যেমন নিবন্ধন সেটিংসে {type, select,
    organization {ব্যবস্থাপনা সেটিংস}
    user {ব্যবহারকারী প্রোফাইল}
    other {}
  }`,
    'blog.social.website': 'অফিসিয়াল ওয়েবসাইট',
    'blog.settings.universeSettings': 'বিশ্ব ব্লগগুলি বিশ্ব সেটিংস থেকে গ্রহণ করে বিশ্ব পৃষ্ঠায় সংযুক্ত হয়।',
    'blog.settings.organizationSettings': 'সংগঠনের ব্লগগুলি সংগঠনের পৃষ্ঠাগুলিতে সংযুক্ত করা হয়।',
    'blogs.lu': 'অফিসিয়াল সাহিত্যিক বিশ্ব ব্লগগুলি',
    'blogs.featured': 'বৈশিষ্ট্যযুক্ত ব্লগগুলি',
    'blogs.new': 'নতুনতম ব্লগগুলি',
    'blogs.title': 'সাহিত্যিক বিশ্বের ব্লগগুলি',
    'blogs.description': 'সাহিত্যিক বিশ্ব প্ল্যাটফর্মের ব্লগগুলির তালিকা।',
    'blogs.visit': 'ব্লগ দেখুন',
    'blog.settingsAria': 'ব্লগের জন্য সেটিংস বিভাগসমূহ',
    'blog.settings.blog': 'ব্লগ',
    'blog.settings.forum': 'ফোরাম',
    'blog.post.introText': 'পরিচিতি প্যারাগ্রাফ',
    'blog.post.writtenBy': '{usernameDisplay}দ্বারা লিখিত',
    'blog.post.writtenByFor': '{usernameDisplay} দ্বারা লিখিত, {publicationName}এর জন্য',
    'blog.posts.recent': 'সাম্প্রতিক পোস্টসমূহ',
    'blog.statsPage': 'ব্লগ পরিসংখ্যান',
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