/**
 * @authors Jan Dvorak
 */
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
    'email.enrollAccount.messageHtml': 'We would like to invite you to Literary Universe! We went ahead and prepared a personal account for you where you can access all features of Literary Universe. Please join us in creating the next generation of creative writing and reading!',
    'email.enrollAccount.button': 'আপনার অ্যাকাউন্ট অ্যাক্সেস করুন',
    'email.enrollAccount.signature': 'We are looking forward to seeing you,<br />Literary Universe team',
    // Reset password
    'email.resetPassword.messageHtml': 'We have received a request to reset your password for your account. Please click on the button below to continue the process. If you haven\'t made this request, you can ignore this e-mail, but it might be a good time to review your security settings.',
    'email.resetPassword.button': 'পাসওয়ার্ড রিসেট করুন',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'We are happy to have you on board! Please click the button below to verify this e-mail address.',
    'email.verifyEmail.button': 'এই ইমেল ঠিকানা যাচাই করুন',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'আপনার অ্যাকাউন্ট আপগ্রেড করা হয়েছে',
    'email.adminUpgrade.message': `আমরা আপনার অ্যাকাউন্টটি আপগ্রেড করেছি {plan, select,
    explorer {এক্সপ্লোরার}
    adventurer {অ্যাডভেঞ্চার}
    storyteller {স্টোরিটেলার}
    other {}
  } টিয়ার পরবর্তী {days} দিনের জন্য।\n\nআনন্দ করুন,\nলিটারারি ইউনিভার্স টিম`,
    'email.adminUpgrade.messageHtml': `আমরা আপনার অ্যাকাউন্টটি আপগ্রেড করেছি {plan, select,
    explorer {এক্সপ্লোরার}
    adventurer {অ্যাডভেঞ্চার}
    storyteller {স্টোরিটেলার}
    other {}
  } টিয়ার পরবর্তী {days} দিনের জন্য। আনন্দ করুন!`,
    'email.verification': 'ইমেল যাচাইকরণ',
    'email.verifying': 'আপনার ইমেল যাচাই করা হচ্ছে। এটা কয়েকটা মুহূর্ত নিতে পারে...',
    'email.verified': 'সুবিধাপূর্ণ খবর! আপনার ইমেল যাচাই হয়েছে!'
};