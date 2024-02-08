/**
 * @authors Jan Dvorak
 */
/* eslint-disable max-len */
export default {
    'email.enrollAccount.subject': '문학 우주에 대한 초대 {username}',
    'email.enrollAccount.message': `안녕하세요 {username}\n\n
    문학 우주에 초대합니다! 우리는 특별한 개인 계정을 만들어 드렸으며, 여기에서 문학 우주의 모든 기능에 액세스할 수 있습니다! 다음 세대의 창작 및 독서 도구를 만드는 데 참여해 주세요!
    계정을 활성화하려면 아래 링크를 클릭하세요:\n\n{url}`,
    'email.resetPassword.subject': '문학 우주 비밀번호 재설정',
    'email.resetPassword.message': `안녕하세요 {username}!\n\n 귀하의 계정 비밀번호 재설정 요청을 받았습니다.
        비밀번호를 재설정하려면 아래 링크를 따르세요:\n\n{url}`,
    'email.verifyEmail.subject': '문학 우주 이메일 확인',
    'email.verifyEmail.message': '안녕하세요 {username}!\n\n 이메일 주소를 확인해 주세요. 아래 링크를 클릭하세요:\n\n{url}',
    // New html email keys
    'email.salutation': '안녕하세요 {username},',
    'email.welcome': '문학 우주에 오신 것을 환영합니다!',
    'email.signature': '진심으로,<br />문학 우주 팀',
    // Enrollment
    'email.enrollAccount.welcome': '환영합니다',
    'email.enrollAccount.messageHtml': '문학 우주에 초대합니다! 우리는 이미 귀하를 위한 개인 계정을 준비했습니다. 여기에서 문학 우주의 모든 기능에 액세스할 수 있습니다! 다음 세대의 창작 및 독서에 참여해 주세요!',
    'email.enrollAccount.button': '계정에 액세스하세요',
    'email.enrollAccount.signature': '<br />Literary Universe 팀을 만나기를 기대하고 있습니다.',
    // Reset password
    'email.resetPassword.messageHtml': '귀하의 계정 비밀번호 재설정 요청을 받았습니다. 계속 진행하려면 아래 버튼을 클릭하십시오. 만약 이 요청을 하지 않았다면, 이 이메일을 무시하셔도 됩니다. 하지만 보안 설정을 확인하는 좋은 시기일 수도 있습니다.',
    'email.resetPassword.button': '비밀번호 재설정',
    // E-mail verification
    'email.verifyEmail.messageHtml': '환영합니다! 이 이메일 주소를 확인하려면 아래 버튼을 클릭하십시오.',
    'email.verifyEmail.button': '이 이메일 주소 확인',
    // Getting premium from admins
    'email.adminUpgrade.subject': '계정이 업그레이드되었습니다',
    'email.adminUpgrade.message': `당신의 계정을 {plan, select,
    explorer {탐험가}
    adventurer {모험가}
    storyteller {이야기꾼}
    other {}
  } 티어로 업그레이드했습니다. 다음 {days} 일 동안 이용할 수 있습니다.\n\n즐겨주세요,\nLiterary Universe 팀`,
    'email.adminUpgrade.messageHtml': `We have upgraded your account to {plan, select,
    explorer {Explorer}
    adventurer {Adventurer}
    storyteller {Storyteller}
    other {}
  } tier for the next {days} days. Enjoy!`,
    'email.verification': '이메일 확인',
    'email.verifying': '이메일을 확인 중입니다. 잠시만 기다려주세요...',
    'email.verified': '좋은 소식입니다! 이메일이 확인되었습니다!'
};    /* eslint-enable max-len */