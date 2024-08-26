export default {
    'form.requiredSymbol': '*',
    'form.validator.required': 'Obligatoriskt fält',
    'form.validator.mustBeNumber': 'Måste vara ett nummer',
    'form.validator.minNumber': 'Bör vara större än {min, number}',
    'form.validator.maxNumber': 'Bör vara lägre än {max, number}',
    'form.validator.maxLength': `Bör vara mindre än {max, number} {what, select,
    characters {tecken}
    tags {taggar}
    genres {genrer}
    numbers {nummer}
    other {}
  }`,
    'form.validator.minLength': `Bör vara minst {min, number} {what, select,
    characters {tecken}
    tags {taggar}
    genres {genrer}
    genre {genre}
    numbers {nummer}
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
    'form.validator.btc': 'Detta är inte en giltig BTC-adress.',
    'form.validator.eth': 'Detta är inte en giltig ETH-adress.',
    'form.weakPassword': 'Detta lösenord ser svagt ut. Överväg att göra det starkare genom att lägga till siffror och specialtecken.',
    // you can get these messages from: https://github.com/gwendall/meteor-simple-schema-i18n/tree/master/i18n
    // but don't forget to adjust the format
    'simpleschema.required': '{label} krävs',
    'simpleschema.minString': '{label} måste bestå av minst {min, number} tecken',
    'simpleschema.maxString': '{label} får inte överskrida {max, number} bokstäver',
    'simpleschema.minNumber': '{label} måste vara minst {min, number}',
    'simpleschema.maxNumber': '{label} får inte överskrida {max, number}',
    'simpleschema.minNumberExclusive': '{label} måste vara större än {min, number}',
    'simpleschema.maxNumberExclusive': '{label} måste vara mindre än {max, number}',
    'simpleschema.minDate': '{label} måste vara den {min, date} eller senare',
    'simpleschema.maxDate': '{label} får inte vara senare än {max, date}',
    'simpleschema.badDate': '{label} är inte ett godkänt datum',
    'simpleschema.minCount': 'Du måste åtminstone ange {minCount, number} värden',
    'simpleschema.maxCount': 'Du får inte ange fler än {maxCount, number} värden',
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