/**
 * @authors Jan Dvorak
 */
/* eslint-disable max-len */
export default {
    'email.enrollAccount.subject': 'Πρόσκληση στο Λογοτεχνικό Σύμπαν για {username}',
    'email.enrollAccount.message': `Γεια σας {username}\n\n
    Θα θέλαμε να σας προσκαλέσουμε στο Λογοτεχνικό Σύμπαν! Έχουμε δημιουργήσει ένα ειδικό προσωπικό λογαριασμό για εσάς, όπου μπορείτε να έχετε πρόσβαση σε όλες τις δυνατότητες του Λογοτεχνικού Σύμπαντος! Παρακαλούμε ελάτε να μας συνοδεύσετε στη δημιουργία της επόμενης γενιάς εργαλείων δημιουργικής γραφής και ανάγνωσης!
    Για να ενεργοποιήσετε τον λογαριασμό σας, απλά κάντε κλικ στον παρακάτω σύνδεσμο:\n\n{url}`,
    'email.resetPassword.subject': 'Επαναφορά κωδικού πρόσβασης Λογοτεχνικού Σύμπαντος',
    'email.resetPassword.message': `Γεια σας {username}!\n\n Λάβαμε μια αίτηση για επαναφορά του κωδικού πρόσβασης για τον λογαριασμό σας.
        Παρακαλούμε ακολουθήστε τον παρακάτω σύνδεσμο για να επαναφέρετε τον κωδικό πρόσβασής σας:\n\n{url}`,
    'email.verifyEmail.subject': 'Επαλήθευση email Λογοτεχνικού Σύμπαντος',
    'email.verifyEmail.message': 'Γεια σας {username}!\n\n Παρακαλούμε επαληθεύστε τη διεύθυνση email σας κάνοντας κλικ στον παρακάτω σύνδεσμο:\n\n{url}',
    // New html email keys
    'email.salutation': 'Γεια σας {username},',
    'email.welcome': 'Καλωσορίσατε στο Λογοτεχνικό Σύμπαν!',
    'email.signature': 'Με εκτίμηση,<br />Ομάδα Λογοτεχνικού Σύμπαντος',
    // Enrollment
    'email.enrollAccount.welcome': 'Καλωσορίσατε στο σκάφος',
    'email.enrollAccount.messageHtml': 'Θα θέλαμε να σας προσκαλέσουμε στο Λογοτεχνικό Σύμπαν! Προχωρήσαμε και δημιουργήσαμε έναν προσωπικό λογαριασμό για εσάς, όπου μπορείτε να έχετε πρόσβαση σε όλες τις δυνατότητες του Λογοτεχνικού Σύμπαντος! Παρακαλούμε ελάτε να μας συνοδεύσετε στη δημιουργία της επόμενης γενιάς δημιουργικής γραφής και ανάγνωσης!',
    'email.enrollAccount.button': 'Πρόσβαση στον λογαριασμό σας',
    'email.enrollAccount.signature': 'We are looking forward to see you,<br />Literary Universe team',
    // Reset password
    'email.resetPassword.messageHtml': 'Λάβαμε μια αίτηση για επαναφορά του κωδικού πρόσβασης για τον λογαριασμό σας, παρακαλούμε κάντε κλικ στο κουμπί παρακάτω για να συνεχίσετε τη διαδικασία. Αν δεν έχετε κάνει αυτήν την αίτηση, μπορείτε να αγνοήσετε αυτό το μήνυμα, αλλά ίσως είναι καλή ιδέα να ελέγξετε τις ρυθμίσεις ασφαλείας σας.',
    'email.resetPassword.button': 'Επαναφορά κωδικού πρόσβασης',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Χαρούμενοι που είστε μέλος της ομάδας μας! Παρακαλούμε κάντε κλικ στο κουμπί παρακάτω για να επιβεβαιώσετε τη διεύθυνση αυτού του e-mail.',
    'email.verifyEmail.button': 'Επιβεβαίωση αυτής της διεύθυνσης e-mail',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Ο λογαριασμός σας έχει αναβαθμιστεί',
    'email.adminUpgrade.message': `We have upgraded your account to {plan, select,
    explorer {Explorer}
    adventurer {Adventurer}
    storyteller {Storyteller}
    other {}
  } tier for the next {days} days.\n\nEnjoy,\nLiterary Universe team`,
    'email.adminUpgrade.messageHtml': `We have upgraded your account to {plan, select,
    explorer {Explorer}
    adventurer {Adventurer}
    storyteller {Storyteller}
    other {}
  } tier for the next {days} days. Enjoy!`,
    'email.verification': 'E-mail verification',
    'email.verifying': 'Verifying your e-mail. This will take just a moment...',
    'email.verified': 'Great news! Your e-mail has been verified!'
};    /* eslint-enable max-len */