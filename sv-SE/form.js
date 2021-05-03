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
    'simpleschema.required': '{label} krävs',
    'simpleschema.minString': '{label} måste vara minst {min} bokstäver',
    'simpleschema.maxString': '{label} får inte överskrida {max} bokstäver',
    'simpleschema.minNumber': '{label} måste vara minst {min}',
    'simpleschema.maxNumber': '{label} får inte överskrida {max}',
    'simpleschema.minNumberExclusive': '{label} måste vara större än {min}',
    'simpleschema.maxNumberExclusive': '{label} måste vara mindre än {max}',
    'simpleschema.minDate': '{label} måste vara den {min} eller senare',
    'simpleschema.maxDate': '{label} får inte vara senare än {max}',
    'simpleschema.badDate': '{label} är inte ett godkänt datum',
    'simpleschema.minCount': 'Du måste åtminstone ange {minCount} värden',
    'simpleschema.maxCount': 'Du får inte ange fler än {maxCount} värden',
    'simpleschema.noDecimal': '{label} måste vara ett nummer',
    'simpleschema.notAllowed': '{value} är inte ett godkänt nummer',
    'simpleschema.expectedString': '{label} måste vara en sträng',
    'simpleschema.expectedNumber': '{label} måste vara ett nummer',
    'simpleschema.expectedBoolean': '{label} måste vara en boolean',
    'simpleschema.expectedArray': '{label} måste vara en lista',
    'simpleschema.expectedObject': '{label} måste vara ett objekt',
    'simpleschema.expectedConstructor': '{label} måste vara av typen {type}',
    'simpleschema.keyNotInSchema': '{key} är inte godkänt av schemat',
    'simpleschema.notUnique': '{label} måste vara unik',
    'simpleschema.regEx.0': '{label} misslyckades med det reguljära uttrycket vid validering',
    'simpleschema.regEx.1': '{label} måste vara en godkänd e-postadress',
    'simpleschema.regEx.2': '{label} måste vara en godkänd e-postadress',
    'simpleschema.regEx.3': '{label} måste vara en godkänt domän',
    'simpleschema.regEx.4': '{label} måste vara en godkänt domän',
    'simpleschema.regEx.5': '{label} måste vara i ett godkänt IPv4 eller IPv6 format',
    'simpleschema.regEx.6': '{label} måste vara i ett godkänt IPv4 format',
    'simpleschema.regEx.7': '{label} måste vara i ett godkänt IPv6 format',
    'simpleschema.regEx.8': '{label} måste vara en godkänd URL',
    'simpleschema.regEx.9': '{label} måste vara ett godkänt alfanumerisk ID'
};