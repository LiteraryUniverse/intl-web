export default {
    'form.requiredSymbol': '*',
    'form.validator.required': 'Обязательное поле',
    'form.validator.mustBeNumber': 'Должно быть числом',
    'form.validator.minNumber': 'Должно быть больше {min, number}',
    'form.validator.maxNumber': 'Должно быть меньше {max, number}',
    'form.validator.maxLength': `Должно быть меньше {max, number} {what, select,
    characters {символов}
    tags {меток}
    genres {жанров}
    numbers {цифр}
    other {}
  }`,
    'form.validator.minLength': `Должно быть хотя бы {min, number} {what, select,
    characters {символов}
    tags {меток}
    genres {жанров}
    genre {жанр}
    numbers {цифр}
    other {}
  }`,
    'form.validator.email': 'Должен быть действующий адрес эл. почты',
    'form.validator.url': 'Должна быть действующая ссылка',
    'form.validator.slug': 'Должна быть действующая часть ссылки',
    'form.submitting.signup': 'Создание учётной записи...',
    'form.submitting.signin': 'Вход...',
    'form.submitting.default': 'Обработка...',
    'form.submitting.sending': 'Отправка...',
    'form.validator.whitespace': 'Не должно быть пробелов',
    'form.validator.zipCode': 'Почтовый индекс должен быть действительным',
    'form.validator.isbn': 'Мы принимаем только 10 или 13 версию ISBN',
    'form.validator.btc': 'Это не действительный адрес BTC.',
    'form.validator.eth': 'Это не действительный адрес ETH.',
    'form.weakPassword': 'Этот пароль выглядит слабым. Пожалуйста, подумайте о том, чтобы сделать его более надёжным, добавив цифры и специальные символы.',
    // you can get these messages from: https://github.com/gwendall/meteor-simple-schema-i18n/tree/master/i18n
    // but don't forget to adjust the format
    'simpleschema.required': '{label} обязательно',
    'simpleschema.minString': '{label} должно содержать не менее {min, number} символов',
    'simpleschema.maxString': '{label} не может превышать {max, number} символов',
    'simpleschema.minNumber': '{label} должно содержать не менее {min, number}',
    'simpleschema.maxNumber': '{label} не может превышать {max, number}',
    'simpleschema.minNumberExclusive': '{label} должно быть больше {min, number}',
    'simpleschema.maxNumberExclusive': '{label} должно быть меньше {max, number}',
    'simpleschema.minDate': '{label} должно начинаться {min, date}',
    'simpleschema.maxDate': '{label} не может быть после {max, date}',
    'simpleschema.badDate': '{label} не является корректной датой',
    'simpleschema.minCount': 'Вы должны указать по крайней мере {minCount, number} значение(-ий)',
    'simpleschema.maxCount': 'Вы не можете указать более {maxCount, number} значений',
    'simpleschema.noDecimal': '{label} должно быть числом',
    'simpleschema.notAllowed': '{value} является недопустимым значением',
    'simpleschema.expectedString': '{label} должно быть строкой',
    'simpleschema.expectedNumber': '{label} должно быть числом',
    'simpleschema.expectedBoolean': '{label} должно быть булевым значением',
    'simpleschema.expectedArray': '{label} должно быть массивом',
    'simpleschema.expectedObject': '{label} должно быть объектом',
    'simpleschema.expectedConstructor': '{label} должно быть типа {type}',
    'simpleschema.keyNotInSchema': '{key} недопустимо схемой',
    'simpleschema.notUnique': '{label} должно быть уникальным',
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