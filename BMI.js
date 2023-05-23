function calculate(){
    let weight = document.getElementById('weight').value 
    let height = document.getElementById('height').value
    let result = (weight / (height**2) * 10000)
    document.getElementById('result').innerHTML = result.toFixed(2)

    if(result <= 18.5){
        document.getElementById('result').innerHTML = result.toFixed(2) + " " + 'Underweight'
    }
    else if (result > 18.5 && result <= 24.9){
        document.getElementById('result').innerHTML = result.toFixed(2) + " " + 'Normal weight'
    }
    else if (result > 25 && result <= 39.9){
        document.getElementById('result').innerHTML = result.toFixed(2) + " " + 'Overweight'
    }
    else {
        document.getElementById('result').innerHTML = result.toFixed(2) + " " + 'Obese'
    }
}

function clean(){
    window.location.reload();
}
