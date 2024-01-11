/**
 * @authors Jan Dvorak
 */
/* eslint-disable max-len */
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
    'email.enrollAccount.messageHtml': 'Chúng tôi muốn mời bạn đến Vũ trụ Văn học! Chúng tôi đã chuẩn bị sẵn một tài khoản cá nhân cho bạn, nơi bạn có thể truy cập vào tất cả các tính năng của Vũ trụ Văn học! Hãy tham gia cùng chúng tôi trong việc tạo ra thế hệ tiếp theo của viết và đọc sáng tạo!',
    'email.enrollAccount.button': 'Truy cập tài khoản của bạn',
    'email.enrollAccount.signature': 'Chúng tôi rất mong được gặp bạn, đội ngũ Literary Universe<br />',
    // Reset password
    'email.resetPassword.messageHtml': 'Chúng tôi đã nhận được yêu cầu đặt lại mật khẩu cho tài khoản của bạn, vui lòng nhấp vào nút bên dưới để tiếp tục quá trình. Nếu bạn không thực hiện yêu cầu này, bạn có thể bỏ qua email này, nhưng đây có thể là thời điểm tốt để xem lại cài đặt bảo mật của bạn.',
    'email.resetPassword.button': 'Đặt lại mật khẩu',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Chúng tôi rất vui khi có bạn tham gia! Vui lòng nhấp vào nút bên dưới để xác minh địa chỉ email này.',
    'email.verifyEmail.button': 'Xác minh địa chỉ email này',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Tài khoản của bạn đã được nâng cấp',
    'email.adminUpgrade.message': `We have upgraded your account to {plan, select,
    explorer {Explorer}
    adventurer {Adventurer}
    storyteller {Storyteller}
    other {}
  } tier for the next {days} days.\n\nEnjoy,\nLiterary Universe team`,
    'email.adminUpgrade.messageHtml': `We have upgraded your account to {plan, select,
    explorer {Explorer}
    adventurer {Adventurer}
    storyteller {Storyteller}
    other {}
  } tier for the next {days} days. Enjoy!`,
    'email.verification': 'E-mail verification',
    'email.verifying': 'Verifying your e-mail. This will take just a moment...',
    'email.verified': 'Great news! Your e-mail has been verified!'
};    /* eslint-enable max-len */