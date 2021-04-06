**Шаблон проекта для быстрого старта**
версия nodejs 14.15.0^

## Старт проекта

### Установи модули

```
npm i

или

yarn install

```

### Команды для запуска

### Запуск с отслеживанием изменений
```
npm run start
```
Если вы всё сделали правильно, у вас должен открыться браузер с локальным сервером. Режим сборки предполагает оптимизацию проекта: сжатие изображений, минифицирование CSS и JS-файлов для загрузки на сервер.

### Production сборка в папку `dist`
```
npm run production

```

### :open_file_folder: Файловая структура

```
html
├── dist
├── gulp-tasks
├── app
│   ├── blocks
│   ├── resources
│   ├── images
│   ├── scripts
│   ├── styles
│   ├── pages
├── gulpfile.babel.js
├── webpack.config.js
├── package.json
├── .babelrc.js
├── .bemrc.js
├── .eslintrc.json
├── .stylelintrc
├── .stylelintignore
└── .gitignore
```
