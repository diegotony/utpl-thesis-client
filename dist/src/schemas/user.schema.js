"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    first_name: { type: String, required: true, minlength: 1, maxlength: 40 },
    last_name: { type: String, required: true, minlength: 1, maxlength: 40 },
    email: { type: String, required: true, unique: true },
    dni: { type: String, required: true, unique: true, minlength: 10, maxlength: 10 },
    password: { type: String, required: true, nullable: true },
    date: { type: Date, default: Date.now },
});
//# sourceMappingURL=user.schema.js.map