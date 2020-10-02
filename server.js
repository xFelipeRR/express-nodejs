const express = require('express')
const path = require('path')
const members = require('./Members')
const logger = require('./middleware/logger')

const app = express()

    // Init Middleware
    //app.use(logger)

    // Gets All Members
    app.get('/api/members', (req, res) => {
        res.json(members)
    })
    // Get Single Member
    app.get('/api/members/:id', (req, res) => { 
        const found = members.some((member) => {
            member.id === +req.params.id
    })

        if(found){
            res.json(members.filter((member) => {
                member.id === +req.params.id
        }))
    }else{
        return 1;
    }
})



// Set Static Folder
const PORT = process.env.PORT || 5000  
app.listen(PORT, () => {console.log(`Server started on port ${PORT}` )})


app.use(express.static(path.join(__dirname, 'public'))) /* define arquivos estáticos que 
                                                    formarão rotas por base de seu
                                                        nome, também podem ser definidos
                                                    estilos css e etc. */
