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
    'simpleschema.required': '{label} on kohustuslik',
    'simpleschema.minString': '{label} must be at least {min, number} characters',
    'simpleschema.maxString': '{label} cannot exceed {max, number} characters',
    'simpleschema.minNumber': '{label} must be at least {min, number}',
    'simpleschema.maxNumber': '{label} cannot exceed {max, number}',
    'simpleschema.minNumberExclusive': '{label} must be greater than {min, number}',
    'simpleschema.maxNumberExclusive': '{label} must be less than {max, number}',
    'simpleschema.minDate': '{label} must be on or after {min, date}',
    'simpleschema.maxDate': '{label} cannot be after {max, date}',
    'simpleschema.badDate': '{label} ei ole korrektne kuupäev',
    'simpleschema.minCount': 'You must specify at least {minCount, number} values',
    'simpleschema.maxCount': 'You cannot specify more than {maxCount, number} values',
    'simpleschema.noDecimal': '{label} peab olema arv',
    'simpleschema.notAllowed': '{value} ei ole lubatud väärtus',
    'simpleschema.expectedString': '{label} peab olema sõne',
    'simpleschema.expectedNumber': '{label} peab olema number',
    'simpleschema.expectedBoolean': '{label} peab olema boolean',
    'simpleschema.expectedArray': '{label} peab olema massiiv',
    'simpleschema.expectedObject': '{label} peab olema objekt',
    'simpleschema.expectedConstructor': '{label} peab olema tüüpi {type}',
    'simpleschema.keyNotInSchema': '{key} ei ole lubatud skeemas',
    'simpleschema.notUnique': '{label} must be unique',
    'simpleschema.regEx.0': '{label} ei läbinud regulaaravaldise kontrolli',
    'simpleschema.regEx.1': '{label} ei ole korrektne e-posti aadress',
    'simpleschema.regEx.2': '{label} ei ole korrektne e-posti aadress',
    'simpleschema.regEx.3': '{label} ei ole korrektne domeen',
    'simpleschema.regEx.4': '{label} ei ole korrektne domeen',
    'simpleschema.regEx.5': '{label} ei ole korrektne IPv4 või IPv6 aadress',
    'simpleschema.regEx.6': '{label} ei ole korrektne IPv4 aadress',
    'simpleschema.regEx.7': '{label} ei ole korrektne IPv6 aadress',
    'simpleschema.regEx.8': '{label} ei ole korrektne URL',
    'simpleschema.regEx.9': '{label} peab koosnema tähtedest ja numbritest'
};