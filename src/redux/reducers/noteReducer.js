
import { ADD_NOTE, DELETE_NOTE } from "../actions/noteActions";

const initialState={
    notes:[
        {text:"bajv hjba vav vbejvbiqbre v eir v jer ",createdOn:new Date()},
        {text:"dv  v    j vkbv e qkr v e rv ev e rvj e veibrirv ",createdOn:new Date()}
    ]
}

export function noteReducer(state=initialState,action){
switch(action.type){
    case ADD_NOTE:
        return{
           ...state,
           notes:[...state.notes,{text:action.text,createdOn:new Date()}]
        }
        case DELETE_NOTE:
            state.notes.splice(action.index,1);
            return{
            ...state,
            notes:[...state.notes]
              }
            
            default:
                return state;
}
}