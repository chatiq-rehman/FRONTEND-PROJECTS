const posts = [
    {
        title: "React Basics",
        category: "Tech",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        description: "Learn React step by step.",
        date: "2025-08-01"
    },
    {
        title: "Exploring Paris",
        category: "Travel",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "A travel diary in Paris.",
        date: "2025-07-21"
    },
    {
        title: "Best Pasta Recipes",
        category: "Food",
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Delicious homemade pasta ideas.",
        date: "2025-06-11"
    },
    {
        title: "JavaScript Tips",
        category: "Tech",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        description: "Handy tricks for JavaScript developers.",
        date: "2025-05-18"
    },
    {
        title: "Trip to Mountains",
        category: "Travel",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "My experience hiking in the mountains.",
        date: "2025-04-10"
    },
    {
        title: "Street Food Guide",
        category: "Food",
        image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Best street foods to try worldwide.",
        date: "2025-03-05"
    },
    {
        title: "CSS Grid Layout",
        category: "Tech",
        image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Master responsive layouts using CSS grid.",
        date: "2025-02-14"
    }
];



const postsPerPage = 4;
let currentPage = 1;
let currentCategory = "all";
let currentSearch = "";

const blogGrid = document.getElementById("blogGrid");
const noPosts = document.getElementById("noPosts");
const searchInput = document.getElementById("searchInput");

function renderPosts() {
    blogGrid.innerHTML = "";
    let filtered = posts.filter(post =>
        (currentCategory === "all" || post.category === currentCategory) &&
        post.title.toLowerCase().includes(currentSearch.toLowerCase())
    );

    if (filtered.length === 0) {
        noPosts.style.display = "block";
        return;
    } else {
        noPosts.style.display = "none";
    }

    const start = (currentPage - 1) * postsPerPage;
    const end = start + postsPerPage;
    const paginated = filtered.slice(start, end);

    paginated.forEach(post => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${post.image}" alt="${post.title}" onerror="this.src='https://via.placeholder.com/400x200?text=Image+Not+Found'">
            <div class="card-content">
                <h3>${post.title}</h3>
                <p>${post.description}</p>
                <div class="date">${post.date}</div>
            </div>
        `;
        blogGrid.appendChild(card);
    });
}

document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentCategory = btn.dataset.category;
        currentPage = 1;
        renderPosts();
    });
});

searchInput.addEventListener("input", e => {
    currentSearch = e.target.value;
    currentPage = 1;
    renderPosts();
});

document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        renderPosts();
    }
});

document.getElementById("nextBtn").addEventListener("click", () => {
    let filtered = posts.filter(post =>
        (currentCategory === "all" || post.category === currentCategory) &&
        post.title.toLowerCase().includes(currentSearch.toLowerCase())
    );
    if (currentPage * postsPerPage < filtered.length) {
        currentPage++;
        renderPosts();
    }
});

renderPosts();
