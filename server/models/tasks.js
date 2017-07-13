const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var TaskSchema = new Schema({
    Name: String,
    email: String,
    task: String,
    jobschedule: String
}, { timestamps: true });

var Task = mongoose.model('Task', TaskSchema);

module.exports = Task;