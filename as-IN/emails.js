/**
 * @authors Jan Dvorak
 */
export default {
    'email.enrollAccount.subject': '{username}লিটারেৰী ইউনিভাৰ্সত আমন্ত্ৰণ',
    'email.enrollAccount.message': `নমস্কাৰ {username}\n\n
    আপুনি লিটারেৰী ইউনিভাৰ্সত অংশ হোৱাত পাব। আমি আপোনাক এখন এটা ব্যক্তিগত একাউণ্ট তৈয়াৰ কৰিছো যাতে আপুনি লিটারেৰী ইউনিভাৰ্সৰ সকলো সুবিধা প্ৰাপ্ত কৰিব পাৰে। অনুগ্ৰহ কৰি আমাৰ সৃষ্টি কৰা সৃজনশীল লেখনি আৰু পঠনীয় সকলৰ পৰবৰ্তী প্ৰজনন উপকৰণত আপোনালৈ সংযোজন কৰক!
    আপোনাৰ একাউণ্ট সক্ৰিয় কৰিবলৈ কেৱল তলৰ লিংকটো ক্লিক কৰক:\n\n{url}`,
    'email.resetPassword.subject': 'লিটারেৰী ইউনিভাৰ্স পাছৱৰ্ড পুনৰ সজ্জিত কৰক',
    'email.resetPassword.message': `নমস্কাৰ {username}!\n\n আপোনাৰ একাউণ্টৰ পাছৱৰ্ড পুনৰ সজ্জিত কৰিবলৈ আমি এটা অনুৰোধ পোৱা হৈছে।
        অনুগ্ৰহ কৰি তলৰ লিংকটো অনুসৰি আপোনাৰ পাছৱৰ্ড পুনৰ সজ্জিত কৰক:\n\n{url}`,
    'email.verifyEmail.subject': 'লিটারেৰী ইউনিভাৰ্স ইমেইল যাচাইকৰণ',
    'email.verifyEmail.message': 'নমস্কাৰ {username}!\n\n অনুগ্ৰহ কৰি লিংকটো ক্লিক কৰি আপোনাৰ ইমেইল ঠিকনাটো যাচাই কৰক:\n\n{url}',
    // New html email keys
    'email.salutation': 'নমস্কাৰ {username},',
    'email.welcome': 'লিটারেৰী ইউনিভাৰ্সলৈ স্বাগতম!',
    'email.signature': 'সদৃশভাৱে,<br />লিটারেৰী ইউনিভাৰ্স দল',
    // Enrollment
    'email.enrollAccount.welcome': 'স্বাগতম',
    'email.enrollAccount.messageHtml': 'We would like to invite you to Literary Universe! We went ahead and prepared a personal account for you where you can access all features of Literary Universe. Please join us in creating the next generation of creative writing and reading!',
    'email.enrollAccount.button': 'আপোনাৰ একাউণ্টলৈ প্ৰৱেশ কৰক',
    'email.enrollAccount.signature': 'We are looking forward to seeing you,<br />Literary Universe team',
    // Reset password
    'email.resetPassword.messageHtml': 'We have received a request to reset your password for your account. Please click on the button below to continue the process. If you haven\'t made this request, you can ignore this e-mail, but it might be a good time to review your security settings.',
    'email.resetPassword.button': 'পাছবৰ্ড পুনৰ ঠিক কৰক',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'We are happy to have you on board! Please click the button below to verify this e-mail address.',
    'email.verifyEmail.button': 'এই ইমেইল ঠিক কৰক',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'আপোনাৰ একাউণ্টটো আপগ্ৰেড কৰা হৈছে',
    'email.adminUpgrade.message': `আমি আপোনাৰ একাউণ্টটো আপগ্ৰেড কৰিছো {plan, select,
    explorer {এক্সপ্লৰাৰ}
    adventurer {এডভেঞ্চাৰাৰ}
    storyteller {ষ্টৰিটেলাৰ}
    other {}
  } টিয়াৰ পৰা পৰব {days} দিন।\n\nআনন্দ কৰক,\nলিটেৰেৰী ইউনিভাৰ্স টীম`,
    'email.adminUpgrade.messageHtml': `আমি আপোনাৰ একাউণ্টটো আপগ্ৰেড কৰিছো {plan, select,
    explorer {এক্সপ্লৰাৰ}
    adventurer {এডভেঞ্চাৰাৰ}
    storyteller {ষ্টৰিটেলাৰ}
    other {}
  } টিয়াৰ পৰা পৰব {days} দিন। আনন্দ কৰক!`,
    'email.verification': 'ই-মেইল যাচাইকৰণ',
    'email.verifying': 'আপোনাৰ ই-মেইল যাচাই কৰা হব। এইটো কেৱল কিছুটা সময় লগাইব।',
    'email.verified': 'আপোনাৰ ই-মেইল যাচাই হৈছে! সুখবৰ!'
};