// Dynamic Greeting
function getGreeting() {
    const hours = new Date().getHours();
    if (hours < 12) return 'Good morning';
    else if (hours < 16) return 'Good afternoon';
    else return 'Good evening';
  }
  document.getElementById('greeting').textContent = `${getGreeting()} and welcome to ELSA's Meritorious Awards, 2024.`;

  // Contestants Data
  const categories = [
    {
      name: "Best Dressed Elasalite",
      contestants: [
        { name: "Ikong Jessi", image: "images/Ugwebe.jpg" },
        { name: "Jane Oguzie", image: "images/Jane.jpg" },
        { name: "Jessi Jay", image: "images/Ikong.jpg" },
        { name: "Oyonanke Emmanuel", image: "images/Oyonanke.jpg" }
      ]
    },
    {
      name: "Most Articulate Elsalite",
      contestants: [
        { name: "Ukwo Joseph", image: "images/Joseph.jpg" },
        { name: "Ngbe Lawrence", image: "images/Lawrence.jpg" },
        { name: "Oyonanke Emmanuel", image: "images/Oyonanke.jpg" },
        { name: "Nkaiso Benjamin", image: "images/Benjow.jpg" }
      ]
    },
    {
      name: "Leadership Personality of the Year",
      contestants: [
        { name: "Ikong Jessi", image: "images/Ugwebe.jpg" },
        { name: "Ngbe Lawrance", image: "images/Lawrence.jpg" },
        { name: "Ukwo Joseph", image: "images/Joseph.jpg" },
        { name: "Oyonanke Emmanuel", image: "images/Oyonanke.jpg" }
      ]
    },
    {
      name: "Best Sportsman of the Year",
      contestants: [
        { name: "Ikong Jessi", image: "images/Jessi.jpg" },
        { name: "Omoke Samuel", image: "images/Sammy.jpg" },
        { name: "Onwe Bright", image: "images/Teddy.jpg" },
        { name: "Nkaiso Benjow", image: "images/Benjow.jpg" }
      ]
    },
    {
      name: "Most Influential Elsalite",
      contestants: [
        { name: "Ngbe Lawrence", image: "images/Lawrence.jpg" },
        { name: "Benjamin Nkaiso", image: "images/Benjow.jpg" },
        { name: "Ukwo Lawrence", image: "images/Joseph.jpg" },
        { name: "Oyonake Emmanuel", image: "images/Oyonanke.jpg" }
      ]
    }
  ];

  // Display categories and contestants
  const categoriesDiv = document.getElementById('categories');

  categories.forEach((category, index) => {
    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('category');
    categoryDiv.innerHTML = `<h2>${category.name}</h2>`;

    category.contestants.forEach(contestant => {
      const contestantDiv = document.createElement('div');
      contestantDiv.classList.add('contestant');
      contestantDiv.innerHTML = `
        <img src="${contestant.image}" alt="${contestant.name}">
        <h2>${contestant.name}</h2>
        <button onclick="vote('${category.name}', '${contestant.name}')">Vote</button>
      `;
      categoryDiv.appendChild(contestantDiv);
    });

    categoriesDiv.appendChild(categoryDiv);
  });

  // Voting Logic
  function vote(category, contestant) {
    const voted = localStorage.getItem(category);
    if (voted) {
      alert(`You've already voted in the ${category} category!`);
    } else {
      localStorage.setItem(category, contestant);
      alert(`You voted for ${contestant} in ${category}.`);
    }
  }

  // Submit Votes and Redirect
function submitVotes() {
const allCategoriesVoted = categories.every(category => localStorage.getItem(category.name));

if (allCategoriesVoted) {
  alert('Thank you for voting!');
  // Redirect to the homepage or another page after showing the alert
  setTimeout(() => {
    window.location.href = 'homepage.html'; // Replace 'homepage.html' with your actual homepage file
  }, 1000); // Delay for 1 second to allow the message to be seen
} else {
  alert('Please vote in all categories before submitting.');
}
}
