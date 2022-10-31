var bmr = 0;
var calories = 0;
function calBMR() {
    var unit = document.getElementById("imperialHead").className;
    var gender = document.getElementsByName("gender");
    var age = document.getElementsByName("age");

    if (unit == "tab_current") {
        age = parseInt(age[0].value);
        var inches = parseInt(document.getElementById("inches").value) || 0;
        var feet = parseInt(document.getElementById("feet").value) || 0;
        var stones = parseInt(document.getElementById("stones").value) || 0;
        var pounds = parseInt(document.getElementById("pounds").value) || 0;

        var height = feet * 12 + inches;
        var weight = stones * 14 + pounds;

        (gender[0].value == "female") ? bmr = 655 + (4.35 * weight) + (4.7 * height) - (4.7 * age) : bmr = 66 + (6.2 * weight) + (12.7 * height) - (6.76 * age);
        (gender[0].value == "male") ? bmr = 66 + (6.2 * weight) + (12.7 * height) - (6.76 * age) : bmr = 655 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
    }
    else {
        age = parseInt(age[1].value);
        var height = parseInt(document.getElementById("cm").value);
        var weight = parseInt(document.getElementById("kg").value);
        (gender[1].value == "female") ? bmr = 655 + (9.563 * weight) + (1.850 * height) - (4.676 * age) : bmr = 66.5 + (13.76 * weight) + (5.003 * height) - (6.755 * age);
        (gender[1].value == "male") ? bmr = 66.5 + (13.76 * weight) + (5.003 * height) - (6.755 * age) : bmr = 655 + (9.563 * weight) + (1.850 * height) - (4.676 * age);
    }
    var activitylevel1 = document.getElementById("activityLevel1");
    var activitylevel2 = document.getElementById("activityLevel2");
    var activitylevel3 = document.getElementById("activityLevel3");
    var activitylevel4 = document.getElementById("activityLevel4");
    var activitylevel5 = document.getElementById("activityLevel5");

    (activitylevel1.checked) ? (calories = bmr * 1.2) : (calories += 0);
    (activitylevel2.checked) ? (calories = bmr * 1.375) : (calories += 0);
    (activitylevel3.checked) ? (calories = bmr * 1.55) : (calories += 0);
    (activitylevel4.checked) ? (calories = bmr * 1.725) : (calories += 0);
    (activitylevel5.checked) ? (calories = bmr * 1.9) : (calories += 0);

    document.getElementById("bmr").innerHTML = "Your BMR is " + bmr.toFixed(1);
    document.getElementById("calories").innerHTML = "Your calories intake per day is " + calories.toFixed(1);
}

function tab(event, unitName) {
    var i, tabcontent, tablink;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablink = document.getElementsByClassName("tab_current");
    for (i = 0; i < tablink.length; i++) {
        tablink[i].className = "tab";
    }
    document.getElementById(unitName).style.display = "block";
    event.currentTarget.className = "tab_current";
}