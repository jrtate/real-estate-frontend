export const findPercent = (subsetValue, wholeValue) => (`${(subsetValue / wholeValue) * 100}%`); 

export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default findPercent;
