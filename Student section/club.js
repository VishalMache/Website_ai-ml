const clubs = [
      {
        id: 1,
        name: 'Coding Club',
        category: 'Tech',
        logo: 'bi-laptop',
        tagline: 'Code. Innovate. Inspire.',
        about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, laudantium.',
        contact: '123@example.com'
      },
      {
        id: 2,
        name: 'Club2',
        category: 'category2',
        logo: 'bi-laptop',
        tagline: 'Tagline2',
        about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, laudantium.',
        contact: '123@example.com'
      },
      {
        id: 3,
        name: 'Club3',
        category: 'category3',
        logo: 'bi-laptop',
        tagline: 'Tagline3',
        about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, laudantium.',
        contact: '123@example.com'
      },
      {
        id: 4,
        name: 'Club4',
        category: 'category4',
        logo: 'bi-laptop',
        tagline: 'Tagline4',
        about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, laudantium.',
        contact: '123@example.com'
      }
    ];

    const events = [
      { date: 'Date1', name: 'Event1', club: 'Coding Club'},
      { date: 'Date2', name: 'Event2', club: 'Club2'},
      { date: 'Date3', name: 'Event3', club: 'Club4' }
    ];

    // Function to display Clubs
    function displayClubs(filtered = clubs) {
      const container = document.getElementById('clubsContainer');
      container.innerHTML = '';
      filtered.forEach(club => {
        container.innerHTML += `
        <div class="col-md-6 col-lg-4">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <div class="d-flex align-items-center mb-2">
                <i class="bi ${club.logo} fs-2 me-3 text-custom"></i>
                <h5 class="mb-0">${club.name}</h5>
              </div>
              <p class="mb-1 text-secondary">${club.tagline}</p>
              <button class="btn btn-custom-red mt-3 btn-sm" data-bs-toggle="modal" data-bs-target="#clubModal"
                onclick='showClubDetail(${club.id})'>Learn More</button>
            </div>
          </div>
        </div>`;
      });
    }

    function showClubDetail(id) {
      const club = clubs.find(c => c.id === id);
      document.getElementById('clubModalLabel').textContent = club.name;
      document.getElementById('clubModalBody').innerHTML = `
        <p><strong>Category:</strong> ${club.category}</p>
        <p>${club.about}</p>
        <p><strong>Contact:</strong> <a href="mailto:${club.contact}">${club.contact}</a></p>
      `;
    }
    
    // Function to Display Events
    function displayEvents() {
      const eventsList = document.getElementById('eventsList');
      eventsList.innerHTML = '';
      events.forEach(event => {
        eventsList.innerHTML += `
        <li class="list-group-item d-flex align-items-center">
          <span class="timeline-dot me-3"></span>
          <div>
            <span class="fw-semibold">${event.name}</span>
            <br>
            <small>${event.date} • <span class="badge bg-secondary">${event.club}</span></small>
          </div>
        </li>`;
      });
    }


    displayClubs();
    displayEvents();