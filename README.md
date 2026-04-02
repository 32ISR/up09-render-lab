# Отрисовка данных с сервера

# `https://kitek.ktkv.dev/marketplace/api/items`

## Цель:

Вам дана верстка (HTML, CSS). Ваша задача написать JavaScript код, который будет забирать данные с API

## Теория

### Пример одного элемента

```html
<div class="item-card">
    <img
        src="https://via.placeholder.com/300x200/3498db/ffffff?text=Laptop"
        alt="Ноутбук Dell XPS 15"
        class="item-image" />
    <div class="item-content">
        <span class="status-badge status-active">Активно</span>
        <h3 class="item-title">Ноутбук Dell XPS 15</h3>
        <p class="item-description">
            Мощный ноутбук для работы и игр. Intel Core i7, 16GB RAM, RTX 3050.
            Состояние отличное.
        </p>
        <div class="item-footer">
            <div>
                <div class="item-price">65 000 ₽</div>
                <div class="bid-info">
                    Текущая ставка: 70 000 ₽
                    <span class="bid-count">5</span>
                </div>
            </div>
            <div class="item-meta">
                <span class="item-seller">Продавец: techseller</span>
            </div>
        </div>
    </div>
</div>

```

### Шаг 1: Получить JSON данные

```javascript
async function fetchData() {
    const data = await fetch('апишка')
    const json = await data.json()
    ...
}
```

### Шаг 2: Создать HTML структуру

```html
<div id="container"></div>
```

_У вас уже она есть_

### Шаг 3: Написать функцию рендеринга

```javascript
const container = document.getElementById("container")
container.innerHTML = `
<div class="card">
  <h2>${data.name}</h2>
  <p>Возраст: ${data.age}</p>
</div>
`
```

## 3. Работа с массивами данных

### Способ через createElement:

```javascript
items.forEach((item) => {
    const div = document.createElement("div")
    div.className = "item"
    div.innerHTML = `
  <h3>${item.title}</h3>
  <p>${item.description}</p>
`
    container.appendChild(div)
})
```

_можно через обычный for_

### Альтернативный способ через строку

```javascript
const html = items
    .map(
        (item) => `
    <div class="item">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </div>
  `
    )
    .join("")

container.innerHTML = html
```

## 4. Обработка сложных структур

### Вложенные объекты:

```javascript
function renderProfile(user) {
    return `
    <div class="profile">
      <h2>${user.name}</h2>
      <div class="contacts">
        <p>Email: ${user.contacts.email}</p>
        <p>Телефон: ${user.contacts.phone}</p>
      </div>
      <div class="skills">
        ${user.skills
            .map((skill) => `<span class="tag">${skill}</span>`)
            .join("")}
      </div>
    </div>
  `
}
```

### Проверка на существование данных:

```javascript
function safeRender(data) {
    return `
    <div class="item">
      <h3>${data.title || "Без названия"}</h3>
      <p>${data.description || "Описание отсутствует"}</p>
      ${data.image ? `<img src="${data.image}" alt="${data.title}">` : ""}
    </div>
  `
}
```

# Как сдавать

- Создайте форк репозитория в вашей организации с названием-этого-репозитория-вашафамилия
- Используя ветку wip сделайте задание
- Зафиксируйте изменения в вашем репозитории
- Когда документ будет готов - создайте пул реквест из ветки wip (вашей) на ветку main (тоже вашу) и укажите меня (ktkv419) как reviewer

Не мержите сами коммит, это сделаю я после проверки задания

