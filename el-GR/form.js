export default {
    'form.requiredSymbol': '*',
    'form.validator.required': 'Υποχρεωτικό πεδίο',
    'form.validator.mustBeNumber': 'Πρέπει να είναι αριθμός',
    'form.validator.minNumber': 'Πρέπει να είναι μεγαλύτερη από {min, number}',
    'form.validator.maxNumber': 'Θα πρέπει να είναι μικρότερη από {max, number}',
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
    'form.validator.email': 'Πρέπει να είναι έγκυρο e-mail',
    'form.validator.url': 'Πρέπει να είναι ένα έγκυρο URL',
    'form.validator.slug': 'Πρέπει να είναι έγκυρο τμήμα της διεύθυνσης URL',
    'form.submitting.signup': 'Δημιουργία λογαριασμού...',
    'form.submitting.signin': 'Σύνδεση...',
    'form.submitting.default': 'Υποβολή...',
    'form.submitting.sending': 'Στέλνοντας...',
    'form.validator.whitespace': 'Δεν πρέπει να έχει λευκό χώρο',
    'form.validator.zipCode': 'Πρέπει να είναι έγκυρος ταχυδρομικός κώδικας',
    'form.validator.isbn': 'Δεχόμαστε μόνο 10 ή 13 έκδοση του ISBN',
    'form.validator.btc': 'This is not a valid BTC address.',
    'form.validator.eth': 'This is not a valid ETH address.',
    'form.weakPassword': 'This password looks weak. Please consider making it stronger by adding numbers and special characters.',
    // you can get these messages from: https://github.com/gwendall/meteor-simple-schema-i18n/tree/master/i18n
    // but don't forget to adjust the format
    'simpleschema.required': 'Το πεδίο {label} είναι απαραίτητο',
    'simpleschema.minString': 'To πεδίο {label} πρέπει να είναι τουλάχιστον {min, number} χαρακτήρες',
    'simpleschema.maxString': 'To πεδίο {label} δεν μπορεί να υπερβαίνει τους {max, number} χαρακτήρες',
    'simpleschema.minNumber': 'To πεδίο {label} πρέπει να είναι τουλάχιστον {min, number}',
    'simpleschema.maxNumber': 'To πεδίο {label} δεν μπορεί να είναι μεγαλύτερο από {max, number}',
    'simpleschema.minNumberExclusive': 'To πεδίο {label} πρέπει να είναι μεγαλύτερο από {min, number}',
    'simpleschema.maxNumberExclusive': 'To πεδίο {label} πρέπει να είναι μικρότερο από {max, number}',
    'simpleschema.minDate': 'Το πεδίο {label} πρέπει να είναι μία ημερομηνία μετά από {min, date}',
    'simpleschema.maxDate': 'Το πεδίο {label} πρέπει να είναι μία ημερομηνία πρίν από {max, date}',
    'simpleschema.badDate': 'Το πεδίο {label} δεν είναι έγκυρη ημερομηνία',
    'simpleschema.minCount': 'Πρέπει να επιλέξετε τουλάχιστον {minCount, number} τιμές',
    'simpleschema.maxCount': 'Δεν μπορείτε να επιλέξετε περισσότερες από {maxCount, number} τιμές',
    'simpleschema.noDecimal': 'Το πεδίο {label} πρέπει να είναι ακέραιος αριθμός',
    'simpleschema.notAllowed': 'To {value} δεν είναι αποδεκτή τιμή',
    'simpleschema.expectedString': 'Το πεδίο {label} πρέπει να είναι μια σειρά χαρακτήρων',
    'simpleschema.expectedNumber': 'Το πεδίο {label} πρέπει να είναι ένας αριθμός',
    'simpleschema.expectedBoolean': 'Το πεδίο {label} πρέπει να είναι true ή false',
    'simpleschema.expectedArray': 'Το πεδίο {label} πρέπει να είναι ένας πίνακας',
    'simpleschema.expectedObject': 'Το πεδίο {label} πρέπει να είναι ένα αντικείμενο',
    'simpleschema.expectedConstructor': 'Το πεδίο {label} πρέπει να είναι ένα {type}',
    'simpleschema.keyNotInSchema': 'Το πεδίο {key} δεν είναι επιτρεπτό',
    'simpleschema.notUnique': '{label} πρέπει να είναι μοναδικό',
    'simpleschema.regEx.0': 'Η μορφή του πεδίου {label} δεν είναι αποδεκτή',
    'simpleschema.regEx.1': 'Το πεδίο {label} πρέπει να είναι μια έγκυρη διεύθυνση e-mail',
    'simpleschema.regEx.2': 'Το πεδίο {label} πρέπει να είναι μια έγκυρη διεύθυνση e-mail',
    'simpleschema.regEx.3': 'Το πεδίο {label} πρέπει να είναι ένα έγκυρο domain',
    'simpleschema.regEx.4': 'Το πεδίο {label} πρέπει να είναι ένα έγκυρο domain',
    'simpleschema.regEx.5': 'Το πεδίο {label} πρέπει να είναι μια έγκυρη διεύθυνση IPv4 ή IPv6',
    'simpleschema.regEx.6': 'Το πεδίο {label} πρέπει να είναι μια έγκυρη διεύθυνση IPv4',
    'simpleschema.regEx.7': 'Το πεδίο {label} πρέπει να είναι μια έγκυρη διεύθυνση IPv6',
    'simpleschema.regEx.8': 'Το πεδίο {label} πρέπει να είναι μια έγκυρη διεύθυνση URL',
    'simpleschema.regEx.9': 'Το πεδίο {label} πρέπει να είναι ένα έγκυρο ID'
};