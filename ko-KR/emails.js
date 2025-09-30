/**
 * @authors Jan Dvorak
 */
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
    'email.signature': '진심으로<br>, 문학의 세계 팀</br>',
    'email.footer.settingsHtml': '이메일 설정은 <link>계정</link> 설정에서 변경할 수 있습니다.',
    // Enrollment
    'email.enrollAccount.welcome': '환영합니다',
    'email.enrollAccount.messageHtml': '문학의 세계로 여러분을 초대합니다! 문학 유니버스의 모든 기능에 액세스할 수 있는 개인 계정을 준비했습니다. 차세대 창의적인 글쓰기와 독서를 창조하는 데 동참해 주세요!',
    'email.enrollAccount.button': '계정에 액세스하세요',
    'email.enrollAccount.signature': '여러분을 만나 뵙기를 고대합니다<br>, 문학 유니버스 팀</br>',
    // Reset password
    'email.resetPassword.messageHtml': '계정에 대한 비밀번호 재설정 요청을 받았습니다. 아래 버튼을 클릭하여 절차를 계속 진행하세요. 이 요청을 하지 않았다면 이 이메일을 무시해도 되지만, 보안 설정을 검토해 보는 것이 좋습니다.',
    'email.resetPassword.button': '비밀번호 재설정',
    // E-mail verification
    'email.verifyEmail.messageHtml': '함께하게 되어 기쁩니다! 이 이메일 주소를 확인하려면 아래 버튼을 클릭하세요.',
    'email.verifyEmail.button': '이 이메일 주소 확인',
    // Getting premium from admins
    'email.adminUpgrade.subject': '계정이 업그레이드되었습니다',
    'email.adminUpgrade.message': `당신의 계정을 {plan, select,
    explorer {탐험가}
    adventurer {모험가}
    storyteller {이야기꾼}
    other {}
  } 티어로 업그레이드했습니다. 다음 {days} 일 동안 이용할 수 있습니다.\n\n즐겨주세요,\nLiterary Universe 팀`,
    'email.adminUpgrade.messageHtml': `다음 {plan, select,
    explorer {익스플로러}
    adventurer {모험가}
    storyteller {스토리텔러}
    other {}
  } 다음 {days, number} 일 동안 계정을 티어로 업그레이드했습니다. 즐기세요!`,
    'email.verification': '이메일 확인',
    'email.verifying': '이메일을 확인 중입니다. 잠시만 기다려주세요...',
    'email.verified': '좋은 소식입니다! 이메일이 확인되었습니다!',
    // The Way (Author Level Up)
    'theWay.levelUp.emailSubject': '축하합니다! 문학 유니버스에서 작가 레벨에 도달하셨습니다 {level, number} !',
    'theWay.levelUp.emailTitle': '축하합니다! 작성자 레벨에 도달하셨습니다 {level, number}!',
    'theWay.levelUp.emailIntro': '글쓰기 기술에 대한 여러분의 헌신이 보상을 받았습니다!',
    'theWay.levelUp.emailGenre': '{genre} 장르에서 레벨을 달성했습니다 {level, number} .',
    'theWay.levelUp.emailContinue': '저자의 길에서 여정을 계속하고 더 많은 도전 과제를 잠금 해제하세요.',
    'theWay.levelUp.viewDashboard': '대시보드 보기',
    // Notifications - General content comment
    'email.notifications.contentComment.subject': '내 콘텐츠에 새 댓글 달기',
    'email.notifications.contentComment.title': '귀하의 새 댓글 {contentType}',
    'email.notifications.contentComment.details': '제목: {contentTitle} - From: {commenterName}',
    'email.notifications.contentComment.cta': '댓글 보기',
    // Notifications - Beta reader comment
    'email.notifications.betaComment.subject': '새로운 베타 독자 피드백',
    'email.notifications.betaComment.title': '새로운 베타 독자 피드백',
    'email.notifications.betaComment.details': '스토리: {storyTitle}{chapter} - From: {commenterName}',
    'email.notifications.betaComment.cta': '피드백 보기',
    // Notifications - New message
    'email.notifications.newMessage.subject': '새 메시지가 있습니다.',
    'email.notifications.newMessage.title': '새 메시지가 있습니다.',
    'email.notifications.newMessage.details': '에서: {senderName}',
    'email.notifications.newMessage.cta': '메시지 보기',
    // Notifications - Chapter published
    'email.notifications.chapterPublished.subject': '새 챕터 게시',
    'email.notifications.chapterPublished.title': '새 챕터 게시',
    'email.notifications.chapterPublished.details': '스토리: {storyTitle} - Chapter: {chapterTitle}{suffix}',
    'email.notifications.chapterPublished.cta': '챕터 열기',
    // Notifications - First story created
    'email.notifications.firstStory.subject': '첫 번째 이야기가 여기 있습니다!',
    'email.notifications.firstStory.title': '첫 번째 스토리가 시작되었습니다!',
    'email.notifications.firstStory.intro': '멋진 시작입니다! 저자의 길에 대한 유용한 안내를 통해 계속해서 글을 쓰고 여러분의 세계를 성장시켜 보세요.',
    'email.notifications.firstStory.details': '스토리: {storyTitle}',
    'email.notifications.firstStory.ctaResources': '저자의 길 계속하기',
    'email.notifications.firstStory.ctaStory': '스토리 열기',
    // Notifications - First story published (with level 1 achievement)
    'email.notifications.firstStoryPublished.subject': '축하합니다! 첫 번째 스토리가 게시되어 작가 레벨 1에 도달했습니다!',
    'email.notifications.firstStoryPublished.title': '🎉 여정이 시작됩니다!',
    'email.notifications.firstStoryPublished.intro': '첫 번째 스토리를 게시하게 된 것을 축하합니다! 이것은 여러분의 창작 여정에서 중요한 이정표입니다.',
    'email.notifications.firstStoryPublished.levelAchievement': '작가의 길에서 작가 레벨 1에 도달했습니다! 이것은 스토리텔링의 놀라운 모험의 시작에 불과합니다.',
    'email.notifications.firstStoryPublished.encouragement': '모든 위대한 작가는 첫 번째 출판 작품으로 시작했습니다. 계속 글을 쓰고, 계속 성장하고, 창의력을 마음껏 발휘하세요. 문학 세계 커뮤니티가 모든 단계에서 여러분을 지원합니다.',
    'email.notifications.firstStoryPublished.ctaTheWay': '저자의 길 살펴보기',
    'email.notifications.firstStoryPublished.ctaStory': '게시된 스토리 보기',
    // Notifications - First universe created
    'email.notifications.firstUniverse.subject': '첫 번째 우주를 축하합니다!',
    'email.notifications.firstUniverse.title': '첫 번째 유니버스 생성을 축하합니다!',
    'email.notifications.firstUniverse.intro': '월드 구축 여정이 시작됩니다. 다음 단계로 나아가는 데 도움이 되는 몇 가지 리소스를 소개합니다.',
    'email.notifications.firstUniverse.details': 'Universe: {universeName}',
    'email.notifications.firstUniverse.ctaResources': '저자의 길 살펴보기',
    'email.notifications.firstUniverse.ctaUniverse': '우주를 열어보세요',
    // Notifications - First chapter published for a story
    'email.notifications.firstChapterPublished.subject': '첫 번째 챕터가 게시되었습니다!',
    'email.notifications.firstChapterPublished.title': '스토리의 첫 번째 챕터가 공개되었습니다!',
    'email.notifications.firstChapterPublished.intro': '작업을 공유하고, 피드백을 수집하고, 모멘텀을 유지하세요.',
    'email.notifications.firstChapterPublished.details': '스토리: {storyTitle} - Chapter: {chapterTitle}',
    'email.notifications.firstChapterPublished.ctaChapter': '챕터 열기',
    'email.notifications.firstChapterPublished.ctaStory': '스토리 보기',
    // Notifications - Story finished
    'email.notifications.storyFinished.subject': '스토리를 완성하신 것을 축하드립니다!',
    'email.notifications.storyFinished.title': '스토리가 완성되었습니다!',
    'email.notifications.storyFinished.intro': '이 이정표를 축하하세요! 스토리를 게시, 공유 또는 제출하여 더 많은 독자에게 도달하는 것을 고려해 보세요.',
    'email.notifications.storyFinished.details': '스토리: {storyTitle}',
    'email.notifications.storyFinished.cta': '스토리 보기',
    // Notifications - Fan club new subscriber
    'email.notifications.newFanSubscriber.subject': '신규 팬클럽 구독자',
    'email.notifications.newFanSubscriber.title': '새 팬클럽 가입자가 생겼습니다!',
    'email.notifications.newFanSubscriber.details': '구독자: {subscriberName}',
    'email.notifications.newFanSubscriber.cta': '팬클럽 보기',
    // Notifications - Fan club subscription ended
    'email.notifications.fanUnsubscribed.subject': '회원이 팬클럽을 탈퇴했습니다.',
    'email.notifications.fanUnsubscribed.title': '회원이 팬클럽을 탈퇴했습니다.',
    'email.notifications.fanUnsubscribed.intro': '최근 변경된 사항에 대해 알려드리고자 합니다. 참여도를 높이기 위해 업데이트 또는 독점 콘텐츠를 공유하는 것을 고려해 보세요.',
    'email.notifications.fanUnsubscribed.details': '이전 회원: {name}',
    'email.notifications.fanUnsubscribed.cta': '팬클럽 개설',
    // Notifications - Friend request
    'email.notifications.friendRequest.subject': '새 친구 요청',
    'email.notifications.friendRequest.title': '새 친구 요청',
    'email.notifications.friendRequest.details': '에서: {requesterName}',
    'email.notifications.friendRequest.cta': '검토 요청',
    // Notifications - Collaboration invitation
    'email.notifications.collabInvite.subject': '공동 작업 초대',
    'email.notifications.collabInvite.title': '공동 작업 초대를 받았습니다.',
    'email.notifications.collabInvite.details': '초대자: {inviterName} - 역할 {role} - 대상: {targetType} - {targetTitle}',
    'email.notifications.collabInvite.cta': '초대 검토',
    // Notifications - Organization invitation
    'email.notifications.orgInvite.subject': '조직 가입 초대',
    'email.notifications.orgInvite.title': '{orgName}에 초대되었습니다.',
    'email.notifications.orgInvite.details': '초대자: {inviterName}',
    'email.notifications.orgInvite.cta': '초대 검토',
    // Notifications - Daily digest
    'email.notifications.dailyDigest.subject': '일일 업데이트',
    'email.notifications.dailyDigest.title': '일일 업데이트',
    'email.notifications.dailyDigest.intro': '오늘 일어난 일은 다음과 같습니다.',
    'email.notifications.dailyDigest.cta': '모든 업데이트 보기',
    'email.notifications.dailyDigest.empty': '오늘은 업데이트가 없습니다.',
    // Notifications - Followed author posted a new blog
    'email.notifications.followedBlogPost.subject': '팔로우하는 작성자의 새 블로그 게시물',
    'email.notifications.followedBlogPost.title': '{authorName} 새 블로그를 개설했습니다.',
    'email.notifications.followedBlogPost.details': '제목: {postTitle}',
    'email.notifications.followedBlogPost.cta': '게시물 읽기',
    // Notifications - Followed author published new work
    'email.notifications.followedNewWork.subject': '팔로우하는 작가의 새 작품',
    'email.notifications.followedNewWork.title': '{authorName} 새로운 게시 {workType}',
    'email.notifications.followedNewWork.details': '제목: {title}',
    'email.notifications.followedNewWork.cta': '보기',
    // Story notification emails
    'email.story.newComment.subject': '새 댓글 "{storyTitle}"',
    'email.story.newComment.body': '{commenterName} 스토리에 댓글을 남기세요 "{storyTitle}": {commentText}',
    'email.story.betaComment.subject': '"{storyTitle}"에 대한 새로운 베타 피드백',
    'email.story.betaComment.body': '{commenterName} "{storyTitle}"에 대한 베타 피드백 제공: {commentText}',
    'email.story.collaboratorAccepted.subject': '"{storyTitle}"의 새 팀원',
    'email.story.collaboratorAccepted.body': '{collaboratorName} 에서 "{storyTitle}"에 대한 공동 작업 초대를 수락했습니다. {role}.',
    'email.story.milestone.subject': '축하합니다! 마일스톤 도달 "{storyTitle}"',
    'email.story.milestone.body': '좋은 소식입니다! "{storyTitle}"의 챕터 "{chapterTitle}"가 {count} {milestone}에 도달했습니다. 계속 멋진 활동을 이어가세요!',
    'email.story.betaRevision.subject': '새로운 베타 버전이 출시되었습니다: "{chapterTitle}"',
    'email.story.betaRevision.body': '{authorName} 에서 "{chapterTitle}"의 새로운 베타 버전을 "{storyTitle}"에서 발표했습니다. 여러분의 피드백을 부탁드립니다!',
    'email.story.newChapter.subject': '새 챕터를 사용할 수 있습니다: "{storyTitle}"',
    'email.story.newChapter.body': '{authorName} 의 새로운 챕터 "{storyTitle}": "{chapterTitle}". 즐겁게 읽으세요!',
    // Universe notification emails
    'email.universe.newStory.subject': '우주의 새로운 이야기: "{storyTitle}"',
    'email.universe.newStory.body': '{authorName} 팔로우 중인 유니버스에 새 스토리 "{storyTitle}"를 추가했습니다. 새로운 모험을 발견하세요!',
    'email.universe.collaboratorChange.subject': '유니버스 협업 업데이트',
    'email.universe.collaboratorChange.body': '참여하고 있는 유니버스의 공동 작업 팀에 변경 사항이 발생했습니다.',
    'email.universe.update.subject': '유니버스 업데이트',
    'email.universe.update.body': '팔로우 중인 유니버스가 새로운 콘텐츠로 업데이트되었습니다.',
    'email.universe.comment.subject': '새 댓글 우주에 대해',
    'email.universe.comment.body': '{commenterName} 팔로우 중인 유니버스에 댓글을 달았습니다: "{commentText}"',
    // Blog notification emails
    'email.blog.newPost.subject': '새 블로그 게시물: "{postTitle}"',
    'email.blog.newPost.body': '{authorName} 새 블로그 게시물 "{postTitle}"을 팔로우 중인 블로그에 게시했습니다.',
    'email.blog.comment.subject': '새 댓글이 블로그 게시물에 추가되었습니다: "{postTitle}"',
    'email.blog.comment.body': '{commenterName} 블로그 게시물에 댓글을 달았습니다 "{postTitle}": "{commentText}"',
    'email.blog.update.subject': '블로그 업데이트',
    'email.blog.update.body': '팔로우 중인 블로그가 업데이트되었습니다.',
    // General comment notification emails
    'email.comment.general.subject': '새 댓글 "{contentTitle}"',
    'email.comment.general.body': '{commenterName} 댓글 "{contentTitle}": "{commentText}"',
    'email.comment.reply.subject': '댓글에 답글 달기',
    'email.comment.reply.body': '{replierName} 댓글에 답글 "{contentTitle}": "{replyText}"',
    'email.comment.like.subject': '댓글이 좋아요를 받았습니다.',
    'email.comment.like.body': '{likerName} 댓글에 좋아요를 눌렀습니다. 계속 참여하세요!',
    // Content-specific comment notification emails
    'email.comment.fanArt.subject': '팬아트에 대한 새로운 댓글: "{contentTitle}"',
    'email.comment.fanArt.body': '{commenterName} 팬아트에 댓글 달기 "{contentTitle}": "{commentText}"',
    'email.comment.event.subject': '이벤트에 새 댓글이 달렸습니다: "{contentTitle}"',
    'email.comment.event.body': '{commenterName} 이벤트에 댓글을 달았습니다 "{contentTitle}": "{commentText}"',
    'email.comment.revision.subject': '개정에 대한 새로운 코멘트',
    'email.comment.revision.body': '{commenterName} 수정 사항에 댓글을 달았습니다: "{commentText}"',
    'email.comment.feedback.subject': '피드백에 대한 새 댓글',
    'email.comment.feedback.body': '{commenterName} 피드백 문제에 댓글을 달았습니다: "{commentText}"',
    // Welcome email
    'email.welcome.subject': '리터러리 유니버스에 오신 것을 환영합니다!'
};