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
let f_name = prompt("Eter the first name : ");
let l_name = prompt("Enter the last name : ");
let address = prompt("Enter the address : ");
let city = prompt("Enter the city name : ");
let state = prompt("Enter the state name : ");
let zip = prompt("Enter the zip code : ");
let ph_no = prompt("Enter the phone number : ");
let email = prompt("Enter the email address : ");
function createContact() {
    let contact = new Contact(f_name, l_name, address, city, state, zip, ph_no, email);
    console.log(contact.toString());
}
createContact();