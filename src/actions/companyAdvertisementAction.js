export function getCompanyAdvertisementAction(companyObj) {
    return {
        type: 'GET_COMPANY_ADVERTISEMENT',
        payLoad: companyObj
    };
}