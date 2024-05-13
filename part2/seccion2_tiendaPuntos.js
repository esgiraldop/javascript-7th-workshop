// CREACIÓN DE LOS PROTOTIPOS
function categProducto(nombre, descripcion){
    this.nombre = nombre
    this.descripcion = descripcion
}

categProducto.prototype.listarProductos = function(){
    return `Listando tipo de productos de tipo ${this.nombre}`
}

function Producto(nombre, puntosNecesarios, precio, clave, stock, categProducto){
    this.nombre = nombre
    this.puntosNecesarios = puntosNecesarios
    this.precio = precio
    this.clave = clave
    this.stock = stock
    this.categProducto = categProducto
}
// Creando métodos de el prototipo "Producto"
Producto.prototype.actualizarStock = function (isLess) {
    console.log("Actualizando stock...")
    if(isLess){
        this.stock --
    }else{
        this.stock ++
        console.log(`Hay ${this.stock} unidades de ${this.name}.`)
    }
}
Producto.prototype.obtenerInfo = function () {
    return `Este producto es ${this.nombre}, vale COP ${this.precio} y hay ${this.stock} unidades disponibles`
}
// Creando prototipos de producto físico y digital
function ProductoFisico(nombre, puntosNecesarios, precio, clave, stock, categProducto){
    // ProductoFisico hereda todos los atributos de Producto y no se adiciona ninguno
    Producto.call(this, nombre, puntosNecesarios, precio, clave, stock, categProducto)
}

//Heredando de Producto
ProductoFisico.prototype = Object.create(Producto.prototype)
ProductoFisico.prototype.constructor = ProductoFisico

ProductoFisico.prototype.enviarProducto = function(){
    console.log(`Enviando producto al cliente...`)
}

function ProductoDigital(nombre, puntosNecesarios, precio, clave, stock, categProducto, URL){
    Producto.call(this, nombre, puntosNecesarios, precio, clave, stock, categProducto)
    this.URL = URL // Para el digital, se adiciona este atributo
}

// Herando de producto
ProductoDigital.prototype = Object.create(Producto.prototype)
ProductoDigital.prototype.constructor = ProductoDigital

ProductoDigital.prototype.descargar = function (){
    console.log("Descargando producto...")
}

ProductoDigital.prototype.obtenerProductoEmail = function (){
    return `${this.nombre}@gmail.com`
}

// Creando los prototipos de persona, usuario y admin
function Persona(nombre, email, clave){
    this.nombre = nombre
    this.email = email
    this.clave = clave
}

function Usuario(nombre, email, clave, puntosAcumulados){
    Persona.call(this, nombre, email, clave)
    this.puntosAcumulados = puntosAcumulados
}

Usuario.prototype = Object.create(Persona.prototype)
Usuario.prototype.constructor = Usuario

Usuario.prototype.acumularPuntos = function (puntos){
    console.log(`${puntos} puntos ganados!`)
    this.puntosAcumulados += puntos
}

Usuario.prototype.canjearPuntos = function(puntos){
    console.log(`Canjeando ${puntos} puntos...`)
    this.puntosAcumulados -= puntos
}

function Admin(nombre, email, clave){
    Persona.call(this, nombre, email, clave)
}

Admin.prototype = Object.create(Persona.prototype)
Admin.prototype.constructor = Admin

Admin.prototype.agregarProducto = function (){
    console.log("Agregando producto...")
}

Admin.prototype.modificarProducto = function(){
    console.log("Modificando producto...")
}

Admin.prototype.eliminarUsuario = function(){
    console.log("Eliminando usuario...")
}

// Creando los prototipos de Actividad y Orden canje
function Actividad(tipo, puntosOtorgados){
    this.tipo = tipo
    this.puntosOtorgados = puntosOtorgados
}

Actividad.prototype.completarActividad = function (){
    console.log(`Actividad ${this.tipo} completada`)
}

function OrdenCanje(usuario, producto, fecha){
    this.usuario = usuario
    this.producto = producto
    this.fecha = fecha
}

OrdenCanje.prototype.confirmarOrden = function (){
    console.log(`La orden con producto ${this.producto} para el usuario ${this.usuario} ha sido confirmada`)
}

OrdenCanje.prototype.cancelarOrden = function (){
    console.log(`La orden con producto ${this.producto} para el usuario ${this.usuario} ha sido cancelada`)
}

// PROBANDO LOS PROTOTIPOS
// Instanciando un tipo de producto
let categ1 = new categProducto("frutas", "Esta es la categoría de frutas")
let categ2 = new categProducto("videojuegos", "Esta es la categoría de juegos digitales")

// Pasando una instancia de "categProducto" a la instancia de "Producto"
producto1 = new ProductoFisico("Aguacate", 10, 100, 123, 3, categ1)
producto2 = new ProductoDigital("RDR2", 15, 200, 123, 2, categ2)

console.log(producto1.obtenerInfo())
producto1.enviarProducto()
console.log(producto1.actualizarStock(true))
console.log(producto1.obtenerInfo())

console.log("\n\n")

console.log(producto2.obtenerInfo())
producto2.descargar()
console.log(`El email del producto es ${producto2.obtenerProductoEmail()}`)
console.log(producto2.actualizarStock(true))
console.log(producto2.obtenerInfo())

console.log("\n\nProbando usuarios y admin...\n\n")

usuario1 = new Usuario("Erick", "hola@gmail.com", 123, 5)
console.log(`${usuario1.nombre} es el nuevo usuario y tiene ${usuario1.puntosAcumulados} puntos acumulados`)
usuario1.acumularPuntos(10)
console.log(`${usuario1.nombre} es el nuevo usuario y tiene ${usuario1.puntosAcumulados} puntos acumulados`)

console.log("\n\n")

admin1 = new Admin("Fede", "chao@gmail.com", 123)
console.log(`${admin1.nombre} es el admin y su email es ${admin1.email}`)
admin1.eliminarUsuario()

console.log("\n\nProbando actividades...\n\n")
actividad1 = new Actividad("Saltar lazo", 10)
actividad1.completarActividad()

console.log("\n\nProbando orden canje...\n\n")
orden1 = new OrdenCanje("Fede", "limones", "05/04/1997")
orden1.confirmarOrden()
orden1.cancelarOrden()