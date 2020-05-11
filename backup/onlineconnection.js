"use strict";
class onlineConnection{
    constructor (internetConnection = false, wiFiConnection = false, sSID=``){
        this.__internetConnection = internetConnection;
        this.__wiFiConnection = wiFiConnection;
        this.__sSID = sSID;
    }
}