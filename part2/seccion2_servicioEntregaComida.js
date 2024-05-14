//CREANDO PROTOTIPOS

function Menu(nombre, descripcion){
    this.nombre = nombre
    this.descripcion = descripcion
}

Menu.prototype.listarProductos = function (){
    console.log(`Listando productos del menu ${this.nombre}`)
}

function MenuFisico (nombre, descripcion){
    Menu.call(this, nombre, descripcion)
}

MenuFisico.prototype = Object.create(Menu.prototype)
MenuFisico.prototype.constructor = MenuFisico

Menu.prototype.listarProductos = function (){
    console.log(`Listando productos del menu fisico ${this.nombre}`)
}

function MenuQr (nombre, descripcion){
    Menu.call(this, nombre, descripcion)
}

MenuQr.prototype = Object.create(Menu.prototype)
MenuQr.prototype.constructor = MenuFisico

Menu.prototype.listarProductos = function (){
    console.log(`Listando productos del menu Qr ${this.nombre}`)
}

function Restaurante(nombre){
    this.nombre = nombre
    this.platos = []
    console.log(`Restaurante ${nombre} creado`)
}

Restaurante.prototype.agregarPlato = function (plato){
    this.platos.push(plato)
    console.log(`Plato ${plato} agregado`)
}

Restaurante.prototype.actualizarPlato = function(plato){
    console.log(`Plato ${plato} actualizado`)
}

Restaurante.prototype.eliminarPlato = function(plato){
    this.platos.splice(this.platos.indexOf("plato"), 1)
    console.log(`Plato ${plato} eliminado`)
}

// Restaurantes físico y digital
function RestauranteFisico(nombre, direccion, menuFisico){
    Restaurante.call(this, nombre)
    this.direccion = direccion
    this.menuFisico = menuFisico
}

RestauranteFisico.prototype = Object.create(Restaurante.prototype)
RestauranteFisico.prototype.constructor = RestauranteFisico

function RestauranteDigital(nombre, URL, menuQr){
    Restaurante.call(this, nombre)
    this.URL = URL
    this.menuQr = menuQr
}

RestauranteDigital.prototype = Object.create(Restaurante.prototype)
RestauranteDigital.prototype.constructor = RestauranteDigital

// Persona, cliente y repartidor
function Persona(nombre, email, clave){
    this.nombre = nombre
    this.email = email
    this.clave = clave
}

Persona.prototype.autenticacion = function (){
    console.log("Autenticacion exitosa!")
}

function Cliente(nombre, email, clave, direccion, telefono){
    Persona.call(this, nombre, email, clave)
    this.direccion = direccion
    this.telefono = telefono
}

Cliente.prototype = Object.create(Persona.prototype)
Cliente.prototype.constructor = Cliente

Cliente.prototype.realizarPedido = function (nombre){
    console.log(`Pedido realizado ${nombre}`)
}

Cliente.prototype.verHistorialPedidos = function(){
    console.log(`Mirando historial de pedidos...`)
}

function Repartidor(nombre, email, clave, vehiculo, disponibilidad){
    Persona.call(this, nombre, email, clave)
    this.vehiculo = vehiculo
    this.disponibilidad = disponibilidad
}

Repartidor.prototype = Object.create(Persona.prototype)
Repartidor.prototype.constructor = Repartidor

Repartidor.prototype.aceptarEnvio = function (){
    console.log("Aceptando envío...")
}

Repartidor.prototype.actualizarUbicacion = function(){
    console.log("Actualizando ubicación...")
}

Repartidor.prototype.completarEntrega = function(){
    console.log("Completando entrega...")
}

Repartidor.prototype.actualizarEstado = function(){
    console.log("Actualizando estado...")
}

// Creando prototipo pedido
function Pedido(cliente, restaurante, detallesPedido, estadoPedido, repartidor){
    this.cliente = cliente
    this.restaurante = restaurante
    this.detallesPedido = detallesPedido
    this.estadoPedido = estadoPedido
    this.repartidor = repartidor
}

// PROBANDO PROTOTIPOS
console.log("Probando Menus\n\n")
menu1 = new MenuFisico("El menu sancochoso", "Este es menu fisico para describir diferentes tipos de sanchosito")
menu1.listarProductos()

menu2 = new MenuQr("El menu sancochoso virtual", "Este es menu virtual para describir diferentes tipos de sanchosito")
menu2.listarProductos()

console.log("\n\nProbando restaurantes\n\n")

restaurante1 = new RestauranteFisico("El sancochadero", "av siempre viva", menu1)
restaurante1.agregarPlato("sancoshito")
console.log(`${restaurante1.menuFisico.nombre} del ${restaurante1.nombre}`)

restaurante2 = new RestauranteDigital("El sancochadero virtual", "http://avsiempreviva.com.co", menu2)
restaurante2.agregarPlato("sancoshito virtual")
console.log(`${restaurante2.menuQr.nombre} del ${restaurante2.nombre}`)

// Probando la clase Pedido que contiene varias otras clases ya definidas
cliente1 = new Cliente("Erick el cliente", "erickcliente@gmail.com", 123, "av siempre viva", 12345678)
repartidor1 = new Repartidor("Fede el repartidor", "federepartidor@gmail.com", 123, "mazda 323", true)
pedidoDigital = new Pedido(cliente1, repartidor1, "Este es un pedido virtual de aguacates", "En curso", repartidor1)

pedidoDigital.prototype.actualizarEstado = function (){
    console.log("Actualizando estado del pedido...")
}

pedidoDigital.prototype.calcularTotal = function (){
    console.log("El valor total del pedido es: COP x")
}
console.log("Probando Pedido\n\n")
console.log(`${pedidoDigital.detallesPedido}`)