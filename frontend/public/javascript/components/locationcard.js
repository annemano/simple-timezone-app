const locationCard = (location, time, div) => {
  div.innerHTML =
  `<div>
      <h2>${location}</h2>
      <p>${time}</p>
    </div>`;
};

export { locationCard };
