const URLS = {
	"getToken": "/api/user/getToken.json",
	"getUserInfo": "/api/user/getUserInfo.json",
	"RegUser": "/api/user/RegUser.json",

	"getActivityType": "/api/activity/getActivityType.json",
	"getActivityList": "/api/activity/getActivityList.json",
	"getActivityInfo": "/api/activity/getActivityInfo.json",
	"getTopActivityList": "api/activity/getTopActivityList.json",
	"getSearchActivityList": "api/activity/getSearchActivityList.json",


	"getCodeImg": "/api/code/code_img.json",
	"sendCodeMsg": "/api/code/code_msg.json",

	"getCricleList": "api/cricle/getCricleList.json",

	"getCategoryList": "api/course/getCategoryList.json",
	"getLearnList": "api/course/getLearnList.json",
	"getLessionList": "api/course/getLessionList.json",


	

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