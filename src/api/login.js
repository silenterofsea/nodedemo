import service from "../utils/requests";

//请求验证码接口
export function GetSms(data){
    return service.request({
        method: "post",
        url: "/getSms/",
        data: data
    });
};