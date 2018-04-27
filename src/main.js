import { API } from './doctor.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $("#doctor").submit(function(event) {
    event.preventDefault();
    debugger;
    let input = $('#search').val();
    let api = new API
    api.makeCall(input);
  });
});
