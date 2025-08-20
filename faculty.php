<?php
// You can set dynamic variables here if needed
$pageTitle = "PCU Faculty";
?>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><?php echo $pageTitle; ?></title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
      rel="stylesheet"
    />

    <style>
      body {
        font-family: "Segoe UI", sans-serif;
      }

      .top-bar {
        background-color: #800000;
        color: white;
        font-size: 14px;
      }

      .top-bar a {
        color: white;
        text-decoration: none;
        margin: 0 10px;
      }

      .navbar-nav .nav-link {
        font-weight: 500;
      }

      .hero-section {
        background-color: #800000;
        color: white;
        padding: 60px 20px;
        position: relative;
      }

      .hero-section h1 {
        font-weight: bold;
        font-size: 48px;
      }

      .side-button {
        position: fixed;
        top: 40%;
        z-index: 1000;
        writing-mode: vertical-rl;
        transform: rotate(180deg);
        font-weight: bold;
        font-size: 14px;
        color: white;
        padding: 10px;
      }

      .apply-btn {
        right: 0;
        background: #800000;
      }

      .enquire-btn {
        right: 50px;
        background: #0056b3;
      }

      .hero-img {
        background: url("https://via.placeholder.com/800x400") right center
          no-repeat;
        background-size: cover;
        height: 350px;
      }

      /* Faculty Section Styles */
      .faculty-section {
        padding: 80px 0;
        background-color: #f8f9fa;
      }

      .faculty-card {
        background: white;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        overflow: hidden;
        margin-bottom: 30px;
      }

      .faculty-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
      }

      .faculty-img {
        width: 100%;
        height: 250px;
        object-fit: cover;
        border-radius: 15px 15px 0 0;
      }

      .faculty-info {
        padding: 25px;
        text-align: center;
      }

      .faculty-name {
        font-size: 20px;
        font-weight: bold;
        color: #800000;
        margin-bottom: 5px;
      }

      .faculty-designation {
        color: #6c757d;
        font-size: 14px;
        margin-bottom: 10px;
      }

      .faculty-specialization {
        color: #495057;
        font-size: 13px;
        font-style: italic;
      }

      .section-title-one {
        padding: 80px 0;
      }

      @media (max-width: 768px) {
        .hero-section h1 {
          font-size: 32px;
        }
        
        .faculty-section {
          padding: 60px 0;
        }
        
        .section-title-one {
          padding: 60px 0;
        }
      }
    </style>
  </head>
  <body>
    <!-- Navbar -->
    <nav
      class="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top"
    >
      <div class="container">
        <a class="navbar-brand" href="#">
          <img
            src="https://colleges18.s3.ap-south-1.amazonaws.com/PCU_logo_152d67d738.png"
            alt=""
            width="200"
            height="85"
            class="d-inline-block align-text-top"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                >About</a
              >
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/About.html"
                    >About PCET And PCU</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="/vision.html"
                    >Vision And Mission</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="/About.html">Faculty</a>
                </li>
              </ul>
            </li>
            <li class="nav-item"><a class="nav-link" href="#">Academics</a></li>
            <li class="nav-item">
              <a class="nav-link" href="#">Professional Chapters & Clubs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Activities</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">International</a>
            </li>
            <li class="nav-item"><a class="nav-link" href="#">Research</a></li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                >Student Section</a
              >
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Student</a></li>
                <li><a class="dropdown-item" href="#">Syllabus</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <div class="card bg-dark text-white">
      <img
        src="https://pcu.edu.in/assets/images/slider2/B.Tech_AI_&_ML.webp"
        class="card-img"
        alt="..."
      />
    </div>

    <!-- Side Buttons -->
    <div class="side-button apply-btn">Apply Now</div>
    <div class="side-button enquire-btn">Enquire Now !</div>

    <!-- Key Features Section -->
    <div class="section-title-one">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="text-center">
              <div class="content">
                <h2 class="fw-bold">Our Key Features</h2>
                <p>
                  The B.Tech in Computer Science with a specialization in
                  Artificial Intelligence (AI) and Machine Learning (ML) at
                  Pimpri Chinchwad University (PCU) provides students with a
                  robust foundation in computer science engineering while
                  imparting advanced skills in AI and ML. This program
                  integrates theoretical knowledge with practical applications,
                  preparing graduates to tackle complex problems using AI and
                  machine learning technologies. Our curriculum includes core
                  subjects in Computer Science engineering and specialized
                  courses in Artificial Intelligence Engineering, covering
                  topics such as Machine Learning (ML), deep learning, natural
                  language processing, and computer vision. The program
                  emphasizes practical learning through lab sessions, projects,
                  and internships, enabling students to gain hands-on experience
                  in AI algorithm development and deployment. Graduates can
                  pursue careers as AI engineers, data scientists, machine
                  learning engineers, and more, equipped to work in various
                  industries, including tech, healthcare, finance, and
                  automotive.
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </div>

    <!-- Faculty Section -->
    <div class="faculty-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="text-center mb-5">
              <h2 class="fw-bold">Our Faculty</h2>
              <p class="lead">Meet our distinguished faculty members who are experts in AI and Machine Learning</p>
            </div>
          </div>
        </div>
        
        <div class="row">
          <!-- Faculty Member 1 -->
          <div class="col-lg-4 col-md-6">
            <div class="faculty-card">
              <img
                src="https://via.placeholder.com/300x250?text=Faculty+Photo+1"
                alt="Faculty Member 1"
                class="faculty-img"
              />
              <div class="faculty-info">
                <h4 class="faculty-name">Dr. John Smith</h4>
                <p class="faculty-designation">Professor & Head of Department</p>
                <p class="faculty-specialization">Specialization: Machine Learning, Deep Learning</p>
              </div>
            </div>
          </div>

          <!-- Faculty Member 2 -->
          <div class="col-lg-4 col-md-6">
            <div class="faculty-card">
              <img
                src="https://via.placeholder.com/300x250?text=Faculty+Photo+2"
                alt="Faculty Member 2"
                class="faculty-img"
              />
              <div class="faculty-info">
                <h4 class="faculty-name">Dr. Sarah Johnson</h4>
                <p class="faculty-designation">Associate Professor</p>
                <p class="faculty-specialization">Specialization: Computer Vision, NLP</p>
              </div>
            </div>
          </div>

          <!-- Faculty Member 3 -->
          <div class="col-lg-4 col-md-6">
            <div class="faculty-card">
              <img
                src="https://via.placeholder.com/300x250?text=Faculty+Photo+3"
                alt="Faculty Member 3"
                class="faculty-img"
              />
              <div class="faculty-info">
                <h4 class="faculty-name">Dr. Michael Brown</h4>
                <p class="faculty-designation">Assistant Professor</p>
                <p class="faculty-specialization">Specialization: Data Science, AI Ethics</p>
              </div>
            </div>
          </div>

          <!-- Faculty Member 4 -->
          <div class="col-lg-4 col-md-6">
            <div class="faculty-card">
              <img
                src="https://via.placeholder.com/300x250?text=Faculty+Photo+4"
                alt="Faculty Member 4"
                class="faculty-img"
              />
              <div class="faculty-info">
                <h4 class="faculty-name">Dr. Emily Davis</h4>
                <p class="faculty-designation">Assistant Professor</p>
                <p class="faculty-specialization">Specialization: Robotics, Neural Networks</p>
              </div>
            </div>
          </div>

          <!-- Faculty Member 5 -->
          <div class="col-lg-4 col-md-6">
            <div class="faculty-card">
              <img
                src="https://via.placeholder.com/300x250?text=Faculty+Photo+5"
                alt="Faculty Member 5"
                class="faculty-img"
              />
              <div class="faculty-info">
                <h4 class="faculty-name">Prof. Robert Wilson</h4>
                <p class="faculty-designation">Lecturer</p>
                <p class="faculty-specialization">Specialization: Algorithm Design, Data Structures</p>
              </div>
            </div>
          </div>

          <!-- Faculty Member 6 -->
          <div class="col-lg-4 col-md-6">
            <div class="faculty-card">
              <img
                src="https://via.placeholder.com/300x250?text=Faculty+Photo+6"
                alt="Faculty Member 6"
                class="faculty-img"
              />
              <div class="faculty-info">
                <h4 class="faculty-name">Dr. Lisa Anderson</h4>
                <p class="faculty-designation">Associate Professor</p>
                <p class="faculty-specialization">Specialization: Big Data Analytics, Cloud Computing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>
