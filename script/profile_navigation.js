const pnavigation1 = document.querySelector('#pnavigation1');
const pnavigation2 = document.querySelector('#pnavigation2');
const pnavigation3 = document.querySelector('#pnavigation3');
const pnavigation4 = document.querySelector('#pnavigation4');




$('.navigation1').click(function() {
    pnavigation1.style.display = 'block'
    pnavigation2.style.display = 'none'
    pnavigation3.style.display = 'none'
    pnavigation4.style.display = 'none'
});

$('.navigation2').click(function() {
    pnavigation1.style.display = 'none'
    pnavigation2.style.display = 'block'
    pnavigation3.style.display = 'none'
    pnavigation4.style.display = 'none'
});

$('.navigation3').click(function() {
    pnavigation1.style.display = 'none'
    pnavigation2.style.display = 'none'
    pnavigation3.style.display = 'block'
    pnavigation4.style.display = 'none'
});

$('.navigation4').click(function() {
    pnavigation1.style.display = 'none'
    pnavigation2.style.display = 'none'
    pnavigation3.style.display = 'none'
    pnavigation4.style.display = 'block'
});


$('#myfb').click(function() {
    window.open('https://www.facebook.com/laurencejem.galenopilapil/', '_blank');
});

$('#myinsta').click(function() {
    window.open('https://www.instagram.com/laurencepilapil/', '_blank');
});

$('#mylinkin').click(function() {
    window.open('https://www.linkedin.com/in/laurence-jem-pilapil-374a35271/', '_blank');
});

$('#svg_back').click(function() {
    history.back()
});


