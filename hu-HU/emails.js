/**
 * @authors Jan Dvorak
 */
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
    'email.enrollAccount.messageHtml': 'Szeretettel meghívjuk Önt az Irodalmi Univerzumba! Előreléptünk és elkészítettünk Önnek egy személyes fiókot, ahol hozzáférhet az Irodalmi Univerzum minden funkciójához. Kérjük, csatlakozzon hozzánk a kreatív írás és olvasás következő generációjának megteremtésében!',
    'email.enrollAccount.button': 'Fiókhoz való hozzáférés',
    'email.enrollAccount.signature': 'Szeretettel várjuk Önöket,<br />Irodalmi Univerzum csapata',
    // Reset password
    'email.resetPassword.messageHtml': 'Kaptunk egy kérést, hogy visszaállítsuk a jelszavát a fiókjához. Kérjük, kattintson az alábbi gombra a folyamat folytatásához. Ha még nem küldte el ezt a kérést, akkor figyelmen kívül hagyhatja ezt az e-mailt, de talán itt az ideje, hogy felülvizsgálja a biztonsági beállításait.',
    'email.resetPassword.button': 'Jelszó visszaállítása',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Örülünk, hogy a fedélzeten van! Kérjük, kattintson az alábbi gombra az e-mail cím ellenőrzéséhez.',
    'email.verifyEmail.button': 'Megerősítés a felhasználói e-mail címről',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'A fiókodat frissítettük',
    'email.adminUpgrade.message': `Frissítettük a fiókodat a következőre: {plan, select,
    explorer {Felfedező}
    adventurer {Kalandor}
    storyteller {Mesemondó}
    other {}
  } szintre a következő {days} napra.\n\nJó szórakozást,\nLiterary Universe csapat`,
    'email.adminUpgrade.messageHtml': `Frissítettük a fiókodat a következőre: {plan, select,
    explorer {Felfedező}
    adventurer {Kalandor}
    storyteller {Mesemondó}
    other {}
  } szintre a következő {days} napra. Jó szórakozást!`,
    'email.verification': 'E-mail ellenőrzése',
    'email.verifying': 'Az e-mail ellenőrzése. Ez csak egy pillanat...',
    'email.verified': 'Nagyszerű hír! Az e-mail címed ellenőrzésre került!'
};