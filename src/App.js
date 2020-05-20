import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import MainForm from "./Components/MainForm/mainForm";
import MainList from "./Components/MainList/mainList";

const List = [
    {name:"1", description: 'wefdf', urgent: true},
    {name:"2", description: 'wefdf', urgent: false},
    {name:"3", description: 'wefdf', urgent: true}
];

export default class App extends React.Component {


    constructor (props) {
        super (props);
        this.state = {
            taskList: [{taskName: 'task 1',
                taskDescription: 'description 1',
                taskUrgent: false,}],
            formState: "add",
            popupIsOpen: false,
            editIndex: null,
            formDate: {
                taskName: null,
                taskDescription: null,
                taskUrgent: false,

            }

        }
    }

    pushDataToList = (data) => {
        this.setState ((prevState) => ({
            taskList: [...prevState.taskList, data]
        }));
        console.log (this.state.taskList)
    };

    handleEditTask = (data) => {

    };

    handleDeleteTask = (e) => {
        let data = this.state.taskList;
        let res = data.splice(e,1);
        console.log(res);
        //this.renderTaskList();
    };



    componentDidMount() {

    }



render ()
{
    return (
        <div className="App">
            <h1 className="App-header">
                Task
            </h1>
            <div className='main-wrapper'>
                <MainForm
                    pushDataToList = {this.pushDataToList}
                    formState={this.state.formState}

                />
                <MainList
                    data={this.state.taskList}
                    editTaskList={this.handleEditTask}
                    deleteTask = {this.handleDeleteTask}
                />

            </div>
        </div>
    );
};
}


