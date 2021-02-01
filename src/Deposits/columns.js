export const columns = [
    { id: 1, columnHeader: 'PROPERTY', responseFields: ['propertyAvatarPath', 'address', 'cityState'] },
    { id: 2, columnHeader: 'MOVE IN DATE', responseFields: ['moveInDate'] },
    { id: 3, columnHeader: 'RENT', responseFields: ['rent'] },
    { id: 4, columnHeader: 'DEPOSIT', responseFields: ['deposit'] },
    { id: 5, columnHeader: 'STATUS', responseFields: ['transactionDescription'] },
    { id: 6, columnHeader: '', responseFields: ['transactionId'], cellType: 'circleIndicatorCell' }
];

export default columns;