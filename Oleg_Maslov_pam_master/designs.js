// Select color input
const color = document.querySelector('#colorPicker');
// Select size input
const height = document.querySelector('#inputHeight');
const width = document.querySelector('#inputWidth');
// Table the canvas to be added to
const table = document.querySelector('#pixelCanvas');

// Size 1 x 1 initial grid appears when page loads fist time
makeGrid();

// When size is submitted by the user, call makeGrid()
// "Submit" button clears the all the setting, Event Listener needs to be added
// to override the default
const submit = document.querySelectorAll('input')[2];
submit.addEventListener('click', function(event){
  event.preventDefault();
  table.firstElementChild.remove();
  makeGrid();
});

function makeGrid(){
  for(i = 0; i < height.value; i++){
    let row = table.insertRow();
    for(j = 0; j < width.value; j++){
      let cell = row.insertCell();
      cell.addEventListener('click', function(){
        cell.style.backgroundColor = color.value;
      });
    }
  }
}
