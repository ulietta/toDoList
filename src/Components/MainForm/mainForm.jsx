import React from 'react';
import TextArea from "../forms/textarea";
import TextInput from '../forms/textinput';
import CheckBox from '../forms/checkbox';
import Button from '../forms/button';
import './mainForm.css';

export default class MainForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data: {
                taskName: '',
                taskDescription: '',
                taskUrgent: false,
            }
        }
    }



    handleChange = (e) => {
        const { target } = e;
        const { name } = target;

        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.validateDateForm(name);
        this.setState ((prevState) => ({
            data: {
                ...prevState.data,
                [name]: value,
            }
        }));



    };

    validateDateForm = (name) => {
        if (!document.getElementById(name).value.length) {
            document.getElementById(name).style.border = '2px solid red';
            return false;
        } else {
            document.getElementById(name).style.border = '2px solid black';
        }

    };



    handleDeleteTask = () => {
        this.setState ((prevState) => ({
            data: {
                ...prevState.data,
                taskName: '',
            }
        }))


    };

    handleAddTask = () => {
        const data = this.state.data;
        if (this.state.data.taskName.length && this.state.data.taskDescription.length) {
            this.props.pushDataToList(data);
            this.clearForm();
        }


        //console.log(this.state.data);
    };

    clearForm = () => {
        document.getElementById('taskName').value = '';
        document.getElementById('taskDescription').value = '';
        document.getElementById('taskUrgent').checked = false;


    }

    render (){
        return (
        <div className='mainForm'>
            <h1>ToDo</h1>
            <div className = 'block-wrapper'>

            <TextInput
                label = 'Название задачи'
                name = 'taskName'
                onBlur = {this.handleChange}
                //value ={this.state.data.taskName}
                placeholder = 'Название задачи'
            />
            </div>
            <div className = 'block-wrapper'>
            <TextArea
                label = 'Описание задачи'
                name = 'taskDescription'
                placeholder = 'Описание задачи'
                onBlur = {this.handleChange}
                //value ={this.state.data.taskDescription}
            />
            </div>
            <div className = 'block-wrapper'>
            <CheckBox
                name = 'taskUrgent'
                //checked = {this.state.data.taskUrgent}
                onChange = {this.handleChange}
            />
            </div>
            <div className='button-wrapper'>
                <button
                    type="button"
                    id="cancelButton"
                    onClick={this.handleDeleteTask}
                >
                    {
                        this.props.formState === 'add' ? "Очистить форму" : "Отменить изменения"
                    }
                </button>
                <button
                    type="button"
                    id="actionButton"
                    onClick={this.handleAddTask}
                >
                    {
                        this.props.formState === 'add' ? "Добавить новую задачу" : "Сохранить изменения"
                    }
                </button>

            </div>

        </div>
    )}




}

