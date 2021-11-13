export default {
    'form.validator.required': 'Requeridos',
    'form.validator.mustBeNumber': 'Deve ser um número',
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
    'form.validator.email': 'Deve ser um e-mail válido',
    'form.validator.url': 'A URL precisa ser válida',
    'form.validator.slug': 'Deve ser uma parte válida da URL',
    'form.submitting.signup': 'Criando conta...',
    'form.submitting.signin': 'Logando...',
    'form.submitting.default': 'Submetendo...',
    'form.submitting.sending': 'Enviando...',
    'form.validator.whitespace': 'Não deve ter espaço em branco',
    'form.validator.zipCode': 'Deve ser um código postal válido',
    'form.validator.isbn': 'Somente aceitamos a versão 10 ou 13 do ISBN',
    // you can get these messages from: https://github.com/gwendall/meteor-simple-schema-i18n/tree/master/i18n
    // but don't forget to adjust the format
    'simpleschema.required': '{label} é obrigatório',
    'simpleschema.minString': '{label} must be at least {min, number} characters',
    'simpleschema.maxString': '{label} cannot exceed {max, number} characters',
    'simpleschema.minNumber': '{label} must be at least {min, number}',
    'simpleschema.maxNumber': '{label} cannot exceed {max, number}',
    'simpleschema.minNumberExclusive': '{label} must be greater than {min, number}',
    'simpleschema.maxNumberExclusive': '{label} must be less than {max, number}',
    'simpleschema.minDate': '{label} must be on or after {min, number}',
    'simpleschema.maxDate': '{label} cannot be after {max, number}',
    'simpleschema.badDate': '{label} não é uma data válida',
    'simpleschema.minCount': 'You must specify at least {minCount, number} values',
    'simpleschema.maxCount': 'You cannot specify more than {maxCount, number} values',
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