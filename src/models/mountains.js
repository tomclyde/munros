const Request = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Mountains = function () {
  this.mountains = [];
};

Mountains.prototype.getData = function () {
  const url = 'https://munroapi.herokuapp.com/munros';
  const request = new Request(url);
     request.get()
       .then((activity) =>{
         this.mountains = activity;
    // console.log(this.data);
    // console.log(this.mountains);
    PubSub.publish('Mountains:mountains-data-ready', this.mountains);
  });
};


Mountains.prototype.handleDataReady = function (mountains) {
  const mountainDetails = this.getMountainDetails(mountains);
  this.modelMountains(mountains, mountainDetails);
};

Mountains.prototype.getMountainDetails = function (mountains) {
  const mounts = mountains.map(mountain => mountain.name);
  console.log(mounts);
  return mounts
    // .filter((region, index, regions) => regions.indexOf(region) === index);
};

Mountains.prototype.modelMountains = function (mountains, mountainNames) {
  this.mountains = mountainNames.map((mountainName) => {
    return {
      name: mountainName,
      // mountains: this.mountainsByContinent(mountains, continentName)
    };
  });
};

// Mountains.prototype.countriesByContinent = function (countries, continent) {
//   return countries.filter(country => country.region === continent);
// };

module.exports = Mountains;
