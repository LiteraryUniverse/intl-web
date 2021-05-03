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
    'simpleschema.required': '{label} is vereist',
    'simpleschema.minString': '{label} moet minimaal {min} karakters bevatten',
    'simpleschema.maxString': '{label} kan maximaal {max} karakters bevatten',
    'simpleschema.minNumber': '{label} moet minstens {min} zijn',
    'simpleschema.maxNumber': '{label} kan niet meer dan {max} zijn',
    'simpleschema.minNumberExclusive': '{label} moet minstens {min} zijn',
    'simpleschema.maxNumberExclusive': '{label} kan niet meer dan {max} zijn',
    'simpleschema.minDate': '{label} moet minimaal datum {min} zijn',
    'simpleschema.maxDate': '{label} kan niet de datum {max} overschrijden',
    'simpleschema.badDate': '{label} is niet een datum in het gevraagde formaat',
    'simpleschema.minCount': 'Minimaal {minCount} waardes invoeren',
    'simpleschema.maxCount': 'Er kunnen niet meer dan {maxCount} waardes worden ingevoerd',
    'simpleschema.noDecimal': '{label} kan geen kommagetal zijn',
    'simpleschema.notAllowed': '{value} mag niet ingevoerd worden',
    'simpleschema.expectedString': '{label} moet van het type tekst zijn',
    'simpleschema.expectedNumber': '{label} moet van het type getal zijn',
    'simpleschema.expectedBoolean': '{label} moet van het type ja/nee zijn',
    'simpleschema.expectedArray': '{label} moet van het type Array zijn',
    'simpleschema.expectedObject': '{label} moet van het type Object zijn',
    'simpleschema.expectedConstructor': '{label} moet het type {type} zijn',
    'simpleschema.keyNotInSchema': '{key} mag niet als waarde worden ingevoerd',
    'simpleschema.notUnique': '{label} moet uniek zijn',
    'simpleschema.regEx.0': '{label} is niet juist ingevoerd',
    'simpleschema.regEx.1': '{label} moet een valide e-mailadres zijn',
    'simpleschema.regEx.2': '{label} moet een valide e-mailadres zijn',
    'simpleschema.regEx.3': '{label} moet een valide domeinnaam zijn',
    'simpleschema.regEx.4': '{label} moet een valide domeinnaam zijn',
    'simpleschema.regEx.5': '{label} moet een valide IPv4 of IPv6 adres zijn',
    'simpleschema.regEx.6': '{label} moet een valide IPv4 adres zijn',
    'simpleschema.regEx.7': '{label} moet een valide IPv6 adres zijn',
    'simpleschema.regEx.8': '{label} moet een valide URL zijn',
    'simpleschema.regEx.9': '{label} moet een valide alfanumeriek ID zijn'
};