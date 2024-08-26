export default {
    'form.requiredSymbol': '*',
    'form.validator.required': 'ฟิลด์ที่ต้องการ',
    'form.validator.mustBeNumber': 'ต้องเป็นตัวเลข',
    'form.validator.minNumber': 'ต้องมากกว่า {min, number}',
    'form.validator.maxNumber': 'ต้องน้อยกว่า {max, number}',
    'form.validator.maxLength': `ควรน้อยกว่า {max, number} {what, select,
    characters {ตัวอักษร}
    tags {แท็ก}
    genres {ประเภท}
    numbers {ตัวเลข}
    other {}
  }`,
    'form.validator.minLength': `ควรมีอย่างน้อย {min, number} {what, select,
    characters {ตัวอักษร}
    tags {แท็ก}
    genres {ประเภท}
    genre {ประเภท}
    numbers {ตัวเลข}
    other {}
  }`,
    'form.validator.email': 'ต้องเป็นอีเมลที่ถูกต้อง',
    'form.validator.url': 'ต้องเป็น URL ที่ถูกต้อง',
    'form.validator.slug': 'ต้องเป็นส่วนของ URL ที่ถูกต้อง',
    'form.submitting.signup': 'กำลังสร้างบัญชี...',
    'form.submitting.signin': 'กำลังเข้าสู่ระบบ...',
    'form.submitting.default': 'กำลังส่ง...',
    'form.submitting.sending': 'กำลังส่ง...',
    'form.validator.whitespace': 'ต้องไม่มีช่องว่าง',
    'form.validator.zipCode': 'ต้องเป็นรหัสไปรษณีย์ที่ถูกต้อง',
    'form.validator.isbn': 'เรายอมรับเฉพาะเล่ม 10 หรือ 13 ของ ISBN',
    'form.validator.btc': 'นี่ไม่ใช่ที่อยู่ BTC ที่ถูกต้อง',
    'form.validator.eth': 'นี่ไม่ใช่ที่อยู่ ETH ที่ถูกต้อง',
    'form.weakPassword': 'รหัสผ่านดูแย่นี้ โปรดพิจารณาทำให้แข็งแกร่งขึ้นโดยการเพิ่มตัวเลขและอักขระพิเศษ',
    // you can get these messages from: https://github.com/gwendall/meteor-simple-schema-i18n/tree/master/i18n
    // but don't forget to adjust the format
    'simpleschema.required': '{label} จำเป็น',
    'simpleschema.minString': '{label} ต้องมีอย่างน้อย {min, number} อักขระ',
    'simpleschema.maxString': '{label} ไม่สามารถเกิน {max, number} อักขระ',
    'simpleschema.minNumber': '{label} ต้องมากกว่า {min, number}',
    'simpleschema.maxNumber': '{label} ไม่สามารถเกิน {max, number}',
    'simpleschema.minNumberExclusive': '{label} ต้องมากกว่า {min, number}',
    'simpleschema.maxNumberExclusive': '{label} ต้องน้อยกว่า {max, number}',
    'simpleschema.minDate': '{label} ต้องเป็นหรือหลังจาก {min, date}',
    'simpleschema.maxDate': '{label} ไม่สามารถเกินหลังจาก {max, date}',
    'simpleschema.badDate': '{label} ไม่ใช่วันที่ที่ถูกต้อง',
    'simpleschema.minCount': 'คุณต้องระบุอย่างน้อย {minCount, number} ค่า',
    'simpleschema.maxCount': 'คุณไม่สามารถระบุมากกว่า {maxCount, number} ค่า',
    'simpleschema.noDecimal': '{label} ต้องเป็นจำนวนเต็ม',
    'simpleschema.notAllowed': '{value} ไม่ใช่ค่าที่อนุญาต',
    'simpleschema.expectedString': '{label} ต้องเป็นสตริง',
    'simpleschema.expectedNumber': '{label} ต้องเป็นตัวเลข',
    'simpleschema.expectedBoolean': '{label} ต้องเป็นค่าความจริง',
    'simpleschema.expectedArray': '{label} ต้องเป็นอาร์เรย์',
    'simpleschema.expectedObject': '{label} ต้องเป็นออบเจ็กต์',
    'simpleschema.expectedConstructor': '{label} ต้องเป็น {type}',
    'simpleschema.keyNotInSchema': '{key} ไม่ได้รับอนุญาตโดยแบบแผน',
    'simpleschema.notUnique': '{label} ต้องไม่ซ้ำกัน',
    'simpleschema.regEx.0': '{label} ไม่ผ่านการตรวจสอบด้วย regular expression',
    'simpleschema.regEx.1': '{label} ต้องเป็นที่อยู่อีเมลที่ถูกต้อง',
    'simpleschema.regEx.2': '{label} ต้องเป็นที่อยู่อีเมลที่ถูกต้อง',
    'simpleschema.regEx.3': '{label} ต้องเป็นโดเมนที่ถูกต้อง',
    'simpleschema.regEx.4': '{label} ต้องเป็นโดเมนที่ถูกต้อง',
    'simpleschema.regEx.5': '{label} ต้องเป็นที่อยู่ IP รูปแบบ IPv4 หรือ IPv6 ที่ถูกต้อง',
    'simpleschema.regEx.6': '{label} ต้องเป็นที่อยู่ IP รูปแบบ IPv4 ที่ถูกต้อง',
    'simpleschema.regEx.7': '{label} ต้องเป็นที่อยู่ IP รูปแบบ IPv6 ที่ถูกต้อง',
    'simpleschema.regEx.8': '{label} ต้องเป็น URL ที่ถูกต้อง',
    'simpleschema.regEx.9': '{label} ต้องเป็น ID ที่มีตัวอักษรและตัวเลขเท่านั้น'
};