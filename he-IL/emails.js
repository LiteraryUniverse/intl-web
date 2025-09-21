/**
 * @authors Jan Dvorak
 */
export default {
    'email.enrollAccount.subject': 'הזמנה ליקום הספרותי עבור {username}',
    'email.enrollAccount.message': `שלום {username}\n\n
    מעוניינים להזמינך ליקום הספרותי! יצרנו עבורך חשבון אישי מיוחד בו תוכל לגשת לכל התכונות של יקום הספרותי! בוא איתנו ליצור את הדור הבא של כלי כתיבה וקריאה יצירתיים!
    כדי להפעיל את החשבון שלך, פשוט לחץ על הקישור למטה:\n\n{url}`,
    'email.resetPassword.subject': 'איפוס סיסמה ליקום הספרותי',
    'email.resetPassword.message': `שלום {username}!\n\n קיבלנו בקשה לאיפוס הסיסמה שלך עבור החשבון שלך.
        אנא עקוב אחר הקישור למטה כדי לאפס את הסיסמה שלך:\n\n{url}`,
    'email.verifyEmail.subject': 'אימות דואר אלקטרוני ליקום הספרותי',
    'email.verifyEmail.message': 'שלום {username}!\n\n אנא אמת את כתובת הדואר האלקטרוני שלך על ידי לחיצה על הקישור למטה:\n\n{url}',
    // New html email keys
    'email.salutation': 'שלום {username},',
    'email.welcome': 'ברוך הבא ליקום הספרותי!',
    'email.signature': 'בברכה,<br />צוות יקום הספרותי',
    // Enrollment
    'email.enrollAccount.welcome': 'ברוך הבא לסירוב!',
    'email.enrollAccount.messageHtml': 'We would like to invite you to Literary Universe! We went ahead and prepared a personal account for you where you can access all features of Literary Universe. Please join us in creating the next generation of creative writing and reading!',
    'email.enrollAccount.button': 'גש לחשבון שלך',
    'email.enrollAccount.signature': 'We are looking forward to seeing you,<br />Literary Universe team',
    // Reset password
    'email.resetPassword.messageHtml': 'We have received a request to reset your password for your account. Please click on the button below to continue the process. If you haven\'t made this request, you can ignore this e-mail, but it might be a good time to review your security settings.',
    'email.resetPassword.button': 'איפוס סיסמה',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'We are happy to have you on board! Please click the button below to verify this e-mail address.',
    'email.verifyEmail.button': 'אמת כתובת דוא"ל זו',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'חשבונך עודכן',
    'email.adminUpgrade.message': `שדרגנו את החשבון שלך ל {plan, select,
    explorer {חוקר}
    adventurer {הרפתקן}
    storyteller {סופר}
    other {}
  } לשלב הבא במשך {days} ימים.\n\nתהנה,\nצוות היקום הספרותי`,
    'email.adminUpgrade.messageHtml': `שדרגנו את חשבונך לדרגת {plan, select,
    explorer {Explorer}
    adventurer {Adventurer}
    storyteller {Storyteller}
    other {}
  } למשך {days, number} הימים הבאים. תהנה!`,
    'email.verification': 'אימות דואר אלקטרוני',
    'email.verifying': 'מאמתים את הדואר האלקטרוני שלך. זה ייקח רק רגע...',
    'email.verified': 'חדשות טובות! הדואר האלקטרוני שלך אומת בהצלחה!',
    // The Way (Author Level Up)
    'theWay.levelUp.emailSubject': 'מזל טוב! הגעת לרמת מחבר {level, number} ב-Literary Universe!',
    'theWay.levelUp.emailTitle': 'מזל טוב! הגעת לרמת מחבר {level, number}!',
    'theWay.levelUp.emailIntro': 'המסירות שלך למלאכת הכתיבה זכתה לתגמול!',
    'theWay.levelUp.emailGenre': 'השגת את הרמה {level, number} בז\'אנר {genre} .',
    'theWay.levelUp.emailContinue': 'המשך במסעך ופתח הישגים נוספים ב-The Way of the Author.',
    'theWay.levelUp.viewDashboard': 'הצג את לוח המחוונים שלך',
    // Notifications - General content comment
    'email.notifications.contentComment.subject': 'תגובה חדשה על התוכן שלך',
    'email.notifications.contentComment.title': 'תגובה חדשה על {contentType}',
    'email.notifications.contentComment.details': 'כותרת: {contentTitle} • מקור: {commenterName}',
    'email.notifications.contentComment.cta': 'הצג תגובה',
    // Notifications - Beta reader comment
    'email.notifications.betaComment.subject': 'משוב חדש מקוראי בטא',
    'email.notifications.betaComment.title': 'משוב חדש מקוראי בטא',
    'email.notifications.betaComment.details': 'סיפור: {storyTitle}{chapter} • מאת: {commenterName}',
    'email.notifications.betaComment.cta': 'הצג משוב',
    // Notifications - New message
    'email.notifications.newMessage.subject': 'יש לך הודעה חדשה',
    'email.notifications.newMessage.title': 'יש לך הודעה חדשה',
    'email.notifications.newMessage.details': 'מאת: {senderName}',
    'email.notifications.newMessage.cta': 'הצג הודעה',
    // Notifications - Chapter published
    'email.notifications.chapterPublished.subject': 'פרק חדש פורסם',
    'email.notifications.chapterPublished.title': 'פרק חדש פורסם',
    'email.notifications.chapterPublished.details': 'סיפור: {storyTitle} • פרק: {chapterTitle}{suffix}',
    'email.notifications.chapterPublished.cta': 'פתח פרק',
    // Notifications - First story created
    'email.notifications.firstStory.subject': 'הסיפור הראשון שלך כאן!',
    'email.notifications.firstStory.title': 'הסיפור הראשון שלך עלה לאוויר!',
    'email.notifications.firstStory.intro': 'התחלה מדהימה! המשך לכתוב ולהרחיב את עולמך בעזרת ההדרכה המועילה ב-The Way of the Author.',
    'email.notifications.firstStory.details': 'סיפור: {storyTitle}',
    'email.notifications.firstStory.ctaResources': 'המשך בדרך של המחבר',
    'email.notifications.firstStory.ctaStory': 'פתח את הסיפור שלך',
    // Notifications - First universe created
    'email.notifications.firstUniverse.subject': 'מזל טוב על היקום הראשון שלך!',
    'email.notifications.firstUniverse.title': 'מזל טוב על יצירת היקום הראשון שלך!',
    'email.notifications.firstUniverse.intro': 'מסע בניית העולם שלך מתחיל. להלן כמה משאבים שיעזרו לך להתקדם לשלבים הבאים.',
    'email.notifications.firstUniverse.details': 'יקום: {universeName}',
    'email.notifications.firstUniverse.ctaResources': 'גלה את דרכו של הסופר',
    'email.notifications.firstUniverse.ctaUniverse': 'פתח את היקום שלך',
    // Notifications - First chapter published for a story
    'email.notifications.firstChapterPublished.subject': 'הפרק הראשון שלך פורסם!',
    'email.notifications.firstChapterPublished.title': 'הפרק הראשון של הסיפור שלך פורסם!',
    'email.notifications.firstChapterPublished.intro': 'שתפו את עבודתכם, אספו משוב והמשיכו את המומנטום.',
    'email.notifications.firstChapterPublished.details': 'סיפור: {storyTitle} • פרק: {chapterTitle}',
    'email.notifications.firstChapterPublished.ctaChapter': 'פתח פרק',
    'email.notifications.firstChapterPublished.ctaStory': 'הצג סיפור',
    // Notifications - Story finished
    'email.notifications.storyFinished.subject': 'מזל טוב על סיום הסיפור שלך!',
    'email.notifications.storyFinished.title': 'הצלחת — הסיפור שלך מוכן!',
    'email.notifications.storyFinished.intro': 'חגגו את האירוע החשוב הזה! שקלו לפרסם, לשתף או להגיש את הסיפור שלכם כדי להגיע ליותר קוראים.',
    'email.notifications.storyFinished.details': 'סיפור: {storyTitle}',
    'email.notifications.storyFinished.cta': 'צפה בסיפור שלך',
    // Notifications - Fan club new subscriber
    'email.notifications.newFanSubscriber.subject': 'מנוי חדש למועדון המעריצים',
    'email.notifications.newFanSubscriber.title': 'יש לך מנוי חדש במועדון המעריצים!',
    'email.notifications.newFanSubscriber.details': 'מנוי: {subscriberName}',
    'email.notifications.newFanSubscriber.cta': 'הצג מועדון מעריצים',
    // Notifications - Fan club subscription ended
    'email.notifications.fanUnsubscribed.subject': 'חבר עזב את מועדון המעריצים שלך',
    'email.notifications.fanUnsubscribed.title': 'חבר עזב את מועדון המעריצים שלך',
    'email.notifications.fanUnsubscribed.intro': 'רצינו ליידע אותך על שינוי אחרון. שקול לשתף עדכונים או תוכן בלעדי כדי להגביר את המעורבות.',
    'email.notifications.fanUnsubscribed.details': 'חבר לשעבר: {name}',
    'email.notifications.fanUnsubscribed.cta': 'מועדון מעריצים פתוח',
    // Notifications - Friend request
    'email.notifications.friendRequest.subject': 'בקשת חברות חדשה',
    'email.notifications.friendRequest.title': 'בקשת חברות חדשה',
    'email.notifications.friendRequest.details': 'מאת: {requesterName}',
    'email.notifications.friendRequest.cta': 'בקשת סקירה',
    // Notifications - Collaboration invitation
    'email.notifications.collabInvite.subject': 'הזמנה לשיתוף פעולה',
    'email.notifications.collabInvite.title': 'יש לך הזמנה לשיתוף פעולה',
    'email.notifications.collabInvite.details': 'מזמין: {inviterName} • תפקיד: {role} • יעד: {targetType} — {targetTitle}',
    'email.notifications.collabInvite.cta': 'הזמנה לסקירה',
    // Notifications - Organization invitation
    'email.notifications.orgInvite.subject': 'הזמנה להצטרף לארגון',
    'email.notifications.orgInvite.title': 'אתם מוזמנים להצטרף ל- {orgName}',
    'email.notifications.orgInvite.details': 'מזמין: {inviterName}',
    'email.notifications.orgInvite.cta': 'הזמנה לסקירה',
    // Notifications - Daily digest
    'email.notifications.dailyDigest.subject': 'העדכונים היומיים שלך',
    'email.notifications.dailyDigest.title': 'העדכונים היומיים שלך',
    'email.notifications.dailyDigest.intro': 'הנה מה שקרה היום.',
    'email.notifications.dailyDigest.cta': 'הצג את כל העדכונים',
    'email.notifications.dailyDigest.empty': 'אין עדכונים היום.',
    // Notifications - Followed author posted a new blog
    'email.notifications.followedBlogPost.subject': 'פוסט חדש בבלוג של מחבר שאתה עוקב אחריו',
    'email.notifications.followedBlogPost.title': '{authorName} פרסם בלוג חדש',
    'email.notifications.followedBlogPost.details': 'כותרת: {postTitle}',
    'email.notifications.followedBlogPost.cta': 'קרא את הפוסט',
    // Notifications - Followed author published new work
    'email.notifications.followedNewWork.subject': 'יצירה חדשה של סופר שאתה עוקב אחריו',
    'email.notifications.followedNewWork.title': '{authorName} פרסם חדש {workType}',
    'email.notifications.followedNewWork.details': 'כותרת: {title}',
    'email.notifications.followedNewWork.cta': 'הצג',
    // Story notification emails
    'email.story.newComment.subject': 'תגובה חדשה על "{storyTitle}"',
    'email.story.newComment.body': '{commenterName} השארת תגובה על הסיפור שלך "{storyTitle}": {commentText}',
    'email.story.betaComment.subject': 'משוב חדש על גרסת הבטא של "{storyTitle}"',
    'email.story.betaComment.body': '{commenterName} סיפק משוב בטא על "{storyTitle}": {commentText}',
    'email.story.collaboratorAccepted.subject': 'חבר צוות חדש ל"{storyTitle}"',
    'email.story.collaboratorAccepted.body': '{collaboratorName} קיבל את הזמנתך לשתף פעולה ב"{storyTitle}" כ {role}.',
    'email.story.milestone.subject': 'מזל טוב! אבן דרך הושגה ב"{storyTitle}"',
    'email.story.milestone.body': 'חדשות מצוינות! הפרק שלך "{chapterTitle}" מתוך "{storyTitle}" הגיע ל- {count} {milestone}. המשך בעבודה המצוינת!',
    'email.story.betaRevision.subject': 'גרסת בטא חדשה זמינה: "{chapterTitle}"',
    'email.story.betaRevision.body': '{authorName} פרסם גרסת בטא חדשה של "{chapterTitle}" מתוך "{storyTitle}". נשמח לקבל את המשוב שלכם!',
    'email.story.newChapter.subject': 'פרק חדש זמין: "{storyTitle}"',
    'email.story.newChapter.body': '{authorName} פרסם פרק חדש של "{storyTitle}": "{chapterTitle}". קריאה מהנה!',
    // Universe notification emails
    'email.universe.newStory.subject': 'סיפור חדש ביקום: "{storyTitle}"',
    'email.universe.newStory.body': '{authorName} הוספה סיפור חדש "{storyTitle}" ליקום שאתה עוקב אחריו. גלה הרפתקאות חדשות!',
    'email.universe.collaboratorChange.subject': 'עדכון שיתוף פעולה ביקום',
    'email.universe.collaboratorChange.body': 'חלה שינוי בצוות שיתוף הפעולה של יקום שאתה מעורב בו.',
    'email.universe.update.subject': 'היקום עודכן',
    'email.universe.update.body': 'היקום שאתה עוקב אחריו עודכן בתוכן חדש.',
    'email.universe.comment.subject': 'תגובה חדשה על היקום',
    'email.universe.comment.body': '{commenterName} הגיב על יקום שאתה עוקב אחריו: "{commentText}"',
    // Blog notification emails
    'email.blog.newPost.subject': 'פוסט חדש בבלוג: "{postTitle}"',
    'email.blog.newPost.body': '{authorName} פרסם פוסט חדש בבלוג "{postTitle}" בבלוג שאתה עוקב אחריו.',
    'email.blog.comment.subject': 'תגובה חדשה בבלוג: "{postTitle}"',
    'email.blog.comment.body': '{commenterName} הגיב על הפוסט בבלוג "{postTitle}": "{commentText}"',
    'email.blog.update.subject': 'הבלוג עודכן',
    'email.blog.update.body': 'בלוג שאתה עוקב אחריו עודכן.',
    // General comment notification emails
    'email.comment.general.subject': 'תגובה חדשה על "{contentTitle}"',
    'email.comment.general.body': '{commenterName} הגיב על "{contentTitle}": "{commentText}"',
    'email.comment.reply.subject': 'תגובה לתגובתך',
    'email.comment.reply.body': '{replierName} הגיב לתגובתך על "{contentTitle}": "{replyText}"',
    'email.comment.like.subject': 'התגובה שלך זכתה לאהדה',
    'email.comment.like.body': '{likerName} אהבתי את התגובה שלך. המשך להשתתף!',
    // Content-specific comment notification emails
    'email.comment.fanArt.subject': 'תגובה חדשה על יצירת אמנות של מעריץ: "{contentTitle}"',
    'email.comment.fanArt.body': '{commenterName} הגיב על יצירת האמנות שלך "{contentTitle}": "{commentText}"',
    'email.comment.event.subject': 'תגובה חדשה על האירוע: "{contentTitle}"',
    'email.comment.event.body': '{commenterName} הגיב על האירוע "{contentTitle}": "{commentText}"',
    'email.comment.revision.subject': 'הערה חדשה על התיקון',
    'email.comment.revision.body': '{commenterName} הגיב על התיקון שלך: "{commentText}"',
    'email.comment.feedback.subject': 'תגובה חדשה על משוב',
    'email.comment.feedback.body': '{commenterName} הגיב על הבעיה שהעלית: "{commentText}"',
    // Welcome email
    'email.welcome.subject': 'ברוכים הבאים ליקום הספרותי!'
};