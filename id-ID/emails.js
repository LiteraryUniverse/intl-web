/**
 * @authors Jan Dvorak
 */
/* eslint-disable max-len */
export default {
    'email.enrollAccount.subject': 'Undangan ke Literary Universe untuk {username}',
    'email.enrollAccount.message': `Halo {username}\n\n
    Kami ingin mengundang Anda ke Literary Universe! Kami telah membuat akun pribadi khusus untuk Anda di mana Anda dapat mengakses semua fitur dari Literary Universe! Silakan bergabunglah dengan kami dalam menciptakan generasi berikutnya dari alat menulis dan membaca yang kreatif!
    Untuk mengaktifkan akun Anda, cukup klik tautan di bawah ini:\n\n{url}`,
    'email.resetPassword.subject': 'Reset kata sandi Literary Universe',
    'email.resetPassword.message': `Halo {username}!\n\n Kami telah menerima permintaan untuk mereset kata sandi akun Anda.
        Silakan ikuti tautan di bawah ini untuk mereset kata sandi Anda:\n\n{url}`,
    'email.verifyEmail.subject': 'Verifikasi email Literary Universe',
    'email.verifyEmail.message': 'Halo {username}!\n\n Silakan verifikasi alamat email Anda dengan mengklik tautan di bawah ini:\n\n{url}',
    // New html email keys
    'email.salutation': 'Halo {username},',
    'email.welcome': 'Selamat datang di Literary Universe!',
    'email.signature': 'Hormat kami,<br />Tim Literary Universe',
    // Enrollment
    'email.enrollAccount.welcome': 'Selamat datang',
    'email.enrollAccount.messageHtml': 'Kami ingin mengundang Anda ke Literary Universe! Kami telah menyiapkan akun pribadi untuk Anda di mana Anda dapat mengakses semua fitur dari Literary Universe! Silakan bergabung dengan kami dalam menciptakan generasi berikutnya dari menulis dan membaca yang kreatif!',
    'email.enrollAccount.button': 'Akses akun Anda',
    'email.enrollAccount.signature': 'Kami sangat menantikan untuk bertemu dengan Anda, tim Literary Universe<br />',
    // Reset password
    'email.resetPassword.messageHtml': 'Kami telah menerima permintaan untuk mengatur ulang kata sandi akun Anda, silakan klik tombol di bawah ini untuk melanjutkan proses. Jika Anda tidak melakukan permintaan ini, Anda dapat mengabaikan email ini, tetapi ini mungkin saat yang tepat untuk meninjau pengaturan keamanan Anda.',
    'email.resetPassword.button': 'Atur ulang kata sandi',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Kami senang memiliki Anda bergabung! Silakan klik tombol di bawah ini untuk memverifikasi alamat email ini.',
    'email.verifyEmail.button': 'Verifikasi alamat email ini',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Akun Anda telah ditingkatkan',
    'email.adminUpgrade.message': `We have upgraded your account to {plan, select,
    explorer {Explorer}
    adventurer {Adventurer}
    storyteller {Storyteller}
    other {}
  } tier for the next {days} days.\n\nEnjoy,\nLiterary Universe team`,
    'email.adminUpgrade.messageHtml': `Kami telah meningkatkan akun Anda menjadi {plan, select,
    explorer {Penjelajah}
    adventurer {Petualang}
    storyteller {Pencerita}
    other {}
  } untuk ! {days} hari ke depan. Nikmati!`,
    'email.verification': 'Verifikasi E-mail',
    'email.verifying': 'Memverifikasi e-mail Anda. Ini akan memakan waktu sebentar...',
    'email.verified': 'Berita bagus! E-mail Anda telah diverifikasi!'
};    /* eslint-enable max-len */