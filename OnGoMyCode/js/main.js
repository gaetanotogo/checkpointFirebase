
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCmvoVEkt1h4zix0o_50_eP6ZX3RfPu3cQ",
    authDomain: "ongomycode.firebaseapp.com",
    databaseURL: "https://ongomycode.firebaseio.com",
    projectId: "ongomycode",
    storageBucket: "",
    messagingSenderId: "246599308549",
    appId: "1:246599308549:web:f3645e72414fed06"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var messagesRef=firebase.database().ref('ongomycode');

document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();
    //Get values
    var name=document.getElementById('name').value;
    var option=document.getElementById('option').value;
    var email=document.getElementById('email').value;
    var PhoneNumber=document.getElementById('PhoneNumber').value;
    saveMessage(name,option,email,PhoneNumber);
}

/*document.getElementById('contactFrom').addEventListener('submit',submitForm);*/

function saveMessage(name,option,email,PhoneNumber){
    var newMessageRef=messagesRef.push();
    newMessageRef.set({
        name:name,
        option:option,
        email:email,
        PhoneNumber:PhoneNumber
    }); 
}


