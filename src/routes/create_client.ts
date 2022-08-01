import express from "express"
import {Client} from "../entities/Client"

const router = express.Router();

router.post('/api/client', async(req,res)=>{
    const {
        firstName,
        lastName,
        email,
        cardNumber,
        balance
    } = req.body

    const client = Client.create({
        first_name:firstName,
        last_name:lastName,
        email:email,
        card_number:cardNumber,
        balance:balance
    })
    await client.save();

    res.json({
        message:"Operation Successfull.",
        data: client
    });
});

export {
    router as createClientRouter
}