import todosAPI from '../api/TodoResourseAPI';
import {updateItemContent} from '../action'
import {connect} from 'react-redux'
import App from '../App'

const mapStateToProps = (state,ownProps)=>{
    console.log(state)
    return{
        //   todos:state.todos
      // filter:state.statusOfList
      todos: state.todos,
    }
  }
  
  const mapDispatchToProps =(dispatch,ownProps)=>{
    return{
      updateItemContent:(viewId, content) =>{
        const todos = todosAPI.updateItemContent(viewId,content)
        dispatch(updateItemContent(todos))
      },
      // toggleActiveHandler:(viewId)=>dispatch(toggleActive(viewId))
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(App);