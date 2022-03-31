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
    // you can get these messages from: https://github.com/gwendall/meteor-simple-schema-i18n/tree/master/i18n
    // but don't forget to adjust the format
    'simpleschema.required': '{label} és obligatori',
    'simpleschema.minString': '{label} must be at least {min, number} characters',
    'simpleschema.maxString': '{label} cannot exceed {max, number} characters',
    'simpleschema.minNumber': '{label} must be at least {min, number}',
    'simpleschema.maxNumber': '{label} cannot exceed {max, number}',
    'simpleschema.minNumberExclusive': '{label} must be greater than {min, number}',
    'simpleschema.maxNumberExclusive': '{label} must be less than {max, number}',
    'simpleschema.minDate': '{label} must be on or after {min, date}',
    'simpleschema.maxDate': '{label} cannot be after {max, date}',
    'simpleschema.badDate': '{label} no és una data vàlida',
    'simpleschema.minCount': 'You must specify at least {minCount, number} values',
    'simpleschema.maxCount': 'You cannot specify more than {maxCount, number} values',
    'simpleschema.noDecimal': '{label} ha de ser un nombre sencer',
    'simpleschema.notAllowed': '{value} no és un valor permès',
    'simpleschema.expectedString': '{label} ha de ser una cadena de caràcters',
    'simpleschema.expectedNumber': '{label} ha de ser un número',
    'simpleschema.expectedBoolean': '{label} ha de ser de tipus \'si/no',
    'simpleschema.expectedArray': '{label} ha de ser una llista',
    'simpleschema.expectedObject': '{label} ha de ser un objecte',
    'simpleschema.expectedConstructor': '{label} ha de ser de tipus {type}',
    'simpleschema.keyNotInSchema': '{key} no està permès per l\'esquema',
    'simpleschema.notUnique': '{label} must be unique',
    'simpleschema.regEx.0': '{label} va fallar la validació per Expressió Regular (Regex)',
    'simpleschema.regEx.1': '{label} ha de ser una adreça de correu electrònic vàlida',
    'simpleschema.regEx.2': '{label} ha de ser una adreça de correu electrònic vàlida',
    'simpleschema.regEx.3': '{label} ha de ser un nom de domini vàlid',
    'simpleschema.regEx.4': '{label} ha de ser un nom de domini vàlid',
    'simpleschema.regEx.5': '{label} ha de ser una adreça de IPv4 o IPv6 vàlida',
    'simpleschema.regEx.6': '{label} ha de ser una adreça de IPv4 vàlida',
    'simpleschema.regEx.7': '{label} ha de ser una adreça de IPv6 vàlida',
    'simpleschema.regEx.8': '{label} ha de ser un URL vàlid',
    'simpleschema.regEx.9': '{label} ha de ser un ID alfanumèric'
};