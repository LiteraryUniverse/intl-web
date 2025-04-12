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
    'email.verified': 'Tin tốt! E-mail của bạn đã được xác minh!'
};