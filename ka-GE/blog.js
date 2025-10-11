export default {
    'blog.noneMsg': `ამჟამად თქვენ არ გაქვს {type, select,
    organization {არცერთი ბლოგი}
    universe {სამაგიდოსთვის}
    user {ბლოგი}
    other {}
  }.`,
    'blog.create': 'ახალი ბლოგის შექმნა',
    'blog.settings': `{type, select,
    org {ბლოგის}
    universe {უნივერსის გვერდი}
    user {ბლოგის}
    other {}
  } პარამეტრები`,
    'blog.description': 'ბლოგის შესავალი',
    'blog.theme': 'თემა',
    'blog.theme.info': 'By adjusting the theme, you will be able to change the look of the page. This feature is not ready at this time.',
    'blog.posts.total': `There {total, plural,
    zero {are no posts}
    one {is one post}
    other {are # posts}
  } in this blog.`,
    'blog.post.create': 'Write a new post',
    'blog.post.update': 'პოსტის რედაქტირება {title}',
    'blog.post.text': 'პოსტის ტექსტი',
    'common.slug': 'SEO მეგობრებული ბმული',
    'blog.slug.explained': 'Create a nice-looking URL for the post. Avoid using special characters except for "-".',
    'blog.publicView': 'საჯარო ხედვა',
    'blog.post.notfound': 'ბლოგის პოსტი ვერ მოიძებნა',
    'blog.lists.works': `{type, select,
    universes {უნივერსები}
    stories {მოთხოვნები}
    fanfiction {ფან ფიქშენი}
    other {}
  }`,
    'blog.social.sameAsMain': `სოციალური ბმულები იგივეა, როგორც {type, select,
    organization {ორგანიზაციის პარამეტრების შეცვლაში}
    user {მომხმარებლის პროფილში}
    other {}
  }`,
    'blog.social.website': 'ოფიციალური ვებსაიტი',
    'blog.settings.universeSettings': 'უნივერსიტეტსის ბლოგები შეიცავენ უნივერსიტეტის გვერდის ბაზარზე დაყენებული სეტინგებისგან.',
    'blog.settings.organizationSettings': 'ორგანიზაციის ბლოგები შეერთება გვერდებში',
    'blogs.lu': 'უბანის ბლოგი',
    'blogs.featured': 'განცალკევებული ბლოგები',
    'blogs.new': 'უახლესი ბლოგები',
    'blogs.title': 'ლიტერატურული უნივერსიტეტის ბლოგები',
    'blogs.description': 'ბლოგების ჩამონათვალთარი სია ლიტერატურული უნივერსიტეტის პლათფორმაზე.',
    'blogs.visit': 'ბლოგის ვიზიტი',
    'blog.settingsAria': 'პარამეტრების კატეგორიები ბლოგში',
    'blog.settings.blog': 'ბლოგი',
    'blog.settings.forum': 'ფორუმი',
    'blog.post.introText': 'შესატყვისი აბზაცი',
    'blog.post.writtenBy': 'დაწერილია {usernameDisplay}',
    'blog.post.writtenByFor': 'დაწერილია {usernameDisplay} {publicationName}',
    'blog.posts.recent': 'ბოლო პოსტები',
    'blog.statsPage': 'ბლოგის სტატისტიკა',
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