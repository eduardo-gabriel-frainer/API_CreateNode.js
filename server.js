import express, { response } from 'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors';



const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.use(cors());


app.post('/users', async (request, response) => {
    
    await prisma.user.create({
        data: {
            name: request.body.name,  
            age: request.body.age,  
            email: request.body.email 
        }
    })

    response.status(201).json(request.body)

})

app.get('/users', async (request, response) => {

    const users = await prisma.user.findMany()

    response.status(200).json(users)
})


app.put('/users/:id', async (request, response) => {

    
    await prisma.user.update({
        where: {
            id: request.params.id
        },
        data: {
            name: request.body.name,  
            age: request.body.age,  
            email: request.body.email 
        }
    })

    response.status(201).json(request.body)

})


app.delete('/users/:id', async (request, response) => {

    await prisma.user.delete({
        where: {
            id: request.params.id
        }
       
    })

    // const users = await prisma.user.delete()

    response.status(200).json( {message: "Usuario deletado" })
})

app.listen(3000)

// edu
// p59gjg3StlnwGIfj