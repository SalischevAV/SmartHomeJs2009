"use strict"

class FabricDevice{
    static createLocker(brand){
        let st = new Set();
        return new Locker(brand, false, false, st, "close", OPENINGPOSITION);
    }

    static createMp3Player(brand){
        let reg = new Regulator();
        let lst = new List();
        let st = new Set();
        return new Mp3Player(brand, false, st,  reg, lst);

    }

    static createWiFiRouter(brand){
        let st = new Set();
        return new WiFiRouter(brand, false, false, false, "", st);
    }


}