// Sample Job Data (Mimic API)
let jobs = [
    { title: "Frontend Developer", company: "TechCorp", category: "IT" },
    { title: "Marketing Manager", company: "Brandify", category: "Marketing" },
    { title: "Financial Analyst", company: "FinTrust", category: "Finance" },
    { title: "HR Executive", company: "HR Solutions", category: "HR" },
];

// Function to Display Jobs
function displayJobs(filter = "") {
    const jobList = document.getElementById("jobs-list");
    jobList.innerHTML = "";

    jobs
        .filter(job => job.title.toLowerCase().includes(filter.toLowerCase()) || job.company.toLowerCase().includes(filter.toLowerCase()))
        .forEach(job => {
            const jobCard = document.createElement("div");
            jobCard.classList.add("job-card");
            jobCard.innerHTML = `<h3>${job.title}</h3><span>${job.company} - ${job.category}</span>`;
            jobList.appendChild(jobCard);
        });
}

// Function to Filter by Category
function filterByCategory() {
    const selectedCategory = document.getElementById("category").value;
    if (selectedCategory === "all") {
        displayJobs();
    } else {
        const filteredJobs = jobs.filter(job => job.category === selectedCategory);
        displayFilteredJobs(filteredJobs);
    }
}

// Function to Display Filtered Jobs
function displayFilteredJobs(filteredJobs) {
    const jobList = document.getElementById("jobs-list");
    jobList.innerHTML = "";

    filteredJobs.forEach(job => {
        const jobCard = document.createElement("div");
        jobCard.classList.add("job-card");
        jobCard.innerHTML = `<h3>${job.title}</h3><span>${job.company} - ${job.category}</span>`;
        jobList.appendChild(jobCard);
    });
}

// Function to Post a New Job
function postJob() {
    const title = document.getElementById("job-title").value;
    const company = document.getElementById("job-company").value;
    const category = document.getElementById("job-category").value;

    if (title && company) {
        jobs.push({ title, company, category });
        displayJobs();
        document.getElementById("job-title").value = "";
        document.getElementById("job-company").value = "";
    } else {
        alert("Please fill all fields.");
    }
}

// Event Listeners
document.getElementById("search").addEventListener("input", (e) => displayJobs(e.target.value));
document.getElementById("category").addEventListener("change", filterByCategory);
document.getElementById("post-job").addEventListener("click", postJob);

// Initial Display
displayJobs();
