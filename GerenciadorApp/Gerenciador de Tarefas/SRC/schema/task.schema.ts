import { Schema, model } from 'mongoose'

const taskSchema = new Schema({
    title: String,
    description: String,
    createdAt: Date,
    completedAt: Date,
    type: String,
    category: String,
    status: String,
    userAssociated: String
}, {
    timestamps: true
});

export default model("Task", taskSchema)
