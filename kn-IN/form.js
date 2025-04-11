export default {
    'form.requiredSymbol': '*',
    'form.validator.required': 'ಅಗತ್ಯವಿರುವ ಕ್ಷೇತ್ರ',
    'form.validator.mustBeNumber': 'ಸಂಖ್ಯೆ ಆಗಿರಬೇಕು',
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
    'form.validator.email': 'ಮಾನ್ಯ ಇಮೇಲ್ ಆಗಿರಬೇಕು',
    'form.validator.url': 'ಮಾನ್ಯ URL ಆಗಿರಬೇಕು',
    'form.validator.slug': 'URL ಯ ಮಾನ್ಯ ಭಾಗವನ್ನು ಹೊಂದಿರಬೇಕು',
    'form.submitting.signup': 'ಖಾತೆ ತೆರೆಯುವುದು...',
    'form.submitting.signin': 'ಲಾಗಿನ್ ಮಾಡುವುದು...',
    'form.submitting.default': 'ಸಲ್ಲಿಸುವುದು...',
    'form.submitting.sending': 'ಕಳುಹಿಸುವುದು...',
    'form.validator.whitespace': 'ಶ್ವೇತ ಸ್ಥಳ ಇರಬಾರದು',
    'form.validator.zipCode': 'ಮಾನ್ಯ ಜಿಪ್ ಕೋಡ್ ಆಗಿರಬೇಕು',
    'form.validator.isbn': 'ನಾವು ಮಾತ್ರ 10 ಅಥವಾ 13 ಆವೃತ್ತಿಯ ISBN ಗಳನ್ನು ಸ್ವೀಕರಿಸುತ್ತೇವೆ',
    'form.validator.btc': 'ಇದು ಮಾನ್ಯವಲ್ಲದ BTC ವಿಳಾಸ.',
    'form.validator.eth': 'ಇದು ಮಾನ್ಯವಲ್ಲದ ETH ವಿಳಾಸ.',
    'form.weakPassword': 'ಈ ಪಾಸ್‌ವರ್ಡ್ ದುರ್ಬಲವಾಗಿದೆ. ದಯವಿಟ್ಟು ಸಂಖ್ಯೆಗಳು ಮತ್ತು ವಿಶೇಷ ಅಕ್ಷರಗಳನ್ನು ಸೇರಿಸಿ ಅದನ್ನು ಬಲವಾಗಿ ಮಾಡಿ.',
    // you can get these messages from: https://github.com/gwendall/meteor-simple-schema-i18n/tree/master/i18n
    // but don't forget to adjust the format
    'simpleschema.required': '{label} ಅಗತ್ಯವಿದೆ',
    'simpleschema.minString': '{label} ಕಡಿಮೆಯಾಗಿರಬೇಕು {min, number} ಅಕ್ಷರಗಳಷ್ಟು',
    'simpleschema.maxString': '{label} ಹೆಚ್ಚಾಗಿರಬಾರದು {max, number} ಅಕ್ಷರಗಳಷ್ಟು',
    'simpleschema.minNumber': '{label} ಈಗಿನಷ್ಟು ಕಡಿಮೆಯಾಗಿರಬೇಕು {min, number}',
    'simpleschema.maxNumber': '{label} ಈಗಿನಷ್ಟು ಹೆಚ್ಚಿರಬಾರದು {max, number}',
    'simpleschema.minNumberExclusive': '{label} ಈಗಿನಷ್ಟು ಹೆಚ್ಚಿರಬೇಕು {min, number}',
    'simpleschema.maxNumberExclusive': '{label} ಈಗಿನಷ್ಟು ಕಡಿಮೆಯಾಗಿರಬೇಕು {max, number}',
    'simpleschema.minDate': '{label} ಈಗಿನಷ್ಟು ಹೆಚ್ಚಿರಲು ಬೇಕು {min, date}',
    'simpleschema.maxDate': '{label} ಈಗಿನಷ್ಟು ಹಿಂದಿರುಗಲು ಆಗಲು ಬಾರದು {max, date}',
    'simpleschema.badDate': '{label} ಮಾನ್ಯ ದಿನಾಂಕ ಅಲ್ಲ',
    'simpleschema.minCount': 'ನೀವು ಕನಿಷ್ಠವಾಗಿಯೂ {minCount, number} ಮೌಲ್ಯಗಳನ್ನು ನಿರ್ದಿಷ್ಟಪಡಿಸಬೇಕು',
    'simpleschema.maxCount': 'ನೀವು {maxCount, number} ಮೌಲ್ಯಗಳಿಂದ ಹೆಚ್ಚಾಗಿ ನಿರ್ದಿಷ್ಟಪಡಿಸಲಾಗದು',
    'simpleschema.noDecimal': '{label} ಪೂರ್ಣಾಂಕ ಆಗಿರಬೇಕು',
    'simpleschema.notAllowed': '{value} ಅನುಮತಿಸಲಾಗಿಲ್ಲ',
    'simpleschema.expectedString': '{label} ಸ್ಟ್ರಿಂಗ್ ಆಗಿರಬೇಕು',
    'simpleschema.expectedNumber': '{label} ಸಂಖ್ಯೆ ಆಗಿರಬೇಕು',
    'simpleschema.expectedBoolean': '{label} ಬೂಲಿಯನ್ನು ಆಗಿರಬೇಕು',
    'simpleschema.expectedArray': '{label} ಅರ್ರೇ ಆಗಿರಬೇಕು',
    'simpleschema.expectedObject': '{label} ಆಗಿರಬೇಕು',
    'simpleschema.expectedConstructor': '{label} must be a {type}',
    'simpleschema.keyNotInSchema': '{key} ಸ್ಕೀಮಾದಿಂದ ಅನುಮತಿಯಾಗದು',
    'simpleschema.notUnique': '{label} ಅದು ಅನನುಕೂಲವಾಗಿದೆ',
    'simpleschema.regEx.0': '{label} ವಿಫಲವಾಗಿದೆ ಸಾಮಾನ್ಯ ವ್ಯಾಕ್ಯಾನದ ಪರಿಶೀಲನೆ',
    'simpleschema.regEx.1': '{label} ಮಾನ್ಯ ಇಮೇಲ್ ವಿಳಾಸವಾಗಿರಬೇಕು',
    'simpleschema.regEx.2': '{label} ಮಾನ್ಯ ಇಮೇಲ್ ವಿಳಾಸವಾಗಿರಬೇಕು',
    'simpleschema.regEx.3': '{label} ಮಾನ್ಯ ಡೊಮೇನ್ ಆದರೆಯಾಗಿರಬೇಕು',
    'simpleschema.regEx.4': '{label} ಮಾನ್ಯ ಡೊಮೇನ್ ಆದರೆಯಾಗಿರಬೇಕು',
    'simpleschema.regEx.5': '{label} ಮಾನ್ಯ IPv4 ಅಥವಾ IPv6 ವಿಳಾಸವಾಗಿರಬೇಕು',
    'simpleschema.regEx.6': '{label} ಮಾನ್ಯ IPv4 ವಿಳಾಸವಾಗಿರಬೇಕು',
    'simpleschema.regEx.7': '{label} ಮಾನ್ಯ IPv6 ವಿಳಾಸವಾಗಿರಬೇಕು',
    'simpleschema.regEx.8': '{label} ಮಾನ್ಯ URL ಆಗಿರಬೇಕು',
    'simpleschema.regEx.9': '{label} ಮಾನ್ಯ ಅಕ್ಷರಸಂಖ್ಯೆಯ ಐಡಿ ಆಗಿರಬೇಕು'
};