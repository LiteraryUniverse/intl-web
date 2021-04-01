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
    'simpleschema.required': '{label} girmek zorunludur',
    'simpleschema.minString': '{label} en az {min} karakter olmalı',
    'simpleschema.maxString': '{label} {max} karakteri geçemez',
    'simpleschema.minNumber': '{label} en az {min} olabilir',
    'simpleschema.maxNumber': '{label} en fazla {max} olabilir',
    'simpleschema.minNumberExclusive': '{label} {min} üzeri olmalı',
    'simpleschema.maxNumberExclusive': '{label} {max} altı olmalı',
    'simpleschema.minDate': '{label} {min} veya daha ileri olmalı',
    'simpleschema.maxDate': '{label} {max} tarihinden sonra olamaz',
    'simpleschema.badDate': '{label} geçerli bir tarih değil',
    'simpleschema.minCount': 'En az {minCount} tane değer olmalı',
    'simpleschema.maxCount': '{maxCount} üstü sayıda değer olamaz',
    'simpleschema.noDecimal': '{label} bir tamsayı olmalı',
    'simpleschema.notAllowed': '{value} izin verilen bir değer değil',
    'simpleschema.expectedString': '{label} bir metin olmalı',
    'simpleschema.expectedNumber': '{label} bir rakam olmalı',
    'simpleschema.expectedBoolean': '{label} bir mantıksal değer olmalı',
    'simpleschema.expectedArray': '{label} bir dizi olmalı',
    'simpleschema.expectedObject': '{label} bir nesne olmalı',
    'simpleschema.expectedConstructor': '{label} bir {type} olmalı',
    'simpleschema.keyNotInSchema': '{key} şemada izin verilen bir anahtar değil',
    'simpleschema.notUnique': '{label} must be unique',
    'simpleschema.regEx.0': '{label} kurallı ifade testini geçemedi',
    'simpleschema.regEx.1': '{label} geçerli bir eposta adresi olmalı',
    'simpleschema.regEx.2': '{label} geçerli bir eposta adresi olmalı',
    'simpleschema.regEx.3': '{label} geçerli bir alan adı olmalı',
    'simpleschema.regEx.4': '{label} geçerli bir alan adı olmalı',
    'simpleschema.regEx.5': '{label} geçerli bir IPv4 veya IPv6 adresi olmalı',
    'simpleschema.regEx.6': '{label} geçerli bir IPv4 adresi olmalı',
    'simpleschema.regEx.7': '{label} geçerli bir IPv6 adresi olmalı',
    'simpleschema.regEx.8': '{label} geçerli bir URL olmalı',
    'simpleschema.regEx.9': '{label} geçerli bir alfasayısal ID olmalı'
};