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
    'simpleschema.required': '{label} è richiesto',
    'simpleschema.minString': '{label} deve essere almeno {min} caratteri',
    'simpleschema.maxString': '{label} non può essere più di {max} caratteri',
    'simpleschema.minNumber': '{label} deve essere almeno {min}',
    'simpleschema.maxNumber': '{label} non può essere più di {max}',
    'simpleschema.minNumberExclusive': '{label} deve essere maggiore di {min}',
    'simpleschema.maxNumberExclusive': '{label} deve essere minore di {max}',
    'simpleschema.minDate': '{label} deve coincidere o essere successivo a {min}',
    'simpleschema.maxDate': '{label} non può essere successivo a {max}',
    'simpleschema.badDate': '{label} non è una data valida',
    'simpleschema.minCount': 'Devi specificare almeno {minCount} valori',
    'simpleschema.maxCount': 'Non puoi specificare più di {maxCount} valori',
    'simpleschema.noDecimal': '{label} deve essere un intero',
    'simpleschema.notAllowed': '{value} non è un valore consentito',
    'simpleschema.expectedString': '{label} deve essere una stringa',
    'simpleschema.expectedNumber': '{label} deve essere un numero',
    'simpleschema.expectedBoolean': '{label} deve essere un booleano',
    'simpleschema.expectedArray': '{label} deve essere un vettore',
    'simpleschema.expectedObject': '{label} deve essere un oggetto',
    'simpleschema.expectedConstructor': '{label} deve essere un {type}',
    'simpleschema.keyNotInSchema': '{key} non è consentito dallo schema',
    'simpleschema.notUnique': '{label} must be unique',
    'simpleschema.regEx.0': '{label} ha fallito la validazione dell\'espressione regolare',
    'simpleschema.regEx.1': '{label} deve essere un indirizzo e-mail valido',
    'simpleschema.regEx.2': '{label} deve essere un indirizzo e-mail valido',
    'simpleschema.regEx.3': '{label} deve essere un dominio valido',
    'simpleschema.regEx.4': '{label} deve essere un dominio valido',
    'simpleschema.regEx.5': '{label} deve essere un indirizzo IPv4 o IPv6 valido',
    'simpleschema.regEx.6': '{label} deve essere un indirizzo IPv4 valido',
    'simpleschema.regEx.7': '{label} deve essere un indirizzo IPv6 valido',
    'simpleschema.regEx.8': '{label} deve essere uno URL valido',
    'simpleschema.regEx.9': '{label} deve essere un ID alfanumerico valido'
};