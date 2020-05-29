"use strict"

class DrowSmartHome {
    constructor(model, mountpoint) {
        this._model = model;
        this._mountpoint = mountpoint;
        this._deviceSelect = null;
        this._locationSelect = null;
        this._workingDiv = null;
        this._brandSelect = null;
        this._createBtn = null;
    }

    _createDeviceList() {
        AVAILABLETYPESDEV.forEach((item) => {
            const optDev = document.createElement("option");
            optDev.innerText = item;
            optDev.value = item;
            this._deviceSelect.appendChild(optDev);
        });
    }
    _createBrandList() {
        BRANDS.forEach((item) => {
            const optBrand = document.createElement("option");
            optBrand.innerText = item;
            optBrand.value = item;
            this._brandSelect.appendChild(optBrand);
        });
    }


    _createLocationList() {
        LOCATION.forEach((item) => {
            const optLoc = document.createElement("option");
            optLoc.innerText = item;
            optLoc.value = item;
            this._locationSelect.appendChild(optLoc);
            const divLoc = document.createElement("div");
            divLoc.id = item;
            divLoc.classList.add(item + "Div");
            this._workingDiv.appendChild(divLoc);
        });
    }

    _selectInputHandler() {
        return (e) => {
            if (e.target.tagName == "SELECT") {
                let collection = [];
                for (let item of e.target.parentElement.children) {
                    if (item.tagName == "SELECT") {
                        collection.push(item);
                    }
                }
                if (collection[0].value != "" && collection[1].value != "" && collection[2].value != "") {
                    this._createBtn.disabled = "";
                }
            }
        }
    }

    render() {
        const creationDiv = document.createElement("div");
        creationDiv.classList.add("creationDiv");
        creationDiv.addEventListener("input", this._selectInputHandler());
        this._mountpoint.appendChild(creationDiv);

        this._workingDiv = document.createElement("div");
        this._workingDiv.classList.add("workingDiv");
        this._mountpoint.appendChild(this._workingDiv);

        //create list of devices
        this._deviceSelect = document.createElement("select");
        this._deviceSelect.size = "1";
        creationDiv.appendChild(this._deviceSelect);

        const optDevName = document.createElement("option");
        optDevName.innerText = "select device";
        optDevName.value = "";
        optDevName.disabled = "disabled";
        optDevName.selected = "selected";
        this._deviceSelect.appendChild(optDevName);

        this._createDeviceList();
        // end create list of devices

        //create list of brands
        this._brandSelect = document.createElement("select");
        this._brandSelect.size = "1";
        creationDiv.appendChild(this._brandSelect);

        const optBrandName = document.createElement("option");
        optBrandName.innerText = "select brand";
        optBrandName.value = "";
        optBrandName.disabled = "disabled";
        optBrandName.selected = "selected";
        this._brandSelect.appendChild(optBrandName);

        this._createBrandList();

        //end create list of brands

        //create list of locations

        this._locationSelect = document.createElement("select");
        this._locationSelect.size = "1";
        creationDiv.appendChild(this._locationSelect);

        const optLocName = document.createElement("option");
        optLocName.innerText = "select location";
        optLocName.value = "";
        optLocName.disabled = "disabled";
        optLocName.selected = "selected";
        this._locationSelect.appendChild(optLocName);

        this._createLocationList();
        // end create list of locations

        this._createBtn = document.createElement("button");
        this._createBtn.type = "button";
        this._createBtn.innerText = "Create";
        this._createBtn.disabled = "disabled";
        creationDiv.appendChild(this._createBtn);




    }
}