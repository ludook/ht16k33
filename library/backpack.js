'use strict';

const i2c = require('i2c');

module.exports = class LedBackpack {
    registerDisplaySetup = 0x80;
    registerSystemSetup = 0x20;
    registerDimming = 0xE0;
    addressKeyData = 0x40;
    blinkRateOff = 0x00;
    blinkRate2Hz = 0x01;
    blinkRate1Hz = 0x02;
    blinkRateHalfHz = 0x03;

    constructor(address = 0x70, bus = 1) {
        this.wire = new i2c(address, {device: '/dev/i2c-' + bus});
        this.buffer = [0x0000, 0x0000, 0x0000, 0x0000];
        this.wire.writeBytes(this.registerDisplaySetup | 0x01, [0x00], () => {
        });
        this.setBlinkRate(this.blinkRateOff);
        this.setBrightness(10);
        this.clear();
    }

    setBrightness(brightness = 15) {
        // brightness 0-15
        if (brightness > 15) brightness = 15;
        if (brightness < 0) brightness = 0;
        this.wire.writeBytes(this.registerDimming | brightness, [0x00], () => {
        });
    }

    setBlinkRate(blinkRate) {
        if (blinkRate > this.blinkRateHalfHz) blinkRate = this.blinkRateOff;
        this.wire.writeBytes(this.registerDisplaySetup | 0x01 | (blinkRate << 1), [0x00], () => {
        });
    }

    setBufferRow(row, value, update = true) {
        //Updates a single 16-bit entry in the 8*16-bit buffer
        if (row > 7) return;
        this.buffer[row] = value;
        if (update) this.writeDisplay();
    }

    writeDisplay() {
        const bytes = [];
        this.buffer.forEach(item => {
            bytes.push(item & 0xFF);
            bytes.push((item >> 8) & 0xFF)
        });
        this.wire.writeBytes(0x00, bytes, () => {
        });
    }

    clear() {
        this.buffer = [0, 0, 0, 0];
        this.writeDisplay();
    }
};