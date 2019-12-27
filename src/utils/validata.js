export function stripscript(s) {
    var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&mdash;—|{}【】‘；：”“'。，、？]")
        var rs = "";
    for (var i = 0; i < s.length; i++) {
        rs = rs + s.substr(i, 1).replace(pattern, '');
    }
    return rs;
};

export function validataUsername(Usrname){
    var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    return reg.test(Usrname) ? false : true;
    // if(reg.test(Usrname)){
    //     return true;
    // } else{
    //     return false;
    // }
};

export function validataCode(code){
    let reg = /^[a-z0-9]{6}$/;
    return reg.test(code) ? false : true;
    // if(reg.test(code)){
    //     return true;
    // }else{
    //     return false;
    // }
};

export function validataPassword(password){
    var reg=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[#?!@$%^&*-]).{6,}$/;
    return reg.test(password) ? false : true;
    // if(reg.test(password)){
    //     return true;
    // }else{
    //     return false;
    // }
};