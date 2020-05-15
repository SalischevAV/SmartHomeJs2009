"use strict";
async function loadScript (src){
    let script = document.createElement(`script`);
    script.src = src; 
    await new Promise((resolve, reject)=>{
        document.head.appendChild(script);
        resolve(script.onload = () => console.log(`script ${script.src} have loaded`));
        reject(script.onerror = () => console.log(new Error(`script ${script.src} have not loaded`)));
    })
     
    
}

loadScript("./src/js/constates.js");
loadScript("./src/js/channelReciver.js");
loadScript("./src/js/regulator.js");
loadScript("./src/js/Validator.js");
loadScript("./src/js/List.js"); 
loadScript("./src/js/device.js");
loadScript("./src/js/WiFiDevice.js");
loadScript("./src/js/soundDevice.js");
loadScript("./src/js/Mp3Player.js");
loadScript("./src/js/tv.js");
loadScript("./src/js/wiFirouter.js"); 
loadScript("./src/js/Locker.js");
loadScript("./src/js/smarthome.js"); 


/*let d = new Device("fff");
let mp3 = new Mp3Player("ttt", "gggg")
let tv1 = new TV("rrr");
let sh = new SmartHome();
sh.addDevice("hall", d);
sh.addDevice("bathroom", tv1);
sh.addDevice("kitchen", mp3);
sh.getAviableDevices();*/



