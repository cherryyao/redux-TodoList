export default(state = {
  statusOfList: 'all',
  todos: [
    {
      viewId: '1',
      content: 'helloworld',
      status: false
    }, {
      viewId: '233',
      content: 'redux',
      status: true
    }
  ]
},action)=>{
    switch(action.type){
        case 'UPDATEITEM':{
            const newState = [...action.todos]
            return newState
        }
        case 'ADD':{
          //const newState = [...state]
          const newState = JSON.parse(JSON.stringify(state));
          const a = newState.todos.push(action.todo)          
          return newState
           
        }
        default:
        return state
    }
}