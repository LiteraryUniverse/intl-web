export default {
    'blog.noneMsg': `Δεν έχετε αυτήν τη στιγμή {type, select,
    organization {κανένα blog}
    universe {ένα blog για το σύμπαν σας}
    user {ένα blog}
    other {}
  }.`,
    'blog.create': 'Δημιουργία νέου blog',
    'blog.settings': `{type, select,
    org {Blog}
    universe {Σελίδα Συμπαντος}
    user {Blog}
    other {}
  } ρυθμίσεις`,
    'blog.description': 'Εισαγωγή blog',
    'blog.theme': 'Θέμα',
    'blog.theme.info': 'Ρυθμίζοντας το θέμα, θα μπορείτε να αλλάξετε την εμφάνιση της σελίδας. Αυτή η λειτουργία δεν είναι έτοιμη αυτή τη στιγμή.',
    'blog.posts.total': `{total, plural,
    zero {Δεν υπάρχουν αναρτήσεις}
    one {μια ανάρτηση}
    other {# αναρτήσεις}
  } σε αυτό το blog.`,
    'blog.post.create': 'Write a new post',
    'blog.post.update': 'Επεξεργασία {title}',
    'blog.post.text': 'Κείμενο ανάρτησης',
    'common.slug': 'Φιλική προς το SEO διεύθυνση',
    'blog.slug.explained': 'Δημιουργήστε ένα όμορφο URL για τη δημοσίευση. Αποφύγετε τη χρήση ειδικών χαρακτήρων εκτός από το "-".',
    'blog.publicView': 'Δημόσια προβολή',
    'blog.post.notfound': 'Η ανάρτηση blog δεν βρέθηκε',
    'blog.lists.works': `{type, select,
    universes {Σύμπαντα}
    stories {Ιστορίες}
    fanfiction {Έργο fan fiction}
    other {}
  }`,
    'blog.social.sameAsMain': `Οι κοινωνικοί σύνδεσμοι είναι οι ίδιοι με αυτούς που έχουν οριστεί στις ρυθμίσεις του οργανισμού {type, select,
    organization {και στο προφίλ χρήστη}
    user {}
    other {}
  }`,
    'blog.social.website': 'Επίσημη ιστοσελίδα',
    'blog.settings.universeSettings': 'Τα blogs των συμπαντικών ιστοσελίδων ενσωματώνονται στις σελίδες συμπαντικών ιστοσελίδων με τις βασικές τους ρυθμίσεις να προέρχονται από τις ρυθμίσεις του σύμπαντος.',
    'blog.settings.organizationSettings': 'Τα blogs του οργανισμού ενσωματώνονται στις σελίδες του οργανισμού.',
    'blogs.lu': 'Επίσημα blogs Λογοτεχνικού Συμπαντος',
    'blogs.featured': 'Προτεινόμενα blogs',
    'blogs.new': 'Νεότερα blogs',
    'blogs.title': 'Blogs του Λογοτεχνικού Συμπαντος',
    'blogs.description': 'Κατάλογος blogs στην πλατφόρμα του Λογοτεχνικού Συμπαντος.',
    'blogs.visit': 'Επίσκεψη στο blog',
    'blog.settingsAria': 'Κατηγορίες ρυθμίσεων για το blog',
    'blog.settings.blog': 'Ιστολόγιο',
    'blog.settings.forum': 'Φόρουμ',
    'blog.post.introText': 'Εισαγωγικό παράγραφο',
    'blog.post.writtenBy': 'Γραμμένο από τον {usernameDisplay}',
    'blog.post.writtenByFor': 'Γραμμένο από τον {usernameDisplay} για τον {publicationName}',
    'blog.posts.recent': 'Πρόσφατες αναρτήσεις',
    'blog.statsPage': 'Στατιστικά ιστολογίου',
    'blog.view': 'Προβολή ιστολογίου',
    'blog.settings.qa': 'ΕΡΩΤΉΣΕΙΣ ΚΑΙ ΑΠΑΝΤΉΣΕΙΣ',
    // Q&A Settings
    'blog.qa.settings.title': 'Ρυθμίσεις Q&A',
    'blog.qa.settings.notSupported': 'Οι ερωτήσεις και απαντήσεις υποστηρίζονται επί του παρόντος μόνο για τα ιστολόγια χρηστών και σύμπαντος.',
    'blog.qa.settings.enable': 'Ενεργοποίηση ερωτήσεων και απαντήσεων',
    'blog.qa.settings.enableQA': 'Επιτρέψτε στους αναγνώστες να κάνουν ερωτήσεις',
    'blog.qa.settings.enableQA.help': 'Όταν είναι ενεργοποιημένο, οι αναγνώστες μπορούν να υποβάλλουν ερωτήσεις στις οποίες μπορείτε να απαντήσετε δημόσια ή ιδιωτικά.',
    'blog.qa.settings.whoCanAsk': 'Ποιος μπορεί να κάνει ερωτήσεις',
    'blog.qa.settings.askersAllowed.all': 'Όλοι οι εγγεγραμμένοι χρήστες',
    'blog.qa.settings.askersAllowed.all.help': 'Οι δωρεάν χρήστες λαμβάνουν 1 ερώτηση ανά ιστολόγιο κατά τη διάρκεια της ζωής τους. Οι συνδρομητές LU λαμβάνουν 1 ερώτηση ανά έτος (2 κατά το πρώτο έτος).',
    'blog.qa.settings.askersAllowed.luOnly': 'Μόνο για συνδρομητές LU',
    'blog.qa.settings.askersAllowed.luOnly.help': 'Μόνο χρήστες με ενεργή συνδρομή LU μπορούν να υποβάλλουν ερωτήσεις.',
    'blog.qa.settings.askersAllowed.fanClubOnly': 'Μόνο για μέλη του Fan Club',
    'blog.qa.settings.askersAllowed.fanClubOnly.help': 'Μόνο τα μέλη του Fan Club σας μπορούν να κάνουν ερωτήσεις (τα όρια καθορίζονται ανά βαθμίδα).',
    'blog.qa.settings.askersAllowed.luOrFanClub': 'Συνδρομητές LU ή μέλη Fan Club',
    'blog.qa.settings.askersAllowed.luOrFanClub.help': 'Οι χρήστες με συνδρομή στο LU ή με συνδρομή στο Fan Club μπορούν να κάνουν ερωτήσεις.',
    'blog.qa.settings.archive': 'Ρυθμίσεις αρχείου',
    'blog.qa.settings.showArchiveWhenDisabled': 'Εμφάνιση απαντημένων ερωτήσεων ακόμη και όταν οι ερωτήσεις και απαντήσεις είναι απενεργοποιημένες',
    'blog.qa.settings.showArchiveWhenDisabled.help': 'Όταν είναι απενεργοποιημένη, οι αναγνώστες δεν θα μπορούν να θέτουν νέες ερωτήσεις, αλλά θα μπορούν να βλέπουν τις ερωτήσεις που έχουν απαντηθεί προηγουμένως.',
    'blog.qa.settings.saved': 'Οι ρυθμίσεις Q&A αποθηκεύτηκαν με επιτυχία',
    // Q&A Admin
    'blog.qa.admin.title': 'Διαχείριση ερωτήσεων και απαντήσεων',
    'blog.qa.admin.tab.pending': 'Εκκρεμεί',
    'blog.qa.admin.tab.answered': 'Απάντηση',
    'blog.qa.admin.tab.ignored': 'Αγνοείται',
    'blog.qa.admin.empty.pending': 'Δεν υπάρχουν εκκρεμείς ερωτήσεις.',
    'blog.qa.admin.empty.answered': 'Δεν υπάρχουν απαντημένες ερωτήσεις ακόμα.',
    'blog.qa.admin.empty.ignored': 'Δεν αγνοούνται ερωτήσεις.',
    'blog.qa.admin.answerQuestion': 'Ερώτηση απάντησης',
    'blog.qa.admin.visibility.public': 'Δημόσια (όλοι μπορούν να δουν)',
    'blog.qa.admin.visibility.private': 'Ιδιωτικό (μόνο ο ερωτών μπορεί να δει)',
    'blog.qa.admin.submitAnswer': 'Υποβολή απάντησης',
    'blog.qa.admin.answer': 'Απάντηση',
    'blog.qa.admin.ignore': 'Αγνοήστε το',
    'blog.qa.admin.confirmIgnore': 'Είστε σίγουρος ότι θέλετε να αγνοήσετε αυτή την ερώτηση;',
    'blog.qa.admin.pin': 'Καρφίτσα',
    'blog.qa.admin.unpin': 'Αποσυνδέστε το',
    'blog.qa.admin.yourAnswer': 'Η απάντησή σας',
    // Q&A Public
    'blog.qa.title': 'Ερωτήσεις',
    'blog.qa.askQuestion': 'Ρωτήστε μια ερώτηση',
    'blog.qa.submitQuestion': 'Υποβολή ερώτησης',
    'blog.qa.tab.allAnswered': 'Όλα απαντήθηκαν',
    'blog.qa.tab.myQuestions': 'Οι ερωτήσεις μου',
    'blog.qa.empty.all': 'Δεν υπάρχουν απαντημένες ερωτήσεις ακόμα.',
    'blog.qa.empty.mine': 'Δεν έχετε κάνει καμία ερώτηση εδώ ακόμα.',
    'blog.qa.status.pending': 'Εκκρεμεί',
    'blog.qa.status.ignored': 'Αγνοείται',
    'blog.qa.status.private': 'Ιδιωτική απάντηση',
    'blog.qa.status.public': 'Δημόσια απάντηση',
    'blog.qa.role.reader': 'Αναγνώστης',
    'blog.qa.role.author': 'Συγγραφέας',
    'blog.qa.pinned': 'Καρφιτσωμένο',
    'blog.qa.answeredAgo': 'Απάντηση {time}',
    'blog.qa.loadMore': 'Φορτώστε περισσότερα',
    'blog.qa.warn.luRequired': 'Μόνο οι συνδρομητές του LU μπορούν να κάνουν ερωτήσεις εδώ.',
    'blog.qa.warn.fanClubRequired': 'Μόνο τα μέλη του Fan Club μπορούν να κάνουν ερωτήσεις εδώ.',
    'blog.qa.warn.luOrFanRequired': 'Μόνο οι συνδρομητές του LU ή τα μέλη του Fan Club μπορούν να κάνουν ερωτήσεις εδώ.'
};