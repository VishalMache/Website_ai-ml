// Faculty data array with detailed information including personal websites and scholar profiles
const facultyData = [
    {
        name: "Dr. Swati Deshmukh",
        role: "Head of Department",
        school: "School of Engineering & Technology",
        image: "file:///C:/Users/Admin/Desktop/AI&ML%20website/AI&ML%20Faculty[1]/AI&ML%20Faculty/Swati%20Shirke.png",
        description: "Dr. Swati Deshmukh is a distinguished academic leader with over 15 years of experience in engineering education. She specializes in Advanced Robotics, AI Systems, and Machine Learning. She has published over 50 research papers in international journals and has been instrumental in developing innovative curriculum for engineering students.",
        linkedin: "https://linkedin.com/in/swatideshmukh",
        website: "https://swatideshmukh.edu",
        scholar: "https://scholar.google.com/citations?user=swatideshmukh"
    },
    {
        name: "Dr. R. G. Biradar",
        role: "Director, Outreach & Admissions and HOD",
        school: "School of Engineering & Technology",
        image: "faculty2.jpg",
        description: "Dr. R. G. Biradar serves as the Head of Department with expertise in Machine Learning and Internet of Things (IoT). He has led numerous research projects funded by government agencies and has mentored over 100 graduate students. His work focuses on practical applications of AI in industrial settings.",
        linkedin: "https://linkedin.com/in/rg-biradar",
        website: "https://rgbiradar.com",
        scholar: "https://scholar.google.com/citations?user=rgbiradar"
    },
    {
        name: "Dr. Yudhishthir Raut",
        role: "Assistant Professor",
        school: "School of Engineering & Technology",
        image: "faculty3.jpg",
        description: "Dr. Yudhishthir Raut is an Assistant Professor specializing in Big Data Analytics and Cloud Computing. He holds a Ph.D. in Computer Science and has industry experience with major tech companies. His research interests include distributed systems, data mining, and cloud security.",
        linkedin: "https://linkedin.com/in/yudhishthirraut",
        website: "https://yudhishthirraut.net",
        scholar: "https://scholar.google.com/citations?user=yudhishthirraut"
    },
    {
        name: "Dr. Priya Sharma",
        role: "Associate Professor",
        school: "School of Computer Science",
        image: "faculty4.jpg",
        description: "Dr. Priya Sharma is an Associate Professor with expertise in Artificial Intelligence and Ethics. She is passionate about responsible AI development and has contributed to policy frameworks for AI governance. Her research focuses on bias detection in machine learning models.",
        linkedin: "https://linkedin.com/in/priyasharma",
        website: "https://priyasharma.ai",
        scholar: "https://scholar.google.com/citations?user=priyasharma"
    },
    {
        name: "Dr. Ankit Verma",
        role: "Professor",
        school: "School of Information Technology",
        image: "faculty5.jpg",
        description: "Dr. Ankit Verma is a Professor and expert in Cybersecurity and Network Systems. He has over 20 years of experience in both academia and industry. He leads the university's cybersecurity research lab and collaborates with government agencies on national security projects.",
        linkedin: "https://linkedin.com/in/ankitverma",
        website: "https://ankitverma.cyber",
        scholar: "https://scholar.google.com/citations?user=ankitverma"
    },
    {
        name: "Dr. Meera Rao",
        role: "Senior Lecturer",
        school: "School of Electronics",
        image: "faculty6.jpg",
        description: "Dr. Meera Rao specializes in Embedded Systems and VLSI Design. She has extensive experience in developing embedded solutions for automotive and aerospace industries. Her research contributes to the development of next-generation electronic systems.",
        linkedin: "https://linkedin.com/in/meerarao",
        website: "https://meerarao.electronics",
        scholar: "https://scholar.google.com/citations?user=meerarao"
    },
    {
        name: "Dr. Sameer Kulkarni",
        role: "Assistant Professor",
        school: "School of Mechanical Engineering",
        image: "faculty7.jpg",
        description: "Dr. Sameer Kulkarni is a specialist in CAD/CAM and Robotics. He has worked on several automation projects for manufacturing industries. His expertise lies in designing robotic systems for industrial applications and advanced manufacturing processes.",
        linkedin: "https://linkedin.com/in/sameerkulkarni",
        website: "https://sameerkulkarni.mech",
        scholar: "https://scholar.google.com/citations?user=sameerkulkarni"
    },
    {
        name: "Dr. Sunita Deshmukh",
        role: "Lecturer",
        school: "School of Physics",
        image: "faculty8.jpg",
        description: "Dr. Sunita Deshmukh focuses on Applied Physics and Materials Science. Her research involves developing new materials for renewable energy applications. She has collaborated with international research institutions on sustainable technology projects.",
        linkedin: "https://linkedin.com/in/sunitadeshmukh",
        website: "https://sunitadeshmukh.physics",
        scholar: "https://scholar.google.com/citations?user=sunitadeshmukh"
    },
    {
        name: "Dr. Kiran Joshi",
        role: "Professor",
        school: "School of Chemistry",
        image: "faculty9.jpg",
        description: "Dr. Kiran Joshi conducts research in Organic Chemistry and Synthesis. She has developed several novel synthetic methodologies that have been adopted by pharmaceutical companies. Her work contributes to drug discovery and development processes.",
        linkedin: "https://linkedin.com/in/kiranjoshi",
        website: "https://kiranjoshi.chemistry",
        scholar: "https://scholar.google.com/citations?user=kiranjoshi"
    },
    {
        name: "Dr. Rahul Patankar",
        role: "Head, Mathematics",
        school: "School of Mathematics",
        image: "faculty10.jpg",
        description: "Dr. Rahul Patankar is Head of Mathematics Department and a specialist in Mathematical Modeling and Data Analysis. He applies mathematical techniques to solve real-world problems in engineering and science. His work bridges theory and practical applications.",
        linkedin: "https://linkedin.com/in/rahulpatankar",
        website: "https://rahulpatankar.math",
        scholar: "https://scholar.google.com/citations?user=rahulpatankar"
    },
    {
        name: "Dr. Shruti Gokhale",
        role: "Lecturer",
        school: "School of Civil Engineering",
        image: "faculty11.jpg",
        description: "Dr. Shruti Gokhale specializes in Urban Planning and Infrastructure Development. She has worked on several smart city projects and sustainable urban development initiatives. Her expertise includes transportation systems and environmental impact assessment.",
        linkedin: "https://linkedin.com/in/shrutigokhale",
        website: "https://shrutigokhale.civil",
        scholar: "https://scholar.google.com/citations?user=shrutigokhale"
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
