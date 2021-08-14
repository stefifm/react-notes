import React, { Component } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default class CreateNote extends Component {

    state= {
        users: [],
        userSelected: '',
        title: '',
        content: '',
        date: new Date(),
        editing: false,
        _id: ''
    }

    async componentDidMount() {
       const res = await axios.get('http://localhost:4000/api/users');
       this.setState({
           users: res.data.map(user => user.username),
           userSelected: res.data[0].username
        });
        if (this.props.match.params.id) {
            const res = await axios.get('http://localhost:4000/api/notes/' + this.props.match.params.id)
            this.setState({
                title: res.data.title,
                content: res.data.content,
                date: new Date(res.data.date),
                userSelected: res.data.author,
                editing: true,
                _id: this.props.match.params.id
            })
        }
        
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const newNote = {
            title: this.state.title,
            content: this.state.content,
            date: this.state.date,
            author: this.state.userSelected
        };
        if (this.state.editing) {
            await axios.put('http://localhost:4000/api/notes/' + this.state._id , newNote);

        }
        else {
            await axios.post('http://localhost:4000/api/notes', newNote);
        }
        window.location.href = '/'
    }

    onInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value 
        });
    }

    onChangeDate = date => {
        this.setState({date});
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3 mb-3">
                <div className="card card-body">
                    <h4>Crear una Nota</h4>

                    {/** SELECT USER */}

                    <div className="form-group mb-3">
                        <select className="form-control" name="userSelected" 
                        onChange={this.onInputChange} value= {this.state.userSelected} >
                            {
                                this.state.users.map(users => <option key={users} value={users}>
                                    {users}
                                </option>)
                            }
                        </select>
                    </div>

                    <div className="form-group mb-3">
                        <input type="text" className="form-control" 
                        placeholder="Titulo" name="title" required onChange={this.onInputChange}
                        value={this.state.title} />
                    </div>

                    <div className="form-group mb-3">
                        <textarea name="content" className="form-control" 
                        placeholder="Contenido" required onChange={this.onInputChange} value={this.state.content}  ></textarea>
                    </div>

                    <div className="form-group mb-3">
                        <DatePicker className="form-control" selected={this.state.date} 
                        onChange={this.onChangeDate}/>
                    </div>

                    <form onSubmit={this.onSubmit}>

                        <button type="submit" className="btn btn-primary">
                            Guardar nota
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
