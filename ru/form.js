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
    'simpleschema.required': '{label} обязательно',
    'simpleschema.minString': '{label} должно содержать минимум {min} букв',
    'simpleschema.maxString': '{label} не может превышать {max} букв',
    'simpleschema.minNumber': '{label} должно быть не меньше {min}',
    'simpleschema.maxNumber': '{label} не может превышать {max}',
    'simpleschema.minNumberExclusive': '{label} должно быть больше {min}',
    'simpleschema.maxNumberExclusive': '{label} должно быть меньше {max}',
    'simpleschema.minDate': '{label} должно быть не раньше чем {min}',
    'simpleschema.maxDate': '{label} не может быть позже чем {max}',
    'simpleschema.badDate': '{label} не является корректной датой',
    'simpleschema.minCount': 'Вы должны указать минимум {minCount} значений',
    'simpleschema.maxCount': 'Вы не можете указать больше чем {maxCount} значений',
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