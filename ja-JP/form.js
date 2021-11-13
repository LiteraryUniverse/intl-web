export default {
    'form.validator.required': '必須項目',
    'form.validator.mustBeNumber': '数値を指定してください',
    'form.validator.minNumber': '{min, number}より大きい必要があります',
    'form.validator.maxNumber': 'Should be lower than {max, number}',
    'form.validator.maxLength': `{max, number}{what, select,
    characters {文字}
    tags {タグ}
    genres {ジャンルは}
    other {}
  }`,
    'form.validator.minLength': `Should be at least {min, number} {what, select,
    characters {characters}
    tags {tags}
    genres {genres}
    genre {genre}
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
    'simpleschema.minString': '{label} must be at least {min, number} characters',
    'simpleschema.maxString': '{label} cannot exceed {max, number} characters',
    'simpleschema.minNumber': '{label} must be at least {min, number}',
    'simpleschema.maxNumber': '{label} cannot exceed {max, number}',
    'simpleschema.minNumberExclusive': '{label} must be greater than {min, number}',
    'simpleschema.maxNumberExclusive': '{label} must be less than {max, number}',
    'simpleschema.minDate': '{label} must be on or after {min, date}',
    'simpleschema.maxDate': '{label} cannot be after {max, date}',
    'simpleschema.badDate': '{label} は日付で入力してください',
    'simpleschema.minCount': 'You must specify at least {minCount, number} values',
    'simpleschema.maxCount': 'You cannot specify more than {maxCount, number} values',
    'simpleschema.noDecimal': '{label} は整数で入力してください',
    'simpleschema.notAllowed': '{value} は有効ではない',
    'simpleschema.expectedString': '{label} は文字列で入力してください',
    'simpleschema.expectedNumber': '{label} は数値で入力してください',
    'simpleschema.expectedBoolean': '{label} は真偽で入力してください',
    'simpleschema.expectedArray': '{label} は配列で入力してください',
    'simpleschema.expectedObject': '{label} はオブジェクトで入力してください',
    'simpleschema.expectedConstructor': '{label} は{type}で入力してください',
    'simpleschema.keyNotInSchema': '{key} は無効なスキーマです',
    'simpleschema.notUnique': '{label}は一意でなければなりません',
    'simpleschema.regEx.0': '{label} は正規表現で失敗しました',
    'simpleschema.regEx.1': '{label} はメールアドレスで入力してください',
    'simpleschema.regEx.2': '{label} はメールアドレスで入力してください',
    'simpleschema.regEx.3': '{label} はドメインで入力してください',
    'simpleschema.regEx.4': '{label} はドメインで入力してください',
    'simpleschema.regEx.5': '{label} はIPv4またはIPv6アドレスで入力してください',
    'simpleschema.regEx.6': '{label} はIPv4アドレスで入力してください',
    'simpleschema.regEx.7': '{label} はIPv6アドレスで入力してください',
    'simpleschema.regEx.8': '{label} はURLで入力してください',
    'simpleschema.regEx.9': '{label} は英数字で入力してください'
};