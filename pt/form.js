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
    'simpleschema.required': '{label} é obrigatório',
    'simpleschema.minString': '{label} deve ter no mínimo {min} caracteres',
    'simpleschema.maxString': '{label} não pode ter mais do que {max} caracteres',
    'simpleschema.minNumber': '{label} deve ser ao menos {min}',
    'simpleschema.maxNumber': '{label} não pode ser maior do que {max}',
    'simpleschema.minNumberExclusive': '{label} deve ser maior que {min}',
    'simpleschema.maxNumberExclusive': '{label} deve ser menor que {max}',
    'simpleschema.minDate': '{label} deve ser igual a ou antes de {min}',
    'simpleschema.maxDate': '{label} não pode ser depois de {max}',
    'simpleschema.badDate': '{label} não é uma data válida',
    'simpleschema.minCount': 'Você deve especificar no mínimo {minCount} valores',
    'simpleschema.maxCount': 'Você não pode especificar mais do que {maxCount} valores',
    'simpleschema.noDecimal': '{label} deve ser um número inteiro',
    'simpleschema.notAllowed': '{value} não é um valor permitido',
    'simpleschema.expectedString': '{label} deve ser uma string',
    'simpleschema.expectedNumber': '{label} deve ser um número',
    'simpleschema.expectedBoolean': '{label} deve ser um boolean',
    'simpleschema.expectedArray': '{label} deve ser um array',
    'simpleschema.expectedObject': '{label} deve ser um objeto',
    'simpleschema.expectedConstructor': '{label} deve ser um(a) {type}',
    'simpleschema.keyNotInSchema': '{key} não é permitido pelo esquema',
    'simpleschema.notUnique': '{label} must be unique',
    'simpleschema.regEx.0': '{label} falhou no teste de expressão regular',
    'simpleschema.regEx.1': '{label} deve ser um endereço de email válido',
    'simpleschema.regEx.2': '{label} deve ser um endereço de email válido',
    'simpleschema.regEx.3': '{label} deve ser um domínio válido',
    'simpleschema.regEx.4': '{label} deve ser um domínio válido',
    'simpleschema.regEx.5': '{label} deve ser um endereço IPv4 ou IPv6 válido',
    'simpleschema.regEx.6': '{label} deve ser um endereço IPv4 válido',
    'simpleschema.regEx.7': '{label} deve ser um endereço IPv6 válido',
    'simpleschema.regEx.8': '{label} deve ser uma URL válida',
    'simpleschema.regEx.9': '{label} deve ser um ID alfanumérico válido'
};