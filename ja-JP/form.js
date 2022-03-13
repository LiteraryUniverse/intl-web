export default {
    'form.requiredSymbol': '*',
    'form.validator.required': '必須項目',
    'form.validator.mustBeNumber': '数値を指定してください',
    'form.validator.minNumber': '{min, number}以上であること',
    'form.validator.maxNumber': '{max, number}以下であること',
    'form.validator.maxLength': `{max, number}{what, select,
    characters {文字}
    tags {タグ}
    genres {ジャンルは}
    other {}
  }`,
    'form.validator.minLength': `少なくとも{min,number}{what, select,
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
    'simpleschema.minString': '{label}は少なくとも{min, number}文字必要です',
    'simpleschema.maxString': '{label}は{max, number}文字を超えることはできません',
    'simpleschema.minNumber': '{label}は少なくとも{min, number}でなければなりません',
    'simpleschema.maxNumber': '{label}は{max, number}を超えることはできません',
    'simpleschema.minNumberExclusive': '{label}は{min, number}よりも大きくなければなりません。',
    'simpleschema.maxNumberExclusive': '{label}は{max, number}よりも小さくなければなりません。',
    'simpleschema.minDate': '{label}は{min, date}以降で入力してください',
    'simpleschema.maxDate': '{label}は{max, date}以前で入力してください',
    'simpleschema.badDate': '{label} は日付で入力してください',
    'simpleschema.minCount': '{label} は{minCount, number}項目以上で指定してください',
    'simpleschema.maxCount': '{label}は{maxCount, number}項目以内で指定してください',
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