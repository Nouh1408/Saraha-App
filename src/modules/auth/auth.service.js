import { User } from "../../DB/model/user.model.js";
import bcrypt from 'bcrypt'
export const register = async (req, res) => {
  try {
    //get data
    const { fullName, email, password, phoneNumber, dob } = req.body;
    console.log("REQ BODY:", req.body);
    //user existence
    const userExist = await User.findOne({
      $or: [
        {
          $and: [
            { email: { $exists: true } },
            { email: { $ne: null } },
            { email: email },
          ],
        },
        {
          $and: [
            { phoneNumber: { $exists: true } },
            { phoneNumber: { $ne: null } },
            {phoneNumber:phoneNumber}
          ],
        },
      ],
    });
    // const userExist = await User.findOne({email});
    if (userExist) {
      throw new Error("User already exist", { cause: 409 });
    }
    //prepare data
    const user = new User({
      fullName,
      email,
      password:bcrypt.hashSync(password, 10),
      phoneNumber,
      dob,
    });
    //create user
    await user.save();
    return res.status(201).json({message:"created success"})
  } catch (error) {
    return res
      .status(error.cause || 500)
      .json({ message: error.message, success: false });
  }
};
