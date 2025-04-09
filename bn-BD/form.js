export default {
    'form.requiredSymbol': '*',
    'form.validator.required': 'প্রয়োজনীয় ক্ষেত্র',
    'form.validator.mustBeNumber': 'একটি সংখ্যা হতে হবে',
    'form.validator.minNumber': 'Must be greater than {min, number}',
    'form.validator.maxNumber': 'Must be lower than {max, number}',
    'form.validator.maxLength': `Must be less than {max, number} {what, select,
    characters {characters}
    tags {tags}
    genres {genres}
    numbers {numbers}
    other {}
  }`,
    'form.validator.minLength': `Must be at least {min, number} {what, select,
    characters {characters}
    tags {tags}
    genres {genres}
    genre {genre}
    numbers {numbers}
    other {}
  }`,
    'form.validator.email': 'একটি বৈধ ইমেল হতে হবে',
    'form.validator.url': 'একটি বৈধ URL হতে হবে',
    'form.validator.slug': 'URL এর একটি বৈধ অংশ হতে হবে',
    'form.submitting.signup': 'অ্যাকাউন্ট তৈরি করা হচ্ছে...',
    'form.submitting.signin': 'লগ ইন করা হচ্ছে...',
    'form.submitting.default': 'জমা দেওয়া হচ্ছে...',
    'form.submitting.sending': 'পাঠানো হচ্ছে...',
    'form.validator.whitespace': 'সাদার প্রয়োজন নেই',
    'form.validator.zipCode': 'একটি বৈধ জিপ কোড হতে হবে',
    'form.validator.isbn': 'আমরা কেবলমাত্র ISBN এর 10 বা 13 সংস্করণকে গ্রহণ করি',
    'form.validator.btc': 'এটা একটি বৈধ BTC ঠিকানা নয়।',
    'form.validator.eth': 'এটা একটি বৈধ ETH ঠিকানা নয়।',
    'form.weakPassword': 'এই পাসওয়ার্ড দুর্বল মনে হচ্ছে। দয়া করে সংখ্যা এবং বিশেষ চিহ্ন যোগ করে তা শক্তিশালী করার বিবেচনা করুন।',
    // you can get these messages from: https://github.com/gwendall/meteor-simple-schema-i18n/tree/master/i18n
    // but don't forget to adjust the format
    'simpleschema.required': '{label} প্রয়োজন',
    'simpleschema.minString': '{label} অবশ্যই কমপক্ষে {min, number} টি অক্ষর হতে হবে',
    'simpleschema.maxString': '{label} না করে {max, number} টির চেয়ে বেশি অক্ষর হতে পারবে না',
    'simpleschema.minNumber': '{label} অবশ্যই কমপক্ষে {min, number}হতে হবে',
    'simpleschema.maxNumber': '{label} না করে {max, number}চেয়ে বেশি হতে পারবে না',
    'simpleschema.minNumberExclusive': '{label} অবশ্যই {min, number}-এর চেয়ে বড় হতে হবে',
    'simpleschema.maxNumberExclusive': '{label} অবশ্যই {max, number}-এর চেয়ে কম হতে হবে',
    'simpleschema.minDate': '{label} অবশ্যই {min, date}-এর উপর বা সমান হতে হবে',
    'simpleschema.maxDate': '{label} অবশ্যই {max, date}এর পরে হতে পারবে না',
    'simpleschema.badDate': '{label} একটি বৈধ তারিখ নয়',
    'simpleschema.minCount': 'আপনাকে অবশ্যই কমপক্ষে {minCount, number} টি মান নির্দিষ্ট করতে হবে',
    'simpleschema.maxCount': 'আপনি অবশ্যই {maxCount, number} টির চেয়ে বেশি মান নির্দিষ্ট করতে পারবেন না',
    'simpleschema.noDecimal': '{label} একটি পূর্ণসংখ্যা হতে হবে',
    'simpleschema.notAllowed': '{value} একটি অনুমোদিত মান নয়',
    'simpleschema.expectedString': '{label} একটি স্ট্রিং হতে হবে',
    'simpleschema.expectedNumber': '{label} একটি সংখ্যা হতে হবে',
    'simpleschema.expectedBoolean': '{label} একটি বুলিয়ান হতে হবে',
    'simpleschema.expectedArray': '{label} একটি অ্যারে হতে হবে',
    'simpleschema.expectedObject': '{label} একটি অবজেক্ট হতে হবে',
    'simpleschema.expectedConstructor': '{label} একটি {type}হতে হবে',
    'simpleschema.keyNotInSchema': '{key} স্কিমার দ্বারা অনুমোদিত নয়',
    'simpleschema.notUnique': '{label} অদ্বিতীয় হতে হবে',
    'simpleschema.regEx.0': '{label} বিফল নিয়মিত অভিব্যক্তি যাচাইকরণ',
    'simpleschema.regEx.1': '{label} একটি বৈধ ইমেল ঠিকানা হতে হবে',
    'simpleschema.regEx.2': '{label} একটি বৈধ ইমেল ঠিকানা হতে হবে',
    'simpleschema.regEx.3': '{label} একটি বৈধ ডোমেইন হতে হবে',
    'simpleschema.regEx.4': '{label} একটি বৈধ ডোমেইন হতে হবে',
    'simpleschema.regEx.5': '{label} একটি বৈধ IPv4 বা IPv6 ঠিকানা হতে হবে',
    'simpleschema.regEx.6': '{label} একটি বৈধ IPv4 ঠিকানা হতে হবে',
    'simpleschema.regEx.7': '{label} একটি বৈধ IPv6 ঠিকানা হতে হবে',
    'simpleschema.regEx.8': '{label} একটি বৈধ URL হতে হবে',
    'simpleschema.regEx.9': '{label} একটি বৈধ অ্যালফানিউমেরিক আইডি হতে হবে'
};