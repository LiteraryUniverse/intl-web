/**
 * @authors Jan Dvorak
 */
export default {
    'email.enrollAccount.subject': 'Kutse Kirjanduslikku Universumisse {username}',
    'email.enrollAccount.message': `Tere {username}\n\n
    Me soovime sind kutsuda Kirjanduslikku Universumisse! Oleme loonud sulle erilise personaalse konto, kus saad ligi kõikidele Kirjandusliku Universumi funktsioonidele! Palun ühine meiega, et luua järgmine põlvkond loovkirjutamise ja lugemisvahendeid!
    Konto aktiveerimiseks klõpsa lihtsalt allpool oleval lingil:\n\n{url}`,
    'email.resetPassword.subject': 'Kirjandusliku Universumi parooli lähtestamine',
    'email.resetPassword.message': `Tere {username}!\n\n Oleme saanud taotluse sinu parooli lähtestamiseks sinu kontol.
        Palun järgi allpool olevat linki, et lähtestada oma parool:\n\n{url}`,
    'email.verifyEmail.subject': 'Kirjandusliku Universumi e-posti kinnitamine',
    'email.verifyEmail.message': 'Tere {username}!\n\n Palun kinnita oma e-posti aadress, klõpsates allpool oleval lingil:\n\n{url}',
    // New html email keys
    'email.salutation': 'Tere {username},',
    'email.welcome': 'Tere tulemast Kirjanduslikku Universumisse!',
    'email.signature': 'Parimate soovidega,<br />Kirjandusliku Universumi meeskond',
    // Enrollment
    'email.enrollAccount.welcome': 'Tere tulemast pardale',
    'email.enrollAccount.messageHtml': 'Kutsume teid kirjandusuniversumisse! Läksime edasi ja valmistasime teile isikliku konto, kus saate juurdepääsu kõikidele Literary Universe\'i funktsioonidele. Palun ühinege meiega loomingulise kirjutamise ja lugemise järgmise põlvkonna loomisel!',
    'email.enrollAccount.button': 'Ligipääs oma kontole',
    'email.enrollAccount.signature': 'Ootame teid,<br />Kirjandusuniversumi meeskond.',
    // Reset password
    'email.resetPassword.messageHtml': 'Oleme saanud taotluse teie konto parooli lähtestamiseks. Palun klõpsake protsessi jätkamiseks alloleval nupul. Kui te ei ole seda taotlust esitanud, võite seda e-kirja ignoreerida, kuid võib-olla on hea aeg oma turvasätted üle vaadata.',
    'email.resetPassword.button': 'Lähtesta parool',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Meil on hea meel, et sa oled pardal! Palun klõpsa alloleval nupul, et kinnitada seda e-posti aadressi.',
    'email.verifyEmail.button': 'Kinnita see e-posti aadress',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Teie konto on täiustatud',
    'email.adminUpgrade.message': `Oleme uuendanud teie konto {plan, select,
    explorer {Explorer}
    adventurer {Seikleja}
    storyteller {Jutuvestja}
    other {}
  } tasemele järgnevateks {days} päevaks.\n\nNautige,\nLiterary Universe'i meeskond`,
    'email.adminUpgrade.messageHtml': `Oleme uuendanud teie konto {plan, select,
    explorer {Explorer}
    adventurer {Seikleja}
    storyteller {Jutuvestja}
    other {}
  } tasemele järgnevateks {days} päevaks. Nautige!`,
    'email.verification': 'E-posti verifitseerimine',
    'email.verifying': 'Teie e-posti verifitseerimine. See võtab vaid hetke aega...',
    'email.verified': 'Suurepärased uudised! Teie e-post on verifitseeritud!',
    // The Way (Author Level Up)
    'theWay.levelUp.emailSubject': 'Palju õnne! Olete jõudnud Kirjandusuniversumi autoritasandile {level} !',
    'theWay.levelUp.emailTitle': 'Palju õnne! Olete jõudnud autori tasemele {level}!',
    'theWay.levelUp.emailIntro': 'Teie pühendumine kirjutamise käsitööle on premeeritud!',
    'theWay.levelUp.emailGenre': 'Sa oled saavutanud taseme {level} žanris {genre} .',
    'theWay.levelUp.emailContinue': 'Jätkake oma teekonda ja avage rohkem saavutusi autori teel.',
    'theWay.levelUp.viewDashboard': 'Vaadake oma armatuurlauda',
    // Notifications - General content comment
    'email.notifications.contentComment.subject': 'Uus kommentaar teie sisu kohta',
    'email.notifications.contentComment.title': 'Uus kommentaar teie aadressil {contentType}',
    'email.notifications.contentComment.details': 'Pealkiri: {contentTitle} - Nimi: From: {commenterName}',
    'email.notifications.contentComment.cta': 'Vaata kommentaari',
    // Notifications - Beta reader comment
    'email.notifications.betaComment.subject': 'Uus beetalugeja tagasiside',
    'email.notifications.betaComment.title': 'Uus beetalugeja tagasiside',
    'email.notifications.betaComment.details': 'Lugu: {storyTitle}{chapter} - Alates: {commenterName}',
    'email.notifications.betaComment.cta': 'Tagasiside vaatamine',
    // Notifications - New message
    'email.notifications.newMessage.subject': 'Teil on uus sõnum',
    'email.notifications.newMessage.title': 'Teil on uus sõnum',
    'email.notifications.newMessage.details': 'Alates: {senderName}',
    'email.notifications.newMessage.cta': 'Vaata sõnumit',
    // Notifications - Chapter published
    'email.notifications.chapterPublished.subject': 'Uus peatükk avaldatud',
    'email.notifications.chapterPublished.title': 'Uus peatükk avaldatud',
    'email.notifications.chapterPublished.details': 'Lugu: {storyTitle} - Peatükk: {chapterTitle}{suffix}',
    'email.notifications.chapterPublished.cta': 'Avatud peatükk',
    // Notifications - First story created
    'email.notifications.firstStory.subject': 'Teie esimene lugu on siin!',
    'email.notifications.firstStory.title': 'Teie esimene lugu on live!',
    'email.notifications.firstStory.intro': 'Hämmastav algus! Jätkake kirjutamist ja oma maailma kasvatamist, kasutades abivalmis juhiseid "Autori tee" kohta.',
    'email.notifications.firstStory.details': 'Lugu: {storyTitle}',
    'email.notifications.firstStory.ctaResources': 'Jätkake teemal "Autori tee',
    'email.notifications.firstStory.ctaStory': 'Avage oma lugu',
    // Notifications - First universe created
    'email.notifications.firstUniverse.subject': 'Palju õnne esimese universumi puhul!',
    'email.notifications.firstUniverse.title': 'Palju õnne oma esimese universumi loomise puhul!',
    'email.notifications.firstUniverse.intro': 'Algab teie maailma ehitamise teekond. Siin on mõned ressursid, mis aitavad teil astuda järgmisi samme.',
    'email.notifications.firstUniverse.details': 'Universum: {universeName}',
    'email.notifications.firstUniverse.ctaResources': 'Uurige autori teed',
    'email.notifications.firstUniverse.ctaUniverse': 'Avage oma universum',
    // Notifications - First chapter published for a story
    'email.notifications.firstChapterPublished.subject': 'Teie esimene peatükk on avaldatud!',
    'email.notifications.firstChapterPublished.title': 'Teie loo esimene peatükk on avaldatud!',
    'email.notifications.firstChapterPublished.intro': 'Jagage oma tööd, koguge tagasisidet ja hoidke hoogu üleval.',
    'email.notifications.firstChapterPublished.details': 'Lugu: {storyTitle} - Peatükk: {chapterTitle}',
    'email.notifications.firstChapterPublished.ctaChapter': 'Avatud peatükk',
    'email.notifications.firstChapterPublished.ctaStory': 'Vaata lugu',
    // Notifications - Story finished
    'email.notifications.storyFinished.subject': 'Palju õnne oma loo lõpetamise puhul!',
    'email.notifications.storyFinished.title': 'Sa tegid seda - sinu lugu on lõppenud!',
    'email.notifications.storyFinished.intro': 'Tähistage seda verstaposti! Kaaluge oma loo avaldamist, jagamist või esitamist, et jõuda rohkemate lugejateni.',
    'email.notifications.storyFinished.details': 'Lugu: {storyTitle}',
    'email.notifications.storyFinished.cta': 'Vaata oma lugu',
    // Notifications - Fan club new subscriber
    'email.notifications.newFanSubscriber.subject': 'Uus fänniklubi tellija',
    'email.notifications.newFanSubscriber.title': 'Teil on uus fänniklubi tellija!',
    'email.notifications.newFanSubscriber.details': 'Tellija: {subscriberName}',
    'email.notifications.newFanSubscriber.cta': 'Vaata fännklubi',
    // Notifications - Fan club subscription ended
    'email.notifications.fanUnsubscribed.subject': 'Üks liige lahkus teie fännklubist',
    'email.notifications.fanUnsubscribed.title': 'Üks liige lahkus teie fännklubist',
    'email.notifications.fanUnsubscribed.intro': 'Tahtsime teile teada anda hiljutisest muudatusest. Kaaluge uuenduste või eksklusiivse sisu jagamist, et suurendada kaasamist.',
    'email.notifications.fanUnsubscribed.details': 'Endine liige: {name}',
    'email.notifications.fanUnsubscribed.cta': 'Avatud fänniklubi',
    // Notifications - Friend request
    'email.notifications.friendRequest.subject': 'Uus sõbrakutse',
    'email.notifications.friendRequest.title': 'Uus sõbrakutse',
    'email.notifications.friendRequest.details': 'Alates: {requesterName}',
    'email.notifications.friendRequest.cta': 'Läbivaatamise taotlus',
    // Notifications - Collaboration invitation
    'email.notifications.collabInvite.subject': 'Kutse koostööle',
    'email.notifications.collabInvite.title': 'Teil on kutse koostööle',
    'email.notifications.collabInvite.details': 'Kutsuja: {inviterName} - Roll: {role} - Eesmärk: {targetType} - {targetTitle}',
    'email.notifications.collabInvite.cta': 'Kutse läbivaatamine',
    // Notifications - Organization invitation
    'email.notifications.orgInvite.subject': 'Kutse organisatsiooniga liitumiseks',
    'email.notifications.orgInvite.title': 'Olete kutsutud liituma {orgName}',
    'email.notifications.orgInvite.details': 'Kutsuja: {inviterName}',
    'email.notifications.orgInvite.cta': 'Kutse läbivaatamine',
    // Notifications - Daily digest
    'email.notifications.dailyDigest.subject': 'Teie igapäevased uuendused',
    'email.notifications.dailyDigest.title': 'Teie igapäevased uuendused',
    'email.notifications.dailyDigest.intro': 'Täna juhtus järgmine asi.',
    'email.notifications.dailyDigest.cta': 'Vaata kõiki uuendusi',
    'email.notifications.dailyDigest.empty': 'Täna ei ole uuendusi.',
    // Notifications - Followed author posted a new blog
    'email.notifications.followedBlogPost.subject': 'Uus blogipostitus autorilt, keda jälgite',
    'email.notifications.followedBlogPost.title': '{authorName} postitas uue blogi',
    'email.notifications.followedBlogPost.details': 'Pealkiri: {postTitle}',
    'email.notifications.followedBlogPost.cta': 'Loe postitust',
    // Notifications - Followed author published new work
    'email.notifications.followedNewWork.subject': 'Uus teos autorilt, keda te jälgite',
    'email.notifications.followedNewWork.title': '{authorName} avaldas uue {workType}',
    'email.notifications.followedNewWork.details': 'Pealkiri: {title}',
    'email.notifications.followedNewWork.cta': 'Vaata'
};