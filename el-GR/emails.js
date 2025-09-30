/**
 * @authors Jan Dvorak
 */
export default {
    'email.enrollAccount.subject': 'Πρόσκληση στο Λογοτεχνικό Σύμπαν για {username}',
    'email.enrollAccount.message': `Γεια σας {username}\n\n
    Θα θέλαμε να σας προσκαλέσουμε στο Λογοτεχνικό Σύμπαν! Έχουμε δημιουργήσει ένα ειδικό προσωπικό λογαριασμό για εσάς, όπου μπορείτε να έχετε πρόσβαση σε όλες τις δυνατότητες του Λογοτεχνικού Σύμπαντος! Παρακαλούμε ελάτε να μας συνοδεύσετε στη δημιουργία της επόμενης γενιάς εργαλείων δημιουργικής γραφής και ανάγνωσης!
    Για να ενεργοποιήσετε τον λογαριασμό σας, απλά κάντε κλικ στον παρακάτω σύνδεσμο:\n\n{url}`,
    'email.resetPassword.subject': 'Επαναφορά κωδικού πρόσβασης Λογοτεχνικού Σύμπαντος',
    'email.resetPassword.message': `Γεια σας {username}!\n\n Λάβαμε μια αίτηση για επαναφορά του κωδικού πρόσβασης για τον λογαριασμό σας.
        Παρακαλούμε ακολουθήστε τον παρακάτω σύνδεσμο για να επαναφέρετε τον κωδικό πρόσβασής σας:\n\n{url}`,
    'email.verifyEmail.subject': 'Επαλήθευση email Λογοτεχνικού Σύμπαντος',
    'email.verifyEmail.message': 'Γεια σας {username}!\n\n Παρακαλούμε επαληθεύστε τη διεύθυνση email σας κάνοντας κλικ στον παρακάτω σύνδεσμο:\n\n{url}',
    // New html email keys
    'email.salutation': 'Γεια σας {username},',
    'email.welcome': 'Καλωσορίσατε στο Λογοτεχνικό Σύμπαν!',
    'email.signature': 'Ειλικρινά<br>, ομάδα Literary Universe</br>',
    'email.footer.settingsHtml': 'Μπορείτε να αλλάξετε τις ρυθμίσεις ηλεκτρονικού ταχυδρομείου στις <link>ρυθμίσεις του λογαριασμού</link> σας.',
    // Enrollment
    'email.enrollAccount.welcome': 'Καλωσορίσατε στο σκάφος',
    'email.enrollAccount.messageHtml': 'Θα θέλαμε να σας προσκαλέσουμε στο Λογοτεχνικό Σύμπαν! Προχωρήσαμε και ετοιμάσαμε έναν προσωπικό λογαριασμό για εσάς όπου μπορείτε να έχετε πρόσβαση σε όλες τις λειτουργίες του Literary Universe. Παρακαλούμε ελάτε μαζί μας για να δημιουργήσουμε την επόμενη γενιά της δημιουργικής γραφής και ανάγνωσης!',
    'email.enrollAccount.button': 'Πρόσβαση στον λογαριασμό σας',
    'email.enrollAccount.signature': 'Ανυπομονούμε να σας δούμε<br>, ομάδα Literary Universe</br>',
    // Reset password
    'email.resetPassword.messageHtml': 'Λάβαμε ένα αίτημα για επαναφορά του κωδικού πρόσβασης για το λογαριασμό σας. Παρακαλούμε κάντε κλικ στο παρακάτω κουμπί για να συνεχίσετε τη διαδικασία. Εάν δεν έχετε υποβάλει αυτό το αίτημα, μπορείτε να αγνοήσετε αυτό το μήνυμα ηλεκτρονικού ταχυδρομείου, αλλά ίσως είναι μια καλή στιγμή να επανεξετάσετε τις ρυθμίσεις ασφαλείας σας.',
    'email.resetPassword.button': 'Επαναφορά κωδικού πρόσβασης',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Είμαστε ευτυχείς που σας έχουμε μαζί μας! Παρακαλώ κάντε κλικ στο παρακάτω κουμπί για να επαληθεύσετε αυτή τη διεύθυνση ηλεκτρονικού ταχυδρομείου.',
    'email.verifyEmail.button': 'Επιβεβαίωση αυτής της διεύθυνσης e-mail',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Ο λογαριασμός σας έχει αναβαθμιστεί',
    'email.adminUpgrade.message': `Αναβαθμίσαμε το λογαριασμό σας σε {plan, select,
    explorer {Εξερευνητής}
    adventurer {Περιηγητής}
    storyteller {Αφηγητής}
    other {~}
  } βαθμίδα για τις επόμενες {days} ημέρες.\n\nΚαλή διασκέδαση,\nομάδα του λογοτεχνικού σύμπαντος`,
    'email.adminUpgrade.messageHtml': `Αναβαθμίσαμε το λογαριασμό σας σε {plan, select,
    explorer {Εξερευνητής}
    adventurer {Περιηγητής}
    storyteller {Αφηγητής}
    other {~}
  } βαθμίδα για τις επόμενες {days, number} ημέρες. Απολαύστε το!`,
    'email.verification': 'Επαλήθευση ηλεκτρονικού ταχυδρομείου',
    'email.verifying': 'Γίνεται επαλήθευση του ηλεκτρονικού ταχυδρομείου σας. Αυτό θα πάρει μόνο ένα λεπτό...',
    'email.verified': 'Εξαιρετικά νέα! Το ηλεκτρονικό ταχυδρομείο σας έχει επαληθευτεί!',
    // The Way (Author Level Up)
    'theWay.levelUp.emailSubject': 'Συγχαρητήρια! Έχετε φτάσει στο Επίπεδο Συγγραφέα {level, number} στο Λογοτεχνικό Σύμπαν!',
    'theWay.levelUp.emailTitle': 'Συγχαρητήρια! Έχετε φτάσει στο Επίπεδο Συγγραφέα {level, number}!',
    'theWay.levelUp.emailIntro': 'Η αφοσίωσή σας στη συγγραφική τέχνη ανταμείφθηκε!',
    'theWay.levelUp.emailGenre': 'Έχετε επιτύχει το επίπεδο {level, number} στο είδος {genre} .',
    'theWay.levelUp.emailContinue': 'Συνεχίστε το ταξίδι σας και ξεκλειδώστε περισσότερα επιτεύγματα στο The Way of the Author.',
    'theWay.levelUp.viewDashboard': 'Προβολή του ταμπλό σας',
    // Notifications - General content comment
    'email.notifications.contentComment.subject': 'Νέο σχόλιο για το περιεχόμενό σας',
    'email.notifications.contentComment.title': 'Νέο σχόλιο στο {contentType}',
    'email.notifications.contentComment.details': 'Τίτλος: {contentTitle} - Τίτλος: Από: {commenterName}',
    'email.notifications.contentComment.cta': 'Προβολή σχολίου',
    // Notifications - Beta reader comment
    'email.notifications.betaComment.subject': 'Νέα ανατροφοδότηση beta αναγνώστη',
    'email.notifications.betaComment.title': 'Νέα ανατροφοδότηση beta αναγνώστη',
    'email.notifications.betaComment.details': 'Ιστορία: {storyTitle}{chapter} - Από: {commenterName}',
    'email.notifications.betaComment.cta': 'Προβολή σχολίων',
    // Notifications - New message
    'email.notifications.newMessage.subject': 'Έχετε ένα νέο μήνυμα',
    'email.notifications.newMessage.title': 'Έχετε ένα νέο μήνυμα',
    'email.notifications.newMessage.details': 'Από: {senderName}',
    'email.notifications.newMessage.cta': 'Προβολή μηνύματος',
    // Notifications - Chapter published
    'email.notifications.chapterPublished.subject': 'Νέο κεφάλαιο που δημοσιεύθηκε',
    'email.notifications.chapterPublished.title': 'Νέο κεφάλαιο που δημοσιεύθηκε',
    'email.notifications.chapterPublished.details': 'Ιστορία: {storyTitle} - Ιστορία: Κεφάλαιο: {chapterTitle}{suffix}',
    'email.notifications.chapterPublished.cta': 'Ανοίξτε το κεφάλαιο',
    // Notifications - First story created
    'email.notifications.firstStory.subject': 'Η πρώτη σας ιστορία είναι εδώ!',
    'email.notifications.firstStory.title': 'Η πρώτη σας ιστορία είναι ζωντανή!',
    'email.notifications.firstStory.intro': 'Καταπληκτική αρχή! Συνεχίστε να γράφετε και να μεγαλώνετε τον κόσμο σας με χρήσιμες οδηγίες από τον Δρόμο του Συγγραφέα.',
    'email.notifications.firstStory.details': 'Ιστορία: {storyTitle}',
    'email.notifications.firstStory.ctaResources': 'Συνεχίστε στο Ο δρόμος του συγγραφέα',
    'email.notifications.firstStory.ctaStory': 'Ανοίξτε την ιστορία σας',
    // Notifications - First story published (with level 1 achievement)
    'email.notifications.firstStoryPublished.subject': '🎉 Συγχαρητήρια! Η πρώτη σας ιστορία δημοσιεύτηκε και φτάσατε στο Επίπεδο Συγγραφέα 1!',
    'email.notifications.firstStoryPublished.title': '🎉 Το ταξίδι σας αρχίζει!',
    'email.notifications.firstStoryPublished.intro': 'Συγχαρητήρια για τη δημοσίευση της πρώτης σας ιστορίας! Πρόκειται για ένα σημαντικό ορόσημο στο δημιουργικό σας ταξίδι.',
    'email.notifications.firstStoryPublished.levelAchievement': '🌟 Έχετε φτάσει στο Επίπεδο Συγγραφέα 1 στον Δρόμο του Συγγραφέα! Αυτή είναι μόνο η αρχή μιας απίστευτης περιπέτειας στην αφήγηση ιστοριών.',
    'email.notifications.firstStoryPublished.encouragement': 'Κάθε μεγάλος συγγραφέας ξεκίνησε με το πρώτο του δημοσιευμένο έργο. Συνεχίστε να γράφετε, συνεχίστε να αναπτύσσεστε και αφήστε τη δημιουργικότητά σας να ανθίσει. Η κοινότητα του Λογοτεχνικού Σύμπαντος είναι εδώ για να σας υποστηρίξει σε κάθε σας βήμα.',
    'email.notifications.firstStoryPublished.ctaTheWay': 'Εξερευνήστε τον Δρόμο του Συγγραφέα',
    'email.notifications.firstStoryPublished.ctaStory': 'Δείτε τη δημοσιευμένη ιστορία σας',
    // Notifications - First universe created
    'email.notifications.firstUniverse.subject': 'Συγχαρητήρια για το πρώτο σας σύμπαν!',
    'email.notifications.firstUniverse.title': 'Συγχαρητήρια για τη δημιουργία του πρώτου σας σύμπαντος!',
    'email.notifications.firstUniverse.intro': 'Το ταξίδι σας στην οικοδόμηση του κόσμου αρχίζει. Ακολουθούν ορισμένοι πόροι που θα σας βοηθήσουν να κάνετε τα επόμενα βήματα.',
    'email.notifications.firstUniverse.details': 'Σύμπαν: {universeName}',
    'email.notifications.firstUniverse.ctaResources': 'Εξερευνήστε τον Δρόμο του Συγγραφέα',
    'email.notifications.firstUniverse.ctaUniverse': 'Ανοίξτε το σύμπαν σας',
    // Notifications - First chapter published for a story
    'email.notifications.firstChapterPublished.subject': 'Το πρώτο σας κεφάλαιο δημοσιεύτηκε!',
    'email.notifications.firstChapterPublished.title': 'Το πρώτο κεφάλαιο της ιστορίας σας δημοσιεύτηκε!',
    'email.notifications.firstChapterPublished.intro': 'Μοιραστείτε τη δουλειά σας, συγκεντρώστε ανατροφοδότηση και διατηρήστε τη δυναμική σας.',
    'email.notifications.firstChapterPublished.details': 'Ιστορία: {storyTitle} - Ιστορία: Κεφάλαιο: {chapterTitle}',
    'email.notifications.firstChapterPublished.ctaChapter': 'Ανοίξτε το κεφάλαιο',
    'email.notifications.firstChapterPublished.ctaStory': 'Δείτε την ιστορία',
    // Notifications - Story finished
    'email.notifications.storyFinished.subject': 'Συγχαρητήρια για την ολοκλήρωση της ιστορίας σας!',
    'email.notifications.storyFinished.title': 'Τα καταφέρατε - η ιστορία σας τελείωσε!',
    'email.notifications.storyFinished.intro': 'Γιορτάστε αυτό το ορόσημο! Σκεφτείτε να δημοσιεύσετε, να μοιραστείτε ή να υποβάλετε την ιστορία σας για να φτάσετε σε περισσότερους αναγνώστες.',
    'email.notifications.storyFinished.details': 'Ιστορία: {storyTitle}',
    'email.notifications.storyFinished.cta': 'Δείτε την ιστορία σας',
    // Notifications - Fan club new subscriber
    'email.notifications.newFanSubscriber.subject': 'Νέος συνδρομητής του fan club',
    'email.notifications.newFanSubscriber.title': 'Έχετε έναν νέο συνδρομητή στο fan club!',
    'email.notifications.newFanSubscriber.details': 'Συνδρομητής: {subscriberName}',
    'email.notifications.newFanSubscriber.cta': 'Προβολή fan club',
    // Notifications - Fan club subscription ended
    'email.notifications.fanUnsubscribed.subject': 'Ένα μέλος έφυγε από το fan club σας',
    'email.notifications.fanUnsubscribed.title': 'Ένα μέλος έφυγε από το fan club σας',
    'email.notifications.fanUnsubscribed.intro': 'Θέλαμε να σας ενημερώσουμε για μια πρόσφατη αλλαγή. Σκεφτείτε να μοιραστείτε ενημερώσεις ή αποκλειστικό περιεχόμενο για να ενισχύσετε τη δέσμευση.',
    'email.notifications.fanUnsubscribed.details': 'Πρώην μέλος: {name}',
    'email.notifications.fanUnsubscribed.cta': 'Ανοιχτό fan club',
    // Notifications - Friend request
    'email.notifications.friendRequest.subject': 'Νέο αίτημα φιλίας',
    'email.notifications.friendRequest.title': 'Νέο αίτημα φιλίας',
    'email.notifications.friendRequest.details': 'Από: {requesterName}',
    'email.notifications.friendRequest.cta': 'Αίτημα αναθεώρησης',
    // Notifications - Collaboration invitation
    'email.notifications.collabInvite.subject': 'Πρόσκληση συνεργασίας',
    'email.notifications.collabInvite.title': 'Έχετε πρόσκληση συνεργασίας',
    'email.notifications.collabInvite.details': 'Εισαγωγέας: {inviterName} - Ρόλος: {role} - Στόχος: {targetType} - {targetTitle}',
    'email.notifications.collabInvite.cta': 'Πρόσκληση αναθεώρησης',
    // Notifications - Organization invitation
    'email.notifications.orgInvite.subject': 'Πρόσκληση για ένταξη σε έναν οργανισμό',
    'email.notifications.orgInvite.title': 'Σας προσκαλούμε να συμμετάσχετε στο {orgName}',
    'email.notifications.orgInvite.details': 'Inviter: {inviterName}',
    'email.notifications.orgInvite.cta': 'Πρόσκληση αναθεώρησης',
    // Notifications - Daily digest
    'email.notifications.dailyDigest.subject': 'Οι καθημερινές σας ενημερώσεις',
    'email.notifications.dailyDigest.title': 'Οι καθημερινές σας ενημερώσεις',
    'email.notifications.dailyDigest.intro': 'Να τι συνέβη σήμερα.',
    'email.notifications.dailyDigest.cta': 'Δείτε όλες τις ενημερώσεις',
    'email.notifications.dailyDigest.empty': 'Καμία ενημέρωση σήμερα.',
    // Notifications - Followed author posted a new blog
    'email.notifications.followedBlogPost.subject': 'Νέα ανάρτηση στο blog ενός συγγραφέα που ακολουθείτε',
    'email.notifications.followedBlogPost.title': '{authorName} δημοσίευσε ένα νέο blog',
    'email.notifications.followedBlogPost.details': 'Τίτλος: {postTitle}',
    'email.notifications.followedBlogPost.cta': 'Διαβάστε τη θέση',
    // Notifications - Followed author published new work
    'email.notifications.followedNewWork.subject': 'Νέο έργο από έναν συγγραφέα που ακολουθείτε',
    'email.notifications.followedNewWork.title': '{authorName} δημοσίευσε ένα νέο {workType}',
    'email.notifications.followedNewWork.details': 'Τίτλος: {title}',
    'email.notifications.followedNewWork.cta': 'Προβολή',
    // Story notification emails
    'email.story.newComment.subject': 'Νέο σχόλιο στο "{storyTitle}"',
    'email.story.newComment.body': '{commenterName} άφησε ένα σχόλιο στην ιστορία σας "{storyTitle}": {commentText}',
    'email.story.betaComment.subject': 'Νέα ανατροφοδότηση beta για το "{storyTitle}"',
    'email.story.betaComment.body': '{commenterName} έδωσε πληροφορίες για το "{storyTitle}": {commentText}',
    'email.story.collaboratorAccepted.subject': 'Νέο μέλος της ομάδας για το "{storyTitle}"',
    'email.story.collaboratorAccepted.body': '{collaboratorName} αποδέχτηκε την πρόσκλησή σας να συνεργαστεί στο "{storyTitle}" ως {role}.',
    'email.story.milestone.subject': 'Συγχαρητήρια! Επίτευξη ορόσημου στο "{storyTitle}"',
    'email.story.milestone.body': 'Υπέροχα νέα! Το κεφάλαιο "{chapterTitle}" από "{storyTitle}" έφτασε στο {count} {milestone}. Συνεχίστε τη σπουδαία δουλειά!',
    'email.story.betaRevision.subject': 'Νέα beta αναθεώρηση διαθέσιμη: "{chapterTitle}"',
    'email.story.betaRevision.body': '{authorName} δημοσίευσε μια νέα beta αναθεώρηση του "{chapterTitle}" από το "{storyTitle}". Τα σχόλιά σας θα εκτιμηθούν ιδιαίτερα!',
    'email.story.newChapter.subject': 'Νέο κεφάλαιο διαθέσιμο: "{storyTitle}"',
    'email.story.newChapter.body': '{authorName} δημοσίευσε ένα νέο κεφάλαιο του "{storyTitle}": "{chapterTitle}". Καλή ανάγνωση!',
    // Universe notification emails
    'email.universe.newStory.subject': 'Νέα ιστορία στο σύμπαν: "{storyTitle}"',
    'email.universe.newStory.body': '{authorName} πρόσθεσε μια νέα ιστορία "{storyTitle}" σε ένα σύμπαν που ακολουθείς. Ανακαλύψτε νέες περιπέτειες!',
    'email.universe.collaboratorChange.subject': 'Ενημέρωση για τη συνεργασία στο σύμπαν',
    'email.universe.collaboratorChange.body': 'Υπήρξε αλλαγή στην ομάδα συνεργασίας για ένα σύμπαν στο οποίο συμμετέχετε.',
    'email.universe.update.subject': 'Σύμπαν ενημερωμένο',
    'email.universe.update.body': 'Ένα σύμπαν που ακολουθείτε έχει ενημερωθεί με νέο περιεχόμενο.',
    'email.universe.comment.subject': 'Νέο σχόλιο για το σύμπαν',
    'email.universe.comment.body': '{commenterName} σχολίασε ένα σύμπαν που ακολουθείτε: "{commentText}"',
    // Blog notification emails
    'email.blog.newPost.subject': 'Νέα ανάρτηση στο ιστολόγιο: "{postTitle}"',
    'email.blog.newPost.body': '{authorName} δημοσίευσε μια νέα ανάρτηση στο ιστολόγιο "{postTitle}" σε ένα ιστολόγιο που ακολουθείτε.',
    'email.blog.comment.subject': 'Νέο σχόλιο σε ανάρτηση στο blog: "{postTitle}"',
    'email.blog.comment.body': '{commenterName} σχολίασε την ανάρτηση στο blog "{postTitle}": "{commentText}"',
    'email.blog.update.subject': 'Ενημέρωση ιστολογίου',
    'email.blog.update.body': 'Ένα ιστολόγιο που ακολουθείτε έχει ενημερωθεί.',
    // General comment notification emails
    'email.comment.general.subject': 'Νέο σχόλιο στο "{contentTitle}"',
    'email.comment.general.body': '{commenterName} commented on "{contentTitle}": "{commentText}"',
    'email.comment.reply.subject': 'Απάντηση στο σχόλιό σας',
    'email.comment.reply.body': '{replierName} απάντησε στο σχόλιό σας στο "{contentTitle}": "{replyText}"',
    'email.comment.like.subject': 'Το σχόλιό σας άρεσε',
    'email.comment.like.body': '{likerName} μου άρεσε το σχόλιό σας. Συνεχίστε να ασχολείστε!',
    // Content-specific comment notification emails
    'email.comment.fanArt.subject': 'Νέο σχόλιο για την τέχνη των θαυμαστών: "{contentTitle}"',
    'email.comment.fanArt.body': '{commenterName} σχολίασε το fan art σας "{contentTitle}": "{commentText}"',
    'email.comment.event.subject': 'Νέο σχόλιο για το γεγονός: "{contentTitle}"',
    'email.comment.event.body': '{commenterName} σχολίασε την εκδήλωση "{contentTitle}": "{commentText}"',
    'email.comment.revision.subject': 'Νέο σχόλιο σχετικά με την αναθεώρηση',
    'email.comment.revision.body': '{commenterName} σχολίασε την αναθεώρησή σας: "{commentText}"',
    'email.comment.feedback.subject': 'Νέο σχόλιο σχετικά με την ανατροφοδότηση',
    'email.comment.feedback.body': '{commenterName} σχολίασε το θέμα της ανατροφοδότησής σας: "{commentText}"',
    // Welcome email
    'email.welcome.subject': 'Καλώς ήρθατε στο Λογοτεχνικό Σύμπαν!'
};