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
    'email.signature': 'Sincerely,<br>Literary Universe team</br>',
    'email.footer.settingsHtml': 'You can change your email settings in <link>your account settings</link>.',
    // Enrollment
    'email.enrollAccount.welcome': 'Fáilte go bord',
    'email.enrollAccount.messageHtml': 'Ba mhaith linn cuireadh a thabhairt duit chuig Literary Universe! Tá cuntas pearsanta ullmhaithe againn duit, áit a mbeidh rochtain agat ar ghnéithe uile Literary Universe. Bí linn chun an chéad ghlúin eile de scríbhneoireacht chruthaitheach agus de léitheoireacht a chruthú!',
    'email.enrollAccount.button': 'Rochtain ar do chuntas',
    'email.enrollAccount.signature': 'We are looking forward to seeing you,<br>Literary Universe team</br>',
    // Reset password
    'email.resetPassword.messageHtml': 'Fuaireamar iarratas chun do phasfhocal do do chuntas a athshocrú. Cliceáil ar an gcnaipe thíos le do thoil chun leanúint leis an bpróiseas. Mura tú a rinne an t-iarratas seo, is féidir leat neamhaird a dhéanamh den ríomhphost seo, ach b\'fhéidir gur dea-am é chun athbhreithniú a dhéanamh ar do shocruithe slándála.',
    'email.resetPassword.button': 'Athshocraigh pasfhocal',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Tá ríméad orainn go bhfuil tú linn! Cliceáil ar an gcnaipe thíos, le do thoil, chun an seoladh ríomhphoist seo a fhíorú.',
    'email.verifyEmail.button': 'Dearbhú an seoladh ríomhphoist seo',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Tá do chuntas uasghrádaithe',
    'email.adminUpgrade.message': `Tá d'chuntas uasghrádaithe againn go {plan, select,
    explorer {Explorer}
    adventurer {Adventurer}
    storyteller {Storyteller}
    other {}
  } don chéad {days} lá.\n\nBain sult as,\nFoireann an Chruinne Liteartha`,
    'email.adminUpgrade.messageHtml': `We have upgraded your account to {plan, select,
    explorer {Explorer}
    adventurer {Adventurer}
    storyteller {Storyteller}
    other {}
  } tier for the next {days, number} days. Enjoy!`,
    'email.verification': 'Dearbhaíocht Ríomhphoist',
    'email.verifying': 'Ag dearbhú do ríomhphost. Ní gá ach nóiméad amháin...',
    'email.verified': 'Féach ort! Tá do ríomhphost dearbhaithe!',
    // The Way (Author Level Up)
    'theWay.levelUp.emailSubject': 'Congratulations! You\'ve reached Author Level {level, number} on Literary Universe!',
    'theWay.levelUp.emailTitle': 'Congratulations! You\'ve reached Author Level {level, number}!',
    'theWay.levelUp.emailIntro': 'Tá luach saothair faighte agat as do dhúthracht i gceird na scríbhneoireachta!',
    'theWay.levelUp.emailGenre': 'You have achieved level {level, number} in the {genre} genre.',
    'theWay.levelUp.emailContinue': 'Lean ort le do thuras agus fuasgail tuilleadh gaiscí ar The Way of the Author.',
    'theWay.levelUp.viewDashboard': 'Féach ar do phainéal',
    // Notifications - General content comment
    'email.notifications.contentComment.subject': 'Trácht nua ar d\'ábhar',
    'email.notifications.contentComment.title': 'Nóta tráchta nua ar do {contentType}',
    'email.notifications.contentComment.details': 'Teideal: {contentTitle} • Ó: {commenterName}',
    'email.notifications.contentComment.cta': 'Féach ar an nóta tráchta',
    // Notifications - Beta reader comment
    'email.notifications.betaComment.subject': 'Aiseolas ó léitheoirí béite nua',
    'email.notifications.betaComment.title': 'Aiseolas ó léitheoirí béite nua',
    'email.notifications.betaComment.details': 'Scéal: {storyTitle}{chapter} • Ó: {commenterName}',
    'email.notifications.betaComment.cta': 'Féach ar an aiseolas',
    // Notifications - New message
    'email.notifications.newMessage.subject': 'Tá teachtaireacht nua agat',
    'email.notifications.newMessage.title': 'Tá teachtaireacht nua agat',
    'email.notifications.newMessage.details': 'Ó: {senderName}',
    'email.notifications.newMessage.cta': 'Féach ar an teachtaireacht',
    // Notifications - Chapter published
    'email.notifications.chapterPublished.subject': 'Caibidil nua foilsithe',
    'email.notifications.chapterPublished.title': 'Caibidil nua foilsithe',
    'email.notifications.chapterPublished.details': 'Scéal: {storyTitle} • Caibidil: {chapterTitle}{suffix}',
    'email.notifications.chapterPublished.cta': 'Oscail caibidil',
    // Notifications - First story created
    'email.notifications.firstStory.subject': 'Tá do chéad scéal anseo!',
    'email.notifications.firstStory.title': 'Tá do chéad scéal beo!',
    'email.notifications.firstStory.intro': 'Tús iontach! Coinnigh ort ag scríobh agus ag fás do shaol le treoir chabhraíoch ar The Way of the Author.',
    'email.notifications.firstStory.details': 'Scéal: {storyTitle}',
    'email.notifications.firstStory.ctaResources': 'Lean ar aghaidh ar Chonair an Údair',
    'email.notifications.firstStory.ctaStory': 'Oscail do scéal',
    // Notifications - First story published (with level 1 achievement)
    'email.notifications.firstStoryPublished.subject': '🎉 Congratulations! Your first story is published and you reached Author Level 1!',
    'email.notifications.firstStoryPublished.title': '🎉 Your Journey Begins!',
    'email.notifications.firstStoryPublished.intro': 'Congratulations on publishing your first story! This is a momentous milestone in your creative journey.',
    'email.notifications.firstStoryPublished.levelAchievement': '🌟 You have reached Author Level 1 on The Way of the Author! This is just the beginning of an incredible adventure in storytelling.',
    'email.notifications.firstStoryPublished.encouragement': 'Every great author started with their first published work. Keep writing, keep growing, and let your creativity flourish. The Literary Universe community is here to support you every step of the way.',
    'email.notifications.firstStoryPublished.ctaTheWay': 'Fiosraigh Bealach an Údair',
    'email.notifications.firstStoryPublished.ctaStory': 'View Your Published Story',
    // Notifications - First universe created
    'email.notifications.firstUniverse.subject': 'Comhghairdeas le do chruinne chéadfach!',
    'email.notifications.firstUniverse.title': 'Comhghairdeas leat as do chruinne chéadfach a chruthú!',
    'email.notifications.firstUniverse.intro': 'Tosaíonn do thuras tógála domhain. Seo roinnt acmhainní chun cabhrú leat na chéad chéimeanna eile a ghlacadh.',
    'email.notifications.firstUniverse.details': 'Cruinne: {universeName}',
    'email.notifications.firstUniverse.ctaResources': 'Fiosraigh Bealach an Údair',
    'email.notifications.firstUniverse.ctaUniverse': 'Oscail do chruinne',
    // Notifications - First chapter published for a story
    'email.notifications.firstChapterPublished.subject': 'Tá do chéad chaibidil foilsithe!',
    'email.notifications.firstChapterPublished.title': 'Tá an chéad chaibidil de do scéal foilsithe!',
    'email.notifications.firstChapterPublished.intro': 'Roinn do chuid oibre, faigh aiseolas, agus coinnigh an móiminteam ag imeacht.',
    'email.notifications.firstChapterPublished.details': 'Scéal: {storyTitle} • Caibidil: {chapterTitle}',
    'email.notifications.firstChapterPublished.ctaChapter': 'Oscail caibidil',
    'email.notifications.firstChapterPublished.ctaStory': 'Féach ar an scéal',
    // Notifications - Story finished
    'email.notifications.storyFinished.subject': 'Comhghairdeas leat as do scéal a chríochnú!',
    'email.notifications.storyFinished.title': 'D\'éirigh leat — tá do scéal críochnaithe!',
    'email.notifications.storyFinished.intro': 'Déan ceiliúradh ar an gcloch mhíle seo! Smaoinigh ar d\'scéal a fhoilsiú, a roinnt, nó a chur isteach chun teacht ar níos mó léitheoirí.',
    'email.notifications.storyFinished.details': 'Scéal: {storyTitle}',
    'email.notifications.storyFinished.cta': 'Féach ar do scéal',
    // Notifications - Fan club new subscriber
    'email.notifications.newFanSubscriber.subject': 'Síntiúsóir nua an chlub lucht leanúna',
    'email.notifications.newFanSubscriber.title': 'Tá síntiúsóir nua de do chlub lucht leanúna agat!',
    'email.notifications.newFanSubscriber.details': 'Sclábhaí: {subscriberName}',
    'email.notifications.newFanSubscriber.cta': 'Féach ar an gclub lucht leanúna',
    // Notifications - Fan club subscription ended
    'email.notifications.fanUnsubscribed.subject': 'D\'fhág ball do chlub lucht leanúna.',
    'email.notifications.fanUnsubscribed.title': 'D\'fhág ball do chlub lucht leanúna.',
    'email.notifications.fanUnsubscribed.intro': 'Ba mhaith linn a chur in iúl duit faoi athrú a rinneadh le déanaí. Smaoinigh ar nuashonruithe nó ar ábhar eisiach a roinnt chun rannpháirtíocht a mhéadú.',
    'email.notifications.fanUnsubscribed.details': 'Iar-bhall: {name}',
    'email.notifications.fanUnsubscribed.cta': 'Club lucht leanúna oscailte',
    // Notifications - Friend request
    'email.notifications.friendRequest.subject': 'Iarratas nua ar chara',
    'email.notifications.friendRequest.title': 'Iarratas nua ar chara',
    'email.notifications.friendRequest.details': 'Ó: {requesterName}',
    'email.notifications.friendRequest.cta': 'Iarratas ar léirmheas',
    // Notifications - Collaboration invitation
    'email.notifications.collabInvite.subject': 'Cuireadh chun comhoibriú',
    'email.notifications.collabInvite.title': 'Tá cuireadh comhoibrithe agat',
    'email.notifications.collabInvite.details': 'Cuireoir: {inviterName} • Ról: {role} • Sprioc: {targetType} — {targetTitle}',
    'email.notifications.collabInvite.cta': 'Cuireadh chun athbhreithniú a dhéanamh',
    // Notifications - Organization invitation
    'email.notifications.orgInvite.subject': 'Cuireadh chun páirt a ghlacadh i n-eagraíocht',
    'email.notifications.orgInvite.title': 'Tugtar cuireadh duit a bheith páirteach {orgName}',
    'email.notifications.orgInvite.details': 'Aoi-thugóir: {inviterName}',
    'email.notifications.orgInvite.cta': 'Cuireadh chun athbhreithniú a dhéanamh',
    // Notifications - Daily digest
    'email.notifications.dailyDigest.subject': 'Do nuashonruithe laethúla',
    'email.notifications.dailyDigest.title': 'Do nuashonruithe laethúla',
    'email.notifications.dailyDigest.intro': 'Seo a tharla inniu.',
    'email.notifications.dailyDigest.cta': 'Féach ar na nuashonruithe go léir',
    'email.notifications.dailyDigest.empty': 'Níl aon nuashonruithe ann inniu.',
    // Notifications - Followed author posted a new blog
    'email.notifications.followedBlogPost.subject': 'Postáil bhlag nua ó údar a leanann tú',
    'email.notifications.followedBlogPost.title': '{authorName} Blagphostáil nua',
    'email.notifications.followedBlogPost.details': 'Teideal: {postTitle}',
    'email.notifications.followedBlogPost.cta': 'Léigh an postáil',
    // Notifications - Followed author published new work
    'email.notifications.followedNewWork.subject': 'Saothar nua ó údar a leanann tú',
    'email.notifications.followedNewWork.title': '{authorName} foilsíodh ceann nua {workType}',
    'email.notifications.followedNewWork.details': 'Teideal: {title}',
    'email.notifications.followedNewWork.cta': 'Féach',
    // Story notification emails
    'email.story.newComment.subject': 'Trácht nua ar "{storyTitle}"',
    'email.story.newComment.body': '{commenterName} D\'fhág mé nóta tráchta ar do scéal "{storyTitle}": {commentText}',
    'email.story.betaComment.subject': 'Aiseolas beta nua ar "{storyTitle}"',
    'email.story.betaComment.body': '{commenterName} Thug aiseolas béite ar "{storyTitle}": {commentText}',
    'email.story.collaboratorAccepted.subject': 'Ball nua foirne do "{storyTitle}"',
    'email.story.collaboratorAccepted.body': '{collaboratorName} Tá do chuireadh glactha aige chun comhoibriú ar "{storyTitle}" mar {role}.',
    'email.story.milestone.subject': 'Comhghairdeas! Cloch mhíle bainte amach ar "{storyTitle}"',
    'email.story.milestone.body': 'Dea-scéala! Tá do chaibidil "{chapterTitle}" ón leabhar "{storyTitle}" tar éis an marc {count} {milestone}a bhaint amach. Coinnigh ort leis an obair iontach!',
    'email.story.betaRevision.subject': 'Athbhreithniú béite nua ar fáil: "{chapterTitle}"',
    'email.story.betaRevision.body': '{authorName} Tá leagan béite nua de "{chapterTitle}" ó "{storyTitle}" foilsithe. Bheimis an-bhuíoch as d\'aiseolas!',
    'email.story.newChapter.subject': 'Caibidil nua ar fáil: "{storyTitle}"',
    'email.story.newChapter.body': '{authorName} Tá caibidil nua foilsithe ag "{storyTitle}": "{chapterTitle}". Léamh faoi mhaise!',
    // Universe notification emails
    'email.universe.newStory.subject': 'Scéal nua sa chruinne: "{storyTitle}"',
    'email.universe.newStory.body': '{authorName} Cuireadh scéal nua "{storyTitle}" leis an gcruinne atá á leanúint agat. Faigh amach eachtraí nua!',
    'email.universe.collaboratorChange.subject': 'Nuashonrú ar chomhoibriú na Cruinne',
    'email.universe.collaboratorChange.body': 'Tá athrú tagtha ar an bhfoireann comhoibrithe don chruinne a bhfuil baint agat léi.',
    'email.universe.update.subject': 'Nuashonraithe an chruinne',
    'email.universe.update.body': 'Tá nuashonrú déanta ar chruinne atá á leanúint agat le hábhar nua.',
    'email.universe.comment.subject': 'Trácht nua ar an gcruinne',
    'email.universe.comment.body': '{commenterName} Rinne tú trácht ar chruinne atá á leanúint agat: "{commentText}"',
    // Blog notification emails
    'email.blog.newPost.subject': 'Postáil bhlag nua: "{postTitle}"',
    'email.blog.newPost.body': '{authorName} Foilsíodh postáil bhlag nua "{postTitle}" ar bhlag atá á leanúint agat.',
    'email.blog.comment.subject': 'Trácht nua ar phostáil bhlag: "{postTitle}"',
    'email.blog.comment.body': '{commenterName} Rinneadh trácht ar an mblagmhír "{postTitle}": "{commentText}"',
    'email.blog.update.subject': 'Nuashonraithe an blag',
    'email.blog.update.body': 'Tá blag atá á leanúint agat nuashonraithe.',
    // General comment notification emails
    'email.comment.general.subject': 'Trácht nua ar "{contentTitle}"',
    'email.comment.general.body': '{commenterName} Rinneadh trácht ar "{contentTitle}": "{commentText}"',
    'email.comment.reply.subject': 'Freagair do nóta tráchta',
    'email.comment.reply.body': '{replierName} D\'fhreagair mé do do thrácht ar "{contentTitle}": "{replyText}"',
    'email.comment.like.subject': 'Thaitin do thrácht.',
    'email.comment.like.body': '{likerName} Thaitin do thrácht liom. Coinnigh ort ag plé!',
    // Content-specific comment notification emails
    'email.comment.fanArt.subject': 'Nóta tráchta nua ar ealaín lucht leanúna: "{contentTitle}"',
    'email.comment.fanArt.body': '{commenterName} Nóta tráchta ar d\'ealaín lucht leanúna "{contentTitle}": "{commentText}"',
    'email.comment.event.subject': 'Nóta tráchta nua ar an imeacht: "{contentTitle}"',
    'email.comment.event.body': '{commenterName} commented on the event "{contentTitle}": "{commentText}"',
    'email.comment.revision.subject': 'New comment on revision',
    'email.comment.revision.body': '{commenterName} commented on your revision: "{commentText}"',
    'email.comment.feedback.subject': 'New comment on feedback',
    'email.comment.feedback.body': '{commenterName} commented on your feedback issue: "{commentText}"',
    // Welcome email
    'email.welcome.subject': 'Welcome to Literary Universe!'
};