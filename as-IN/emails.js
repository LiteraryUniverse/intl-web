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
    'email.enrollAccount.messageHtml': 'আমি আপোনাক লিটারেৰী ইউনিভাৰ্সলৈ আমন্ত্ৰণ কৰিছো! আমি আগবঢ়ে আপোনালৈ এটা ব্যক্তিগত একাউণ্ট তৈয়াৰ কৰি দিছো যাতে আপুনি লিটারেৰী ইউনিভাৰ্সৰ সকলো সুবিধা প্ৰাপ্ত কৰিব পাৰে! অনুগ্ৰহ কৰি আমাৰ সৃষ্টি কৰা সৃজনশীল লেখনি আৰু পঠনীয় সকলৰ পৰবৰ্তী প্ৰজননত আপোনালৈ সংযোজন কৰক!',
    'email.enrollAccount.button': 'আপোনাৰ একাউণ্টলৈ প্ৰৱেশ কৰক',
    'email.enrollAccount.signature': 'আমি আপোনাক দেখা দিবলৈ আগ্ৰহী আছো,<br />লিটেৰেৰী ইউনিভাৰ্স টিম',
    // Reset password
    'email.resetPassword.messageHtml': 'আমাৰ পাছত আপোনাৰ একাউণ্টৰ পাছৱৰ্ড পুনৰ ঠিক কৰিবলৈ আমি এটা অনুৰোধ পোৱা হৈছে, অনুগ্ৰহ কৰি প্ৰক্ৰিয়া অব্যাহত হোৱাৰ বাবে বুটামটোত ক্লিক কৰক। যদি আপুনি এই অনুৰোধ কৰা নাহয় হয় তেনেহলে আপুনি এই ইমেইলটো অগ্ৰাহ্য কৰিব পাৰে, কিন্তু এটা আপোনাৰ নিৰাপত্তা ছেটিংসমূহ পুনৰীক্ষা কৰিবৰ এটা ভাল সময় হয়।',
    'email.resetPassword.button': 'পাছবৰ্ড পুনৰ ঠিক কৰক',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'আমি আপোনাক বৰ্ডত পাইছো খুশি আছো! অনুগ্ৰহ কৰি এই ইমেইল ঠিক কৰিবলৈ বুটামটোত ক্লিক কৰক।',
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