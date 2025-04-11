/**
 * @authors Jan Dvorak
 */
export default {
    'email.enrollAccount.subject': 'Zaproszenie do Literary Universe dla {username}',
    'email.enrollAccount.message': `Witaj {username}\n\n
    Chcielibyśmy zaprosić Cię do Literary Universe! Stworzyliśmy dla Ciebie specjalne osobiste konto, z którego możesz korzystać z wszystkich funkcji Literary Universe! Proszę, dołącz do nas w tworzeniu nowej generacji narzędzi do kreatywnego pisania i czytania!
    Aby aktywować swoje konto, po prostu kliknij na poniższy link:\n\n{url}`,
    'email.resetPassword.subject': 'Wyzerowanie hasła Literary Universe',
    'email.resetPassword.message': `Witaj {username}!\n\nDostaliśmy prośbę o zresetowanie hasła do Twojego konta.
        Proszę kliknąć na poniższy link, aby zresetować swoje hasło: \n\n{url}`,
    'email.verifyEmail.subject': 'Weryfikacja poczty elektronicznej Literary Universe',
    'email.verifyEmail.message': 'Witaj {username}!\n\n Proszę zweryfikować swój adres e-mail klikając na poniższy link:\n\n{url}',
    // New html email keys
    'email.salutation': 'Witaj {username},',
    'email.welcome': 'Witamy w Literary Universe!',
    'email.signature': 'Z poważaniem,<br />Zespół Literary Universe',
    // Enrollment
    'email.enrollAccount.welcome': 'Witamy na pokładzie',
    'email.enrollAccount.messageHtml': 'Chcielibyśmy zaprosić Państwa do Literary Universe! Przygotowaliśmy dla Państwa osobiste konto, dzięki któremu uzyskają Państwo dostęp do wszystkich funkcji Literary Universe. Prosimy dołączyć do nas w tworzeniu nowej generacji kreatywnego pisania i czytania!',
    'email.enrollAccount.button': 'Dostęp do swojego konta',
    'email.enrollAccount.signature': 'Czekamy na Państwa,<br />Zespół Literary Universe',
    // Reset password
    'email.resetPassword.messageHtml': 'Otrzymaliśmy prośbę o zresetowanie hasła do Państwa konta. Proszę kliknąć poniższy przycisk, aby kontynuować proces. Jeśli nie zgłosił(a) Pan(i) takiej prośby, może Pan(i) zignorować tę wiadomość e-mail, ale może to być dobry moment na sprawdzenie ustawień zabezpieczeń.',
    'email.resetPassword.button': 'Resetowanie hasła',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Cieszymy się, że mamy Państwa na pokładzie! Proszę kliknąć przycisk poniżej, aby zweryfikować ten adres e-mail.',
    'email.verifyEmail.button': 'Zweryfikuj ten adres e-mail',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Twoje konto zostało uaktualnione',
    'email.adminUpgrade.message': `Ulepszyliśmy Twoje konto do {plan, select,
    explorer {Odkrywca}
    adventurer {Inwestor przygód}
    storyteller {Historzy}
    other {}
  } Poziom na następne {days} dni.\n\nCiesz się,\nZespół Literary Universe`,
    'email.adminUpgrade.messageHtml': `Ulepszyliśmy Twoje konto do {plan, select,
    explorer {Eksplorator}
    adventurer {Inwestor przygód}
    storyteller {Historzy}
    other {}
  } Poziom na następne {days} dni. Miłej radości!`,
    'email.verification': 'Weryfikacja poczty elektronicznej',
    'email.verifying': 'Weryfikacja Twojego e-maila. To zajmie tylko chwilę...',
    'email.verified': 'Wspaniała wiadomość! Twój e-mail został zweryfikowany!'
};