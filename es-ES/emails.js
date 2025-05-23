/**
 * @authors Jan Dvorak
 */
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
    'email.enrollAccount.messageHtml': '¡Nos gustaría invitarle a Universo Literario! Nos hemos adelantado y le hemos preparado una cuenta personal desde la que podrá acceder a todas las funciones del Universo Literario. ¡Únase a nosotros para crear la próxima generación de escritura y lectura creativas!',
    'email.enrollAccount.button': 'Accede a tu cuenta',
    'email.enrollAccount.signature': 'Le esperamos, equipo de<br />Universo Literario',
    // Reset password
    'email.resetPassword.messageHtml': 'Hemos recibido una solicitud para restablecer la contraseña de su cuenta. Por favor, haga clic en el botón de abajo para continuar con el proceso. Si no ha realizado esta solicitud, puede ignorar este correo electrónico, pero puede ser un buen momento para revisar su configuración de seguridad.',
    'email.resetPassword.button': 'Restablecer contraseña',
    // E-mail verification
    'email.verifyEmail.messageHtml': '¡Nos alegramos de tenerle a bordo! Por favor, haga clic en el botón de abajo para verificar esta dirección de correo electrónico.',
    'email.verifyEmail.button': 'Verificar dirección de e-mail',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'Tu cuenta ha subido de categoría',
    'email.adminUpgrade.message': `Hemos mejorado tu cuenta a {plan, select,
    explorer {explorador}
    adventurer {aventurero}
    storyteller {cuentacuentos}
    other {}
  } para los próximos {days} días.\n\nQue lo disfrutes,\nequipo de Literary Universe`,
    'email.adminUpgrade.messageHtml': `Hemos mejorado tu cuenta a {plan, select,
    explorer {explorador}
    adventurer {aventurero}
    storyteller {cuentacuentos}
    other {}
  } para los próximos {days} días. ¡Que lo disfrutes!`,
    'email.verification': 'Verificación de e-mail',
    'email.verifying': 'Verificando tu e-mail. Esto solo llevará un momento...',
    'email.verified': '¡Buenas noticias! ¡Tu correo electrónico se ha verificado!'
};