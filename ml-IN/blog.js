export default {
    'blog.noneMsg': `{type, select,
    organization {നിങ്ങൾക്ക് ഇപ്പോൾ}
    universe {ഒരു യൂണിവേഴ്സിനുള്ള blog ഉണ്ടാക്കാൻ സാധിച്ചിട്ടില്ല}
    user {ഒരു blog}
    other {}
  }.`,
    'blog.create': 'ഒരു പുതിയ ബ്ലോഗ് സൃഷ്ടിക്കുക',
    'blog.settings': `{type, select,
    org {ബ്ലോഗ്}
    universe {യൂണിവേഴ്‌സ് പേജ്}
    user {ബ്ലോഗ്}
    other {}
  } ക്രമീകരണങ്ങൾ`,
    'blog.description': 'ബ്ലോഗ് പരിചയം',
    'blog.theme': 'തീം',
    'blog.theme.info': 'By adjusting the theme, you will be able to change the look of the page. This feature is not ready at this time.',
    'blog.posts.total': `There {total, plural,
    zero {are no posts}
    one {is one post}
    other {are # posts}
  } in this blog.`,
    'blog.post.create': 'Write a new post',
    'blog.post.update': '{title}എഡിറ്റുചെയ്യുന്നു',
    'blog.post.text': 'പോസ്റ്റ് വചനം',
    'common.slug': 'SEO സൗഹൃദമായ വിലാസം',
    'blog.slug.explained': 'Create a nice-looking URL for the post. Avoid using special characters except for "-".',
    'blog.publicView': 'പൊതുവെ കാഴ്ച്ച',
    'blog.post.notfound': 'ബ്ലോഗ് പോസ്റ്റ് കണ്ടെത്തിയില്ല',
    'blog.lists.works': `{type, select,
    universes {യൂണിവേഴ്സുകൾ}
    stories {കഥകൾ}
    fanfiction {ഫാൻ ഫിക്ഷൻ പ്രവർത്തനം}
    other {}
  }`,
    'blog.social.sameAsMain': `സോഷ്യൽ ലിങ്കുകൾ എഴുതേണ്ടത് {type, select,
    organization {ഓർഗനൈസേഷൻ ക്രമങ്ങളിൽ അമർത്താൻ}
    user {ഉപയോക്തൃ പ്രൊഫൈൽ ക്രമങ്ങളിൽ}
    other {}
  }`,
    'blog.social.website': 'ആധികാരിക വെബ്സൈറ്റ്',
    'blog.settings.universeSettings': 'യൂണിവേഴ്സ് ബ്ലോഗുകൾ യൂണിവേഴ്സ് കാഴ്ചകളിൽ അവയുടെ അടിസ്ഥാന ക്രമീകരണങ്ങൾ ഉപയോഗിച്ച് സജീവമാക്കപ്പെടുന്നു.',
    'blog.settings.organizationSettings': 'കമ്പനി ബ്ലോഗുകൾ കമ്പനി പേജുകൾക്ക് ഐക്യകരിക്കപ്പെടുന്നു.',
    'blogs.lu': 'ആധികാരിക സാഹിത്യ യൂണിവേഴ്സ് ബ്ലോഗുകൾ',
    'blogs.featured': 'വിശേഷിപ്പിച്ച ബ്ലോഗുകൾ',
    'blogs.new': 'പുതിയതുകൾ ബ്ലോഗുകൾ',
    'blogs.title': 'സാഹിത്യ യൂണിവേഴ്സിന്റെ ബ്ലോഗുകൾ',
    'blogs.description': 'സാഹിത്യ യൂണിവേഴ്സിന്റെ പ്ലാറ്റ്ഫോം ലിസ്റ്റിംഗ് ആണ് ഇവിടെ ബ്ലോഗുകൾ പട്ടികിൽ കാണാൻ.',
    'blogs.visit': 'ബ്ലോഗ് സന്ദർശിക്കുക',
    'blog.settingsAria': 'ബ്ലോഗിന് ക്രമങ്ങൾ വേണം',
    'blog.settings.blog': 'ബ്ലോഗ്',
    'blog.settings.forum': 'ഫോറം',
    'blog.post.introText': 'പ്രസ്താവന പഠിപ്പ്',
    'blog.post.writtenBy': 'എഴുതിയത് {usernameDisplay}',
    'blog.post.writtenByFor': 'എഴുതിയത് {usernameDisplay} യുടെയാണ് {publicationName}',
    'blog.posts.recent': 'ഏറ്റവും പുതിയ പോസ്റ്റുകൾ',
    'blog.statsPage': 'ബ്ലോഗ് സ്റ്റാറ്റിസ്റ്റികൾ',
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