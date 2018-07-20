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
        default:
        return state
    }
}