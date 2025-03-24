const btn = document.getElementById("calculate");
const billIn = document.getElementById("bill");
const PercentageIn = document.getElementById("tip");
const Total = document.getElementById("total");

function calculateTotalPayableAmount() {
    const billValue = parseFloat(billIn.value) || 0;  // Convert to number, default to 0
    const tipValue = parseFloat(PercentageIn.value) || 0; // Convert to number, default to 0

    if (billValue < 0 || tipValue < 0) {
        Total.textContent = "Invalid input"; // Prevent negative values
        return;
    }

    const totalValue = billValue * (1 + tipValue / 100);
    Total.textContent = totalValue.toFixed(2);
}

btn.addEventListener("click", calculateTotalPayableAmount);