/**
 * @authors Jan Dvorak
 */
export default {
    'email.enrollAccount.subject': '{username}için Edebi Evrene Davet',
    'email.enrollAccount.message': `Merhaba {username}\n\n
    ,     Sizi Edebi Evrene davet etmek istiyoruz! Size özel bir hesap oluşturduk, bu hesap aracılığıyla Edebi Evren'in tüm özelliklerine erişebilirsiniz! Lütfen, yaratıcı yazma ve okuma araçlarının gelecek neslini oluşturmak için bize katılın!
    Hesabınızı etkinleştirmek için aşağıdaki bağlantıya tıklayın:\n\n{url}`,
    'email.resetPassword.subject': 'Edebi Evren şifre sıfırlama',
    'email.resetPassword.message': `Merhaba {username}!\n\n Hesabınızın şifresini sıfırlama talebi aldık.
        Lütfen, şifrenizi sıfırlamak için aşağıdaki bağlantıyı takip edin:\n\n{url}`,
    'email.verifyEmail.subject': 'Edebi Evren e-posta doğrulama',
    'email.verifyEmail.message': 'Merhaba {username}!\n\n Lütfen e-posta adresinizi doğrulamak için aşağıdaki bağlantıya tıklayın:\n\n{url}',
    // New html email keys
    'email.salutation': 'Merhaba {username},',
    'email.welcome': 'Edebi Evren\'e Hoş Geldiniz!',
    'email.signature': 'Saygılarımızla,<br />Edebi Evren ekibi',
    // Enrollment
    'email.enrollAccount.welcome': 'Aramıza hoş geldiniz',
    'email.enrollAccount.messageHtml': 'Sizi Edebiyat Evreni\'ne davet etmek istiyoruz! Sizin için Edebiyat Evreni\'nin tüm özelliklerine erişebileceğiniz kişisel bir hesap hazırladık. Lütfen yeni nesil yaratıcı yazma ve okumayı yaratmada bize katılın!',
    'email.enrollAccount.button': 'Hesabınıza erişin',
    'email.enrollAccount.signature': 'Sizleri de aramızda görmek için sabırsızlanıyoruz,<br />Edebiyat Evreni ekibi',
    // Reset password
    'email.resetPassword.messageHtml': 'Hesabınız için şifrenizi sıfırlama talebinizi aldık. İşleme devam etmek için lütfen aşağıdaki düğmeye tıklayın. Bu talebi yapmadıysanız, bu e-postayı görmezden gelebilirsiniz, ancak güvenlik ayarlarınızı gözden geçirmek için iyi bir zaman olabilir.',
    'email.resetPassword.button': 'Şifreyi sıfırla',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Sizi aramızda görmekten mutluluk duyarız! Bu e-posta adresini doğrulamak için lütfen aşağıdaki düğmeye tıklayın.',
    'email.verifyEmail.button': 'Bu e-posta adresini doğrula',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Hesabınız yükseltilmiştir',
    'email.adminUpgrade.message': `Hesabınızı {plan, select,
    explorer {Gezgin}
    adventurer {Maceraperest}
    storyteller {Hikayeci}
    other {}
  } seviyesine yükselttik. Bir sonraki {days} gün boyunca geçerli.\n\nKeyfini çıkarın,\nLiterary Universe ekibi`,
    'email.adminUpgrade.messageHtml': `Hesabınızı önümüzdeki {days} gün boyunca {plan, select,
    explorer {Explorer}
    adventurer {Adventurer}
    storyteller {Storyteller}
    other {}
  } kademesine yükselttik. İyi eğlenceler!`,
    'email.verification': 'E-posta doğrulama',
    'email.verifying': 'E-postanızı doğruluyoruz. Bu birkaç dakika sürebilir...',
    'email.verified': 'Harika haber! E-postanız doğrulandı!'
};