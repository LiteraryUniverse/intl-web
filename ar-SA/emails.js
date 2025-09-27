/**
 * @authors Jan Dvorak
 */
export default {
    'email.enrollAccount.subject': 'دعوة لعالم الأدب لـ {username}',
    'email.enrollAccount.message': `مرحبًا {username}\n\n
    نود دعوتك للانضمام إلى عالم الأدب! لقد قمنا بإنشاء حساب شخصي خاص بك حيث يمكنك الوصول إلى جميع ميزات عالم الأدب! يرجى الانضمام إلينا في إبداع أدوات الكتابة والقراءة في الجيل القادم!
    لتفعيل حسابك، ما عليك سوى النقر على الرابط أدناه:\n\n{url}`,
    'email.resetPassword.subject': 'إعادة تعيين كلمة مرور عالم الأدب',
    'email.resetPassword.message': `مرحبًا {username}!\n\n تلقينا طلبًا لإعادة تعيين كلمة المرور الخاصة بحسابك.
        يرجى اتباع الرابط أدناه لإعادة تعيين كلمة المرور الخاصة بك:\n\n{url}`,
    'email.verifyEmail.subject': 'تحقق من البريد الإلكتروني لعالم الأدب',
    'email.verifyEmail.message': 'مرحبًا {username}!\n\n يرجى التحقق من عنوان بريدك الإلكتروني عن طريق النقر على الرابط أدناه:\n\n{url}',
    // New html email keys
    'email.salutation': 'مرحبا {username}،',
    'email.welcome': 'مرحبًا بك في عالم الأدب!',
    'email.signature': 'مع خالص التحية، فريق عالم الأدب<br />',
    'email.footer.settingsHtml': 'يمكنك تغيير إعدادات بريدك الإلكتروني في <a href="{link}">إعدادات حسابك</a>.',
    // Enrollment
    'email.enrollAccount.welcome': 'مرحبًا بك على متن السفينة',
    'email.enrollAccount.messageHtml': 'نود أن ندعوك إلى عالم الأدب! لقد تقدمنا وقمنا بإعداد حساب شخصي لك حيث يمكنك الوصول إلى جميع ميزات عالم الأدب. يرجى الانضمام إلينا في إنشاء الجيل القادم من الكتابة والقراءة الإبداعية!',
    'email.enrollAccount.button': 'الوصول إلى حسابك',
    'email.enrollAccount.signature': 'نحن نتطلع إلى رؤيتك،<br />فريق عالم الأدب فريق عالم الأدب',
    // Reset password
    'email.resetPassword.messageHtml': 'لقد تلقينا طلباً لإعادة تعيين كلمة المرور الخاصة بحسابك. يرجى النقر على الزر أدناه لمتابعة العملية. إذا لم تكن قد قدمت هذا الطلب، فيمكنك تجاهل هذا البريد الإلكتروني، ولكن قد يكون الوقت مناسبًا لمراجعة إعدادات الأمان الخاصة بك.',
    'email.resetPassword.button': 'إعادة تعيين كلمة المرور',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'يسعدنا انضمامك إلينا! يرجى النقر على الزر أدناه للتحقق من عنوان البريد الإلكتروني هذا.',
    'email.verifyEmail.button': 'التحقق من عنوان البريد الإلكتروني هذا',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'تمت ترقية حسابك',
    'email.adminUpgrade.message': `لقد قمنا بترقية حسابك إلى {plan, select,
    explorer {مستكشف}
    adventurer {مغامر ~ ~ مغامر}
    storyteller {راوي قصص}
    other {}
  } فئة {days} أيام القادمة.\n\nاستمتع،\nفريق الكون الأدبي`,
    'email.adminUpgrade.messageHtml': `لقد قمنا بترقية حسابك إلى {plan, select,
    explorer {مستكشف}
    adventurer {مغامر ~ ~ مغامر}
    storyteller {راوي قصص}
    other {}
  } فئة {days, number} الأيام القادمة. استمتع!`,
    'email.verification': 'تحقق من البريد الإلكتروني',
    'email.verifying': 'جاري التحقق من بريدك الإلكتروني. سيستغرق هذا لحظة...',
    'email.verified': 'أخبار رائعة! تم التحقق من بريدك الإلكتروني بنجاح!',
    // The Way (Author Level Up)
    'theWay.levelUp.emailSubject': 'تهانينا! لقد وصلت إلى مستوى المؤلف {level, number} على موقع الكون الأدبي!',
    'theWay.levelUp.emailTitle': 'تهانينا! لقد وصلت إلى مستوى المؤلف {level, number}!',
    'theWay.levelUp.emailIntro': 'لقد كوفئت على تفانيك في حرفة الكتابة!',
    'theWay.levelUp.emailGenre': 'لقد وصلت إلى المستوى {level, number} في النوع {genre} .',
    'theWay.levelUp.emailContinue': 'واصل رحلتك وافتح المزيد من الإنجازات في "طريق المؤلف".',
    'theWay.levelUp.viewDashboard': 'عرض لوحة التحكم الخاصة بك',
    // Notifications - General content comment
    'email.notifications.contentComment.subject': 'تعليق جديد على المحتوى الخاص بك',
    'email.notifications.contentComment.title': 'تعليق جديد على {contentType}',
    'email.notifications.contentComment.details': 'العنوان: {contentTitle} - من: {commenterName}',
    'email.notifications.contentComment.cta': 'عرض التعليق',
    // Notifications - Beta reader comment
    'email.notifications.betaComment.subject': 'ملاحظات قارئ الإصدار التجريبي الجديد',
    'email.notifications.betaComment.title': 'ملاحظات قارئ الإصدار التجريبي الجديد',
    'email.notifications.betaComment.details': 'القصة {storyTitle}{chapter} - من: {commenterName}',
    'email.notifications.betaComment.cta': 'عرض الملاحظات',
    // Notifications - New message
    'email.notifications.newMessage.subject': 'لديك رسالة جديدة',
    'email.notifications.newMessage.title': 'لديك رسالة جديدة',
    'email.notifications.newMessage.details': 'من: {senderName}',
    'email.notifications.newMessage.cta': 'عرض الرسالة',
    // Notifications - Chapter published
    'email.notifications.chapterPublished.subject': 'تم نشر فصل جديد',
    'email.notifications.chapterPublished.title': 'تم نشر فصل جديد',
    'email.notifications.chapterPublished.details': 'القصة {storyTitle} - الفصل: {chapterTitle}{suffix}',
    'email.notifications.chapterPublished.cta': 'الفصل المفتوح',
    // Notifications - First story created
    'email.notifications.firstStory.subject': 'قصتك الأولى هنا!',
    'email.notifications.firstStory.title': 'قصتك الأولى مباشرة!',
    'email.notifications.firstStory.intro': 'بداية رائعة! استمر في الكتابة وتنمية عالمك مع إرشادات مفيدة على طريق المؤلف.',
    'email.notifications.firstStory.details': 'القصة: {storyTitle}',
    'email.notifications.firstStory.ctaResources': 'تابع في طريق المؤلف',
    'email.notifications.firstStory.ctaStory': 'افتح قصتك',
    // Notifications - First universe created
    'email.notifications.firstUniverse.subject': 'تهانينا على كونك الأول!',
    'email.notifications.firstUniverse.title': 'تهانينا على إنشاء عالمك الأول!',
    'email.notifications.firstUniverse.intro': 'تبدأ رحلة بناء عالمك. إليك بعض الموارد لمساعدتك في اتخاذ الخطوات التالية.',
    'email.notifications.firstUniverse.details': 'الكون: {universeName}',
    'email.notifications.firstUniverse.ctaResources': 'استكشف طريق المؤلف',
    'email.notifications.firstUniverse.ctaUniverse': 'افتح عالمك',
    // Notifications - First chapter published for a story
    'email.notifications.firstChapterPublished.subject': 'تم نشر فصلك الأول!',
    'email.notifications.firstChapterPublished.title': 'تم نشر الفصل الأول من قصتك!',
    'email.notifications.firstChapterPublished.intro': 'شارك عملك، واجمع الملاحظات، وحافظ على استمرار الزخم.',
    'email.notifications.firstChapterPublished.details': 'القصة {storyTitle} - الفصل: {chapterTitle}',
    'email.notifications.firstChapterPublished.ctaChapter': 'الفصل المفتوح',
    'email.notifications.firstChapterPublished.ctaStory': 'عرض القصة',
    // Notifications - Story finished
    'email.notifications.storyFinished.subject': 'تهانينا على الانتهاء من قصتك!',
    'email.notifications.storyFinished.title': 'لقد فعلتها - انتهت قصتك!',
    'email.notifications.storyFinished.intro': 'احتفل بهذا الإنجاز! فكر في نشر قصتك أو مشاركتها أو إرسالها لتصل إلى المزيد من القراء.',
    'email.notifications.storyFinished.details': 'القصة: {storyTitle}',
    'email.notifications.storyFinished.cta': 'عرض قصتك',
    // Notifications - Fan club new subscriber
    'email.notifications.newFanSubscriber.subject': 'مشترك جديد في نادي المعجبين',
    'email.notifications.newFanSubscriber.title': 'لديك مشترك جديد في نادي المعجبين!',
    'email.notifications.newFanSubscriber.details': 'المشترك: {subscriberName}',
    'email.notifications.newFanSubscriber.cta': 'عرض نادي المعجبين',
    // Notifications - Fan club subscription ended
    'email.notifications.fanUnsubscribed.subject': 'غادر أحد الأعضاء نادي المعجبين بك',
    'email.notifications.fanUnsubscribed.title': 'غادر أحد الأعضاء نادي المعجبين بك',
    'email.notifications.fanUnsubscribed.intro': 'أردنا إعلامك بالتغيير الأخير. ضع في اعتبارك مشاركة التحديثات أو المحتوى الحصري لتعزيز المشاركة.',
    'email.notifications.fanUnsubscribed.details': 'عضو سابق: {name}',
    'email.notifications.fanUnsubscribed.cta': 'نادي المعجبين المفتوح',
    // Notifications - Friend request
    'email.notifications.friendRequest.subject': 'طلب صداقة جديد',
    'email.notifications.friendRequest.title': 'طلب صداقة جديد',
    'email.notifications.friendRequest.details': 'من: {requesterName}',
    'email.notifications.friendRequest.cta': 'طلب المراجعة',
    // Notifications - Collaboration invitation
    'email.notifications.collabInvite.subject': 'دعوة التعاون',
    'email.notifications.collabInvite.title': 'لديك دعوة تعاون',
    'email.notifications.collabInvite.details': 'الداعي: {inviterName} - الدور: {role} - الهدف: {targetType} - {targetTitle}',
    'email.notifications.collabInvite.cta': 'مراجعة الدعوة',
    // Notifications - Organization invitation
    'email.notifications.orgInvite.subject': 'دعوة للانضمام إلى منظمة',
    'email.notifications.orgInvite.title': 'أنت مدعو للانضمام إلى {orgName}',
    'email.notifications.orgInvite.details': 'الداعي: {inviterName}',
    'email.notifications.orgInvite.cta': 'مراجعة الدعوة',
    // Notifications - Daily digest
    'email.notifications.dailyDigest.subject': 'تحديثاتك اليومية',
    'email.notifications.dailyDigest.title': 'تحديثاتك اليومية',
    'email.notifications.dailyDigest.intro': 'إليك ما حدث اليوم.',
    'email.notifications.dailyDigest.cta': 'عرض جميع التحديثات',
    'email.notifications.dailyDigest.empty': 'لا توجد تحديثات اليوم.',
    // Notifications - Followed author posted a new blog
    'email.notifications.followedBlogPost.subject': 'منشور مدونة جديد من مؤلف تتابعه',
    'email.notifications.followedBlogPost.title': '{authorName} نشر مدونة جديدة',
    'email.notifications.followedBlogPost.details': 'العنوان: {postTitle}',
    'email.notifications.followedBlogPost.cta': 'قراءة المنشور',
    // Notifications - Followed author published new work
    'email.notifications.followedNewWork.subject': 'عمل جديد من مؤلف تتابعه',
    'email.notifications.followedNewWork.title': '{authorName} نشر {workType}جديد',
    'email.notifications.followedNewWork.details': 'العنوان: {title}',
    'email.notifications.followedNewWork.cta': 'عرض',
    // Story notification emails
    'email.story.newComment.subject': 'تعليق جديد على "{storyTitle}"',
    'email.story.newComment.body': '{commenterName} ترك تعليقًا على قصتك "{storyTitle}": {commentText}',
    'email.story.betaComment.subject': 'ملاحظات تجريبية جديدة على "{storyTitle}"',
    'email.story.betaComment.body': '{commenterName} تقديم ملاحظات تجريبية على "{storyTitle}": {commentText}',
    'email.story.collaboratorAccepted.subject': 'عضو جديد في الفريق "{storyTitle}"',
    'email.story.collaboratorAccepted.body': '{collaboratorName} قبلت دعوتك للتعاون في "{storyTitle}" كـ {role}.',
    'email.story.milestone.subject': 'تهانينا! تم الوصول إلى معلم بارز على "{storyTitle}"',
    'email.story.milestone.body': 'أخبار رائعة! لقد وصل فصلك "{chapterTitle}" من "{storyTitle}" إلى {count} {milestone}. استمروا في العمل الرائع!',
    'email.story.betaRevision.subject': 'مراجعة تجريبية جديدة متاحة "{chapterTitle}"',
    'email.story.betaRevision.body': '{authorName} قد نشر نسخة تجريبية جديدة من "{chapterTitle}" من "{storyTitle}". ستكون ملاحظاتك محل تقدير كبير!',
    'email.story.newChapter.subject': 'فصل جديد متاح "{storyTitle}"',
    'email.story.newChapter.body': '{authorName} نشرت فصلًا جديدًا من "{storyTitle}": "{chapterTitle}". قراءة سعيدة!',
    // Universe notification emails
    'email.universe.newStory.subject': 'قصة جديدة في الكون "{storyTitle}"',
    'email.universe.newStory.body': '{authorName} إضافة قصة جديدة "{storyTitle}" إلى عالم تتابعه. اكتشف مغامرات جديدة!',
    'email.universe.collaboratorChange.subject': 'تحديثات التعاون العالمي',
    'email.universe.collaboratorChange.body': 'لقد حدث تغيير في فريق التعاون للكون الذي تشارك فيه.',
    'email.universe.update.subject': 'تم تحديث الكون',
    'email.universe.update.body': 'تم تحديث الكون الذي تتابعه بمحتوى جديد.',
    'email.universe.comment.subject': 'تعليق جديد على الكون',
    'email.universe.comment.body': '{commenterName} علّق على عالم تتابعه "{commentText}"',
    // Blog notification emails
    'email.blog.newPost.subject': 'منشور جديد في المدونة "{postTitle}"',
    'email.blog.newPost.body': '{authorName} نشر تدوينة جديدة "{postTitle}" على مدونة تتابعها.',
    'email.blog.comment.subject': 'تعليق جديد على منشور المدونة "{postTitle}"',
    'email.blog.comment.body': '{commenterName} تعليقًا على منشور المدونة "{postTitle}": "{commentText}"',
    'email.blog.update.subject': 'تحديث المدونة',
    'email.blog.update.body': 'تم تحديث المدونة التي تتابعها.',
    // General comment notification emails
    'email.comment.general.subject': 'تعليق جديد على "{contentTitle}"',
    'email.comment.general.body': '{commenterName} علّق على "{contentTitle}": "{commentText}"',
    'email.comment.reply.subject': 'الرد على تعليقك',
    'email.comment.reply.body': '{replierName} ردًا على تعليقك على "{contentTitle}": "{replyText}"',
    'email.comment.like.subject': 'تم الإعجاب بتعليقك',
    'email.comment.like.body': '{likerName} أعجبني تعليقك استمر في المشاركة!',
    // Content-specific comment notification emails
    'email.comment.fanArt.subject': 'تعليق جديد على فن المعجبين "{contentTitle}"',
    'email.comment.fanArt.body': '{commenterName} علق على فن المعجبين الخاص بك "{contentTitle}": "{commentText}"',
    'email.comment.event.subject': 'تعليق جديد على الحدث "{contentTitle}"',
    'email.comment.event.body': '{commenterName} علق على الحدث "{contentTitle}": "{commentText}": " "',
    'email.comment.revision.subject': 'تعليق جديد على المراجعة',
    'email.comment.revision.body': '{commenterName} علّق على مراجعتك "{commentText}"',
    'email.comment.feedback.subject': 'تعليق جديد على الملاحظات',
    'email.comment.feedback.body': '{commenterName} علّق على مشكلة ملاحظاتك "{commentText}"',
    // Welcome email
    'email.welcome.subject': 'مرحباً بك في عالم الأدب!'
};