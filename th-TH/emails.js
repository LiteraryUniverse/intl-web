/**
 * @authors Jan Dvorak
 */
/* eslint-disable max-len */
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
    'email.enrollAccount.messageHtml': 'เราต้องการเชิญชวนคุณเข้าร่วมกับจักรวาลวรรณกรรม! เราได้เตรียมบัญชีส่วนตัวสำหรับคุณเองไว้แล้ว เพื่อให้คุณสามารถเข้าถึงคุณสมบัติทั้งหมดของจักรวาลวรรณกรรมได้! โปรดร่วมกับเราในการสร้างเครื่องมือเขียนและอ่านเจนเนอเรชันต่อไป!',
    'email.enrollAccount.button': 'เข้าสู่บัญชีของคุณ',
    'email.enrollAccount.signature': 'We are looking forward to see you,<br />Literary Universe team',
    // Reset password
    'email.resetPassword.messageHtml': 'เราได้รับคำขอการรีเซ็ตรหัสผ่านสำหรับบัญชีของคุณ โปรดคลิกที่ปุ่มด้านล่างเพื่อดำเนินการต่อ หากคุณไม่ได้ทำคำขอนี้ คุณสามารถเพิกเฉยต่ออีเมลนี้ได้ แต่นี่อาจเป็นเวลาที่ดีในการตรวจสอบการตั้งค่าความปลอดภัยของคุณ',
    'email.resetPassword.button': 'รีเซ็ตรหัสผ่าน',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'เรายินดีที่ได้มีคุณเข้าร่วมกับเรา! โปรดคลิกที่ปุ่มด้านล่างเพื่อยืนยันที่อยู่อีเมลนี้',
    'email.verifyEmail.button': 'ยืนยันที่อยู่อีเมลนี้',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'บัญชีของคุณได้รับการอัปเกรดแล้ว',
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