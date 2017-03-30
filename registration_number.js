var getPlate = document.querySelector("#platevalue");
var addButton = document.querySelector("#addbutton");
var enteredPlates = document.querySelector('.enteredRegNum');
var dropdownlist = document.querySelector('.dropdown');
var alertText = document.querySelector('#alertText');
var startPlates = ['ca', 'cj', 'cl'];
var storedPlates = [];


var addRegPlate = function()
{
  if (getPlate.value == '' || getPlate.value == ' ' || getPlate.value == '  '
  || getPlate.value == '   ' || getPlate.value == '    ' || getPlate.value == '     '
  || getPlate.value == '      ' || getPlate.value == '       ' || getPlate.value ==
    '          ' || getPlate.value ==     '            ')
  {

  }

  else
  {
    for (var i = 0; i < startPlates.length; i++)
    {
      if ((getPlate.value).startsWith(startPlates[i]))
      {
        var regElement = document.createElement("li");
        regElement.textContent = getPlate.value;
        regElement.className  = 'regplate';
        //enteredPlates.innerHTML = regEl ement;
        regElement.innerHTML = getPlate.value.toUpperCase();
        enteredPlates.appendChild(regElement);
        storedPlates.push(getPlate.value);
      }

      else
      {
        //alertText.innerHTML = alert('We only take registation number from Cape Town, Paarl and Stellenbonch!');
      }
    }
  }

  getPlate.value = '';
  return '';
}


var filterPlatesFromPlaces = function(places)
{
  var plates = document.querySelectorAll('.regplate');

  for (var y = 0; y < plates.length; y++)
  {
      if (!(plates[y].innerHTML.startsWith(places)))
      {
        console.log(storedPlates[y]);
        plates[y].classList.add('hidden');
      }
  }
  console.log(plates);
}

var resetPlates = function()
{
  var plates = document.querySelectorAll('.regplate');

  console.log("****");
  console.log(plates);

  for (var y = 0; y < plates.length; y++)
  {
      console.log(storedPlates[y]);
      console.log("looked at one plate");
      plates[y].classList.remove('hidden');
  }
  console.log(plates);
}

var filterPlatesFromPlacesChanged = function()
{
  console.log(dropdownlist.value);
  resetPlates();

  if (dropdownlist.value == "ALL")
  {
    console.log(storedPlates);
    //plates.classList.remove('hidden');
    //enteredPlates.innerHTML = plates;
  }

  else
  {
    filterPlatesFromPlaces([dropdownlist.value]);
  }
}
//
addButton.addEventListener('click', addRegPlate);
dropdownlist.addEventListener('change', filterPlatesFromPlacesChanged);
