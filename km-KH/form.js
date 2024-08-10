export default {
    'form.requiredSymbol': '*',
    'form.validator.required': 'វាល​ដែល​ត្រូវ​បាន​ទាមទារ',
    'form.validator.mustBeNumber': 'ត្រូវ​តែ​ជា​លេខ',
    'form.validator.minNumber': 'ត្រូវតែធំជាង {min, number}',
    'form.validator.maxNumber': 'ត្រូវតែតិចជាង {max, number}',
    'form.validator.maxLength': `ត្រូវតែតិចជាង {max, number} {what, select,
    characters {តួអក្សរ}
    tags {ស្លាក}
    genres {ប្រភេទរឿង}
    numbers {លេខ}
    other {}
  }`,
    'form.validator.minLength': `ត្រូវតែយ៉ាងតិច {min, number} {what, select,
    characters {តួអក្សរ}
    tags {ស្លាក}
    genres {ប្រភេទរឿង}
    genre {រឿង}
    numbers {លេខ}
    other {}
  }`,
    'form.validator.email': 'ត្រូវ​តែ​ជា​អ៊ីមែល​ត្រឹមត្រូវ',
    'form.validator.url': 'ត្រូវ​តែ​ជា​លេខ​ត្រឹមត្រូវ',
    'form.validator.slug': 'ត្រូវ​តែ​ជា​ផ្នែក​ត្រឹមត្រូវ​នៃ URL',
    'form.submitting.signup': 'កំពុង​បង្កើត​គណនី...',
    'form.submitting.signin': 'កំពុង​ចូល​គណនី...',
    'form.submitting.default': 'កំពុង​ដាក់ស្នើ...',
    'form.submitting.sending': 'កំពុង​ផ្ញើ...',
    'form.validator.whitespace': 'ត្រូវ​តែ​មិន​មាន​លំដាប់​ទ្រង់​ទ្រាយ',
    'form.validator.zipCode': 'ត្រូវ​តែ​ជា​លេខ​តំណាង​អត់',
    'form.validator.isbn': 'យក​តែ​កំណែ ១០ ឬ ១៣ នៃ​លេខ ISBN',
    'form.validator.btc': 'នេះគឺមិនមែនជាអាសយដ្ឋាន BTC ត្រឹមត្រូវទេ។',
    'form.validator.eth': 'នេះគឺមិនមែនជាអាសយដ្ឋាន ETH ត្រឹមត្រូវទេ។',
    'form.weakPassword': 'ពាក្យសម្ងាត់នេះធំពេក។ សូមបន្ថែមលេខនិងតួអក្សរពិសេសដើម្បីធ្វើឲ្យវាខ្ពស់ជាង។',
    // you can get these messages from: https://github.com/gwendall/meteor-simple-schema-i18n/tree/master/i18n
    // but don't forget to adjust the format
    'simpleschema.required': 'ត្រូវ​បាន​ទាមទារ {label}',
    'simpleschema.minString': '{label} ត្រូវការយ៉ាងហោចណាស់ {min, number} តួអក្សរ',
    'simpleschema.maxString': '{label} មិនអាចចូលចិត្តលើ {max, number} តួអក្សរទេ',
    'simpleschema.minNumber': '{label} ត្រូវការយ៉ាងហោចណាស់ {min, number}',
    'simpleschema.maxNumber': '{label} មិនអាចចូលចិត្តលើ {max, number}',
    'simpleschema.minNumberExclusive': '{label} ត្រូវតែធំជាង {min, number}',
    'simpleschema.maxNumberExclusive': '{label} ត្រូវតែតិចជាង {max, number}',
    'simpleschema.minDate': '{label} ត្រូវតែនៅលើឬបន្ទាប់ពី {min, date}',
    'simpleschema.maxDate': '{label} មិនអាចបន្ទាប់ពី {max, date}បានទេ',
    'simpleschema.badDate': '{label} មិន​មែន​ជា​កាលបរិច្ឆេទ​ត្រឹមត្រូវ',
    'simpleschema.minCount': 'អ្នកត្រូវតែបញ្ជាក់តម្លៃយ៉ាងហោចណាស់ {minCount, number} តួអក្សរ',
    'simpleschema.maxCount': 'អ្នកមិនអាចបញ្ជាក់តម្លៃច្រើនជាង {maxCount, number} តួអក្សរបានទេ',
    'simpleschema.noDecimal': '{label} ត្រូវ​តែ​ជា​ចំនួន​គត់',
    'simpleschema.notAllowed': '{value} គឺមិនជាតម្លៃដែលអនុញ្ញាត',
    'simpleschema.expectedString': '{label} ត្រូវ​តែ​ជា​អក្សរ',
    'simpleschema.expectedNumber': '{label} ត្រូវ​តែ​ជា​លេខ',
    'simpleschema.expectedBoolean': '{label} ត្រូវ​តែ​ជា​បួនសរុប',
    'simpleschema.expectedArray': '{label} ត្រូវ​តែ​ជា​អារេ',
    'simpleschema.expectedObject': '{label} ត្រូវ​តែ​ជា​បញ្ហា',
    'simpleschema.expectedConstructor': '{label} ត្រូវ​តែ​ជា {type}',
    'simpleschema.keyNotInSchema': '{key} មិន​អនុញ្ញាត​ដោយ​ស្ថានភាព​ស្លាក',
    'simpleschema.notUnique': '{label} ត្រូវ​តែ​មាន​តម្លៃ​នៅលើស',
    'simpleschema.regEx.0': '{label} មិនបានបញ្ជាក់លក្ខណៈពាក្យសម្រាប់ការធ្វើតេស្តមិនបានជោគជ័យ',
    'simpleschema.regEx.1': '{label} ត្រូវតែជាអាសយដ្ឋានអ៊ីមែលត្រឹមត្រូវ',
    'simpleschema.regEx.2': '{label} ត្រូវតែជាអាសយដ្ឋានអ៊ីមែលត្រឹមត្រូវ',
    'simpleschema.regEx.3': '{label} ត្រូវតែជានាមិចអាសយដ្ឋានត្រឹមត្រូវ',
    'simpleschema.regEx.4': '{label} ត្រូវតែជានាមិចអាសយដ្ឋានត្រឹមត្រូវ',
    'simpleschema.regEx.5': '{label} ត្រូវតែជាអាសយដ្ឋាន IPv4 ឬ IPv6 ត្រឹមត្រូវ',
    'simpleschema.regEx.6': '{label} ត្រូវតែជាអាសយដ្ឋាន IPv4 ត្រឹមត្រូវ',
    'simpleschema.regEx.7': '{label} ត្រូវតែជាអាសយដ្ឋាន IPv6 ត្រឹមត្រូវ',
    'simpleschema.regEx.8': '{label} ត្រូវតែជាអាសយដ្ឋាន URL ត្រឹមត្រូវ',
    'simpleschema.regEx.9': '{label} ត្រូវតែជាលេខសម្គាល់អក្សរត្រឹមត្រូវ'
};