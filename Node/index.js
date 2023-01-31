import e from 'express';
import express from 'express';
import mysql from 'mysql';

const app = express()

const port = 3000

const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'nodeuser',
    database: 'nodedb'
})

connection.connect()

app.get('/add', (req, res) => {
    const names = ["Wesley", "Erika", "Madalena", "Jose", "Luiz"]
    const randomName = names[Math.floor(Math.random() * names.length)]

    const added = addCustomers(randomName)

    if(added === true){
        return res.status(200).json({message: 'added successfully'})
    }

    return res.status(404).json({message: 'database error'})
    
})

app.get('/', async (req, res) => {
    let data = await selectCustomers();
    return res.status(200).send(
    `<h1>Full Cycle Rocks!</h1>
        <ul>
            ${data.map(element => {
                console.log(element)
                if (element === undefined) return ('<li> There is no data here!</li>')
                else return (`<li>${element.name}</li>`)
            }).join('')} 
        </ul>
    `
    )
})

app.get('/leave', (req, res) => {
    connection.end()
    res.status(200).json({message: 'you just left'})
})

async function selectCustomers(){
    try{
        const rows = await getCustomers().then(function(results){
            return results
        }).catch(function(err){
            console.log("Promise rejection error", err)
        })
        return rows
    }catch(error){
        return error
    }
}

function addCustomers(name){
    try{
        
        const sql = `INSERT INTO people(name) values('${name}')`
        connection.query(sql)
        return true
    }catch{
        return false
    }
}

const getCustomers = () => new Promise((resolve, reject) => {
    connection.query('SELECT * FROM people;', function (err, rows){
        if(rows === undefined) {
            reject(new Error(err));
        } else {
            resolve(Object.values(JSON.parse(JSON.stringify(rows))));
        }
    })})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})