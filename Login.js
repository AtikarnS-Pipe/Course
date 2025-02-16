var objPeople = [  // Corrected capitalization for consistency
    {
      username: "pipeatikarn",
      password: "pipe47"
    },
    {
      username: "badpipe",
      password: "pipe2547"
    },
    {
      username: "admin",
      password: "1234"
    }
  ];
  
  function getInfo() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    for (var i = 0; i < objPeople.length; i++) {
      if (username === objPeople[i].username && password === objPeople[i].password) {
        console.log(username + " is logged in!");
        alert("Login Success");
        window.location.href = "http://127.0.0.1:5500/Main.html";  // Removed semicolon at the end
        return true;  // Login successful, so return true
      }
    }
  
    console.log("Incorrect username and password");
    alert("Login Failed");
    return false;  // Login failed, so return false
  }
  
  function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  function handlePlaceholder(input) {
    if (input.value !== "") {
      input.placeholder = ""; // ลบ placeholder เมื่อมีการพิมพ์
    } else {
      input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1); // คืน placeholder เดิมเมื่อไม่มีข้อมูล
    }
  }