// Faculty data array with detailed information including personal websites and scholar profiles
const facultyData = [
    {
        name: "Dr. Swati Deshmukh",
        role: "Head of Department",
        school: "CSE - AI & ML",
        image: "https://github.com/VishalMache/Website_ai-ml/blob/main/AI&ML%20Faculty%5B1%5D/AI&ML%20Faculty/Swati%20Shirke.png?raw=true",
        description: "My name is Dr.Swati Shirke-Deshumukh. I have 16.5 years of experience in academics and professional practice. My research domain is AI & ML, where I focus on exploring innovative approaches and practical applications. I am passionate about contributing to knowledge, fostering learning, and advancing technology. Thank you for your attention.",
        linkedin: "https://www.linkedin.com/in/dr-swati-shirke-deshmukh-a870792b7/",
        website: "https://swatideshmukh.edu",
        scholar: "https://scholar.google.com/citations?user=swatideshmukh"
    },
    {
        name: "Dr. Rahul Ganpatrao Sonkamble",
        role: "Assistant Professor",
        school: "CSE - AI & MLy",
        image: "https://github.com/VishalMache/Website_ai-ml/blob/main/AI&ML%20Faculty%5B1%5D/AI&ML%20Faculty/Rahul%20Sonkamble.png?raw=true",
        description: "My name is Dr. Rahul Ganpatrao Sonkamble. I have 12 years of experience in academics and professional practice. My research domain is Blockchain, Cyber Security, Computer Networks, and Machine Learning, where I focus on exploring innovative approaches and practical applications. I am passionate about contributing to knowledge, fostering learning, and advancing technology. Thank you for your attention.",
        linkedin:"https://www.linkedin.com/in/dr-rahul-sonkamble-029a7130/",
        website: "https://rgbiradar.com",
        scholar: "https://scholar.google.com/citations?user=rgbiradar"
    },
    {
        name: "Dr. Yudhishthir Raut",
        role: "Assistant Professor",
        school: "CSE - AI & ML",
        image: "https://github.com/VishalMache/Website_ai-ml/blob/main/AI&ML%20Faculty%5B1%5D/AI&ML%20Faculty/Dr.Yudhishthir%20Raut.png?raw=true",
        description: " My name is Dr Yudhishthir Raut. I have 20 years of teaching and 2 years of Industrial experience. My research domain is AI, ML, Data Science, Signal image and video processing, where I focus on exploring innovative approaches and practical applications. I am passionate about contributing to knowledge, fostering learning, and advancing technology. Thank you for your attention.",
        linkedin: "https://www.linkedin.com/in/dr-yudhishthir-raut-a4336524/",
        website: "https://yudhishthirraut.net",
        scholar: "https://scholar.google.com/citations?user=yudhishthirraut"
    },
    {
        name: "Ms. Rupali Samarth Zambre",
        role: "Assistant Professor",
        school: "CSE - AI & ML",
        image: "https://github.com/VishalMache/Website_ai-ml/blob/main/AI&ML%20Faculty%5B1%5D/AI&ML%20Faculty/Rupali%20Zambre.png?raw=true",
        description: "My name is Ms. Rupali Samarth Zambre. I have 16+ years academic years of academic experience in academics and professional practice. My research domain is Data Science and Machine Learning, where I focus on exploring innovative approaches and practical applications. I am passionate about contributing to knowledge, fostering learning, and advancing technology. Thank you for your attention.",
        linkedin: "https://linkedin.com/in/priyasharma",
        website: "https://priyasharma.ai",
        scholar: "https://scholar.google.com/citations?user=priyasharma"
    },
    {
        name: "Mr. Nilesh R. Pinjarkar",
        role: "Assistant Professor",
        school: "CSE - AI & ML",
        image: "https://github.com/VishalMache/Website_ai-ml/blob/main/AI&ML%20Faculty%5B1%5D/AI&ML%20Faculty/Nilesh%20Pinjarkar.png?raw=true",
        description: "My name is Mr. Nilesh R. Pinjarkar. I have 14.10 years of experience in academics and professional practice. My research domain is Data Mining, Cyber Security, and AIML, where I focus on exploring innovative approaches and practical applications. I am passionate about contributing to knowledge, fostering learning, and advancing technology. Thank you for your attention.",
        linkedin: "https://linkedin.com/in/ankitverma",
        website: "https://ankitverma.cyber",
        scholar: "https://scholar.google.com/citations?user=ankitverma"
    },
    {
        name: "Vaibhavi Umesh Avachat",
        role: "Assistant Professor",
        school: "CSE - AI & ML",
        image: "https://github.com/VishalMache/Website_ai-ml/blob/main/AI&ML%20Faculty%5B1%5D/AI&ML%20Faculty/Vaibhavi%20Avachat.jpg?raw=true",
        description: "My name is Vaibhavi Umesh Avachat. I have 2.8+ years of experience in academics and professional practice. My research domain is Machine Learning, Programming Languages, where I focus on exploring innovative approaches and practical applications. I am passionate about contributing to knowledge, fostering learning, and advancing technology. Thank you for your attention.",
        linkedin: "https://www.linkedin.com/in/vaibhavi-avachat-b56a4612a/",
        website: "https://meerarao.electronics",
        scholar: "https://scholar.google.com/citations?user=meerarao"
    },
    {
        name: "Ashwini Biradar",
        role: "Assistant Professor",
        school: "CSE - AI & ML",
        image: "https://github.com/VishalMache/Website_ai-ml/blob/main/AI&ML%20Faculty%5B1%5D/AI&ML%20Faculty/Ashwini%20Biradar.jpg?raw=true",
        description: "My name is Ashwini Biradar. I have 4 years of Academic Experience& 1.5 years of Industrial  Experience years of experience. My research domain is Data Mining, Computer Network, and ETL Testing, where I focus on exploring innovative approaches and practical applications. I am passionate about contributing to knowledge, fostering learning, and advancing technology. Thank you for your attention.",
        linkedin: "https://linkedin.com/in/sameerkulkarni",
        website: "https://sameerkulkarni.mech",
        scholar: "https://scholar.google.com/citations?user=sameerkulkarni"
    },
    {
        name: "Priyanka Gupta",
        role: "Assistant Professor",
        school: "CSE - AI & ML",
        image: "https://raw.githubusercontent.com/VishalMache/Website_ai-ml/refs/heads/main/AI%26ML%20Faculty%5B1%5D/AI%26ML%20Faculty/Priyanka%20Gupta.webp",
        description: "My name is Priyanka Gupta. I have 4+ Years of Academic, 7 years of Industrial, and 3 Other years of experience in academics and professional practice. My research domain is Data Science, Blockchain, and Network Management, where I focus on exploring innovative approaches and practical applications. I am passionate about contributing to knowledge, fostering learning, and advancing technology. Thank you for your attention.",
        linkedin: "https://linkedin.com/in/sunitadeshmukh",
        website: "https://sunitadeshmukh.physics",
        scholar: "https://scholar.google.com/citations?user=sunitadeshmukh"
    },
    {
        name: "Tanuja Pande",
        role: "Assistant Professor",
        school: "CSE - AI & ML",
        image: "https://raw.githubusercontent.com/VishalMache/Website_ai-ml/refs/heads/main/AI%26ML%20Faculty%5B1%5D/AI%26ML%20Faculty/Tanuja%20Lanjewar.webp",
        description: "My name is Tanuja Lanjewar. I have 2+ years of experience in academics and professional practice. My research domain is Machine learning, Ai, where I focus on exploring innovative approaches and practical applications. I am passionate about contributing to knowledge, fostering learning, and advancing technology. Thank you for your attention.",
        linkedin: "https://linkedin.com/in/kiranjoshi",
        website: "https://kiranjoshi.chemistry",
        scholar: "https://scholar.google.com/citations?user=kiranjoshi"
    },
    {
        name: "Moreshwar A. Mahale",
        role: "Assistant Professor",
        school: "CSE - AI & ML",
        image: "https://github.com/VishalMache/Website_ai-ml/blob/main/AI&ML%20Faculty%5B1%5D/AI&ML%20Faculty/Moreshwar%20Mahale.jpg?raw=true",
        description: "My name is Moreshwar A. Mahale. I am a Fresher in academics and professional practice. My research domain is Image Processing, Machine Learning, and Precision Farming, where I focus on exploring innovative approaches and practical applications. I am passionate about contributing to knowledge, fostering learning, and advancing technology. Thank you for your attention.",
        linkedin: "https://www.linkedin.com/in/moreshwar-mahale-34b50321b/",
        website: "https://rahulpatankar.math",
        scholar: "https://scholar.google.com/citations?user=rahulpatankar"
    }
    
];

// Function to open modal with faculty details
function openModal(facultyIndex) {
    const faculty = facultyData[facultyIndex];
    const modal = document.getElementById('facultyModal');
    
    // Populate modal with faculty data
    document.getElementById('modalImage').src = faculty.image;
    document.getElementById('modalName').textContent = faculty.name;
    document.getElementById('modalRole').textContent = faculty.role;
    document.getElementById('modalSchool').textContent = faculty.school;
    document.getElementById('modalDescription').textContent = faculty.description;
    
    // Update existing buttons
    document.getElementById('linkedinBtn').href = faculty.linkedin;
    document.getElementById('websiteBtn').href = faculty.website;
    
    // Update new social icons
    document.getElementById('modalLinkedinIcon').href = faculty.linkedin;
    document.getElementById('modalWebsiteIcon').href = faculty.website;
    document.getElementById('modalScholarIcon').href = faculty.scholar;
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Function to close modal
function closeModal() {
    const modal = document.getElementById('facultyModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore background scrolling
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('facultyModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});