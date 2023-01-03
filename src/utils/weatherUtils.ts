export const airQualityDesc = (value: number) => {
    switch (value) {
        case 1:
            return 'Good';
        case 2:
            return 'Moderate';
        case 3:
            return 'Unhealthy';
        case 4:
            return 'Unhealthy';
        case 5:
            return 'Very Unhealthy';
        case 6:
            return 'Hazardous';
        default:
            return 'No value'
    }
}

export const windSpeedDesc = (value: number) => {
    if (value < 1) {
        return 'Calm';
    } else if (value < 3) {
        return 'Light air';
    } else if (value < 7) {
        return 'Light breeze';
    } else if (value < 12) {
        return 'Gentle breeze';
    } else if (value < 18) {
        return 'Moderate breeze';
    } else if (value < 24) {
        return 'Fresh breeze';
    } else if (value < 31) {
        return 'Strong breeze';    
    } else if (value < 38) {
        return 'Moderate gale';
    } else if (value < 46) {
        return 'Fresh gale';
    } else if (value < 54) {
        return 'Strong gale';
    } else if (value < 63) {
        return 'Whole gale';
    } else if (value < 73) {
        return 'Storm';
    } else {
        return ' Hurricane';
    }
}