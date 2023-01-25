import express from 'express';
import mysql from 'mysql';

const app = express()

const port = 3000

const config = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}


const connection = mysql.createConnection(config)
const connect  = () => { return connection.connect()}
const leave  = () => { return connection.end()}

const names = ["Wesley", "Erika", "Madalena", "Jose", "Luiz"]

const randomName = names[Math.floor(Math.random() * names.length)]


app.post('/add', async (req, res) => {
    const sql = `INSERT INTO people(name) values('${randomName}')`
    connection.query(sql)
    leave()
})

app.get('/', async (req, res) => {
    let data = await selectCustomers();
    const response = JSON.stringify(data)
    return res.status(200).send({data: data})
})

function selectCustomers(){
    try{
        connect()
        const rows = connection.query('SELECT * FROM nodedb.people')
        return rows
    }catch(error){
        return error
    }finally{
        leave()
    }
}

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})