/**
 * @authors Jan Dvorak
 */
export default {
    'email.enrollAccount.subject': 'Convite para Universo Literário para {username}',
    'email.enrollAccount.message': `Olá {username}\n\n
    Gostaríamos de convidá-lo para o universo literário! Nós criamos uma conta pessoal especial para você, onde você pode acessar todas as funcionalidades do universo literário! Por favor, junte-se a nós na criação da próxima geração de ferramentas de escrita e leitura criativas!
    Para ativar a sua conta, basta clicar no link abaixo:\n\n{url}`,
    'email.resetPassword.subject': 'Senha de redefinição Universa Literária',
    'email.resetPassword.message': `Olá {username}!\n\n Recebemos um pedido para redefinir a sua senha da sua conta.
        Por favor, siga o link abaixo para redefinir sua senha:\n\n{url}`,
    'email.verifyEmail.subject': 'Verificação de e-mail Universo Literária',
    'email.verifyEmail.message': 'Olá {username}!\n\n Por favor, verifique o seu endereço de e-mail clicando no link abaixo:\n\n{url}',
    // New html email keys
    'email.salutation': 'Olá {username},',
    'email.welcome': 'Bem-vindo ao Universo Literário!',
    'email.signature': 'Atenciosamente,<br />Equipe Universal Literária',
    // Enrollment
    'email.enrollAccount.welcome': 'Bem-vindo a bordo',
    'email.enrollAccount.messageHtml': 'Gostaríamos de convidar o senhor para o Universo Literário! Preparamos uma conta pessoal para o senhor, onde poderá acessar todos os recursos do Literary Universe. Junte-se a nós na criação da próxima geração de escrita e leitura criativa!',
    'email.enrollAccount.button': 'Acessar sua conta',
    'email.enrollAccount.signature': 'Estamos ansiosos para ver o senhor,<br />Equipe do Universo Literário',
    // Reset password
    'email.resetPassword.messageHtml': 'Recebemos uma solicitação para redefinir a senha da sua conta. Clique no botão abaixo para continuar o processo. Se o senhor não tiver feito essa solicitação, poderá ignorar este e-mail, mas talvez seja uma boa hora para rever suas configurações de segurança.',
    'email.resetPassword.button': 'Redefinir senha',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Estamos felizes por ter o senhor a bordo! Clique no botão abaixo para verificar este endereço de e-mail.',
    'email.verifyEmail.button': 'Verifique seu endereço de email',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Sua conta foi atualizada',
    'email.adminUpgrade.message': `Atualizamos sua conta para {plan, select,
    explorer {Explorador}
    adventurer {Aventureiro}
    storyteller {Storyteller}
    other {}
  } nível pelos próximos {days} dias.\n\nDivirta-se,\nEquipe do Universo Literário`,
    'email.adminUpgrade.messageHtml': `Atualizamos sua conta para {plan, select,
    explorer {Explorador}
    adventurer {Aventureiro}
    storyteller {Storyteller}
    other {}
  } nível pelos próximos {days} dias. Aproveite!`,
    'email.verification': 'Verificação por e-mail',
    'email.verifying': 'Verificação de seu e-mail. Isto levará apenas um momento...',
    'email.verified': 'Ótimas notícias! Seu e-mail foi verificado!'
};