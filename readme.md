### Webpack-template

```
├── src/                             # Исходники
│   ├── assets/                      # Подключаемые ресурсы
│   │   ├── fonts/                   # Шрифты используемые в проекте
│   │   ├── img/                     # Изображения используемые в проекте
│   │   └── styles/                  # Стили
│   │       ├── theme/               # Папка с темой проекта
│   │       │   ├── colors.scss      # Файл с переменными цветов
│   │       │   ├── fonts.scss       # Файл с подлючаемыми шрифтами
│   │       │   └── spaces.scss      # Переменные отступов
│   │       └── main.scss            # Файл в который импортируются все стили
│   ├── blocks/                      # Папка с блоками проекта
│   ├── favicons/                    # Фавиконки для разных браузеров
│   ├── layouts/                     # Папка с шаблонами разметки
│   ├── pages/                       # Папка страниц проекта
│   └── pixel-perfect/               # Скриншоты для сверки Pixel Perfect
├── .babelrc                         # Конфигурация компиляции Javascript в es5
├── .eslintrc.json                   # Конфигурация проверки JavaScript в ESLint
├── .gitignore                       # Список исключённых файлов из Git
├── .pug-lintrc                      # Конфигурация проверки pug-файлов
├── package.json                     # Список модулей и прочей информации
├── postcss.config.js                # Конфигурация компиляции стилей
├── README.md                        # Документация шаблона
├── webpack.base.conf.js             # Базовая конфигурация Webpack.js
├── webpack.build.conf.js            # Конфигурация Webpack.js для production сборки
└── webpack.dev.conf.js              # Конфигурация Webpack.js для dev сборки
```
