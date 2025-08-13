import { User } from "../../DB/model/user.model.js";
export default register = async (req, res) => {
  try {
    //get data
    const { fullname, email, password, phoneNumber, dob } = req.body;
    //user existence
    const userExist = await User.findOne({ $or: [{ email }, { phoneNumber }] });
    if (userExist) {
      throw new Error("email already exist", { cause: 409 });
    }
    //prepare data
    const user = new User({
        fullname,
        email,
        password,
        phoneNumber,
        dob
    })
    //create user
     await user.save()
  } catch (error) {
    return res
      .status(error.cause || 500)
      .json({ message: error.message, success: false });
  }
};
