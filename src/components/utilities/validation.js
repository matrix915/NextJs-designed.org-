export const validateAuthData = (data) => {
    let response = { status: true, error: "" };
    let emailValidate = String(data.email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    if (!emailValidate) {
        response.status = false;
        response.error = "email not correct";
    }
    if (data.email.length === 0 || data.password.length === 0) {
        response.status = false;
        response.error = "email and password required";
    }
    return response;
};
export const emailValidation = (data) => {
    let response = { status: true, error: "" };
    let emailValidate = String(data.email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    if (!emailValidate) {
        response.status = false;
        response.error = "email not correct";
    }
    return response;
};

export const passwordValidation = (password) => {
    let validate = password && String(password)
        .match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}[^A-Za-z0-9]$/)
        return !!validate
}
export const validateIncludeSpecialChar = (value) => {
    let validate = value && String(value).match(/[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/)
        return !!validate
}
export const validateIncludeUppercase = (value) => {
    let validate = value && String(value).match(/[A-Z]/)
        return !!validate
}
export const validateIncludeNumber = (value) => {
    let validate = value && String(value).match(/[0-9]/)
        return !!validate
}
export const validateLength = (value, length) => {
    let validate = value.length >= length 
        return validate
}
