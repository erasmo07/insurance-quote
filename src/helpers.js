export const calculateDiferentYear = year => (
    new Date().getFullYear() - year
);


export const calculateByBrand = (brand) => {
    const equivalentPorcentage = {
        'americano': 1.15,
        'asiatico': 1.05,
        'europeo': 1.30
    };

    return equivalentPorcentage[brand];
};

export const calculateTyple = (plan) => {
    const equivalentType = {
        'basic': 1.20,
        'full': 1.50
    };

    return equivalentType[plan];
}

export const firstUpperCase = (text) => (
    text.charAt(0).toUpperCase() + text.slice(1)
);