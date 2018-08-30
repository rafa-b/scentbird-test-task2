# Тестовое задание на позицию frontend-разработчика в Scentbird

- Необходимо выполнить задание используя заготовку, доступную по ссылке: [scentbird-boilerplate](https://github.com/scentbird/scentbird-test-task)

- Ссылку на репозиторий с выполненным заданием прислать на andrei@scentbird.com

# Инициализация

- Установка пакетов `npm install`

- Запуск приложения для разработки `npm start`

- Запуск приложения для продакшен сборки `npm run build`

- Доступ к приложению в браузере `http://localhost:5100`


# Общее

0) Задание заключается в реализации SPA-приложение на React.

1) В представленном репозитории специальна заложена недоработка в Webpack конфиге. Необходимо доработать его, чтобы проект запустился. Если опыта работы с Webpack нет, либо по другим причинам не удается справиться с этой задачей сообщите об этом и вам будет предоставлен рабочий вариант этого задания.

2) Обязательно использовать redux, react-router(3 или 4).

3) Для стилей SCSS (LESS, POSTCSS) с использованием css modules.

4) Для работы с формой использовать redux-form (formik, любую другую библиотеку), важно чтобы работа с формой была сделана через redux.

5) В описании ниже помимо основных задач есть дополнительные задания, далее (ДОП). Их выполнение не обязательно, но будет плюсом, если вы их выполните.

6) Если возникают вопросы по заданию - не стесняйтесь задавайте.


# Задание

В апп должен быть роутинг для навигации по страницам /product/:id, /profile/shipping.
В дизайне не представлена навигация по страницам - сделайте в шапке ссылки на эти страницы в любом виде на свое усмотрение. У ссылок должен быть дефолтный стиль и активный.

### Страница товара

0) Страница состоит из двух колонок (desktop, tablet landscape): слева колонка с картинкой / справа колонка с информацией о товаре. Эти колонки должны быть резиновыми (ширина в %).

1) При выборе объема товара (1.7oz Subscription) должна изменяться информация в блоке выбранного товара (выше).

2) При клике на “Read more >” надпись должна заменяться на “< Show less” и раскрывать текст (текст можно использовать любой).

3) (ДОП) Обратить внимание на поведение кнопки “Add to queue” на разных экранах: если она помещается в один ряд с блоком “выбранный товар“, то она должна быть на одном уровне с ним, в противном случае переноситься на новую строку и занимать всю ширину экрана.

4) (ДОП) на мобильной версии обратить внимание на “1.7 oz One-time”, там скрыто слово “purchase”. Придумать решение как скрывать его, в противном случае можно везде писать без этого слова.

### Страница формы:

0) Чекбокс “Use this address…” должен в отжатом состоянии отображать ниже такую же форму как (выше) Shipping address, зи исключением поля “Telephone”. Заголовок у этой формы должен быть “Billing address”.

1) Добавить валидацию в форму: в полях First Name, Last Name можно использовать только буквенные символы. В Street address - числа, пробелы, тире, буквы. Все поля кроме Apt/Suite должны быть required.

2) При сабмите в консоль должна выводиться объект с данными о полях.

3) (ДОП) Можно использовать нативные селекты в форме, но будет плюсом написание своего компонента выпадающего списка.

4) (ДОП) Кнопка Back должна вести на страницу с которой был сделан переход.
вот это пока вставь туда
