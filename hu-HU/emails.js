/**
 * @authors Jan Dvorak
 */
/* eslint-disable max-len */
export default {
    'email.enrollAccount.subject': 'Meghívás az Irodalmi Univerzumba {username}részére',
    'email.enrollAccount.message': `Üdvözöljük {username}\n\n
    ! Szeretnénk meghívni az Irodalmi Univerzumba! Létrehoztunk Önnek egy speciális személyes fiókot, ahol hozzáférhet az Irodalmi Univerzum összes funkciójához! Kérjük, csatlakozzon hozzánk a következő generációs kreatív írás- és olvasóeszközök létrehozásában!
    Az fiók aktiválásához egyszerűen kattintson az alábbi linkre:\n\n{url}`,
    'email.resetPassword.subject': 'Irodalmi Univerzum jelszó visszaállítás',
    'email.resetPassword.message': `Üdvözöljük {username}!\n\n Megkaptunk egy kérést a jelszava visszaállítására a fiókjához.
        Kérjük, kövesse az alábbi linket a jelszó visszaállításához:\n\n{url}`,
    'email.verifyEmail.subject': 'Irodalmi Univerzum e-mail megerősítés',
    'email.verifyEmail.message': 'Üdvözöljük {username}!\n\n Kérjük, erősítse meg az e-mail címét az alábbi linkre kattintva:\n\n{url}',
    // New html email keys
    'email.salutation': 'Üdvözöljük {username},',
    'email.welcome': 'Üdvözöljük az Irodalmi Univerzumban!',
    'email.signature': 'Üdvözlettel,<br />az Irodalmi Univerzum csapata',
    // Enrollment
    'email.enrollAccount.welcome': 'Üdvözöljük a fedélzeten',
    'email.enrollAccount.messageHtml': 'Szeretnénk meghívni az Irodalmi Univerzumba! Előre elkészítettünk Önnek egy személyes fiókot, ahol hozzáférhet az Irodalmi Univerzum összes funkciójához! Kérjük, csatlakozzon hozzánk a kreatív írás és olvasás következő generációjának létrehozásában!',
    'email.enrollAccount.button': 'Fiókhoz való hozzáférés',
    'email.enrollAccount.signature': 'We are looking forward to see you,<br />Literary Universe team',
    // Reset password
    'email.resetPassword.messageHtml': 'Megkaptunk egy kérelmet a jelszavad visszaállítására a fiókodhoz. Kérjük, kattints az alábbi gombra a folyamat folytatásához. Ha nem te voltál, aki kérelmezte ezt, nyugodtan figyelmen kívül hagyhatod ezt az e-mailt, de érdemes lehet átnézned a biztonsági beállításaidat.',
    'email.resetPassword.button': 'Jelszó visszaállítása',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Örülünk, hogy velünk vagy! Kérjük, kattints az alábbi gombra a felhasználói e-mail cím megerősítéséhez.',
    'email.verifyEmail.button': 'Megerősítés a felhasználói e-mail címről',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'A fiókodat frissítettük',
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