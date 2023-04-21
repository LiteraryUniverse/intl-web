/**
 * @authors Jan Dvorak
 */
/* eslint-disable max-len */
export default {
    'email.enrollAccount.subject': '{usernameさん}Literary Universeへのお誘い',
    'email.enrollAccount.message': `こんにちは{username}\n\n
    私たちはあなたを文学の宇宙に招待したいと思います。 文学の宇宙のすべての機能にアクセスできる特別な個人アカウントを作成しました。 次世代のクリエイティブなライティングおよびリーディングツールの作成にご参加ください。
    アカウントを有効にするには、以下のリンクをクリックしてください:\n{url}`,
    'email.resetPassword.subject': '文学の宇宙のパスワードを再設定する',
    'email.resetPassword.message': `こんにちは{username}!\n\n
 アカウントのパスワードをリセットするリクエストを受け取りました。
        以下のリンクに従って、パスワードをリセットしてください:\n\n{url}`,
    'email.verifyEmail.subject': '文学の宇宙のメール検証',
    'email.verifyEmail.message': 'こんにちは{username}!\n\n 以下のリンクをクリックして、メールアドレスを確認してください:\n\n{url}',
    // New html email keys
    'email.salutation': 'こんにちは{username},',
    'email.welcome': 'Literary Universeへようこそ!',
    'email.signature': 'よろしくお願いいたします。<br />Literary Universeチームより',
    // Enrollment
    'email.enrollAccount.welcome': 'ご加入ありがとうございます。',
    'email.enrollAccount.messageHtml': '私たちはあなたを文学の宇宙に招待したいと思います。あなたがすべての機能にアクセスできるようにすでに個人アカウントを用意しました！ 次世代のクリエイティブなライティングとリーディングの作成にぜひご参加ください。',
    'email.enrollAccount.button': 'アカウントにアクセスする',
    'email.enrollAccount.signature': 'お会いできるのを楽しみにしています,<br />Literary Universeチームより',
    // Reset password
    'email.resetPassword.messageHtml': 'アカウントのパスワードをリセットするリクエストを受け取りました。プロセスを続けるには、下のボタンをクリックしてください。 このリクエストをまだ行っていない場合は、このメールはご放念ください。セキュリティ設定のご確認をしていただくことをお勧めします。',
    'email.resetPassword.button': 'パスワードを再設定する',
    // E-mail verification
    'email.verifyEmail.messageHtml': '皆様のご参加をお待ちしております。 下のボタンをクリックして、このメールアドレスを確認してください。',
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
    'email.verified': '良いお知らせです。あなたのメールアドレスが認証されました！'
};    /* eslint-enable max-len */