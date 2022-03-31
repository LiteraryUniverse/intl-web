export default {
    'form.requiredSymbol': '*',
    'form.validator.required': 'Obligatoriskt fält',
    'form.validator.mustBeNumber': 'Måste vara ett nummer',
    'form.validator.minNumber': 'Should be greater than {min, number}',
    'form.validator.maxNumber': 'Should be lower than {max, number}',
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
    'form.validator.email': 'Måste vara en giltig e-postadress',
    'form.validator.url': 'Måste vara en giltig URL',
    'form.validator.slug': 'Måste vara en giltig del av URL',
    'form.submitting.signup': 'Skapa ett konto...',
    'form.submitting.signin': 'Loggar in...',
    'form.submitting.default': 'Skickar...',
    'form.submitting.sending': 'Skickar...',
    'form.validator.whitespace': 'Får inte ha något vitt utrymme',
    'form.validator.zipCode': 'Måste vara ett giltigt postnummer',
    'form.validator.isbn': 'Vi accepterar endast 10 eller 13 versioner av ISBN',
    // you can get these messages from: https://github.com/gwendall/meteor-simple-schema-i18n/tree/master/i18n
    // but don't forget to adjust the format
    'simpleschema.required': '{label} krävs',
    'simpleschema.minString': '{label} must be at least {min, number} characters',
    'simpleschema.maxString': '{label} cannot exceed {max, number} characters',
    'simpleschema.minNumber': '{label} must be at least {min, number}',
    'simpleschema.maxNumber': '{label} cannot exceed {max, number}',
    'simpleschema.minNumberExclusive': '{label} must be greater than {min, number}',
    'simpleschema.maxNumberExclusive': '{label} must be less than {max, number}',
    'simpleschema.minDate': '{label} must be on or after {min, date}',
    'simpleschema.maxDate': '{label} cannot be after {max, date}',
    'simpleschema.badDate': '{label} är inte ett godkänt datum',
    'simpleschema.minCount': 'You must specify at least {minCount, number} values',
    'simpleschema.maxCount': 'You cannot specify more than {maxCount, number} values',
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