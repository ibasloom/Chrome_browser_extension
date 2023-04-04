<h3 align="left">Connect with me @ichaush3 :</h3>
<p align="left">
<a href="https://twitter.com/ichaush3" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="ichaush3" height="30" width="40" /></a>
<a href="https://linkedin.com/in/ichaush3" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="ichaush3" height="30" width="40" /></a>
<a href="https://fb.com/ichaush3" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg" alt="ichaush3" height="30" width="40" /></a>
<a href="https://instagram.com/ichaush3" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="ichaush3" height="30" width="40" /></a>
<a href="https://www.youtube.com/@ichaush3" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg" alt="ichaush3" height="30" width="40" /></a>
</p>

# Chrome_Browser_Extension Using ![](https://img.shields.io/badge/Tool-ChatGPT-blue)

## Step 1 
Go to chatgpt [ChatGPT](https://chat.openai.com/chat/) 

```
write me Chrome browser extension for displays the current date and time
```

## Step 2 

Save file as ![](https://img.shields.io/badge/Extension-json-blue)
``` 
manifest.json 
```

 ```
{
  "name": "Current Date and Time",
  "version": "1.0",
  "manifest_version": 2,
  "browser_action": {
    "default_popup": "popup.html"
  }
}
```
## Step 3 
Save file as ![](https://img.shields.io/badge/Extension-HTML-blue)
``` 
popup.html 
```
```
<!DOCTYPE html>
<html>
  <head>
    <title>Current Date and Time</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        font-size: 16px;
        margin: 0;
        padding: 20px;
        text-align: center;
      }
      
      h1 {
        font-size: 32px;
        font-weight: bold;
        margin: 0;
      }
      
      p {
        margin: 10px 0;
      }
    </style>
    <script src="popup.js"></script>
  </head>
  <body>
    <h1>Current Date and Time</h1>
    <p id="date"></p>
    <p id="time"></p>
  </body>
</html>

```

## Step 4 
Save file as ![](https://img.shields.io/badge/Extension-js-blue)
```
popup.js
```
```
// Wait for the popup to load
document.addEventListener("DOMContentLoaded", function() {
  // Update the date and time every second
  setInterval(updateDateTime, 1000);
});

// Update the date and time
function updateDateTime() {
  // Get the current date and time
  var now = new Date();
  
  // Update the date and time in the popup
  document.getElementById("date").textContent = now.toLocaleDateString();
  document.getElementById("time").textContent = now.toLocaleTimeString();
}

```
## Step 5 

![Go To Chrome browser](https://github.com/ibasloom/Chrome_browser_extension/blob/main/Images/extension.png)
![Manage extension](https://github.com/ibasloom/Chrome_browser_extension/blob/main/Images/mng%20extension.png)
![b4](https://github.com/ibasloom/Chrome_browser_extension/blob/main/Images/b4%20dme.png)
![After](https://github.com/ibasloom/Chrome_browser_extension/blob/main/Images/after%20dme.png)

## Step 6 

Upload your all 3 file 
![](https://img.shields.io/badge/Extension-json-blue)
![](https://img.shields.io/badge/Extension-HTML-blue)
![](https://img.shields.io/badge/Extension-js-blue)

![](https://github.com/ibasloom/Chrome_browser_extension/blob/main/Images/Chrome%20browser%20extension%20that%20displays%20the%20current%20date%20and%20time.png)

