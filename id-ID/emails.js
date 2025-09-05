/**
 * @authors Jan Dvorak
 */
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
    'email.enrollAccount.messageHtml': 'Kami ingin mengundang Anda ke Literary Universe! Kami telah menyiapkan akun pribadi untuk Anda, di mana Anda dapat mengakses semua fitur Literary Universe. Bergabunglah bersama kami untuk menciptakan generasi baru dalam menulis dan membaca yang kreatif!',
    'email.enrollAccount.button': 'Akses akun Anda',
    'email.enrollAccount.signature': 'Kami tunggu kedatangan Anda,<br />Tim Literary Universe',
    // Reset password
    'email.resetPassword.messageHtml': 'Kami telah menerima permintaan untuk mengatur ulang kata sandi akun Anda. Silakan klik tombol di bawah ini untuk melanjutkan proses. Jika Anda belum melakukan permintaan ini, Anda dapat mengabaikan email ini, tetapi ini mungkin saat yang tepat untuk meninjau pengaturan keamanan Anda.',
    'email.resetPassword.button': 'Atur ulang kata sandi',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Kami senang Anda bergabung dengan kami! Silakan klik tombol di bawah ini untuk memverifikasi alamat email ini.',
    'email.verifyEmail.button': 'Verifikasi alamat email ini',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Akun Anda telah ditingkatkan',
    'email.adminUpgrade.message': `{days} Kami telah meningkatkan akun Anda menjadi {plan, select,
    explorer {Penjelajah}
    adventurer {Petualang}
    storyteller {Pendongeng}
    other {}
  } untuk beberapa hari ke depan.\n\nSelamat menikmati,\nTim Literary Universe`,
    'email.adminUpgrade.messageHtml': `Kami telah meningkatkan akun Anda menjadi {plan, select,
    explorer {Penjelajah}
    adventurer {Petualang}
    storyteller {Pencerita}
    other {}
  } untuk ! {days} hari ke depan. Nikmati!`,
    'email.verification': 'Verifikasi E-mail',
    'email.verifying': 'Memverifikasi e-mail Anda. Ini akan memakan waktu sebentar...',
    'email.verified': 'Berita bagus! E-mail Anda telah diverifikasi!',
    // The Way (Author Level Up)
    'theWay.levelUp.emailSubject': 'Selamat! Anda telah mencapai Level Penulis {level} di Literary Universe!',
    'theWay.levelUp.emailTitle': 'Selamat! Anda telah mencapai Level Penulis {level}!',
    'theWay.levelUp.emailIntro': 'Dedikasi Anda terhadap seni menulis telah dihargai!',
    'theWay.levelUp.emailGenre': 'Anda telah mencapai level {level} dalam genre {genre} .',
    'theWay.levelUp.emailContinue': 'Lanjutkan perjalanan Anda dan buka lebih banyak pencapaian di The Way of the Author.',
    'theWay.levelUp.viewDashboard': 'Lihat Dasbor Anda',
    // Notifications - General content comment
    'email.notifications.contentComment.subject': 'Komentar baru pada konten Anda',
    'email.notifications.contentComment.title': 'Komentar baru di {contentType}Anda',
    'email.notifications.contentComment.details': 'Judul: {contentTitle} - Dari: {commenterName}',
    'email.notifications.contentComment.cta': 'Lihat komentar',
    // Notifications - Beta reader comment
    'email.notifications.betaComment.subject': 'Umpan balik pembaca beta baru',
    'email.notifications.betaComment.title': 'Umpan balik pembaca beta baru',
    'email.notifications.betaComment.details': 'Cerita: {storyTitle}{chapter} - Dari: {commenterName}',
    'email.notifications.betaComment.cta': 'Lihat umpan balik',
    // Notifications - New message
    'email.notifications.newMessage.subject': 'Anda memiliki pesan baru',
    'email.notifications.newMessage.title': 'Anda memiliki pesan baru',
    'email.notifications.newMessage.details': 'Dari: {senderName}',
    'email.notifications.newMessage.cta': 'Lihat pesan',
    // Notifications - Chapter published
    'email.notifications.chapterPublished.subject': 'Bab baru diterbitkan',
    'email.notifications.chapterPublished.title': 'Bab baru diterbitkan',
    'email.notifications.chapterPublished.details': 'Cerita: {storyTitle} - Bab: {chapterTitle}{suffix}',
    'email.notifications.chapterPublished.cta': 'Buka bab',
    // Notifications - First story created
    'email.notifications.firstStory.subject': 'Cerita pertama Anda ada di sini!',
    'email.notifications.firstStory.title': 'Cerita pertama Anda sudah tayang!',
    'email.notifications.firstStory.intro': 'Awal yang luar biasa! Teruslah menulis dan kembangkan dunia Anda dengan panduan bermanfaat di The Way of the Author.',
    'email.notifications.firstStory.details': 'Cerita: {storyTitle}',
    'email.notifications.firstStory.ctaResources': 'Lanjutkan ke Jalan Penulis',
    'email.notifications.firstStory.ctaStory': 'Buka cerita Anda',
    // Notifications - First universe created
    'email.notifications.firstUniverse.subject': 'Selamat atas alam semesta pertama Anda!',
    'email.notifications.firstUniverse.title': 'Selamat telah menciptakan alam semesta pertama Anda!',
    'email.notifications.firstUniverse.intro': 'Perjalanan membangun dunia Anda dimulai. Berikut ini beberapa sumber daya untuk membantu Anda mengambil langkah selanjutnya.',
    'email.notifications.firstUniverse.details': 'Semesta: {universeName}',
    'email.notifications.firstUniverse.ctaResources': 'Jelajahi Jalan Sang Penulis',
    'email.notifications.firstUniverse.ctaUniverse': 'Buka alam semesta Anda',
    // Notifications - First chapter published for a story
    'email.notifications.firstChapterPublished.subject': 'Bab pertama Anda diterbitkan!',
    'email.notifications.firstChapterPublished.title': 'Bab pertama cerita Anda telah diterbitkan!',
    'email.notifications.firstChapterPublished.intro': 'Bagikan karya Anda, kumpulkan umpan balik, dan pertahankan momentumnya.',
    'email.notifications.firstChapterPublished.details': 'Cerita: {storyTitle} - Bab: {chapterTitle}',
    'email.notifications.firstChapterPublished.ctaChapter': 'Buka bab',
    'email.notifications.firstChapterPublished.ctaStory': 'Lihat cerita',
    // Notifications - Story finished
    'email.notifications.storyFinished.subject': 'Selamat telah menyelesaikan cerita Anda!',
    'email.notifications.storyFinished.title': 'Anda berhasil - kisah Anda sudah selesai!',
    'email.notifications.storyFinished.intro': 'Rayakan pencapaian ini! Pertimbangkan untuk menerbitkan, membagikan, atau mengirimkan cerita Anda untuk menjangkau lebih banyak pembaca.',
    'email.notifications.storyFinished.details': 'Cerita: {storyTitle}',
    'email.notifications.storyFinished.cta': 'Lihat cerita Anda',
    // Notifications - Fan club new subscriber
    'email.notifications.newFanSubscriber.subject': 'Pelanggan klub penggemar baru',
    'email.notifications.newFanSubscriber.title': 'Anda memiliki pelanggan klub penggemar baru!',
    'email.notifications.newFanSubscriber.details': 'Pelanggan: {subscriberName}',
    'email.notifications.newFanSubscriber.cta': 'Lihat klub penggemar',
    // Notifications - Fan club subscription ended
    'email.notifications.fanUnsubscribed.subject': 'Seorang anggota meninggalkan klub penggemar Anda',
    'email.notifications.fanUnsubscribed.title': 'Seorang anggota meninggalkan klub penggemar Anda',
    'email.notifications.fanUnsubscribed.intro': 'Kami ingin memberi tahu Anda tentang perubahan terbaru. Pertimbangkan untuk membagikan pembaruan atau konten eksklusif untuk meningkatkan keterlibatan.',
    'email.notifications.fanUnsubscribed.details': 'Mantan anggota: {name}',
    'email.notifications.fanUnsubscribed.cta': 'Klub penggemar terbuka',
    // Notifications - Friend request
    'email.notifications.friendRequest.subject': 'Permintaan pertemanan baru',
    'email.notifications.friendRequest.title': 'Permintaan pertemanan baru',
    'email.notifications.friendRequest.details': 'Dari: {requesterName}',
    'email.notifications.friendRequest.cta': 'Permintaan tinjauan',
    // Notifications - Collaboration invitation
    'email.notifications.collabInvite.subject': 'Undangan kolaborasi',
    'email.notifications.collabInvite.title': 'Anda memiliki undangan kolaborasi',
    'email.notifications.collabInvite.details': 'Pengundang: {inviterName} - Peran {role} - Target: {targetType} - {targetTitle}',
    'email.notifications.collabInvite.cta': 'Undangan tinjauan',
    // Notifications - Organization invitation
    'email.notifications.orgInvite.subject': 'Undangan untuk bergabung dengan organisasi',
    'email.notifications.orgInvite.title': 'Anda diundang untuk bergabung dengan {orgName}',
    'email.notifications.orgInvite.details': 'Pengundang: {inviterName}',
    'email.notifications.orgInvite.cta': 'Undangan tinjauan',
    // Notifications - Daily digest
    'email.notifications.dailyDigest.subject': 'Pembaruan harian Anda',
    'email.notifications.dailyDigest.title': 'Pembaruan harian Anda',
    'email.notifications.dailyDigest.intro': 'Inilah yang terjadi hari ini.',
    'email.notifications.dailyDigest.cta': 'Lihat semua pembaruan',
    'email.notifications.dailyDigest.empty': 'Tidak ada pembaruan hari ini.',
    // Notifications - Followed author posted a new blog
    'email.notifications.followedBlogPost.subject': 'Postingan blog baru dari penulis yang Anda ikuti',
    'email.notifications.followedBlogPost.title': '{authorName} memposting blog baru',
    'email.notifications.followedBlogPost.details': 'Judul: {postTitle}',
    'email.notifications.followedBlogPost.cta': 'Baca posting',
    // Notifications - Followed author published new work
    'email.notifications.followedNewWork.subject': 'Karya baru dari penulis yang Anda ikuti',
    'email.notifications.followedNewWork.title': '{authorName} menerbitkan yang baru {workType}',
    'email.notifications.followedNewWork.details': 'Judul: {title}',
    'email.notifications.followedNewWork.cta': 'Melihat',
    // Story notification emails
    'email.story.newComment.subject': 'Komentar baru di "{storyTitle}"',
    'email.story.newComment.body': '{commenterName} tinggalkan komentar pada cerita Anda "{storyTitle}": {commentText}',
    'email.story.betaComment.subject': 'Umpan balik beta baru di "{storyTitle}"',
    'email.story.betaComment.body': '{commenterName} memberikan umpan balik versi beta di "{storyTitle}": {commentText}',
    'email.story.collaboratorAccepted.subject': 'Anggota tim baru untuk "{storyTitle}"',
    'email.story.collaboratorAccepted.body': '{collaboratorName} telah menerima undangan Anda untuk berkolaborasi di "{storyTitle}" sebagai {role}.',
    'email.story.milestone.subject': 'Selamat! Tonggak sejarah tercapai di "{storyTitle}"',
    'email.story.milestone.body': 'Berita bagus! Bab Anda "{chapterTitle}" dari "{storyTitle}" telah sampai di {count} {milestone}. Teruslah bekerja dengan baik!',
    'email.story.betaRevision.subject': 'Revisi beta baru tersedia: "{chapterTitle}"',
    'email.story.betaRevision.body': '{authorName} telah menerbitkan revisi beta baru dari "{chapterTitle}" dari "{storyTitle}". Umpan balik Anda akan sangat kami hargai!',
    'email.story.newChapter.subject': 'Bab baru tersedia: "{storyTitle}"',
    'email.story.newChapter.body': '{authorName} telah menerbitkan bab baru dari "{storyTitle}": "{chapterTitle}". Selamat membaca!',
    // Universe notification emails
    'email.universe.newStory.subject': 'Cerita baru di alam semesta: "{storyTitle}"',
    'email.universe.newStory.body': '{authorName} menambahkan cerita baru "{storyTitle}" ke alam semesta yang Anda ikuti. Temukan petualangan baru!',
    'email.universe.collaboratorChange.subject': 'Pembaruan kolaborasi Universe',
    'email.universe.collaboratorChange.body': 'Telah terjadi perubahan dalam tim kolaborasi untuk semesta yang Anda ikuti.',
    'email.universe.update.subject': 'Semesta diperbarui',
    'email.universe.update.body': 'Alam semesta yang Anda ikuti telah diperbarui dengan konten baru.',
    'email.universe.comment.subject': 'Komentar baru tentang alam semesta',
    'email.universe.comment.body': '{commenterName} mengomentari alam semesta yang Anda ikuti: "{commentText}"',
    // Blog notification emails
    'email.blog.newPost.subject': 'Posting blog baru: "{postTitle}"',
    'email.blog.newPost.body': '{authorName} menerbitkan postingan blog baru "{postTitle}" di blog yang Anda ikuti.',
    'email.blog.comment.subject': 'Komentar baru di postingan blog: "{postTitle}"',
    'email.blog.comment.body': '{commenterName} mengomentari posting blog "{postTitle}": "{commentText}"',
    'email.blog.update.subject': 'Blog diperbarui',
    'email.blog.update.body': 'Blog yang Anda ikuti telah diperbarui.',
    // General comment notification emails
    'email.comment.general.subject': 'Komentar baru di "{contentTitle}"',
    'email.comment.general.body': '{commenterName} mengomentari "{contentTitle}": "{commentText}"',
    'email.comment.reply.subject': 'Membalas komentar Anda',
    'email.comment.reply.body': '{replierName} membalas komentar Anda di "{contentTitle}": "{replyText}"',
    'email.comment.like.subject': 'Komentar Anda disukai',
    'email.comment.like.body': '{likerName} menyukai komentar Anda. Teruslah terlibat!',
    // Content-specific comment notification emails
    'email.comment.fanArt.subject': 'Komentar baru tentang seni penggemar: "{contentTitle}"',
    'email.comment.fanArt.body': '{commenterName} mengomentari karya seni penggemar Anda "{contentTitle}": "{commentText}"',
    'email.comment.event.subject': 'Komentar baru tentang acara: "{contentTitle}"',
    'email.comment.event.body': '{commenterName} mengomentari acara tersebut "{contentTitle}": "{commentText}"',
    'email.comment.revision.subject': 'Komentar baru tentang revisi',
    'email.comment.revision.body': '{commenterName} mengomentari revisi Anda: "{commentText}"',
    'email.comment.feedback.subject': 'Komentar baru tentang umpan balik',
    'email.comment.feedback.body': '{commenterName} mengomentari masalah umpan balik Anda: "{commentText}"',
    // Welcome email
    'email.welcome.subject': 'Selamat datang di Literary Universe!'
};