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


module.exports = {
    getPersonas : getPersonas,
}