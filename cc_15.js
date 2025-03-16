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

// Test Cases 
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");

// Task 3 Removing Risk Items 
function addRiskItem(riskName, riskLevel, department) {
    if (!riskName || !riskLevel || !department) {
        console.error(" Missing parameters.");
        return;
    }
    
    let riskCard = document.createElement("div");
    riskCard.classList.add("riskCard");

    let riskNameElem = document.createElement("p");
    riskNameElem.innerHTML = `<strong>Risk Name:</strong> ${riskName}`;
    
    let riskLevelElem = document.createElement("p");
    riskLevelElem.innerHTML = `<strong>Risk Level:</strong> ${riskLevel}`;
    
    let departmentElem = document.createElement("p");
    departmentElem.innerHTML = `<strong>Department:</strong> ${department}`;
    //risk card created

   
    let resolveBtn = document.createElement("button");
    resolveBtn.textContent = "Resolve";
    resolveBtn.classList.add("resolve-btn");

    resolveBtn.addEventListener("click", function () {
        riskCard.remove();
    });
     // resolve button created


    riskCard.appendChild(riskNameElem);
    riskCard.appendChild(riskLevelElem);
    riskCard.appendChild(departmentElem);
    riskCard.appendChild(resolveBtn);

    
    let riskDashboard = document.getElementById("riskDashboard");
    if (riskDashboard) {
        riskDashboard.appendChild(riskCard);
    } else {
        console.error("Error: riskDashboard element not found.");
    }
}
// append risk card to dashboard

// Test Case
addRiskItem("Market Fluctuations", "High", "Finance");

// Task 4: Categorizing Risks by Level
function addRiskItem(riskName, riskLevel, department) {
    if (!riskName || !riskLevel || !department) {
        console.error("Error: Missing required parameters.");
        return;
    }
    
    let riskCard = document.createElement("div");
    riskCard.classList.add("riskCard");

    switch (riskLevel.toLowerCase()) {
        case "low":
            riskCard.style.backgroundColor = "neongreen";
            break;
        case "medium":
            riskCard.style.backgroundColor = "yellow";
            break;
        case "high":
            riskCard.style.backgroundColor = "red";
            break;
        default:
            riskCard.style.backgroundColor = "lightblue";
    }
    // colours for risk levels

    let riskNameElem = document.createElement("p");
    riskNameElem.innerHTML = `<strong>Risk Name:</strong> ${riskName}`;
    
    let riskLevelElem = document.createElement("p");
    riskLevelElem.innerHTML = `<strong>Risk Level:</strong> ${riskLevel}`;
    
    let departmentElem = document.createElement("p");
    departmentElem.innerHTML = `<strong>Department:</strong> ${department}`;

    let resolveBtn = document.createElement("button");
    resolveBtn.textContent = "Resolve";
    resolveBtn.classList.add("resolve-btn");

    resolveBtn.addEventListener("click", function () {
        riskCard.remove();
    });

    riskCard.appendChild(riskNameElem);
    riskCard.appendChild(riskLevelElem);
    riskCard.appendChild(departmentElem);
    riskCard.appendChild(resolveBtn);

    let riskDashboard = document.getElementById("riskDashboard");
    if (riskDashboard) {
        riskDashboard.appendChild(riskCard);
    } else {
        console.error("Error: riskDashboard element not found.");
    }
}

// Test Case
addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");

// Task 5- Implementing Bulk Updates

function increaseRiskLevels() {
    document.querySelectorAll(".riskCard").forEach((card) => {
        let riskLevelElem = card.querySelector(".risk-level");
        let currentLevel = riskLevelElem.textContent.toLowerCase();

        let updatedLevel;
        switch (currentLevel) {
            case "low":
                updatedLevel = "Medium";
                card.style.backgroundColor = "yellow";
                break;
            case "medium":
                updatedLevel = "High";
                card.style.backgroundColor = "red";
                break;
            case "high":
                updatedLevel = "High"; // does not change
                break;
            default:
                updatedLevel = currentLevel;
        }

        riskLevelElem.textContent = updatedLevel;
    });
}
// function to increase all risk levels

let increaseButton = document.createElement("button");
increaseButton.textContent = "Increase Risk Levels";
increaseButton.addEventListener("click", increaseRiskLevels);

document.body.insertBefore(increaseButton, document.getElementById("riskDashboard"));

// Test Case
addRiskItem("Employee Retention", "Low", "HR"); 
// Clicking "Increase Risk Levels" should change it to "Medium".

