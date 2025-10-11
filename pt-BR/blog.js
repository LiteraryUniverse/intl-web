export default {
    'blog.noneMsg': `Atualmente você não tem {type, select,
    organization {nenhum blog}
    universe {um blog para o seu universo}
    user {um blog}
    other {}
  }.`,
    'blog.create': 'Criar um novo blog',
    'blog.settings': `{type, select,
    org {Blog}
    universe {Página do universo}
    user {Blog}
    other {}
  } configurações`,
    'blog.description': 'Introdução ao Blog',
    'blog.theme': 'Tema',
    'blog.theme.info': 'Ao ajustar o tema, o senhor poderá alterar a aparência da página. Esse recurso não está pronto no momento.',
    'blog.posts.total': `Não há {total, plural,
    zero {nenhuma postagem}
    one {há uma postagem}
    other {há # postagens}
  } neste blog.`,
    'blog.post.create': 'Write a new post',
    'blog.post.update': 'Editando {title}',
    'blog.post.text': 'Texto do post',
    'common.slug': 'Endereço amigável de SEO',
    'blog.slug.explained': 'Crie um URL de boa aparência para a postagem. Evite usar caracteres especiais, exceto "-".',
    'blog.publicView': 'Opinião pública',
    'blog.post.notfound': 'Não foi encontrado um post no blog',
    'blog.lists.works': `{type, select,
    universes {Universos}
    stories {Histórias}
    fanfiction {Obra de Fan Fiction}
    other {}
  }`,
    'blog.social.sameAsMain': `Os links sociais são os mesmos definidos em {type, select,
    organization {configurações da organização}
    user {perfil do usuário}
    other {}
  }`,
    'blog.social.website': 'Website oficial',
    'blog.settings.universeSettings': 'Os blogs do universo são integrados em páginas do universo com suas configurações básicas retiradas de configurações do universo.',
    'blog.settings.organizationSettings': 'Os blogs da organização estão integrados nas páginas da organização.',
    'blogs.lu': 'Blogs oficiais do Universo Literário',
    'blogs.featured': 'Blogs em destaque',
    'blogs.new': 'Blogs mais recentes',
    'blogs.title': 'Blogs do Universo Literário',
    'blogs.description': 'Lista de blogs na plataforma do Universo Literário.',
    'blogs.visit': 'Visitar blog',
    'blog.settingsAria': 'Categorias de configurações para o blog',
    'blog.settings.blog': 'Blog',
    'blog.settings.forum': 'Fórum',
    'blog.post.introText': 'Parágrafo de introdução',
    'blog.post.writtenBy': 'Escrito por {usernameDisplay}',
    'blog.post.writtenByFor': 'Escrito por {usernameDisplay} para {publicationName}',
    'blog.posts.recent': 'Postagens recentes',
    'blog.statsPage': 'Estatísticas do blog',
    'blog.view': 'Ver Blog',
    'blog.settings.qa': 'PERGUNTAS E RESPOSTAS',
    // Q&A Settings
    'blog.qa.settings.title': 'Configurações de perguntas e respostas',
    'blog.qa.settings.notSupported': 'No momento, as perguntas e respostas são compatíveis apenas com blogs de usuários e universos.',
    'blog.qa.settings.enable': 'Ativar perguntas e respostas',
    'blog.qa.settings.enableQA': 'Permitir que os leitores façam perguntas',
    'blog.qa.settings.enableQA.help': 'Quando ativado, os leitores podem enviar perguntas que o senhor pode responder de forma pública ou privada.',
    'blog.qa.settings.whoCanAsk': 'Quem pode fazer perguntas',
    'blog.qa.settings.askersAllowed.all': 'Todos os usuários registrados',
    'blog.qa.settings.askersAllowed.all.help': 'Os usuários gratuitos recebem 1 pergunta por vida útil do blog. Os assinantes da LU recebem 1 pergunta por ano (2 no primeiro ano).',
    'blog.qa.settings.askersAllowed.luOnly': 'Somente para assinantes LU',
    'blog.qa.settings.askersAllowed.luOnly.help': 'Somente usuários com uma assinatura LU ativa podem fazer perguntas.',
    'blog.qa.settings.askersAllowed.fanClubOnly': 'Somente para membros do fã-clube',
    'blog.qa.settings.askersAllowed.fanClubOnly.help': 'Somente os membros do Fan Club podem fazer perguntas (limites definidos por nível).',
    'blog.qa.settings.askersAllowed.luOrFanClub': 'Assinantes da LU ou membros do Fan Club',
    'blog.qa.settings.askersAllowed.luOrFanClub.help': 'Os usuários com uma assinatura LU ou associação ao Fan Club podem fazer perguntas.',
    'blog.qa.settings.archive': 'Configurações de arquivo',
    'blog.qa.settings.showArchiveWhenDisabled': 'Mostrar perguntas respondidas mesmo quando o Q&A estiver desativado',
    'blog.qa.settings.showArchiveWhenDisabled.help': 'Quando desativado, os leitores não poderão fazer novas perguntas, mas ainda poderão ver as perguntas respondidas anteriormente.',
    'blog.qa.settings.saved': 'Configurações de Q&A salvas com sucesso',
    // Q&A Admin
    'blog.qa.admin.title': 'Gerenciar perguntas e respostas',
    'blog.qa.admin.tab.pending': 'Pendente',
    'blog.qa.admin.tab.answered': 'Respondido',
    'blog.qa.admin.tab.ignored': 'Ignorado',
    'blog.qa.admin.empty.pending': 'Não há perguntas pendentes.',
    'blog.qa.admin.empty.answered': 'Ainda não há perguntas respondidas.',
    'blog.qa.admin.empty.ignored': 'Não há perguntas ignoradas.',
    'blog.qa.admin.answerQuestion': 'Responder à pergunta',
    'blog.qa.admin.visibility.public': 'Público (todos podem ver)',
    'blog.qa.admin.visibility.private': 'Privado (somente o solicitante pode ver)',
    'blog.qa.admin.submitAnswer': 'Enviar resposta',
    'blog.qa.admin.answer': 'Resposta',
    'blog.qa.admin.ignore': 'Ignorar',
    'blog.qa.admin.confirmIgnore': 'O senhor tem certeza de que deseja ignorar essa pergunta?',
    'blog.qa.admin.pin': 'Pin',
    'blog.qa.admin.unpin': 'Não fixar',
    'blog.qa.admin.yourAnswer': 'Sua resposta',
    // Q&A Public
    'blog.qa.title': 'Perguntas',
    'blog.qa.askQuestion': 'Faça uma pergunta',
    'blog.qa.submitQuestion': 'Enviar pergunta',
    'blog.qa.tab.allAnswered': 'Todas as respostas',
    'blog.qa.tab.myQuestions': 'Minhas perguntas',
    'blog.qa.empty.all': 'Ainda não há perguntas respondidas.',
    'blog.qa.empty.mine': 'O senhor ainda não fez nenhuma pergunta aqui.',
    'blog.qa.status.pending': 'Pendente',
    'blog.qa.status.ignored': 'Ignorado',
    'blog.qa.status.private': 'Resposta particular',
    'blog.qa.status.public': 'Resposta pública',
    'blog.qa.role.reader': 'Leitor',
    'blog.qa.role.author': 'Autor',
    'blog.qa.pinned': 'Fixado',
    'blog.qa.answeredAgo': 'Respondido {time}',
    'blog.qa.loadMore': 'Carregar mais',
    'blog.qa.warn.luRequired': 'Somente os assinantes da LU podem fazer perguntas aqui.',
    'blog.qa.warn.fanClubRequired': 'Somente os membros do fã-clube podem fazer perguntas aqui.',
    'blog.qa.warn.luOrFanRequired': 'Somente assinantes da LU ou membros do Fan Club podem fazer perguntas aqui.'
};