function CalcuBody(weight, height){
    let formula = weight / (height * height) * 10000;
    console.log (formula);
    if(formula < 18.5){
        return "Less Weight";
    }else if(formula > 18.5 && formula < 24.9){
        return "Ideal";
    }else if(formula > 25.0 && formula < 29.9){
        return "Overweight";
    }else if(formula > 30.0 && formula < 39.9){
        return "Very Overweight";
    }else if(formula > 39.9){
        return "Obesity"
    }
};
console.log (CalcuBody(82,170))