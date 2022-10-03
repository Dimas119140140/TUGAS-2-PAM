//1.closure
function buatFungsi () {
    var name = 'Dimzzz';
    function displayName() {
        alert(name);
    }
    return displayName;
}

var myFunc = buatFungsi();
myFunc();