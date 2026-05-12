const container = document.getElementById('items-container')

async function fetchItems() {
    try {
        const response = await fetch(
            'https://kitek.ktkv.dev/marketplace/api/items'
        )

        const items = await response.json()

        renderItems(items)
    } catch (error) {
        console.log('Ошибка:', error)

        container.innerHTML = `
            <div class="no-items">
                <h2>Не удалось загрузить товары</h2>
            </div>
        `
    }
}

function renderItems(items) {
    container.innerHTML = ''

    items.forEach((item) => {
        const card = document.createElement('div')

        card.className = 'item-card'

        card.innerHTML = `
            <div class="item-content">
                <span class="status-badge status-active">
                    Активно
                </span>

                <h3 class="item-title">
                    ${item.title || 'Без названия'}
                </h3>

                <p class="item-description">
                    ${item.description || 'Описание отсутствует'}
                </p>

                <div class="item-footer">
                    <div>
                        <div class="item-price">
                            ${item.price || 0} ₽
                        </div>

                        <div class="bid-info">
                            Текущая ставка:
                            ${item.currentBid || 0} ₽

                            <span class="bid-count">
                                ${item.bidsCount || 0}
                            </span>
                        </div>
                    </div>

                    <div class="item-meta">
                        <span class="item-seller">
                            Продавец:
                            ${item.seller?.username || 'unknown'}
                        </span>
                    </div>
                </div>
            </div>
        `

        container.appendChild(card)
    })
}

fetchItems()