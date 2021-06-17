let leapYearCalc = () => {
    let year = document.getElementById('year').value;

    console.log (year);


    if (year >=1 && year <= 9999) {
        if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) {
            document.querySelector('p').innerHTML = "The year " + year + " is a leap year";

            console.log ("The year" + year + "is a leap year");
        }

        else {
            document.querySelector('p').innerHTML = "The year" +" "+ year + " " + "is not a leap year";

        }
    }

}


const btn = document.getElementById ("btn");

btn.addEventListener("click", (e) => {leapYearCalc()

    console.log(e);

})



