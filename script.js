const posts = [
    { title: "The Rise of AI", category: "Technology", content: "Exploring the advancements in AI." },
    { title: "Healthy Eating Tips", category: "Health", content: "How to maintain a balanced diet." },
    { title: "Work-Life Balance", category: "Lifestyle", content: "Tips for achieving harmony in life." },
    { title: "Understanding JavaScript", category: "Technology", content: "A beginner's guide to JS." },
    { title: "Mental Health Awareness", category: "Health", content: "Breaking the stigma around mental health." },
];

function searchPosts() {
    const searchText = document.getElementById("searchBox").value.toLowerCase();
    const category = document.getElementById("categoryFilter").value;
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    const filteredPosts = posts.filter(post => {
        const matchesText = post.title.toLowerCase().includes(searchText) || post.content.toLowerCase().includes(searchText);
        const matchesCategory = category === "" || post.category === category;
        return matchesText && matchesCategory;
    });

    if (filteredPosts.length === 0) {
        resultsContainer.innerHTML = "<p>No results found.</p>";
    } else {
        filteredPosts.forEach(post => {
            const postElement = document.createElement("div");
            postElement.classList.add("result-item");
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
            `;
            resultsContainer.appendChild(postElement);
        });
    }
}
