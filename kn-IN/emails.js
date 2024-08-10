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
    'email.enrollAccount.messageHtml': 'We would like to invite you to Literary Universe! We went ahead and prepared a personal account for you where you can access all features of Literary Universe! Please join us in creating the next generation of creative writing and reading!',
    'email.enrollAccount.button': 'Access your account',
    'email.enrollAccount.signature': 'ನೀವು ಬರುವುದನ್ನು ನಿರೀಕ್ಷಿಸುತ್ತಿದ್ದೇವೆ,<br />ಸಾಹಿತ್ಯ ಬ್ರಹ್ಮಾಂಡ ತಂಡ',
    // Reset password
    'email.resetPassword.messageHtml': 'ನಿಮ್ಮ ಖಾತೆಗೆ ನಿಮ್ಮ ಪಾಸ್ವರ್ಡ್ ಮರುಹೊಂದಿಸಲು ಒಂದು ವಿನಂತಿ ಬಂದಿದೆ, ಈ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಮುಂದುವರಿಸಲು ದಯವಿಟ್ಟು ಕೆಳಗಿನ ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ. ಈ ವಿನಂತಿಯನ್ನು ನೀವು ಮಾಡಿಲ್ಲದಿದ್ದರೆ, ಈ ಇಮೇಲ್ ಅನದಿಕ್ಕು ಬಿಡಿಬಿಡಿಯಿರಲು ಸಮಯವಿದೆಯೇ ಎಂದು ನೋಡುವುದು ಒಳ್ಳೆಯದಿರಬಹುದು.',
    'email.resetPassword.button': 'ಪಾಸ್ವರ್ಡ್ ಮರುಹೊಂದಿಸಿ',
    // E-mail verification
    'email.verifyEmail.messageHtml': 'ನಮ್ಮಲ್ಲಿ ನೀವು ಇರುವುದಕ್ಕೆ ಸಂತೋಷವಾಗಿದೆ! ದಯವಿಟ್ಟು ಈ ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ಪರಿಶೀಲಿಸಲು ಕೆಳಗಿನ ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ.',
    'email.verifyEmail.button': 'ಈ ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ಪರಿಶೀಲಿಸಿ',
    // Getting premium from admins
    'email.adminUpgrade.subject': 'ನಿಮ್ಮ ಖಾತೆಗೆ ಮೇಲ್ಪಂಕ್ತಿ ಆಗಿದೆ',
    'email.adminUpgrade.message': `ನಿಮ್ಮ ಖಾತೆಯನ್ನು {plan, select,
    explorer {ಎಕ್ಸ್ಪ್ಲೋರರ್}
    adventurer {ಅಡ್ವೆಂಚರರ್}
    storyteller {ಸ್ಟೋರಿಟೆಲರ್}
    other {}
  } ಟಿಯರ್ ಗೆ {days} ದಿನಗಳವರೆಗೆ ನವೀಕರಿಸಲಾಗಿದೆ.\n\nಆನಂದಿಸಿ,\nಲಿಟರರಿ ಯೂನಿವರ್ಸ್ ತಂಡ`,
    'email.adminUpgrade.messageHtml': `ನಿಮ್ಮ ಖಾತೆಯನ್ನು {plan, select,
    explorer {ಎಕ್ಸ್ಪ್ಲೋರರ್}
    adventurer {ಅಡ್ವೆಂಚರರ್}
    storyteller {ಸ್ಟೋರಿಟೆಲರ್}
    other {}
  } ಟಿಯರ್ ಗೆ {days} ದಿನಗಳವರೆಗೆ ನವೀಕರಿಸಲಾಗಿದೆ. ಆನಂದಿಸಿ!`,
    'email.verification': 'ಇಮೇಲ್ ಪರಿಶೀಲನೆ',
    'email.verifying': 'ನಿಮ್ಮ ಇಮೇಲ್ ಪರಿಶೀಲಿಸುವುದು. ಇದು ಕೆಲವು ಕ್ಷಣಗಳಲ್ಲಿ ಮಾತ್ರ ನಿರೀಕ್ಷಿಸುತ್ತದೆ...',
    'email.verified': 'ಉತ್ತಮ ಸುದ್ದಿ! ನಿಮ್ಮ ಇಮೇಲ್ ಪರಿಶೀಲಿತವಾಗಿದೆ!'
};