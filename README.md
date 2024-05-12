# Srun account hunter

Get account and password to use WIFI

## Why this tool?

In some environments, internet access is unfairly restricted by time or user role, affecting essential services like educational access. This tool is developed to provide an equitable solution by allowing users to validate credentials for uninterrupted access.

## Features

- Read passwords from a text file.
- Automatically attempt password reset via HTTP POST request.
- Identify the correct password based on server response.

## Prerequisites

Before you run this tool, you need to have Node.js installed on your machine. This tool uses `node-fetch` to perform HTTP requests, which must be installed via npm. 

## Installation

1. Clone this repository or download the source files.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies, particularly `node-fetch`.

```bash
npm install node-fetch
```

## Usage
Ensure you have a passwords.txt file in the project directory. This file should contain potential passwords, each on a new line. If you have front-end develope experience, I think you don't need to read it.

There's two way to use. if the first way doesn't work, then just switch to another one

### First Way(easier)
1. Find the change password page
2. Then press control+shift+J to enter the DevTools, it should be on your right part of the screen. And the "change passowrd" page should beconme on your left part of the screen.
3. Click the network part on DevTools
4. Print the account and old passoword, new password(you don't need to know the real old password)
5. Now something should be caught, it should be on the DevTools. Right click the caught thing, copy it as JS(node.js), remember not to copy all or copy it in another format
6. Paste it in somewhere you can read easily
7. Find the URL, paste it(I have use comment to tell you where to paste)
8. Input the account to want to try(also have commented)
9. Now you can save and close the code. And open a terminal in this directory.
Run the script using Node.js:
```bash
node AG1.0.js
```


### Second way

1. Enter your campus WIFI login page
2. Click"change password",then you should enter the "change passowrd" page, which let you input your account and old password, new passowrd.
3. Then press control+shift+J to enter the DevTools, it should be on your right part of the screen. And the "change passowrd" page should beconme on your left part of the screen.
4. Click the network part on DevTools
5. Print the account and old passoword, new password(you don't need to know the real old password)
6. Now something should be caught, it should be on the DevTools. Right click the caught thing, copy it as JS(node.js), remember not to copy all or copy it in another format
7. In AG1.0.js, I have use comment to show you where to paste, paste it.
8. Change the "body" part in the code you just pasted. Change it to this:
```code
"body": body,
```
9. Now you can save and close the code. And open a terminal in this directory
Run the script using Node.js:
```bash
node AG1.0.js
```

## Configuration
URL: This need be input in the script to target a different URL.
Account: Modify the account variable in the script to test different accounts.\

## FAQ
1. What if it failed to get the password?
ANS: Because of bad luck. Change the account, change target.

2. What if I follow your readme but I can't run
ANS: Node.js should tell you where you have syntax error. If seems no error but still can't run, please send to "Issue", thanks

## License
This project is licensed under the Apache2 License - see the LICENSE file for details.
