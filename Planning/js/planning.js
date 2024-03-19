// comany and features lists
let ulFeatures = document.querySelector(".nav .links .features ul.f1eatures");
let ulCompany = document.querySelector(".nav .links .company ul.c1ompany");
let svgFeaturesdown = document.querySelector(".nav .links .features svg.down");
let svgFeaturesup = document.querySelector(".nav .links .features svg.up");
let svgCompanydown = document.querySelector(".nav .links .company svg.down");
let svgCompanyup = document.querySelector(".nav .links .company svg.up");
let features = document.querySelector(".features");
let company = document.querySelector(".company");

features.onclick = function () {
    if (svgFeaturesdown.classList.contains("active")) {
        svgFeaturesdown.classList.replace("active", "inactive");
        svgFeaturesup.classList.replace("inactive", "active");
        ulFeatures.style.display= "block";
    } else {
        svgFeaturesdown.classList.replace("inactive", "active");
        svgFeaturesup.classList.replace("active", "inactive");
        ulFeatures.style.display= "none";
    }
}
company.onclick = function () {
    if (svgCompanydown.classList.contains("active")) {
        svgCompanydown.classList.replace("active", "inactive");
        svgCompanyup.classList.replace("inactive", "active");
        ulCompany.style.display= "block";
    } else {
        svgCompanydown.classList.replace("inactive", "active");
        svgCompanyup.classList.replace("active", "inactive");
        ulCompany.style.display= "none";
    }
}
// ######################################
let myToggle = document.querySelector(".toggle");
let myNav = document.querySelector("nav .nav")

//#########################
function hideNav() {
    if (window.innerWidth > 991) {
        myToggle.style.display = "none";
        myNav.style.display = "flex";
    } else {
        
        myToggle.style.display = "inline-block";
        myNav.style.display = "none";
    }
};
hideNav();
window.onresize = hideNav;
let myContainer = document.querySelector("body > .container")
myToggle.onclick = () => {
    myNav.style.display = "inline-block";
}
let myClose = document.querySelector("nav .nav .close svg")
myClose.onclick = () => {
    myNav.style.display = "none";
}

//#################################3
let registerBtn = document.querySelector("nav .nav .register button");
let loginLink = document.querySelector("nav .nav .register a.log");
let accountsList = JSON.parse(window.localStorage.getItem('users'));
if (localStorage.getItem("users")) {
    let accountsList = JSON.parse(window.localStorage.getItem('users'));
    function getUserIndex() {
        for (let i = 0; i < accountsList.length; i++) {
            if (accountsList[i].userAvaliabilty === true) {
                let index = i;
                return index ;
            }
        }
    }
    let userId = getUserIndex();
    function createAvatar () {
        if (userId >= 0) {
            document.querySelector("nav .nav .register").style.display = "none";
            let avatar = document.querySelector("div.userLetter");
            avatar.textContent = accountsList[userId].name.slice(0,1).toUpperCase();
            avatar.style.cssText = "width: 40px; height: 40px; border-radius: 50%; background-color: hsl(0, 0%, 41%); border-width: 3px; border-style: solid; text-align: center;padding-top:10px;line-height: 20px;font-size: 25px;cursor: pointer;display: inline-block;position: absolute; top: 0; right: 0%;transition: right 1s linear;color: white;z-index: 100000;"
        }
    }
    createAvatar()
    let userSchortcut = document.querySelector("div.userLetter");
    userSchortcut.onclick = function () {
        if (document.querySelector("nav .userInformation") && document.querySelector("nav .userInformation").style.display === "flex") {
            document.querySelector("nav .userInformation").style.display = "none";
            return;
        } else {
            if (document.querySelector("nav .userInformation")) {
                document.querySelector("nav .userInformation").style.display = "flex";
            } else {
                function createLogOutWindow() {
                    let logOutWindow = document.createElement("div");
                    logOutWindow.className = "userInformation"
                    let hr = document.createElement("hr")
                    let hr1 = document.createElement("hr")
                    let hiUser = document.createElement("p");
                    let yourEmail = document.createElement("p");
                    let logOutButton = document.createElement("button");
                    hiUser.textContent = `hi, ${accountsList[userId].name}`;
                    yourEmail.textContent = `${accountsList[userId].userEmail}`;
                    logOutButton.textContent = "Log Out";
                    logOutWindow.appendChild(hiUser);
                    logOutWindow.appendChild(hr);
                    logOutWindow.appendChild(yourEmail);
                    logOutWindow.appendChild(hr1);
                    logOutWindow.appendChild(logOutButton);
                    logOutWindow.style.cssText = "position:absolute; top: 110%;max-width: 300px; right: 0; font-size : 25px;border: 3px solid royalblue; text-align: center; background-color: hsl(0, 0%, 41%);color: white; height: 150px;display: flex;flex-direction: column; justify-content: space-evenly; border-radius: 20px; z-index: 500;"
                    yourEmail.style.cssText = "text-align: center;font-size: 15px;";
                    logOutButton.style.cssText = " width: 60%;margin-left: auto; margin-right: auto;border-radius: 16px;out-line: none;border:none;cursor: pointer; background-color: royalblue; color: white;";
                    logOutButton.onclick = function () {
                    logOutButton.style.cssText = " width: 60%;margin-left: auto; margin-right: auto;border-radius: 16px;out-line: none;border:none;cursor: pointer; background-color: white; color: black";
                    }
                    document.querySelector("nav").appendChild(logOutWindow);
                    logOutButton.onclick = function () {
                        for (let i = 0; i< accountsList.length; i++) {
                            accountsList[i].userAvaliabilty = false;
                            
                        }
                        window.localStorage.setItem("users", JSON.stringify(accountsList));
                        document.querySelector("nav .nav .register").style.display = "flex";
                        document.querySelector("div.userLetter").style.display = "none";
                        logOutWindow.style.display="none";
                        location.reload()
                    }
                }
                createLogOutWindow()
            }
        }
    }
}
// ###########################################
let setButton = document.querySelector(".container form input.setGoal");
let goalName = document.querySelector('.container form .name');
let whyGoal = document.querySelector(".container form input.why");
let howToDo = document.querySelector(".container form input.how");
let neededTime = document.querySelector(".container form input.requiredtime");
let deadLine = document.querySelector(".container form input.deadLine");
setButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (goalName.value === "") {
        return;
    }
    if (whyGoal.value === "") {
        return;
    }
    if (howToDo.value === "") {
        return;
    }
    if (neededTime.value === "") {
        return;
    }
    if (deadLine.value === "") {
        return;
    }
    if (goalName.value !== "" && whyGoal.value !== "" && howToDo.value !== "" && neededTime.value !== "" && deadLine.value !== "") {
        let goal = document.createElement("div");
        let savedGoalName = document.createElement("h3");
        let savedGoalWhy = document.createElement("p");
        let savedText = document.createElement("div");
        let progressAndButtons = document.createElement("div");
        let progressDiv = document.createElement("div");
        let progressRatio = document.createElement("span");
        let delButton = document.createElement("button");
        let modifyButton = document.createElement("button");
        goal.style.cssText = "border: 1px solid royalblue; padding: 15px;padding-left: 25px;background-color: #eee; margin: 10px 0;border-radius: 20px; display: grid;grid-template-columns: auto auto;";
        savedGoalName.textContent = goalName.value; 
        savedGoalWhy.textContent = whyGoal.value;
        delButton.textContent = "Delete"
        delButton.style.cssText = "background-color: red; color: #fff; font-size: 18px; padding: 5px; border: none; border-radius: 10px; text-align: center; width: 150px;cursor: pointer"
        savedText.appendChild(savedGoalName)
        savedText.appendChild(savedGoalWhy);
        savedText.style.cssText = "display: flex; flex-direction: column";
        progressAndButtons.style.cssText = "display: flex; flex-direction: column; align-items: flex-end; padding-right: 15px;"
        progressAndButtons.appendChild(progressDiv)
        progressAndButtons.appendChild(delButton)
        progressAndButtons.appendChild(modifyButton)
        goal.appendChild(savedText);
        goal.appendChild(progressAndButtons);
        progressDiv.appendChild(progressRatio)
        let secondContainer = document.querySelector("div.myGoals")
        secondContainer.appendChild(goal);
    }
})
