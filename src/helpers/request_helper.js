const Request = function (url) {
  this.url = url;
};

Request.prototype.get = function () {
  return fetch(this.url)
    .then((response) => {
      return response.json();
    });
    // .catch(() => {}); ///  IF error caught here then a promise will be returned to activity.js,
                         ///  so error wont be caught there,  it'll be dealt with by 'then' in activity.js

};

module.exports = Request;
