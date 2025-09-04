/**
 * @authors Jan Dvorak
 */
export default {
    'email.enrollAccount.subject': '{usernameさん}Literary Universeへのお誘い',
    'email.enrollAccount.message': `こんにちは{username}\n\n
    あなたをLiterary Univeseへご招待したいと思います。Literary Universeのすべての機能にアクセスできるよう特別な個人アカウントを作成しました。 次世代の創造性豊かなライティングおよびリーディングツールの作成にご参加ください。
    アカウントを有効にするには、以下のリンクをクリックしてください:\n{url}`,
    'email.resetPassword.subject': 'Literary Universeパスワードリセット',
    'email.resetPassword.message': `こんにちは{username}!\n\n
 アカウントパスワードリセットリクエストを受け取りました。
        以下のリンクに従って、パスワードをリセットしてください:\n\n{url}`,
    'email.verifyEmail.subject': 'Literary Universeのメール検証',
    'email.verifyEmail.message': 'こんにちは{username}!\n\n 以下のリンクをクリックして、メールアドレスを確認してください:\n\n{url}',
    // New html email keys
    'email.salutation': 'こんにちは{username},',
    'email.welcome': 'Literary Universeへようこそ!',
    'email.signature': 'よろしくお願いいたします。<br />Literary Universeチームより',
    // Enrollment
    'email.enrollAccount.welcome': 'ご加入ありがとうございます。',
    'email.enrollAccount.messageHtml': '文学ユニバースにご招待いたします！文学ユニバースの全機能にアクセスできる個人アカウントをご用意しました。私たちと一緒に、次世代のクリエイティブ・ライティングとリーディングを創造していきましょう！',
    'email.enrollAccount.button': 'アカウントにアクセスする',
    'email.enrollAccount.signature': '<br />Literary Universe チーム一同、心よりお待ちしております。',
    // Reset password
    'email.resetPassword.messageHtml': 'あなたのアカウントのパスワード再設定のリクエストを受け取りました。下のボタンをクリックして手続きを続けてください。このリクエストを行っていない場合は、このメールを無視してもかまいませんが、セキュリティ設定を見直す良い機会かもしれません。',
    'email.resetPassword.button': 'パスワードの再設定',
    // E-mail verification
    'email.verifyEmail.messageHtml': '皆様のご参加を心よりお待ちしております！このメールアドレスを確認するには、下のボタンをクリックしてください。',
    'email.verifyEmail.button': 'メールアドレスの確認',
    // Getting premium from admins
    'email.adminUpgrade.subject': '文学の宇宙のアカウントがアップグレードされました',
    'email.adminUpgrade.message': `アカウントを次の{days}日間の{plan, select,
    explorer {Explorer}
    adventurer {Adventurer}
    storyteller {Storyteller}
    other {}
  }プランにアップグレードしました。
\n\n
楽しい\n
Literary Universeチーム`,
    'email.adminUpgrade.messageHtml': `アカウントを次の{days}日間の{plan, select,
    explorer {Explorer}
    adventurer {Adventurer}
    storyteller {Storyteller}
    other {}
  }プランにアップグレードしました。 それではお楽しみ下さい。`,
    'email.verification': 'メールアドレスの認証',
    'email.verifying': 'メールアドレスを確認しています。しばらくお待ちください...',
    'email.verified': '良いお知らせです。あなたのメールアドレスが確認されました！',
    // The Way (Author Level Up)
    'theWay.levelUp.emailSubject': 'おめでとうございます！あなたは文学ユニバースの著者レベル {level} に到達しました！',
    'theWay.levelUp.emailTitle': 'おめでとうございます！あなたは著者レベル {level}に到達しました！',
    'theWay.levelUp.emailIntro': 'あなたの執筆技術への献身は報われた！',
    'theWay.levelUp.emailGenre': 'あなたは {genre} ジャンルでレベル {level} を達成した。',
    'theWay.levelUp.emailContinue': '旅を続け、「作家の道」でさらに多くの実績をアンロックしよう。',
    'theWay.levelUp.viewDashboard': 'ダッシュボードを見る',
    // Notifications - General content comment
    'email.notifications.contentComment.subject': '新しいコメント',
    'email.notifications.contentComment.title': '{contentType}に対する新しいコメント',
    'email.notifications.contentComment.details': 'タイトル {contentTitle} - From： {commenterName}',
    'email.notifications.contentComment.cta': 'コメントを見る',
    // Notifications - Beta reader comment
    'email.notifications.betaComment.subject': '新しいベータ・リーダーのフィードバック',
    'email.notifications.betaComment.title': '新しいベータ・リーダーのフィードバック',
    'email.notifications.betaComment.details': 'ストーリー {storyTitle}{chapter} - より {commenterName}',
    'email.notifications.betaComment.cta': 'フィードバックを見る',
    // Notifications - New message
    'email.notifications.newMessage.subject': '新しいメッセージがあります',
    'email.notifications.newMessage.title': '新しいメッセージがあります',
    'email.notifications.newMessage.details': 'からだ： {senderName}',
    'email.notifications.newMessage.cta': 'メッセージを見る',
    // Notifications - Chapter published
    'email.notifications.chapterPublished.subject': '新章を発表',
    'email.notifications.chapterPublished.title': '新章を発表',
    'email.notifications.chapterPublished.details': 'ストーリー {storyTitle} - 章 {chapterTitle}{suffix}',
    'email.notifications.chapterPublished.cta': '章を開く',
    // Notifications - First story created
    'email.notifications.firstStory.subject': 'あなたの最初の物語はここにある！',
    'email.notifications.firstStory.title': 'あなたの最初のストーリーはライブです！',
    'email.notifications.firstStory.intro': '驚くべきスタート！これからも「作家の道」の有益なガイダンスを参考に、執筆を続け、自分の世界を広げてください。',
    'email.notifications.firstStory.details': 'ストーリー： {storyTitle}',
    'email.notifications.firstStory.ctaResources': '続きを読む 作家の道',
    'email.notifications.firstStory.ctaStory': 'ストーリーを開く',
    // Notifications - First universe created
    'email.notifications.firstUniverse.subject': '初のユニバース、おめでとう！',
    'email.notifications.firstUniverse.title': '最初のユニバースを作ったことを祝福する！',
    'email.notifications.firstUniverse.intro': 'あなたの世界構築の旅が始まります。次のステップに進むためのリソースをご紹介します。',
    'email.notifications.firstUniverse.details': '宇宙だ： {universeName}',
    'email.notifications.firstUniverse.ctaResources': '作家の道を探る',
    'email.notifications.firstUniverse.ctaUniverse': '宇宙を開く',
    // Notifications - First chapter published for a story
    'email.notifications.firstChapterPublished.subject': 'あなたの第1章が出版された！',
    'email.notifications.firstChapterPublished.title': 'あなたの物語の第1章が出版されました！',
    'email.notifications.firstChapterPublished.intro': '作品を共有し、フィードバックを集め、勢いを維持する。',
    'email.notifications.firstChapterPublished.details': 'ストーリー {storyTitle} - 章 {chapterTitle}',
    'email.notifications.firstChapterPublished.ctaChapter': '章を開く',
    'email.notifications.firstChapterPublished.ctaStory': 'ストーリーを見る',
    // Notifications - Story finished
    'email.notifications.storyFinished.subject': '物語の完成、おめでとう！',
    'email.notifications.storyFinished.title': 'あなたはやり遂げた！',
    'email.notifications.storyFinished.intro': 'この節目を祝いましょう！より多くの読者に届くよう、ストーリーの公開、共有、投稿をご検討ください。',
    'email.notifications.storyFinished.details': 'ストーリー： {storyTitle}',
    'email.notifications.storyFinished.cta': 'ストーリーを見る',
    // Notifications - Fan club new subscriber
    'email.notifications.newFanSubscriber.subject': 'ファンクラブ新規登録者',
    'email.notifications.newFanSubscriber.title': '新しいファンクラブ会員が増えましたね！',
    'email.notifications.newFanSubscriber.details': '購読者： {subscriberName}',
    'email.notifications.newFanSubscriber.cta': 'ファンクラブを見る',
    // Notifications - Fan club subscription ended
    'email.notifications.fanUnsubscribed.subject': 'あなたのファンクラブを去った会員',
    'email.notifications.fanUnsubscribed.title': 'あなたのファンクラブを去った会員',
    'email.notifications.fanUnsubscribed.intro': '最近の変更についてお知らせします。エンゲージメントを高めるために、最新情報や限定コンテンツの共有をご検討ください。',
    'email.notifications.fanUnsubscribed.details': '元メンバー： {name}',
    'email.notifications.fanUnsubscribed.cta': 'オープン・ファンクラブ',
    // Notifications - Friend request
    'email.notifications.friendRequest.subject': '新しい友達申請',
    'email.notifications.friendRequest.title': '新しい友達申請',
    'email.notifications.friendRequest.details': 'からだ： {requesterName}',
    'email.notifications.friendRequest.cta': 'レビュー依頼',
    // Notifications - Collaboration invitation
    'email.notifications.collabInvite.subject': 'コラボレーションのお誘い',
    'email.notifications.collabInvite.title': 'コラボレーションのお誘い',
    'email.notifications.collabInvite.details': '招待者 {inviterName} - 役割 {role} - ターゲット： {targetType} - {targetTitle}',
    'email.notifications.collabInvite.cta': 'レビュー招待',
    // Notifications - Organization invitation
    'email.notifications.orgInvite.subject': '組織への招待',
    'email.notifications.orgInvite.title': '{orgName}。',
    'email.notifications.orgInvite.details': 'インバイター： {inviterName}',
    'email.notifications.orgInvite.cta': 'レビュー招待',
    // Notifications - Daily digest
    'email.notifications.dailyDigest.subject': '毎日の更新',
    'email.notifications.dailyDigest.title': '毎日の更新',
    'email.notifications.dailyDigest.intro': '今日はこんなことがあった。',
    'email.notifications.dailyDigest.cta': 'すべてのアップデートを見る',
    'email.notifications.dailyDigest.empty': '今日は更新なし。',
    // Notifications - Followed author posted a new blog
    'email.notifications.followedBlogPost.subject': 'フォローしている著者の新しいブログ記事',
    'email.notifications.followedBlogPost.title': '{authorName} 新しいブログを掲載しました',
    'email.notifications.followedBlogPost.details': 'タイトル： {postTitle}',
    'email.notifications.followedBlogPost.cta': '記事を読む',
    // Notifications - Followed author published new work
    'email.notifications.followedNewWork.subject': 'フォローしている作家の新作',
    'email.notifications.followedNewWork.title': '{authorName} {workType}を発行した。',
    'email.notifications.followedNewWork.details': 'タイトル： {title}',
    'email.notifications.followedNewWork.cta': '表示'
};