/**
 * @authors Jan Dvorak
 */
export default {
    'email.enrollAccount.subject': 'இலக்கண உலகத்திற்கு அழைப்பு {username}',
    'email.enrollAccount.message': `வணக்கம் {username}\n\n
    நாங்கள் உங்களை இலக்கண உலகத்தில் அழைத்துக்கொண்டுள்ளோம்! நீங்கள் அனைத்து வசதிகளையும் பெறுவதற்கு நம்புகிறோம்! தயவுசெய்து எங்களுடன் முன்னாள் படைப்பை உருவாக்குவதில் சேர்க்கவும்!
    உங்கள் கணக்கை செயல்படுத்த, தயவுசெய்து கீழே உள்ள இணைப்பை கிளிக் செய்யவும்:\n\n{url}`,
    'email.resetPassword.subject': 'இலக்கண உலகத்தில் கடவுச்சொல் மீளமைப்பு',
    'email.resetPassword.message': `வணக்கம் {username}!\n\n உங்கள் கணக்குக்கான கடவுச்சொல் மீளமைப்பு கேட்டுக்கொண்டுள்ளோம்.
        தயவுசெய்து கீழே உள்ள இணைப்பை பின்பற்றி உங்கள் கடவுச்சொல்லை மீளமைக்கவும்:\n\n{url}`,
    'email.verifyEmail.subject': 'இலக்கண உலகத்தில் மின்னஞ்சல் சரிபார்க்கப்பட்டது',
    'email.verifyEmail.message': 'வணக்கம் {username}!\n\n தயவுசெய்து கீழே உள்ள இணைப்பை கிளிக் செய்து உங்கள் மின்னஞ்சல் முகவரியை சரிபார்க்கவும்:\n\n{url}',
    // New html email keys
    'email.salutation': 'வணக்கம் {username},',
    'email.welcome': 'இலக்கண உலகத்தில் வரவேற்பு செய்தல்!',
    'email.signature': 'மிக்க வாழ்த்துக்கள்,<br />இலக்கண உலகத்தின் அணி',
    // Enrollment
    'email.enrollAccount.welcome': 'வரவேற்புக்கு வரவேற்பு',
    'email.enrollAccount.messageHtml': 'We would like to invite you to Literary Universe! We went ahead and prepared a personal account for you where you can access all features of Literary Universe. Please join us in creating the next generation of creative writing and reading!',
    'email.enrollAccount.button': 'உங்கள் கணக்குக்கு அணுகுக',
    'email.enrollAccount.signature': 'We are looking forward to seeing you,<br />Literary Universe team',
    // Reset password
    'email.resetPassword.messageHtml': 'We have received a request to reset your password for your account. Please click on the button below to continue the process. If you haven\'t made this request, you can ignore this e-mail, but it might be a good time to review your security settings.',
    'email.resetPassword.button': 'கடவுச்சொல் மீளமைப்பு',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'We are happy to have you on board! Please click the button below to verify this e-mail address.',
    'email.verifyEmail.button': 'இந்த மின்னஞ்சல் முகவரியை சரிபார்க்க',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'உங்கள் கணக்கு மேம்படுத்தப்பட்டுள்ளது',
    'email.adminUpgrade.message': `உங்கள் கணக்கை மேம்படுத்துகின்றோம் {plan, select,
    explorer {ஆய்வாளர்}
    adventurer {சாயாளர்}
    storyteller {கதைப்பாட்டாளர்}
    other {}
  } அடிப்படைக்கு அடுக்கு இருக்கும் {days} நாட்கள்.\n\nமகிழுங்கள்,\nஇலக்கண உலகு அணி`,
    'email.adminUpgrade.messageHtml': `உங்கள் கணக்கை மேம்படுத்துகின்றோம் {plan, select,
    explorer {ஆய்வாளர்}
    adventurer {சாயாளர்}
    storyteller {கதைப்பாட்டாளர்}
    other {}
  } அடிப்படைக்கு அடுக்கு இருக்கும் {days} நாட்கள். மகிழுங்கள்!`,
    'email.verification': 'மின்னஞ்சல் சரிபார்ப்பு',
    'email.verifying': 'உங்கள் மின்னஞ்சலை சரிபார்க்கின்றோம். இது ஒரு குறிப்பு மட்டம் எடுக்கும்...',
    'email.verified': 'அற்புதமான செய்தி! உங்கள் மின்னஞ்சல் சரிபார்க்கப்பட்டுள்ளது!',
    // The Way (Author Level Up)
    'theWay.levelUp.emailSubject': 'Congratulations! You\'ve reached Author Level {level} on Literary Universe!',
    'theWay.levelUp.emailTitle': 'Congratulations! You\'ve reached Author Level {level}!',
    'theWay.levelUp.emailIntro': 'Your dedication to the craft of writing has been rewarded!',
    'theWay.levelUp.emailGenre': 'You have achieved level {level} in the {genre} genre.',
    'theWay.levelUp.emailContinue': 'Continue your journey and unlock more achievements on The Way of the Author.',
    'theWay.levelUp.viewDashboard': 'View Your Dashboard',
    // Notifications - General content comment
    'email.notifications.contentComment.subject': 'New comment on your content',
    'email.notifications.contentComment.title': 'New comment on your {contentType}',
    'email.notifications.contentComment.details': 'Title: {contentTitle} • From: {commenterName}',
    'email.notifications.contentComment.cta': 'View comment',
    // Notifications - Beta reader comment
    'email.notifications.betaComment.subject': 'New beta reader feedback',
    'email.notifications.betaComment.title': 'New beta reader feedback',
    'email.notifications.betaComment.details': 'Story: {storyTitle}{chapter} • From: {commenterName}',
    'email.notifications.betaComment.cta': 'View feedback',
    // Notifications - New message
    'email.notifications.newMessage.subject': 'You have a new message',
    'email.notifications.newMessage.title': 'You have a new message',
    'email.notifications.newMessage.details': 'From: {senderName}',
    'email.notifications.newMessage.cta': 'View message',
    // Notifications - Chapter published
    'email.notifications.chapterPublished.subject': 'New chapter published',
    'email.notifications.chapterPublished.title': 'New chapter published',
    'email.notifications.chapterPublished.details': 'Story: {storyTitle} • Chapter: {chapterTitle}{suffix}',
    'email.notifications.chapterPublished.cta': 'Open chapter',
    // Notifications - First story created
    'email.notifications.firstStory.subject': 'Your first story is here!',
    'email.notifications.firstStory.title': 'Your first story is live!',
    'email.notifications.firstStory.intro': 'Amazing start! Keep writing and growing your world with helpful guidance on The Way of the Author.',
    'email.notifications.firstStory.details': 'Story: {storyTitle}',
    'email.notifications.firstStory.ctaResources': 'Continue on The Way of the Author',
    'email.notifications.firstStory.ctaStory': 'Open your story',
    // Notifications - First universe created
    'email.notifications.firstUniverse.subject': 'Congratulations on your first universe!',
    'email.notifications.firstUniverse.title': 'Congratulations on creating your first universe!',
    'email.notifications.firstUniverse.intro': 'Your worldbuilding journey begins. Here are some resources to help you take the next steps.',
    'email.notifications.firstUniverse.details': 'Universe: {universeName}',
    'email.notifications.firstUniverse.ctaResources': 'Explore The Way of the Author',
    'email.notifications.firstUniverse.ctaUniverse': 'Open your universe',
    // Notifications - First chapter published for a story
    'email.notifications.firstChapterPublished.subject': 'Your first chapter is published!',
    'email.notifications.firstChapterPublished.title': 'Your story\'s first chapter is published!',
    'email.notifications.firstChapterPublished.intro': 'Share your work, gather feedback, and keep the momentum going.',
    'email.notifications.firstChapterPublished.details': 'Story: {storyTitle} • Chapter: {chapterTitle}',
    'email.notifications.firstChapterPublished.ctaChapter': 'Open chapter',
    'email.notifications.firstChapterPublished.ctaStory': 'View story',
    // Notifications - Story finished
    'email.notifications.storyFinished.subject': 'Congratulations on finishing your story!',
    'email.notifications.storyFinished.title': 'You did it — your story is finished!',
    'email.notifications.storyFinished.intro': 'Celebrate this milestone! Consider publishing, sharing, or submitting your story to reach more readers.',
    'email.notifications.storyFinished.details': 'Story: {storyTitle}',
    'email.notifications.storyFinished.cta': 'View your story',
    // Notifications - Fan club new subscriber
    'email.notifications.newFanSubscriber.subject': 'New fan club subscriber',
    'email.notifications.newFanSubscriber.title': 'You have a new fan club subscriber!',
    'email.notifications.newFanSubscriber.details': 'Subscriber: {subscriberName}',
    'email.notifications.newFanSubscriber.cta': 'View fan club',
    // Notifications - Fan club subscription ended
    'email.notifications.fanUnsubscribed.subject': 'A member left your fan club',
    'email.notifications.fanUnsubscribed.title': 'A member left your fan club',
    'email.notifications.fanUnsubscribed.intro': 'We wanted to let you know about a recent change. Consider sharing updates or exclusive content to boost engagement.',
    'email.notifications.fanUnsubscribed.details': 'Former member: {name}',
    'email.notifications.fanUnsubscribed.cta': 'Open fan club',
    // Notifications - Friend request
    'email.notifications.friendRequest.subject': 'New friend request',
    'email.notifications.friendRequest.title': 'New friend request',
    'email.notifications.friendRequest.details': 'From: {requesterName}',
    'email.notifications.friendRequest.cta': 'Review request',
    // Notifications - Collaboration invitation
    'email.notifications.collabInvite.subject': 'Collaboration invitation',
    'email.notifications.collabInvite.title': 'You have a collaboration invitation',
    'email.notifications.collabInvite.details': 'Inviter: {inviterName} • Role: {role} • Target: {targetType} — {targetTitle}',
    'email.notifications.collabInvite.cta': 'Review invitation',
    // Notifications - Organization invitation
    'email.notifications.orgInvite.subject': 'Invitation to join an organization',
    'email.notifications.orgInvite.title': 'You\'re invited to join {orgName}',
    'email.notifications.orgInvite.details': 'Inviter: {inviterName}',
    'email.notifications.orgInvite.cta': 'Review invitation',
    // Notifications - Daily digest
    'email.notifications.dailyDigest.subject': 'Your daily updates',
    'email.notifications.dailyDigest.title': 'Your daily updates',
    'email.notifications.dailyDigest.intro': 'Here is what happened today.',
    'email.notifications.dailyDigest.cta': 'View all updates',
    'email.notifications.dailyDigest.empty': 'No updates today.',
    // Notifications - Followed author posted a new blog
    'email.notifications.followedBlogPost.subject': 'New blog post from an author you follow',
    'email.notifications.followedBlogPost.title': '{authorName} posted a new blog',
    'email.notifications.followedBlogPost.details': 'Title: {postTitle}',
    'email.notifications.followedBlogPost.cta': 'Read post',
    // Notifications - Followed author published new work
    'email.notifications.followedNewWork.subject': 'New work from an author you follow',
    'email.notifications.followedNewWork.title': '{authorName} published a new {workType}',
    'email.notifications.followedNewWork.details': 'Title: {title}',
    'email.notifications.followedNewWork.cta': 'View'
};