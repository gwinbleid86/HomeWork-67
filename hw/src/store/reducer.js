const initialState = {
    resultReduce: "",
    decimalAdded: false
};
const reducer = (state = initialState, action)=>{
    if(action.type === "ADD"){
        let equation = state.resultReduce;
        let decimalAdded = state.decimalAdded;
        const lastChar = equation[equation.length - 1];
        if(action.value === '+' || action.value === '-' || action.value === '*' || action.value === '/') {


            if(equation !== '' && lastChar !== '+' && lastChar !== '-' && lastChar !== '*' && lastChar !== '/' )
                equation += action.value;

            else if(equation === '' && action.value === '-')
                equation += action.value;

            if((lastChar === "+" && equation.length > 1) || (lastChar === "-" && equation.length > 1) || (lastChar === "*" && equation.length > 1) ||(lastChar === "/" && equation.length > 1) ) {
                equation = equation.replace(/.$/, action.value);
            }

            decimalAdded =false;
        }

        else if(action.value === '.') {
            if(!decimalAdded && equation.length > 0 && lastChar !== '+' && lastChar !== '-' && lastChar !== '*' && lastChar !== '/') {
                equation += action.value;
                decimalAdded = true;
            }
        }
        else{
            equation += action.value;
        }
        return{
            ...state,
            resultReduce: equation,
            decimalAdded: decimalAdded
        }
    }
    if(action.type === "RESET"){
        return{
            ...state,
            resultReduce: "",
            decimalAdded: false
        }
    }
    if(action.type === "CONSIDER"){
        let equation = state.resultReduce;
        const lastChar = equation[equation.length - 1];
        let total = 0;
        let decimalAdded = state.decimalAdded;
        if (lastChar === '.' ||lastChar === '+' ||lastChar === '-' ||lastChar === '*' ||lastChar === '/')
            equation = equation.replace(/.$/, '');

        if(equation) {
            total = eval(equation);
            if (total.toString().indexOf('.') !== -1){
                total = total.toFixed(2);
                decimalAdded =true;
            }
            else{
                decimalAdded = false;
            }
        }

        return{
            ...state,
            resultReduce: total,
            decimalAdded: decimalAdded
        }
    }
    return state;
};
export default reducer;