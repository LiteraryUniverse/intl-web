export default {
    'blog.noneMsg': `您目前沒有 {type, select,
    organization {任何部落格}
    universe {您宇宙的部落格}
    user {一個部落格}
    other {}
  }。`,
    'blog.create': '創建一個新的部落格',
    'blog.settings': `{type, select,
    org {部落格}
    universe {宇宙頁面}
    user {部落格}
    other {}
  } 設定`,
    'blog.description': '部落格介紹',
    'blog.theme': '主題',
    'blog.theme.info': '透過調整主題，您將能夠改變頁面的外觀。此功能目前尚未就緒。',
    'blog.posts.total': `此部落格中 {total, plural,
    zero {沒有文章}
    one {有一篇文章}
    other {有 # 篇文章}
  } 。`,
    'blog.post.create': 'Write a new post',
    'blog.post.update': '編輯 {title}',
    'blog.post.text': '文章內容',
    'common.slug': 'SEO友好網址',
    'blog.slug.explained': '為文章建立美觀的 URL。除了「-」之外，避免使用特殊字符。',
    'blog.publicView': '公開查看',
    'blog.post.notfound': '找不到部落格文章',
    'blog.lists.works': `{type, select,
    universes {宇宙}
    stories {故事}
    fanfiction {粉絲創作}
    other {}
  }`,
    'blog.social.sameAsMain': `社交連結與 {type, select,
    organization {組織設定}
    user {使用者檔案}
    other {相同}
  }`,
    'blog.social.website': '官方網站',
    'blog.settings.universeSettings': '宇宙部落格將與宇宙頁面集成，使用宇宙設定的基本設置。',
    'blog.settings.organizationSettings': '組織部落格已整合到組織頁面中。',
    'blogs.lu': '官方文學宇宙部落格',
    'blogs.featured': '特色部落格',
    'blogs.new': '最新部落格',
    'blogs.title': '文學宇宙部落格',
    'blogs.description': '在文學宇宙平台上列出的部落格。',
    'blogs.visit': '訪問部落格',
    'blog.settingsAria': '部落格的設定分類',
    'blog.settings.blog': '部落格',
    'blog.settings.forum': '討論區',
    'blog.post.introText': '簡介段落',
    'blog.post.writtenBy': '由 {usernameDisplay}撰寫',
    'blog.post.writtenByFor': '由 {usernameDisplay} 撰寫  給 {publicationName}',
    'blog.posts.recent': '最近文章',
    'blog.statsPage': '部落格統計',
    'blog.view': '檢視部落格',
    'blog.settings.qa': '問與答',
    // Q&A Settings
    'blog.qa.settings.title': '問與答設定',
    'blog.qa.settings.notSupported': 'Q&A 目前僅支援使用者與宇宙部落格。',
    'blog.qa.settings.enable': '啟用問與答',
    'blog.qa.settings.enableQA': '允許讀者發問',
    'blog.qa.settings.enableQA.help': '啟用後，讀者可以提交問題，您可以公開或私下回答。',
    'blog.qa.settings.whoCanAsk': '誰可以提問',
    'blog.qa.settings.askersAllowed.all': '所有註冊使用者',
    'blog.qa.settings.askersAllowed.all.help': '免費使用者每個部落格一生可獲得 1 個問題。LU 訂閱者每年可獲得 1 個問題（第一年為 2 個）。',
    'blog.qa.settings.askersAllowed.luOnly': '僅限 LU 訂閱者',
    'blog.qa.settings.askersAllowed.luOnly.help': '只有啟用 LU 訂閱的使用者才能提問。',
    'blog.qa.settings.askersAllowed.fanClubOnly': '僅限影迷俱樂部會員',
    'blog.qa.settings.askersAllowed.fanClubOnly.help': '只有您的 Fan Club 會員可以提問 (每個層級都有限制)。',
    'blog.qa.settings.askersAllowed.luOrFanClub': 'LU 訂閱者或 Fan Club 會員',
    'blog.qa.settings.askersAllowed.luOrFanClub.help': '擁有 LU 訂閱或 Fan Club 會員資格的使用者可以提出問題。',
    'blog.qa.settings.archive': '存檔設定',
    'blog.qa.settings.showArchiveWhenDisabled': '即使停用問答功能，仍可顯示已回答的問題',
    'blog.qa.settings.showArchiveWhenDisabled.help': '停用時，讀者將無法提出新問題，但仍可檢視先前回答過的問題。',
    'blog.qa.settings.saved': '成功儲存 Q&A 設定',
    // Q&A Admin
    'blog.qa.admin.title': '管理問與答',
    'blog.qa.admin.tab.pending': '待定',
    'blog.qa.admin.tab.answered': '已回答',
    'blog.qa.admin.tab.ignored': '被忽略',
    'blog.qa.admin.empty.pending': '無待決問題。',
    'blog.qa.admin.empty.answered': '尚未回答問題。',
    'blog.qa.admin.empty.ignored': '沒有被忽略的問題。',
    'blog.qa.admin.answerQuestion': '回答問題',
    'blog.qa.admin.visibility.public': '公開 (每個人都可以看到)',
    'blog.qa.admin.visibility.private': '隱私 (只有詢問者可以看到)',
    'blog.qa.admin.submitAnswer': '提交答案',
    'blog.qa.admin.answer': '答案',
    'blog.qa.admin.ignore': '忽略',
    'blog.qa.admin.confirmIgnore': '您確定要忽略這個問題嗎？',
    'blog.qa.admin.pin': '針腳',
    'blog.qa.admin.unpin': '解鎖',
    'blog.qa.admin.yourAnswer': '您的答案',
    // Q&A Public
    'blog.qa.title': '問題',
    'blog.qa.askQuestion': '詢問問題',
    'blog.qa.submitQuestion': '提交問題',
    'blog.qa.success.submit': '謝謝您！您的問題已經提交，並將很快得到解答。',
    'blog.qa.error.submit': '提交問題失敗。請再試一次。',
    'blog.qa.tab.allAnswered': '全部回答',
    'blog.qa.tab.myQuestions': '我的問題',
    'blog.qa.empty.all': '尚未回答問題。',
    'blog.qa.empty.mine': '您尚未在此提出任何問題。',
    'blog.qa.status.pending': '待定',
    'blog.qa.status.ignored': '被忽略',
    'blog.qa.status.private': '私人解答',
    'blog.qa.status.public': '公開回答',
    'blog.qa.role.reader': '閱讀器',
    'blog.qa.role.author': '作者',
    'blog.qa.pinned': '釘選',
    'blog.qa.answeredAgo': '已回答 {time}',
    'blog.qa.loadMore': '載入更多',
    'blog.qa.warn.luRequired': '只有 LU 訂閱者才能在此提問。',
    'blog.qa.warn.fanClubRequired': '只有 Fan Club 會員才能在此提問。',
    'blog.qa.warn.luOrFanRequired': '只有 LU 訂閱者或 Fan Club 會員才能在此提問。',
    // Blog post discussions
    'blogs.discussion': '討論',
    'blogs.discussionOnForum': '這篇部落格文章的討論仍在我們的論壇上繼續。',
    'blogs.joinDiscussion': '加入討論'
};