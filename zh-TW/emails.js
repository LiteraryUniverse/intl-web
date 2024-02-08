/**
 * @authors Jan Dvorak
 */
/* eslint-disable max-len */
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
    'email.enrollAccount.messageHtml': '我們想邀請您加入文學宇宙！我們已經為您準備了一個個人帳戶，您可以在其中訪問文學宇宙的所有功能！請加入我們一起創造下一代的創作和閱讀！',
    'email.enrollAccount.button': '訪問您的帳戶',
    'email.enrollAccount.signature': '我們期待著見到你，<br />Literary Universe 團隊',
    // Reset password
    'email.resetPassword.messageHtml': '我們收到了重設您帳戶密碼的請求，請點擊下面的按鈕繼續進行此過程。如果您並未發出此請求，您可以忽略此電子郵件，但現在可能是檢查您的安全設定的好時機。',
    'email.resetPassword.button': '重設密碼',
    // E-mail verification
    'email.verifyEmail.messageHtml': '我們很高興您加入我們！請點擊下面的按鈕驗證此電子郵件地址。',
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
    'email.verified': '太棒了！您的電子郵件已經驗證成功！'
};    /* eslint-enable max-len */