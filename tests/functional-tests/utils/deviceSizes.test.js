import { device } from '../../../src/utils/deviceSizes';
const sizes = [{
    name: "mobileS",
    size: "200px"
}, {
    name: "mobileM",
    size: "360px"
}, {
    name: "mobileL",
    size: "411px"
}, {
    name: "tablet",
    size: "768px"
}, {
    name: "laptop",
    size: "1024px"
}, {
    name: "laptopL",
    size: "1440px"
}, {
    name: "desktopS",
    size: "1600px"
}, {
    name: "desktopM",
    size: "1920px"
}, {
    name: "desktopL",
    size: "2560px"
}]

describe('Check all the device sizes', () => {
    sizes.map((size) => {
        test(`${size.name} should be ${size.size}`, () => {
            expect(device[size.name]).toBe(deviceBody(size.size));
        });
    });
});

const deviceBody = (size) => {
    return `(min-width: ${size})`
}