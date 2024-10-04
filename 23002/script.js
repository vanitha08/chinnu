document.addEventListener('DOMContentLoaded', () => {
    const data = {
        status: "ok",
        totalResults: 4030,
        articles: [
            {
                source: { id: "fox-news", name: "Fox News" },
                author: "Greg Norman",
                title: "Elon Musk to attend Trump Pennsylvania rally at site of assassination attempt",
                description: "SpaceX and Tesla CEO Elon Musk says he will be there on Saturday to support former President Trump when he returns to Butler, Pennsylvania, for a rally.",
                url: "https://www.foxnews.com/us/elon-musk-attend-trump-pennsylvania-rally-site-assassination-attempt",
                urlToImage: "https://static.foxnews.com/foxnews.com/content/uploads/2024/10/donald-trump-and-elon-musk.png",
                publishedAt: "2024-10-04T16:24:48Z",
                content: "Elon Musk says he will \"be there to support\" Donald Trump on Saturday when the former president returns to Butler, Pennsylvania to hold a rally at the site where the first assassination attempt again… [+2441 chars]"
            }
        ]
    };

    const fetchNewsBtn = document.getElementById('fetchBtn');
    const newsContainer = document.getElementById('newsContainer');
    let articles = data.articles;  // Use the articles directly from the data variable

    function renderRandomArticle() {
        newsContainer.innerHTML = ''; 
        if (articles.length > 0) {
            const randomIndex = Math.floor(Math.random() * articles.length);
            const article = articles[randomIndex];
            const articleElement = document.createElement('div');
            articleElement.className = 'news-item';
            articleElement.innerHTML = `
                <h2>${article.title}</h2>
                <p>${article.description}</p>
                <img src="${article.urlToImage}" alt="${article.title}">
                <p><a href="${article.url}" target="_blank">Read more</a></p>
            `;
            newsContainer.appendChild(articleElement);
        } else {
            newsContainer.innerHTML = '<p>No articles available.</p>';
        }
    }

    fetchNewsBtn.addEventListener('click', renderRandomArticle);  // Trigger renderRandomArticle on button click
});
