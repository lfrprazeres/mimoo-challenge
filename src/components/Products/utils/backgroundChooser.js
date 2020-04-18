export const backgroundChooser = (category, beige, aquablue) => {
    switch(category) {
        case "Skin Care": {
            return `${beige} 0% 0% no-repeat padding-box`
        }
        case "Snacks": {
            return `${aquablue} 0% 0% no-repeat padding-box`
        }
        default: {
            return `${beige} 0% 0% no-repeat padding-box`
        }
    }
}