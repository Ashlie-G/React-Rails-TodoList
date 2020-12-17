import React, { Component } from "react"
import TodoForm from "./TodoForm"
import TodoItem from "./TodoItem"
import Grid from '@material-ui/core/Grid'

const api_url = `http://localhost:3001/api/v1/lists`

class TodoList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: []
        }
        this.updateTodoList = this.updateTodoList.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }
    componentDidMount() {
        this.getTasks()

    }

    getTasks() {
        fetch(api_url)
            .then(response => response.json())
            .then(response_items => {
                this.setState({
                    items: response_items
                })
            })
    }

    updateTodoList(item) {
        let _items = this.state.items
        _items.unshift(item)
        this.setState({
            items: _items
        })
    }

    deleteItem(item) {
        //delete the item remotely
        //localhost:3001/ap1/v1/lists + id
        let deleteUrl = api_url + `/${item.id}`
        fetch(deleteUrl, {
            method: 'DELETE'
        }).then(() =>{
            //client side delete
            let _items = this.state.items
            let index = _items.indexOf(item)
            _items.splice(index, 1)
            this.setState({
                items: _items
            })
        })
        //then delete it here
    }

    render() {
        console.log(this.state.items)
        return (
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TodoForm api_url={api_url} updateTodoList={this.updateTodoList} />
                </Grid>

                <Grid item xs={12} id="todo_list">
                    {this.state.items.map((item) => (
                        <TodoItem key={item.id} item={item} 
                        deleteItem={this.deleteItem}/>
                    ))}
                </Grid>
                
            </Grid>
        )
    }
}
export default TodoList