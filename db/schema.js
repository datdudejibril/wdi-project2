var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var ProjectSchema = new Schema({
  projectName: String, //camelCase this
  url: String
})


var UserSchema = new Schema({
  email: String,
  password_digest: String,
  projects: [ProjectSchema]
});

UserSchema.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;

  if (!this.created_at) { this.created_at = now }
  next()
});

var UserModel = mongoose.model('User', UserSchema);
var ProjectModel = mongoose.model('Project', ProjectSchema);
module.exports = {
  User: UserModel,
  Project: ProjectModel
}
