document.addEventListener("DOMContentLoaded", function() {
    
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(navLink => {
        navLink.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: "smooth"
            });
        });
    });




function fetchJobListings() {
    const apiUrl = 'https://api.example.com/job-listings'; // Replace with the actual API URL
    
    
    fetch(apiUrl)
      .then(response => {
        
        if (!response.ok) {
          throw new Error('Failed to fetch job listings');
        }
        
        return response.json();
      })
      .then(data => {
       
        displayJobListings(data);
      })
      .catch(error => {
        
        console.error('Error fetching job listings:', error);
      });
  }

  function displayJobListings(jobListings) {
    
    const jobListingsContainer = document.getElementById('job-listings-container');
    jobListingsContainer.innerHTML = ''; 
    
    jobListings.forEach(job => {
      const listItem = document.createElement('li');
      listItem.textContent = `${job.title} - ${job.company}`;
      jobListingsContainer.appendChild(listItem);
    });
  }
  
  
  fetchJobListings();
  








    
    const jobData = [
        { title: "Software Engineer", location: "Tokyo", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { title: "Marketing Specialist", location: "Osaka", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { title: "English Teacher", location: "Kyoto", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }
    ];

    
    function generateJobCards(jobs) {
        const jobListingsSection = document.querySelector('.job-listings');
        const jobListingsContainer = jobListingsSection.querySelector('.container');

        jobs.forEach(job => {
            const jobCard = document.createElement('div');
            jobCard.classList.add('job-card');
            jobCard.innerHTML = `
                <h3>${job.title}</h3>
                <p><strong>Location:</strong> ${job.location}</p>
                <p>${job.description}</p>
                <a href="#" class="btn">Apply Now</a>
            `;
            jobListingsContainer.appendChild(jobCard);
        });
    }

  
    generateJobCards(jobData);
});
