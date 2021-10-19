class Desafio {
  static crearArrayDeObjetos(array: number[], propiedad: string) {
    // si en array recibe [1,2,3,4] y en propiedad "a"
    // debe devolver
    // [{ a:1 }, { a:2 }, { a:3 }, { a:4 }]
    // usar método map
    // Pista 1: para que algo se convierta en objeto debemos ponerlo entre { }
    // Pista 2: una forma de asignar la clave de un objeto es
    // poniendolo entre [], por ejemplo {[nuevaClave]: nuevoValor}
  }
  static filtrarPor(array: any[], propiedad: string, letra: string) {
    // si en array recibe [{ a: 100, unTexto: "hola" }, { a: 34, unTexto: "chau" }]
    // y "unTexto" como propiedad
    // y "c" como letra
    // debe devolver
    // [{ a: 34, unTexto: "chau" }]
    // usar método filter
    // Pista 1: una forma de acceder a la clave de un objeto es con [], ejemplo:
    // item[propiedad]
    // Pista 2: para saber si una letra esta incluida en un texto usamos includes()
  }
  static buscarPorProp(array: any[], propiedad: string, valorABuscar: string) {
    // si en array recibe [{ a: 100, unTexto: "hola" }, { a: 34, unTexto: "chau" }]
    // y "unTexto" como propiedad
    // y "chau" como valorABuscar
    // debe devolver
    // { a: 34, unTexto: "chau" }
    // usar método find
    // Pista 1: una forma de acceder a la clave de un objeto es con [], ejemplo:
    // item[propiedad]
    // Pista 2: cuando usemos el find para comparar un resultado usaremos el ===
  }
  static ordenarPor(array: any[], propiedad: string) {
    // si en array recibe [{ a: 100, unTexto: "hola" }, { a: 34, unTexto: "chau" }]
    // y "a" como propiedad
    // debe devolver
    // [{ a: 34, unTexto: "chau" }, { a: 100, unTexto: "hola" }]
    // usar un el método sort
    // Pista 1: recordar que el método sort envía dos parámetros a su callback,
    // generalmente representados por la letra a y b
    // Pista 2: una forma de acceder a la clave de un objeto es con [], ejemplo:
    // a[propiedad]
  }
}

export { Desafio };
