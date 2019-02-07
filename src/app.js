const MountainListView = require('./views/MountainListView.js');
const Mountains = require('./models/mountains.js');

document.addEventListener('DOMContentLoaded', () => {
  const mountainsListContainer = document.querySelector('#mountains');
  const mountainListView = new MountainListView(mountainsListContainer);
  mountainListView.bindEvents();

  const mountains = new Mountains();
  mountains.getData();
  console.log(mountains);
});
