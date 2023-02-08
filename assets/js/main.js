/* Lev 1_1 */
console.log("---------Lev 1_1---------");

class Ball {
    constructor(ballType = "regular") {
        this.ballType = ballType;
    }
}

ball1 = new Ball();
ball2 = new Ball("super");

console.log(ball1.ballType);	//=> "regular"
console.log(ball2.ballType);	//=> "super"

/* Lev 1_2 */
console.log("---------Lev 1_2---------");

class Person {
    constructor(name, alter) {
        this.name = name;
        this.alter = alter;
    }
    info() {
        return `Name: ${this.name}, Alter: ${this.alter}`;
    }
}

const nameAlter = new Person("Veronica", 25);
console.log(nameAlter.info());	//=> Name: Veronica, Alter: 25

/* Lev 1_3 */
/* ----------1_3---------- */
class PersonPrintHTML extends Person {
    constructor(name, alter, bestanden) {
        super(name, alter);
        this.bestanden = bestanden;
    }

    write() {
        if (this.bestanden) {
            article.innerHTML += `<p>${this.info()}</p>`;
        } else {
            article.innerHTML += `<p style="color:red">${this.info()}</p>`;
        }
    }
}

let people = {};
let counter = 0;
let article = document.querySelector("article");

document.querySelector("input[type='submit']").addEventListener("click", (event) => {
    event.preventDefault();

    const formName = document.querySelector("input[type='text']").value;
    const formAge = parseInt(document.querySelector("input[type='number']").value);
    const formBestanden = document.querySelector("input[type='checkbox']").checked;

    people[counter++] = new PersonPrintHTML(formName, formAge, formBestanden);

    article.innerHTML = "";
    Object.values(people).forEach((person => person.write()));
});


