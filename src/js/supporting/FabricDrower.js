"use strict"

class FabricDrower {

    static createDrower(model, mountPoint) {
        if (model instanceof Locker) {
            return FabricDrower.createDrowLocker(model, mountPoint);
        } else if (model instanceof WiFiRouter) {
            return FabricDrower.createDrowWiFiRouter(model, mountPoint);
        } else if (model instanceof Mp3Player) {
            return FabricDrower.createDrowMp3(model, mountPoint);
        }
    }



    static createDrowLocker(model, mountPoint) {
        switch (mountPoint) {
            case "livingroom":
                let mp1 = document.getElementById("livingroom");
                return new DrowLocker(model, mp1);
            case "kitchen":
                let mp2 = document.getElementById("kitchen");
                return new DrowLocker(model, mp2);
            case "bathroom":
                let mp3 = document.getElementById("bathroom");
                return new DrowLocker(model, mp3);
            case "badroom":
                let mp4 = document.getElementById("badroom");
                return new DrowLocker(model, mp4);
            case "hall":
                let mp5 = document.getElementById("hall");
                return new DrowLocker(model, mp5);
            case "terrace":
                let mp6 = document.getElementById("terrace");
                return new DrowLocker(model, mp6);
        }
    }

    static createDrowMp3(model, mountPoint) {
        switch (mountPoint) {
            case "livingroom":
                let mp1 = document.getElementById("livingroom")
                return new DrowMp3(model, mp1);
            case "kitchen":
                let mp2 = document.getElementById("kitchen")
                return new DrowMp3(model, mp2);
            case "bathroom":
                let mp3 = document.getElementById("bathroom")
                return new DrowMp3(model, mp3);
            case "badroom":
                let mp4 = document.getElementById("badroom")
                return new DrowMp3(model, mp4);
            case "hall":
                let mp5 = document.getElementById("hall")
                return newDrowMp3(model, mp5);
            case "terrace":
                let mp6 = document.getElementById("terrace")
                return new DrowMp3(model, mp6);
        }
    }

    static createDrowWiFiRouter(model, mountPoint) {
        switch (mountPoint) {
            case "livingroom":
                let mp1 = document.getElementById("livingroom")
                return new DrowWiFiRouter(model, mp1);
            case "kitchen":
                let mp2 = document.getElementById("kitchen")
                return new DrowWiFiRouter(model, mp2);
            case "bathroom":
                let mp3 = document.getElementById("bathroom")
                return new DrowWiFiRouter(model, mp3);
            case "badroom":
                let mp4 = document.getElementById("badroom")
                return new DrowWiFiRouter(model, mp4);
            case "hall":
                let mp5 = document.getElementById("hall")
                return new DrowWiFiRouter(model, mp5);
            case "terrace":
                let mp6 = document.getElementById("terrace")
                return new DrowWiFiRouter(model, mp6);
        }
    }
}