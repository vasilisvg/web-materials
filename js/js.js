/* ********************************************* 
JavaScript. When we need it.
********************************************* */

// I put this inline because I was unable to link to it...

// Measure measurer
var measure20 = document.getElementById('measure-20em');
var measure30 = document.getElementById('measure-30em');
var measure40 = document.getElementById('measure-40em');

var conversation = document.getElementById('conversation');

measure20.addEventListener('click', function () {
  conversation.className = 'measure20';
});

measure30.addEventListener('click', function () {
  conversation.className = 'measure30';
});

measure40.addEventListener('click', function () {
  conversation.className = 'measure40';
});