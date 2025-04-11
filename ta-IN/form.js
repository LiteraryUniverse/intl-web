export default {
    'form.requiredSymbol': '*',
    'form.validator.required': 'தேவையான புலம்',
    'form.validator.mustBeNumber': 'இல்லையேல் எண் வேண்டும்',
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
    'form.validator.email': 'சரியான மின்னஞ்சல் முகவர் வேண்டும்',
    'form.validator.url': 'சரியான URL வேண்டும்',
    'form.validator.slug': 'URL பகுதி சரியானது வேண்டும்',
    'form.submitting.signup': 'கணக்கை உருவாக்குகின்றது...',
    'form.submitting.signin': 'உள்நுழைகின்றது...',
    'form.submitting.default': 'சமர்ப்பிக்கின்றது...',
    'form.submitting.sending': 'அனுப்புகின்றது...',
    'form.validator.whitespace': 'வெளியேற்றத்தில் வெவ்வேறு இடம் இருக்க முடியாது',
    'form.validator.zipCode': 'சரியான ஜிப் குறியீட்டை வேண்டும்',
    'form.validator.isbn': 'எஸ்பானின் 10 அல்லது 13 பதிப்பைத் தரவுக்கு ஏற்றுக்கொள்ளுகின்றோம்',
    'form.validator.btc': 'இது செல்லுபடியற்ற BTC முகவரி.',
    'form.validator.eth': 'இது செல்லுபடியற்ற ETH முகவரி.',
    'form.weakPassword': 'இந்த கடவுச்சொல் மிகவும் மோசமானது. எண்களையும் சிறப்பு எழுத்துக்களையும் சேர்க்கும்படி அதிகரிக்கவும்.',
    // you can get these messages from: https://github.com/gwendall/meteor-simple-schema-i18n/tree/master/i18n
    // but don't forget to adjust the format
    'simpleschema.required': '{label} தேவைப்படுகின்றது',
    'simpleschema.minString': '{label} க்கு குறைவாகவோ மட்டுமே {min, number} எழுத்துக்கள் வேண்டும்',
    'simpleschema.maxString': '{label} விட {max, number} எழுத்துக்களைவிட அதிகபட்சமாக இருக்க முடியாது',
    'simpleschema.minNumber': '{label} க்கு குறைவாகவோ மட்டுமே {min, number}',
    'simpleschema.maxNumber': '{label} விட {max, number}மேலாக இருக்க முடியாது',
    'simpleschema.minNumberExclusive': '{label} க்கு {min, number}விட மிகுந்தது வேண்டும்',
    'simpleschema.maxNumberExclusive': '{label} க்கு {max, number}விட குறைவாக இருக்க வேண்டும்',
    'simpleschema.minDate': '{label} அல்லது பின்னர் {min, date}இன்னும் முன்னாமல் இருக்க வேண்டும்',
    'simpleschema.maxDate': '{label} பின்னர் {max, date}விட மேலாக இருக்க முடியாது',
    'simpleschema.badDate': '{label} சரியான தேதி அல்ல',
    'simpleschema.minCount': 'நீங்கள் குறைந்ததும் {minCount, number} மதிப்புகளை குறிப்பிட வேண்டும்',
    'simpleschema.maxCount': 'நீங்கள் {maxCount, number} மதிப்புகளைப் பிரிக்க முடியாது',
    'simpleschema.noDecimal': '{label} முழுமையான எண் வேண்டும்',
    'simpleschema.notAllowed': '{value} ஒரு அனுமதிக்கப்படாத மதிப்பு',
    'simpleschema.expectedString': '{label} சரியான சரம் வேண்டும்',
    'simpleschema.expectedNumber': '{label} எண் வேண்டும்',
    'simpleschema.expectedBoolean': '{label} பூலியன் வேண்டும்',
    'simpleschema.expectedArray': '{label} பட்டதாரி வேண்டும்',
    'simpleschema.expectedObject': '{label} பொருள் வேண்டும்',
    'simpleschema.expectedConstructor': '{label} பொருள் {type}',
    'simpleschema.keyNotInSchema': '{key} எப்படியானது என்பது வல்லுநரிடத்தில் அனுமதிக்கப்படவில்லை',
    'simpleschema.notUnique': '{label} தனிப்பட்டது வேண்டும்',
    'simpleschema.regEx.0': '{label} தவறான வழு மாற்றுத்தால் சோதிக்கப்படுகிறது',
    'simpleschema.regEx.1': '{label} செல்லுபடியான மின்னஞ்சல் முகவரி இருக்க வேண்டும்',
    'simpleschema.regEx.2': '{label} செல்லுபடியான மின்னஞ்சல் முகவரி இருக்க வேண்டும்',
    'simpleschema.regEx.3': '{label} செல்லுபடியான டொமைன் இருக்க வேண்டும்',
    'simpleschema.regEx.4': '{label} செல்லுபடியான டொமைன் இருக்க வேண்டும்',
    'simpleschema.regEx.5': '{label} செல்லுபடியான IPv4 அல்லது IPv6 முகவரி இருக்க வேண்டும்',
    'simpleschema.regEx.6': '{label} செல்லுபடியான IPv4 முகவரி இருக்க வேண்டும்',
    'simpleschema.regEx.7': '{label} செல்லுபடியான IPv6 முகவரி இருக்க வேண்டும்',
    'simpleschema.regEx.8': '{label} செல்லுபடியான URL இருக்க வேண்டும்',
    'simpleschema.regEx.9': '{label} செல்லுபடியான எண்ணிக்கையற்ற ஐடி இருக்க வேண்டும்'
};