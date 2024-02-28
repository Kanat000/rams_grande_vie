export const allowed_phone_prefix_list = ["700", "701", "702", "703", "704", "705", "706", "707", "708", "709", "747", "750", "751", "760", "761", "762", "763", "764", "771", "775", "776", "777", "778"];

export const checkPhoneNumberPrefix = (phoneNumber) => {
    const prefixStartIndex = phoneNumber.indexOf('(') + 1;
    const prefixEndIndex = phoneNumber.indexOf(')');
    const prefix = phoneNumber.substring(prefixStartIndex, prefixEndIndex);
    return (allowed_phone_prefix_list.includes(prefix));
}