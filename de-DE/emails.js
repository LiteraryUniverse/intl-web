/**
 * @authors Jan Dvorak
 */
/* eslint-disable max-len */
export default {
    'email.enrollAccount.subject': 'Einladung zum Literarischen Universum für {username}',
    'email.enrollAccount.message': `Hallo {username}\n\n
    Wir möchten Sie zu Literary Universe einladen! Wir haben für Sie ein spezielles persönliches Konto eingerichtet, mit dem Sie auf alle Funktionen von Literary Universe zugreifen können! Bitte schließen Sie sich uns an, um die nächste Generation von kreativen Schreib- und Lesewerkzeugen zu schaffen!
    Um Ihr Konto zu aktivieren, klicken Sie einfach auf den folgenden Link:\n\n{url}`,
    'email.resetPassword.subject': 'Literarisches Universum Passwort zurücksetzen',
    'email.resetPassword.message': `Hallo {username}!\n\n Wir haben eine Anfrage erhalten, Ihr Passwort für Ihr Konto zurückzusetzen.
        Bitte folgen Sie dem unten stehenden Link, um Ihr Passwort zurückzusetzen:\n\n{url}`,
    'email.verifyEmail.subject': 'Literary Universe E-Mail-Verifizierung',
    'email.verifyEmail.message': 'Hallo {username}!\n\n Bitte verifizieren Sie Ihre E-Mail-Adresse, indem Sie auf den unten stehenden Link klicken:\n\n{url}',
    // New html email keys
    'email.salutation': 'Hallo {username},',
    'email.welcome': 'Willkommen im Literary Universe!',
    'email.signature': 'Mit freundlichen Grüßen,<br />Literary Universe Team',
    // Enrollment
    'email.enrollAccount.welcome': 'Willkommen an Bord',
    'email.enrollAccount.messageHtml': 'Wir möchten Sie zu Literary Universe einladen! Wir haben ein persönliches Konto für Sie eingerichtet, mit dem Sie auf alle Funktionen von Literary Universe zugreifen können! Bitte schließen Sie sich uns an, um die nächste Generation des kreativen Schreibens und Lesens zu schaffen!',
    'email.enrollAccount.button': 'Zugriff auf Ihr Konto',
    'email.enrollAccount.signature': 'Wir freuen uns auf Sie,<br />Literary Universe Team',
    // Reset password
    'email.resetPassword.messageHtml': 'Wir haben eine Anfrage zum Zurücksetzen Ihres Passworts für Ihr Konto erhalten. Bitte klicken Sie auf die Schaltfläche unten, um den Vorgang fortzusetzen. Wenn Sie diese Anfrage nicht gestellt haben, können Sie diese E-Mail ignorieren, aber es könnte ein guter Zeitpunkt sein, um Ihre Sicherheitseinstellungen zu überprüfen.',
    'email.resetPassword.button': 'Passwort zurücksetzen',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Wir freuen uns, Sie an Bord zu haben! Bitte klicken Sie auf die Schaltfläche unten, um diese E-Mail-Adresse zu verifizieren.',
    'email.verifyEmail.button': 'Überprüfen Sie diese E-Mail-Adresse',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Ihr Konto wurde hochgestuft',
    'email.adminUpgrade.message': `Wir haben Ihr Konto auf {plan, select,
    explorer {Entdecker}
    adventurer {Abenteurer}
    storyteller {Geschichtenerzähler}
    other {}
  } Stufe für die nächsten {days} Tage.\n\nFreude,\nLiterary Universe Team`,
    'email.adminUpgrade.messageHtml': `Wir haben Ihr Konto auf {plan, select,
    explorer {Entdecker}
    adventurer {Abenteurer}
    stroryteller {Geschichtenerzähler}
    other {}
  } Stufe für die nächsten {days} Tage. Viel Spaß!`,
    'email.verification': 'E-Mail-Überprüfung',
    'email.verifying': 'Überprüfen Sie Ihre E-Mail. Dies dauert nur einen Moment...',
    'email.verified': 'Tolle Neuigkeiten! Ihre E-Mail wurde verifiziert!'
};    /* eslint-enable max-len */