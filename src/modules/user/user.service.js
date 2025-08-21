import { User } from "../../DB/model/user.model.js";

export const deleteAccount = async (req, res) => {
  try {
    const { id } = req.params;
    const deltedUser = await User.findByIdAndDelete(id);
    if (!deltedUser) {
      throw new Error("user not fond", { cause: 404 });
    }
    return res
      .status(200)
      .json({ message: "user deleted successfully", success: true });
  } catch (error) {
    return res
      .status(error.cause || 500)
      .json({ message: error.cause, success: false });
  }
};
