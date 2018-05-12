const URLS = {
	"getToken": "/api/user/getToken.json",
	"getUserInfo": "/api/user/getUserInfo.json",
	"RegUser": "/api/user/RegUser.json",
	"getActivityType": "/api/activity/getActivityType.json",
	"getActivityList": "/api/activity/getActivityList.json",
	"getActivityInfo": "/api/activity/getActivityInfo.json",
	"getCodeImg": "/api/code/code_img.json",
	//http://admin.dev.com//api/code/code_img.json?debug=dd

	"getURL": function(key){
		const host = 'http://www.xbcweb.com/';
		if(this[key]){
			return host + this[key] + "?debug=dd";
		}else{
			console.log("URLS没有当前地址");
		}
	}

}
export default URLS