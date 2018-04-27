import { API } from './doctor.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

let displayResult = function (body) {
  $('#output').empty();
  $('#errorOutput').empty();
  let doctorArray = body.data
  for (let i = 0; i < doctorArray.length; i++) {
    $("#output").append(`<li>${body.data[i].profile.first_name} ${body.data[i].profile.last_name}
                          <div class="doctorInfo">
                          <ul>
                          <li>${body.data[i].profile.bio}</li>
                          <ul>
                          </div>
                        </li>`);
  }
  console.log(doctorArray)
}

let displayError = function(error) {
  $('#output').empty();
  $('#errorOutput').empty();
  $("#errorOutput").text(`There was an error processing your request: ${error.message}`);
}

let displayNoResults = function(body) {
  $('#output').empty();
  $('#errorOutput').empty();
  $("#errorOutput").text(`Your search returned no results.`);
}

$(document).ready(function() {
  $("#doctor").submit(function(event) {
    event.preventDefault();
    let input = $('#search').val();
    let api = new API
    api.makeCall(input, displayResult, displayError, displayNoResults);
  });


});
