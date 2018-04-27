class API {

makeCall (input, displayResult, displayError, displayNoResults) {
  let promise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${input}&location=or-portland&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
    request.onload = function() {
      if (this.status === 200) {
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
      if (body.data.length === 0){
        displayNoResults(body);
      } else {
        displayResult(body);
      }
    }), function (error) {
      displayError(error)
    }
  }

}

export { API }
