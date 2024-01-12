/**
 * @authors Jan Dvorak
 */
/* eslint-disable max-len */
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
    'email.enrollAccount.messageHtml': 'מעוניינים להזמינך ליקום הספרותי! הכנו עבורך חשבון אישי בו תוכל לגשת לכל התכונות של יקום הספרותי! בוא איתנו ליצור את הדור הבא של כתיבה וקריאה יצירתיים!',
    'email.enrollAccount.button': 'גש לחשבון שלך',
    'email.enrollAccount.signature': 'אנחנו מצפים לראותך, צוות היקום הספרותי<br />',
    // Reset password
    'email.resetPassword.messageHtml': 'קיבלנו בקשה לאיפוס הסיסמה של חשבונך, אנא לחץ על הכפתור למטה כדי להמשיך בתהליך. אם לא ביקשת לאפס את הסיסמה, ניתן להתעלם מהודעה זו, אך זה יכול להיות זמן טוב לבדוק שוב את הגדרות האבטחה שלך.',
    'email.resetPassword.button': 'איפוס סיסמה',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'אנחנו שמחים לראותך בקרבנו! אנא לחץ על הכפתור למטה כדי לאמת את כתובת הדוא"ל הזו.',
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
};    /* eslint-enable max-len */