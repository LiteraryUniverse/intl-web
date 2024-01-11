export default {
    'form.requiredSymbol': '*',
    'form.validator.required': '필수 필드',
    'form.validator.mustBeNumber': '숫자여야합니다',
    'form.validator.minNumber': '보다 커야 합니다 {min, number}',
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
    'form.validator.email': '유효한 이메일이어야 합니다',
    'form.validator.url': '유효한 URL이어야 해요',
    'form.validator.slug': '유효한 URL의 일부여야 해요',
    'form.submitting.signup': '계정 생성 중...',
    'form.submitting.signin': '로그인 중...',
    'form.submitting.default': '전송중...',
    'form.submitting.sending': '보내는 중...',
    'form.validator.whitespace': '공백이 없어야합니다',
    'form.validator.zipCode': '유효한 우편번호여야 합니다',
    'form.validator.isbn': 'ISBN은 10 또는 13 버전만 허용됩니다',
    'form.validator.btc': 'This is not a valid BTC address.',
    'form.validator.eth': 'This is not a valid ETH address.',
    'form.weakPassword': '이 비밀번호는 약합니다. 숫자와 특수문자를 추가하여 강화하는 것을 고려해주세요.',
    // you can get these messages from: https://github.com/gwendall/meteor-simple-schema-i18n/tree/master/i18n
    // but don't forget to adjust the format
    'simpleschema.required': '{label} 필수',
    'simpleschema.minString': '{label} must be at least {min, number} characters',
    'simpleschema.maxString': '{label} cannot exceed {max, number} characters',
    'simpleschema.minNumber': '{label} must be at least {min, number}',
    'simpleschema.maxNumber': '{label} cannot exceed {max, number}',
    'simpleschema.minNumberExclusive': '{label} must be greater than {min, number}',
    'simpleschema.maxNumberExclusive': '{label} must be less than {max, number}',
    'simpleschema.minDate': '{label} must be on or after {min, date}',
    'simpleschema.maxDate': '{label} cannot be after {max, date}',
    'simpleschema.badDate': '{label} is not a valid date',
    'simpleschema.minCount': 'You must specify at least {minCount, number} values',
    'simpleschema.maxCount': 'You cannot specify more than {maxCount, number} values',
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
};