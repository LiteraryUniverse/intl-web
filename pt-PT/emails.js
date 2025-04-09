/**
 * @authors Jan Dvorak
 */
export default {
    'email.enrollAccount.subject': 'Convite ao Universo Literário para {username}',
    'email.enrollAccount.message': `Olá {username}\n\n
    Gostaríamos de convidá-lo a visitar o Universo Literário! Criámos uma conta pessoal especial para si onde pode aceder a todas as funcionalidades do Universo Literário! Junte-se a nós na criação da próxima geração de ferramentas criativas de escrita e leitura!
    Para ativar a sua conta, basta clicar no link abaixo:\n\n{url}`,
    'email.resetPassword.subject': 'Reinicialização da palavra passe do Universo Literário',
    'email.resetPassword.message': `Olá {username}!\n\n Recebemos um pedido para reinicializar a sua palavra passe da sua conta.
        Siga o link abaixo para reinicializar a sua palavra passe:\n\n{url}`,
    'email.verifyEmail.subject': 'Verificação do email do Universo Literário',
    'email.verifyEmail.message': 'Olá {username}!\n\n Por favor, verifique o seu email, clicando no link abaixo:\n\n{url}',
    // New html email keys
    'email.salutation': 'Olá {username},',
    'email.welcome': 'Bem-vindo ao Universo Literário!',
    'email.signature': 'Atenciosamente,<br />Equipa do Universo Literário',
    // Enrollment
    'email.enrollAccount.welcome': 'Bem-vindo a bordo',
    'email.enrollAccount.messageHtml': 'Gostaríamos de o convidar para o Universo Literário! Preparámos uma conta pessoal para si, onde poderá aceder a todas as funcionalidades do Universo Literário. Junte-se a nós na criação da próxima geração de escrita e leitura criativas!',
    'email.enrollAccount.button': 'Aceda à sua conta',
    'email.enrollAccount.signature': 'Esperamos por si,<br />Equipa do Universo Literário',
    // Reset password
    'email.resetPassword.messageHtml': 'Recebemos um pedido para repor a palavra-passe da sua conta. Clique no botão abaixo para continuar o processo. Se não tiver efectuado este pedido, pode ignorar esta mensagem de correio eletrónico, mas talvez seja uma boa altura para rever as suas definições de segurança.',
    'email.resetPassword.button': 'Redefinir palavra passe',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Estamos felizes por o ter a bordo! Clique no botão abaixo para verificar este endereço de correio eletrónico.',
    'email.verifyEmail.button': 'Verifique este endereço de email',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'A sua conta foi atualizada',
    'email.adminUpgrade.message': `Atualizámos a sua conta para o nível de {plan, select,
    explorer {Explorador}
    adventurer {Aventureiro}
    storyteller {Contador de Histórias}
    other {}
  } para os próximos {days} dias.\n\nAproveite,\nEquipa do Universo Literário`,
    'email.adminUpgrade.messageHtml': `Atualizámos a sua conta para o nível de {plan, select,
    explorer {Explorador}
    adventurer {Aventureiro}
    storyteller {Contador de Histórias}
    other {}
  } para os próximos {days} dias. Aproveite!`,
    'email.verification': 'Verificação de email',
    'email.verifying': 'Verificando o seu email. Isto vai demorar apenas um momento...',
    'email.verified': 'Grandes notícias! O seu email foi verificado!'
};