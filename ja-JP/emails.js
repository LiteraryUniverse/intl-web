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
    'email.adminUpgrade.messageHtml': `We have upgraded your account to {plan, select,
    explorer {Explorer}
    adventurer {Adventurer}
    storyteller {Storyteller}
    other {}
  } tier for the next {days, number} days. Enjoy!`,
    'email.verification': 'メールアドレスの認証',
    'email.verifying': 'メールアドレスを確認しています。しばらくお待ちください...',
    'email.verified': '良いお知らせです。あなたのメールアドレスが確認されました！',
    // The Way (Author Level Up)
    'theWay.levelUp.emailSubject': 'Congratulations! You\'ve reached Author Level {level, number} on Literary Universe!',
    'theWay.levelUp.emailTitle': 'おめでとう！あなたは著者レベルに到達しました {level, number}！',
    'theWay.levelUp.emailIntro': 'あなたの執筆技術への献身は報われた！',
    'theWay.levelUp.emailGenre': 'あなたは {genre} ジャンルでレベル {level, number} を達成した。',
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
    'email.notifications.followedNewWork.cta': '表示',
    // Story notification emails
    'email.story.newComment.subject': '{storyTitle}" への新しいコメント',
    'email.story.newComment.body': '{commenterName} left comment on your story "{storyTitle}": {commentText}',
    'email.story.betaComment.subject': '{storyTitle}" に対する新しいベータ版のフィードバック',
    'email.story.betaComment.body': '{commenterName}{storyTitle}": {commentText}へのベータ・フィードバック',
    'email.story.collaboratorAccepted.subject': '{storyTitle}" の新メンバー',
    'email.story.collaboratorAccepted.body': '{collaboratorName} は、『{storyTitle}』でのコラボレーションへの招待を、 {role}。',
    'email.story.milestone.subject': 'おめでとう！マイルストーン達成 "{storyTitle}"',
    'email.story.milestone.body': '素晴らしいニュースです！{storyTitle}" のあなたの章 "{chapterTitle}" が {count} {milestone}に到達しました。これからも頑張ってください！',
    'email.story.betaRevision.subject': '新しいベータ版リビジョンが利用可能："{chapterTitle}"',
    'email.story.betaRevision.body': '{authorName} は "{storyTitle}" から "{chapterTitle}" の新しいベータリビジョンを公開しました。ご意見、ご感想をお待ちしております！',
    'email.story.newChapter.subject': '新章スタート"{storyTitle}"',
    'email.story.newChapter.body': '{authorName}{storyTitle}" の新章 "{chapterTitle}" を公開しました。ご一読を！',
    // Universe notification emails
    'email.universe.newStory.subject': '宇宙の新しい物語"{storyTitle}"',
    'email.universe.newStory.body': '{authorName} フォローしているユニバースに新しいストーリー "{storyTitle}" を追加しました。新しい冒険を発見してください！',
    'email.universe.collaboratorChange.subject': 'ユニバース・コラボレーション最新情報',
    'email.universe.collaboratorChange.body': 'あなたが関わっているユニバースのコラボレーションチームに変更があった。',
    'email.universe.update.subject': 'ユニバース更新',
    'email.universe.update.body': 'フォローしているユニバースが新しいコンテンツで更新されました。',
    'email.universe.comment.subject': '宇宙についての新しいコメント',
    'email.universe.comment.body': '{commenterName} あなたが追いかけている宇宙についてコメントしました："{commentText}"',
    // Blog notification emails
    'email.blog.newPost.subject': '新しいブログ記事"{postTitle}"',
    'email.blog.newPost.body': '{authorName} は、あなたがフォローしているブログに新しいブログ記事 "{postTitle}" を掲載しました。',
    'email.blog.comment.subject': 'ブログ記事への新しいコメント"{postTitle}"',
    'email.blog.comment.body': '{commenterName} ブログ記事 "{postTitle}" に対するコメント: "{commentText}"',
    'email.blog.update.subject': 'ブログ更新',
    'email.blog.update.body': 'あなたがフォローしているブログが更新されました。',
    // General comment notification emails
    'email.comment.general.subject': '{contentTitle}" への新しいコメント',
    'email.comment.general.body': '{commenterName}{contentTitle}": "{commentText}" に対するコメント',
    'email.comment.reply.subject': 'コメントへの返信',
    'email.comment.reply.body': '{replierName}{contentTitle}" に対するコメントへの返信: "{replyText}"',
    'email.comment.like.subject': 'あなたのコメントが気に入られた',
    'email.comment.like.body': '{likerName} あなたのコメントが気に入りました。これからもよろしく！',
    // Content-specific comment notification emails
    'email.comment.fanArt.subject': 'ファンアートへの新しいコメント："{contentTitle}"',
    'email.comment.fanArt.body': '{commenterName} あなたのファンアート "{contentTitle}" に対するコメント: "{commentText}"',
    'email.comment.event.subject': 'イベントに新しいコメント："{contentTitle}"',
    'email.comment.event.body': '{commenterName} イベント "{contentTitle}" に対するコメント: "{commentText}"',
    'email.comment.revision.subject': '修正に関する新たなコメント',
    'email.comment.revision.body': '{commenterName} あなたのリビジョンについてコメントしました："{commentText}"',
    'email.comment.feedback.subject': 'フィードバックに関する新しいコメント',
    'email.comment.feedback.body': '{commenterName} コメント"{commentText}"',
    // Welcome email
    'email.welcome.subject': '文学の宇宙へようこそ！'
};