const cardData = [
  {
    title: "Supervisor",
    desc: "Monitors activity to identify project roadblocks",
    imgSrc: "./images/icon-supervisor.svg",
    color: "var(--clr-cyan)",
  },
  {
    title: "Team Builder",
    desc: "Scans our talent network to create the optimal team for your project",
    imgSrc: "./images/icon-team-builder.svg",
    color: "var(--clr-red)",
  },
  {
    title: "Karma",
    desc: "Regularly evaluates our talent to ensure quality",
    imgSrc: "/images/icon-karma.svg",
    color: "var(--clr-orange)",
  },
  {
    title: "Calculator",
    desc: " Uses data from past projects to provide better delivery estimates",
    imgSrc: "/images/icon-calculator.svg",
    color: "var(--clr-blue)",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelector(".card-container");

  cardData.forEach((card) => {
    const cardEl = document.createElement("article");
    cardEl.classList.add("card");
    cardEl.style.borderTopColor = card.color;
    cardEl.innerHTML = `
      <div>
        <h2 class="card-title text-heading-card">${card.title}</h2>
        <p class="card-description text-card">
        ${card.desc}</p>
      </div>       
        <img src=${card.imgSrc} alt=${card.title} class="card-image" />
        `;
    cards.appendChild(cardEl);
  });
});
