var Greeter = (function () {
    function Greeter(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Greeter.prototype.showGreeting = function () {
        console.log('From showGreeting function this.firstName: ', this.firstName, 'this.lastName: ', this.lastName);
        var row2 = document.getElementById("r1c2");
        console.log('row2', row2, 'document', document);
        row2.innerHTML = 'Hello ' + this.firstName + ' ' + this.lastName + '.';
    };
    Greeter.prototype.resetGreeting = function () {
        console.log('From showGreeting function this.firstName: ', this.firstName, 'this.lastName: ', this.lastName);
        var row2 = document.getElementById("r1c2");
        console.log('row2', row2, 'document', document);
        row2.innerHTML = 'Place Mouse Here!';
    };
    return Greeter;
})();
var greeter = new Greeter('Billy', 'Moua');
