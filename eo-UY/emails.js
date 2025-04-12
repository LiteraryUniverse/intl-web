/**
 * @authors Jan Dvorak
 */
export default {
    'email.enrollAccount.subject': 'Invitation to Literary Universe for {username}',
    'email.enrollAccount.message': `Hello {username}\n\n
    We would like to invite you to Literary Universe! We have created a special personal account for you where you can access all features of Literary Universe! Please join us in creating the next generation of creative writing and reading tools!
    To activate your account, simply click the link below:\n\n{url}`,
    'email.resetPassword.subject': 'Literary Universe reset password',
    'email.resetPassword.message': `Hello {username}!\n\n We have received a request to reset your password for your account.
        Please follow the link bellow to reset your password:\n\n{url}`,
    'email.verifyEmail.subject': 'Literary Universe e-mail verification',
    'email.verifyEmail.message': 'Hello {username}!\n\n Please verify your e-mail address by clicking on the link below:\n\n{url}',
    // New html email keys
    'email.salutation': 'Hello {username},',
    'email.welcome': 'Welcome to Literary Universe!',
    'email.signature': 'Sincerely,<br />Literary Universe team',
    // Enrollment
    'email.enrollAccount.welcome': 'Welcome aboard',
    'email.enrollAccount.messageHtml': 'We would like to invite you to Literary Universe! We went ahead and prepared a personal account for you where you can access all features of Literary Universe. Please join us in creating the next generation of creative writing and reading!',
    'email.enrollAccount.button': 'Access your account',
    'email.enrollAccount.signature': 'We are looking forward to seeing you,<br />Literary Universe team',
    // Reset password
    'email.resetPassword.messageHtml': 'We have received a request to reset your password for your account. Please click on the button below to continue the process. If you haven\'t made this request, you can ignore this e-mail, but it might be a good time to review your security settings.',
    'email.resetPassword.button': 'Rekomenci pasvorton',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'We are happy to have you on board! Please click the button below to verify this e-mail address.',
    'email.verifyEmail.button': 'Verifi ĉi tiun retpoŝtan adreson',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Via konto estis plibonigita',
    'email.adminUpgrade.message': `Ni plibonigis vian konton al {plan, select,
    explorer {Esploristo}
    adventurer {Aventuristo}
    storyteller {Rakontisto}
    other {}
  } rango por la venontaj {days} tagoj.\n\nĜuu,\nteamo de Litera Universo`,
    'email.adminUpgrade.messageHtml': `Ni plibonigis vian konton al {plan, select,
    explorer {Esploristo}
    adventurer {Aventuristo}
    storyteller {Rakontisto}
    other {}
  } rango por la venontaj {days} tagoj. Ĝuu!`,
    'email.verification': 'Verifo de retpoŝto',
    'email.verifying': 'Ni verifas vian retpoŝton. Tio nur iom daŭros...',
    'email.verified': 'Granda novaĵo! Via retpoŝto estis verifita!'
};