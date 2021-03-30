class Persona{
    constructor(nombre,apellidos,edad,telefono,ocupacion){
        this.nombre = nombre
        this.apellidos = apellidos
        this.edad = edad
        this.telefono = telefono
        this.ocupacion = ocupacion
    }

    getNombre(){
        return this.nombre
    }
    
    setNombre(nombre){
        this.nombre = nombre
    }

    getApellidos(){
        return this.apellidos
    }
    
    setApellidos(apellidos){
        this.apellidos = apellidos
    }

    getEdad(){
        return this.edad
    }
    
    setEdad(edad){
        this.edad = edad
    }

    getTelefono(){
        return this.telefono
    }
    
    setTelefono(telefono){
        this.telefono = telefono
    }

    getOcupacion(){
        return this.ocupacion
    }
    
    setOcupacion(ocupacion){
        this.ocupacion = ocupacion
    }
}

module.exports = Persona;
