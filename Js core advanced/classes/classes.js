class Person {
  constructor(fullname, age, country) {
    this.fullname = fullname;
    this.age = age;
    this.country = country;
  }

  getInfoAboutPerson() {
    console.log(
      `Fullname: ${this.fullname}, age: ${this.age}, country: ${this.country}`
    );
  }
}

const anton = new Person("Solodkov Anton", 21, "Belarus");
const igor = new Person("Korotkevich Igor", 21, "Russia");

anton.getInfoAboutPerson();
igor.getInfoAboutPerson();