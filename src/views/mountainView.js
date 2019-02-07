const MountainView = function (container, mountain) {
  this.mountainsContainer = container;
  this.mountain = mountain;
};
//
MountainView.prototype.render = function () {
  const mountainsSection = document.querySelector('#mountains');
  const mountainContainer = document.createElement('div');
  // mountainContainer.classList.add('mountain');

  const name = this.createMountainHeading();
  const height = this.createMountainHeight();
  const meaning = this.createMountainMeaning();
  mountainContainer.appendChild(name);
  mountainContainer.appendChild(height);
  mountainContainer.appendChild(meaning);
  mountainsSection.appendChild(mountainContainer);
  // const countriesList = this.createCountriesList();
  // mountainContainer.appendChild(countriesList);

  // this.mountainsContainer.appendChild(mountainContainer);
};
//
MountainView.prototype.createMountainHeading = function () {
  const name = document.createElement('h2');
  // name.classList.add('mountain-name');
  if (!this.mountain.name) {
    name.textContent = "Misc";
  } else {
    name.textContent = this.mountain.name;
  }
  console.log(name);
  return name;
};

MountainView.prototype.createMountainHeight = function () {
  const height = document.createElement('p');
  // name.classList.add('mountain-name');
  height.textContent = `Height: ${this.mountain.height}`;
  return height;
};

MountainView.prototype.createMountainMeaning = function () {
  const meaning = document.createElement('p');
  // name.classList.add('mountain-name');
  meaning.textContent = `Meaning: ${this.mountain.meaning}`;
  return meaning;
};

// MountainView.prototype.createCountriesList = function () {
//   const countriesList = document.createElement('ul');
//   countriesList.classList.add('countries');
//   this.populateList(countriesList);
//   return countriesList;
// };
//
// MountainView.prototype.populateList = function (list) {
//   this.mountain.countries.forEach((country) => {
//     const countryListItem = document.createElement('li');
//     countryListItem.textContent = country.name;
//     list.appendChild(countryListItem);
//   });
// };

module.exports = MountainView;
