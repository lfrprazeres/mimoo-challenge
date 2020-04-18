import { device } from '../../../src/utils/deviceSizes';
import { sizes } from '../../mocks';

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