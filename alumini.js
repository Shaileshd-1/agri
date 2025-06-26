const alumni = [
  {
    name: "Ravi Sharma",
    photo: "Images/gallery.png",
    info: "Batch 2019 | Working at ICAR"
  },
  {
    name: "Pooja Patil",
    photo: "images/pooja.jpg",
    info: "Batch 2020 | MSc Agri, Pune"
  },
  {
    name: "Amit Kumar",
    photo: "images/amit.jpg",
    info: "Batch 2018 | Agribusiness, Mumbai"
  },
  {
    name: "Sneha Joshi",
    photo: "images/sneha.jpg",
    info: "Batch 2021 | Research Fellow"
  },
   {
    name: "Sneha Joshi",
    photo: "images/sneha.jpg",
    info: "Batch 2021 | Research Fellow"
  }
   ,{
    name: "Sneha Joshi",
    photo: "Images/gallery.png",
    info: "Batch 2021 | Research Fellow"
  },
   {
    name: "Sneha Joshi",
    photo: "images/sneha.jpg",
    info: "Batch 2021 | Research Fellow"
  },
   {
    name: "Sneha Joshi",
    photo: "images/sneha.jpg",
    info: "Batch 2021 | Research Fellow"
  },
   {
    name: "Sneha Joshi",
    photo: "images/sneha.jpg",
    info: "Batch 2021 | Research Fellow"
  }
  
];

const alumniGrid = document.getElementById('alumniGrid');

alumni.forEach(alum => {
  const card = document.createElement('div');
  card.className = 'alumni-card';
  card.innerHTML = `
    <img src="${alum.photo}" alt="${alum.name}" class="alumni-photo">
    <div class="alumni-info">
      <h4>${alum.name}</h4>
      <p>${alum.info}</p>
    </div>
  `;
  alumniGrid.appendChild(card);
});
