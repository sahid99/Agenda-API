class Persona{
    constructor(id_persona,nombre,apellidos,edad,telefono,ocupacion){
        this.id_persona = id_persona
        this.nombre = nombre
        this.apellidos = apellidos
        this.edad = edad
        this.telefono = telefono
        this.ocupacion = ocupacion
    }

    getiId_persona(){
        return this.id_persona
    }
    
    setId_persona(id_persona){
        this.id_persona = id_persona
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
