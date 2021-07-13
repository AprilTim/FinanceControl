import {Expenses} from "../models/expenses";
import {Users} from "../models/users";

exports.addExpenses = async (req: any, reply: any) => {
    try {
        const expense = new Expenses();

        expense.cost = req.body.cost;
        expense.type = req.body.type;
        expense.user = req.body.user;
        await Expenses.save(expense);
        console.log("SAVE EXPENSE")
        return reply.send("Ready")

    } catch (err) {
        console.error(err)
    }
}

exports.getExpenses = async (req: any, reply: any) => {
    try {
        const expenses = await Expenses.find();
        console.log(expenses)
        return expenses
    } catch (err) {
        console.error(err)
    }
}