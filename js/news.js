let newsData = [];

function addNews() {
    const title = document.getElementById("newsTitle").value;
    const content = document.getElementById("newsContent").value;

    if (title === "" || content === "") {
        alert("กรุณากรอกข้อมูลให้ครบ");
        return;
    }

    const newsItem = {
        title: title,
        content: content
    };

    newsData.push(newsItem);
    renderNews();

    document.getElementById("newsTitle").value = "";
    document.getElementById("newsContent").value = "";
}

function renderNews() {
    const newsList = document.getElementById("newsList");
    newsList.innerHTML = "";

    newsData.forEach(news => {
        newsList.innerHTML += `
            <div class="news-item">
                <h3>${news.title}</h3>
                <p>${news.content}</p>
            </div>
        `;
    });
}