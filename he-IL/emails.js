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
    'email.adminUpgrade.messageHtml': `שדרגנו את החשבון שלך ל {plan, select,
    explorer {חוקר}
    adventurer {הרפתקן}
    storyteller {סופר}
    other {}
  } לשלב הבא במשך {days} ימים. תהנה!`,
    'email.verification': 'אימות דואר אלקטרוני',
    'email.verifying': 'מאמתים את הדואר האלקטרוני שלך. זה ייקח רק רגע...',
    'email.verified': 'חדשות טובות! הדואר האלקטרוני שלך אומת בהצלחה!'
};