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
    'email.verified': '良いお知らせです。あなたのメールアドレスが確認されました！'
};