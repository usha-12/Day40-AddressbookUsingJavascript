console.log("Welcome to day 40 addressbook program using javascrpt")
class Contact {
    constructor(f_name, l_name, address, city, state, zip, ph_no, email) {
        this.f_name = f_name;
        this.l_name = l_name;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.ph_no = ph_no;
        this.email = email;   
    }
    get getF_name() {
        return this.f_name;
    }
    set setF_name(f_name) {
        this.f_name =f_name;
    }
    get getL_name(){
        return this.l_name;
    }
    set setL_name(l_name) {
        this.l_name = l_name;
    }
    get getAddress(){
        return this.address;
}
    set setAddress(address) {
        this.address = address;
    }
    get getCity(){
        return this.city;
    }
    set setCity(city) {
        this.city = city;
    }
    get getState(){
        return this.state;
    }
    set setState(state) {
        this.state = state;
    }
    get getZip(){
        return this.zip;
    }
    set setZip(zip) {
        this.zip = zip;
    }
    get getPh_no(){
        return this.ph_no;
    }
    set setPh_no(ph_no) {
        this.ph_no = ph_no;
    }
    get getEmail(){
        return this.email;
    }
    set setEmail(email) {
        this.email = email;
    }
    toString() {
        return "First name : "+this.f_name+", Last name : "+this.l_name+", Address : "+this.address
        +", City : "+this.city+", State : "+this.state+", ZIP : "+this.zip+"Phone number : "+this.ph_no+", Email : "+this.email;
    }
}

const prompt = require("prompt-sync")({sigint:true}); 
let f_name = getUserInput(prompt("Eter the first name : "), "^[A-Z][a-zA-Z]{2,}");
let l_name = getUserInput(prompt("Enter the last name : "), "^[A-Z][a-zA-Z]{2,}");
let address = getUserInput(prompt("Enter the address : "), "[a-zA-Z\w\d\s]{3,}");
let city = getUserInput(prompt("Enter the city name : "), "[a-zA-Z\w\d\s]{3,}");
let state = getUserInput(prompt("Enter the state name : "), "[a-zA-Z\w\d\s]{3,}");
let zip = getUserInput(prompt("Enter the zip code : "), "[0-9]{6}");
let ph_no = getUserInput(prompt("Enter the phone number : "), "^(91)?([ ])?[6-9]{1}[0-9]{9}$");
let email = getUserInput(prompt("Enter the email address : "), "^[a-zA-Z0-9]+([._+-][a-zA-Z0-9]+)*@([a-z1-9]+)([.][a-z]*)?(\.[a-z]{2,})$");
function createContact() {
    let contact = new Contact(f_name, l_name, address, city, state, zip, ph_no, email);
    console.log(contact.toString());
}
function getUserInput(value, regexPattern) {
    let regex = RegExp(regexPattern);
    if(regex.test(value)) {
        return value;
    }
    else {
        console.log("Invalid input");
        value = prompt("Enter valid input");
        getUserInput(value, regexPattern);
    }
}
createContact();