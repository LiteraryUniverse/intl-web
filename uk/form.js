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
    'simpleschema.required': '{label} є обов\'язковим',
    'simpleschema.minString': '{label} має містити щонайменше {min} символів',
    'simpleschema.maxString': '{label} не може перевищувати {max} символів',
    'simpleschema.minNumber': '{label} має бути не меншим, ніж {min}',
    'simpleschema.maxNumber': '{label} має бути не більшим, ніж {max}',
    'simpleschema.minNumberExclusive': '{label} має бути більшим, ніж {min}',
    'simpleschema.maxNumberExclusive': '{label} має бути меншим, ніж {max}',
    'simpleschema.minDate': '{label} має бути не раніше, ніж {min}',
    'simpleschema.maxDate': '{label} не може бути пізніше, ніж {max}',
    'simpleschema.badDate': '{label} не є коректною датою',
    'simpleschema.minCount': 'Ви повинні задати хоча б {minCount} значень',
    'simpleschema.maxCount': 'Ви не можете задати більше, ніж {maxCount} значень',
    'simpleschema.noDecimal': '{label} має бути цілим числом',
    'simpleschema.notAllowed': '{value} не є допустимим значенням',
    'simpleschema.expectedString': '{label} має бути стрічкою',
    'simpleschema.expectedNumber': '{label} має бути числом',
    'simpleschema.expectedBoolean': '{label} має бути булевим значенням',
    'simpleschema.expectedArray': '{label} має бути масивом',
    'simpleschema.expectedObject': '{label} має бути об\'єктом',
    'simpleschema.expectedConstructor': '{label} має відповідати типу {type}',
    'simpleschema.keyNotInSchema': '{key} не дозволено схемою',
    'simpleschema.notUnique': '{label} must be unique',
    'simpleschema.regEx.0': '{label} не відповідає заданим критеріям',
    'simpleschema.regEx.1': '{label} має бути коректною e-mail адресою',
    'simpleschema.regEx.2': '{label} має бути коректною e-mail адресою',
    'simpleschema.regEx.3': '{label} має бути коректним доменом',
    'simpleschema.regEx.4': '{label} має бути коректним доменом',
    'simpleschema.regEx.5': '{label} має бути коректною IPv4 або IPv6 адресою',
    'simpleschema.regEx.6': '{label} має бути коректною IPv4 адресою',
    'simpleschema.regEx.7': '{label} має бути коректною IPv6 адресою',
    'simpleschema.regEx.8': '{label} має бути коректним URL',
    'simpleschema.regEx.9': '{label} має бути коректним ідентифікатором'
};