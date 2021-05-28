const buttons = document.querySelector('.button-keys');
const button = document.querySelectorAll('.button')
const input = document.querySelector('.input-text')
const calculator = document.querySelector(".calculator")
const equal_sign = document.querySelector("#equals-sign")
const clear = document.querySelector('.clear')



function add(){
  
}



function startCalc(){
       
buttons.addEventListener("click", event =>{
    const {target} = event
    const value = target.value
    let values = input.value
   
    
    
    
    if(target.classList.contains('btn')){
        if(input.value === 0){
            
            input.value = value
            
        } else if(calculator.classList.contains("operator")) {
            input.value = value
            console.log(value)
            

        } else {
            input.value = input.value + value
            console.log(input.value)
            
        }
        calculator.classList = 'btn'
        calculator.classList.add('align')
       
    } 
    if(target.classList.contains('btn-calculation')){
        const operatorKeys = buttons.querySelectorAll('.btn-calculation')
        operatorKeys.forEach(operatorKey => operatorKey.classList = '')
        target.classList.add('selected')
       calculator.classList = 'operator'
       calculator.classList.add('align')
       
      

        calculator.dataset.first_input = values
        calculator.dataset.operator = value
    }

    if(target.classList.contains('equals-sign')){
        
        const first_input = calculator.dataset.first_input
        operator_btn = calculator.dataset.operator
        calculator.dataset.second_input = values 
        const second_input =  calculator.dataset.second_input
        console.log(first_input,operator_btn,second_input)
        calculator.classList.add('align')

        let result = ''
        switch(operator_btn){
            case '+':
              result = parseInt(first_input) + parseInt(second_input)
              console.log(result)
            break
            case "/":
                result = parseInt(first_input) / parseInt(second_input)
                console.log(result)
                break
            case "-":
                result = parseInt(first_input) - parseInt(second_input)
                console.log(result)
                break
            case 'times':
                result = parseInt(first_input) * parseInt(second_input)
                console.log(result)
               



        }

       
        input.value = result
       

    }
    if(target.classList.contains('delete')){
        let str = input.value.toString()
        let num = str.substring(0,str.length-1)
        input.value = num
        
        console.log(num)
    }
  //  if(target.classList.contains('clear')){
  //      console.log("cleared")
      
  //      input.value = ""
      
       
    
  //   calculator.dataset.first_input = ""
  //     calculator.dataset.operator = ""
  //   calculator.dataset.second_input = ""
  //     calculator.classList.remove('operator')
  //     target.classList.remove('selected')
      
      
  //  }
   

    
})


}

startCalc()






// function performCalc(){
   

       
    

// }

// getInput()
// performCalc()