const PubSub = require('../helpers/pub_sub.js');
const MountainView = require('./mountainView.js');
const SelectView = require('./select_view.js');

const MountainListView = function (container) {
  this.container = container;
}

MountainListView.prototype.bindEvents = function () {
  PubSub.subscribe('Mountains:mountains-data-ready', (evt) => {
    this.mountains = evt.detail;
    console.log("container:", this.container);
    this.render();
  });
};

MountainListView.prototype.render = function () {
  const selectView = new SelectView('#regions', this.mountains);
  selectView.populate(this.mountains);
  // console.log(selectView);
  this.mountains.forEach((mountain) => {
    const mountainView = new MountainView(this.container, mountain);
    mountainView.render();
  });
};



module.exports = MountainListView;
