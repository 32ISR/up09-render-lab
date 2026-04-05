const URL = "https://kitek.ktkv.dev/static/posts.json"
const container = document.querySelector("main#feed")
const renderPost = (post) => {
    return`<div class="card">
            <div class="card__body">
                <div>
                    <div class="card__meta-top">
                        <span class="card__category">${post.category}</span>
                        <span class="card__status">${post.status}</span>
                        <span class="card__id">${post.Id}</span>
                    </div>
                    <h2 class="card__title">
                        ${post.title}
                    </h2>
                    <p class="card__excerpt">
                        ${post.content}
                    </p>
                </div>
                <div class="card__footer">
                    <span class="card__byline">
                        ${post.status}
                        <span>${post.publishedAt}</span>
                    </span>
                    <div class="card__divider"></div>
                    <span class="card__byline">
                        User
                        <span>${post.userId}</span>
                    </span>
                    <div class="card__divider"></div>
                    <a
                        class="card__read-more"
                        href="${post.url}"
                        target="_blank"
                        rel="noopener">
                        Read
                    </a>
                </div>
            </div>
            <div class="card__image-wrap">
                <img
                    class="card__image"
                    src="${post.image}"
                    alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    loading="lazy" />
            </div>
            <span class="card__slug">${post.slug}</span>
        </div>`
}

const fetchData = async () => {
    const res = await fetch(URL)
    const data = await res.json()
    const html = data.map(post => renderPost(post))
    container.innerHTML = html.join("")
}

fetchData()