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
  'simpleschema.required': '{label} is required',
  'simpleschema.minString': '{label} must be at least {min, number} characters',
  'simpleschema.maxString': '{label} cannot exceed {max, number} characters',
  'simpleschema.minNumber': '{label} must be at least {min, number}',
  'simpleschema.maxNumber': '{label} cannot exceed {max, number}',
  'simpleschema.minNumberExclusive':
    '{label} must be greater than {min, number}',
  'simpleschema.maxNumberExclusive': '{label} must be less than {max, number}',
  'simpleschema.minDate': '{label} must be on or after {min, date}',
  'simpleschema.maxDate': '{label} cannot be after {max, date}',
  'simpleschema.badDate': '{label} is not a valid date',
  'simpleschema.minCount':
    'You must specify at least {minCount, number} values',
  'simpleschema.maxCount':
    'You cannot specify more than {maxCount, number} values',
  'simpleschema.noDecimal': '{label} must be an integer',
  'simpleschema.notAllowed': '{value} is not an allowed value',
  'simpleschema.expectedString': '{label} must be a string',
  'simpleschema.expectedNumber': '{label} must be a number',
  'simpleschema.expectedBoolean': '{label} must be a boolean',
  'simpleschema.expectedArray': '{label} must be an array',
  'simpleschema.expectedObject': '{label} must be an object',
  'simpleschema.expectedConstructor': '{label} must be a {type}',
  'simpleschema.keyNotInSchema': '{key} is not allowed by the schema',
  'simpleschema.notUnique': '{label} must be unique',
  'simpleschema.regEx.0': '{label} failed regular expression validation',
  'simpleschema.regEx.1': '{label} must be a valid e-mail address',
  'simpleschema.regEx.2': '{label} must be a valid e-mail address',
  'simpleschema.regEx.3': '{label} must be a valid domain',
  'simpleschema.regEx.4': '{label} must be a valid domain',
  'simpleschema.regEx.5': '{label} must be a valid IPv4 or IPv6 address',
  'simpleschema.regEx.6': '{label} must be a valid IPv4 address',
  'simpleschema.regEx.7': '{label} must be a valid IPv6 address',
  'simpleschema.regEx.8': '{label} must be a valid URL',
  'simpleschema.regEx.9': '{label} must be a valid alphanumeric ID'
}
