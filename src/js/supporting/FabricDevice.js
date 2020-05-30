"use strict"

class FabricDevice {

    static createDevice(type, brand) {
        switch (type) {
            case "Locker":
                let st1 = new Set();
                return new Locker(brand, false, false, st1, "close", OPENINGPOSITION);
            case "WiFi Router":
                let st2 = new Set();
                return new WiFiRouter(brand, false, false, false, "", st2);
            case "Mp3Player":
                let reg = new Regulator();
                let lst = new List();
                let st3 = new Set();
                return new Mp3Player(brand, false, st3, reg, lst);
        }
    }
}