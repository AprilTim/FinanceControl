import {Users} from "../models/users";
import {UserProfile} from "../models/usersProfile";

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

exports.addUser = async (req: any, reply: any) => {
    try {
        console.log(req.body)
        const usersProfile = new UserProfile();
        usersProfile.firstName = req.body.name;
        usersProfile.lastName = req.body.lastName;

        const user = new Users();
        user.name = req.body.name;
        user.age = req.body.age;
        user.usersProfile = usersProfile;

        await UserProfile.save(usersProfile);
        await Users.save(user);
        console.log("SAVE USER")
    } catch (err) {
        console.error(err)
    }
}

