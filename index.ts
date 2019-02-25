

class Greeter {

    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;

    }

    showGreeting() {
        console.log('From showGreeting function this.firstName: ', this.firstName, 'this.lastName: ', this.lastName);
        const row2 = document.getElementById("r1c2");
        console.log('row2', row2, 'document', document);
        row2.innerHTML = 'Hello ' + this.firstName + ' ' + this.lastName + '.'

    }

    resetGreeting() {
        console.log('From showGreeting function this.firstName: ', this.firstName, 'this.lastName: ', this.lastName);
        const row2 = document.getElementById("r1c2");
        console.log('row2', row2, 'document', document);
        row2.innerHTML = 'Place Mouse Here!'
    }
}


const greeter = new Greeter('Billy', 'Moua');

