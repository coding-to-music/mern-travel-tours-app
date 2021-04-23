// dependencies
const express = require("express");
const {
   signup,
   login,
   resetPassword,
   forgotPassword,
   updatePassword,
   protect,
   restrictTo,
} = require("./../controllers/authController");

const {
   getAllUsers,
   getUser,
   createUser,
   updateUser,
   deleteUser,
   updateMe,
   deleteMe,
   getMe,
} = require("./../controllers/userController");

const router = express.Router();

// signup
router.post("/signup", signup);

// login
router.post("/login", login);

// forgot password
router.post("/forgotPassword", forgotPassword);

// reset password
router.patch("/resetPassword/:token", resetPassword);

// protect all routes after this middleware
router.use(protect);

// update password
router.patch("/updatePassword", updatePassword);

// get me
router.get("/me", getMe, getUser);

// update me
router.patch("/updateMe", updateMe);

router.use(restrictTo("admin"));

// delete me
router.delete("/deleteMe", deleteMe);

// user routes
router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
