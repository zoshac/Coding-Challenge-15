// Task 2 Adding Risk Items Dynamically 

function addRiskItem(riskName, riskLevel, department) {
    if (!riskName || !riskLevel || !department) {
        console.error("Error: Missing required parameters.");
        return;
    }
    
    let riskCard = document.createElement("div");
    riskCard.classList.add("riskCard");
    // new div element created
    
    // elements for risk details
    let riskNameElem = document.createElement("p");
    riskNameElem.innerHTML = `<strong>Risk Name:</strong> ${riskName}`;
    
    let riskLevelElem = document.createElement("p");
    riskLevelElem.innerHTML = `<strong>Risk Level:</strong> ${riskLevel}`;
    
    let departmentElem = document.createElement("p");
    departmentElem.innerHTML = `<strong>Department:</strong> ${department}`;
    

    riskCard.appendChild(riskNameElem);
    riskCard.appendChild(riskLevelElem);
    riskCard.appendChild(departmentElem);
    // appending elements
    
    let riskDashboard = document.getElementById("riskDashboard");
    if (riskDashboard) {
        riskDashboard.appendChild(riskCard);
    } else {
        console.error("Error: riskDashboard element not found.");
    }
}
