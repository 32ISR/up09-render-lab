async function fetchData() {
    const data = await fetch('https://kitek.ktkv.dev/marketplace/api/items')
    const json = await data.json()
    
    const container = document.getElementById("container")
    
    
    container.innerHTML = '' 
    
    json.forEach((item) => {
        const div = document.createElement("div")
        div.className = "item-card"
        
        div.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.title}" class="item-image" />
            <div class="item-content">
                <span class="status-badge status-active">${item.status}</span>
                <h3 class="item-title">${item.title}</h3>
                <p class="item-description">${item.description}</p>
                <div class="item-footer">
                    <div>
                        <div class="item-price">${item.price ? item.price.toLocaleString() + ' ₽' : 'Цена не указана'}</div>
                        <div class="bid-info">
                            ${item.highestBid ? item.highestBid.toLocaleString() + ' ₽' : 'Нет ставок'}
                            <span class="bid-count">${item.bidCount}</span>
                        </div>
                    </div>
                    <div class="item-meta">
                        <span class="item-seller">Продавец: ${item.username}</span>
                    </div>
                </div>
            </div>
        `
        
        container.appendChild(div)
    })
    
    const statvalue = document.getElementsByClassName("stat-value")
    
    statvalue[0].innerHTML = json.length
    
    let totalBids = 0
    let activeItems = 0
    
    json.forEach(item => {
        if (item.status === 'active') {
            activeItems += 1
        }
        if (item.bidCount > 0) {
            totalBids += item.bidCount
        }
    })
    
    statvalue[1].innerHTML = totalBids
    statvalue[2].innerHTML = activeItems
    
    let totalPrice = 0
    json.forEach(item => {
        if (item.price) {
            totalPrice += item.price
        }
    })
    
    let avgPrice = Math.round(totalPrice / json.length)
    statvalue[3].innerHTML = avgPrice.toLocaleString() + ' ₽'
}

fetchData()