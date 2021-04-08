/**
 * @authors Jan Dvorak
 */
/* eslint-disable max-len */
export default {
    'email.enrollAccount.subject': '文学の宇宙、{username}へようこそ',
    'email.enrollAccount.message': `こんにちは{username}\n\n
    私たちはあなたを文学の宇宙に招待したいと思います。 文学の宇宙のすべての機能にアクセスできる特別な個人アカウントを作成しました。 次世代のクリエイティブなライティングおよびリーディングツールの作成にご参加ください。
    アカウントを有効にするには、以下のリンクをクリックしてください:\n{url}`,
    'email.resetPassword.subject': '文学の宇宙のパスワードを再設定する',
    'email.resetPassword.message': `こんにちは{username}!\n\n
 アカウントのパスワードをリセットするリクエストを受け取りました。
        以下のリンクに従って、パスワードをリセットしてください:\n\n{url}`,
    'email.verifyEmail.subject': '文学の宇宙のメールによる確認',
    'email.verifyEmail.message': 'こんにちは{username}!\n\n 以下のリンクをクリックして、メールアドレスを確認してください:\n\n{url}',
    // New html email keys
    'email.salutation': 'こんにちは{username},',
    'email.welcome': '文学の宇宙へようこそ!',
    'email.signature': 'よろしくお願いいたします。<br />文学の宇宙チーム',
    // Enrollment
    'email.enrollAccount.welcome': 'ようこそ！',
    'email.enrollAccount.messageHtml': '私たちはあなたを文学の宇宙に招待したいと思います。先に進んで、あなたが文学の宇宙のすべての機能にアクセスできるあなたのための個人アカウントを用意しました！ 次世代のクリエイティブなライティングとリーディングの作成にぜひご参加ください。',
    'email.enrollAccount.button': 'アカウントにアクセスする',
    'email.enrollAccount.signature': '文学の宇宙でお会いできるのを楽しみにしています,<br />文学の宇宙チーム',
    // Reset password
    'email.resetPassword.messageHtml': 'アカウントのパスワードをリセットするリクエストを受け取りました。プロセスを続行するには、下のボタンをクリックしてください。 このリクエストをまだ行っていない場合は、この電子メールを無視できますが、セキュリティ設定を確認することをお勧めします。',
    'email.resetPassword.button': 'パスワードを再設定する',
    // E-mail verification
    'email.verifyEmail.messageHtml': '皆様のご参加をお待ちしております。 下のボタンをクリックして、このメールアドレスを確認してください。',
    'email.verifyEmail.button': 'メールによる確認',
    // Getting premium from admins
    'email.adminUpgrade.subject': '文学の宇宙のアカウントがアップグレードされました',
    'email.adminUpgrade.message': `We have upgraded your account to {plan, select,
    explorer {Explorer}
    adventurer {Adventurer}
    storyteller {Storyteller}
  } tier for the next {days} days.\n\nEnjoy,\nLiterary Universe team`,
    'email.adminUpgrade.messageHtml': `We have upgraded your account to {plan, select,
    explorer {Explorer}
    adventurer {Adventurer}
    storyteller {Storyteller}
  } tier for the next {days} days. Enjoy!`
}    /* eslint-enable max-len */;