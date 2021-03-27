export default {
    'form.validator.required': '必須項目',
    'form.validator.mustBeNumber': '数値を指定してください',
    'form.validator.minNumber': '{min} より大きい必要があります',
    'form.validator.maxNumber': '{max} より小さい必要があります',
    'form.validator.maxLength': `{max} {what, select,
    characters {文字}
    tags {タグ}
    genres {ジャンルは}
    other {}
  }`,
    'form.validator.minLength': `少なくとも {min} {what, select,
    characters {文字}
    tags {タグ}
    genres {ジャンルは}
    genre {ジャンルは}
    other {}
  }`,
    'form.validator.email': '有効なメールアドレスである必要があります',
    'form.validator.url': '有効なURIである必要があります',
    'form.validator.slug': 'URIの有効な部分である必要があります',
    'form.submitting.signup': 'アカウントを作成中',
    'form.submitting.signin': 'ログインしています...',
    'form.submitting.default': '送信しています。',
    'form.submitting.sending': '送信中...',
    'form.validator.whitespace': 'スペースを空白にしてはいけません',
    'form.validator.zipCode': '有効な郵便番号である必要があります',
    'form.validator.isbn': 'ISBNのバージョンは10または13です。',
    // you can get these messages from: https://github.com/gwendall/meteor-simple-schema-i18n/tree/master/i18n
    // but don't forget to adjust the format
    'simpleschema.required': '「{label}」が必要です',
    'simpleschema.minString': '{label}は少なくとも {min} 文字必要です',
    'simpleschema.maxString': '{label} は {max} 文字を超えることはできません',
    'simpleschema.minNumber': '{label} は少なくとも {min} でなければなりません',
    'simpleschema.maxNumber': '{label} は {max} を超えることはできません',
    'simpleschema.minNumberExclusive': '{label} は {min} より大きくなければなりません',
    'simpleschema.maxNumberExclusive': '{label} は {max} より小さくなければなりません',
    'simpleschema.minDate': '{label} must be on or after {min}',
    'simpleschema.maxDate': '{label} cannot be after {max}',
    'simpleschema.badDate': '{label} is not a valid date',
    'simpleschema.minCount': 'You must specify at least {minCount} values',
    'simpleschema.maxCount': 'You cannot specify more than {maxCount} values',
    'simpleschema.noDecimal': '{label} must be an integer',
    'simpleschema.notAllowed': '{label} is not an allowed value',
    'simpleschema.expectedString': '{label} must be a string',
    'simpleschema.expectedNumber': '{label} must be a number',
    'simpleschema.expectedBoolean': '{label} must be a boolean',
    'simpleschema.expectedArray': '{label} must be an array',
    'simpleschema.expectedObject': '{label} must be an object',
    'simpleschema.expectedConstructor': '{label} must be a {type}',
    'simpleschema.keyNotInSchema': '{key} is not allowed by the schema',
    'simpleschema.notUnique': '{label}は一意でなければなりません',
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