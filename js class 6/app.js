// Q:1. Write a program that takes two user inputs for first and last
// name using prompt and merge them in a new variable titled
// fullName. Greet the user using his full name.

// var Firstname = prompt("enter your first name")
// var lastname = prompt("enter your last name")
// var fullName = Firstname+" "+lastname
// document.write(fullName)

// Q:2.
// var mobile = prompt('enter you mobile phone model ')
// document.write("your favrites mobile "+ "mobile"+ "<br>length of String:" + mobile.length)

// Q:3.
// var string = 'Pakistani'
// var string= string.indexOf('n')
// document.write(string)

// Q:4.
// var string = "Hello world"
// var string = string.lastIndexOf('l')
// document.write(string)

// Q:5.
// var string = "Pakistan"
// var string = string.indexOf('i')
// document.write(string)

// Q:6.
// var Firstname = prompt("enter your first name")
// var lastname = prompt("enter your last name")
// var fullName = Firstname + lastname
// document.write(fullName)

// Q:7.
// var string = "hyderabad"
// var naya = string.replace('hyderabad', 'Islamabad')
// document.write(naya)

// Q:8.
// let message = "Ali and Sami are best friends. They play cricket and football together.";
// let updatedMessage = message.replace(/\band\b/g, "&");
// document.body.innerHTML = `Updated Message: ${updatedMessage}`;

// Q:9.
// var str = "472"
// var num = parseInt(str)
// document.write( `String: ${str} (Type: ${typeof str})<br>Number: ${num} (Type: ${typeof num})``let str = "472"`)

// Q:10.
// let url =" www.facebook.com"
// let domain = url.split(".")[1];
// document.body.innerHTML = `Domain: ${domain}`;

// Q:11.
// var userInput = prompt("Enter some text:");
// var upperCaseInput = userInput.toUpperCase();
// document.write(`${upperCaseInput}`)

// Q:12.
// var userInput = prompt("Enter some text:")
// var lowerCaseInput = userInput.toLowerCase();
// document.write(`Lowercase: ${lowerCaseInput}`)

// Q:13.
// var userInput = prompt("Enter some text:");
// var titleCaseInput = userInput.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// document.write(`${titleCaseInput}`)

// Q:14.
// var name = 35.36
// var con = String(name.replace(".",""))
// document.write(`number : ${name} <br> result : ${con}`)

// Q:15.
// var a = a="3"
// var b = b="3"
// var con = a + b
// document.write(con)

// Q:16.
// var a = a = 3
// var b = b = 3
// var con = a - b
// document.write(con)

// Q:17.
// var str = prompt("enter your name")
// var str2= ["!@#$%^*()"]
// var con = str + str2
// document.write(con)

// Q:18.
// A = ["cake", "apple pie", "cookie", "chips", "patties"]
// search_item = input("Enter the item to search: ")


// Q:19.
// string1 = prompt("Enter the first string: ")
// string2 = prompt(" Enter the second string: ")
// var final = string1+ string2
// document.write(final)

// Q:20.
// var passsword = prompt("Enter your password:")
// if (passsword.length >=6 && /[a-z A-Z]/.test(passsword)&&/\d/.test(passsword &&!/^\d/.test(passsword))){
//     alert("Your password is vaild!");}

//     eles{
//         alert("Invalid password! Please follow these rules:\n"+ "1. password must contain both letter and number.\n"+ "3. it must be at least 6 character long.")
//     }

// Q:21.
// var university = "University of Karachi";
// var universityArray = university.split(" ");
// document.write( `${universityArray.join("<br>")}`)

// Q:22.
// user_input = input("Enter a string: ")
// if user_input:
    // print("Last character:", user_input[-1])
// else:
    // print("You entered an empty string.")
// Q:23.
// text = "The quick brown fox jumps over the lazy dog"
// words = text.lower().split()
// count = words.count("the")
// print("Number of occurrences of 'the':", count)

// Q:24.
// var str = "Pakistan";

// // Convert the string to lowercase to handle case insensitivity
// str = str.toLowerCase();

// // Define vowels
// var vowels = "aeiou";

// // Initialize counters
// var vowelCount = 0;
// var consonantCount = 0;

// // Loop through each character in the string
// for (var i = 0; i < str.length; i++) {
//     var char = str[i];
//     if (vowels.includes(char)) {
//         vowelCount++; // Increment vowel count
//     } else if (char >= 'a' && char <= 'z') {
//         consonantCount++; // Increment consonant count
//     }
// }

// // Display the results
// console.log("Number of vowels:", vowelCount);
// console.log("Number of consonants:", consonantCount);