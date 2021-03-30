var config = require('./dbconfig')
const sql = require('mssql')
const personas = require('./personas')

const axios = require('axios');

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


module.exports = {
    getPersonas : getPersonas,
    altaPersona: altaPersona,
}