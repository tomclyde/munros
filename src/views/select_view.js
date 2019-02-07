const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
};


SelectView.prototype.bindEvents = function() {
  // PubSub.subscribe('Mountains:region-dropdown-ready', (evt) => {
  //   console.log(evt.detail);
  //   const allData = evt.detail;
  //   this.populate(allData);
  // });

  this.element.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    console.log(evt.target.value);
    PubSub.publish('SelectView:change', selectedIndex);
  });
};

SelectView.prototype.populate = function(allData){
  console.log(`selectView`, allData);
  // allData = []
  options = allData.map(mountain => mountain.region)
    .filter((region, index, regions) => regions.indexOf(region) === index);
  console.log(options);
  options.forEach((region, index) => {
    const regionsDropdown = document.querySelector('#regions')
    const option = document.createElement('option');
    option.textContent = region;
    option.value = index;
    regionsDropdown.appendChild(option);
  });
};

module.exports = SelectView;
