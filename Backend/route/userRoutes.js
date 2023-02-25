const express = require("express")
const { RegisterUsers, LoginUser, allUsers } = require("../controllers/userControllers")

 const router = express.Router();
 const { protect } = require("../middleware/authMiddleware");


router.route("/").post(RegisterUsers )
router.post("/login",LoginUser)
 router.route("/").get(protect, allUsers);

module.exports = router



// const express = require("express");
// const {
//   registerUser,
//   authUser,
//   allUsers,
// } = require("../controllers/userControllers");




// router.route("/").get(protect, allUsers);
// router.route("/").post(registerUser);
// router.post("/login", authUser);

// module.exports = router;