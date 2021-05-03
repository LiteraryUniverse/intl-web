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
    'simpleschema.required': '{label} és obligatori',
    'simpleschema.minString': '{label} ha de tenir almenys {min} caràcters',
    'simpleschema.maxString': '{label} no pot tenir més de {max} caràcters',
    'simpleschema.minNumber': '{label} ha de ser almenys {min}',
    'simpleschema.maxNumber': '{label} no pot excedir {max}',
    'simpleschema.minNumberExclusive': '{label} ha de ser més gran que {min}',
    'simpleschema.maxNumberExclusive': '{label} ha de ser més petit que {max}',
    'simpleschema.minDate': '{label} ha de ser anterior a {min}',
    'simpleschema.maxDate': '{label} no pot ser posterior a {max}',
    'simpleschema.badDate': '{label} no és una data vàlida',
    'simpleschema.minCount': 'Ha d\'especificar almenys {minCount} valors',
    'simpleschema.maxCount': 'No pot especificar més de {maxCount} valors',
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