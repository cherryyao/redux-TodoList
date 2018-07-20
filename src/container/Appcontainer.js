import todosAPI from '../api/TodoResourseAPI';
import {updateItemContent,addTodo} from '../action'
import {connect} from 'react-redux'
import App from '../App'
import Todo from '../model/Todo';
//import Todo from '../model/Todo';

const mapStateToProps = (state,ownProps)=>{
    console.log(state)
    return{
        //   todos:state.todos
      // filter:state.statusOfList
      todos: state.todos,
      addItem:state.addItem
    }
  }
  
  const mapDispatchToProps =(dispatch,ownProps)=>{
    return{
      updateItemContent:(viewId, content) =>{
        const todos = todosAPI.updateItemContent(viewId,content)
        dispatch(updateItemContent(todos))
      },
      // toggleActiveHandler:(viewId)=>dispatch(toggleActive(viewId))
      add:(content) =>{
        const todo = new Todo(content);
        const addItem = todosAPI.add(todo)
        dispatch(addTodo(todo)
      )},

      
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(App);