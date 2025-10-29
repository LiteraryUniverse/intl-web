export default {
    'blog.noneMsg': `現在{type, select,
    organization {はブログを持っていませんね}
    universe {、あなたの宇宙にはブログがありません}
    user {はブログを持っていませんね}
    other {}
  }。`,
    'blog.create': '新しいブログを作成する',
    'blog.settings': `{type, select,
    org {ブログ}
    universe {宇宙のページ}
    user {ブログ}
    other {}
  }設定`,
    'blog.description': 'ブログ紹介',
    'blog.theme': 'テーマ',
    'blog.theme.info': 'テーマを調整することで、ページの外観を変更することができます。この機能は現時点では未完成です。',
    'blog.posts.total': `このブログには{total, plural,
    zero {記事がありません}
    other {#つの記事があります}
  }。`,
    'blog.post.create': '新しい会話を作成',
    'blog.post.update': '{title} を編集',
    'blog.post.text': 'テキストを投稿',
    'common.slug': 'SEO対応アドレス',
    'blog.slug.explained': '投稿用の見栄えの良いURLを作成する。特殊文字は"-"以外は使わない。',
    'blog.publicView': '公開表示',
    'blog.post.notfound': 'ブログの投稿が見つかりませんでした',
    'blog.lists.works': `{type, select,
    universes {宇宙}
    stories {物語}
    fanfiction {ファンフィクション作品}
    other {}
  }を`,
    'blog.social.sameAsMain': `ソーシャルリンクは、{type, select,
    organization {組織設定}
    user {ユーザープロファイル}
    other {}
  }で設定されているものと同じです。`,
    'blog.social.website': '公式サイト',
    'blog.settings.universeSettings': '宇宙ブログは、宇宙ページに統合されており、基本的な設定は宇宙の設定を参考にしています。',
    'blog.settings.organizationSettings': '組織ブログは、組織ページに統合されています。',
    'blogs.lu': '文学の宇宙公式ブログ',
    'blogs.featured': '注目のブログ',
    'blogs.new': '最新のブログ',
    'blogs.title': '文学の宇宙のブログ',
    'blogs.description': '文学の宇宙プラットフォーム上のブログの一覧。',
    'blogs.visit': 'ブログへ行く',
    'blog.settingsAria': 'ブログのカテゴリ設定',
    'blog.settings.blog': 'ブログ',
    'blog.settings.forum': '掲示板',
    'blog.post.introText': 'イントロダクションパラグラフ',
    'blog.post.writtenBy': '{usernameDisplay}によって書かれた',
    'blog.post.writtenByFor': '{usernameDisplay} が {publicationName}に対して書かれた',
    'blog.posts.recent': '最近の投稿',
    'blog.statsPage': 'ブログの統計',
    'blog.view': 'ブログを見る',
    'blog.settings.qa': 'Q&A',
    // Q&A Settings
    'blog.qa.settings.title': 'Q&A設定',
    'blog.qa.settings.notSupported': 'Q&Aは現在、ユーザー・ブログとユニバース・ブログでのみサポートされています。',
    'blog.qa.settings.enable': 'Q&Aを有効にする',
    'blog.qa.settings.enableQA': '読者が質問できるようにする',
    'blog.qa.settings.enableQA.help': '有効にすると、読者は質問を投稿でき、あなたは公開または非公開で回答することができます。',
    'blog.qa.settings.whoCanAsk': '質問できる人',
    'blog.qa.settings.askersAllowed.all': '全登録ユーザー',
    'blog.qa.settings.askersAllowed.all.help': '無料ユーザーは、ブログのライフタイムごとに1問の質問を受けることができます。LU購読者は1年に1問（初年度は2問）。',
    'blog.qa.settings.askersAllowed.luOnly': 'LU加入者のみ',
    'blog.qa.settings.askersAllowed.luOnly.help': '質問できるのは、LUに加入しているユーザーだけです。',
    'blog.qa.settings.askersAllowed.fanClubOnly': 'ファンクラブ会員限定',
    'blog.qa.settings.askersAllowed.fanClubOnly.help': 'ファンクラブ会員のみが質問をすることができます（階層ごとに制限あり）。',
    'blog.qa.settings.askersAllowed.luOrFanClub': 'LU購読者またはファンクラブ会員',
    'blog.qa.settings.askersAllowed.luOrFanClub.help': 'LU加入者またはファンクラブ会員であれば質問可能。',
    'blog.qa.settings.archive': 'アーカイブ設定',
    'blog.qa.settings.showArchiveWhenDisabled': 'Q&Aが無効の場合でも、回答済みの質問を表示する',
    'blog.qa.settings.showArchiveWhenDisabled.help': '無効にすると、読者は新しい質問をすることができなくなりますが、過去に回答した質問を閲覧することはできます。',
    'blog.qa.settings.saved': 'Q&A設定の保存に成功',
    // Q&A Admin
    'blog.qa.admin.title': 'Q&Aの管理',
    'blog.qa.admin.tab.pending': '申請中',
    'blog.qa.admin.tab.answered': '回答済み',
    'blog.qa.admin.tab.ignored': '無視される',
    'blog.qa.admin.empty.pending': '保留中の質問はない。',
    'blog.qa.admin.empty.answered': '回答済みの質問はまだありません。',
    'blog.qa.admin.empty.ignored': '無視された質問はない。',
    'blog.qa.admin.answerQuestion': '質問',
    'blog.qa.admin.visibility.public': '公開（誰でも見ることができる）',
    'blog.qa.admin.visibility.private': '非公開（質問者のみ閲覧可能）',
    'blog.qa.admin.submitAnswer': '回答を投稿する',
    'blog.qa.admin.answer': '回答',
    'blog.qa.admin.ignore': '無視',
    'blog.qa.admin.confirmIgnore': 'この質問を無視していいのか？',
    'blog.qa.admin.pin': 'ピン',
    'blog.qa.admin.unpin': 'アンピン',
    'blog.qa.admin.yourAnswer': 'あなたの答え',
    // Q&A Public
    'blog.qa.title': '質問',
    'blog.qa.askQuestion': '質問する',
    'blog.qa.submitQuestion': '質問を投稿する',
    'blog.qa.success.submit': 'ありがとうございました！あなたの質問は送信され、すぐに回答されます。',
    'blog.qa.error.submit': '質問の送信に失敗しました。もう一度やり直してください。',
    'blog.qa.tab.allAnswered': 'すべて回答済み',
    'blog.qa.tab.myQuestions': '私の質問',
    'blog.qa.empty.all': '回答済みの質問はまだありません。',
    'blog.qa.empty.mine': 'あなたはまだここで何も質問していない。',
    'blog.qa.status.pending': '申請中',
    'blog.qa.status.ignored': '無視される',
    'blog.qa.status.private': 'プライベート・アンサー',
    'blog.qa.status.public': 'パブリックアンサー',
    'blog.qa.role.reader': 'リーダー',
    'blog.qa.role.author': '著者',
    'blog.qa.pinned': 'ピン留め',
    'blog.qa.answeredAgo': '回答済み {time}',
    'blog.qa.loadMore': 'もっと読む',
    'blog.qa.warn.luRequired': 'ここで質問できるのはLU加入者のみ。',
    'blog.qa.warn.fanClubRequired': 'ここで質問できるのはファンクラブ会員のみ。',
    'blog.qa.warn.luOrFanRequired': '質問はLU加入者またはファンクラブ会員のみ可能です。',
    // Blog post discussions
    'blogs.discussion': 'ディスカッション',
    'blogs.discussionOnForum': 'このブログ記事のディスカッションは、私たちのフォーラムで続けられている。',
    'blogs.joinDiscussion': 'ディスカッションに参加する'
};