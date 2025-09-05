/**
 * @authors Jan Dvorak
 */
export default {
    'email.enrollAccount.subject': 'Lời mời đến Vũ trụ Văn học cho {username}',
    'email.enrollAccount.message': `Xin chào {username}\n\n
    Chúng tôi muốn mời bạn đến Vũ trụ Văn học! Chúng tôi đã tạo một tài khoản cá nhân đặc biệt cho bạn, nơi bạn có thể truy cập vào tất cả các tính năng của Vũ trụ Văn học! Hãy tham gia cùng chúng tôi trong việc tạo ra thế hệ tiếp theo của các công cụ viết và đọc sáng tạo!
    Để kích hoạt tài khoản của bạn, chỉ cần nhấp vào liên kết bên dưới:\n\n{url}`,
    'email.resetPassword.subject': 'Đặt lại mật khẩu Vũ trụ Văn học',
    'email.resetPassword.message': `Xin chào {username}!\n\n Chúng tôi đã nhận được yêu cầu đặt lại mật khẩu cho tài khoản của bạn.
        Vui lòng làm theo liên kết bên dưới để đặt lại mật khẩu:\n\n{url}`,
    'email.verifyEmail.subject': 'Xác minh email Vũ trụ Văn học',
    'email.verifyEmail.message': 'Xin chào {username}!\n\n Vui lòng xác minh địa chỉ email của bạn bằng cách nhấp vào liên kết bên dưới:\n\n{url}',
    // New html email keys
    'email.salutation': 'Xin chào {username},',
    'email.welcome': 'Chào mừng bạn đến Vũ trụ Văn học!',
    'email.signature': 'Trân trọng,<br />Nhóm Vũ trụ Văn học',
    // Enrollment
    'email.enrollAccount.welcome': 'Chào mừng bạn đã gia nhập',
    'email.enrollAccount.messageHtml': 'We would like to invite you to Literary Universe! We went ahead and prepared a personal account for you where you can access all features of Literary Universe. Please join us in creating the next generation of creative writing and reading!',
    'email.enrollAccount.button': 'Truy cập tài khoản của bạn',
    'email.enrollAccount.signature': 'We are looking forward to seeing you,<br />Literary Universe team',
    // Reset password
    'email.resetPassword.messageHtml': 'We have received a request to reset your password for your account. Please click on the button below to continue the process. If you haven\'t made this request, you can ignore this e-mail, but it might be a good time to review your security settings.',
    'email.resetPassword.button': 'Đặt lại mật khẩu',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'We are happy to have you on board! Please click the button below to verify this e-mail address.',
    'email.verifyEmail.button': 'Xác minh địa chỉ email này',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Tài khoản của bạn đã được nâng cấp',
    'email.adminUpgrade.message': `We have upgraded your account to {plan, select,
    explorer {Explorer}
    adventurer {Adventurer}
    storyteller {Storyteller}
    other {}
  } tier for the next {days} days.\n\nEnjoy,\nLiterary Universe team`,
    'email.adminUpgrade.messageHtml': `Chúng tôi đã nâng cấp tài khoản của bạn lên hạng {plan, select,
    explorer {Explorer}
    adventurer {Adventurer}
    storyteller {Storyteller}
    other {}
  } trong vòng {days} ngày tới. Thưởng thức!`,
    'email.verification': 'Xác minh E-mail',
    'email.verifying': 'Đang xác minh E-mail của bạn. Điều này chỉ mất một chút thời gian...',
    'email.verified': 'Tin tốt! E-mail của bạn đã được xác minh!',
    // The Way (Author Level Up)
    'theWay.levelUp.emailSubject': 'Chúc mừng! Bạn đã đạt đến cấp độ Tác giả " {level} " trên Literary Universe!',
    'theWay.levelUp.emailTitle': 'Chúc mừng! Bạn đã đạt đến cấp độ Tác giả {level}!',
    'theWay.levelUp.emailIntro': 'Sự tận tâm của bạn đối với nghệ thuật viết lách đã được đền đáp!',
    'theWay.levelUp.emailGenre': 'Bạn đã đạt cấp độ {level} trong thể loại {genre} .',
    'theWay.levelUp.emailContinue': 'Tiếp tục hành trình của bạn và mở khóa thêm nhiều thành tựu trên The Way of the Author.',
    'theWay.levelUp.viewDashboard': 'Xem Bảng điều khiển của bạn',
    // Notifications - General content comment
    'email.notifications.contentComment.subject': 'Bình luận mới trên nội dung của bạn',
    'email.notifications.contentComment.title': 'Bình luận mới trên bài viết của bạn {contentType}',
    'email.notifications.contentComment.details': 'Tiêu đề: {contentTitle} • Từ: {commenterName}',
    'email.notifications.contentComment.cta': 'Xem bình luận',
    // Notifications - Beta reader comment
    'email.notifications.betaComment.subject': 'Phản hồi mới từ độc giả thử nghiệm',
    'email.notifications.betaComment.title': 'Phản hồi mới từ độc giả thử nghiệm',
    'email.notifications.betaComment.details': 'Câu chuyện: {storyTitle}{chapter} • Từ: {commenterName}',
    'email.notifications.betaComment.cta': 'Xem phản hồi',
    // Notifications - New message
    'email.notifications.newMessage.subject': 'Bạn có tin nhắn mới.',
    'email.notifications.newMessage.title': 'Bạn có tin nhắn mới.',
    'email.notifications.newMessage.details': 'Từ: {senderName}',
    'email.notifications.newMessage.cta': 'Xem tin nhắn',
    // Notifications - Chapter published
    'email.notifications.chapterPublished.subject': 'Chương mới đã được xuất bản',
    'email.notifications.chapterPublished.title': 'Chương mới đã được xuất bản',
    'email.notifications.chapterPublished.details': 'Câu chuyện: {storyTitle} • Chương: {chapterTitle}{suffix}',
    'email.notifications.chapterPublished.cta': 'Mở chương',
    // Notifications - First story created
    'email.notifications.firstStory.subject': 'Câu chuyện đầu tiên của bạn đã có mặt!',
    'email.notifications.firstStory.title': 'Bài viết đầu tiên của bạn đã được đăng!',
    'email.notifications.firstStory.intro': 'Khởi đầu tuyệt vời! Hãy tiếp tục viết và phát triển thế giới của bạn với sự hướng dẫn hữu ích trên The Way of the Author.',
    'email.notifications.firstStory.details': 'Câu chuyện: {storyTitle}',
    'email.notifications.firstStory.ctaResources': 'Tiếp tục trên Con đường của Nhà văn',
    'email.notifications.firstStory.ctaStory': 'Mở câu chuyện của bạn',
    // Notifications - First universe created
    'email.notifications.firstUniverse.subject': 'Chúc mừng bạn đã tạo ra vũ trụ đầu tiên của mình!',
    'email.notifications.firstUniverse.title': 'Chúc mừng bạn đã tạo ra vũ trụ đầu tiên của mình!',
    'email.notifications.firstUniverse.intro': 'Hành trình xây dựng thế giới của bạn bắt đầu. Dưới đây là một số tài nguyên để giúp bạn thực hiện các bước tiếp theo.',
    'email.notifications.firstUniverse.details': 'Vũ trụ: {universeName}',
    'email.notifications.firstUniverse.ctaResources': 'Khám phá con đường của tác giả',
    'email.notifications.firstUniverse.ctaUniverse': 'Mở rộng vũ trụ của bạn',
    // Notifications - First chapter published for a story
    'email.notifications.firstChapterPublished.subject': 'Chương đầu tiên của bạn đã được xuất bản!',
    'email.notifications.firstChapterPublished.title': 'Chương đầu tiên của câu chuyện của bạn đã được xuất bản!',
    'email.notifications.firstChapterPublished.intro': 'Chia sẻ công việc của bạn, thu thập phản hồi và duy trì đà phát triển.',
    'email.notifications.firstChapterPublished.details': 'Câu chuyện: {storyTitle} • Chương: {chapterTitle}',
    'email.notifications.firstChapterPublished.ctaChapter': 'Mở chương',
    'email.notifications.firstChapterPublished.ctaStory': 'Xem câu chuyện',
    // Notifications - Story finished
    'email.notifications.storyFinished.subject': 'Chúc mừng bạn đã hoàn thành câu chuyện của mình!',
    'email.notifications.storyFinished.title': 'Bạn đã làm được rồi — câu chuyện của bạn đã hoàn thành!',
    'email.notifications.storyFinished.intro': 'Hãy cùng nhau kỷ niệm cột mốc quan trọng này! Hãy cân nhắc việc xuất bản, chia sẻ hoặc gửi bài viết của bạn để tiếp cận nhiều độc giả hơn.',
    'email.notifications.storyFinished.details': 'Câu chuyện: {storyTitle}',
    'email.notifications.storyFinished.cta': 'Xem câu chuyện của bạn',
    // Notifications - Fan club new subscriber
    'email.notifications.newFanSubscriber.subject': 'Thành viên mới của câu lạc bộ người hâm mộ',
    'email.notifications.newFanSubscriber.title': 'Bạn có một thành viên mới trong câu lạc bộ người hâm mộ!',
    'email.notifications.newFanSubscriber.details': 'Người đăng ký: {subscriberName}',
    'email.notifications.newFanSubscriber.cta': 'Xem câu lạc bộ người hâm mộ',
    // Notifications - Fan club subscription ended
    'email.notifications.fanUnsubscribed.subject': 'Một thành viên đã rời khỏi câu lạc bộ người hâm mộ của bạn.',
    'email.notifications.fanUnsubscribed.title': 'Một thành viên đã rời khỏi câu lạc bộ người hâm mộ của bạn.',
    'email.notifications.fanUnsubscribed.intro': 'Chúng tôi muốn thông báo cho bạn về một thay đổi gần đây. Hãy cân nhắc chia sẻ các cập nhật hoặc nội dung độc quyền để tăng tương tác.',
    'email.notifications.fanUnsubscribed.details': 'Cựu thành viên: {name}',
    'email.notifications.fanUnsubscribed.cta': 'Mở câu lạc bộ người hâm mộ',
    // Notifications - Friend request
    'email.notifications.friendRequest.subject': 'Yêu cầu kết bạn mới',
    'email.notifications.friendRequest.title': 'Yêu cầu kết bạn mới',
    'email.notifications.friendRequest.details': 'Từ: {requesterName}',
    'email.notifications.friendRequest.cta': 'Yêu cầu đánh giá',
    // Notifications - Collaboration invitation
    'email.notifications.collabInvite.subject': 'Mời hợp tác',
    'email.notifications.collabInvite.title': 'Bạn đã nhận được lời mời hợp tác.',
    'email.notifications.collabInvite.details': 'Người mời: {inviterName} • Vai trò: {role} • Đối tượng: {targetType} — {targetTitle}',
    'email.notifications.collabInvite.cta': 'Mời tham gia đánh giá',
    // Notifications - Organization invitation
    'email.notifications.orgInvite.subject': 'Mời tham gia tổ chức',
    'email.notifications.orgInvite.title': 'Bạn được mời tham gia {orgName}',
    'email.notifications.orgInvite.details': 'Người mời: {inviterName}',
    'email.notifications.orgInvite.cta': 'Mời tham gia đánh giá',
    // Notifications - Daily digest
    'email.notifications.dailyDigest.subject': 'Cập nhật hàng ngày của bạn',
    'email.notifications.dailyDigest.title': 'Cập nhật hàng ngày của bạn',
    'email.notifications.dailyDigest.intro': 'Đây là những gì đã xảy ra hôm nay.',
    'email.notifications.dailyDigest.cta': 'Xem tất cả các bản cập nhật',
    'email.notifications.dailyDigest.empty': 'Hôm nay không có cập nhật.',
    // Notifications - Followed author posted a new blog
    'email.notifications.followedBlogPost.subject': 'Bài viết mới trên blog từ tác giả mà bạn theo dõi',
    'email.notifications.followedBlogPost.title': '{authorName} Đã đăng một bài viết mới trên blog.',
    'email.notifications.followedBlogPost.details': 'Tiêu đề: {postTitle}',
    'email.notifications.followedBlogPost.cta': 'Đọc bài viết',
    // Notifications - Followed author published new work
    'email.notifications.followedNewWork.subject': 'Tác phẩm mới từ tác giả mà bạn theo dõi',
    'email.notifications.followedNewWork.title': '{authorName} Đã phát hành một bài viết mới {workType}',
    'email.notifications.followedNewWork.details': 'Tiêu đề: {title}',
    'email.notifications.followedNewWork.cta': 'Xem',
    // Story notification emails
    'email.story.newComment.subject': 'Bình luận mới về "{storyTitle}"',
    'email.story.newComment.body': '{commenterName} Đã để lại bình luận trên câu chuyện của bạn "{storyTitle}": {commentText}',
    'email.story.betaComment.subject': 'Phản hồi beta mới về "{storyTitle}"',
    'email.story.betaComment.body': '{commenterName} Đã cung cấp phản hồi beta cho "{storyTitle}": {commentText}',
    'email.story.collaboratorAccepted.subject': 'Thành viên mới của đội "{storyTitle}"',
    'email.story.collaboratorAccepted.body': '{collaboratorName} Đã chấp nhận lời mời hợp tác của bạn trong dự án "{storyTitle}" với vai trò là " {role}".',
    'email.story.milestone.subject': 'Chúc mừng! Đã đạt được cột mốc quan trọng trong "{storyTitle}".',
    'email.story.milestone.body': 'Tin vui! Chương "{chapterTitle}" của bạn từ "{storyTitle}" đã đạt được {count} {milestone}. Tiếp tục phát huy nhé!',
    'email.story.betaRevision.subject': 'Phiên bản beta mới đã có sẵn: "{chapterTitle}"',
    'email.story.betaRevision.body': '{authorName} Đã phát hành phiên bản beta mới của "{chapterTitle}" từ "{storyTitle}". Chúng tôi rất mong nhận được phản hồi của bạn!',
    'email.story.newChapter.subject': 'Chương mới đã có sẵn: "{storyTitle}"',
    'email.story.newChapter.body': '{authorName} Đã phát hành chương mới của "{storyTitle}": "{chapterTitle}". Chúc bạn đọc vui vẻ!',
    // Universe notification emails
    'email.universe.newStory.subject': 'Câu chuyện mới trong vũ trụ: "{storyTitle}"',
    'email.universe.newStory.body': '{authorName} Đã thêm một câu chuyện mới "{storyTitle}" vào vũ trụ mà bạn đang theo dõi. Khám phá những cuộc phiêu lưu mới!',
    'email.universe.collaboratorChange.subject': 'Cập nhật về sự hợp tác trong vũ trụ',
    'email.universe.collaboratorChange.body': 'Đã có sự thay đổi trong đội ngũ hợp tác cho một dự án mà bạn đang tham gia.',
    'email.universe.update.subject': 'Vũ trụ đã được cập nhật',
    'email.universe.update.body': 'Một vũ trụ mà bạn đang theo dõi đã được cập nhật với nội dung mới.',
    'email.universe.comment.subject': 'Bình luận mới về vũ trụ',
    'email.universe.comment.body': '{commenterName} Bình luận về một chủ đề bạn đang theo dõi: "{commentText}"',
    // Blog notification emails
    'email.blog.newPost.subject': 'Bài viết mới trên blog: "{postTitle}"',
    'email.blog.newPost.body': '{authorName} Đã đăng một bài viết mới trên blog có tiêu đề "{postTitle}" trên blog mà bạn đang theo dõi.',
    'email.blog.comment.subject': 'Bình luận mới trên bài đăng blog: "{postTitle}"',
    'email.blog.comment.body': '{commenterName} Bình luận trên bài đăng blog "{postTitle}": "{commentText}"',
    'email.blog.update.subject': 'Blog đã được cập nhật',
    'email.blog.update.body': 'Một blog mà bạn đang theo dõi đã được cập nhật.',
    // General comment notification emails
    'email.comment.general.subject': 'Bình luận mới về "{contentTitle}"',
    'email.comment.general.body': '{commenterName} Bình luận về "{contentTitle}": "{commentText}"',
    'email.comment.reply.subject': 'Trả lời bình luận của bạn',
    'email.comment.reply.body': '{replierName} Trả lời bình luận của bạn trên "{contentTitle}": "{replyText}"',
    'email.comment.like.subject': 'Bình luận của bạn đã được thích.',
    'email.comment.like.body': '{likerName} Tôi thích bình luận của bạn. Hãy tiếp tục tương tác!',
    // Content-specific comment notification emails
    'email.comment.fanArt.subject': 'Bình luận mới về tác phẩm fan art: "{contentTitle}"',
    'email.comment.fanArt.body': '{commenterName} Bình luận về tác phẩm fan art của bạn "{contentTitle}": "{commentText}"',
    'email.comment.event.subject': 'Bình luận mới về sự kiện: "{contentTitle}"',
    'email.comment.event.body': '{commenterName} Bình luận về sự kiện "{contentTitle}": "{commentText}"',
    'email.comment.revision.subject': 'Bình luận mới về bản sửa đổi',
    'email.comment.revision.body': '{commenterName} Đã bình luận về bản sửa đổi của bạn: "{commentText}"',
    'email.comment.feedback.subject': 'Bình luận mới về phản hồi',
    'email.comment.feedback.body': '{commenterName} Đã bình luận về vấn đề phản hồi của bạn: "{commentText}"',
    // Welcome email
    'email.welcome.subject': 'Chào mừng đến với Thế giới Văn học!'
};