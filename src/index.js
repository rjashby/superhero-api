import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Superhero from './super';

function getCharacter(response) {
  if (response[0].id) {
    $('#name').text(`Name: ${response[0].name}`);
    $('#alignment').text(`Alignment: ${response[0].biography.alignment}`);
    $('#image').html(`<img src="${response[0].image.url}">`);
  } else {
    $('.showErrors').text(`There was an error: ${response[0].error},  ${response[1].error},  ${response[2].error},  ${response[3].error}`);
    
  }
}

async function makeApiCall() {
  const response = await Superhero.getHero();
  getCharacter(response);
}

$(document).ready(function() {
  $('#random').click(function() {
    makeApiCall();
  });
});