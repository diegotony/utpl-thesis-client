import * as mongoose from 'mongoose';
export const UserSchema = new mongoose.Schema({
  first_name: {type: String, required: true, minlength: 1, maxlength: 40},
  last_name: {type: String, required: true, minlength: 1, maxlength: 40},
  email: {type: String, required: true, unique: true},
  dni: {type: String, required: true, unique: true, minlength: 10, maxlength: 10},
  date: { type: Date, default: Date.now },
  // password: {type: String, required: true, nullable: true},

});