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

loadScript("./src/js/supporting/Constats.js");
loadScript("./src/js/SmartHome.js"); 
loadScript("./src/js/supporting/Regulator.js");
loadScript("./src/js/supporting/Validator.js");
loadScript("./src/js/supporting/List.js"); 
loadScript("./src/js/model/Device.js");
loadScript("./src/js/model/InternetDevice.js");
loadScript("./src/js/model/SoundDevice.js");
loadScript("./src/js/model/Mp3Player.js");
loadScript("./src/js/model/WiFirouter.js"); 
loadScript("./src/js/model/Locker.js");
loadScript("./src/js/view/DrowDevice.js");


/*let sh = new SmartHome();
let d1 = new Device(`kkk`);
let d2 = new Device(`kkk`);
let d3 = new Device(`kkk`);
let wf = new WiFiRouter("rrr")
let mp3 = new Mp3Player("ttt", "gggg", "disk")
sh.addDevice("hall", d1);
sh.addDevice("bathroom", d2);
sh.addDevice("hall", d3);
sh.addDevice("kitchen", wf);
sh.addDevice("hall", mp3);
let ar = sh.searchByLocation("hall")
const mp = document.getElementById("root");
const drowDev = new DrowDevice(d1, mp)


/*let d = new Device("fff");
let mp3 = new Mp3Player("ttt", "gggg")
let tv1 = new TV("rrr");
let sh = new SmartHome();
sh.addDevice("hall", d);
sh.addDevice("bathroom", tv1);
sh.addDevice("kitchen", mp3);
sh.getAviableDevices();




loadScript("./src/js/channelReciver.js");*/



