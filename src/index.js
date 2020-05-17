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
loadScript("./src/js/SmartHome.js"); 
loadScript("./src/js/Regulator.js");
loadScript("./src/js/Validator.js");
loadScript("./src/js/List.js"); 
loadScript("./src/js/Device.js");
loadScript("./src/js/WiFiDevice.js");
loadScript("./src/js/SoundDevice.js");
loadScript("./src/js/Mp3Player.js");
loadScript("./src/js/tv.js");
loadScript("./src/js/wiFirouter.js"); 
loadScript("./src/js/Locker.js");


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
sh.massPowerOn(3000)


/*let d = new Device("fff");
let mp3 = new Mp3Player("ttt", "gggg")
let tv1 = new TV("rrr");
let sh = new SmartHome();
sh.addDevice("hall", d);
sh.addDevice("bathroom", tv1);
sh.addDevice("kitchen", mp3);
sh.getAviableDevices();




loadScript("./src/js/channelReciver.js");*/



