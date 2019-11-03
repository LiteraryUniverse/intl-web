/**
 * @authors Jan Dvorak
 */
import form from './en_form';
/* eslint-disable max-len */
export default {
  locales: ['en', 'en-US', 'en-UK', 'en-CA', 'en-AU', 'en-NZ'],
  sitename: 'Literary Universe',
  'site.description': 'Literary Universe is a creative and publishing platform for grand story universes.',
  'site.keywords':
    'creative writing, scifi, sci-fi, fantasy, writing, publishing, translations, story, stories, universe',
  'site.logoAlt': 'Literary Universe logo',
  ...form,
  mobileMenu: 'Mobile menu',
  'common.signin': 'Login',
  'common.signup': 'Register',
  'common.signout': 'Logout',
  'common.dashboard': 'Dashboard',
  'common.discovery': 'Discovery',
  'common.library': 'Library',
  'common.library.own': 'Your Library',
  'common.workshop': 'Workshop',
  'common.pm': 'Messages',
  'common.settings': 'Settings',
  'common.options': 'Options',
  'common.profile': 'Profile',
  'common.blog': 'Blog',
  'common.blogs': 'Blogs',
  'common.about': 'About us',
  'common.accessdenied': 'Access denied',
  'common.accessdenied.msg':
    'You were not given permission to go here. If you should have access here, please contact the owner and tell them to double check the settings.',
  'common.loading': 'Loading...',
  'common.add': 'Add',
  'common.save': 'Save',
  'common.email': 'E-mail',
  'common.soon': 'Coming soon...',
  'common.search': 'Search',
  'common.search.do': 'Search',
  'common.searching': 'Searching...',
  'common.report': 'Report',
  'common.user': 'User',
  'common.users': 'Users',
  'common.showmore': 'Show more',
  'common.futurefeature.title': 'Future feature',
  'common.futurefeature.text':
    'We are very sorry, but this feature is not available at this time. We are working hard to make it available as soon as possible.',
  'common.nothingfound': 'Nothing found',
  'common.explore': 'Explore',
  'common.by': 'by ', // keep the space at the end as username follows
  'common.scratchpad': 'Scratchpad',
  'common.scratchpad.own': 'Your scratchpad',
  'common.news': 'News',
  'common.encyclopedia': 'Encyclopedia',
  'common.story': 'Story',
  'common.stories': 'Stories',
  'common.universe': 'Universe',
  'common.universes': 'Universes',
  'common.collaborator': 'Collaborator',
  'common.collaborators': 'Collaborators',
  'common.translator': 'Translator',
  'common.translators': 'Translators',
  'common.betareader': 'Beta reader',
  'common.betareaders': 'Beta readers',
  'common.post': 'Post',
  'common.statistics': 'Statistics',
  'common.lang.select': 'Select language',
  'common.submit': 'Submit',
  'common.close': 'Close',
  'common.comment': 'Comment',
  'common.comments': 'Comments',
  404: 'Page not found',
  'search.users': 'Search for users',
  'search.user': 'Search for user',
  'common.help': 'Help',
  'common.or': 'or',

  'settings.biography': 'Biography',
  'settings.biography.placeholder': 'A little bit about yourself to be shown on your profile.',
  'settings.avatar.title': 'Avatar',
  'settings.avatar.own': 'Your avatar',
  'settings.avatar.upload': 'Select image',
  'settings.email': 'E-mails',
  'settings.email.msg': 'E-mails associated with your account',
  'settings.email.verified.false': 'Not verified',
  'settings.email.verified.true': 'Verified e-mail',
  'settings.email.add': 'Add e-mail',
  'settings.languages.title': 'Language settings',
  'settings.languages.notice':
    'English is currently the only officially supported language. Other languages are available thanks to amazing volunteers, but they might still be incomplete.',
  'settings.languages.join': 'If you would like to help us, you can translate Literary Universe as well.',
  'settings.name.title': 'Real name',
  'settings.name.given': 'Given name',
  'settings.name.family': 'Family name',
  'settings.username.change': 'Change username',
  'settings.username.label': 'Username',
  'settings.password.title': 'Change password',
  'settings.password.current': 'Current password',
  'settings.password.new': 'New password',
  'settings.password.repeat': 'Repeat your new password',
  'settings.password.nomatch': 'New password does not match!',
  'common.account.create': 'Create an account',
  'signup.username': 'Username',
  'signup.email': 'Your e-mail',
  'signup.password.label': 'Your password',
  'signup.password.repeat': 'Repeat your password',
  'common.password': 'Password',
  'signin.password.forgot': 'Forgot password?',

  'settings.password.reset': 'Reset your password',
  'email.verification': 'E-mail verification',
  'email.verifying': 'Verifying your e-mail. This will take just a moment...',
  'email.verified': 'Great news! Your e-mail has been verified!',
  'dashboard.whatsnew': 'What is new',
  'dashboard.blog': 'Your blog',

  'common.footer.tagline': 'Writing and reading complex universes made easy.',
  'common.footer.plans': 'Plans & Pricing',
  'common.legal.tos': 'Terms of Service',
  'common.legal.community': 'Community Guidelines',
  'common.legal.privacy': 'Privacy Policy',
  'common.legal.copyright': 'Copyright Agreement',
  'common.legal.disclaimer': '© {year} All rights reserved, all texts belong to their respective authors.',

  'pm.conversation': 'Conversation',
  'pm.showolder': 'Show older messages',
  'pm.errors.saysomething': 'You should really say something...',
  'pm.errors.addrecipient': 'You need to add at least one other user.',
  'pm.message': 'Message',
  'pm.send.message': 'Send message',
  'pm.messages.own': 'Your messages',
  'pm.conversations.none': 'You are currently not conversing with anyone.',
  'pm.to': 'To:',
  'pm.with': 'Conversation with:',

  'premium.only.title': 'For premium users only',
  'premium.only.msg': 'We apologize, but this functionality is for premium members only.',
  'premium.only.join': 'Become one today to gain access to this and many more features.',
  'premium.only.link': 'Check it out!',

  'user.friend.request.add': 'Add to friends',
  'user.friend.requests': `You have {num} new friend {num, plural,
    zero {requests}
    one {request}
    many {requests}
  }`,
  'user.friend.unfriend': 'Unfriend',
  'user.block': 'Block',
  'user.unblock': 'Unblock',
  'user.joined': `{gender, select,
    male {Joined}
    female {Joined}
    other {Joined}} on `, // keep the space at the end
  'user.friend.request.accept': 'Accept friendship request',
  'user.friend.request.cancel': 'Cancel friendship request',
  'user.friend.request.deny': 'Deny friendship',
  'user.listing': 'User listing',
  'user.profile.visit': "Visit {user}'s profile.",
  'user.profile.avatar': "{username}'s avatar",
  'user.friend.list.requests': 'Friendships requests',
  'user.friend.norequests': 'You have no requests for friendship.',

  'feed.name': 'Stream',
  'feed.post.new': 'New post',
  'feed.post.like': 'Like post',
  'feed.post.unlike': 'Unlike post',
  'feed.post.send': 'Post',
  'feed.empty': 'No entries in the feed.',

  'discovery.meta.desc': 'Discover new stories and universes.',
  'discovery.universes.new': 'Emerging universes',
  'discovery.stories.new': 'New stories',
  'discovery.stories.standalone.new': 'New standalone stories',
  'discovery.stories.updated': 'Recently updated stories',
  'discovery.continue': 'Continue reading',
  'discovery.stories.similar.new': 'New stories in the neighborhood',
  'discovery.stories.similar.regular': 'Stories in the neighborhood',

  'rating.name': 'Rating',
  'rating.explained': 'Age rating and restriction.',
  'rating.all': 'All',
  'rating.desc.all': 'Accessible to all ages and groups.',
  'rating.teens': 'Teens',
  'rating.desc.teens': 'Suitable for an audience between ages 12 and 18.',
  'rating.mature': 'Mature',
  'rating.desc.mature': 'Contains advance themes, crude language and implicit scenes.',
  'rating.explicit': 'Explicit',
  'rating.desc.explicit': 'Contains explicit scenes.',
  'rating.selection.all': 'All - Accessible to all ages and groups.',
  'rating.selection.teens': 'Teens (12-18) - Suitable for audience between ages 12 and 18.',
  'rating.selection.mature': 'Mature (18+) - Contains advance themes, crude language and implicit scenes.',
  'rating.selection.explicit': 'Explicit (21+) - Contains explicit scenes.',

  'universe.visit': 'Visit universe page',
  'common.fanfiction': 'Fan Fiction',
  'universe.fanfiction.see': 'All Fan Fiction for ',
  'universe.fanfiction.desc': 'Fan Fiction for {universe}',
  'universe.fanfiction.for': '{universe} Fan Fiction',
  'universe.stories.count': `There {num, plural,
    =0 {are no stories}
    one {is one story}
    other {are # stories}
    } in this universe.`,
  'universe.authors.title': 'Authors',
  'universe.authors.desc': 'Creators and contributors to {universe}',
  'universe.contributors': 'Contributors',
  'universe.translators': 'Translators',
  'universe.authors.notice':
    'Each story might have additional personal that has worked on it. For more details see the details of the story.',
  'universe.createdby': `{gender, select,
    male {Created}
    female {Created}
    other {Created}} by `,
  'universe.stories.for': 'Stories for {universe}',
  'universe.stories.own': '{universe} stories',
  'universe.stories.desc': 'Cannon stories for {universe}',
  'universe.encyclopedia.title': '{universe} encyclopedia',
  'universe.encyclopedia.desc': 'All the details for {universe}',
  'story.chapter': 'Chapter',
  'story.chapters': 'Chapters',
  'story.genre': 'Genre',
  'story.genres': 'Genres',
  'story.read': 'Read',
  'story.lastUpdate': 'Last updated on {date, date, medium} {date, time, short}.',
  'story.finishedAt': 'Finished on {date, date, medium}.',
  'story.comments.for': 'Comments for {story} {chapter}.',
  'story.cover.alt': 'Story cover image for {story}.',
  'chapter.comment': 'Comments on this chapter',
  'comment.write': 'Write your comment',
  'comments.none': 'Sorry, no comments to show.',
  'comments.total': `There {count, plural,
    =0 {are no comments}
    one {is 1 comment}
    other {are # comments}
  }.`,
  'comments.show.older': 'Show older comments',
  'reader.language': 'Language:',
  'reader.fullscreen.enter': 'Enter fullscreen',
  'reader.fullscreen.exit': 'Exit fullscreen',
  'story.note.fanfiction': 'NOTE: This story is a fan fiction on {universe} universe.',
  'chapter.next': 'Next chapter',
  'chapter.previous': 'Previous chapter',
  'reader.details.universe': 'Universe details',
  'reader.details.story': 'Story details',
  'reader.darkmode': 'Toggle dark mode',
  'reader.flowtext': 'Toggle text size',
  'writer.bold': 'Bold the selection',
  'writer.underline': 'Underline the selection',
  'writer.italic': 'Emphasize the selection',

  'encyclopedia.add': 'Add a new entry',
  'encyclopedia.browse': 'Browse through encyclopedia',
  'encyclopedia.search': 'Search the encyclopedia',

  'finder.details': 'details',
  'finder.remove': 'remove the connection',
  'finder.connect': 'Connect selection to encyclopedia entry',

  'workshop.title': 'Your work',
  'workshop.noneassigned': 'You have not been assigned any yet.',
  'workshop.notavailable': 'This feature is not yet available.',
  'workshop.none': `You currently have no {type, select,
      universe {universe}
      story {story}
      fanfiction {fan fiction}
    }. Create one now!`,
  'workshop.collab': 'Collaborative work',
  'workshop.betareadings': 'Beta readings',
  'workshop.translations': 'Translations',
  'workshop.createnew': 'Create new...',
  'workshop.story.standalone': 'Standalone story',
  'workshop.story.standalone.desc': 'This is a standalone story.',
  'workshop.controlpanel': '{name} control panel',
  'workshop.universe.page': 'Universe page',
  'workshop.fictionaltime': 'Fictional time',
  'workshop.dashboard.name': '{name} dashboard',
  'workshop.stories.in': 'Stories in {universe}',
  'workshop.universe.nostories': 'There are no stories in this universe.',
  'workshop.story.chapter.add': 'New chapter',
  'workshop.universe.new': 'Create a new universe',
  'workshop.universe.publish': 'Publish universe',
  'workshop.universe.publishing.notice':
    'If you do not publish the universe, it will be published automatically when the first story connected to the universe is published.',
  'workshop.universe.settings': '{universe} universe settings',
  'workshop.universe.publishedOn': 'This universe has been published on ',
  'workshop.universe.description': 'Universe description',
  'workshop.settings.title': 'Title',
  'workshop.description': 'Description',
  'workshop.language.primary': 'Primary language',
  'workshop.publication.options': 'Publication options',
  'workshop.rating': 'General rating',
  'workshop.universe.rating.desc':
    'Stories and fanfiction above this rating will be hidden from the universe page listing from anonymous users and users who are not of the appropriate age.',
  'workshop.universe.license': 'Universe license',
  'workshop.universe.genre.pick': 'Select genre for the universe',
  'workshop.story.genre.pick': 'Select genres for the story',
  'workshop.cover': 'Cover',
  'workshop.nothingtosee': 'Nothing to see here...',
  'workshop.story.cannon': 'Cannon story',
  'workshop.story.cannon.desc': 'This story is cannonical in {universe} universe.',
  'workshop.story.cannon.desc.create': 'This story will be created as a cannonical story in {universe} universe.',
  'workshop.story.fanfiction.search':
    'Type in the name of the universe (it needs to be in your library). And then select from suggestions.',
  'workshop.story.error.nogenres': 'You need to select at least one genre.',
  'workshop.story.error.toomanygenres': 'Only two genres per story are allowed.',
  'workshop.story.error.fanfiction.selectuniverse': 'You need to select original universe for your fan fiction!',
  'workshop.story.error.tags.toomany': 'You can only have 10 tags per story.',
  'workshop.story.new': 'Create a new story',
  'workshop.story.publishing.notice': 'The story will be published automatically once you publish the first chapter.',
  'workshop.settings.edit': 'Edit settings',
  'workshop.story.publishedOn': 'This story was published on ',
  'workshop.story.settings': 'Story settings',
  'workshop.settings.basic': 'Basic settings',
  'workshop.settings.genres': 'Genres (max 2)',
  'workshop.story.license': 'Story license',
  'workshop.story.settings.universe': 'Universe settings',
  'workshop.settings.tags': 'Tags',
  'workshop.revision': 'Revision',
  'workshop.revisions.title': '{story}: {chapter} Revisions',
  'workshop.revisions.current': 'Current draft',
  'workshop.revisions.new.beta': 'Create a new revision out of the draft.',
  'workshop.revisions.new.public': 'Create a new public revision out of the draft.',
  'workshop.revisions.toeditor': 'Go to the editor',
  'workshop.revisions.comments': 'Revision comments',
  'workshop.revisions.comments.title': '{story}: {chapter} - Revision {revision} - Comments',
  'workshop.revisions.comments.list':
    '{revision}: {publication, select, beta {for Beta readers} readers {Public}} {datetime, date, medium} {datetime, time, short}',
  'workshop.revisions.comments.norevision': 'You need to create a revision first.',
  'workshop.revisions.comments.select': 'Select revision',
  'workshop.collaborators.noresults': 'No results',
  'workshop.collaborators.add.beta': 'Add Beta reader',
  'workshop.collaborators.add.collaborator': 'Add collaborator',
  'workshop.collaborators.add.translator': 'Add translator',

  'encyclopedia.back.universe': 'Back to universe page',
  'encyclopedia.back.workshop': 'Back to workshop',
  'encyclopedia.categories': 'Categories',
  'encyclopedia.groups': 'Groups',
  'encyclopedia.category.character': 'Characters',
  'encyclopedia.category.event': 'Events',
  'encyclopedia.category.group': 'Groups',
  'encyclopedia.category.item': 'Items',
  'encyclopedia.category.location': 'Locations',
  'encyclopedia.category.other': 'Other',
  'encyclopedia.category.state': 'States',
  'encyclopedia.category.governments': 'Governments',
  'encyclopedia.category.languages': 'Languages',
  'encyclopedia.category.creatures': 'Creatures',
  'encyclopedia.category.deity': 'Deities',
  'encyclopedia.category.religions': 'Religions',
  'encyclopedia.category.flora': 'Flora',
  'encyclopedia.category.magic': 'Magic',
  'encyclopedia.category.planets': 'Planets',
  'encyclopedia.category.species': 'Species',
  'encyclopedia.category.technologies': 'Technologies',
  'encyclopedia.search.found': `{results, plural,
    =0 {No related entries}
    one {1 related entry}
    other {# related entries}
  } found.`,
  'encyclopedia.help.text':
    'Use the menu on the left to navigate between the items in the encyclopedia. Once you select an item, it will be displayed instead of this text.',
  'encyclopedia.help.sidebar': 'Sidebar Encyclopedia',
  'encyclopedia.help.sidebar.text':
    'Use the selection above to search, browse and add new entries to your encyclopedia. If you want to add connection to an entry from the story text, select the text where you want to place it and then click the connect button. You will be then prompted to find and select an item.',
  'encyclopedia.intro': 'Welcome to the {universe} encyclopedia.',
  'encyclopedia.entries.total': `There are currently {num, plural,
    =0 {no entries}
    one {one entry}
    other {# entries}
  } in this encyclopedia.`,
  'encyclopedia.add.title': 'Add a new entry to encyclopedia',
  'encyclopedia.add.heading': 'What do you wish to add?',
  'encyclopedia.add.moresoon': 'More categories coming soon!',
  'encyclopedia.create': `Create a new {category, select,
    character {character}
    event {event}
    group {group}
    item {item}
    location {location}
    other {note}
    state {state}
    governments {government}
    languages {language}
    creatures {creature}
    deity {deity}
    religions {religion}
    flora {flora}
    magic {magic}
    planets {planet}
    species {specie}
    technologies {technology}
  }`,
  'encyclopedia.create.header': `Create a new {category, select,
    character {character}
    event {event}
    group {group}
    item {item}
    location {location}
    other {note}
    state {state}
    governments {government}
    languages {language}
    creatures {creature}
    deity {deity}
    religions {religion}
    flora {flora}
    magic {magic}
    planets {planet}
    species {specie}
    technologies {technology}
  } in {universe}`,
  'encyclopedia.entry.category': `Entry category: {category, select,
    character {Character}
    event {Event}
    group {Group}
    item {Item}
    location {Location}
    other {Note}
    state {State}
    governments {Government}
    languages {Language}
    creatures {Creature}
    deity {Deity}
    religions {Religion}
    flora {Flora}
    magic {Magic}
    planets {Planet}
    species {Specie}
    technologies {Technology}
  }`,
  'encyclopedia.fields.add': 'Add a new field',
  'encyclopedia.fields.text': 'Definition',
  'encyclopedia.fields.textarea': 'Text',
  'encyclopedia.fields.connection': 'Connection',
  'encyclopedia.fields.time': 'Time',
  'encyclopedia.fields.image': 'Image',
  'encyclopedia.visibility': 'Visibility',
  'encyclopedia.public': 'Public',
  'encyclopedia.private': 'Private',
  'encyclopedia.container': 'Container',
  'encyclopedia.container.desc':
    'Make this entry a container for a new group of entries. This will hide it from categories listing.',
  'encyclopedia.entry.name': 'Name of the entry',
  'encyclopedia.summary': 'Summary',
  'encyclopedia.summary.desc': 'This is a summary that will be the only initial information displayed on the reader.',
  'encyclopedia.parent': 'Parent entry',
  'encyclopedia.related': 'Related entries',
  'encyclopedia.errors.tags': 'You can only have 10 tags per entry.',
  'encyclopedia.field.private': 'Private field',
  'encyclopedia.ft.indev': 'This option is in development.',
  'encyclopedia.connections.remove': 'Remove connection',
  'encyclopedia.connections.extra': 'Extra information',
  'encyclopedia.connections.existing': 'Existing entry',
  'encyclopedia.connections.existing.abbr': 'EE', // abbreviation for Existing Entry

  // List of all genres
  'genre.scifi': 'Science Fiction',
  'genre.fantasy': 'Fantasy',
  'genre.adventure': 'Adventure',
  'genre.poetry': 'Poetry',
  'genre.comedy': 'Comedy',
  'genre.drama': 'Drama',
  'genre.nonfiction': 'Non-fiction',
  'genre.romance': 'Romance',
  'genre.satire': 'Satire',
  'genre.tragedy': 'Tragedy',
  'genre.crimi': 'Crimi',
  'genre.historical': 'Historical fiction',
  'genre.horror': 'Horror',
  'genre.mystery': 'Mystery',
  'genre.thriller': 'Thriller',
  'genre.western': 'Western',
  'genre.memoir': 'Memoir',
  'genre.biography': 'Biography',
  'genre.steampunk': 'Steampunk',
  'genre.mythology': 'Mythology',
  'genre.fairytale': 'Fairy tale',

  // Licenses
  // https://creativecommons.org/share-your-work/licensing-types-examples/licensing-examples/
  'licenses.about': 'About licenses',
  'licenses.more': 'More information',
  'licenses.legal': 'Legal document',
  'licenses.name.cc-by': 'Creative Commons Attribution 4.0',
  'licenses.cc-by':
    'This license lets others distribute, remix, tweak, and build upon your work, even commercially, as long as they credit you for the original creation. This is the most accommodating of licenses offered. Recommended for maximum dissemination and use of licensed materials.',
  'licenses.name.cc-by-sa': 'Creative Commons Attribution-ShareAlike 4.0',
  'licenses.cc-by-sa':
    'This license lets others remix, tweak, and build upon your work even for commercial purposes, as long as they credit you and license their new creations under the identical terms. This license is often compared to “copyleft” free and open source software licenses. All new works based on yours will carry the same license, so any derivatives will also allow commercial use. This is the license used by Wikipedia, and is recommended for materials that would benefit from incorporating content from Wikipedia and similarly licensed projects.',
  'licenses.name.cc-by-nd': 'Creative Commons Attribution-NoDerivs 4.0',
  'licenses.cc-by-nd':
    'This license allows for redistribution, commercial and non-commercial, as long as it is passed along unchanged and in whole, with credit to you.',
  'licenses.name.cc-by-nc': 'Creative Commons Attribution-NonCommercial 4.0',
  'licenses.cc-by-nc':
    'This license lets others remix, tweak, and build upon your work non-commercially, and although their new works must also acknowledge you and be non-commercial, they don’t have to license their derivative works on the same terms.',
  'licenses.name.cc-by-nc-sa': 'Creative Commons Attribution-NonCommercial-ShareAlike 4.0',
  'licenses.cc-by-nc-sa':
    'This license lets others remix, tweak, and build upon your work non-commercially, as long as they credit you and license their new creations under the identical terms.',
  'licenses.name.cc-by-nc-nd': 'Creative Commons Attribution-NonCommercial-NoDerivs 4.0',
  'licenses.cc-by-nc-nd':
    'This license is the most restrictive of our six main licenses, only allowing others to download your works and share them with others as long as they credit you, but they can’t change them in any way or use them commercially.',
  'licenses.name.lu-c': 'Literary Universe Copyrights',
  'licenses.lu-c':
    'Standard full copyrights license that allows you to sell publish your work as you like and have your rights to it protected. This license also gives you the option to sell your stories on Literary Universe.',
  'licenses.name.cc0': 'No Rights Reserved - CC0 1.0',
  'licenses.cc0':
    'Put your work into public domain. In contrast to CC’s licenses that allow copyright holders to choose from a range of permissions while retaining their copyright, CC0 empowers yet another choice altogether – the choice to opt out of copyright and database protection, and the exclusive rights automatically granted to creators – the “no rights reserved” alternative to our licenses.',

  'library.add': 'Add to library',
  'library.remove': 'Remove from library',
  'library.bought': 'Bought stories',
  'library.stories': 'Followed stories',
  'library.universes': 'Followed universe',

  'homepage.welcome': 'Welcome to Literary Universe!',
  'homepage.read': 'Read',
  'homepage.explore': 'Explore',
  'homepage.create': 'Create',
  'homepage.read.desc':
    "Enjoy a great reading experience with access to details of the stories' universe adjacent to the story text, without the need to leave the story window.",
  'homepage.explore.desc':
    'Stories are not the only way to explore the literary universes. Each universe has its own page where you can explore all the minutia in the universe encyclopedia, see all the stories in the universe or explore what other fans have written.',
  'homepage.create.desc':
    'Create your own stories and universes via our editor. Build and manage your ever expanding universes. We offer an expanding toolset, from a great story editor, through a great encyclopedia to management of translations of your stories and universe!',
  'homepage.begin': 'Begin your journey!',
  'homepage.itisfree': 'It is free!',

  'about.title': 'About Literary Universe',
  'about.desc': 'History, secrets and humans behind Literary Universe.',
  'about.text.1':
    'Literary Universe is designed both for writers and for the avid reader. Writers can use the site to write original works through the workshop button in the dashboard menu. This will give you access to the main editor and encyclopedia functions which primarily focus on organizing all aspects of your personal story universe into one page. The social aspects allow authors to broadcast their work and develop a following, as well as to interact more directly if they chose with their readers.',
  'about.text.2':
    'Readers can use the site primarily to read new works and follow authors but also to help edit pre-published stories if given permission by the writer. Being a reader on Literary Universe is a whole new reading experience, having access to all the background information on the same page as the main story gives you insight into the mind of the author like never before.',
  'about.text.3':
    'The future for Literary Universe involves creating a marketplace for authors to sell their work and adding community features to enhance author and reader communication through blogs and forums. Writer’s tools will be added over time, with over a dozen currently either in development or on the board. Our ultimate goal is to enhance the experiences of writers and readers through providing more innovative use of the internet medium.',
  'about.text.4': 'We hope that you join us as we explore what the internet medium can do for creative writing!',
  'about.team': 'The team',
  'about.history': 'History',
  'about.CEO': 'Chief Executive Officer',
  'about.CTO': 'Chief Technology Officer',
  'about.scott':
    "Scott became interested in creative writing in his early years and to this day is an avid reader. As someone who has always wanted to write his own book Scott became interested in Literary Universe when Jan Dvorak approached him with the idea for Literary Universe while they were in college. Scott has been been a part of Jan's development team since its inception and created the name for the site, among other notable contributions. Scott manages the business side of Literary Universe to allow Jan to focus on technological development.",
  'about.jan':
    'Jan is the founder, visionary and technological brain behind Literary Universe. As a writer of large literary universes, Jan had always found it difficult to write stories from a technical and readability point of view that would not compromise the reading experience. As such, Jan decided to pursue his studies in web development to create an application that would make it easy to write stories in large universes.',
  'about.history.text':
    "In 2010 Jan started at Rochester Institute of Technology to learn more about web development in order to be able to build a creative writing site. This materialized in 2013 when the first proof of concept was presented at Imagine RIT. Jan continued his studies and in 2016 a new version of the app was created as a Master's Capstone Project. The project continued in fall 2016 and further developed into what you see today.",

  copyrights: 'Copyrights',
  'copyrights.desc': 'The full text of Literary Universe Copyrights Agreement.',
  'privacy.desc': 'Full legal text of Privacy Policy of Literary Universe.',
  'guidelines.desc': 'Community Guidelines of Literary Universe.',
  'tos.desc': 'Full legal text of Terms of Service of Literary Universe.',

  'plans.desc': 'Description of plans and features of Literary Universe.',
  'plans.title': 'Get more out of Literary Universe!',
  'plans.text': `Literary Universe offers  basic functionality for free. If you are avid reader or a creator you might find our advance membership more to your liking.`,
  'plans.faq.basicsPriced': 'Why has the free membership so few things?',
  'plans.faq.justification': `Here at Literary Universe we value your privacy and intellectual property. As such we don't use your data to sell adds or provide them to other companies. We don't provide any adds of our own either (we don't want any distractions). This means that we have to build many things on our own. This takes a lot of time and is expensive to run. So we have established the free membership as a small preview of Literary Universe with multiple membership tiers to accommodate everyone's needs.`, // TODO expand
  'plans.limits': 'Limits',
  'plans.features': 'Features',
  'plans.account.visitor': 'Visitor',
  'plans.account.visitor.desc': 'Initial trial account, to try things out.',
  'plans.account.explorer': 'Explorer',
  'plans.account.explorer.desc': 'For hobbyist & friends.',
  'plans.account.initiate': 'Initiate',
  'plans.account.initiate.desc': 'For beginner creators & readers.',
  'plans.account.adventurer': 'Adventurer',
  'plans.account.adventurer.desc': 'For dedicated creators & our supporters.',
  'plans.account.storyteller': 'Storyteller',
  'plans.account.storyteller.desc': 'For the most creative and dedicated.',
  'plans.unlimited': 'Unlimited',
  'plans.price': 'Price',
  'plans.price.free': 'FREE',
  'plans.price.monthly': 'a month',
  'plans.price.annually': 'annually',
  'plans.price.perMonth': ' / month',
  'plans.price.perYear': ' / year',
  'plans.development': 'In development',
  'plans.feature.scratchpad.pads': `{num, plural,
    one {1 pad}
    other {# pads}
  }`,
  'plans.limits.universes': 'Universes',
  'plans.limits.scratchpadPads': 'Scratchpad pads',
  'plans.limits.maxCollaborators': 'Collaborators per project',
  'plans.feature.encCustomFields': 'Customizable encyclopedia fields on an entry',
  'plans.feature.encAdvCategories': 'More encyclopedia categories',
  'plans.feature.scratchpad': 'Scratchpad',
  'plans.feature.library': 'Library',
  'plans.feature.blog': 'Personal & universe blogs',
  'plans.feature.customBlogTheme': 'Customizable blog themes',
  'plans.feature.advanceStats': 'Advance statistics',
  'plans.feature.challenges': 'Writing challenges',
  'plans.feature.newFeaturesVote': 'Vote on new features',
  'plans.feature.newFeaturesSuggest': 'Propose new features',

  'nanowrimo.full': 'National Novel Writing Month',
  'nanowrimo.site': 'NaNoWriMo official site',
  'nanowrimo.settings': 'NaNoWriMo account',
  'nanowrimo.username': 'NaNoWriMo username',
  'nanowrimo.key': 'Secret key',
  'nanowrimo.key.get': 'Get your NaNoWriMo key.',
  'nanowrimo.key.get.notice': 'You need to be logged in to see it.',
  'nanowrimo.ongoing': 'is in full swing! {countdown} more days to go!',
  'nanowrimo.startsin': `will start in {countdown, plural,
      one {1 day}
      other {# days}
    }! Get ready!`,
  'nanowrimo.isover': 'NaNoWriMo is over. See you next year!',
  'nanowrimo.select': 'Designate this story for NaNoWriMo.',
  'nanowrimo.baseline':
    'When NaNoWriMo starts it will take the current wordcount and use it as a baseline from which any additional words will be taken as part of NaNoWriMo.',
  'nanowrimo.victory': 'Congratulation! You won NaNoWriMo!',
  'nanowrimo.challenge': 'NaNoWriMo challenge',
  'nanowrimo.description': 'The challenge is to write a novel of {words, number} words during November.',
  'nanowrimo.error.usernotfound': 'Username has not been found on the NaNoWriMo servers.',
  'nanowrimo.error.nobook': 'No book has been found. Please make sure you have created your book on NaNoWriMo.',
  'nanowrimo.error.wordcount':
    'Unable to set wordcount on NaNoWrimo, please double check your credentials and try again.',
  'nanowrimo.connected': 'You have designated this story for NaNoWriMo.',
  'nanowrimo.connected.other': 'You have already connected another story.',

  'common.challenges': 'Challenges',
  'challenges.wordcount': 'Word count',
  'challenges.wordcount.desc': 'Set yourself a goal of how many words you want to write this month for his story.',
  'challenges.wordcount.select': 'How many words do you want to challenge yourself to?',
  'challenges.start': 'Start challenge',
  'challenges.report': 'Report',
  'challenges.victory': 'Congratulations! You have completed this challenge.',
  'challenges.defeat': "Sadly you didn't complete this challenge.",
  'challenges.baseline': 'The current wordcount for this story is {wordcount}, this will be the starting point.',

  // for beta only
  'beta.notice':
    'Welcome to Literary Universe BETA. This is a public preview and as such the app is still work in progress. This means that you can still expect errors and unfinished features. If you encounter an error or something not working please let us know and please be patient while we get get everything in place.',
  'beta.thanks': 'Thank you for your support!',
  'scratchpad.about': 'Your notes and ideas accessible anywhere on the site.',

  // added 2016-11-02
  'challenges.current': 'Current challenges',
  'challenges.wordcount.goal': 'Target word count',
  'challanges.wordcount.dailygoal': 'Target daily word count',
  'challenges.wordcount.today': 'Today written',
  'challenges.wordcount.total': 'Total words written',
  'challenges.wordcount.remaining': 'Words remaining',
  'challanges.wordcount.daysleft': 'Days remaining',
  'challanges.wordcount.currentDay': 'Current day',
  'challenges.wordcount.average': 'Average words per day',
  'challanges.wordcount.finishOn': 'At current speed you will finish on',
  'challanges.wordcount.finishOnTime': 'Words to write daily to finish on time',
  'challenges.wordcount.graph.day': 'Day {day}',

  // added 2016-11-06
  'common.feedback': 'Feedback',
  'feedback.home': 'Help center',
  'feedback.bugs': 'Issues',
  'feedback.bugs.desc': 'Did you encounter an error or something else that is wrong or out of place. Let us know here!',
  'feedback.features': 'Ideas & Proposals',
  'feedback.features.desc': 'Have ideas for new features or how to make the site better? Let us know!',
  'feedback.help': 'Help & Tutorials',
  'feedback.help.desc': 'How do you _____? Go here to find the answers.',
  'feedback.desc': 'Welcome to our help and resolution center!',

  // added 2016-11-11
  'feedback.open': 'Open',
  'feedback.closed': 'Closed',
  'feedback.accepted': 'Accepted',
  'feedback.inprogress': 'In progress',
  'feedback.completed': 'Completed',
  'feedback.fixed': 'Fixed',
  'feedback.new.bugs': 'Report new issue',
  'feedback.new.features': 'Suggest a new feature',
  'feedback.lang.nosupport': 'Your current language is not supported for feedback, please write in English. Thank you!',
  'feedback.new.thanks': 'Thank you for the notice! We will look into it shorty.',
  'common.createdon': 'Created on ',

  // added 2016-11-14
  // account types
  premium: 'Premium',
  admin: 'Admin',

  // added 2016-11-17
  'pm.send': 'Send',

  // added 2016-11-19
  'enc.newField': 'New field',

  // added 2016-11-25
  'workshop.collaborators.language.add': 'Create a new translation',
  'workshop.translations.stories': 'Translations - stories',
  'workshop.translations.universes': 'Translations - universes',

  // added 2016-12-03
  goodbye: 'Thank you! See you again!',

  // added 2016-12-29
  'workshop.revisions.beta.none': 'No revisions at this time.',
  'reader.asidetoggle': 'Toggle aside information',
  'workshop.translation.original': 'Original:',
  'workshop.translation.original.title': 'Original title:',
  'workshop.translation.original.description': 'Original description:',
  'workshop.translation.original.cover': 'Original cover',
  'workshop.translation.original.tags': 'Original tags',
  'workshop.cover.alt': 'cover image',

  // added 2016-12-31
  'common.saved': 'Saved!',
  'common.saving': 'Saving...',

  // added 2017-01-03
  'workshop.translation.updatedOrig': 'Last update of original: {updatedAt, date, long} {updatedAt, time, medium}',
  'workshop.translation.updatedTrs': 'Last update of translation: {updatedAt, date, long} {updatedAt, time, medium}',
  'workshop.translation.revisionOrig':
    'Last revision {revision, number}, of original: {updatedAt, date, long} {updatedAt, time, medium}',
  'workshop.translation.revisionTrs':
    'Last revision {revision, number}, of translation: {updatedAt, date, long} {updatedAt, time, medium}',

  // added 2017-01-11
  'encyclopedia.translation.title': 'Welcome to {universe} universe translation!',
  'encyclopedia.translation.desc':
    'This encyclopedia interface is used for translation into {language}. Choose existing entries in the list on the left to begin their translation.',

  // added 2017-01-23
  'common.friends': 'Friends',

  // added 2017-01-27
  'lang.orig': 'Original language',
  'lang.orig.plus': 'Original language - {language}',

  // added 2017-02-12
  'reader.accessibility': 'Toggle accessibility',

  // added 2017-02-20
  'chapter.translation.notYet': 'This chapter has not yet been translated.',

  // added 2017-03-28
  buy: 'Buy',
  'premium.buy': 'Buy Premium',
  'payments.add': 'Add payment option',
  'payments.add.btn': 'Add as a payment option',
  'payments.disclaimer':
    'Payment information and processing is done via Braintree by PayPal. We do not keep any credit card or bank account information on our servers.',
  'buy.payment.optionsSelect': 'Select payment option',
  'payments.card.number': 'Card number',
  'payments.card.expire': 'Valid Thru',
  'payments.card.cvv': 'CVV',

  // added 2017-03-31
  'payments.card.info': '{cardType} card, ending in {ending}',
  'payments.none': 'No saved payment options found.',
  'payments.added': 'New payment option has been successfully added.',
  'premium.info':
    'You are currently subscribed. Next payment of {amount, number, usd} is scheduled for {nextPayment, date, short}.', // TODO fix to include currency dynamically

  // added 2017-04-04
  'payments.delete.confirm': 'Are you sure you want to delete {cardType}, ending in {ending}?',
  confirm: 'Confirm',
  cancel: 'Cancel',
  'premium.edit': 'Edit subscription',
  'premium.cancel': 'Cancel subscription renewal',

  // added 2017-04-14
  'premium.info.cancelled':
    'Your subscription has been cancelled. Premium features will remain available till {endDate, date, short}. We are sad to see you go. We wish you the best and hope that we will see you again soon!',
  processing: 'Processing...',

  // added 2017-04-26
  'workshop.collaborators.premium': `Get Premium to be able to add {type, select,
    collaborator {collaborators}
    beta {beta readers}
    translator {translators}
  }.`,

  // added 2017-05-20
  'homepage.intro': 'Explore and create literally universes & great stories.',
  'homepage.explanation':
    'Literary Universe is a creative writing and reading platform, focused on complex literary universe.  We aim to provide interconnected tools to write complex story universes and stories, and a great experience for fans and readers in exploring those universe.',

  // added 2017-05-28
  'encyclopedia.welcome.totalEntries': `There {totalEntries, plural, 
    zero {are no entries}
    one {is one entry}
    other {are # entries}
  } in this universe.`,

  // added 2017-06-10
  'blog.noneMsg': `You currently don't have {type, select,
    org {any blog}
    universe {a blog for your universe}
    user {a blog}
  }.`,
  'blog.create': 'Create a new blog',
  'blog.settings': `{type, select,
    org {Blog}
    universe {Universe page}
    user {Blog}
  } settings`,
  'blog.description': 'Blog introduction',
  'blog.theme': 'Theme',
  'blog.theme.info':
    'Adjusting the theme you will be able to change the look of the page. This feature is not ready at this time.',
  'blog.posts.total': `There {total, plural,
    zero {are no posts}
    one {is one post}
    other {are # posts}
  } in this blog.`,
  'blog.post.create': 'Create a new post',
  'blog.post.update': 'Editing {title}',
  'blog.post.text': 'Post text',
  'common.slug': 'SEO friendly address',
  'blog.slug.explained': 'Nice looking url to the post. Avoid using special characters except for "-".',
  'blog.publicView': 'Public view',

  // added 2017-07-08
  'blog.post.notfound': 'Blog post was not found',
  'blog.lists.works': `{type, select,
    universes {Universes}
    stories {Standalone stories}
    fanfiction {Fan Fiction work}
  }`,
  'blog.lists.stories.disclaimer':
    'Listed here are standalone stories, if story was written as a part of a universe then it will be listed on the universe page.',

  // added 2017-10-04
  'common.settings.payments': 'Payments Settings',
  'common.nodata': 'No data',

  // added 2017-11-25
  'error.title': 'An error has occurred. We apologize for the inconvenience.',

  // added 2018-02-04
  'workshop.collaborators.requests.sent': 'Sent requests',
  'workshop.collaborators.requests.invite': `You have been invited to become {role, select,
    beta {beta reader}
    translator {translator}
    collaborator {collaborator}
  } for the following:`,

  // added 2018-02-05
  'pm.conversations.unreadCount': `You have {count, plural,
    zero {no unread conversations}
    one {one unread conversation}
    other {# unread conversations}
  }.`,

  // added 2018-02-06
  'workshop.collaborators.requests.dashboard': `You have been invited to collaborate on {count, plural,
    zero {no work}
    one {one literary work}
    other {# literary works}
  }.`,

  // added 2018-02-26, updated 2018-11-29
  'settings.socialConnectTitle': 'Connect with your accounts from other services',
  'settings.socialDisconnect': 'Disconnect',
  'settings.socialConnect': 'Connect',
  'settings.loginWith': 'Login with {service}',
  'settings.connectTo': 'Connect to {service}',

  // added 2018-02-28
  'settings.export.title': 'Export Data',
  'settings.export.explain':
    'This will allow you to get all your data that is stored in our database in a json format.',
  'settings.export.submit': 'Export data',
  'settings.delete.title': 'Delete Account',
  'settings.delete.warning': `WARNING: By deleting your account you loose access to this account and
    there is no way of getting it back. Note that this might not automatically delete your published works,
    comments, etc. Please refer to Terms of Service for details.`,
  'settings.delete.confirm': 'Just to make sure. Are you sure you want to delete your account?',
  'settings.delete.cancel': `I don't want to delete my account`,
  'settings.delete.submit': 'Delete my account',
  'settings.legal.title': 'User consent agreements',
  'settings.legal.explained': 'Here you can manage your agreement to various legal documents.',
  'settings.name.private': 'Name will be private',
  'settings.emailSubscriptions.title': 'E-mail notifications settings',
  'settings.emailSubscriptions.explain': 'Select which e-mail notifications do you want to receive from us.',
  'settings.emailSubscriptions.newsletter': 'Occasional newsletter',

  // added 2018-04-20
  'common.offlineStatus': 'You are currently offline.',

  // added 2018-04-22
  'legal.modal.intro':
    'Sorry to interrupt. But before we let you go any further, we are legally bound, to make sure that you are aware of and agree with our Terms of Service, Privacy Policy and Copyright Agreement.',
  'legal.modal.agree': 'I Agree',
  'legal.modal.disagree': 'I Disagree',
  'legal.modal.register': `You won't see this anymore if you register.`,
  // added 2018-04-27
  'legal.modal.goToSettings': 'Go to your settings',
  'settings.profile': 'Profile settings',
  'settings.account': 'Account settings',
  // added 2018-04-30
  'settings.legal.export.download': 'Download Your data',
  'settings.legal.export.gathering': 'Gathering Your data... This might take a while.',
  male: 'Male',
  female: 'Female',
  'settings.gender.title': 'Your gender',
  'settings.gender.usage':
    'This information will remain private. We use this data for platform analytics and in anonymized analytics to creators when you read their stories.',
  'settings.age.title': 'Your age',
  'settings.age.explicit': 'Show explicit content (rating age 21+)',
  'settings.age.usage':
    'This information will remain private. We are legally obliged to inquire about your age. We use this data for platform analytics, displaying content based on ratings and in anonymized analytics to creators when you read their stories.',
  'settings.country.title': 'Your country',
  'settings.country.usage':
    'We are legally obliged to inquire about your country in order to respond to government inquiries. We use this data for platform analytics and in anonymized analytics to creators when you read their stories. If you wish you can display this information on your profile.',
  'settings.country.public': 'Display your country publicly',
  'settings.country.select': 'Select your country',
  // added 2018-05-02
  'workshop.collaborators.language.added': 'Language added',
  'challenges.underway': 'This challenge is already underway.',
  'challenges.targetWords': 'Total targeted word count',
  'challenges.startDate': 'Start date',
  'challenges.endDate': 'End date',
  // added 2018-05-18
  'common.legal.effectiveAt': 'Effective from',
  // added 2018-05-24
  select: 'Please select',
  'legal.modal.fewmore': 'Few more things...',
  'legal.modal.finish': 'Finish',
  // added 2018-05-30
  'writer.wordcount': '{characters, number} characters, {words, number} words',
  // added 2018-06-05
  'common.statusFailed': 'Failed to connect to the server.',
  'common.statusConnecting': 'Attempting to connect to the server... ({count, number})',
  // added 2018-06-13
  'slug.checking': 'Checking...',
  'slug.failed': 'This address already exists.',
  'slug.success': 'This address is available!',
  // added 2018-07-08
  'notVerified.msg': 'Your account e-mail is not verified.',
  'notVerified.verify': 'Please verify your e-mail.',
  // added 2018-07-11
  'workshop.story.noChaptersFound': 'No chapters found.',
  // added 2018-07-12
  unknown: 'unknown',
  'stats.age.groups': 'Age groups',
  'stats.age.range': 'Age range',
  'stats.age.to12': 'To 12',
  'stats.age.12to17': '12 to 17',
  'stats.age.18to20': '18 to 20',
  'stats.age.21to29': '21 to 29',
  'stats.age.30to39': '30 to 39',
  'stats.age.40to49': '40 to 49',
  'stats.age.50to64': '50 to 64',
  'stats.age.65to84': '64 to 84',
  'stats.age.above85': 'Above 85',
  'stats.section.aggregate': 'Aggregate statistics',
  'stats.section.chapter': 'Chapter statistics',
  'stats.readers.title': 'About your readers',
  'stats.gender.title': 'Gender',
  'stats.view.table': 'Table view',
  'stats.view.pie': 'Pie Chart view',
  'stats.view.bar': 'Bar Chart view',
  'stats.view.chart': 'Chart view',
  'stats.table.total': 'Total',
  // added 2018-07-19
  'stats.timeline.title': 'Timeline',
  // added 2018-07-21
  'stats.timeline.dateStart': 'Statistics begin at',
  'stats.timeline.dateEnd': 'Statistics end at',
  // added 2018-09-21
  'workshop.fanfic.needUniverseInLibrary':
    'There are many universes out there. Please add the ones you want to write in into your library first so that we can find them.',
  'workshop.fanfic.findUniverse': 'Go find an amazing universe!',
  // added 2018-09-30
  'setting.export.submit': 'Export data',
  'setting.delete.submit': 'Delete Account',
  'common.legal.guidelines': 'Community Guidelines',

  // added 2018-12-30
  'settings.emailSubscriptions.newsletterTech': 'Occasional newsletter from our developers',
  'settings.emailSubscriptions.newsletterFeatures': 'Information about new features',
  'settings.emailNotifications.title': 'Notifications',
  'settings.emailNotifications.pm': 'New messages',
  'settings.emailNotifications.newChapters': 'New chapters',

  // added 2019-01-12
  'errorLoading.title': 'Error during page load',
  'errorLoading.explained':
    'An error has occurred while the page was loading. We apologize for the inconvenience. Please retry accessing the page again. If the problem persists, please let us known.',
  'errorLoading.retry': 'Retry!',
  'errorLoading.takingLong': 'This is taking a long time...',
  // added 2019-01-13
  'settings.resetPasswordEmailSend': 'We have send you instructions on how to reset your password to your e-mail.',
  // added 2019-02-12
  'pm.form.minimumParticipants': 'You need to choose a recipient.',
  'pm.form.maxParticipants': 'You can have maximum of 10 people in a conversation.',
  // added 2019-02-21
  'common.title': 'Title',
  // added 2019-03-24
  'workshop.encSettings': 'Encyclopedia settings',
  // added 2019-04-21
  'workshop.collaborators.removeUser': 'Remove user',
  'workshop.collaborators.cancelInvite': 'Cancel invite',
  // added 2019-04-22
  'workshop.universe.createFirstStory': 'Create the first story',
  // added 2019-05-05
  'workshop.storylines': 'Storylines',
  'workshop.scenesManager': 'Scenes Manager',
  'common.timelines': 'Timelines',
  // added 2019-05-06
  'universe.authors.title.meta': '{title} authors',
  // added 2019-06-27
  'workshop.collaborators.addRoleForLang': 'Add {role} for {language}',
  // added 2019-09-16
  'settings.theme.title': 'Site theming',
  'settings.theme.label': 'Site theme',
  'settings.theme.light': 'Light',
  'settings.theme.dark': 'Dark',
  // added 2019-10-04
  'common.legal.gdpr': 'GDPR',
  'common.legal.gdpr.long': 'General Data Protection Regulation',
  'gdpr.title': 'GDPR Compliance',
  'gdpr.desc': 'Literary Universe is compliant with the EU GDPR directives.',
  'gdpr.compliant': 'Literary Universe is GDPR Compliant',
  'gdpr.compliant.text':
    'Literary Universe has implemented various updates and changes to its codebase in preparation for GDPR enforcement on May 25th 2018.',
  'common.legal.dmca': 'DMCA',
  'common.legal.dmca.long': 'Digital Millennium Copyright Act',
  'dmca.title': 'Digital Millennium Copyright Act (DMCA) Policy',
  'dmca.subtitle': 'Copyright Dispute Policy',
  'dmca.step1.title': 'Procedure for Reporting Copyright Infringements.',
  'dmca.step2.title': 'Once Proper Bona Fide Infringement Notification is Received by the Designated Agent.',
  'dmca.step3.title': 'Procedure to Supply a Counter-Notice to the Designated Agent.',
  'dmca.desc': '',
  'writer.undo': 'Undo',
  'writer.redo': 'Redo',
  'writer.ul': 'Unordered list',
  'writer.ol': 'Ordered list',
  'writer.blockquote': 'Quote',
  'writer.link': 'Insert a link',
  'writer.image': 'Insert an image',
  // Added 2019-10-16
  'editor.placeholder.link': 'Enter URL...',
  'editor.placeholder.connection': 'Search for encyclopedia entry...',
  // Added 2019-10-20
  'editor.saved.beta': 'New revision for Beta readers created!',
  'editor.saved.public': 'New version published!',
  'editor.saving.error.content': "Couldn't get the story content",
  // Added 2019-10-21
  goodbyeForever:
    "We are sorry to see see you go. Was it something we did? Please let us know if that is the case. Either way we wish you the best in your future endeavors and hopefully we'll meet again! Live long and prosper!",
  'goodbyeForever.feedback': 'Let us know what we can do better',
  // Added 2019-10-23
  'encyclopedia.settings.title': 'Encyclopedia settings',
  'encyclopedia.settings.categoriesDesc': 'Turn on and off categories which you want to use in your encyclopedia.',
  'encyclopedia.settings.introText': 'Welcome message to be displayed after universe description.',
  // Added 2019-10-27
  'common.edit': 'Edit',
  'encyclopedia.fields.placeholder': 'Field name',
  'encyclopedia.fields.delete': 'Delete field',
  // Added 2019-11-01
  'encyclopedia.timeOption.fictionalDate': 'Fictional date',
  'encyclopedia.timeOption.fictionalTime': 'Fictional time',
  'encyclopedia.timeOption.fictionalDateTime': 'Fictional date time',
  'encyclopedia.timeOption.date': 'Date',
  'encyclopedia.timeOption.time': 'Time',
  'encyclopedia.timeOption.dateTime': 'Date and time',
  // Added 2019-11-03
  'blogs.lu': 'Official Literary Universe blogs',
  'blogs.featured': 'Featured blogs',
  'blogs.new': 'Newest blogs',
  'blogs.title': 'Blogs of Literary Universe',
  'blogs.description': 'Listing of blogs on the Literary Universe platform.',
  'blogs.visit': 'Visit blog',
  'common.publish': 'Publish',
  'common.publishAt': 'Publication date and time',
  'stats.likeCount': '# of likes',
  'stats.language.title': 'Language spoken'
};

/* eslint-enable max-len */
