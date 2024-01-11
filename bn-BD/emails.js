/**
 * @authors Jan Dvorak
 */
/* eslint-disable max-len */
export default {
    'email.enrollAccount.subject': 'সাহিত্যিক বিশ্বে আপনাকে আমন্ত্রণ! {username}',
    'email.enrollAccount.message': `হ্যালো {username}\n\n
    আমরা আপনাকে সাহিত্যিক বিশ্বে আমন্ত্রণ জানাতে চাই! আপনার জন্য আমরা একটি বিশেষ ব্যক্তিগত অ্যাকাউন্ট তৈরি করেছি যেখানে আপনি সাহিত্যিক বিশ্বের সমস্ত বৈশিষ্ট্য অ্যাক্সেস করতে পারবেন! অগ্রসর হতে আমাদের সাহিত্যিক লেখা এবং পঠন সরঞ্জামের পরবর্তী প্রজন্মকে সৃষ্টি করাতে আমাদের সঙ্গে যোগ দিন!
    আপনার অ্যাকাউন্ট সক্রিয় করতে, নিচের লিংকটি ক্লিক করুন:\n\n{url}`,
    'email.resetPassword.subject': 'সাহিত্যিক বিশ্ব পাসওয়ার্ড রিসেট করুন',
    'email.resetPassword.message': `হ্যালো {username}!\n\n আপনার অ্যাকাউন্টের পাসওয়ার্ড রিসেট করার জন্য আমরা একটি অনুরোধ পেয়েছি।
        আপনার পাসওয়ার্ড রিসেট করতে নিচের লিংকটি ফলো করুন:\n\n{url}`,
    'email.verifyEmail.subject': 'সাহিত্যিক বিশ্ব ইমেল যাচাই',
    'email.verifyEmail.message': 'হ্যালো {username}!\n\n দয়া করে আপনার ইমেল ঠিকানা যাচাই করতে নিচের লিংকটি ক্লিক করুন:\n\n{url}',
    // New html email keys
    'email.salutation': 'হ্যালো {username},',
    'email.welcome': 'সাহিত্যিক বিশ্বে স্বাগতম!',
    'email.signature': 'সত্যিই,<br />সাহিত্যিক বিশ্ব দল',
    // Enrollment
    'email.enrollAccount.welcome': 'স্বাগতম বোর্ডে',
    'email.enrollAccount.messageHtml': 'আমরা আপনাকে সাহিত্যিক বিশ্বে আমন্ত্রণ জানাতে চাই! আমরা আগে থেকেই আপনার জন্য একটি ব্যক্তিগত অ্যাকাউন্ট তৈরি করেছি যেখানে আপনি সাহিত্যিক বিশ্বের সমস্ত বৈশিষ্ট্য অ্যাক্সেস করতে পারবেন! অনুগ্রহ করে আমাদের সাহিত্যিক লেখা এবং পঠনের পরবর্তী প্রজন্মে আমাদের সঙ্গে যোগ দিন!',
    'email.enrollAccount.button': 'আপনার অ্যাকাউন্ট অ্যাক্সেস করুন',
    'email.enrollAccount.signature': 'আমরা আপনাকে দেখতে অপেক্ষা করছি,<br />লিটারারি ইউনিভার্স দল',
    // Reset password
    'email.resetPassword.messageHtml': 'আপনার অ্যাকাউন্টের পাসওয়ার্ড রিসেট করতে আমরা একটি অনুরোধ পেয়েছি, প্রক্রিয়াটি চালিয়ে যেতে নিচের বাটনে ক্লিক করুন। যদি আপনি এই অনুরোধটি না করে থাকেন তবে আপনি এই ইমেলটি উপেক্ষা করতে পারেন, তবে এটি আপনার নিরাপত্তা সেটিংস পর্যালোচনার একটি ভালো সময় হতে পারে।',
    'email.resetPassword.button': 'পাসওয়ার্ড রিসেট করুন',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'আমরা আপনাকে স্বাগত জানাচ্ছি! দয়া করে এই ইমেল ঠিকানাটি যাচাই করতে নিচের বাটনে ক্লিক করুন।',
    'email.verifyEmail.button': 'এই ইমেল ঠিকানা যাচাই করুন',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'আপনার অ্যাকাউন্ট আপগ্রেড করা হয়েছে',
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