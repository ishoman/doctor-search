import { } from './doctor.js'; //ANY FUNCTIONS YOU ARE IMPORTING
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $("#doctor").submit(function(event) {
    event.preventDefault();

  });
});
