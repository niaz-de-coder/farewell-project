document.getElementById("bookingForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const phone = document.getElementById("phone").value;
    const transport = document.getElementById("transport").value;
    const location = document.getElementById("location").value;

    // Validate Bangladeshi phone number
    if (!/^01[3-9]\d{8}$/.test(phone)) {
        alert("Please enter a valid Bangladeshi phone number.");
        return;
    }

    // Restrict Bus and Rail to Bangladesh and India
    if ((transport === "Bus" || transport === "Rail") && !["Cox's Bazar", "Delhi", "Darjeeling", "Kashmir"].includes(location)) {
        alert("Bus and Rail are only available for Bangladesh and India.");
        return;
    }

    // Calculate Bill
    const packageType = document.getElementById("package").value;
    const persons = parseInt(document.getElementById("persons").value, 10);
    const hotel = document.getElementById("hotel").value;

    const basePrice = {
        "Cox's Bazar": 5000,
        Delhi: 7000,
        Darjeeling: 8000,
        Kashmir: 9000,
        London: 30000,
        Paris: 40000
    }[location];

    const hotelPrice = {
        "1star": 1000,
        "2star": 2000,
        "3star": 3000,
        "4star": 4000,
        "5star": 5000
    }[hotel];

    const discount = {
        family: 0.7,
        friends: 0.6,
        couple: 0.5
    }[packageType];

    const totalPrice = (basePrice + hotelPrice) * persons * discount;

    // Display Bill
    const billDetails = `
        Location: ${location} <br>
        Transport: ${transport} <br>
        Hotel: ${hotel} <br>
        Package: ${packageType} <br>
        Persons: ${persons} <br>
        Total Price: ${totalPrice} BDT
    `;
    document.getElementById("billDetails").innerHTML = billDetails;
    document.getElementById("formout").style.display = "block";

    // Enable Download and Print Buttons
    document.getElementById("downloadBtn").disabled = false;
    document.getElementById("printBtn").disabled = false;
});

// Download and Print Logic
document.getElementById("downloadBtn").addEventListener("click", function () {
    const billContent = document.getElementById("billDetails").innerHTML;
    const blob = new Blob([billContent], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "bill.html";
    link.click();
});

document.getElementById("printBtn").addEventListener("click", function () {
    window.print();
});
