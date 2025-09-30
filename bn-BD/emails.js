/**
 * @authors Jan Dvorak
 */
export default {
    'email.enrollAccount.subject': 'সাহিত্যিক বিশ্বে আপনাকে আমন্ত্রণ! {username}',
    'email.enrollAccount.message': `হ্যালো {username}\n\n
    আমরা আপনাকে সাহিত্যিক বিশ্বে আমন্ত্রণ জানাতে চাই! আপনার জন্য আমরা একটি বিশেষ ব্যক্তিগত অ্যাকাউন্ট তৈরি করেছি যেখানে আপনি সাহিত্যিক বিশ্বের সমস্ত বৈশিষ্ট্য অ্যাক্সেস করতে পারবেন! অগ্রসর হতে আমাদের সাহিত্যিক লেখা এবং পঠন সরঞ্জামের পরবর্তী প্রজন্মকে সৃষ্টি করাতে আমাদের সঙ্গে যোগ দিন!
    আপনার অ্যাকাউন্ট সক্রিয় করতে, নিচের লিংকটি ক্লিক করুন:\n\n{url}`,
    'email.resetPassword.subject': 'সাহিত্যিক বিশ্ব পাসওয়ার্ড রিসেট করুন',
    'email.resetPassword.message': `হ্যালো {username}!\n\n আপনার অ্যাকাউন্টের পাসওয়ার্ড রিসেট করার জন্য আমরা একটি অনুরোধ পেয়েছি।
        আপনার পাসওয়ার্ড রিসেট করতে নিচের লিংকটি ফলো করুন:\n\n{url}`,
    'email.verifyEmail.subject': 'সাহিত্যিক বিশ্ব ইমেল যাচাই',
    'email.verifyEmail.message': 'হ্যালো {username}!\n\n দয়া করে আপনার ইমেল ঠিকানা যাচাই করতে নিচের লিংকটি ক্লিক করুন:\n\n{url}',
    // New html email keys
    'email.salutation': 'হ্যালো {username},',
    'email.welcome': 'সাহিত্যিক বিশ্বে স্বাগতম!',
    'email.signature': 'Sincerely,<br>Literary Universe team</br>',
    'email.footer.settingsHtml': 'You can change your email settings in <link>your account settings</link>.',
    // Enrollment
    'email.enrollAccount.welcome': 'স্বাগতম বোর্ডে',
    'email.enrollAccount.messageHtml': 'We would like to invite you to Literary Universe! We went ahead and prepared a personal account for you where you can access all features of Literary Universe. Please join us in creating the next generation of creative writing and reading!',
    'email.enrollAccount.button': 'আপনার অ্যাকাউন্ট অ্যাক্সেস করুন',
    'email.enrollAccount.signature': 'We are looking forward to seeing you,<br>Literary Universe team</br>',
    // Reset password
    'email.resetPassword.messageHtml': 'We have received a request to reset your password for your account. Please click on the button below to continue the process. If you haven\'t made this request, you can ignore this e-mail, but it might be a good time to review your security settings.',
    'email.resetPassword.button': 'পাসওয়ার্ড রিসেট করুন',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'We are happy to have you on board! Please click the button below to verify this e-mail address.',
    'email.verifyEmail.button': 'এই ইমেল ঠিকানা যাচাই করুন',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'আপনার অ্যাকাউন্ট আপগ্রেড করা হয়েছে',
    'email.adminUpgrade.message': `আমরা আপনার অ্যাকাউন্টটি আপগ্রেড করেছি {plan, select,
    explorer {এক্সপ্লোরার}
    adventurer {অ্যাডভেঞ্চার}
    storyteller {স্টোরিটেলার}
    other {}
  } টিয়ার পরবর্তী {days} দিনের জন্য।\n\nআনন্দ করুন,\nলিটারারি ইউনিভার্স টিম`,
    'email.adminUpgrade.messageHtml': `We have upgraded your account to {plan, select,
    explorer {Explorer}
    adventurer {Adventurer}
    storyteller {Storyteller}
    other {}
  } tier for the next {days, number} days. Enjoy!`,
    'email.verification': 'ইমেল যাচাইকরণ',
    'email.verifying': 'আপনার ইমেল যাচাই করা হচ্ছে। এটা কয়েকটা মুহূর্ত নিতে পারে...',
    'email.verified': 'সুবিধাপূর্ণ খবর! আপনার ইমেল যাচাই হয়েছে!',
    // The Way (Author Level Up)
    'theWay.levelUp.emailSubject': 'Congratulations! You\'ve reached Author Level {level, number} on Literary Universe!',
    'theWay.levelUp.emailTitle': 'Congratulations! You\'ve reached Author Level {level, number}!',
    'theWay.levelUp.emailIntro': 'Your dedication to the craft of writing has been rewarded!',
    'theWay.levelUp.emailGenre': 'You have achieved level {level, number} in the {genre} genre.',
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