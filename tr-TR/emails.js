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
    'email.signature': 'Saygılarımızla<br>, Literary Universe ekibi</br>',
    'email.footer.settingsHtml': 'E-posta ayarlarınızı <link>hesap ayarlarınızdan</link> değiştirebilirsiniz.',
    // Enrollment
    'email.enrollAccount.welcome': 'Aramıza hoş geldiniz',
    'email.enrollAccount.messageHtml': 'Sizi Edebiyat Evreni\'ne davet etmek istiyoruz! Sizin için Edebiyat Evreni\'nin tüm özelliklerine erişebileceğiniz kişisel bir hesap hazırladık. Lütfen yeni nesil yaratıcı yazma ve okumayı yaratmada bize katılın!',
    'email.enrollAccount.button': 'Hesabınıza erişin',
    'email.enrollAccount.signature': 'Sizi görmek için sabırsızlanıyoruz<br>, Literary Universe ekibi</br>',
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
    'email.adminUpgrade.messageHtml': `Hesabınızı önümüzdeki {days, number} günler için {plan, select,
    explorer {Explorer}
    adventurer {Adventurer}
    storyteller {Storyteller}
    other {}
  } kademesine yükselttik. İyi eğlenceler!`,
    'email.verification': 'E-posta doğrulama',
    'email.verifying': 'E-postanızı doğruluyoruz. Bu birkaç dakika sürebilir...',
    'email.verified': 'Harika haber! E-postanız doğrulandı!',
    // The Way (Author Level Up)
    'theWay.levelUp.emailSubject': 'Tebrikler! Literary Universe\'de Yazar Seviyesine {level, number} ulaştınız!',
    'theWay.levelUp.emailTitle': 'Tebrikler! Yazar Seviyesine ulaştınız {level, number}!',
    'theWay.levelUp.emailIntro': 'Yazma zanaatına olan bağlılığınız ödüllendirildi!',
    'theWay.levelUp.emailGenre': '{genre} türünde {level, number} seviyesine ulaştınız.',
    'theWay.levelUp.emailContinue': 'Yolculuğunuza devam edin ve The Way of the Author\'da daha fazla başarımın kilidini açın.',
    'theWay.levelUp.viewDashboard': 'Kontrol Panelinizi Görüntüleyin',
    // Notifications - General content comment
    'email.notifications.contentComment.subject': 'İçeriğiniz hakkında yeni yorum',
    'email.notifications.contentComment.title': '{contentType}adresinize yeni yorum',
    'email.notifications.contentComment.details': 'Başlık: {contentTitle} - Kimden? {commenterName}',
    'email.notifications.contentComment.cta': 'Yorumu görüntüle',
    // Notifications - Beta reader comment
    'email.notifications.betaComment.subject': 'Yeni beta okuyucu geri bildirimi',
    'email.notifications.betaComment.title': 'Yeni beta okuyucu geri bildirimi',
    'email.notifications.betaComment.details': 'Hikaye: {storyTitle}{chapter} - Kimden? {commenterName}',
    'email.notifications.betaComment.cta': 'Geri bildirimi görüntüle',
    // Notifications - New message
    'email.notifications.newMessage.subject': 'Yeni bir mesajınız var',
    'email.notifications.newMessage.title': 'Yeni bir mesajınız var',
    'email.notifications.newMessage.details': 'Kimden? {senderName}',
    'email.notifications.newMessage.cta': 'Mesajı görüntüle',
    // Notifications - Chapter published
    'email.notifications.chapterPublished.subject': 'Yeni bölüm yayınlandı',
    'email.notifications.chapterPublished.title': 'Yeni bölüm yayınlandı',
    'email.notifications.chapterPublished.details': 'Hikaye: {storyTitle} - Bölüm: {chapterTitle}{suffix}',
    'email.notifications.chapterPublished.cta': 'Açık bölüm',
    // Notifications - First story created
    'email.notifications.firstStory.subject': 'İlk hikayeniz burada!',
    'email.notifications.firstStory.title': 'İlk hikayeniz yayında!',
    'email.notifications.firstStory.intro': 'Harika bir başlangıç! Yazarın Yolu\'ndaki yararlı rehberlikle yazmaya ve dünyanızı büyütmeye devam edin.',
    'email.notifications.firstStory.details': 'Hikaye: {storyTitle}',
    'email.notifications.firstStory.ctaResources': 'Yazarın Yolu\'na devam edin',
    'email.notifications.firstStory.ctaStory': 'Hikayenizi açın',
    // Notifications - First story published (with level 1 achievement)
    'email.notifications.firstStoryPublished.subject': '🎉 Tebrikler! İlk hikayeniz yayınlandı ve Yazar Seviyesi 1\'e ulaştınız!',
    'email.notifications.firstStoryPublished.title': '🎉 Yolculuğunuz Başlıyor!',
    'email.notifications.firstStoryPublished.intro': 'İlk öykünüzü yayınladığınız için tebrikler! Bu, yaratıcılık yolculuğunuzda önemli bir dönüm noktası.',
    'email.notifications.firstStoryPublished.levelAchievement': '🌟 Yazarın Yolu\'nda Yazar Seviyesi 1\'e ulaştınız! Bu, hikaye anlatımında inanılmaz bir maceranın sadece başlangıcı.',
    'email.notifications.firstStoryPublished.encouragement': 'Her büyük yazar ilk yayınlanan eseriyle başlamıştır. Yazmaya devam edin, büyümeye devam edin ve yaratıcılığınızın gelişmesine izin verin. Literary Universe topluluğu sizi her adımda desteklemek için burada.',
    'email.notifications.firstStoryPublished.ctaTheWay': 'Yazarın Yolunu Keşfedin',
    'email.notifications.firstStoryPublished.ctaStory': 'Yayınlanan Hikayenizi Görüntüleyin',
    // Notifications - First universe created
    'email.notifications.firstUniverse.subject': 'İlk evreniniz için tebrikler!',
    'email.notifications.firstUniverse.title': 'İlk evreninizi yarattığınız için tebrikler!',
    'email.notifications.firstUniverse.intro': 'Dünya inşa etme yolculuğunuz başlıyor. İşte sonraki adımları atmanıza yardımcı olacak bazı kaynaklar.',
    'email.notifications.firstUniverse.details': 'Evren: {universeName}',
    'email.notifications.firstUniverse.ctaResources': 'Yazarın Yolunu Keşfedin',
    'email.notifications.firstUniverse.ctaUniverse': 'Evreninizi açın',
    // Notifications - First chapter published for a story
    'email.notifications.firstChapterPublished.subject': 'İlk bölümünüz yayınlandı!',
    'email.notifications.firstChapterPublished.title': 'Hikayenizin ilk bölümü yayınlandı!',
    'email.notifications.firstChapterPublished.intro': 'Çalışmalarınızı paylaşın, geri bildirim toplayın ve ivmeyi devam ettirin.',
    'email.notifications.firstChapterPublished.details': 'Hikaye: {storyTitle} - Bölüm: {chapterTitle}',
    'email.notifications.firstChapterPublished.ctaChapter': 'Açık bölüm',
    'email.notifications.firstChapterPublished.ctaStory': 'Hikayeyi görüntüle',
    // Notifications - Story finished
    'email.notifications.storyFinished.subject': 'Hikayeni bitirdiğin için tebrikler!',
    'email.notifications.storyFinished.title': 'Başardınız - hikayeniz bitti!',
    'email.notifications.storyFinished.intro': 'Bu dönüm noktasını kutlayın! Daha fazla okuyucuya ulaşmak için hikayenizi yayınlamayı, paylaşmayı veya göndermeyi düşünün.',
    'email.notifications.storyFinished.details': 'Hikaye: {storyTitle}',
    'email.notifications.storyFinished.cta': 'Hikayenizi görüntüleyin',
    // Notifications - Fan club new subscriber
    'email.notifications.newFanSubscriber.subject': 'Yeni hayran kulübü abonesi',
    'email.notifications.newFanSubscriber.title': 'Yeni bir hayran kulübü aboneniz var!',
    'email.notifications.newFanSubscriber.details': 'Abone: {subscriberName}',
    'email.notifications.newFanSubscriber.cta': 'Hayran kulübünü görüntüle',
    // Notifications - Fan club subscription ended
    'email.notifications.fanUnsubscribed.subject': 'Bir üye hayran kulübünüzden ayrıldı.',
    'email.notifications.fanUnsubscribed.title': 'Bir üye hayran kulübünüzden ayrıldı.',
    'email.notifications.fanUnsubscribed.intro': 'Yakın zamanda yapılan bir değişiklik hakkında sizi bilgilendirmek istedik. Etkileşimi artırmak için güncellemeleri veya özel içerikleri paylaşmayı düşünün.',
    'email.notifications.fanUnsubscribed.details': 'Eski üye: {name}',
    'email.notifications.fanUnsubscribed.cta': 'Açık hayran kulübü',
    // Notifications - Friend request
    'email.notifications.friendRequest.subject': 'Yeni arkadaşlık isteği',
    'email.notifications.friendRequest.title': 'Yeni arkadaşlık isteği',
    'email.notifications.friendRequest.details': 'Kimden? {requesterName}',
    'email.notifications.friendRequest.cta': 'İnceleme talebi',
    // Notifications - Collaboration invitation
    'email.notifications.collabInvite.subject': 'İşbirliği daveti',
    'email.notifications.collabInvite.title': 'Bir işbirliği davetiniz var',
    'email.notifications.collabInvite.details': 'Davet eden: {inviterName} - Rolü {role} - Hedef: {targetType} - {targetTitle}',
    'email.notifications.collabInvite.cta': 'Davetiyeyi gözden geçirin',
    // Notifications - Organization invitation
    'email.notifications.orgInvite.subject': 'Bir kuruluşa katılım daveti',
    'email.notifications.orgInvite.title': 'Katılmaya davetlisiniz {orgName}',
    'email.notifications.orgInvite.details': 'İnviter: {inviterName}',
    'email.notifications.orgInvite.cta': 'Davetiyeyi gözden geçirin',
    // Notifications - Daily digest
    'email.notifications.dailyDigest.subject': 'Günlük güncellemeleriniz',
    'email.notifications.dailyDigest.title': 'Günlük güncellemeleriniz',
    'email.notifications.dailyDigest.intro': 'İşte bugün olanlar.',
    'email.notifications.dailyDigest.cta': 'Tüm güncellemeleri görüntüle',
    'email.notifications.dailyDigest.empty': 'Bugün güncelleme yok.',
    // Notifications - Followed author posted a new blog
    'email.notifications.followedBlogPost.subject': 'Takip ettiğiniz bir yazarın yeni blog yazısı',
    'email.notifications.followedBlogPost.title': '{authorName} yeni bir blog yayınladı',
    'email.notifications.followedBlogPost.details': 'Başlık: {postTitle}',
    'email.notifications.followedBlogPost.cta': 'Yazıyı okuyun',
    // Notifications - Followed author published new work
    'email.notifications.followedNewWork.subject': 'Takip ettiğiniz bir yazarın yeni eseri',
    'email.notifications.followedNewWork.title': '{authorName} yeni bir {workType}yayınladı',
    'email.notifications.followedNewWork.details': 'Başlık: {title}',
    'email.notifications.followedNewWork.cta': 'Görünüm',
    // Story notification emails
    'email.story.newComment.subject': '"{storyTitle}" hakkında yeni yorum',
    'email.story.newComment.body': '{commenterName} "{storyTitle}" hikayenize bir yorum bıraktı: {commentText}',
    'email.story.betaComment.subject': '"{storyTitle}" hakkında yeni beta geri bildirimi',
    'email.story.betaComment.body': '{commenterName} "{storyTitle}" hakkında beta geri bildirimi sağladı: {commentText}',
    'email.story.collaboratorAccepted.subject': '"{storyTitle}" için yeni ekip üyesi',
    'email.story.collaboratorAccepted.body': '{collaboratorName} "{storyTitle}" üzerinde işbirliği yapma davetinizi {role}olarak kabul etti.',
    'email.story.milestone.subject': 'Tebrikler! "{storyTitle}" adresinde kilometre taşına ulaşıldı',
    'email.story.milestone.body': 'Harika bir haber! "{storyTitle}" adresindeki "{chapterTitle}" bölümünüz {count} {milestone}adresine ulaştı. Harika çalışmaya devam edin!',
    'email.story.betaRevision.subject': 'Yeni beta revizyonu mevcut: "{chapterTitle}"',
    'email.story.betaRevision.body': '{authorName} "{storyTitle}" adresinden "{chapterTitle}" adresinin yeni bir beta revizyonunu yayınladı. Geri bildirimleriniz çok takdir edilecektir!',
    'email.story.newChapter.subject': 'Yeni bölüm mevcut: "{storyTitle}"',
    'email.story.newChapter.body': '{authorName} "{storyTitle}" \'un yeni bir bölümünü yayınladı: "{chapterTitle}". İyi okumalar!',
    // Universe notification emails
    'email.universe.newStory.subject': 'Evrende yeni bir hikaye: "{storyTitle}"',
    'email.universe.newStory.body': '{authorName} takip ettiğiniz bir evrene yeni bir hikaye "{storyTitle}" ekledi. Yeni maceraları keşfedin!',
    'email.universe.collaboratorChange.subject': 'Evren işbirliği güncellemesi',
    'email.universe.collaboratorChange.body': 'Dahil olduğunuz bir evren için işbirliği ekibinde bir değişiklik oldu.',
    'email.universe.update.subject': 'Evren güncellendi',
    'email.universe.update.body': 'Takip ettiğiniz bir evren yeni içerikle güncellendi.',
    'email.universe.comment.subject': 'Evren hakkında yeni yorum',
    'email.universe.comment.body': '{commenterName} Takip ettiğiniz bir evren hakkında yorum yaptınız: "{commentText}"',
    // Blog notification emails
    'email.blog.newPost.subject': 'Yeni blog yazısı: "{postTitle}"',
    'email.blog.newPost.body': '{authorName} takip ettiğiniz bir blogda yeni bir blog yazısı "{postTitle}" yayınladı.',
    'email.blog.comment.subject': 'Blog gönderisine yeni yorum: "{postTitle}"',
    'email.blog.comment.body': '{commenterName} "{postTitle}" blog yazısı hakkında yorum yaptı: "{commentText}"',
    'email.blog.update.subject': 'Blog güncellendi',
    'email.blog.update.body': 'Takip ettiğiniz bir blog güncellendi.',
    // General comment notification emails
    'email.comment.general.subject': '"{contentTitle}" hakkında yeni yorum',
    'email.comment.general.body': '{commenterName} "{contentTitle}": "{commentText}" hakkında yorum yaptı',
    'email.comment.reply.subject': 'Yorumunuza cevap verin',
    'email.comment.reply.body': '{replierName} "{contentTitle}" hakkındaki yorumunuza yanıt: "{replyText}"',
    'email.comment.like.subject': 'Yorumunuz beğenildi',
    'email.comment.like.body': '{likerName} yorumunuzu beğendim. İlgilenmeye devam edin!',
    // Content-specific comment notification emails
    'email.comment.fanArt.subject': 'Hayran sanatı hakkında yeni yorum: "{contentTitle}"',
    'email.comment.fanArt.body': '{commenterName} "{contentTitle}" hayran sanatınız hakkında yorum yaptı: "{commentText}"',
    'email.comment.event.subject': 'Etkinlik hakkında yeni yorum: "{contentTitle}"',
    'email.comment.event.body': '{commenterName} "{contentTitle}" etkinliği hakkında yorum yaptı: "{commentText}"',
    'email.comment.revision.subject': 'Revizyon hakkında yeni yorum',
    'email.comment.revision.body': '{commenterName} revizyonunuz hakkında yorum yaptı: "{commentText}"',
    'email.comment.feedback.subject': 'Geri bildirim hakkında yeni yorum',
    'email.comment.feedback.body': '{commenterName} geri bildirim sorununuz hakkında yorum yaptı: "{commentText}"',
    // Welcome email
    'email.welcome.subject': 'Edebiyat Evrenine hoş geldiniz!'
};