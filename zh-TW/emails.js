/**
 * @authors Jan Dvorak
 */
export default {
    'email.enrollAccount.subject': '邀請您加入文學宇宙！ {username}',
    'email.enrollAccount.message': `您好， {username}\n\n
    我們想邀請您加入文學宇宙！我們為您創建了一個特殊的個人帳戶，您可以在其中訪問文學宇宙的所有功能！請加入我們一起創造下一代的創作和閱讀工具！
    要啟用您的帳戶，只需點擊下面的鏈接：\n\n{url}`,
    'email.resetPassword.subject': '文學宇宙重設密碼',
    'email.resetPassword.message': `您好， {username}！\n\n 我們收到了重設您帳戶密碼的請求。
        請按下面的鏈接重設您的密碼：\n\n{url}`,
    'email.verifyEmail.subject': '文學宇宙電子郵件驗證',
    'email.verifyEmail.message': '您好， {username}！\n\n 請通過點擊下面的鏈接驗證您的電子郵件地址：\n\n{url}',
    // New html email keys
    'email.salutation': '您好， {username}，',
    'email.welcome': '歡迎來到文學宇宙！',
    'email.signature': '此致，<br />文學宇宙團隊',
    // Enrollment
    'email.enrollAccount.welcome': '歡迎加入',
    'email.enrollAccount.messageHtml': '我們誠摯地邀請您加入 Literary Universe！我們為您準備了一個個人帳戶，您可以使用 Literary Universe 的所有功能。請與我們一起創造下一代的創意寫作與閱讀！',
    'email.enrollAccount.button': '訪問您的帳戶',
    'email.enrollAccount.signature': '我們期待與您見面，<br />Literary Universe 團隊',
    // Reset password
    'email.resetPassword.messageHtml': '我們收到了重設您帳戶密碼的請求。請點擊下面的按鈕，繼續處理。如果您沒有提出此要求，您可以忽略此電子郵件，但現在可能是檢視您的安全設定的好時機。',
    'email.resetPassword.button': '重設密碼',
    // E-mail verification
    'email.verifyEmail.messageHtml': '我們很高興您的加入！請點擊下面的按鈕驗證此電子郵件地址。',
    'email.verifyEmail.button': '驗證此電子郵件地址',
    // Getting premium from admins
    'email.adminUpgrade.subject': '您的帳戶已升級',
    'email.adminUpgrade.message': `我們已將您的帳戶升級為 {plan, select,
    explorer {探險者}
    adventurer {冒險家}
    storyteller {故事創作者}
    other {}
  } 等級，持續 {days} 天。\n\n祝您愉快，\nLiterary Universe 團隊`,
    'email.adminUpgrade.messageHtml': `我們已將您的帳戶升級為 {plan, select,
    explorer {探險者}
    adventurer {冒險家}
    storyteller {故事創作者}
    other {}
  } 等級，持續 {days} 天。祝您愉快！`,
    'email.verification': '電子郵件驗證',
    'email.verifying': '正在驗證您的電子郵件。這只會花一點時間...',
    'email.verified': '太棒了！您的電子郵件已經驗證成功！',
    // The Way (Author Level Up)
    'theWay.levelUp.emailSubject': '恭喜您您已達到 Literary Universe 的作者等級 {level}！',
    'theWay.levelUp.emailTitle': '恭喜您您已達到作者等級 {level}！',
    'theWay.levelUp.emailIntro': '您對寫作技術的付出得到了回報！',
    'theWay.levelUp.emailGenre': '您已達到 {genre} 遊戲類型的 {level} 等級。',
    'theWay.levelUp.emailContinue': '繼續您的旅程，在 The Way of the Author 解鎖更多成就。',
    'theWay.levelUp.viewDashboard': '檢視您的儀表板',
    // Notifications - General content comment
    'email.notifications.contentComment.subject': '對您的內容發表新的評論',
    'email.notifications.contentComment.title': '您對 {contentType}的新評論',
    'email.notifications.contentComment.details': '標題： {contentTitle} - 來自 {commenterName}',
    'email.notifications.contentComment.cta': '查看評論',
    // Notifications - Beta reader comment
    'email.notifications.betaComment.subject': '新的測試讀者回饋',
    'email.notifications.betaComment.title': '新的測試讀者回饋',
    'email.notifications.betaComment.details': '故事： {storyTitle}{chapter} - 來自 {commenterName}',
    'email.notifications.betaComment.cta': '檢視回饋',
    // Notifications - New message
    'email.notifications.newMessage.subject': '您有新的訊息',
    'email.notifications.newMessage.title': '您有新的訊息',
    'email.notifications.newMessage.details': '來自 {senderName}',
    'email.notifications.newMessage.cta': '檢視訊息',
    // Notifications - Chapter published
    'email.notifications.chapterPublished.subject': '新章已出版',
    'email.notifications.chapterPublished.title': '新章已出版',
    'email.notifications.chapterPublished.details': '故事 {storyTitle} - 章節： {chapterTitle}{suffix}',
    'email.notifications.chapterPublished.cta': '開啟章節',
    // Notifications - First story created
    'email.notifications.firstStory.subject': '您的第一篇故事就在這裡！',
    'email.notifications.firstStory.title': '您的第一個故事已經開始！',
    'email.notifications.firstStory.intro': '驚人的開始！在 The Way of the Author 的指導下，繼續寫作，擴大你的世界。',
    'email.notifications.firstStory.details': '故事： {storyTitle}',
    'email.notifications.firstStory.ctaResources': '繼續作者之路',
    'email.notifications.firstStory.ctaStory': '開啟您的故事',
    // Notifications - First universe created
    'email.notifications.firstUniverse.subject': '恭喜您的第一個宇宙！',
    'email.notifications.firstUniverse.title': '恭喜你創造了你的第一個宇宙！',
    'email.notifications.firstUniverse.intro': '您的世界建構之旅開始了。這裡有一些資源可以幫助您採取下一步。',
    'email.notifications.firstUniverse.details': '宇宙： {universeName}',
    'email.notifications.firstUniverse.ctaResources': '探索作者之道',
    'email.notifications.firstUniverse.ctaUniverse': '打開你的宇宙',
    // Notifications - First chapter published for a story
    'email.notifications.firstChapterPublished.subject': '您的第一章已經出版！',
    'email.notifications.firstChapterPublished.title': '您故事的第一章出版了！',
    'email.notifications.firstChapterPublished.intro': '分享您的作品、收集回饋，並保持動力。',
    'email.notifications.firstChapterPublished.details': '故事 {storyTitle} - 章節： {chapterTitle}',
    'email.notifications.firstChapterPublished.ctaChapter': '開啟章節',
    'email.notifications.firstChapterPublished.ctaStory': '觀看故事',
    // Notifications - Story finished
    'email.notifications.storyFinished.subject': '恭喜您完成了您的故事！',
    'email.notifications.storyFinished.title': '你做到了 - 你的故事結束了！',
    'email.notifications.storyFinished.intro': '慶祝這個里程碑！考慮出版、分享或提交您的故事，讓更多讀者閱讀。',
    'email.notifications.storyFinished.details': '故事： {storyTitle}',
    'email.notifications.storyFinished.cta': '檢視您的故事',
    // Notifications - Fan club new subscriber
    'email.notifications.newFanSubscriber.subject': '新訂閱粉絲俱樂部',
    'email.notifications.newFanSubscriber.title': '您有一位新的粉絲俱樂部訂閱者！',
    'email.notifications.newFanSubscriber.details': '訂閱者： {subscriberName}',
    'email.notifications.newFanSubscriber.cta': '查看粉絲會',
    // Notifications - Fan club subscription ended
    'email.notifications.fanUnsubscribed.subject': '一位會員離開了您的粉絲俱樂部',
    'email.notifications.fanUnsubscribed.title': '一位會員離開了您的粉絲俱樂部',
    'email.notifications.fanUnsubscribed.intro': '我們想讓您知道最近的一項變更。請考慮分享更新或獨家內容，以提高參與度。',
    'email.notifications.fanUnsubscribed.details': '前會員: {name}',
    'email.notifications.fanUnsubscribed.cta': '開放粉絲俱樂部',
    // Notifications - Friend request
    'email.notifications.friendRequest.subject': '新的好友請求',
    'email.notifications.friendRequest.title': '新的好友請求',
    'email.notifications.friendRequest.details': '來自 {requesterName}',
    'email.notifications.friendRequest.cta': '審核要求',
    // Notifications - Collaboration invitation
    'email.notifications.collabInvite.subject': '合作邀請',
    'email.notifications.collabInvite.title': '您有合作邀請',
    'email.notifications.collabInvite.details': '邀請人： {inviterName} - 角色： {role} - 目標： {targetType} - {targetTitle}',
    'email.notifications.collabInvite.cta': '審核邀請',
    // Notifications - Organization invitation
    'email.notifications.orgInvite.subject': '邀請加入組織',
    'email.notifications.orgInvite.title': '歡迎您加入 {orgName}',
    'email.notifications.orgInvite.details': 'Inviter: {inviterName}',
    'email.notifications.orgInvite.cta': '審核邀請',
    // Notifications - Daily digest
    'email.notifications.dailyDigest.subject': '您的每日更新',
    'email.notifications.dailyDigest.title': '您的每日更新',
    'email.notifications.dailyDigest.intro': '以下是今天發生的事情。',
    'email.notifications.dailyDigest.cta': '檢視所有更新',
    'email.notifications.dailyDigest.empty': '今天沒有更新。',
    // Notifications - Followed author posted a new blog
    'email.notifications.followedBlogPost.subject': '您關注的作者的新博文',
    'email.notifications.followedBlogPost.title': '{authorName} 張貼了一個新博客',
    'email.notifications.followedBlogPost.details': '本文標題： {postTitle}',
    'email.notifications.followedBlogPost.cta': '閱讀文章',
    // Notifications - Followed author published new work
    'email.notifications.followedNewWork.subject': '您關注的作者的新作',
    'email.notifications.followedNewWork.title': '{authorName} 出版了新的 {workType}',
    'email.notifications.followedNewWork.details': '本文標題： {title}',
    'email.notifications.followedNewWork.cta': '檢視'
};