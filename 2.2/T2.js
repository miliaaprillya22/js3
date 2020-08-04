// Reverse => 
//Reverse String adalah cara yang digunakan untuk membalikkan 
//sebuah string atau kata di dalam bahasa pemrograman

//join => 
// adalah method yang digunakan untuk menggabungkan seluruh array menjadi sebuah 
//string 


//split =>
//Split digunakan untuk membagi string menjadi array substring dan mengembalikan array baru tanpa mengubah string asli

//Reverse
//No.1
function kebalikan(){
    let cek= ['Saya','Belajar','Java Scirpt']
    console.log(cek.reverse()) 
}
kebalikan ()

//const { Console } = require("console");


//Palidnrom
//No.2 
function Palindrome(s) {
    return s == s.split("").reverse().join("") ? console.log(" Kata adalah Palindrome") : console.log("Bukan Palindrome");
}

console.log(Palindrome("noon"))