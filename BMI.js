function calculate () { 
    let height = parseFloat(document.getElementById('height').value) ; 
    let weight = parseFloat(document.getElementById('weight').value) ;
    let bmi = (weight / (height**2) * 10000); 
    // let result = document.getElementById('result'); 
    console.log(bmi); 


     
    document.getElementById('result').value = bmi.toFixed(2);

    if(bmi < 18.5){

        category = "Underweight";
    }
    else if (bmi >= 18.5 && bmi <= 24.9){
        category = "Normal Weight";
    }
    else if (bmi >= 25 && bmi <= 39.9){
        category = "OverWeight";
    }
    else {
        category = "Obese";
    }

    // document.getElementById("category").textContent = category;
}