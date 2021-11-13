export default {
    'form.validator.required': 'Required field',
    'form.validator.mustBeNumber': 'Must be a number',
    'form.validator.minNumber': 'Should be greater than {min, number}',
    'form.validator.maxNumber': 'Should be lower than {max, number}',
    'form.validator.maxLength': `Should be less than {max, number} {what, select,
    characters {characters}
    tags {tags}
    genres {genres}
    other {}
  }`,
    'form.validator.minLength': `Should be at least {min, number} {what, select,
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
    'simpleschema.required': '{label} обязательно',
    'simpleschema.minString': '{label} must be at least {min, number} characters',
    'simpleschema.maxString': '{label} cannot exceed {max, number} characters',
    'simpleschema.minNumber': '{label} must be at least {min, number}',
    'simpleschema.maxNumber': '{label} cannot exceed {max, number}',
    'simpleschema.minNumberExclusive': '{label} must be greater than {min, number}',
    'simpleschema.maxNumberExclusive': '{label} must be less than {max, number}',
    'simpleschema.minDate': '{label} must be on or after {min, date}',
    'simpleschema.maxDate': '{label} cannot be after {max, date}',
    'simpleschema.badDate': '{label} не является корректной датой',
    'simpleschema.minCount': 'You must specify at least {minCount, number} values',
    'simpleschema.maxCount': 'You cannot specify more than {maxCount, number} values',
    'simpleschema.noDecimal': '{label} должно быть числом',
    'simpleschema.notAllowed': '{value} является недопустимым значением',
    'simpleschema.expectedString': '{label} должно быть строкой',
    'simpleschema.expectedNumber': '{label} должно быть числом',
    'simpleschema.expectedBoolean': '{label} должно быть булевым значением',
    'simpleschema.expectedArray': '{label} должно быть массивом',
    'simpleschema.expectedObject': '{label} должно быть объектом',
    'simpleschema.expectedConstructor': '{label} должно быть типа {type}',
    'simpleschema.keyNotInSchema': '{key} недопустимо схемой',
    'simpleschema.notUnique': '{label} must be unique',
    'simpleschema.regEx.0': '{label} не прошло валидацию',
    'simpleschema.regEx.1': '{label} должно быть корректным e-mail адресом',
    'simpleschema.regEx.2': '{label} должно быть корректным e-mail адресом',
    'simpleschema.regEx.3': '{label} должно быть корректным доменом',
    'simpleschema.regEx.4': '{label} должно быть корректным доменом',
    'simpleschema.regEx.5': '{label} должно быть коррктным IPv4 или IPv6 адресом',
    'simpleschema.regEx.6': '{label} должно быть корректным IPv4 адресом',
    'simpleschema.regEx.7': '{label} должно быть корректным IPv6 адресом',
    'simpleschema.regEx.8': '{label} должно быть корректным URL',
    'simpleschema.regEx.9': '{label} должно быть корректным ID'
};