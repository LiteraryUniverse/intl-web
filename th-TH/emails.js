/**
 * @authors Jan Dvorak
 */
export default {
    'email.enrollAccount.subject': 'เชิญชวนให้เข้าสู่จักรวาลวรรณกรรมสำหรับ {username}',
    'email.enrollAccount.message': `สวัสดี {username}\n\n
    เราต้องการเชิญชวนคุณเข้าร่วมกับจักรวาลวรรณกรรม! เราได้สร้างบัญชีส่วนตัวพิเศษสำหรับคุณเพื่อให้คุณสามารถเข้าถึงคุณสมบัติทั้งหมดของจักรวาลวรรณกรรมได้! โปรดร่วมกับเราในการสร้างเครื่องมือเขียนและอ่านที่เป็นเจนเนอเรชันต่อไป!
    เพื่อเปิดใช้งานบัญชีของคุณ โปรดคลิกลิงก์ด้านล่าง:\n\n{url}`,
    'email.resetPassword.subject': 'รีเซ็ตรหัสผ่านจักรวาลวรรณกรรม',
    'email.resetPassword.message': `สวัสดี {username}!\n\n เราได้รับคำขอรีเซ็ตรหัสผ่านสำหรับบัญชีของคุณแล้ว
        โปรดตามลิงก์ด้านล่างเพื่อรีเซ็ตรหัสผ่านของคุณ:\n\n{url}`,
    'email.verifyEmail.subject': 'การยืนยันอีเมลจักรวาลวรรณกรรม',
    'email.verifyEmail.message': 'สวัสดี {username}!\n\n โปรดยืนยันที่อยู่อีเมลของคุณโดยคลิกที่ลิงก์ด้านล่าง:\n\n{url}',
    // New html email keys
    'email.salutation': 'สวัสดี {username},',
    'email.welcome': 'ยินดีต้อนรับสู่จักรวาลวรรณกรรม!',
    'email.signature': 'ด้วยความเคารพอย่างสุภาพ<br />ทีมงานจักรวาลวรรณกรรม',
    // Enrollment
    'email.enrollAccount.welcome': 'ยินดีต้อนรับเข้าสู่ทางเรือ',
    'email.enrollAccount.messageHtml': 'We would like to invite you to Literary Universe! We went ahead and prepared a personal account for you where you can access all features of Literary Universe. Please join us in creating the next generation of creative writing and reading!',
    'email.enrollAccount.button': 'เข้าสู่บัญชีของคุณ',
    'email.enrollAccount.signature': 'We are looking forward to seeing you,<br />Literary Universe team',
    // Reset password
    'email.resetPassword.messageHtml': 'We have received a request to reset your password for your account. Please click on the button below to continue the process. If you haven\'t made this request, you can ignore this e-mail, but it might be a good time to review your security settings.',
    'email.resetPassword.button': 'รีเซ็ตรหัสผ่าน',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'We are happy to have you on board! Please click the button below to verify this e-mail address.',
    'email.verifyEmail.button': 'ยืนยันที่อยู่อีเมลนี้',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'บัญชีของคุณได้รับการอัปเกรดแล้ว',
    'email.adminUpgrade.message': `We have upgraded your account to {plan, select,
    explorer {Explorer}
    adventurer {Adventurer}
    storyteller {Storyteller}
    other {}
  } tier for the next {days} days.\n\nEnjoy,\nLiterary Universe team`,
    'email.adminUpgrade.messageHtml': `เราได้อัปเกรดบัญชีของคุณเป็นระดับ {plan, select,
    explorer {Explorer}
    adventurer {Adventurer}
    storyteller {Storyteller}
    other {}
  } สำหรับ {days} วันถัดไป ขอให้สนุกกับเราค่ะ!`,
    'email.verification': 'การยืนยันอีเมล',
    'email.verifying': 'กำลังทำการยืนยันอีเมลของคุณ กรุณารอสักครู่...',
    'email.verified': 'ข่าวดี! อีเมลของคุณได้รับการยืนยันแล้ว!',
    // The Way (Author Level Up)
    'theWay.levelUp.emailSubject': 'ขอแสดงความยินดี! คุณได้ถึงระดับผู้เขียน {level} บน Literary Universe!',
    'theWay.levelUp.emailTitle': 'ขอแสดงความยินดี! คุณได้ถึงระดับผู้เขียน {level}แล้ว!',
    'theWay.levelUp.emailIntro': 'ความทุ่มเทของคุณต่อการเขียนได้รับการตอบแทนแล้ว!',
    'theWay.levelUp.emailGenre': 'คุณได้บรรลุระดับ {level} ในประเภท {genre}',
    'theWay.levelUp.emailContinue': 'เดินทางต่อไปและปลดล็อกความสำเร็จเพิ่มเติมบนเส้นทางของนักเขียน',
    'theWay.levelUp.viewDashboard': 'ดูแดชบอร์ดของคุณ',
    // Notifications - General content comment
    'email.notifications.contentComment.subject': 'มีความคิดเห็นใหม่เกี่ยวกับเนื้อหาของคุณ',
    'email.notifications.contentComment.title': 'มีความคิดเห็นใหม่ใน {contentType}ของคุณ',
    'email.notifications.contentComment.details': 'หัวข้อ: {contentTitle} • จาก: {commenterName}',
    'email.notifications.contentComment.cta': 'ดูความคิดเห็น',
    // Notifications - Beta reader comment
    'email.notifications.betaComment.subject': 'ความคิดเห็นจากผู้อ่านเบต้าคนใหม่',
    'email.notifications.betaComment.title': 'ความคิดเห็นจากผู้อ่านเบต้าคนใหม่',
    'email.notifications.betaComment.details': 'เรื่อง: {storyTitle}{chapter} • จาก: {commenterName}',
    'email.notifications.betaComment.cta': 'ดูความคิดเห็น',
    // Notifications - New message
    'email.notifications.newMessage.subject': 'คุณมีข้อความใหม่',
    'email.notifications.newMessage.title': 'คุณมีข้อความใหม่',
    'email.notifications.newMessage.details': 'จาก: {senderName}',
    'email.notifications.newMessage.cta': 'ดูข้อความ',
    // Notifications - Chapter published
    'email.notifications.chapterPublished.subject': 'บทใหม่เผยแพร่แล้ว',
    'email.notifications.chapterPublished.title': 'บทใหม่เผยแพร่แล้ว',
    'email.notifications.chapterPublished.details': 'เรื่อง: {storyTitle} • บท: {chapterTitle}{suffix}',
    'email.notifications.chapterPublished.cta': 'เปิดบท',
    // Notifications - First story created
    'email.notifications.firstStory.subject': 'เรื่องแรกของคุณอยู่ที่นี่แล้ว!',
    'email.notifications.firstStory.title': 'เรื่องแรกของคุณเผยแพร่แล้ว!',
    'email.notifications.firstStory.intro': 'เริ่มต้นได้อย่างยอดเยี่ยม! เขียนต่อไปและขยายโลกของคุณด้วยคำแนะนำที่เป็นประโยชน์ใน The Way of the Author',
    'email.notifications.firstStory.details': 'เรื่อง: {storyTitle}',
    'email.notifications.firstStory.ctaResources': 'เดินหน้าต่อไปในเส้นทางของนักเขียน',
    'email.notifications.firstStory.ctaStory': 'เปิดเรื่องราวของคุณ',
    // Notifications - First universe created
    'email.notifications.firstUniverse.subject': 'ขอแสดงความยินดีกับจักรวาลแรกของคุณ!',
    'email.notifications.firstUniverse.title': 'ขอแสดงความยินดีที่คุณได้สร้างจักรวาลแรกของคุณ!',
    'email.notifications.firstUniverse.intro': 'การเดินทางสร้างโลกของคุณเริ่มต้นขึ้นแล้ว นี่คือแหล่งข้อมูลที่จะช่วยให้คุณก้าวไปข้างหน้า',
    'email.notifications.firstUniverse.details': 'จักรวาล: {universeName}',
    'email.notifications.firstUniverse.ctaResources': 'สำรวจเส้นทางของนักเขียน',
    'email.notifications.firstUniverse.ctaUniverse': 'เปิดจักรวาลของคุณ',
    // Notifications - First chapter published for a story
    'email.notifications.firstChapterPublished.subject': 'บทแรกของคุณได้รับการตีพิมพ์แล้ว!',
    'email.notifications.firstChapterPublished.title': 'เรื่องราวของคุณได้รับการตีพิมพ์แล้ว!',
    'email.notifications.firstChapterPublished.intro': 'แบ่งปันผลงานของคุณ รับฟังข้อเสนอแนะ และรักษาแรงผลักดันให้ต่อเนื่อง',
    'email.notifications.firstChapterPublished.details': 'เรื่อง: {storyTitle} • บท: {chapterTitle}',
    'email.notifications.firstChapterPublished.ctaChapter': 'เปิดบท',
    'email.notifications.firstChapterPublished.ctaStory': 'ดูเรื่องราว',
    // Notifications - Story finished
    'email.notifications.storyFinished.subject': 'ขอแสดงความยินดีที่เขียนเรื่องราวของคุณเสร็จสมบูรณ์!',
    'email.notifications.storyFinished.title': 'คุณทำได้แล้ว — เรื่องราวของคุณเสร็จสมบูรณ์แล้ว!',
    'email.notifications.storyFinished.intro': 'เฉลิมฉลองความสำเร็จครั้งสำคัญนี้! พิจารณาเผยแพร่ แบ่งปัน หรือส่งเรื่องราวของคุณเพื่อให้ผู้อ่านได้เข้าถึงมากขึ้น',
    'email.notifications.storyFinished.details': 'เรื่อง: {storyTitle}',
    'email.notifications.storyFinished.cta': 'ดูเรื่องราวของคุณ',
    // Notifications - Fan club new subscriber
    'email.notifications.newFanSubscriber.subject': 'สมาชิกใหม่ของแฟนคลับ',
    'email.notifications.newFanSubscriber.title': 'คุณมีสมาชิกใหม่ในแฟนคลับ!',
    'email.notifications.newFanSubscriber.details': 'ผู้สมัครสมาชิก: {subscriberName}',
    'email.notifications.newFanSubscriber.cta': 'ชมชมรมแฟนคลับ',
    // Notifications - Fan club subscription ended
    'email.notifications.fanUnsubscribed.subject': 'สมาชิกได้ลาออกจากแฟนคลับของคุณ',
    'email.notifications.fanUnsubscribed.title': 'สมาชิกได้ลาออกจากแฟนคลับของคุณ',
    'email.notifications.fanUnsubscribed.intro': 'เราต้องการแจ้งให้คุณทราบเกี่ยวกับการเปลี่ยนแปลงล่าสุด โปรดพิจารณาแบ่งปันข้อมูลอัปเดตหรือเนื้อหาพิเศษเพื่อเพิ่มการมีส่วนร่วม',
    'email.notifications.fanUnsubscribed.details': 'อดีตสมาชิก: {name}',
    'email.notifications.fanUnsubscribed.cta': 'เปิดแฟนคลับ',
    // Notifications - Friend request
    'email.notifications.friendRequest.subject': 'คำขอเป็นเพื่อนใหม่',
    'email.notifications.friendRequest.title': 'คำขอเป็นเพื่อนใหม่',
    'email.notifications.friendRequest.details': 'จาก: {requesterName}',
    'email.notifications.friendRequest.cta': 'คำขอรีวิว',
    // Notifications - Collaboration invitation
    'email.notifications.collabInvite.subject': 'คำเชิญร่วมงาน',
    'email.notifications.collabInvite.title': 'คุณได้รับคำเชิญให้ร่วมงาน',
    'email.notifications.collabInvite.details': 'ผู้เชิญ: {inviterName} • บทบาท: {role} • เป้าหมาย: {targetType} — {targetTitle}',
    'email.notifications.collabInvite.cta': 'คำเชิญให้รีวิว',
    // Notifications - Organization invitation
    'email.notifications.orgInvite.subject': 'คำเชิญเข้าร่วมองค์กร',
    'email.notifications.orgInvite.title': 'คุณได้รับเชิญให้เข้าร่วม {orgName}',
    'email.notifications.orgInvite.details': 'ผู้เชิญ: {inviterName}',
    'email.notifications.orgInvite.cta': 'คำเชิญให้รีวิว',
    // Notifications - Daily digest
    'email.notifications.dailyDigest.subject': 'การอัปเดตประจำวันของคุณ',
    'email.notifications.dailyDigest.title': 'การอัปเดตประจำวันของคุณ',
    'email.notifications.dailyDigest.intro': 'นี่คือสิ่งที่เกิดขึ้นวันนี้',
    'email.notifications.dailyDigest.cta': 'ดูการอัปเดตทั้งหมด',
    'email.notifications.dailyDigest.empty': 'ไม่มีอัปเดตวันนี้',
    // Notifications - Followed author posted a new blog
    'email.notifications.followedBlogPost.subject': 'โพสต์บล็อกใหม่จากนักเขียนที่คุณติดตาม',
    'email.notifications.followedBlogPost.title': '{authorName} โพสต์บล็อกใหม่',
    'email.notifications.followedBlogPost.details': 'หัวข้อ: {postTitle}',
    'email.notifications.followedBlogPost.cta': 'อ่านโพสต์',
    // Notifications - Followed author published new work
    'email.notifications.followedNewWork.subject': 'ผลงานใหม่จากนักเขียนที่คุณติดตาม',
    'email.notifications.followedNewWork.title': '{authorName} เผยแพร่แล้ว {workType}',
    'email.notifications.followedNewWork.details': 'หัวข้อ: {title}',
    'email.notifications.followedNewWork.cta': 'มุมมอง'
};