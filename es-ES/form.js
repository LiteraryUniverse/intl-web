export default {
    'form.validator.required': 'Campo obligatorio',
    'form.validator.mustBeNumber': 'Debe ser un número',
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
    'form.validator.email': 'El e-mail debe ser válido',
    'form.validator.url': 'La URL debe ser válida',
    'form.validator.slug': 'La parte de la URL debe ser válida',
    'form.submitting.signup': 'Creando cuenta...',
    'form.submitting.signin': 'Iniciando sesión...',
    'form.submitting.default': 'Entregando...',
    'form.submitting.sending': 'Enviando...',
    'form.validator.whitespace': 'No puede haber espacios en blanco',
    'form.validator.zipCode': 'El código postal debe ser válido',
    'form.validator.isbn': 'Sólo aceptamos la versión 10 o 13 de ISBN',
    // you can get these messages from: https://github.com/gwendall/meteor-simple-schema-i18n/tree/master/i18n
    // but don't forget to adjust the format
    'simpleschema.required': '{label} es obligatorio',
    'simpleschema.minString': '{label} must be at least {min, number} characters',
    'simpleschema.maxString': '{label} cannot exceed {max, number} characters',
    'simpleschema.minNumber': '{label} must be at least {min, number}',
    'simpleschema.maxNumber': '{label} cannot exceed {max, number}',
    'simpleschema.minNumberExclusive': '{label} must be greater than {min, number}',
    'simpleschema.maxNumberExclusive': '{label} must be less than {max, number}',
    'simpleschema.minDate': '{label} must be on or after {min, number}',
    'simpleschema.maxDate': '{label} cannot be after {max, number}',
    'simpleschema.badDate': '{label} no es una fecha válida',
    'simpleschema.minCount': 'You must specify at least {minCount, number} values',
    'simpleschema.maxCount': 'You cannot specify more than {maxCount, number} values',
    'simpleschema.noDecimal': '{label} tiene que ser un número entero',
    'simpleschema.notAllowed': '{value} no es un valor permitido',
    'simpleschema.expectedString': '{label} tiene que ser una cadena de caracteres',
    'simpleschema.expectedNumber': '{label} tiene que ser un numero',
    'simpleschema.expectedBoolean': '{label} tiene que ser de tipo \'si/no',
    'simpleschema.expectedArray': '{label} tiene que ser una lista',
    'simpleschema.expectedObject': '{label} tiene que ser un objeto',
    'simpleschema.expectedConstructor': '{label} tiene que ser de tipo {type}',
    'simpleschema.keyNotInSchema': '{key} no está permitido por el esquema',
    'simpleschema.notUnique': '{label} tiene que ser única',
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