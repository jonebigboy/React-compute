import ACTIONS from "./action";


const evalue = state =>{
    let {lastOperand,currentOperand,operation} =state;
    let last=parseFloat(lastOperand);
    let current=parseFloat(currentOperand);
    let res="";
    switch(operation){
        case '+':
            res = last +current;
            break;
        case '-':
            res =last -current;
            break;
        case '*':
            res =last *current;
            break;
        case '/':
            res =last /current;
            break;
    }

    return res.toString();
}

const reducer = (state={
    currentOperand:"",
    lastOperand:"",
    operation:"",
    overwrite: false,
},action) =>{
    switch(action.type){
        case ACTIONS.ADD_DIGIT:
            if(state.overwrite){
                return{
                    ...state,
                    currentOperand:action.digit,
                    overwrite:false,
                }
            }

            if(state.currentOperand==="0"&&action.digit==="0")
                return state;
            if(state.currentOperand==="0"&&action.digit!=="0")
                return {
                    ...state,
                    currentOperand:action.digit,
                }
            if(state.currentOperand==="0"&&action.digit!=='.'){
                return{
                    ...state,
                    currentOperand:action.digit,
                }
            }
            if(state.currentOperand.includes('.')&&action.digit==='.'){
                return state;
            }
            if(action.digit==='.'&&state.currentOperand===""){
                return{
                    ...state,
                    currentOperand:"0"+action.digit,
                }
            }
            
            return{
                ...state,
                currentOperand:state.currentOperand+action.digit,
            }
            
        case ACTIONS.DELETE_DIGIT:
            
            if(state.currentOperand===""){
                return state;
            }
            return{
                ...state,
                currentOperand:state.currentOperand.slice(0,-1),
            }

        case ACTIONS.CLEAR:
            return{
                ...state,
                currentOperand:"",
                lastOperand:"",
                operation:"",
            }
        
        case ACTIONS.CHOOST_OPERATION:
            if(state.currentOperand===""&&state.lastOperand==="")
                return state;
            if(state.lastOperand===""){
                return{
                    ...state,
                    currentOperand:"",
                    lastOperand:state.currentOperand,
                    operation:action.operation
                }
            }
            if(state.currentOperand===""){
                return{
                    ...state,
                    operation:action.operation
                }
            }
            return{
                ...state,
                lastOperand:evalue(state),
                operation:action.operation,
                currentOperand:"",
                overwrite:true,
            }


        case ACTIONS.EVALUATE:
            
            if(state.currentOperand===""||
                state.lastOperand===""||
                state.operation===""
            ){
                return state;
            }

            return{
                ...state,
                currentOperand:evalue(state),
                lastOperand:"",
                operation:"",
                overwrite:true,
            }
        
        default:
            return state;
    }

};

export default reducer;