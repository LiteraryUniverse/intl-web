export default {
    'blog.noneMsg': `Şu anda {type, select,
    organization {blogunuz yok}
    universe {evreniniz için bir blog}
    user {bir blog}
    other {}
  }.`,
    'blog.create': 'Yeni bir blog oluştur',
    'blog.settings': `{type, select,
    org {Blog}
    universe {Evren sayfası}
    user {Blog}
    other {}
  } ayarları`,
    'blog.description': 'Blog tanıtımı',
    'blog.theme': 'Tema',
    'blog.theme.info': 'Temayı ayarlayarak sayfanın görünümünü değiştirebileceksiniz. Bu özellik şu anda hazır değildir.',
    'blog.posts.total': `Bu blogda {total, plural,
    zero {gönderi yok}
    one {bir gönderi var}
    other {# gönderi var}
  } .`,
    'blog.post.create': 'Write a new post',
    'blog.post.update': '{title}düzenleniyor',
    'blog.post.text': 'Gönderi metni',
    'common.slug': 'SEO dostu adres',
    'blog.slug.explained': 'Gönderi için güzel görünümlü bir URL oluşturun. "-" haricinde özel karakterler kullanmaktan kaçının.',
    'blog.publicView': 'Herkese açık',
    'blog.post.notfound': 'Blog gönderisi bulunamadı',
    'blog.lists.works': `{type, select,
    universes {Evrenler}
    stories {Hikayeler}
    fanfiction {Hayran Kurgu çalışması}
    other {}
  }`,
    'blog.social.sameAsMain': `Sosyal bağlantılar {type, select,
    organization {kuruluş ayarları}
    user {kullanıcı profiliyle aynıdır}
    other {}
  }`,
    'blog.social.website': 'Resmi web sitesi',
    'blog.settings.universeSettings': 'Edebiyat Evreni blogları, evren ayarlarından temel ayarları alınarak edebiyat evreni sayfalarına entegre edilir.',
    'blog.settings.organizationSettings': 'Kuruluş blogları kuruluş sayfalarına entegre edilir.',
    'blogs.lu': 'Resmi Edebiyat Evreni blogları',
    'blogs.featured': 'Öne çıkan bloglar',
    'blogs.new': 'En yeni bloglar',
    'blogs.title': 'Edebiyat Evreni Blogları',
    'blogs.description': 'Edebiyat Evreni platformundaki blogların listesi.',
    'blogs.visit': 'Blogu Ziyaret Et',
    'blog.settingsAria': 'Blog için ayar kategorileri',
    'blog.settings.blog': 'Blog',
    'blog.settings.forum': 'Forum',
    'blog.post.introText': 'Giriş paragrafı',
    'blog.post.writtenBy': '{usernameDisplay}tarafından yazıldı',
    'blog.post.writtenByFor': '{usernameDisplay} tarafından {publicationName}için yazıldı',
    'blog.posts.recent': 'Son gönderiler',
    'blog.statsPage': 'Blog istatistikleri',
    'blog.view': 'Blogu Görüntüle',
    'blog.settings.qa': 'SORU-CEVAP',
    // Q&A Settings
    'blog.qa.settings.title': 'Soru-Cevap Ayarları',
    'blog.qa.settings.notSupported': 'Soru-Cevap şu anda yalnızca kullanıcı ve evren blogları için desteklenmektedir.',
    'blog.qa.settings.enable': 'Soru ve Cevapları Etkinleştir',
    'blog.qa.settings.enableQA': 'Okuyucuların soru sormasına izin verin',
    'blog.qa.settings.enableQA.help': 'Etkinleştirildiğinde, okuyucular herkese açık veya özel olarak yanıtlayabileceğiniz sorular gönderebilir.',
    'blog.qa.settings.whoCanAsk': 'Kim soru sorabilir',
    'blog.qa.settings.askersAllowed.all': 'Tüm kayıtlı kullanıcılar',
    'blog.qa.settings.askersAllowed.all.help': 'Ücretsiz kullanıcılar blog ömrü boyunca 1 soru alırlar. LU aboneleri yılda 1 soru alır (ilk yıllarında 2).',
    'blog.qa.settings.askersAllowed.luOnly': 'Sadece LU aboneleri',
    'blog.qa.settings.askersAllowed.luOnly.help': 'Yalnızca aktif LU aboneliği olan kullanıcılar soru sorabilir.',
    'blog.qa.settings.askersAllowed.fanClubOnly': 'Sadece Fan Club üyeleri',
    'blog.qa.settings.askersAllowed.fanClubOnly.help': 'Yalnızca Fan Club üyeleriniz soru sorabilir (kademe başına tanımlanan sınırlar).',
    'blog.qa.settings.askersAllowed.luOrFanClub': 'LU aboneleri veya Fan Club üyeleri',
    'blog.qa.settings.askersAllowed.luOrFanClub.help': 'LU aboneliği veya Fan Club üyeliği olan kullanıcılar soru sorabilir.',
    'blog.qa.settings.archive': 'Arşiv Ayarları',
    'blog.qa.settings.showArchiveWhenDisabled': 'Soru-Cevap devre dışı bırakıldığında bile yanıtlanmış soruları gösterme',
    'blog.qa.settings.showArchiveWhenDisabled.help': 'Devre dışı bırakıldığında, okuyucular yeni sorular soramazlar, ancak daha önce yanıtlanmış soruları görüntülemeye devam edebilirler.',
    'blog.qa.settings.saved': 'Q&A ayarları başarıyla kaydedildi',
    // Q&A Admin
    'blog.qa.admin.title': 'Soru-Cevapları Yönet',
    'blog.qa.admin.tab.pending': 'Beklemede',
    'blog.qa.admin.tab.answered': 'Cevaplandı',
    'blog.qa.admin.tab.ignored': 'Görmezden gelindi',
    'blog.qa.admin.empty.pending': 'Bekleyen soru yok.',
    'blog.qa.admin.empty.answered': 'Henüz cevaplanmış soru yok.',
    'blog.qa.admin.empty.ignored': 'Görmezden gelinen soru yok.',
    'blog.qa.admin.answerQuestion': 'Cevap Sorusu',
    'blog.qa.admin.visibility.public': 'Herkese açık (herkes görebilir)',
    'blog.qa.admin.visibility.private': 'Özel (sadece soran görebilir)',
    'blog.qa.admin.submitAnswer': 'Cevap Gönder',
    'blog.qa.admin.answer': 'Cevap',
    'blog.qa.admin.ignore': 'Görmezden gel',
    'blog.qa.admin.confirmIgnore': 'Bu soruyu görmezden gelmek istediğinize emin misiniz?',
    'blog.qa.admin.pin': 'Pim',
    'blog.qa.admin.unpin': 'Sabitleme',
    'blog.qa.admin.yourAnswer': 'Sizin Cevabınız',
    // Q&A Public
    'blog.qa.title': 'Sorular',
    'blog.qa.askQuestion': 'Bir Soru Sor',
    'blog.qa.submitQuestion': 'Soru Gönder',
    'blog.qa.success.submit': 'Teşekkür ederiz! Sorunuz iletilmiştir ve yakında yanıtlanacaktır.',
    'blog.qa.error.submit': 'Soru gönderilemedi. Lütfen tekrar deneyiniz.',
    'blog.qa.tab.allAnswered': 'Hepsi Cevaplandı',
    'blog.qa.tab.myQuestions': 'Benim Sorularım',
    'blog.qa.empty.all': 'Henüz cevaplanmış soru yok.',
    'blog.qa.empty.mine': 'Burada henüz herhangi bir soru sormadınız.',
    'blog.qa.status.pending': 'Beklemede',
    'blog.qa.status.ignored': 'Görmezden gelindi',
    'blog.qa.status.private': 'Özel Yanıt',
    'blog.qa.status.public': 'Kamuya Açık Cevap',
    'blog.qa.role.reader': 'Okuyucu',
    'blog.qa.role.author': 'Yazar',
    'blog.qa.pinned': 'Sabitlendi',
    'blog.qa.answeredAgo': 'Cevaplandı {time}',
    'blog.qa.loadMore': 'Daha fazla yükle',
    'blog.qa.warn.luRequired': 'Burada sadece LU aboneleri soru sorabilir.',
    'blog.qa.warn.fanClubRequired': 'Burada sadece Fan Club üyeleri soru sorabilir.',
    'blog.qa.warn.luOrFanRequired': 'Burada sadece LU aboneleri veya Fan Club üyeleri soru sorabilir.',
    // Blog post discussions
    'blogs.discussion': 'Tartışma',
    'blogs.discussionOnForum': 'Bu blog yazısı için tartışma forumlarımızda devam ediyor.',
    'blogs.joinDiscussion': 'Tartışmaya katılın'
};