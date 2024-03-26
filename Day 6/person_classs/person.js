class person {
  constructor(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getAge() {
    return this.age;
  }

  getEmail() {
    return this.email;
  }

  setFirstName(newFirstName) {
    this.firstName = newFirstName;
  }

  setLastName(newLastName) {
    this.lastName = newLastName;
  }

  setAge(newAge) {
    this.age = newAge;
  }

  setEmail(newEmail) {
    this.email = newEmail;
  }
}

const person1 = new person("vrudali", "Holey", 24, "vrudali@gmail.com");

console.log(
  person1.firstName +
    " " +
    person1.lastName +
    " " +
    person1.age +
    " " +
    person1.email
);

person1.setFirstName("dikshant");
person1.setLastName("kale");
person1.setAge(37);
person1.setEmail("kaleD@gmail.com");

console.log(person1.getFullName());
console.log(person1.getAge());
console.log(person1.getEmail());
