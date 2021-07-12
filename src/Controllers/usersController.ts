import {Users} from "../models/users";


exports.getAllUsers = async (req: any, reply: any) => {
    try {
        const users = await Users.find();
        console.log(users)
        return users;
    } catch (err) {
        console.error(err)
    }
}

exports.getUser = async (req: any, reply: any) => {
    try {
        const firstUser = await Users.findOne(req.params);
        return firstUser;
    } catch (err) {
        console.error(err)
    }
}

exports.login = async (req: any, reply: any) => {
    try {
        const firstUser = await Users.findOne(req.body);
        console.log(firstUser)
        return firstUser;
    } catch (err) {
        console.error(err)
        return false
    }
}

exports.addUser = async (req: any, reply: any) => {
    try {
        const user = new Users();

        user.login = req.body.login;
        user.password = req.body.password;
        await Users.save(user);
        console.log("SAVE USER")
        return reply.send("Ready")

    } catch (err) {
        console.error(err)
    }
}

