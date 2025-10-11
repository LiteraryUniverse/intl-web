export default {
    'blog.noneMsg': `You currently don't have {type, select,
    organization {any blog}
    universe {a blog for your universe}
    user {a blog}
    other {}
  }.`,
    'blog.create': 'Tạo một blog mới',
    'blog.settings': `{type, select,
    org {Trang Blog}
    universe {Trang Vũ trụ}
    user {Trang Blog}
    other {}
  } Cài đặt`,
    'blog.description': 'Giới thiệu về Blog',
    'blog.theme': 'Giao diện',
    'blog.theme.info': 'By adjusting the theme, you will be able to change the look of the page. This feature is not ready at this time.',
    'blog.posts.total': `There {total, plural,
    zero {are no posts}
    one {is one post}
    other {are # posts}
  } in this blog.`,
    'blog.post.create': 'Write a new post',
    'blog.post.update': 'Đang chỉnh sửa {title}',
    'blog.post.text': 'Đoạn văn bản bài viết',
    'common.slug': 'Địa chỉ tựa đề thân thiện với SEO',
    'blog.slug.explained': 'Create a nice-looking URL for the post. Avoid using special characters except for "-".',
    'blog.publicView': 'Xem công khai',
    'blog.post.notfound': 'Không tìm thấy bài viết trong blog',
    'blog.lists.works': `{type, select,
    universes {Vũ trụ}
    stories {Câu chuyện}
    fanfiction {Tác phẩm Fan Fiction}
    other {}
  }`,
    'blog.social.sameAsMain': `Liên kết xã hội giống như được thiết lập trong {type, select,
    organization {cài đặt tổ chức}
    user {hồ sơ người dùng}
    other {}
  }`,
    'blog.social.website': 'Trang web chính thức',
    'blog.settings.universeSettings': 'Blog vũ trụ được tích hợp vào trang vũ trụ với cài đặt cơ bản lấy từ cài đặt vũ trụ.',
    'blog.settings.organizationSettings': 'Blog tổ chức được tích hợp vào trang tổ chức.',
    'blogs.lu': 'Blog âm nhạc Vũ trụ Văn học chính thức',
    'blogs.featured': 'Các blog nổi bật',
    'blogs.new': 'Blog mới nhất',
    'blogs.title': 'Blog Vũ trụ Văn học',
    'blogs.description': 'Danh sách các blog trên nền tảng Vũ trụ Văn học.',
    'blogs.visit': 'Ghé thăm blog',
    'blog.settingsAria': 'Các loại cài đặt cho blog',
    'blog.settings.blog': 'Blog',
    'blog.settings.forum': 'Diễn đàn',
    'blog.post.introText': 'Đoạn giới thiệu',
    'blog.post.writtenBy': 'Viết bởi {usernameDisplay}',
    'blog.post.writtenByFor': 'Viết bởi {usernameDisplay} cho {publicationName}',
    'blog.posts.recent': 'Bài viết gần đây',
    'blog.statsPage': 'Thống kê Blog',
    'blog.view': 'View Blog',
    'blog.settings.qa': 'Hỏi & Đáp',
    // Q&A Settings
    'blog.qa.settings.title': 'Cài đặt Hỏi & Đáp',
    'blog.qa.settings.notSupported': 'Hiện tại, tính năng Hỏi & Đáp chỉ được hỗ trợ cho các blog của người dùng và blog của vũ trụ.',
    'blog.qa.settings.enable': 'Bật tính năng Hỏi & Đáp',
    'blog.qa.settings.enableQA': 'Cho phép độc giả đặt câu hỏi.',
    'blog.qa.settings.enableQA.help': 'Khi tính năng này được kích hoạt, độc giả có thể gửi câu hỏi mà bạn có thể trả lời công khai hoặc riêng tư.',
    'blog.qa.settings.whoCanAsk': 'Ai có thể đặt câu hỏi?',
    'blog.qa.settings.askersAllowed.all': 'Tất cả người dùng đã đăng ký',
    'blog.qa.settings.askersAllowed.all.help': 'Người dùng miễn phí được 1 câu hỏi trong suốt thời gian sử dụng blog. Người đăng ký LU được 1 câu hỏi mỗi năm (2 câu hỏi trong năm đầu tiên).',
    'blog.qa.settings.askersAllowed.luOnly': 'Chỉ dành cho thành viên LU',
    'blog.qa.settings.askersAllowed.luOnly.help': 'Chỉ những người dùng có gói đăng ký LU đang hoạt động mới có thể đặt câu hỏi.',
    'blog.qa.settings.askersAllowed.fanClubOnly': 'Chỉ dành cho thành viên Câu lạc bộ Người hâm mộ',
    'blog.qa.settings.askersAllowed.fanClubOnly.help': 'Chỉ các thành viên của Câu lạc bộ Người hâm mộ của bạn mới có thể đặt câu hỏi (giới hạn được xác định theo từng cấp độ).',
    'blog.qa.settings.askersAllowed.luOrFanClub': 'Người đăng ký LU hoặc thành viên Câu lạc bộ Người hâm mộ',
    'blog.qa.settings.askersAllowed.luOrFanClub.help': 'Người dùng có đăng ký LU hoặc thành viên Câu lạc bộ Người hâm mộ có thể đặt câu hỏi.',
    'blog.qa.settings.archive': 'Cài đặt lưu trữ',
    'blog.qa.settings.showArchiveWhenDisabled': 'Hiển thị các câu hỏi đã được trả lời ngay cả khi tính năng Hỏi & Đáp bị tắt.',
    'blog.qa.settings.showArchiveWhenDisabled.help': 'Khi tính năng này bị vô hiệu hóa, người dùng sẽ không thể đặt câu hỏi mới, nhưng vẫn có thể xem các câu hỏi đã được trả lời trước đó.',
    'blog.qa.settings.saved': 'Cài đặt Q&A đã được lưu thành công.',
    // Q&A Admin
    'blog.qa.admin.title': 'Quản lý Hỏi & Đáp',
    'blog.qa.admin.tab.pending': 'Đang chờ xử lý',
    'blog.qa.admin.tab.answered': 'Đã trả lời',
    'blog.qa.admin.tab.ignored': 'Bị bỏ qua',
    'blog.qa.admin.empty.pending': 'Không có câu hỏi nào đang chờ xử lý.',
    'blog.qa.admin.empty.answered': 'Chưa có câu hỏi nào được trả lời.',
    'blog.qa.admin.empty.ignored': 'Không có câu hỏi nào bị bỏ qua.',
    'blog.qa.admin.answerQuestion': 'Trả lời câu hỏi',
    'blog.qa.admin.visibility.public': 'Công khai (mọi người đều có thể xem)',
    'blog.qa.admin.visibility.private': 'Riêng tư (chỉ người hỏi mới có thể xem)',
    'blog.qa.admin.submitAnswer': 'Nộp câu trả lời',
    'blog.qa.admin.answer': 'Trả lời',
    'blog.qa.admin.ignore': 'Bỏ qua',
    'blog.qa.admin.confirmIgnore': 'Bạn có chắc chắn muốn bỏ qua câu hỏi này không?',
    'blog.qa.admin.pin': 'Ghim',
    'blog.qa.admin.unpin': 'Bỏ ghim',
    'blog.qa.admin.yourAnswer': 'Câu trả lời của bạn',
    // Q&A Public
    'blog.qa.title': 'Câu hỏi',
    'blog.qa.askQuestion': 'Hỏi một câu hỏi',
    'blog.qa.submitQuestion': 'Gửi câu hỏi',
    'blog.qa.success.submit': 'Cảm ơn bạn! Câu hỏi của bạn đã được gửi và sẽ được trả lời sớm.',
    'blog.qa.error.submit': 'Không thể gửi câu hỏi. Vui lòng thử lại.',
    'blog.qa.tab.allAnswered': 'Tất cả đã được trả lời',
    'blog.qa.tab.myQuestions': 'Các câu hỏi của tôi',
    'blog.qa.empty.all': 'Chưa có câu hỏi nào được trả lời.',
    'blog.qa.empty.mine': 'Bạn chưa đặt bất kỳ câu hỏi nào ở đây.',
    'blog.qa.status.pending': 'Đang chờ xử lý',
    'blog.qa.status.ignored': 'Bị bỏ qua',
    'blog.qa.status.private': 'Trả lời riêng tư',
    'blog.qa.status.public': 'Trả lời công khai',
    'blog.qa.role.reader': 'Người đọc',
    'blog.qa.role.author': 'Tác giả',
    'blog.qa.pinned': 'Được ghim',
    'blog.qa.answeredAgo': 'Đã trả lời {time}',
    'blog.qa.loadMore': 'Tải thêm',
    'blog.qa.warn.luRequired': 'Chỉ các thành viên đăng ký LU mới có thể đặt câu hỏi tại đây.',
    'blog.qa.warn.fanClubRequired': 'Chỉ thành viên của Câu lạc bộ Người hâm mộ mới có thể đặt câu hỏi tại đây.',
    'blog.qa.warn.luOrFanRequired': 'Chỉ thành viên đăng ký LU hoặc thành viên Câu lạc bộ Người hâm mộ mới có thể đặt câu hỏi tại đây.'
};