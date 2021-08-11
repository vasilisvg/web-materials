var tags = document.querySelectorAll('*');
var i = 0;
var hs = document.querySelectorAll('h1,h2,h3');
var as = document.querySelectorAll('a');
console.log(as.length);
var introText = 'This page has ' + hs.length + ' headings, ' + as.length + ' links, and one form';
var intro = document.createElement('p');
intro.innerHTML = introText;
document.body.prepend(intro);

while (i < tags.length) {
  var tName = (tags[i].tagName);
  console.log(tName)

  /* GROUPS */
  if (tName == 'SECTION' || tName == 'MAIN' || tName == 'FOOTER') {
    tChildren = tags[i].querySelectorAll('*');
    tcLength = tChildren.length;
    tags[i].setAttribute('data-tag-block','Group, ' + tcLength + ' items. ');
  }
  if (tName == 'NAV') {
    tags[i].setAttribute('data-tag-block','Navigation. ');
  }

  /* HEADINGS */
  if (tName == 'H1') {
    tags[i].setAttribute('data-tag','Heading level 1. ');
  }
  if (tName == 'H2') {
    tags[i].setAttribute('data-tag','Heading level 2. ');
  }
  if (tName == 'H3') {
    tags[i].setAttribute('data-tag','Heading level 3. ');
  }

  /* AUDIO */
  if (tName == 'DIV' && tags[i].classList.contains('episode-player')) {
    tags[i].setAttribute('data-tag-block','Form, four controls. ');
  }

  /* UL */
  if (tName == 'UL') {
    tChildren = tags[i].querySelectorAll('ul > *');
    tcLength = tChildren.length;
    tags[i].setAttribute('data-tag-block','List, ' + tcLength + ' items. ');
  }
  if (tName == 'LI') {
    tags[i].setAttribute('data-tag','List item. ');
  }
  if (tName == 'A') {
    tags[i].setAttribute('data-tag','Link. ');
  }
  if (tName == 'B') {
    tags[i].setAttribute('data-tag','Bold. ');
  }
  if (tName == 'EM') {
    tags[i].setAttribute('data-tag','emphasis: ');
  }

  if (tName == 'A' && tags[i].classList.contains('logo')) {
    tags[i].setAttribute('data-tag-block','Link. Image. Alternative text: logo');
  }
  if (tName == 'ABBR' && tags[i].title) {
    tags[i].setAttribute('data-tag-after','(' + tags[i].title + ')');
  }

  i++;
}
