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
    'simpleschema.required': '{label} es obligatorio',
    'simpleschema.minString': '{label} tiene que tener por lo menos {min} caracteres',
    'simpleschema.maxString': '{label} no puede tener mas de {max} caracteres',
    'simpleschema.minNumber': '{label} tiene que ser por lo menos {min}',
    'simpleschema.maxNumber': '{label} no puede exceder {max}',
    'simpleschema.minNumberExclusive': '{label} tiene que ser mas grande que {min}',
    'simpleschema.maxNumberExclusive': '{label} tiene que ser mas pequeño que {max}',
    'simpleschema.minDate': '{label} tiene que ser anterior a {min}',
    'simpleschema.maxDate': '{label} no puede ser posterior a {max}',
    'simpleschema.badDate': '{label} no es una fecha válida',
    'simpleschema.minCount': 'Tiene que especificar por lo menos {minCount} valores',
    'simpleschema.maxCount': 'No puede especificar mas de {maxCount} valores',
    'simpleschema.noDecimal': '{label} tiene que ser un número entero',
    'simpleschema.notAllowed': '{value} no es un valor permitido',
    'simpleschema.expectedString': '{label} tiene que ser una cadena de caracteres',
    'simpleschema.expectedNumber': '{label} tiene que ser un numero',
    'simpleschema.expectedBoolean': '{label} tiene que ser de tipo \'si/no',
    'simpleschema.expectedArray': '{label} tiene que ser una lista',
    'simpleschema.expectedObject': '{label} tiene que ser un objeto',
    'simpleschema.expectedConstructor': '{label} tiene que ser de tipo {type}',
    'simpleschema.keyNotInSchema': '{key} no está permitido por el esquema',
    'simpleschema.notUnique': '{label} must be unique',
    'simpleschema.regEx.0': '{label} falló la validación por Expresión Regular (Regex)',
    'simpleschema.regEx.1': '{label} tiene que ser una dirección de correo electrónico válida',
    'simpleschema.regEx.2': '{label} tiene que ser una dirección de correo electrónico válida',
    'simpleschema.regEx.3': '{label} tiene que ser un nombre de dominio válido',
    'simpleschema.regEx.4': '{label} tiene que ser un nombre de dominio válido',
    'simpleschema.regEx.5': '{label} tiene que ser una dirección de IPv4 o IPv6 válida',
    'simpleschema.regEx.6': '{label} tiene que ser una dirección de IPv4 válida',
    'simpleschema.regEx.7': '{label} tiene que ser una dirección de IPv6 válida',
    'simpleschema.regEx.8': '{label} tiene que ser una URL válida',
    'simpleschema.regEx.9': '{label} tiene que ser un ID alfanumérico'
};