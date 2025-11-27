formSubmition = (e) => {
    e.preventDefault();
    const inputValue = document.getElementById('input').value ;
    document.getElementById('input').value = "";
    const convertedValue = inputValue*89.26 ;
    if(inputValue == ""){
        alert("Fill the form")
    }else{
        alert(" INR = " + convertedValue)
    }
}

