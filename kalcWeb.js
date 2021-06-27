const keys = document.querySelectorAll('.buttons .numbers button:not(#clear)')
const operators = document.querySelectorAll('.buttons .operators button')

const screen = document.querySelector('.screen')

const clear = document.getElementById('clear')

clear.addEventListener('click', function(){
    screen.innerText = '0'
})

keys.forEach(function(key){
    key.addEventListener('click', function(){
        const keyValue = key.getAttribute('data-val')
        insertValue(keyValue)
    })
})

operators.forEach(function(operator){
    operator.addEventListener('click', function(){
        if (operator.innerText == '='){
            showResult(screen.innerText)
        } else {
           const operatorValue = operator.getAttribute('data-val') 
           insertValue(operatorValue)
        }
    })
})

const insertValue = function(value){
    if (screen.innerText.length > 13) return
    
    if (screen.innerText == '0'){
        screen.innerText = value
    } else {
        screen.innerText = screen.innerText + value
    }   
}

const showResult = function(operation){
    screen.innerText = eval(operation)
}

