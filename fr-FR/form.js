export default {
    'form.requiredSymbol': '*',
    'form.validator.required': 'Champ obligatoire',
    'form.validator.mustBeNumber': 'Doit être un nombre',
    'form.validator.minNumber': 'Doit être supérieur à {min, number}',
    'form.validator.maxNumber': 'Doit être inférieur à {max, number}',
    'form.validator.maxLength': `Doit être inférieur à {max, number} {what, select,
    characters {caractères}
    tags {tags}
    genres {genres}
    numbers {nombres}
    other {}
  }`,
    'form.validator.minLength': `Doit être au moins {min, number} {what, select,
    characters {caractères}
    tags {tags}
    genres {genres}
    genre {genre}
    numbers {nombres}
    other {}
  }`,
    'form.validator.email': 'Doit être un email valide',
    'form.validator.url': 'Doit être une URL valide',
    'form.validator.slug': 'Doit être une partie valide de l\'URL',
    'form.submitting.signup': 'Créer un compte...',
    'form.submitting.signin': 'Connexion en cours...',
    'form.submitting.default': 'Soumission en cours...',
    'form.submitting.sending': 'Envoi en cours...',
    'form.validator.whitespace': 'Ne doit pas avoir d\'espace blanc',
    'form.validator.zipCode': 'Doit être un code postal valide',
    'form.validator.isbn': 'Nous n\'acceptons que la version 10 ou 13 de l\'ISBN',
    'form.validator.btc': 'Ceci n\'est pas une adresse BTC valide.',
    'form.validator.eth': 'Ceci n\'est pas une adresse ETH valide.',
    'form.weakPassword': 'Ce mot de passe semble faible. Veuillez envisager de le rendre plus fort en ajoutant des chiffres et des caractères spéciaux.',
    // you can get these messages from: https://github.com/gwendall/meteor-simple-schema-i18n/tree/master/i18n
    // but don't forget to adjust the format
    'simpleschema.required': '{label} est obligatoire',
    'simpleschema.minString': '{label} doit comporter au moins {min, number} caractères',
    'simpleschema.maxString': '{label} peut pas dépasser {max, number} caractères',
    'simpleschema.minNumber': '{label} doit avoir au moins {min, number}',
    'simpleschema.maxNumber': '{label} ne peut pas dépasser {max, number}',
    'simpleschema.minNumberExclusive': '{label} doit être supérieur à {min, number}',
    'simpleschema.maxNumberExclusive': '{label} doit être inférieur à {max, number}',
    'simpleschema.minDate': '{label} doit être le, ou après le {min, date}',
    'simpleschema.maxDate': '{label} ne peut pas être après le {max, date}',
    'simpleschema.badDate': '{label} n\'est pas une date valide',
    'simpleschema.minCount': 'Vous devez spécifier au moins {minCount, number} valeurs',
    'simpleschema.maxCount': 'Vous ne pouvez pas spécifier plus de {maxCount, number} valeurs',
    'simpleschema.noDecimal': '{label} doit être un nombre entier',
    'simpleschema.notAllowed': '{value} n\'est pas une valeur acceptée',
    'simpleschema.expectedString': '{label} doit être une chaîne de caractères',
    'simpleschema.expectedNumber': '{label} doit être un nombre',
    'simpleschema.expectedBoolean': '{label} doit être un booléen',
    'simpleschema.expectedArray': '{label} doit être un tableau',
    'simpleschema.expectedObject': '{label} doit être un objet',
    'simpleschema.expectedConstructor': '{label} doit être un {type}',
    'simpleschema.keyNotInSchema': 'Le champ {key} n\'est pas permis par le schéma',
    'simpleschema.notUnique': '{label} doit être unique',
    'simpleschema.regEx.0': '{label} échec de la validation de l\'expression régulière',
    'simpleschema.regEx.1': '{label} doit être une adresse email valide',
    'simpleschema.regEx.2': '{label} doit être une adresse email valide',
    'simpleschema.regEx.3': '{label} doit être un domaine valide',
    'simpleschema.regEx.4': '{label} domain doit être un domaine valide',
    'simpleschema.regEx.5': '{label} doit être une adresse IPv4 ou IPv6 valide',
    'simpleschema.regEx.6': '{label} doit être une adresse IPv4 valide',
    'simpleschema.regEx.7': '{label} doit être une adresse IPv6 valide',
    'simpleschema.regEx.8': '{label} doit être une URL valide',
    'simpleschema.regEx.9': '{label} doit être un identifiant alphanumérique valide'
};