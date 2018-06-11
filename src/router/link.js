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

	"check_exist": "api/favorite/check_exist.json",
	"getFavoriteList": "api/favorite/getFavoriteList.json",
	"add": "/api/favorite/add.json",
	"del": "api/favorite/del.json",

	"js_weixin": "api/weixin/js_weixin.json",

	"getURL": function(key){
		const host = 'http://www.xbcweb.com/';
		if(this[key]){
			return host + this[key] + "";
		}else{
			console.log("URLS没有当前地址");
		}
	}

}
export default URLS