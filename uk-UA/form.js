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
    'simpleschema.required': '{label} є обов\'язковим',
    'simpleschema.minString': '{label} must be at least {min, number} characters',
    'simpleschema.maxString': '{label} cannot exceed {max, number} characters',
    'simpleschema.minNumber': '{label} must be at least {min, number}',
    'simpleschema.maxNumber': '{label} cannot exceed {max, number}',
    'simpleschema.minNumberExclusive': '{label} must be greater than {min, number}',
    'simpleschema.maxNumberExclusive': '{label} must be less than {max, number}',
    'simpleschema.minDate': '{label} must be on or after {min, date}',
    'simpleschema.maxDate': '{label} cannot be after {max, date}',
    'simpleschema.badDate': '{label} не є коректною датою',
    'simpleschema.minCount': 'You must specify at least {minCount, number} values',
    'simpleschema.maxCount': 'You cannot specify more than {maxCount, number} values',
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