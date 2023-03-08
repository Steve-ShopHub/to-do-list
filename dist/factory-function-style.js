function createPerson(name, age) {
  const person = {
    name: name,
    age: age,
  };

  person.greet = function () {
    console.log(
      "Hello, my name is " + this.name + " and I am " + this.age + " years old."
    );
  };

  person.celebrateBirthday = function () {
    this.age++;
    console.log("It's my birthday! Now I am " + this.age + " years old.");
  };

  return person;
}
