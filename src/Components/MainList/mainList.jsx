import React from 'react';
import './mainList.css'





export default class MainList extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            taskId: null,
            modalFlag: false,
        };
    }

    componentDidMount() {
        this.renderTaskList()
    }

    deleteTask = (e) => {
        let node = e.target;
        let id = node.getAttribute("data-id");
        this.props.deleteTask(id);

}

    renderTaskList = () => {
        const { data } = this.props;
        let listContainer = document.getElementById('taskList');
        listContainer.innerHTML='';
        data.forEach((item, index) => {
            let newLi = document.createElement("li");
            newLi.innerHTML = (item.taskUrgent ? '<span>Urgent!</span> <br>' : '') + item.taskName + '   <button data-id = "' + index + '" onclick="editTask(event)">Edit</button>  <button data-id = "' + index + '" onclick="deleteTask(event)">Delete</button>';


            listContainer.appendChild(newLi);


        });
        let emptyList = '<li>Список задач пуст</li>';
        if (!listContainer.innerHTML) {listContainer.innerHTML = emptyList}
    };




    render() {
        return (
            <div className='mainList'>
                <h1>Список задач</h1>
                <ul id="taskList">

                </ul>
            </div>
        )
    }




}

