export default {
    'form.requiredSymbol': '*',
    'form.validator.required': 'ആവശ്യമായ ഫീൽഡ്',
    'form.validator.mustBeNumber': 'ഒരു സംഖ്യയായിരിക്കണം',
    'form.validator.minNumber': 'Must be greater than {min, number}',
    'form.validator.maxNumber': 'Must be lower than {max, number}',
    'form.validator.maxLength': `Must be less than {max, number} {what, select,
    characters {characters}
    tags {tags}
    genres {genres}
    numbers {numbers}
    other {}
  }`,
    'form.validator.minLength': `Must be at least {min, number} {what, select,
    characters {characters}
    tags {tags}
    genres {genres}
    genre {genre}
    numbers {numbers}
    other {}
  }`,
    'form.validator.email': 'ഒരു സാധുവായ ഇമെയിൽ ആവശ്യമാണ്',
    'form.validator.url': 'ഒരു സാധുവായ URL ആവശ്യമാണ്',
    'form.validator.slug': 'URL യുടെ ഒരു സാധുവായ ഭാഗമായിരിക്കണം',
    'form.submitting.signup': 'അക്കൗണ്ട് സൃഷ്ടിക്കുന്നു...',
    'form.submitting.signin': 'ലോഗിൻ ചെയ്യുന്നു...',
    'form.submitting.default': 'സമർപ്പിക്കുന്നു...',
    'form.submitting.sending': 'അയയ്ക്കുന്നു...',
    'form.validator.whitespace': 'വെളുപ്പിക്കരുതാത്തതാണ്',
    'form.validator.zipCode': 'ഒരു സാധുവായ ZIP കോഡ് ആവശ്യമാണ്',
    'form.validator.isbn': 'ഞങ്ങൾ 10 അല്ലെങ്കിൽ 13 പതിപ്പായ ISBN മാത്രം സ്വീകരിക്കുന്നു',
    'form.validator.btc': 'ഇത് സാധുവായ BTC വിലാസമല്ല.',
    'form.validator.eth': 'ഇത് സാധുവായ ETH വിലാസമല്ല.',
    'form.weakPassword': 'ഈ പാസ്വേഡ് ദുർബലമാണ്. ദയവായി അത് ശക്തമാക്കുക എന്നായിട്ട് അതിനെ സംഖ്യകളും പ്രത്യേക പ്രതീകങ്ങളും ചേർക്കുക.',
    // you can get these messages from: https://github.com/gwendall/meteor-simple-schema-i18n/tree/master/i18n
    // but don't forget to adjust the format
    'simpleschema.required': '{label} ആവശ്യമാണ്',
    'simpleschema.minString': '{label} അതിനാൽ കുറഞ്ഞത് {min, number} അക്ഷരങ്ങൾ ആയിരിക്കണം',
    'simpleschema.maxString': '{label} അതിനാൽ കൂടാതെ {max, number} അക്ഷരങ്ങൾ ആയിരിക്കണം',
    'simpleschema.minNumber': '{label} അതിനാൽ കുറഞ്ഞത് {min, number}',
    'simpleschema.maxNumber': '{label} അതിനാൽ കൂടാതെ {max, number}',
    'simpleschema.minNumberExclusive': '{label} ശരിയായി ആയിരിക്കണം {min, number}',
    'simpleschema.maxNumberExclusive': '{label} ശരിയായി അല്ലെങ്കിൽ കുറഞ്ഞത് {max, number}',
    'simpleschema.minDate': '{label} അല്ലെങ്കിൽ അതിനു ശേഷം {min, date}ഉണ്ടായിരിക്കണം',
    'simpleschema.maxDate': '{label} അതിനു ശേഷം {max, date}കഴിഞ്ഞില്ല',
    'simpleschema.badDate': '{label} സാധുവായ തീയതി അല്ലെങ്കിൽ സമയമല്ല',
    'simpleschema.minCount': 'നിങ്ങൾക്ക് കുറഞ്ഞത് {minCount, number} മൂല്യങ്ങൾ നിർവ്വചിക്കേണ്ടതുണ്ട്',
    'simpleschema.maxCount': 'നിങ്ങൾക്ക് കൂടാതെ {maxCount, number} മൂല്യങ്ങൾ നിർവ്വചിക്കാൻ പാടുണ്ട്',
    'simpleschema.noDecimal': '{label} ഒരു പൂർണ്ണാംകം ആവശ്യമാണ്',
    'simpleschema.notAllowed': '{value} ഒരു അനുവദനീയ മൂല്യമല്ല',
    'simpleschema.expectedString': '{label} ഒരു സ്ട്രിംഗ് ആവശ്യമാണ്',
    'simpleschema.expectedNumber': '{label} ഒരു സംഖ്യ ആവശ്യമാണ്',
    'simpleschema.expectedBoolean': '{label} ഒരു ബൂളിയൻ ആവശ്യമാണ്',
    'simpleschema.expectedArray': '{label} ഒരു അറോയി ആവശ്യമാണ്',
    'simpleschema.expectedObject': '{label} ഒരു ഒബ്ജക്റ്റ് ആവശ്യമാണ്',
    'simpleschema.expectedConstructor': '{label} ഒരു {type}ആവശ്യമാണ്',
    'simpleschema.keyNotInSchema': '{key} സ്കീമയിൽ അനുവദനീയമല്ല',
    'simpleschema.notUnique': '{label} അനന്യമായിരിക്കണം',
    'simpleschema.regEx.0': '{label} പരിശോധിച്ചിട്ടില്ലാത്ത നിയമാവശ്യതയാണ് വരുത്തൽ',
    'simpleschema.regEx.1': '{label} ഒരു സാധുവായ ഇമെയിൽ വിലാസമായിരിക്കണം',
    'simpleschema.regEx.2': '{label} ഒരു സാധുവായ ഇമെയിൽ വിലാസമായിരിക്കണം',
    'simpleschema.regEx.3': '{label} ഒരു സാധുവായ ഡൊമെയിൻ ആയിരിക്കണം',
    'simpleschema.regEx.4': '{label} ഒരു സാധുവായ ഡൊമെയിൻ ആയിരിക്കണം',
    'simpleschema.regEx.5': '{label} ഒരു സാധുവായ IPv4 അല്ലെങ്കിൽ IPv6 വിലാസമായിരിക്കണം',
    'simpleschema.regEx.6': '{label} ഒരു സാധുവായ IPv4 വിലാസമായിരിക്കണം',
    'simpleschema.regEx.7': '{label} ഒരു സാധുവായ IPv6 വിലാസമായിരിക്കണം',
    'simpleschema.regEx.8': '{label} ഒരു സാധുവായ URL ആയിരിക്കണം',
    'simpleschema.regEx.9': '{label} ഒരു സാധുവായ അക്ഷരസംഖ്യാപരമായ ഐഡി ആയിരിക്കണം'
};