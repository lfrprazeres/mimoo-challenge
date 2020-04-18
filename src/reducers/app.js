const initialState = {
    defaultColors: {
        white: '#FFFEFC',
        green: '#00C3A3',
        lightGreen: '#067A678C',
        black: "#3A3A3A",
        brown: "#482F05",
        gray: '#999999',
        beige: '#CEB5AB',
        aquaBlue: '#ABC3CE',
        lightBrown: '#DFBF94',
    }
}

export const appReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        default: 
            return state;
    }
}