import taskModel from '../schema/task.schema';
import { taskType } from '../type/task.type';

class taskService {
    async create(userId: string, task: taskType) {
        task.userAssociated = userId;
        const createdTask = await taskModel.create(task);
        return createdTask;
    }

    async findAll(userId: string) {
        const foundTasks = await taskModel.find({ userAssociated: userId });
        return foundTasks;
    }

    async findById(userId: string, id: string) {
        const foundTask = await taskModel.findOne({ _id: id, userAssociated: userId });
        return foundTask;
    }

    async update(userId: string, id: string, task: taskType) {
        const updatedTask = await taskModel.findOneAndUpdate({ _id: id, userAssociated: userId }, task, { new: true });
        return updatedTask;
    }

    async delete(userId: string, id: string) {
        await taskModel.findOneAndDelete({ _id: id, userAssociated: userId });
        return "Tarefa removida com sucesso";
    }
}

export default new taskService();
