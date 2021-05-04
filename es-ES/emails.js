/**
 * @authors Jan Dvorak
 */
/* eslint-disable max-len */
export default {
    'email.enrollAccount.subject': 'Invitación a Literary Universe para {username}',
    'email.enrollAccount.message': `Hola {username}\n\n
    ¡Nos gustaría invitarte a Literary Universe! ¡Hemos creado una cuenta personal especial para ti en la que puedes acceder a todas las funciones de Literary Universe! ¡Únete a nosotros para crear la generación futura de herramientas de escritura y lectura creativas!
    Para activar tu cuenta, haz clic en en siguiente enlace: \n\n{url}`,
    'email.resetPassword.subject': 'Restablecer contraseña para Literary Universe',
    'email.resetPassword.message': `Hola  {username}!\n\n Hemos recibido una solicitud para restablecer la contraseña para tu cuenta.
        Por favor, continúa al siguiente enlace para restablecer la contraseña:\n\n{url}`,
    'email.verifyEmail.subject': 'Verificación de e-mail para Literary Universe',
    'email.verifyEmail.message': '¡Hola {username}!\n\n Por favor, verifica tu dirección de correo electrónico haciendo clic en el siguiente enlace:\n\n{url}',
    // New html email keys
    'email.salutation': 'Hola {username},',
    'email.welcome': '¡Bienvenido a Literary Universe!',
    'email.signature': 'Atentamente,<br />el equipo de Literary Universe',
    // Enrollment
    'email.enrollAccount.welcome': 'Bienvenido a bordo',
    'email.enrollAccount.messageHtml': '¡Nos gustaría invitarte a Literary Universe! ¡Te hemos preparado una cuenta personal para ti en la que puedes acceder a todas las funciones de Literary Universe! ¡Únete a nosotros para crear la generación futura de lectura y escritura creativas!',
    'email.enrollAccount.button': 'Accede a tu cuenta',
    'email.enrollAccount.signature': 'Estamos deseando verte,<br />equipo de Literary Universe',
    // Reset password
    'email.resetPassword.messageHtml': 'Hemos recibido una solicitud para restablecer la contraseña de tu cuenta. Por favor, haz clic en el botón de abajo para continuar con el procedimiento. Si no lo has solicitado ignora este mensaje, aunque te convendría revisar tu configuración de seguridad.',
    'email.resetPassword.button': 'Restablecer contraseña',
    // E-mail verification
    'email.verifyEmail.messageHtml': '¡Nos complace tenerte a bordo! Por favor, haz clic en el botón de abajo para verificar tu dirección de e-mail.',
    'email.verifyEmail.button': 'Verificar dirección de e-mail',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Tu cuenta ha subido de categoría',
    'email.adminUpgrade.message': `Hemos mejorado tu cuenta a {plan, select,
    explorador {Explorer}
    aventurero {Adventurer}
    cuentacuentos {Storyteller}
  } para los próximos {days} días.\n\nQue lo disfrutes,\nequipo de Literary Universe`,
    'email.adminUpgrade.messageHtml': `Hemos mejorado tu cuenta a {plan, select,
    explorador {Explorer}
    aventurero {Adventurer}
    cuentacuentos {Storyteller}
  } para los próximos {days} días. ¡Que lo disfrutes!`,
    'email.verification': 'Verificación de e-mail',
    'email.verifying': 'Verificando tu e-mail. Esto sólo llevará un momento...',
    'email.verified': '¡Buenas noticias! ¡Tu correo electrónico se ha verificado!'
};    /* eslint-enable max-len */