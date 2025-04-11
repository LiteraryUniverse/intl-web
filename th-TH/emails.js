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
    'email.verified': 'ข่าวดี! อีเมลของคุณได้รับการยืนยันแล้ว!'
};