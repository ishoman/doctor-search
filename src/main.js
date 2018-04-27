import { API } from './doctor.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

let displayResult = function (body) {
  let doctorArray = body.data
  console.log(doctorArray);
  for (let i = 0; i < doctorArray.length; i++) {
    $("#output").append(`<li>${body.data[i].profile.first_name} ${body.data[i].profile.last_name}</li>`);
  }
}

let displayError = function(error) {
  $("#errorOutput").text(`There was an error processing your request: ${error.message}`);
}

let displayNoResults = function(body) {
  $("#errorOutput").text(`Your search returned no results.`);
}

$(document).ready(function() {
  $("#doctor").submit(function(event) {
    event.preventDefault();
    $('#output').resetField();
    let input = $('#search').val();
    let api = new API
    api.makeCall(input, displayResult, displayError, displayNoResults);
  });
  let resetField = function(){
    $('#output').val("")
    $()
  }
});
