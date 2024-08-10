/**
 * @authors Jan Dvorak
 */
export default {
    'email.enrollAccount.subject': 'Cuireadh chuig Domhan Liteartha do {username}',
    'email.enrollAccount.message': `Dia duit {username}\n\n
    Ba mhaith linn cuireadh a thabhairt duit chuig Domhan Liteartha! Tá cuntas pearsanta speisialta cruthaithe againn duit áit a mbeidh rochtain agat ar gach gné de Domhan Liteartha! Bainimid taitneamh as do chuideachta leis an gcéad ghlúin eile de threoracha scríbhneoireachta agus léitheoireachta cruthaitheacha!
    Chun do chuntas a chumasú, níl a dhéanamh ach an nasc thíos a chliceáil:\n\n{url}`,
    'email.resetPassword.subject': 'Athshocraigh focal faire Domhan Liteartha',
    'email.resetPassword.message': `Dia duit {username}!\n\n Tá iarraidh tagartha faighte againn chun do phasfhocal a athshocrú do do chuntas.
        Tabhair faoi ndeara an nasc thíos chun do phasfhocal a athshocrú:\n\n{url}`,
    'email.verifyEmail.subject': 'Dearbhú ríomhphoist Domhan Liteartha',
    'email.verifyEmail.message': 'Dia duit {username}!\n\n Cuir do sheoladh ríomhphoist i gcrích trí an nasc thíos a chliceáil:\n\n{url}',
    // New html email keys
    'email.salutation': 'Dia duit {username},',
    'email.welcome': 'Fáilte go Domhan Liteartha!',
    'email.signature': 'Le meas,<br />foireann Domhan Liteartha',
    // Enrollment
    'email.enrollAccount.welcome': 'Fáilte go bord',
    'email.enrollAccount.messageHtml': 'Ba mhaith linn cuireadh a thabhairt duit chuig Domhan Liteartha! Tá cuntas pearsanta cruthaithe againn duit áit a mbeidh rochtain agat ar gach gné de Domhan Liteartha! Bainimid taitneamh as do chuideachta leis an gcéad ghlúin eile de scríbhneoireacht agus léitheoireacht chruthaitheacha!',
    'email.enrollAccount.button': 'Rochtain ar do chuntas',
    'email.enrollAccount.signature': 'Táimid ag súil go mór leat a fheiceáil, foireann Literary Universe<br />',
    // Reset password
    'email.resetPassword.messageHtml': 'Táimid tar éis iarratas a fháil chun do phasfhocal a athshocrú do do chuntas, clicáil ar an gcnaipe thíos chun leanúint ar aghaidh leis an bpróiseas. Má níor rinne tú an iarratas seo, is féidir leat an ríomhphost seo a neamhaird, ach b\'fhéidir go bhfuil sé in am maith do shocruithe slándála a athbhreithniú.',
    'email.resetPassword.button': 'Athshocraigh pasfhocal',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Táimid sásta go bhfuil tú ar bord! Cliceáil ar an gcnaipe thíos chun an seoladh ríomhphoist seo a dhearbhú.',
    'email.verifyEmail.button': 'Dearbhú an seoladh ríomhphoist seo',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Tá do chuntas uasghrádaithe',
    'email.adminUpgrade.message': `We have upgraded your account to {plan, select,
    explorer {Explorer}
    adventurer {Adventurer}
    storyteller {Storyteller}
    other {}
  } tier for the next {days} days.\n\nEnjoy,\nLiterary Universe team`,
    'email.adminUpgrade.messageHtml': `Táimid tar éis do chuntas a uasghrádú go dtí an {plan, select,
    explorer {Lorgaire}
    adventurer {Eachtraí}
    storyteller {Léiritheoir Scéalta}
    other {}
  } leibhéal ar feadh na {days} lá amach romhainn. Bain sult as!`,
    'email.verification': 'Dearbhaíocht Ríomhphoist',
    'email.verifying': 'Ag dearbhú do ríomhphost. Ní gá ach nóiméad amháin...',
    'email.verified': 'Féach ort! Tá do ríomhphost dearbhaithe!'
};