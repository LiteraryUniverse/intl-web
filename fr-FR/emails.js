/**
 * @authors Jan Dvorak
 */
/* eslint-disable max-len */
export default {
    'email.enrollAccount.subject': 'Invitation à l\'Univers Littéraire pour {username}',
    'email.enrollAccount.message': `Bonjour {username}\n\n
    Nous avons le plaisir de vous inviter sur L'Univers Littéraire ! Nous avons créé un compte personnel spécial pour vous où vous pouvez accéder à toutes les fonctionnalités de L'Univers Littéraire ! Rejoignez-nous pour créer la prochaine génération d'outils d'écriture et de lecture créative !
    Pour activer votre compte, il vous suffit de cliquer sur le lien ci-dessous :\n\n{url}`,
    'email.resetPassword.subject': 'Réinitialisation du mot de passe de l\'Univers Littéraire',
    'email.resetPassword.message': `Bonjour {username}!\n\n Nous avons reçu une demande de réinitialisation du mot de passe de votre compte.
        Veuillez suivre le lien ci-dessous pour réinitialiser votre mot de passe :\n\n{url}`,
    'email.verifyEmail.subject': 'Vérification de l\'e-mail de L\'Univers Littéraire',
    'email.verifyEmail.message': 'Bonjour {username}!\n\n Veuillez vérifier votre adresse e-mail en cliquant sur le lien ci-dessous :\n\n{url}',
    // New html email keys
    'email.salutation': 'Bonjour {username},',
    'email.welcome': 'Bienvenue dans L\'Univers Littéraire !',
    'email.signature': 'Sincèrement,<br />L\'équipe de L\'Univers Littéraire',
    // Enrollment
    'email.enrollAccount.welcome': 'Bienvenue à bord',
    'email.enrollAccount.messageHtml': 'Nous aimerions vous inviter sur L\'Univers Littéraire ! Nous avons préparé pour vous un compte personnel où vous pourrez accéder à toutes les fonctionnalités de L\'Univers Littéraire ! Rejoignez-nous pour créer la prochaine génération d\'écriture et de lecture créatives !',
    'email.enrollAccount.button': 'Accéder à votre compte',
    'email.enrollAccount.signature': 'Nous nous réjouissons de vous voir,<br />L\'équipe de l\'Univers Littéraire',
    // Reset password
    'email.resetPassword.messageHtml': 'Nous avons reçu une demande de réinitialisation du mot de passe de votre compte. Veuillez cliquer sur le bouton ci-dessous pour poursuivre la procédure. Si vous n\'avez pas fait cette demande, vous pouvez ignorer cet email, mais c\'est peut-être le moment de revoir vos paramètres de sécurité.',
    'email.resetPassword.button': 'Réinitialiser le mot de passe',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'Nous sommes heureux de vous compter parmi nous ! Veuillez cliquer sur le bouton ci-dessous pour vérifier cette adresse email.',
    'email.verifyEmail.button': 'Vérifier cette adresse email',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Votre compte a été mis à jour',
    'email.adminUpgrade.message': `Nous avons mis à jour votre compte au niveau {plan, select,
    explorer {Explorateur}
    adventurer {Aventurier}
    storyteller {Compteur}
    other {}
  } pour les prochains {days} jours.\n\nProfitez,\nl'équipe de l'Univers Littéraire`,
    'email.adminUpgrade.messageHtml': `Nous avons mis à jour votre compte au niveau {plan, select,
    explorer {Explorateur}
    adventurer {Aventurier}
    storyteller {Compteur}
    other {}
  } pour les prochains {days} jours. Profitez !`,
    'email.verification': 'Vérification de l\'email',
    'email.verifying': 'Vérification de votre email. Cela ne prendra qu\'un instant...',
    'email.verified': 'Bonnes nouvelles ! Votre email a été vérifié !'
};    /* eslint-enable max-len */