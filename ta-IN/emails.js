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
    'email.signature': 'Sincerely,<br>Literary Universe team</br>',
    'email.footer.settingsHtml': 'You can change your email settings in <link>your account settings</link>.',
    // Enrollment
    'email.enrollAccount.welcome': 'வரவேற்புக்கு வரவேற்பு',
    'email.enrollAccount.messageHtml': 'உங்களை \'லிட்டரரி யுனிவர்ஸ்\'ஸுக்கு அழைக்க விரும்புகிறோம்! உங்களுக்காக ஒரு தனிப்பட்ட கணக்கை நாங்கள் உருவாக்கியுள்ளோம், அதன் மூலம் \'லிட்டரரி யுனிவர்ஸ்\'-இன் அனைத்து அம்சங்களையும் நீங்கள் அணுகலாம். படைப்பாற்றல் மிக்க எழுத்து மற்றும் வாசிப்பின் அடுத்த தலைமுறையை உருவாக்க எங்களுடன் இணையுங்கள்!',
    'email.enrollAccount.button': 'உங்கள் கணக்குக்கு அணுகுக',
    'email.enrollAccount.signature': 'We are looking forward to seeing you,<br>Literary Universe team</br>',
    // Reset password
    'email.resetPassword.messageHtml': 'உங்கள் கணக்கிற்கான கடவுச்சொல்லை மீட்டமைக்க ஒரு கோரிக்கை எங்களுக்கு வந்துள்ளது. இந்தச் செயல்முறையைத் தொடர, கீழே உள்ள பொத்தானைச் சொடுக்கவும். நீங்கள் இந்தக் கோரிக்கையைச் செய்யவில்லை என்றால், இந்த மின்னஞ்சலைப் புறக்கணிக்கலாம், ஆனால் உங்கள் பாதுகாப்பு அமைப்புகளை மறுஆய்வு செய்ய இது ஒரு நல்ல நேரமாக இருக்கலாம்.',
    'email.resetPassword.button': 'கடவுச்சொல் மீளமைப்பு',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'நீங்கள் எங்களுடன் இணைந்ததில் நாங்கள் மகிழ்ச்சியடைகிறோம்! இந்த மின்னஞ்சல் முகவரியைச் சரிபார்க்க, கீழே உள்ள பொத்தானைக் கிளிக் செய்யவும்.',
    'email.verifyEmail.button': 'இந்த மின்னஞ்சல் முகவரியை சரிபார்க்க',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'உங்கள் கணக்கு மேம்படுத்தப்பட்டுள்ளது',
    'email.adminUpgrade.message': `உங்கள் கணக்கை மேம்படுத்துகின்றோம் {plan, select,
    explorer {ஆய்வாளர்}
    adventurer {சாயாளர்}
    storyteller {கதைப்பாட்டாளர்}
    other {}
  } அடிப்படைக்கு அடுக்கு இருக்கும் {days} நாட்கள்.\n\nமகிழுங்கள்,\nஇலக்கண உலகு அணி`,
    'email.adminUpgrade.messageHtml': `We have upgraded your account to {plan, select,
    explorer {Explorer}
    adventurer {Adventurer}
    storyteller {Storyteller}
    other {}
  } tier for the next {days, number} days. Enjoy!`,
    'email.verification': 'மின்னஞ்சல் சரிபார்ப்பு',
    'email.verifying': 'உங்கள் மின்னஞ்சலை சரிபார்க்கின்றோம். இது ஒரு குறிப்பு மட்டம் எடுக்கும்...',
    'email.verified': 'அற்புதமான செய்தி! உங்கள் மின்னஞ்சல் சரிபார்க்கப்பட்டுள்ளது!',
    // The Way (Author Level Up)
    'theWay.levelUp.emailSubject': 'Congratulations! You\'ve reached Author Level {level, number} on Literary Universe!',
    'theWay.levelUp.emailTitle': 'Congratulations! You\'ve reached Author Level {level, number}!',
    'theWay.levelUp.emailIntro': 'எழுதுவதில் உங்கள் அர்ப்பணிப்புக்கு வெகுமதி கிடைத்துள்ளது!',
    'theWay.levelUp.emailGenre': 'You have achieved level {level, number} in the {genre} genre.',
    'theWay.levelUp.emailContinue': 'உங்கள் பயணத்தைத் தொடருங்கள் மற்றும் \'எழுத்தாளனின் வழி\'யில் மேலும் சாதனைகளைத் திறக்கவும்.',
    'theWay.levelUp.viewDashboard': 'உங்கள் டாஷ்போர்டைப் பார்க்கவும்',
    // Notifications - General content comment
    'email.notifications.contentComment.subject': 'உங்கள் உள்ளடக்கத்தில் புதிய கருத்து',
    'email.notifications.contentComment.title': 'உங்கள் மீதான புதிய கருத்து {contentType}',
    'email.notifications.contentComment.details': 'தலைப்பு: {contentTitle} • இருந்து: {commenterName}',
    'email.notifications.contentComment.cta': 'கருத்தைப் பார்க்கவும்',
    // Notifications - Beta reader comment
    'email.notifications.betaComment.subject': 'புதிய பீட்டா வாசகர் கருத்து',
    'email.notifications.betaComment.title': 'புதிய பீட்டா வாசகர் கருத்து',
    'email.notifications.betaComment.details': 'கதை: {storyTitle}{chapter} • இருந்து: {commenterName}',
    'email.notifications.betaComment.cta': 'கருத்துகளைப் பார்க்கவும்',
    // Notifications - New message
    'email.notifications.newMessage.subject': 'உங்களுக்கு ஒரு புதிய செய்தி உள்ளது',
    'email.notifications.newMessage.title': 'உங்களுக்கு ஒரு புதிய செய்தி உள்ளது',
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
    // Notifications - First story published (with level 1 achievement)
    'email.notifications.firstStoryPublished.subject': '🎉 Congratulations! Your first story is published and you reached Author Level 1!',
    'email.notifications.firstStoryPublished.title': '🎉 Your Journey Begins!',
    'email.notifications.firstStoryPublished.intro': 'Congratulations on publishing your first story! This is a momentous milestone in your creative journey.',
    'email.notifications.firstStoryPublished.levelAchievement': '🌟 You have reached Author Level 1 on The Way of the Author! This is just the beginning of an incredible adventure in storytelling.',
    'email.notifications.firstStoryPublished.encouragement': 'Every great author started with their first published work. Keep writing, keep growing, and let your creativity flourish. The Literary Universe community is here to support you every step of the way.',
    'email.notifications.firstStoryPublished.ctaTheWay': 'Explore The Way of the Author',
    'email.notifications.firstStoryPublished.ctaStory': 'View Your Published Story',
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
    'email.notifications.collabInvite.subject': '{inviterName} "{targetTitle}"-இல் உங்களை ஒத்துழைக்க அழைத்தேன் {role}',
    'email.notifications.collabInvite.title': 'இணைந்து பணியாற்ற உங்களை அழைக்கிறோம்!',
    'email.notifications.collabInvite.details': 'அழைத்தவர்: {inviterName} • பங்கு: {role} • {targetType}: {targetTitle}',
    'email.notifications.collabInvite.cta': 'Review invitation',
    // Notifications - Organization invitation
    'email.notifications.orgInvite.subject': '{inviterName} "{orgName} "-இல் சேர உங்களை அழைக்கிறோம்',
    'email.notifications.orgInvite.title': '{orgName} -இல் இணைய உங்களை அழைக்கிறோம்!',
    'email.notifications.orgInvite.details': 'அழைப்பு விடுத்தவர்: {inviterName}',
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
    'email.notifications.followedNewWork.cta': 'View',
    // Story notification emails
    'email.story.newComment.subject': 'New comment on "{storyTitle}"',
    'email.story.newComment.body': '{commenterName} left a comment on your story "{storyTitle}": {commentText}',
    'email.story.betaComment.subject': 'New beta feedback on "{storyTitle}"',
    'email.story.betaComment.body': '{commenterName} provided beta feedback on "{storyTitle}": {commentText}',
    'email.story.collaboratorAccepted.subject': 'New team member for "{storyTitle}"',
    'email.story.collaboratorAccepted.body': '{collaboratorName} has accepted your invitation to collaborate on "{storyTitle}" as a {role}.',
    'email.story.milestone.subject': 'Congratulations! Milestone reached on "{storyTitle}"',
    'email.story.milestone.body': 'Great news! Your chapter "{chapterTitle}" from "{storyTitle}" has reached {count} {milestone}. Keep up the great work!',
    'email.story.betaRevision.subject': 'New beta revision available: "{chapterTitle}"',
    'email.story.betaRevision.body': '{authorName} has published a new beta revision of "{chapterTitle}" from "{storyTitle}". Your feedback would be greatly appreciated!',
    'email.story.newChapter.subject': 'New chapter available: "{storyTitle}"',
    'email.story.newChapter.body': '{authorName} has published a new chapter of "{storyTitle}": "{chapterTitle}". Happy reading!',
    // Universe notification emails
    'email.universe.newStory.subject': 'New story in universe: "{storyTitle}"',
    'email.universe.newStory.body': '{authorName} added a new story "{storyTitle}" to a universe you\'re following. Discover new adventures!',
    'email.universe.collaboratorChange.subject': 'Universe collaboration update',
    'email.universe.collaboratorChange.body': 'There has been a change in the collaboration team for a universe you\'re involved with.',
    'email.universe.update.subject': 'Universe updated',
    'email.universe.update.body': 'A universe you\'re following has been updated with new content.',
    'email.universe.comment.subject': 'New comment on universe',
    'email.universe.comment.body': '{commenterName} commented on a universe you\'re following: "{commentText}"',
    // Blog notification emails
    'email.blog.newPost.subject': 'New blog post: "{postTitle}"',
    'email.blog.newPost.body': '{authorName} published a new blog post "{postTitle}" on a blog you\'re following.',
    'email.blog.comment.subject': 'New comment on blog post: "{postTitle}"',
    'email.blog.comment.body': '{commenterName} commented on the blog post "{postTitle}": "{commentText}"',
    'email.blog.update.subject': 'Blog updated',
    'email.blog.update.body': 'A blog you\'re following has been updated.',
    // General comment notification emails
    'email.comment.general.subject': 'New comment on "{contentTitle}"',
    'email.comment.general.body': '{commenterName} commented on "{contentTitle}": "{commentText}"',
    'email.comment.reply.subject': 'Reply to your comment',
    'email.comment.reply.body': '{replierName} replied to your comment on "{contentTitle}": "{replyText}"',
    'email.comment.like.subject': 'Your comment was liked',
    'email.comment.like.body': '{likerName} liked your comment. Keep engaging!',
    // Content-specific comment notification emails
    'email.comment.fanArt.subject': 'New comment on fan art: "{contentTitle}"',
    'email.comment.fanArt.body': '{commenterName} commented on your fan art "{contentTitle}": "{commentText}"',
    'email.comment.event.subject': 'New comment on event: "{contentTitle}"',
    'email.comment.event.body': '{commenterName} commented on the event "{contentTitle}": "{commentText}"',
    'email.comment.revision.subject': 'New comment on revision',
    'email.comment.revision.body': '{commenterName} commented on your revision: "{commentText}"',
    'email.comment.feedback.subject': 'New comment on feedback',
    'email.comment.feedback.body': '{commenterName} commented on your feedback issue: "{commentText}"',
    // Welcome email
    'email.welcome.subject': 'Welcome to Literary Universe!'
};