const solution = (s, n) => {
    return [...s + ""].map(value => {
        const charCode = value.charCodeAt();
        let result;
        if (charCode === 32) {
            result = " ";
        } else if (charCode + n > 122 || (charCode <= 90 && charCode + n > 90)) {
			result = String.fromCharCode((charCode + n) - 26);
        } else {
            result = String.fromCharCode(charCode + n);            
        }
        return result;
    }).join("");
};
