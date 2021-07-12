import {Expenses} from "../models/expenses";
import {Users} from "../models/users";

exports.addExpenses = async (req: any, reply: any) => {
    try {
        const expense = new Expenses();

        expense.cost = req.body.cost;
        expense.type = req.body.typeExpense;
        const user = await Users.findOne(req.body.id);
        expense.user = req.body.id;
        await Expenses.save(expense);
        console.log("SAVE EXPENSE")
        return reply.send("Ready")

    } catch (err) {
        console.error(err)
    }
}