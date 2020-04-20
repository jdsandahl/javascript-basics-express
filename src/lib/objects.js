const createPerson = (name, age) => {
  return { name: name, age: age };
};

const getName = object => {
  return object.name;
  /*
  return  object["name"] //alternative  way 
  */
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  if (person["age"] > 65) {
    return true;
  } else {
    return false;
  }
};

const getAges = people => {
  let result = [];
  for (let i = 0; i < people.length; i++) {
    result.push(people[i]["age"]);
  }
  return result;
};

const findByName = (name, people) => {
  return people.find(person => person.name === name);
};

const findHondas = cars => {
  return cars.filter(car => car.manufacturer === "Honda");
};

const averageAge = people => {
  let sum = 0;
  for (let i = 0; i < people.length; i++) {
    sum += people[i]["age"];
  }
  return sum / people.length;
};

const createTalkingPerson = (name, age) => {
  return {
    name: name,
    age: age,
    introduce: function(otherPerson) {
      return `Hi ${otherPerson}, my name is ${this.name} and I am ${this.age}!`;
    }
  };
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
