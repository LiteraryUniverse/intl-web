export default {
    'form.requiredSymbol': '*',
    'form.validator.required': '必填欄位',
    'form.validator.mustBeNumber': '必須是數字',
    'form.validator.minNumber': '應該大於 {min, number}',
    'form.validator.maxNumber': '應該小於 {max, number}',
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
    'form.validator.email': '必須是有效的電子郵件',
    'form.validator.url': '必須是有效的網址',
    'form.validator.slug': '必須是有效的網址一部分',
    'form.submitting.signup': '正在創建帳號...',
    'form.submitting.signin': '正在登入...',
    'form.submitting.default': '正在提交...',
    'form.submitting.sending': '正在發送...',
    'form.validator.whitespace': '不能有空格',
    'form.validator.zipCode': '必須是有效的郵遞區號',
    'form.validator.isbn': '我們只接受10或13位版本的ISBN',
    'form.validator.btc': '這不是有效的BTC地址。',
    'form.validator.eth': '這不是有效的ETH地址。',
    'form.weakPassword': '這個密碼看起來很弱。請考慮添加數字和特殊字符來增強它的安全性。',
    // you can get these messages from: https://github.com/gwendall/meteor-simple-schema-i18n/tree/master/i18n
    // but don't forget to adjust the format
    'simpleschema.required': '{label} 是必填的',
    'simpleschema.minString': '{label} 必須至少有 {min, number} 個字符',
    'simpleschema.maxString': '{label} 不能超過 {max, number} 個字符',
    'simpleschema.minNumber': '{label} 必須至少為 {min, number}',
    'simpleschema.maxNumber': '{label} 不能超過 {max, number}',
    'simpleschema.minNumberExclusive': '{label} 必須大於 {min, number}',
    'simpleschema.maxNumberExclusive': '{label} 必須小於 {max, number}',
    'simpleschema.minDate': '{label} 必須在 {min, date}或之後',
    'simpleschema.maxDate': '{label} 不能在 {max, date}之後',
    'simpleschema.badDate': '{label} 不是有效的日期',
    'simpleschema.minCount': '您必須指定至少 {minCount, number} 個值',
    'simpleschema.maxCount': '您不能指定超過 {maxCount, number} 個值',
    'simpleschema.noDecimal': '{label} 必須是整數',
    'simpleschema.notAllowed': '{value} 不是允許的值',
    'simpleschema.expectedString': '{label} 必須是字串',
    'simpleschema.expectedNumber': '{label} 必須是數字',
    'simpleschema.expectedBoolean': '{label} 必須是布林值',
    'simpleschema.expectedArray': '{label} 必須是陣列',
    'simpleschema.expectedObject': '{label} 必須是物件',
    'simpleschema.expectedConstructor': '{label} 必須是 {type}',
    'simpleschema.keyNotInSchema': '{key} 不符合架構規範',
    'simpleschema.notUnique': '{label} 必須是唯一的',
    'simpleschema.regEx.0': '{label} 未通過正則表達式驗證',
    'simpleschema.regEx.1': '{label} 必須是有效的電子郵件地址',
    'simpleschema.regEx.2': '{label} 必須是有效的電子郵件地址',
    'simpleschema.regEx.3': '{label} 必須是有效的網域',
    'simpleschema.regEx.4': '{label} 必須是有效的網域',
    'simpleschema.regEx.5': '{label} 必須是有效的IPv4或IPv6地址',
    'simpleschema.regEx.6': '{label} 必須是有效的IPv4地址',
    'simpleschema.regEx.7': '{label} 必須是有效的IPv6地址',
    'simpleschema.regEx.8': '{label} 必須是有效的URL',
    'simpleschema.regEx.9': '{label} 必須是有效的字母數字ID'
};