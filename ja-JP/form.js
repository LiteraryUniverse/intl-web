export default {
    'form.requiredSymbol': '*',
    'form.validator.required': '必須項目',
    'form.validator.mustBeNumber': '数字を指定してください',
    'form.validator.minNumber': 'は{min, number}よりも大きくなければなりません',
    'form.validator.maxNumber': 'Must be lower than {max, number}',
    'form.validator.maxLength': `{max, number} {what, select,
    characters {文字}
    tags {タグ}
    genres {ジャンル}
    numbers {数字}
    other {}
  }以下でなければなりません。`,
    'form.validator.minLength': `少なくとも {min, number} {what, select,
    characters {文字}
    tags {タグ}
    genres {ジャンル}
    genre {ジャンル}
    numbers {数字}
    other {}
  }でなければならない。`,
    'form.validator.email': '有効なメールアドレスである必要があります',
    'form.validator.url': '有効なURIである必要があります',
    'form.validator.slug': 'URIの一部が有効である必要があります',
    'form.submitting.signup': 'アカウントを作成中',
    'form.submitting.signin': 'ログインしています...',
    'form.submitting.default': '送信しています。',
    'form.submitting.sending': '送信中...',
    'form.validator.whitespace': 'スペースは空白にしないでください。',
    'form.validator.zipCode': '有効な郵便番号を使用してください。',
    'form.validator.isbn': 'ISBNのバージョンは10または13です。',
    'form.validator.btc': 'これは有効なBTCアドレスではありません。',
    'form.validator.eth': 'これは有効なETHアドレスではありません。',
    'form.weakPassword': 'このパスワードは弱いようです。数字や特殊文字を追加して、より強固なものにすることを検討してください。',
    // you can get these messages from: https://github.com/gwendall/meteor-simple-schema-i18n/tree/master/i18n
    // but don't forget to adjust the format
    'simpleschema.required': '「{label}」が必要です',
    'simpleschema.minString': '{label}は少なくとも{min, number}文字数が必要です',
    'simpleschema.maxString': '{label}は{max, number}文字を超えることはできません',
    'simpleschema.minNumber': '{label}は少なくとも{min, number}でなければなりません。',
    'simpleschema.maxNumber': '{label}は{max, number}を超えることはできません',
    'simpleschema.minNumberExclusive': '{label}は{min, number}よりも大きくなければなりません。',
    'simpleschema.maxNumberExclusive': '{label}は{max, number}よりも小さくなければなりません。',
    'simpleschema.minDate': '{label}は{min, date}以降に入力してください',
    'simpleschema.maxDate': '{label}は{max, date}より前に入力してください',
    'simpleschema.badDate': '{label} は有効な日付ではありません。',
    'simpleschema.minCount': '{label} は{minCount, number}項目以上で指定してください',
    'simpleschema.maxCount': '{label}は{maxCount, number}項目以内で指定してください',
    'simpleschema.noDecimal': '{label} は整数で入力してください',
    'simpleschema.notAllowed': '{value} は有効ではありません。',
    'simpleschema.expectedString': '{label} は文字列で入力してください',
    'simpleschema.expectedNumber': '{label} は数字を入力してください',
    'simpleschema.expectedBoolean': '{label} はブール値で入力してください',
    'simpleschema.expectedArray': '{label} は配列で入力してください',
    'simpleschema.expectedObject': '{label} はオブジェクトを入力してください',
    'simpleschema.expectedConstructor': '{label} は{type}で入力してください',
    'simpleschema.keyNotInSchema': '{key} はスキーマで許可されていません。',
    'simpleschema.notUnique': '{label}は特殊なものを使用してください。',
    'simpleschema.regEx.0': '{label} は通常の表現検証を満たしませんでした。',
    'simpleschema.regEx.1': '{label} は有効なメールアドレスを入力してください。',
    'simpleschema.regEx.2': '{label} は有効なメールアドレスを入力してください。',
    'simpleschema.regEx.3': '{label} は有効なドメインを使用してください。',
    'simpleschema.regEx.4': '{label} は有効なドメインを使用してください。',
    'simpleschema.regEx.5': '{label} は有効なIPv4またはIPv6アドレスで使用してください。',
    'simpleschema.regEx.6': '{label} は有効なIPv4アドレスを入力してください。',
    'simpleschema.regEx.7': '{label} は有効なIPv6アドレスで入力してください',
    'simpleschema.regEx.8': '{label} は有効なURLを入力してください',
    'simpleschema.regEx.9': '{label} は英数字で入力してください'
};