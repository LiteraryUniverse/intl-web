export default {
    'encyclopedia.add': 'Добавить новую запись',
    'encyclopedia.browse': 'Обзор по энциклопедии',
    'encyclopedia.search': 'Поиск в энциклопедии',
    'encyclopedia.back.universe': 'Назад к странице вселенной',
    'encyclopedia.back.workshop': 'Назад в мастерскую',
    'encyclopedia.categories': 'Категории',
    'encyclopedia.groups': 'Группы',
    'encyclopedia.category.character': 'Персонажи',
    'encyclopedia.category.event': 'События',
    'encyclopedia.category.group': 'Группы',
    'encyclopedia.category.item': 'Предметы',
    'encyclopedia.category.location': 'Места',
    'encyclopedia.category.other': 'Другое',
    'encyclopedia.category.state': 'Страны',
    'encyclopedia.category.governments': 'Правительства',
    'encyclopedia.category.languages': 'Языки',
    'encyclopedia.category.creatures': 'Существа',
    'encyclopedia.category.deity': 'Божества',
    'encyclopedia.category.religions': 'Религии',
    'encyclopedia.category.flora': 'Флора',
    'encyclopedia.category.magic': 'Магия',
    'encyclopedia.category.planets': 'Планеты',
    'encyclopedia.category.species': 'Виды',
    'encyclopedia.category.technologies': 'Технологии',
    'encyclopedia.search.found': `{results, plural,
    =0 {Нет найденных соответствующих записей}
    one {1 соответствующая запись найдена}
    few {# соответствующие записи найдено}
    many {# соответствующих записей найдено}
    other {# соответствующих записей найдено}
  }.`,
    'encyclopedia.help.text': 'Используйте меню слева для перехода между пунктами энциклопедии. После выбора пункта он будет отображаться вместо данного текста.',
    'encyclopedia.help.sidebar': 'Панель инструментов боковой панели',
    'encyclopedia.help.sidebar.text': 'Добро пожаловать в вашу историю! Эта боковая панель позволяет вам получить лёгкий доступ ко всем ресурсам, связанным с вашей историей. Отметьте значки выше, чтобы увидеть последние комментарии, ваши заметки, поиск в энциклопедии, просмотр и добавление новых записей в энциклопедию. Если вы хотите добавить связь с записью из текста рассказа, выделите текст, куда вы хотите её поместить, а затем нажмите кнопку подключения. Затем вам будет предложено найти и выбрать элемент.',
    'encyclopedia.intro': 'Добро пожаловать в энциклопедию {universe}.',
    'encyclopedia.add.title': 'Добавить новую запись в энциклопедию',
    'encyclopedia.add.heading': 'Что вы хотите добавить?',
    'encyclopedia.add.moresoon': 'Скоро появятся новые категории!',
    'encyclopedia.create': `Создать {category, select,
    character {нового персонажа}
    event {новое событие}
    group {новую группу}
    item {новый предмет}
    location {новое место}
    other {новую заметку}
    state {новую страну}
    governments {новое правительство}
    languages {новый язык}
    creatures {новое существо}
    deity {новое божество}
    religions {новую религию}
    flora {новую флору}
    magic {новую магию}
    planets {новую планету}
    species {новый вид}
    technologies {новую технологию}
  }`,
    'encyclopedia.create.header': `Создать {category, select,
    character {нового персонажа}
    event {новое событие}
    group {новую группу}
    item {новый предмет}
    location {новое место}
    other {новую заметку}
    state {новую страну}
    governments {новое правительство}
    languages {новый язык}
    creatures {новое существо}
    deity {новое божество}
    religions {новую религию}
    flora {новую флору}
    magic {новую магию}
    planets {новую планету}
    species {новый вид}
    technologies {новую технологию}
  } в {universe}`,
    'encyclopedia.entry.category': `Категория записи: {category, select,
    character {Персонаж}
    event {Событие}
    group {Группа}
    item {Предмет}
    location {Место}
    other {Заметка}
    state {Страна}
    governments {Правительство}
    languages {Язык}
    creatures {Существо}
    deity {Божество}
    religions {Религия}
    flora {Флора}
    magic {Магия}
    planets {Планета}
    species {Вид}
    technologies {Технология}
  }`,
    'encyclopedia.entry.category.legend': 'Категория',
    'encyclopedia.fields.add': 'Добавить новое поле',
    'encyclopedia.fields.text': 'Определение',
    'encyclopedia.fields.textarea': 'Текст',
    'encyclopedia.fields.connection': 'Подключение',
    'encyclopedia.fields.time': 'Время',
    'encyclopedia.fields.image': 'Изображение',
    'encyclopedia.visibility': 'Видимость',
    'encyclopedia.public': 'Открытая',
    'encyclopedia.private': 'Закрытая',
    'encyclopedia.container': 'Контейнер',
    'encyclopedia.container.desc': 'Сделать эту запись контейнером для новой группы записей. Это позволит скрыть её из списка категорий.',
    'encyclopedia.entry.name': 'Название записи',
    'encyclopedia.summary': 'Краткое описание',
    'encyclopedia.summary.desc': 'Это краткое описание, которое будет единственной первоначальной информацией, отображаемой на экране читателя.',
    'encyclopedia.parent': 'Родительская запись',
    'encyclopedia.related': 'Похожие записи',
    'encyclopedia.errors.tags': 'В одной записи может быть только 10 меток.',
    'encyclopedia.field.private': 'Закрытое поле',
    'encyclopedia.ft.indev': 'Этот вариант находится в разработке.',
    'encyclopedia.connections.remove': 'Удалить подключение',
    'encyclopedia.connections.extra': 'Дополнительная информация',
    'encyclopedia.connections.existing': 'Существующая запись',
    'encyclopedia.connections.existing.abbr': 'Сущ. запись',
    // abbreviation for Existing Entry
    'encyclopedia.cover': 'Обложка',
    'encyclopedia.translation.title': 'Добро пожаловать в перевод вселенной {universe}!',
    'encyclopedia.translation.desc': 'Этот интерфейс энциклопедии используется для перевода на: {language}. Выберите существующие записи в списке слева, чтобы начать их перевод.',
    'encyclopedia.welcome.totalEntries': `В этой вселенной {totalEntries, plural, 
    one {одна публикация} 
    few {# публикации} 
    many {# публикаций}
    other {# публикаций}
  }.`,
    'encyclopedia.settings.title': 'Настройки энциклопедии',
    'encyclopedia.settings.categoriesDesc': 'Включайте и выключайте категории, которые вы хотите использовать в своей энциклопедии.',
    'encyclopedia.settings.introText': 'Приветственное сообщение, которое будет отображаться после описания вселенной.',
    'encyclopedia.fields.placeholder': 'Название поля',
    'encyclopedia.fields.delete': 'Удалить поле',
    'encyclopedia.timeOption.fictionalDate': 'Дата фанфика',
    'encyclopedia.timeOption.fictionalTime': 'Время фанфика',
    'encyclopedia.timeOption.fictionalDateTime': 'Дата и время фанфика',
    'encyclopedia.timeOption.date': 'Дата',
    'encyclopedia.timeOption.time': 'Время',
    'encyclopedia.timeOption.dateTime': 'Дата и время',
    'encyclopedia.settings.groupByCategories': 'Включить категории в список групп',
    'encyclopedia.menuOpen': 'Открыть меню энциклопедии',
    'encyclopedia.menuClose': 'Закрыть меню энциклопедии',
    'encyclopedia.menuAria': 'Меню энциклопедии',
    'enc.newField': 'Новое поле',
    'enc.entries.limit': `Сейчас у вас {value, number} записей из {max, plural,
    one {}
    few {{max, number}}
    many {{max, number}}=0 {бесконечных записей}
    other {{max, number}}
  }.`,
    'enc.entries.limitReached': 'Вы достигли максимально допустимого количества записей в энциклопедии для вашей подписки.',
    'enc.menuControls.ariaDesc': 'Клавиши энциклопедии',
    'encyclopedia.pronunciation.title': 'Произношение',
    'encyclopedia.wip.abbreviation': 'РЗБ',
    'encyclopedia.wip.full': 'В разработке'
};