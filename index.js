function calculateInterest() {
    
    let principal = parseFloat(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let time = parseFloat(document.getElementById("time").value);

    let interestAmount = (principal * rate * time) / 100;

    document.getElementById("result").innerHTML = "Interest Amount: $" + interestAmount.toFixed(2);
}