export default {
    'blog.noneMsg': `현재 {type, select,
    organization {블로그가 없습니다.}
    universe {당신의 우주를 위한 블로그,}
    user {블로그,}
    other {}
  }.`,
    'blog.create': '새 블로그 만들기',
    'blog.settings': `{type, select,
    org {블로그}
    universe {우주 페이지}
    user {블로그}
    other {}
  } 설정`,
    'blog.description': '블로그 소개',
    'blog.theme': '테마',
    'blog.theme.info': '테마를 조정하여 페이지의 모양을 변경할 수 있습니다. 이 기능은 현재 준비되지 않았습니다.',
    'blog.posts.total': `이 블로그에는 {total, plural,
    zero {게시물이 없습니다}
    one {게시물이 하나 있습니다}
    other {게시물이 #개 있습니다}
  } .`,
    'blog.post.create': 'Write a new post',
    'blog.post.update': '편집 {title}',
    'blog.post.text': '포스트 텍스트',
    'common.slug': 'SEO 친화적인 주소',
    'blog.slug.explained': '보기 좋은 글의 URL을 만듭니다. "-"를 제외한 특수 문자를 사용하지 마세요.',
    'blog.publicView': '공개 뷰',
    'blog.post.notfound': '블로그 글을 찾을 수 없습니다',
    'blog.lists.works': `{type, select,
    universes {우주들}
    stories {이야기들}
    fanfiction {팬픽션 작품}
    other {}
  }`,
    'blog.social.sameAsMain': `소셜 링크는 {type, select,
    organization {조직 설정}
    user {사용자 프로필}
    other {}
  }에서 설정한 것과 동일합니다.`,
    'blog.social.website': '공식 웹사이트',
    'blog.settings.universeSettings': '유니버스 블로그는 유니버스 설정에서 기본 설정을 가져와 유니버스 페이지에 통합됩니다.',
    'blog.settings.organizationSettings': '조직 블로그는 조직 페이지에 통합되었습니다.',
    'blogs.lu': '공식 문학 우주 블로그',
    'blogs.featured': '추천 블로그',
    'blogs.new': '최신 블로그',
    'blogs.title': '문학 우주의 블로그',
    'blogs.description': '문학 우주 플랫폼의 블로그 목록입니다.',
    'blogs.visit': '블로그 방문',
    'blog.settingsAria': '블로그 설정 카테고리',
    'blog.settings.blog': '블로그',
    'blog.settings.forum': '포럼',
    'blog.post.introText': '소개 단락',
    'blog.post.writtenBy': '작성자: {usernameDisplay}',
    'blog.post.writtenByFor': '{usernameDisplay} 님이 {publicationName}에 작성하였습니다.',
    'blog.posts.recent': '최근 글',
    'blog.statsPage': '블로그 통계',
    'blog.view': '블로그 보기',
    'blog.settings.qa': 'Q&A',
    // Q&A Settings
    'blog.qa.settings.title': 'Q&A 설정',
    'blog.qa.settings.notSupported': 'Q&A는 현재 사용자 및 유니버스 블로그에서만 지원됩니다.',
    'blog.qa.settings.enable': 'Q&A 사용',
    'blog.qa.settings.enableQA': '독자가 질문할 수 있도록 허용',
    'blog.qa.settings.enableQA.help': '이 기능을 활성화하면 독자는 공개 또는 비공개로 답변할 수 있는 질문을 제출할 수 있습니다.',
    'blog.qa.settings.whoCanAsk': '질문할 수 있는 사람',
    'blog.qa.settings.askersAllowed.all': '등록된 모든 사용자',
    'blog.qa.settings.askersAllowed.all.help': '무료 사용자는 블로그 평생 동안 1개의 질문을 받을 수 있습니다. LU 구독자에게는 연간 1개의 질문이 제공됩니다(첫해에는 2개의 질문이 제공됩니다).',
    'blog.qa.settings.askersAllowed.luOnly': 'LU 구독자만 해당',
    'blog.qa.settings.askersAllowed.luOnly.help': 'LU 구독이 활성화된 사용자만 질문할 수 있습니다.',
    'blog.qa.settings.askersAllowed.fanClubOnly': '팬클럽 회원 전용',
    'blog.qa.settings.askersAllowed.fanClubOnly.help': '팬클럽 회원만 질문할 수 있습니다(등급별로 제한이 정해져 있습니다).',
    'blog.qa.settings.askersAllowed.luOrFanClub': 'LU 구독자 또는 팬클럽 회원',
    'blog.qa.settings.askersAllowed.luOrFanClub.help': 'LU를 구독하거나 팬클럽 멤버십이 있는 사용자는 질문할 수 있습니다.',
    'blog.qa.settings.archive': '아카이브 설정',
    'blog.qa.settings.showArchiveWhenDisabled': 'Q&A가 비활성화된 상태에서도 답변된 질문 표시',
    'blog.qa.settings.showArchiveWhenDisabled.help': '이 기능을 비활성화하면 독자는 새로운 질문을 할 수 없지만 이전에 답변된 질문은 계속 볼 수 있습니다.',
    'blog.qa.settings.saved': 'Q&A 설정이 성공적으로 저장되었습니다.',
    // Q&A Admin
    'blog.qa.admin.title': 'Q&A 관리',
    'blog.qa.admin.tab.pending': '보류 중',
    'blog.qa.admin.tab.answered': '답변됨',
    'blog.qa.admin.tab.ignored': '무시됨',
    'blog.qa.admin.empty.pending': '대기 중인 질문이 없습니다.',
    'blog.qa.admin.empty.answered': '아직 답변된 질문이 없습니다.',
    'blog.qa.admin.empty.ignored': '무시된 질문은 없습니다.',
    'blog.qa.admin.answerQuestion': '질문 답변',
    'blog.qa.admin.visibility.public': '공개(모든 사람이 볼 수 있음)',
    'blog.qa.admin.visibility.private': '비공개(요청자만 볼 수 있음)',
    'blog.qa.admin.submitAnswer': '답변 제출',
    'blog.qa.admin.answer': '답변',
    'blog.qa.admin.ignore': '무시',
    'blog.qa.admin.confirmIgnore': '이 질문을 무시하시겠습니까?',
    'blog.qa.admin.pin': '핀',
    'blog.qa.admin.unpin': '언핀',
    'blog.qa.admin.yourAnswer': '귀하의 답변',
    // Q&A Public
    'blog.qa.title': '질문',
    'blog.qa.askQuestion': '질문하기',
    'blog.qa.submitQuestion': '질문 제출',
    'blog.qa.success.submit': '감사합니다! 질문이 제출되었으며 곧 답변해 드리겠습니다.',
    'blog.qa.error.submit': '질문을 제출하지 못했습니다. 다시 시도해 주세요.',
    'blog.qa.tab.allAnswered': '모든 답변',
    'blog.qa.tab.myQuestions': '내 질문',
    'blog.qa.empty.all': '아직 답변된 질문이 없습니다.',
    'blog.qa.empty.mine': '아직 여기에 질문이 없습니다.',
    'blog.qa.status.pending': '보류 중',
    'blog.qa.status.ignored': '무시됨',
    'blog.qa.status.private': '비공개 답변',
    'blog.qa.status.public': '공개 답변',
    'blog.qa.role.reader': '리더',
    'blog.qa.role.author': '작성자',
    'blog.qa.pinned': '고정됨',
    'blog.qa.answeredAgo': '답변 {time}',
    'blog.qa.loadMore': '더 보기',
    'blog.qa.warn.luRequired': 'LU 구독자만 여기에서 질문할 수 있습니다.',
    'blog.qa.warn.fanClubRequired': '팬클럽 회원만 여기에서 질문할 수 있습니다.',
    'blog.qa.warn.luOrFanRequired': 'LU 구독자 또는 팬클럽 회원만 여기에서 질문할 수 있습니다.',
    // Blog post discussions
    'blogs.discussion': '토론',
    'blogs.discussionOnForum': '이 블로그 게시물에 대한 토론은 포럼에서 계속 진행 중입니다.',
    'blogs.joinDiscussion': '토론에 참여하기'
};