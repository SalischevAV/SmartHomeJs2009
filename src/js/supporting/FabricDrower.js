"use strict"

class FabricDrower{
    static createDrowLocker(model, modelpoint){
        return new DrowLocker(model, modelpoint);
    }

    static createDrowMp3(model, modelpoint){
        return new DrowMp3(model, modelpoint);
    }

    static createDrowWiFiRouter(model, modelpoint){
        return new WiFiRouter(model, modelpoint);
    }
}