import React, { Component } from 'react';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';


class App extends Component{
state={
  text:"",
  todo: [],

}

addTodo =()=>{
let todoList =  this.state.text;
let arr = this.state.todo;
arr.push(todoList);
let distinct = [...new Set(arr)];
this.setState({todo: distinct, text:""});
}

deleteTodo =(t)=>{

let arr = this.state.todo;
let pos = arr.indexOf(t);
let remove = arr.splice(pos, 1);
this.setState({todo: arr})
}

renderTodos =()=>{

  return this.state.todo.map((todoList, i) =>{
    return(<TouchableOpacity key={i}>
    <Text onPress={()=>this.deleteTodo(todoList)} >{todoList}</Text>
    </TouchableOpacity>)
  })
}

render(){
  let {todo, text} = this.state;

  return(
  <View style={style.wholeStyle}>
  <View style={style.viewStyle}>

    <Text  style={style.header}>ToDo App</Text>
   
    <TextInput 
    style={style.inputStyle}
    onChangeText={(text)=>this.setState({text})}
    value={this.state.text}
    />
    <Button 
    title="Add To Do"
    color="red"
    onPress={this.addTodo}
    />
    
    {this.renderTodos()}
  </View>
  </View>)
}
}


const style ={
  wholeStyle:{backgroundColor: '#b2dfdb', flex: 1},
  viewStyle:{marginTop:120,  alignItems: 'center', justifyContent: 'center', margin: 20},
  inputStyle:{height: 40, borderColor: 'red', borderWidth: 1, width: '100%'},
  buttonStyle:{height: 40, borderColor: 'red', borderWidth: 1, width: '60%'},
  header:{fontSize: 30, color: "black", fontWeight: 'bold'}
}

export default App;