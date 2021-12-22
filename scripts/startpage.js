var alert = document.getElementById('alert');

var nameInput = document.getElementById('name');
var locateInput = document.getElementById('location');
var dateInput = document.getElementById('date');
var descInput = document.getElementById('description');

var what = document.getElementById('what-text');
var where = document.getElementById('where-text');
var when = document.getElementById('when-text');
var why = document.getElementById('why-text');

var submitButt = document.getElementById('submitProtest');
var previewButt = document.getElementById('previewProtest');

submitButt.addEventListener("click", function() {
    var name = nameInput.value;
    var location = locateInput.value;
    var date = dateInput.value;
    var desc = descInput.value;
    if(name == '' || location == '' || date == '' || desc == '') {
        alert.innerHTML = 'Please enter the requested information';
    } else {
        alert.innerHTML = 'Successfully submitted!';
        nameInput.value = '';
        locateInput.value = '';
        dateInput.value = '';
        descInput.value = '';
    }
})

previewButt.addEventListener("click", function() {
    alert.innerHTML = '';
    var name = nameInput.value;
    var location = locateInput.value;
    var date = dateInput.value;
    var desc = descInput.value;
    what.innerHTML = name;
    where.innerHTML = location;
    when.innerHTML = date;
    why.innerHTML = desc;
})