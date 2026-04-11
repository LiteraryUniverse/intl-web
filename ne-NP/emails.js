/**
 * @authors Jan Dvorak
 */
export default {
    'email.enrollAccount.subject': 'कविता बिश्वमा स्वागत गर्न आमन्त्रण! {username}',
    'email.enrollAccount.message': `नमस्ते {username}\n\n
    हामीले तपाईंलाई कविता बिश्वमा आमन्त्रण गर्न चाहान्छौं! हामीले तपाईंको लागि एक विशेष व्यक्तिगत खाता सिर्जना गरेका छौं जहाँ तपाईंले कविता बिश्वका सबै सुविधाहरूमा पहुँच प्राप्त गर्न सक्नुहुन्छ! कृपया हामीले सृजनात्मक लेखन र पठन उपकरणको अगाडीको पीडीएफ बनाउँदा हामीसँग साझा होइनुहोस्!
    तपाईंको खाता सक्रिय गर्नका लागि, कृपया तलको लिंकमा क्लिक गर्नुहोस्:\n\n{url}`,
    'email.resetPassword.subject': 'कविता बिश्वको पासवर्ड रीसेट',
    'email.resetPassword.message': `नमस्ते {username}!\n\n हामीले तपाईंको खाताको पासवर्ड रिसेट गर्न अनुरोध प्राप्त गरेका छौं।
        कृपया तलको लिङ्कमा गएर आफ्नो पासवर्ड रिसेट गर्नुहोस्:\n\n{url}`,
    'email.verifyEmail.subject': 'कविता बिश्वको ईमेल प्रमाणिकरण',
    'email.verifyEmail.message': 'नमस्ते {username}!\n\n कृपया तपाईंको ईमेल ठेगाना प्रमाणित गर्नको लागि तलको लिंकमा क्लिक गर्नुहोस्:\n\n{url}',
    // New html email keys
    'email.salutation': 'नमस्ते {username},',
    'email.welcome': 'कविता बिश्वमा स्वागत छ!',
    'email.signature': 'Sincerely,<br>Literary Universe team</br>',
    'email.footer.settingsHtml': 'You can change your email settings in <link>your account settings</link>.',
    // Enrollment
    'email.enrollAccount.welcome': 'स्वागत छ',
    'email.enrollAccount.messageHtml': 'हामी तपाईंलाई लिटररी युनिभर्समा आमन्त्रित गर्न चाहन्छौं!   हामीले तपाईंको लागि व्यक्तिगत खाता तयार गरिसकेका छौं, जहाँ तपाईं लिटररी युनिभर्सका सबै सुविधाहरू प्रयोग गर्न सक्नुहुन्छ।   कृपया सिर्जनात्मक लेखन र पठनको अर्को पुस्ता सिर्जना गर्न हामीसँग सामेल हुनुहोस्!',
    'email.enrollAccount.button': 'तपाईंको खातामा पहुँच गर्नुहोस्',
    'email.enrollAccount.signature': 'We are looking forward to seeing you,<br>Literary Universe team</br>',
    // Reset password
    'email.resetPassword.messageHtml': 'हामीले तपाईंको खाताको पासवर्ड रिसेट गर्न अनुरोध प्राप्त गरेका छौं। कृपया प्रक्रिया जारी राख्न तलको बटनमा क्लिक गर्नुहोस्। यदि तपाईंले यो अनुरोध गर्नुभएको होइन भने, तपाईं यो इमेल बेवास्ता गर्न सक्नुहुन्छ, तर यो तपाईंको सुरक्षा सेटिङहरू समीक्षा गर्ने उपयुक्त समय हुन सक्छ।',
    'email.resetPassword.button': 'पासवर्ड रिसेट गर्नुहोस्',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'हामी तपाईंलाई टोलीमा पाउँदा खुसी छौं! कृपया यो इमेल ठेगाना प्रमाणित गर्न तलको बटनमा क्लिक गर्नुहोस्।',
    'email.verifyEmail.button': 'यो ईमेल ठेगाना सत्यापित गर्नुहोस्',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'तपाईंको खाता अपग्रेड गरिएको छ',
    'email.adminUpgrade.message': `हामीले तपाईंको खातालाई अपग्रेड गरेका छौं {plan, select,
    explorer {अन्वेषक}
    adventurer {भ्रमणकारी}
    storyteller {कथाकार}
    other {}
  } तहलाई अर्को {days} दिनहरूको लागि\n\nआनंद लिनुहोस्,\nLiterary Universe टोली`,
    'email.adminUpgrade.messageHtml': `We have upgraded your account to {plan, select,
    explorer {Explorer}
    adventurer {Adventurer}
    storyteller {Storyteller}
    other {}
  } tier for the next {days, number} days. Enjoy!`,
    'email.verification': 'ईमेल सत्यापन',
    'email.verifying': 'तपाईंको ईमेल सत्यापन गर्दैछ। यो केहि क्षण समय लिनेछ...',
    'email.verified': 'धेरै रमाइलो खबर! तपाईंको ईमेल सत्यापित भयो!',
    // The Way (Author Level Up)
    'theWay.levelUp.emailSubject': 'Congratulations! You\'ve reached Author Level {level, number} on Literary Universe!',
    'theWay.levelUp.emailTitle': 'Congratulations! You\'ve reached Author Level {level, number}!',
    'theWay.levelUp.emailIntro': 'लेखन कलाप्रतिको तपाईंको समर्पणले पुरस्कार पाएको छ!',
    'theWay.levelUp.emailGenre': 'You have achieved level {level, number} in the {genre} genre.',
    'theWay.levelUp.emailContinue': 'आफ्नो यात्रा जारी राख्नुहोस् र \'लेखकको मार्ग\'मा थप उपलब्धिहरू अनलक गर्नुहोस्।',
    'theWay.levelUp.viewDashboard': 'आफ्नो ड्यासबोर्ड हेर्नुहोस्',
    // Notifications - General content comment
    'email.notifications.contentComment.subject': 'तपाईंको सामग्रीमा नयाँ टिप्पणी',
    'email.notifications.contentComment.title': 'तपाईंको नयाँ टिप्पणी {contentType}',
    'email.notifications.contentComment.details': 'शीर्षक: {contentTitle} • बाट: {commenterName}',
    'email.notifications.contentComment.cta': 'टिप्पणी हेर्नुहोस्',
    // Notifications - Beta reader comment
    'email.notifications.betaComment.subject': 'नयाँ बीटा पाठकको प्रतिक्रिया',
    'email.notifications.betaComment.title': 'नयाँ बीटा पाठकको प्रतिक्रिया',
    'email.notifications.betaComment.details': 'कथा: {storyTitle}{chapter} • बाट: {commenterName}',
    'email.notifications.betaComment.cta': 'प्रतिक्रिया हेर्नुहोस्',
    // Notifications - New message
    'email.notifications.newMessage.subject': 'तपाईंको नयाँ सन्देश छ।',
    'email.notifications.newMessage.title': 'तपाईंको नयाँ सन्देश छ।',
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
    'email.notifications.collabInvite.subject': '{inviterName} तपाईंलाई "{targetTitle}" मा सहकार्य गर्न निम्तो दिइयो, को रूपमा {role}',
    'email.notifications.collabInvite.title': 'तपाईंलाई सहकार्य गर्न आमन्त्रित गरिएको छ!',
    'email.notifications.collabInvite.details': 'आमन्त्रित: {inviterName} • भूमिका: {role} • {targetType}: {targetTitle}',
    'email.notifications.collabInvite.cta': 'Review invitation',
    // Notifications - Organization invitation
    'email.notifications.orgInvite.subject': '{inviterName} तपाईंलाई "{orgName} " मा सामेल हुन आमन्त्रित गरियो।',
    'email.notifications.orgInvite.title': 'तपाईंलाई {orgName} मा सामेल हुन आमन्त्रित गरिएको छ!',
    'email.notifications.orgInvite.details': 'द्वारा आमन्त्रित: {inviterName}',
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