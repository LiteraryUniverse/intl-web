export default {
    'form.validator.required': 'Required field',
    'form.validator.mustBeNumber': 'Must be a number',
    'form.validator.minNumber': 'Should be greater than {min}',
    'form.validator.maxNumber': 'Should be lower than {max}',
    'form.validator.maxLength': `Should be less than {max} {what, select,
    characters {characters}
    tags {tags}
    genres {genres}
    other {}
  }`,
    'form.validator.minLength': `Should be at least {min} {what, select,
    characters {characters}
    tags {tags}
    genres {genres}
    genre {genre}
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
    // you can get these messages from: https://github.com/gwendall/meteor-simple-schema-i18n/tree/master/i18n
    // but don't forget to adjust the format
    'simpleschema.required': '{label} on kohustuslik',
    'simpleschema.minString': '{label} peab olema vähemalt {min} tähemärki',
    'simpleschema.maxString': '{label} ei tohi ületada {max} tähemärki',
    'simpleschema.minNumber': '{label} peab olema vähemalt {min}',
    'simpleschema.maxNumber': '{label} ei tohi ületada {max}',
    'simpleschema.minNumberExclusive': '{label} peab olema enam kui {min}',
    'simpleschema.maxNumberExclusive': '{label} peab olema vähem kui {max}',
    'simpleschema.minDate': '{label} varaseim lubatud kuupäev on {min}',
    'simpleschema.maxDate': '{label} hiliseim lubatud kuupäev on {max}',
    'simpleschema.badDate': '{label} ei ole korrektne kuupäev',
    'simpleschema.minCount': 'Pead valima vähemalt {minCount} väärtust',
    'simpleschema.maxCount': 'Ei saa valida enam kui {maxCount} väärtust',
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