export default {
    'form.requiredSymbol': '*',
    'form.validator.required': 'Required field',
    'form.validator.mustBeNumber': 'Must be a number',
    'form.validator.minNumber': 'Should be greater than {min, number}',
    'form.validator.maxNumber': 'Should be lower than {max, number}',
    'form.validator.maxLength': `Should be less than {max, number} {what, select,
    characters {characters}
    tags {tags}
    genres {genres}
    numbers {numbers}
    other {}
  }`,
    'form.validator.minLength': `Should be at least {min, number} {what, select,
    characters {characters}
    tags {tags}
    genres {genres}
    genre {genre}
    numbers {numbers}
    other {}
  }`,
    'form.validator.email': 'Must be a valid e-mail',
    'form.validator.url': 'Must be a valid URL',
    'form.validator.slug': 'Must be a valid part of URL',
    'form.submitting.signup': 'Creating account...',
    'form.submitting.signin': 'Logging in...',
    'form.submitting.default': 'Submitting...',
    'form.submitting.sending': 'Sending...',
    'form.validator.whitespace': 'Must not have white space',
    'form.validator.zipCode': 'Must be a valid ZIP code',
    'form.validator.isbn': 'We only accept 10 or 13 version of ISBN',
    'form.validator.btc': 'This is not a valid BTC address.',
    'form.validator.eth': 'This is not a valid ETH address.',
    'form.weakPassword': 'This password looks weak. Please consider making it stronger by adding numbers and special characters.',
    // you can get these messages from: https://github.com/gwendall/meteor-simple-schema-i18n/tree/master/i18n
    // but don't forget to adjust the format
    'simpleschema.required': '{label} megadása kötelező',
    'simpleschema.minString': '{label} legalább {min, number} karakter hosszú legyen',
    'simpleschema.maxString': '{label} nem lehet {max, number} karakternél hosszabb',
    'simpleschema.minNumber': '{label} minimum {min, number} legyen',
    'simpleschema.maxNumber': '{label} maximum {max, number} lehet',
    'simpleschema.minNumberExclusive': '{label} nagyobbnak kell lennie mint {min, number}',
    'simpleschema.maxNumberExclusive': '{label} kisebbnek kell lennie mint {max, number}',
    'simpleschema.minDate': '{label} később vagy aznap kell lennie mint {min, date}',
    'simpleschema.maxDate': '{label} nem lehet {max, date} után',
    'simpleschema.badDate': '{label} nem megfelelő formátumú dátum',
    'simpleschema.minCount': 'Legalább {minCount, number} értéket meg kell adnod',
    'simpleschema.maxCount': 'Nem adhatsz meg {maxCount, number} értéknél többet',
    'simpleschema.noDecimal': '{label} egész számnak kell lennie',
    'simpleschema.notAllowed': '{value} nem megengedett érték',
    'simpleschema.expectedString': '{label} szövegnek kell lennie',
    'simpleschema.expectedNumber': '{label} számnak kell lennie',
    'simpleschema.expectedBoolean': '{label} logikai értéknek kell lennie',
    'simpleschema.expectedArray': '{label} tömbnek kell lennie',
    'simpleschema.expectedObject': '{label} objektum tipusúnak kell lennie',
    'simpleschema.expectedConstructor': '{label} {type} típusúnak kell lennie',
    'simpleschema.keyNotInSchema': '{key} érték a séma miatt nem engedélyezett',
    'simpleschema.notUnique': '{label} must be unique',
    'simpleschema.regEx.0': '{label} sikertelen ellenőrzés a reguláris kifejezésre',
    'simpleschema.regEx.1': '{label} érvényes e-mail címnek kell lennie',
    'simpleschema.regEx.2': '{label} érvényes e-mail címnek kell lennie',
    'simpleschema.regEx.3': '{label} érvényes tartománynak kell lennie',
    'simpleschema.regEx.4': '{label} érvényes tartománynak kell lennie',
    'simpleschema.regEx.5': '{label} érvényes IPv4 vagy IPv6 címnek kell lennie',
    'simpleschema.regEx.6': '{label} érvényes IPv4 címnek kell lennie',
    'simpleschema.regEx.7': '{label} érvényes IPv6 címnek kell lennie',
    'simpleschema.regEx.8': '{label} érvényes URL címnek kell lennie',
    'simpleschema.regEx.9': '{label} érvényes alfanumerikus azonosítónak kell lennie'
};