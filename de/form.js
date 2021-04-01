export default {
    'form.validator.required': 'Required field',
    'form.validator.mustBeNumber': 'Muss eine Zahl sein',
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
    'form.validator.email': 'Muss eine gültige E-Mail sein',
    'form.validator.url': 'Muss eine gültige URL sein',
    'form.validator.slug': 'Must be a valid part of URL',
    'form.submitting.signup': 'Creating account...',
    'form.submitting.signin': 'Logging in...',
    'form.submitting.default': 'Submitting...',
    'form.submitting.sending': 'Sending...',
    'form.validator.whitespace': 'Muss keinen Leerzeichen haben',
    'form.validator.zipCode': 'Muss eine gültige Postleitzahl sein',
    'form.validator.isbn': 'Wir akzeptieren nur 10 oder 13 Versionen von ISBN',
    // you can get these messages from: https://github.com/gwendall/meteor-simple-schema-i18n/tree/master/i18n
    // but don't forget to adjust the format
    'simpleschema.required': '{label} ist erforderlich',
    'simpleschema.minString': '{label} muss mindestens {min} Buchstaben enthalten',
    'simpleschema.maxString': '{label} kann nicht mehr als {max} Buchstaben haben',
    'simpleschema.minNumber': '{label} muss mindestens {min} sein',
    'simpleschema.maxNumber': '{label} darf nicht mehr als {max} sein',
    'simpleschema.minNumberExclusive': '{label} muss grösser als {min} sein',
    'simpleschema.maxNumberExclusive': '{label} muss kleiner als {max} sein',
    'simpleschema.minDate': '{label} muss am oder nach dem {min} sein',
    'simpleschema.maxDate': '{label} darf nicht nach dem {max} sein',
    'simpleschema.badDate': '{label} ist kein valides Datum',
    'simpleschema.minCount': 'Sie müssen mindestens {minCount} Werte angeben',
    'simpleschema.maxCount': 'Sie können nicht mehr als {maxCount} Werte angeben',
    'simpleschema.noDecimal': '{label} muss eine Ganzzahl sein',
    'simpleschema.notAllowed': '{value} is not an allowed value',
    'simpleschema.expectedString': '{label} must be a string',
    'simpleschema.expectedNumber': '{label} must be a number',
    'simpleschema.expectedBoolean': '{label} must be a boolean',
    'simpleschema.expectedArray': '{label} must be an array',
    'simpleschema.expectedObject': '{label} must be an object',
    'simpleschema.expectedConstructor': '{label} must be a {type}',
    'simpleschema.keyNotInSchema': '{key} is not allowed by the schema',
    'simpleschema.notUnique': '{label} must be unique',
    'simpleschema.regEx.0': '{label} failed regular expression validation',
    'simpleschema.regEx.1': '{label} must be a valid e-mail address',
    'simpleschema.regEx.2': '{label} must be a valid e-mail address',
    'simpleschema.regEx.3': '{label} must be a valid domain',
    'simpleschema.regEx.4': '{label} must be a valid domain',
    'simpleschema.regEx.5': '{label} must be a valid IPv4 or IPv6 address',
    'simpleschema.regEx.6': '{label} must be a valid IPv4 address',
    'simpleschema.regEx.7': '{label} must be a valid IPv6 address',
    'simpleschema.regEx.8': '{label} must be a valid URL',
    'simpleschema.regEx.9': '{label} must be a valid alphanumeric ID'
};