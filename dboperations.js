var config = require('./dbconfig')
const sql = require('mssql')
const personas = require('./personas')

const axios = require('axios');
const Persona = require('./personas');

async function getPersonas() {
    try{
        let pool = await sql.connect(config)
        let personas = await pool.request().query("SELECT * from dhkbwo_personas")
        return personas.recordsets;
    }
    catch(err){
        console.log('error')
    }
}

async function altaPersona(nuevaPersona){
    try{

        let pool = await sql.connect(config)
        let altaPersona = await pool.request()
        .input('nombre',sql.NVarChar,nuevaPersona.nombre)
        .input('apellidos',sql.NVarChar,nuevaPersona.apellidos)
        .input('edad',sql.Int,nuevaPersona.edad)
        .input('telefono',sql.NVarChar,nuevaPersona.telefono)
        .input('ocupacion',sql.NVarChar,nuevaPersona.ocupacion)
        .query('insert into dhkbwo_personas values (@nombre,@apellidos,@edad,@telefono,@ocupacion)')

        console.log("return: "+altaPersona.recordsets)
        return altaPersona.recordsets

    }catch(err){
        console.log(err) 
    }

}

async function bajaPersona(id_persona){
    try{
        let pool = await sql.connect(config)
        let persona = await pool.query`select * from dhkbwo_personas where id_persona = ${id_persona}`
        if(persona == null){
                persona = null
                return persona.recordsets
        }else{
            await pool.request().query("delete from dhkbwo_personas where id_persona ="+id_persona)
            return persona.recordsets  
        }
        
    }
    catch(err){
        console.log(err)
    }
}

async function actualizarPersona(id_persona,datosPersona){
    try{
        
        const persona = new Persona()
        let nuevaPersona ={
            nombre:"",
            apellidos:"",
            edad:"",
            telefono:"",
            ocupacion:"",
            precio:null
        }
        let pool = await sql.connect(config)
        await pool.query`select * from dhkbwo_personas where id_persona = ${id_persona}`.then(promise=>{
            if(promise.recordsets[0]==""){ 
                console.log("aqui entro"+promise.recordsets[0])
                promise.recordsets[0] = ""
                return promise.recordsets[0]
            }
            else{
                console.log("aqui entro2")
                persona.setNombre(promise.recordsets[0][0].nombre)
                persona.setApellidos(promise.recordsets[0][0].apellidos)
                persona.setEdad(promise.recordsets[0][0].edad)
                persona.setTelefono(promise.recordsets[0][0].telefono)
                persona.setOcupacion(promise.recordsets[0][0].ocupacion)
                
                if(datosPersona.nombre == null) nuevaPersona.nombre = persona.getNombre()
                else nuevaPersona.nombre = datosPersona.nombre 
    
                if(datosPersona.edad == null) nuevaPersona.edad = persona.getEdad()
                else nuevaPersona.edad = datosPersona.edad 
    
                if(datosPersona.apellidos == null) nuevaPersona.apellidos = persona.getApellidos()
                else nuevaPersona.apellidos = datosPersona.apellidos 
    
                if(datosPersona.telefono == null) nuevaPersona.telefono = persona.getTelefono()
                else nuevaPersona.telefono = datosPersona.telefono 
    
                if(datosPersona.ocupacion == null) nuevaPersona.ocupacion = persona.getOcupacion()
                else nuevaPersona.ocupacion = datosPersona.ocupacion 

                let updateInfo = pool.request()
                .input('nombre',sql.NVarChar,nuevaPersona.nombre)
                .input('apellidos',sql.NVarChar,nuevaPersona.apellidos)
                .input('edad',sql.Int,nuevaPersona.edad)
                .input('telefono',sql.NVarChar,nuevaPersona.telefono)
                .input('ocupacion',sql.NVarChar,nuevaPersona.ocupacion)
                .query(`update dhkbwo_personas set nombre=@nombre,apellidos=@apellidos,edad=@edad,telefono=@telefono,ocupacion=@ocupacion where id_persona =${id_persona}`)
                
            }
        }).then(promise=>{ 
            return nuevaPersona
        })
        

    }catch(err){
        console.log(err)
    }

}

module.exports = {
    getPersonas : getPersonas,
    altaPersona: altaPersona,
    bajaPersona: bajaPersona,
    actualizarPersona: actualizarPersona,
}