const db= require('./cnx')

async function lista() {
    await db.connect()
    resultado= await db.query('select * from alunos')
    console.log(resultado.rows)
    await db.end()
}

lista() 