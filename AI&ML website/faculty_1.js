// Faculty data - Update with your actual faculty information
const facultyData = [
  {
    name: "Prof. Swati Shirke",
    designation: "Head of Department, AI & ML",
    qualification: "Ph.D. in Computer Science, M.Tech in AI & ML, B.Tech in Computer Engineering. Specialization in Machine Learning, Deep Learning, and Data Science with over 15 years of academic experience.",
    image: "file:///C:/Users/Admin/Desktop/AI&ML%20website/AI&ML%20Faculty[1]/AI&ML%20Faculty/Swati%20Shirke.png",
    rating: 5
  },
  {
    name: "Ashwini Biradar",
    designation: "Associate Professor, AI & ML",
    qualification: "Ph.D. in Artificial Intelligence from IIT Delhi, M.S. in Computer Science. Expert in Natural Language Processing, Computer Vision, and Neural Networks. Published 50+ research papers.",
    image: "file:///C:/Users/Admin/Desktop/AI&ML%20website/AI&ML%20Faculty[1]/AI&ML%20Faculty/Ashwini%20Biradar.jpg",
    rating: 4
  },
  {
    name: "Moreshwar Mahale",
    designation: "Assistant Professor, Data Science",
    qualification: "Ph.D. in Data Science, M.Tech in Information Technology. Expertise in Big Data Analytics, Machine Learning Algorithms, and Statistical Modeling. Industry experience with top tech companies.",
    image: "file:///C:/Users/Admin/Desktop/AI&ML%20website/AI&ML%20Faculty[1]/AI&ML%20Faculty/Moreshwar%20Mahale.jpg",
    rating: 5
  },
  {
    name: "Dr.Yudhishthir Raut",
    designation: "Professor, Robotics & AI",
    qualification: "Ph.D. in Robotics from MIT, M.S. in Electrical Engineering. Specialization in Autonomous Systems, Computer Vision, and Robotic Process Automation. 20+ years of research experience.",
    image: "file:///C:/Users/Admin/Desktop/AI&ML%20website/AI&ML%20Faculty[1]/AI&ML%20Faculty/Dr.Yudhishthir%20Raut.png",
    rating: 4
  },
  {
    name: "Vaibhavi Avachat",
    designation: "Assistant Professor, Neural Networks",
    qualification: "Ph.D. in Neural Networks from Stanford, M.Tech in AI. Research focus on Deep Learning, Pattern Recognition, and Cognitive Computing Systems. Winner of multiple research awards.",
    image: "file:///C:/Users/Admin/Desktop/AI&ML%20website/AI&ML%20Faculty[1]/AI&ML%20Faculty/Vaibhavi%20Avachat.jpg",
    rating: 5
  },
  {
    name: "Nilesh Pinjarkar",
    designation: "Associate Professor, Information Systems",
    qualification: "Ph.D. in Information Systems from UC Berkeley, M.S. in Computer Science. Expert in Database Systems, Information Retrieval, and Knowledge Management. Consultant to Fortune 500 companies.",
    image: "file:///C:/Users/Admin/Desktop/AI&ML%20website/AI&ML%20Faculty[1]/AI&ML%20Faculty/Nilesh%20Pinjarkar.png",
    rating: 4
  },
  {
    name: "Priyanka Gupta",
    designation: "Assistant Professor, Machine Learning",
    qualification: "Ph.D. in Machine Learning, M.S. in Applied Mathematics. Specializes in Predictive Analytics, Statistical Learning, and AI Ethics. Active researcher in quantum machine learning applications.",
    image: "file:///C:/Users/Admin/Desktop/AI&ML%20website/AI&ML%20Faculty[1]/AI&ML%20Faculty/Priyanka%20Gupta.webp",
    rating: 5
  },
  {
    name: "Rupali Zambre",
    designation: "Professor, Computer Vision",
    qualification: "Ph.D. in Computer Vision from Carnegie Mellon, M.S. in Electrical Engineering. Expert in Image Processing, Object Recognition, and Autonomous Vehicle Technology. 25+ years of industry experience.",
    image: "file:///C:/Users/Admin/Desktop/AI&ML%20website/AI&ML%20Faculty[1]/AI&ML%20Faculty/Rupali%20Zambre.png",
    rating: 4
  }
];

// Generate star rating HTML
function generateStars(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars += '<span class="star">★</span>';
    } else {
      stars += '<span class="star empty">★</span>';
    }
  }
  return stars;
}

// Preload images to prevent flickering
function preloadImages() {
  facultyData.forEach(faculty => {
    const img = new Image();
    img.src = faculty.image;
  });
}

// Create faculty cards - ONLY ONCE to prevent flickering
function createFacultyCards() {
  const container = document.getElementById('facultyGrid');
  
  // Prevent multiple creation
  if (container.dataset.created === 'true') {
    return;
  }
  
  // Set loading state
  container.dataset.loading = 'true';
  
  facultyData.forEach((faculty, index) => {
    const facultyCard = document.createElement('div');
    facultyCard.className = 'col-lg-3 col-md-6 col-sm-6 col-12';
    
    facultyCard.innerHTML = `
      <div class="faculty-card" data-index="${index}">
        <div class="faculty-card-header">
          <img 
            src="${faculty.image}" 
            alt="${faculty.name}" 
            class="faculty-image"
            loading="lazy"
            data-loaded="false"
            onerror="this.src='https://via.placeholder.com/80x80/cccccc/666666?text=Faculty'"
          >
        </div>
        <div class="faculty-content">
          <a href="#" class="faculty-name">${faculty.name}</a>
          <div class="faculty-designation">${faculty.designation}</div>
          <div class="rating-stars">
            ${generateStars(faculty.rating)}
          </div>
          <div class="faculty-qualification">${faculty.qualification}</div>
        </div>
      </div>
    `;
    
    container.appendChild(facultyCard);
  });
  
  // Mark as created
  container.dataset.created = 'true';
  
  // Handle image loading
  setupImageLoading();
  
  // Remove loading state after images are set up
  setTimeout(() => {
    container.dataset.loading = 'false';
  }, 500);
}

// Setup image loading with smooth transitions
function setupImageLoading() {
  const images = document.querySelectorAll('.faculty-image');
  
  images.forEach(img => {
    img.addEventListener('load', function() {
      this.style.opacity = '1';
      this.dataset.loaded = 'true';
    });
    
    img.addEventListener('error', function() {
      this.src = 'https://via.placeholder.com/80x80/cccccc/666666?text=Faculty';
      this.style.opacity = '1';
      this.dataset.loaded = 'true';
    });
    
    // If image is already loaded (cached)
    if (img.complete) {
      img.style.opacity = '1';
      img.dataset.loaded = 'true';
    } else {
      img.style.opacity = '0';
    }
  });
}

// Debounce function to prevent rapid event firing
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Handle faculty interactions - ONCE to prevent multiple listeners
function initFacultyInteractions() {
  const facultyCards = document.querySelectorAll('.faculty-card');
  
  if (facultyCards.length === 0) {
    return;
  }
  
  facultyCards.forEach(card => {
    // Single event listener for mobile
    card.addEventListener('click', function(e) {
      e.preventDefault();
      if (window.innerWidth <= 768) {
        handleMobileInteraction(card, facultyCards);
      }
    });
    
    // Touch events for mobile devices
    card.addEventListener('touchstart', function(e) {
      if (window.innerWidth <= 768) {
        handleMobileInteraction(card, facultyCards);
      }
    }, { passive: true });
  });
  
  // Single outside click listener
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.faculty-card') && window.innerWidth <= 768) {
      facultyCards.forEach(card => {
        card.classList.remove('active');
      });
    }
  });
}

// Handle mobile interaction
function handleMobileInteraction(activeCard, allCards) {
  // Close all other cards
  allCards.forEach(card => {
    if (card !== activeCard) {
      card.classList.remove('active');
    }
  });
  
  // Toggle current card
  activeCard.classList.toggle('active');
}

// Handle window resize - debounced to prevent flickering
const handleResize = debounce(function() {
  if (window.innerWidth > 768) {
    // Remove active states on desktop
    document.querySelectorAll('.faculty-card.active').forEach(card => {
      card.classList.remove('active');
    });
  }
}, 300);

// Initialize everything ONCE when DOM is ready
function init() {
  // Preload images first
  preloadImages();
  
  // Create faculty cards
  createFacultyCards();
  
  // Wait for cards to be created before adding interactions
  setTimeout(() => {
    initFacultyInteractions();
  }, 100);
  
  // Add resize listener once
  window.addEventListener('resize', handleResize);
}

// Cleanup function (optional - for SPA scenarios)
function cleanup() {
  window.removeEventListener('resize', handleResize);
}

// Start when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Export functions for external use if needed
window.facultyModule = {
  init,
  cleanup,
  facultyData
};
