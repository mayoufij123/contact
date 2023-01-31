const express = require('express')
const ContactRouter = express.Router()
const ContactSchema = require('../model/contact')

ContactRouter.get('/getuser', async(req, res) => {
    try {
        const cont = await ContactSchema.find()
        res.status(200).send({ msg: 'this is the users list', cont })

    } catch (err) {
        res.status(500).send('you have no user to get')

    }

})



ContactRouter.post('/add', async(req, res) => {
    try {
        const NewContact = new ContactSchema(req.body)
        await NewContact.save()
        res.status(200).send({ msg: 'you did it the conctact is aded', NewContact })

    } catch (err) {
        console.log(err)
        res.status(500).send('could not add auser')
    }

})



ContactRouter.put('/updateuser/:id', async(req, res) => {
    try {
        const { id } = req.paramsconst
        const updateuser = await ContactSchema.findByIdAndUpdate(id, { $set: {...req.body } })
        res.status(200).send({ msg: 'you can update me', updateuser })
    } catch (err) {
        console.log(err)
    }

})


ContactRouter.delete('/deleteuser/:id', async(req, res) => {
    try {
        const { id } = req.paramsconst
        const deletconst = await ContactSchema.findOneAndDelete(id)
        res.status(200).send({ msg: 'you  delete that user', deletconst })

    } catch (err) {
        console.log(err)
    }

})


ContactRouter.get('/getuser/:id', async(req, res) => {
    try {
        const { id } = req.paramsconst
        const uniqueuser = await ContactSchema.findById(id)
        res.status(200).send({ msg: 'you find that user', uniqueuser })
    } catch (err) { console.log(err) }




})
module.exports = ContactRouter;