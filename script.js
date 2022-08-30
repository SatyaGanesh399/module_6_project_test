// Event listerner for click event
let submitButton = document.getElementById("submit-button")
submitButton.addEventListener("click", execute);

let USERS_BD =[];

function execute(){
    console.log("button clicked")
    let firstName = document.getElementById("first-name").value
    let lastName = document.getElementById("last-name").value
    let userEmail = document.getElementById('userName-input').value
    let phoneNumber = document.getElementById('phone-number').value
    let batchNo = document.getElementById('batch-no').value
    let moduleNo = document.getElementById('module-no').value
    let termsNCond = document.getElementById('checkBox-input').checked
    let error = false
    
    USERS_BD = {
        firstName : firstName,
        lastName : lastName,
        emailId : userEmail,
        batchNo : batchNo,
        moduleNo : moduleNo,
        phoneNumber : phoneNumber,
        tnc : termsNCond
    }
    console.log(USERS_BD)
    // Validations
    // Vaidation for firstName
    if(firstName.length >= 3){
        document.getElementById('firstName-valid').style.display = 'block'
        document.getElementById('firstName-invalid').style.display = 'none'
    }else{
        document.getElementById('firstName-invalid').style.display = 'block'
        document.getElementById('firstName-valid').style.display = 'none'
        error = true
    }
    // Vaidation for firstName
    if(lastName.length >= 3){
        document.getElementById('lastName-valid').style.display = 'block'
        document.getElementById('lastName-invalid').style.display = 'none'
    }else{
        document.getElementById('lastName-invalid').style.display = 'block'
        document.getElementById('lastName-valid').style.display = 'none'
        error = true
    }
    // Vaidation for email

    if(userEmail != ''
    && userEmail.includes('@') 
    && userEmail.includes('.')
    && userEmail.indexOf('@') > 1 
    && userEmail.indexOf('.') + 3 <= userEmail.length
    ){
        document.getElementById('email-valid').style.display = 'block'
        document.getElementById('email-invalid').style.display = 'none'
    }else{
        document.getElementById('email-invalid').style.display = 'block'
        document.getElementById('email-valid').style.display = 'none'
        error = true
    }
    
    // Vaidation for phoneNumber
    function isNum(phoneNumber){
        var num = parseInt(phoneNumber)
        var length = num.toString().length == phoneNumber.length
        return length
    }
    
    if(!isNaN(phoneNumber.length == 10) && isNum(phoneNumber)){
        document.getElementById('phoneNumber-invalid').style.display = 'none'
        
    }else{
        document.getElementById('phoneNumber-invalid').style.display = 'block'
        error = true
    }

    // Vaidation for batchNo

    if(batchNo == 'none'){
        document.getElementById('batch-invalid').style.display = 'block'
        error = true
        
    }else{
        document.getElementById('batch-invalid').style.display = 'none'
    }
    // Vaidation for moduleNo

    if(moduleNo == 'none'){
        document.getElementById('module-invalid').style.display = 'block'
        error = true
        
    }else{
        document.getElementById('module-invalid').style.display = 'none'
    }

    // Vaidation for checkBox

    if(termsNCond == false){
        document.getElementById('checkBox-invalid').style.display = 'block'
        error = true
    }else{
        document.getElementById('checkBox-invalid').style.display = 'none'
    }
    
    if(!error){
        alert("SignUp successful")
        reset()
        setTimeout(() =>{
            document.getElementById("signUp-form").style.display = 'none'
            document.getElementById("signup-heading").innerHTML = 'Signup successful..'
        }, 1000)
        
    }
}

function reset(){
    // Validations
    document.getElementById('firstName-valid').style.display = 'none'
    document.getElementById('firstName-invalid').style.display = 'none'
    document.getElementById('lastName-valid').style.display = 'none'
    document.getElementById('lastName-invalid').style.display = 'none'
    document.getElementById('email-valid').style.display = 'none'
    document.getElementById('email-invalid').style.display = 'none'
    document.getElementById('batch-invalid').style.display = 'none'
    document.getElementById('module-invalid').style.display = 'none'
    document.getElementById('phoneNumber-invalid').style.display = 'none'
    document.getElementById('checkBox-invalid').style.display = 'none'

    // input- blank
    document.getElementById("first-name").value = ""
    document.getElementById("last-name").value = ""
    document.getElementById('userName-input').value = ""
    document.getElementById('phone-number').value = ""
    document.getElementById('batch-no').value = 'none'
    document.getElementById('module-no').value = 'none'
    
}