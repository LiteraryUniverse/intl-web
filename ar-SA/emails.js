/**
 * @authors Jan Dvorak
 */
export default {
    'email.enrollAccount.subject': 'دعوة لعالم الأدب لـ {username}',
    'email.enrollAccount.message': `مرحبًا {username}\n\n
    نود دعوتك للانضمام إلى عالم الأدب! لقد قمنا بإنشاء حساب شخصي خاص بك حيث يمكنك الوصول إلى جميع ميزات عالم الأدب! يرجى الانضمام إلينا في إبداع أدوات الكتابة والقراءة في الجيل القادم!
    لتفعيل حسابك، ما عليك سوى النقر على الرابط أدناه:\n\n{url}`,
    'email.resetPassword.subject': 'إعادة تعيين كلمة مرور عالم الأدب',
    'email.resetPassword.message': `مرحبًا {username}!\n\n تلقينا طلبًا لإعادة تعيين كلمة المرور الخاصة بحسابك.
        يرجى اتباع الرابط أدناه لإعادة تعيين كلمة المرور الخاصة بك:\n\n{url}`,
    'email.verifyEmail.subject': 'تحقق من البريد الإلكتروني لعالم الأدب',
    'email.verifyEmail.message': 'مرحبًا {username}!\n\n يرجى التحقق من عنوان بريدك الإلكتروني عن طريق النقر على الرابط أدناه:\n\n{url}',
    // New html email keys
    'email.salutation': 'مرحبا {username}،',
    'email.welcome': 'مرحبًا بك في عالم الأدب!',
    'email.signature': 'مع خالص التحية، فريق عالم الأدب<br />',
    // Enrollment
    'email.enrollAccount.welcome': 'مرحبًا بك على متن السفينة',
    'email.enrollAccount.messageHtml': 'نود أن ندعوك إلى عالم الأدب! لقد تقدمنا وقمنا بإعداد حساب شخصي لك حيث يمكنك الوصول إلى جميع ميزات عالم الأدب. يرجى الانضمام إلينا في إنشاء الجيل القادم من الكتابة والقراءة الإبداعية!',
    'email.enrollAccount.button': 'الوصول إلى حسابك',
    'email.enrollAccount.signature': 'نحن نتطلع إلى رؤيتك،<br />فريق عالم الأدب فريق عالم الأدب',
    // Reset password
    'email.resetPassword.messageHtml': 'لقد تلقينا طلباً لإعادة تعيين كلمة المرور الخاصة بحسابك. يرجى النقر على الزر أدناه لمتابعة العملية. إذا لم تكن قد قدمت هذا الطلب، فيمكنك تجاهل هذا البريد الإلكتروني، ولكن قد يكون الوقت مناسبًا لمراجعة إعدادات الأمان الخاصة بك.',
    'email.resetPassword.button': 'إعادة تعيين كلمة المرور',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'يسعدنا انضمامك إلينا! يرجى النقر على الزر أدناه للتحقق من عنوان البريد الإلكتروني هذا.',
    'email.verifyEmail.button': 'التحقق من عنوان البريد الإلكتروني هذا',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'تمت ترقية حسابك',
    'email.adminUpgrade.message': `لقد قمنا بترقية حسابك إلى {plan, select,
    explorer {مستكشف}
    adventurer {مغامر ~ ~ مغامر}
    storyteller {راوي قصص}
    other {}
  } فئة {days} أيام القادمة.\n\nاستمتع،\nفريق الكون الأدبي`,
    'email.adminUpgrade.messageHtml': `لقد قمنا بترقية حسابك إلى {plan, select,
    explorer {مستكشف}
    adventurer {مغامر}
    storyteller {راوي قصص}
    other {}
  } للمستوى التالي لمدة {days} أيام. استمتع!`,
    'email.verification': 'تحقق من البريد الإلكتروني',
    'email.verifying': 'جاري التحقق من بريدك الإلكتروني. سيستغرق هذا لحظة...',
    'email.verified': 'أخبار رائعة! تم التحقق من بريدك الإلكتروني بنجاح!'
};