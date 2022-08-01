import express from "express"
import { Banker } from "../entities/Banker";

const router = express.Router();

router.post('/api/banker', async(req,res)=>{
    const {
        firstName,
        lastName,
        email,
        cardNumber,
        employeeId
    } = req.body

    const banker = Banker.create({
        first_name:firstName,
        last_name:lastName,
        email:email,
        card_number:cardNumber,
        employee_number:employeeId
    })
    await banker.save();

    res.json({
        message:"Operation Successfull.",
        data: banker
    });
});

export {
    router as createBankerRouter
}