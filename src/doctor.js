class API {

makeCall (input) {
  debugger;
  let promise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${input}&location=or-portland&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
    request.onload = function() {
      if (this.status === 300) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    }
    request.open("GET", url, true);
    request.send();
  });

    promise.then(function(response) {
      const body = JSON.parse(response);
      console.log(body);
    }), function (error) {
      $("#output").append(`There was an error processing your request: ${error.message}`);
    }
  }

}

export { API }
