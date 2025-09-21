/**
 * @authors Jan Dvorak
 */
export default {
    'email.enrollAccount.subject': 'Kvietimas į Literatūrinę Visatą {username}',
    'email.enrollAccount.message': `Sveiki {username}\n\n
    Mes norėtume pakviesti jus į Literatūrinę Visatą! Mes sukūrėme specialią asmeninę paskyrą, kurioje galėsite pasiekti visus Literatūrinės Visatos funkcionalumus! Prašome prisijungti prie mūsų kuriant ateities kūrybinės rašymo ir skaitymo įrankius!
    Norėdami aktyvuoti savo paskyrą, tiesiog spustelėkite žemiau esantį nuorodos adresą:\n\n{url}`,
    'email.resetPassword.subject': 'Literatūrinės Visatos slaptažodžio atkūrimas',
    'email.resetPassword.message': `Sveiki {username}!\n\n Mes gavome prašymą atkurti jūsų paskyros slaptažodį.
        Prašome paspausti žemiau esančią nuorodą, kad atkurtumėte savo slaptažodį:\n\n{url}`,
    'email.verifyEmail.subject': 'Literatūrinės Visatos el. pašto patvirtinimas',
    'email.verifyEmail.message': 'Sveiki {username}!\n\n Prašome patvirtinti savo el. pašto adresą paspaudę žemiau esančią nuorodą:\n\n{url}',
    // New html email keys
    'email.salutation': 'Sveiki {username},',
    'email.welcome': 'Sveiki atvykę į Literatūrinę Visatą!',
    'email.signature': 'Su pagarba,<br />Literatūrinės Visatos komanda',
    // Enrollment
    'email.enrollAccount.welcome': 'Sveiki atvykę į mūsų komandą',
    'email.enrollAccount.messageHtml': 'Kviečiame į Literatūros visatą! Mes parengėme jums asmeninę paskyrą, kurioje galėsite naudotis visomis "Literary Universe" funkcijomis. Prisijunkite prie mūsų ir kurkite naują kūrybinio rašymo ir skaitymo kartą!',
    'email.enrollAccount.button': 'Pasiekti savo paskyrą',
    'email.enrollAccount.signature': 'Laukiame jūsų,<br />Literatūrinės visatos komanda',
    // Reset password
    'email.resetPassword.messageHtml': 'Gavome prašymą iš naujo nustatyti jūsų paskyros slaptažodį. Norėdami tęsti procesą, spustelėkite toliau esantį mygtuką. Jei tokio prašymo nepateikėte, galite nekreipti dėmesio į šį el. laišką, tačiau galbūt pats laikas peržiūrėti savo saugumo nustatymus.',
    'email.resetPassword.button': 'Atkurti slaptažodį',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Džiaugiamės galėdami jus priimti į savo gretas! Spustelėkite toliau esantį mygtuką, kad patikrintumėte šį el. pašto adresą.',
    'email.verifyEmail.button': 'Patvirtinti šį el. pašto adresą',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Jūsų paskyra buvo atnaujinta',
    'email.adminUpgrade.message': `Mes atnaujinome jūsų paskyrą į {plan, select,
    explorer {Tyrinėtojas}
    adventurer {Nuotykių ieškotojas}
    storyteller {Pasakotojas}
    other {}
  } lygį kitoms {days} dienoms.\n\nMėgaukitės,\nLiteratinės Visatos komanda`,
    'email.adminUpgrade.messageHtml': `We have upgraded your account to {plan, select,
    explorer {Explorer}
    adventurer {Adventurer}
    storyteller {Storyteller}
    other {}
  } tier for the next {days, number} days. Enjoy!`,
    'email.verification': 'El. pašto patvirtinimas',
    'email.verifying': 'Patvirtinkite savo el. paštą. Tai užtruks vos akimirką...',
    'email.verified': 'Puiki naujiena! Jūsų el. paštas buvo patvirtintas!',
    // The Way (Author Level Up)
    'theWay.levelUp.emailSubject': 'Sveikiname! Pasiekėte Autoriaus lygį {level, number} Literatūrinėje visatoje!',
    'theWay.levelUp.emailTitle': 'Sveikiname! Pasiekėte autoriaus lygį {level, number}!',
    'theWay.levelUp.emailIntro': 'Jūsų atsidavimas rašymo amatui buvo atlygintas!',
    'theWay.levelUp.emailGenre': 'Pasiekėte lygį {level, number} {genre} žanre.',
    'theWay.levelUp.emailContinue': 'Tęskite kelionę ir atrakinkite daugiau pasiekimų žaidime "The Way of the Author".',
    'theWay.levelUp.viewDashboard': 'Peržiūrėti prietaisų skydelį',
    // Notifications - General content comment
    'email.notifications.contentComment.subject': 'Naujas komentaras apie jūsų turinį',
    'email.notifications.contentComment.title': 'Naujas komentaras jūsų {contentType}',
    'email.notifications.contentComment.details': 'Pavadinimas: {contentTitle} - Nuo: {commenterName}',
    'email.notifications.contentComment.cta': 'Peržiūrėti komentarą',
    // Notifications - Beta reader comment
    'email.notifications.betaComment.subject': 'Nauji beta skaitytojų atsiliepimai',
    'email.notifications.betaComment.title': 'Nauji beta skaitytojų atsiliepimai',
    'email.notifications.betaComment.details': 'Istorija: {storyTitle}{chapter} - Iš: {commenterName}',
    'email.notifications.betaComment.cta': 'Peržiūrėti atsiliepimus',
    // Notifications - New message
    'email.notifications.newMessage.subject': 'Gavote naują pranešimą',
    'email.notifications.newMessage.title': 'Gavote naują pranešimą',
    'email.notifications.newMessage.details': 'Iš: {senderName}',
    'email.notifications.newMessage.cta': 'Peržiūrėti pranešimą',
    // Notifications - Chapter published
    'email.notifications.chapterPublished.subject': 'Paskelbtas naujas skyrius',
    'email.notifications.chapterPublished.title': 'Paskelbtas naujas skyrius',
    'email.notifications.chapterPublished.details': 'Istorija: {storyTitle} - Skyrius: {chapterTitle}{suffix}',
    'email.notifications.chapterPublished.cta': 'Atviras skyrius',
    // Notifications - First story created
    'email.notifications.firstStory.subject': 'Jūsų pirmoji istorija jau čia!',
    'email.notifications.firstStory.title': 'Jūsų pirmoji istorija jau gyva!',
    'email.notifications.firstStory.intro': 'Nuostabi pradžia! Rašykite toliau ir plėskite savo pasaulį, naudodamiesi naudingais autoriaus kelio patarimais.',
    'email.notifications.firstStory.details': 'Istorija: {storyTitle}',
    'email.notifications.firstStory.ctaResources': 'Tęsti apie Autoriaus kelias',
    'email.notifications.firstStory.ctaStory': 'Atverkite savo istoriją',
    // Notifications - First universe created
    'email.notifications.firstUniverse.subject': 'Sveikiname su pirmąja visata!',
    'email.notifications.firstUniverse.title': 'Sveikiname sukūrus pirmąją visatą!',
    'email.notifications.firstUniverse.intro': 'Prasideda jūsų pasaulio kūrimo kelionė. Čia rasite keletą šaltinių, kurie padės jums žengti kitus žingsnius.',
    'email.notifications.firstUniverse.details': 'Visata: {universeName}',
    'email.notifications.firstUniverse.ctaResources': 'Ištirti "Autoriaus kelią',
    'email.notifications.firstUniverse.ctaUniverse': 'Atverkite savo visatą',
    // Notifications - First chapter published for a story
    'email.notifications.firstChapterPublished.subject': 'Jūsų pirmasis skyrius paskelbtas!',
    'email.notifications.firstChapterPublished.title': 'Paskelbtas pirmasis jūsų istorijos skyrius!',
    'email.notifications.firstChapterPublished.intro': 'Dalinkitės savo darbais, rinkite atsiliepimus ir palaikykite pagreitį.',
    'email.notifications.firstChapterPublished.details': 'Istorija: {storyTitle} - Skyrius: {chapterTitle}',
    'email.notifications.firstChapterPublished.ctaChapter': 'Atviras skyrius',
    'email.notifications.firstChapterPublished.ctaStory': 'Peržiūrėti istoriją',
    // Notifications - Story finished
    'email.notifications.storyFinished.subject': 'Sveikiname baigus savo istoriją!',
    'email.notifications.storyFinished.title': 'Jūs tai padarėte - jūsų istorija baigta!',
    'email.notifications.storyFinished.intro': 'Švęskite šį svarbų įvykį! Apsvarstykite galimybę paskelbti, pasidalyti arba pateikti savo istoriją, kad ji pasiektų daugiau skaitytojų.',
    'email.notifications.storyFinished.details': 'Istorija: {storyTitle}',
    'email.notifications.storyFinished.cta': 'Peržiūrėkite savo istoriją',
    // Notifications - Fan club new subscriber
    'email.notifications.newFanSubscriber.subject': 'Naujas fanų klubo prenumeratorius',
    'email.notifications.newFanSubscriber.title': 'Jūs turite naują gerbėjų klubo prenumeratorių!',
    'email.notifications.newFanSubscriber.details': 'Abonentas: {subscriberName}',
    'email.notifications.newFanSubscriber.cta': 'Peržiūrėti fanų klubą',
    // Notifications - Fan club subscription ended
    'email.notifications.fanUnsubscribed.subject': 'Jūsų gerbėjų klubą paliko narys',
    'email.notifications.fanUnsubscribed.title': 'Jūsų gerbėjų klubą paliko narys',
    'email.notifications.fanUnsubscribed.intro': 'Norėjome pranešti apie neseniai įvykusį pokytį. Apsvarstykite galimybę dalytis atnaujinimais arba išskirtiniu turiniu, kad padidintumėte įsitraukimą.',
    'email.notifications.fanUnsubscribed.details': 'Buvęs narys: {name}',
    'email.notifications.fanUnsubscribed.cta': 'Atviras gerbėjų klubas',
    // Notifications - Friend request
    'email.notifications.friendRequest.subject': 'Naujas draugo prašymas',
    'email.notifications.friendRequest.title': 'Naujas draugo prašymas',
    'email.notifications.friendRequest.details': 'Iš: {requesterName}',
    'email.notifications.friendRequest.cta': 'Peržiūros prašymas',
    // Notifications - Collaboration invitation
    'email.notifications.collabInvite.subject': 'Kvietimas bendradarbiauti',
    'email.notifications.collabInvite.title': 'Turite bendradarbiavimo kvietimą',
    'email.notifications.collabInvite.details': 'Kviečiantysis: {inviterName} - Vaidmuo: {role} - Tikslas: {targetType} - {targetTitle}',
    'email.notifications.collabInvite.cta': 'Peržiūrėti kvietimą',
    // Notifications - Organization invitation
    'email.notifications.orgInvite.subject': 'Kvietimas prisijungti prie organizacijos',
    'email.notifications.orgInvite.title': 'Kviečiame prisijungti prie {orgName}',
    'email.notifications.orgInvite.details': 'Invoiteris: {inviterName}',
    'email.notifications.orgInvite.cta': 'Peržiūrėti kvietimą',
    // Notifications - Daily digest
    'email.notifications.dailyDigest.subject': 'Jūsų kasdieniai atnaujinimai',
    'email.notifications.dailyDigest.title': 'Jūsų kasdieniai atnaujinimai',
    'email.notifications.dailyDigest.intro': 'Štai kas nutiko šiandien.',
    'email.notifications.dailyDigest.cta': 'Peržiūrėti visus atnaujinimus',
    'email.notifications.dailyDigest.empty': 'Šiandien jokių atnaujinimų.',
    // Notifications - Followed author posted a new blog
    'email.notifications.followedBlogPost.subject': 'Naujas sekamo autoriaus tinklaraščio įrašas',
    'email.notifications.followedBlogPost.title': '{authorName} paskelbė naują tinklaraštį',
    'email.notifications.followedBlogPost.details': 'Pavadinimas: {postTitle}',
    'email.notifications.followedBlogPost.cta': 'Skaityti pranešimą',
    // Notifications - Followed author published new work
    'email.notifications.followedNewWork.subject': 'Naujas sekamo autoriaus kūrinys',
    'email.notifications.followedNewWork.title': '{authorName} paskelbė naują {workType}',
    'email.notifications.followedNewWork.details': 'Pavadinimas: {title}',
    'email.notifications.followedNewWork.cta': 'Peržiūrėti',
    // Story notification emails
    'email.story.newComment.subject': 'Naujas komentaras "{storyTitle}"',
    'email.story.newComment.body': '{commenterName} paliko komentarą apie savo istoriją "{storyTitle}": {commentText}',
    'email.story.betaComment.subject': 'Nauji beta atsiliepimai apie "{storyTitle}"',
    'email.story.betaComment.body': '{commenterName} pateikė beta atsiliepimus apie "{storyTitle}": {commentText}',
    'email.story.collaboratorAccepted.subject': 'Naujas komandos narys "{storyTitle}"',
    'email.story.collaboratorAccepted.body': '{collaboratorName} priėmė jūsų kvietimą bendradarbiauti su "{storyTitle}" kaip {role}.',
    'email.story.milestone.subject': 'Sveikiname! Pasiektas svarbus etapas "{storyTitle}"',
    'email.story.milestone.body': 'Puikios naujienos! Jūsų skyrius "{chapterTitle}" iš "{storyTitle}" pasiekė {count} {milestone}. Tęskite puikų darbą!',
    'email.story.betaRevision.subject': 'Galima įsigyti naują beta versiją: "{chapterTitle}"',
    'email.story.betaRevision.body': '{authorName} paskelbė naują beta versiją "{chapterTitle}" iš "{storyTitle}". Jūsų atsiliepimai bus labai vertinami!',
    'email.story.newChapter.subject': 'Naujas skyrius: "{storyTitle}"',
    'email.story.newChapter.body': '{authorName} paskelbė naują "{storyTitle}" skyrių: "{chapterTitle}". Malonaus skaitymo!',
    // Universe notification emails
    'email.universe.newStory.subject': 'Nauja istorija visatoje: "{storyTitle}"',
    'email.universe.newStory.body': '{authorName} pridėjo naują istoriją "{storyTitle}" į visatą, kurią sekate. Atraskite naujų nuotykių!',
    'email.universe.collaboratorChange.subject': 'Visatos bendradarbiavimo atnaujinimas',
    'email.universe.collaboratorChange.body': 'Pasikeitė visatos, su kuria dirbate, bendradarbiavimo komanda.',
    'email.universe.update.subject': 'Visata atnaujinta',
    'email.universe.update.body': 'Jūsų sekama visata buvo atnaujinta nauju turiniu.',
    'email.universe.comment.subject': 'Naujas komentaras apie visatą',
    'email.universe.comment.body': '{commenterName} pakomentavo visatą, kurią sekate: "{commentText}"',
    // Blog notification emails
    'email.blog.newPost.subject': 'Naujas tinklaraščio įrašas: "{postTitle}"',
    'email.blog.newPost.body': '{authorName} paskelbė naują tinklaraščio įrašą "{postTitle}" tinklaraštyje, kurį sekate.',
    'email.blog.comment.subject': 'Naujas komentaras apie dienoraščio įrašą: "{postTitle}"',
    'email.blog.comment.body': '{commenterName} pakomentavo tinklaraščio įrašą "{postTitle}": "{commentText}"',
    'email.blog.update.subject': 'Atnaujintas tinklaraštis',
    'email.blog.update.body': 'Buvo atnaujintas jūsų sekamas tinklaraštis.',
    // General comment notification emails
    'email.comment.general.subject': 'Naujas komentaras "{contentTitle}"',
    'email.comment.general.body': '{commenterName} Komentavo "{contentTitle}": "{commentText}"',
    'email.comment.reply.subject': 'Atsakyti į jūsų komentarą',
    'email.comment.reply.body': '{replierName} atsakė į jūsų komentarą "{contentTitle}": "{replyText}"',
    'email.comment.like.subject': 'Jūsų komentaras patiko',
    'email.comment.like.body': '{likerName} patiko jūsų komentaras. Ir toliau įsitraukti!',
    // Content-specific comment notification emails
    'email.comment.fanArt.subject': 'Naujas komentaras apie fanų meną: "{contentTitle}"',
    'email.comment.fanArt.body': '{commenterName} pakomentavo savo fanų meną "{contentTitle}": "{commentText}"',
    'email.comment.event.subject': 'Naujas komentaras apie įvykį: "{contentTitle}"',
    'email.comment.event.body': '{commenterName} komentavo įvykį "{contentTitle}": "{commentText}"',
    'email.comment.revision.subject': 'Naujas komentaras dėl peržiūros',
    'email.comment.revision.body': '{commenterName} pakomentavo jūsų peržiūrą: "{commentText}"',
    'email.comment.feedback.subject': 'Naujas komentaras apie atsiliepimus',
    'email.comment.feedback.body': '{commenterName} pakomentavo jūsų atsiliepimų klausimą: "{commentText}"',
    // Welcome email
    'email.welcome.subject': 'Sveiki atvykę į Literatūrinę visatą!'
};