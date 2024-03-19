var nameInput = document.getElementById('name');
var ageInput = document.getElementById('age');
var submitBtn = document.getElementById('Submit');
var result = document.getElementById('result');
submitBtn.addEventListener('click', function () {
    //   console.log(nameInput.value, ageInput.value);
    result.innerHTML = getFullName(nameInput.value, ageInput.value);
});
var getFullName = function (firstName, lastName) {
    return "".concat(firstName, " ").concat(lastName);
};
function add(a, b) {
    return a + b;
}
