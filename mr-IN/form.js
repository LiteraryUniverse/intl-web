export default {
  'form.requiredSymbol': '*',
  'form.validator.required': 'आवश्यक फील्ड',
  'form.validator.mustBeNumber': 'एक अंक असावा पाहिजे',
  'form.validator.minNumber': 'च्या पेक्षा मोठं असावं पाहिजे {min, number}',
  'form.validator.maxNumber': 'च्या पेक्षा कमी असावं पाहिजे {max, number}',
  'form.validator.maxLength': `{max, number} किंमती {what, select,
    characters {पेक्षा कमी असावीत}
    tags {टॅग}
    genres {जॅनर}
    numbers {आकडे}
    other {}
  }असावीत.`,
  'form.validator.minLength': `{min, number} किंमती {what, select,
    characters {पेक्षा जास्त असावीत}
    tags {टॅग}
    genres {जॅनर}
    genre {जॅनर}
    numbers {आकडे}
    other {}
  }असावीत.`,
  'form.validator.email': 'एक वैध ईमेल असावा पाहिजे',
  'form.validator.url': 'एक वैध URL असावा पाहिजे',
  'form.validator.slug': 'URL चा एक वैध भाग असावा पाहिजे',
  'form.submitting.signup': 'खाते तयार करीत आहे...',
  'form.submitting.signin': 'लॉग इन करीत आहे...',
  'form.submitting.default': 'सबमिट करीत आहे...',
  'form.submitting.sending': 'पाठवित आहे...',
  'form.validator.whitespace': 'अंतर नसलेलं असावं पाहिजे',
  'form.validator.zipCode': 'एक वैध जिप कोड असावं पाहिजे',
  'form.validator.isbn': 'आम्ही केवळ 10 किंवा 13 आवृत्तीचा ISBN स्वीकारतो',
  'form.validator.btc': 'हा एक वैध BTC पत्ता नाही.',
  'form.validator.eth': 'हा एक वैध ETH पत्ता नाही.',
  'form.weakPassword':
    'ही पासवर्ड कमजोर दिसते. कृपया ते अधिक मजबूत करण्यासाठी नंबर आणि विशेष वर्णांक जोडण्याचे विचार करा.',
  // you can get these messages from: https://github.com/gwendall/meteor-simple-schema-i18n/tree/master/i18n
  // but don't forget to adjust the format
  'simpleschema.required': '{label} आवश्यक आहे',
  'simpleschema.minString': '{label} किमानपेक्षा कमीपेक्षा कमी {min, number} अक्षरे असावीत पाहिजेत',
  'simpleschema.maxString': '{label} च्या पेक्षा जास्त अक्षरे असावीत नाहीत {max, number}',
  'simpleschema.minNumber': '{label} किमानपेक्षा कमीपेक्षा कमी {min, number}असावे लागते',
  'simpleschema.maxNumber': '{label} च्या पेक्षा जास्त असावे लागते {max, number}',
  'simpleschema.minNumberExclusive': '{label} च्या पेक्षा मोठं असावं पाहिजे {min, number}',
  'simpleschema.maxNumberExclusive': '{label} च्या पेक्षा कमी असावं पाहिजे {max, number}',
  'simpleschema.minDate': '{label} किंवा त्यापेक्षा नंतर {min, date}असावीत पाहिजे',
  'simpleschema.maxDate': '{label} नंतरपेक्षा जास्त असावं नये {max, date}',
  'simpleschema.badDate': '{label} एक वैध तारीख नाही',
  'simpleschema.minCount':
    'किमानपेक्षा कमीपेक्षा किंवा त्यापेक्षा जास्त {minCount, number} मूल्ये निर्दिष्ट करणे आवश्यक आहे',
  'simpleschema.maxCount':
    'तुम्ही किमानपेक्षा कमीपेक्षा किंवा त्यापेक्षा जास्त {maxCount, number} मूल्ये निर्दिष्ट करू शकत नाही',
  'simpleschema.noDecimal': '{label} एक पूर्णांक असावा पाहिजे',
  'simpleschema.notAllowed': '{value} मान्य मान्यता नाही',
  'simpleschema.expectedString': '{label} एक स्ट्रिंग असावी पाहिजे',
  'simpleschema.expectedNumber': '{label} एक अंक असावा पाहिजे',
  'simpleschema.expectedBoolean': '{label} एक बूलियन असावा पाहिजे',
  'simpleschema.expectedArray': '{label} एक अ‍ॅरे असावी पाहिजे',
  'simpleschema.expectedObject': '{label} एक ऑब्जेक्ट असावं पाहिजे',
  'simpleschema.expectedConstructor': '{label} एक {type}असावं पाहिजे',
  'simpleschema.keyNotInSchema': '{key} स्कीमद्वारे परवानगी नाही',
  'simpleschema.notUnique': '{label} अद्वितीय असावं पाहिजे',
  'simpleschema.regEx.0': '{label} विफल नियमित अभिवादन सत्यापन',
  'simpleschema.regEx.1': '{label} एक वैध ईमेल पत्ता असणे आवश्यक आहे',
  'simpleschema.regEx.2': '{label} एक वैध ईमेल पत्ता असणे आवश्यक आहे',
  'simpleschema.regEx.3': '{label} एक वैध डोमेन असणे आवश्यक आहे',
  'simpleschema.regEx.4': '{label} एक वैध डोमेन असणे आवश्यक आहे',
  'simpleschema.regEx.5': '{label} एक वैध IPv4 किंवा IPv6 पत्ता असणे आवश्यक आहे',
  'simpleschema.regEx.6': '{label} एक वैध IPv4 पत्ता असणे आवश्यक आहे',
  'simpleschema.regEx.7': '{label} एक वैध IPv6 पत्ता असणे आवश्यक आहे',
  'simpleschema.regEx.8': '{label} एक वैध URL असणे आवश्यक आहे',
  'simpleschema.regEx.9': '{label} एक वैध अक्षरांमधील ID असणे आवश्यक आहे',
}
