// Used to connect to a backend known as Firebase - Special thanks to Ventrivel Ravi

const firebaseConfig = {
    apiKey: "AIzaSyBiCV81qazIvPkG61fjCQKBBmU08Q3b56I",
    authDomain: "clayseo-project.firebaseapp.com",
    databaseURL: "https://clayseo-project-default-rtdb.firebaseio.com",
    projectId: "clayseo-project",
    storageBucket: "clayseo-project.appspot.com",
    messagingSenderId: "158002576129",
    appId: "1:158002576129:web:8f8be5ccd1534e91cc7900"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var phoneNumber = getElementVal("phoneNumber");
    var msgContent = getElementVal("msgContent");

    if (name.trim() === '' || emailid.trim() === '' || msgContent.trim() === '' || phoneNumber.trim() === '') {
    alert('Please fill in all the fields');
    return;
  }
  
    saveMessages(name, emailid, phoneNumber, msgContent);
  
    document.querySelector(".alert").style.display = "block";
  
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 1000);
  
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, phoneNumber, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      phoneNumber: phoneNumber,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };