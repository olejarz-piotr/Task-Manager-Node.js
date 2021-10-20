const Task = require('../models/Task')




const getAllTasks =async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })

    } catch (e) {

        res.status(500).json({ msg: error })

    }
 

}
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(200).json({ task })

    } catch (e) {
        res.status(500).json({ msg: error })
    }


}
const getTask = async (req, res) => {

    try{
        const {id:taskID} = req.params;
        const task = await Task.findOne({_id:taskID});
        
        if(!task){
            return res.status(404).json({ msg:'No task with this number'})
        }
    }catch(error){
        
    }
    res.json({ id: req.params.id })

}
const updateTask = (req, res) => {
    res.send('Update task')
}

const deleteTask = (req, res) => {
    res.send('Delete task')
}

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask }