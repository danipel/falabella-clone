"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
const user_controllers_1 = require("../controllers/user.controllers");
const middleware_1 = require("../middlewares/middleware");
const router = (0, express_1.Router)();
router.post("/register", auth_1.register);
router.post("/login", auth_1.login);
router.get("/profile", middleware_1.authenticate_token, user_controllers_1.get_user_profile);
exports.default = router;
