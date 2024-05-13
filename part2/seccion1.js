function Person(nombre, apellido, edad, profesión, hobbies) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.profesión = profesión;
  this.hobbies = hobbies;
}

Person.prototype.saludar = function () {
  return `Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`;
};

function Student(nombre, apellido, edad, promedio, cursos) {
  Person.call(this, nombre, apellido, edad);
  this.promedio = promedio;
  this.cursos = cursos;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

let student1 = new Student("Erick", "Giraldo", 15, 5, 1)
console.log(student1.saludar())

Student.prototype.presentarExamen = function () {
  console.log("Estoy presentando un examen.");
};

Student.prototype.saludar = function () {
  return `${Person.prototype.saludar.call(this)} Y soy un estudiante.`;
};

student2 = new Student("Erick", "Giraldo", 15, 5, 1)
console.log(student1.saludar())