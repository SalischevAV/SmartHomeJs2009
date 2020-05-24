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
loadScript("./src/js/supporting/Timer.js");
loadScript("./src/js/supporting/List.js"); 
loadScript("./src/js/model/Device.js");
loadScript("./src/js/model/InternetDevice.js");
loadScript("./src/js/model/SoundDevice.js");
loadScript("./src/js/model/Mp3Player.js");
loadScript("./src/js/model/WiFirouter.js"); 
loadScript("./src/js/model/Locker.js");
loadScript("./src/js/view/DrowList.js");
loadScript("./src/js/view/DrowDevice.js");
loadScript("./src/js/view/DrowInternetDevice.js");
loadScript("./src/js/view/DrowSoundDevice.js");
loadScript("./src/js/view/DrowWiFiRouter.js"); 


/*let sh = new SmartHome();
let d1 = new Device(`kkk`);
let d2 = new Device(`kkk`);
let d3 = new Device(`kkk`);
let id1 = new InternetDevice("qwe");
let wf = new WiFiRouter("rrr")
let mp3 = new Mp3Player("ttt", "gggg", "disk")
sh.addDevice("hall", d1);
sh.addDevice("bathroom", d2);
sh.addDevice("hall", d3);
sh.addDevice("kitchen", wf);
sh.addDevice("hall", mp3);
sh.addDevice("livingroom", id1);
sh.addDevice("livingroom", wf);
let ar = sh.searchByLocation("hall")
const mp = document.getElementById("root");
const drowDev = new DrowDevice(d1, mp);
const drowIDev = new DrowInternetDevice(id1, mp);
const drowList = new DrowList(ar, mp);
const drowWf = new DrowWiFiRouter(wf, mp);
const drowSound = new DrowSoundDevice(mp3, mp);

drowWf.render();

wf.addDevice(d1);
wf.addDevice(d2);
wf.addDevice(d3);

let qwe = [d1, d2, d3]
let asd = new DrowList(qwe, document.getElementById("root"))
asd.render()

/*let d = new Device("fff");
let mp3 = new Mp3Player("ttt", "gggg")
let tv1 = new TV("rrr");
let sh = new SmartHome();
sh.addDevice("hall", d);
sh.addDevice("bathroom", tv1);
sh.addDevice("kitchen", mp3);
sh.getAviableDevices();




loadScript("./src/js/channelReciver.js");*/



