// Q:1. Write a program that takes a positive integer from user & display the following in your browser.
// a. number
// var num = 45
// document.write(num)

// b. round off value of the number
// var num = 45.4
// var check = Math.round(num)
// document.write(check)

// c. floor value of the number
// var num = 45.5
// var check = Math.floor(num)
// document.write(check)

// d. ceil value of the number
// var num = 44.777777
// var check = Math.ceil(num)
// document.write(check)

// Q:2. Write a program that takes a negative integer from user & display the following in your browser.
// a. number
// var num = -32
// document.write(num)

// b. round off value of the number
// var num = -31.4
// var check = Math.round(num)
// document.write(check)

// c. floor value of the number
// var num = -30.4
// var check = Math.floor(num)
// document.write(check)

// d. ceil value of the number
// var num = -31.777777
// var check = Math.ceil(num)
// document.write(check)

// Q:3. Write a program that takes a positive floating point number from user & display the following in your browser.
// a. number
// var num = 3.45214
// document.write(num)

// b. round off value of the number
// var num = 3.4
// var check = Math.round(num)
// document.write(check)

// c. floor value of the number
// var num = 3.4
// var check = Math.floor(num)
// document.write(check)

// d. ceil value of the number
// var num = 3.777777
// var check = Math.ceil(num)
// document.write(check)

// Q:4. Write a program that takes a negative floating point number from user & display the following in your browser.
// a.number
// var num = -2.673
// document.write(num)

// b. round off value of the number
// var num = -3.4
// var check = Math.round(num)
// document.write(check)

// c. floor value of the number
// var num = -3
// var check = Math.floor(num)
// document.write(check)

// d. ceil value of the number
// var num = -2.777777
// var check = Math.ceil(num)
// document.write(check)

// Q:5. Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5
// document.write("The absolite of -4 is 4")

// Q:6. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.
// document.write("random dice value: 4" + "<br>")
// document.write("random dice value: 6")

// Q:7. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser.
// document.write("2"+"<br>"+"random cion value: heads" + "<br>")
// document.write("1"+"<br>"+"random cion value: tails")

// Q:8. Write a program that shows a random number between 1 and 100 in your browser.
// document.write("random number between 1 and 100:")
// var num = 84
// document.write(num + "<br><br>")
// document.write("random number between 1 and 100:")
// var num = 37
// document.write(num)

// Q:9. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms
// var user = prompt("enter yuor wigth")
// document.write("The wigth of user " + user + " killgrams")

// Q:10. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.
// var num = prompt("enter a number between 1 and 10")
// alert("try next time")

// Q:11. Write a program that displays current date and time in your browser.
// var date = new Date()
// document.write(date)

// Q:12. Write a program that alerts the current month in words. For example December.
// var month = ["jan" + "feb" + "mar" + " april" + "may" + "june" + "july" + "aug" + "sep" + "oet" + "nev" + "december"] 
// var date =  new Date().getMonth()
// var copy = date.slice(0,11)
// document.write(date[month])

// Q:13. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.
// var days = ['sunday','monday','tuesdeay','wednesday','thursday','friday','saterday'] 
// var day =  new Date().getDay()
// document.write(days[day])

// Q:14. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.
// var days = ['fun'] 
// var day =  new Date().getDay()
// document.write(day)

// Q:15. Write a program that shows the message “First fifteen days of themonth” if the date is less than 16th of the month else shows “Last days of the month”. 
// var date =  new Date().getDay()
// document.write(date)

// Q:16. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.
// var date =  new Date()
// document.write(date + "<br>")
// var date = new Date().getTime()
// document.write("Elasped milliseconds since january 1, 1970:" + date + "<br>")
// var date = new Date().getTime()
// document.write("Elasped milliseconds since january 1, 1970:" + date)

// Q:17. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.
// document.write("<h1> It's pm </h1>")/

// Q:18. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate
// var date = new Date()
// document.write("later date:"+date) 
    
// Q:19. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
// document.write("171 days have passed since 1st ramadan,2015")

// Q:20. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.
// var date = new Date()
// document.write(date + "<br>")
// document.write("488091 seconds had passed since beginning of 2015")

// Q:21. Create a Date object for the current date and time. Extract th hours, reset the date object an hour ahead and finally display the date object in your browser.
// var date =  new Date()
// document.write("current date: "+date + "<br>")
// var date = new Date()
// document.write("1 hour ago, it was " + date)

// Q:22. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?
// var date = new Date()
// document.write(date + "<br><br>")
// var date = new Date()
// document.write("100 yars back, it was " + date + "<br>")

// Q:23. Write a program to ask the user about his age. Calculate and show his birth year in your browser.
// document.write("<center><h1>Age</h1></center>")
// var prasent = new Date().getTime()
// var dob = new Date (prompt("enter you age")).getTime()
// var age = prasent-dob
// var finalage = age/(1000*60*60*24*365)
// document.write(`<center>your age is a: ${Math.floor(finalage)}</center>`)
// var prasent = new Date().getTime()
// document.write(`<center>your birth year is:1996 </center>`)

// Q::24. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2 decimal
// places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// document.write("<center><h1>K-Electric Bill</h1></center>")
// document.write("<center>Customer name:<b> Wajiha kanwal</b></center>")
// document.write("<center>Month: <b>December</b></center>")
// document.write("<center>Number of units: <b>450</b></center>")
// document.write("<center>Charges per unit: <b>14</b><br><br></center>")
// document.write("<center>Net Amount Payable (within Due Date): <b>6300</b></center>")
// document.write("<center>Late Payable surcharge: <b>500</b></center>")
// document.write("<center>Gross Amount Payable (after Due Date): <b>6800</b></center>")