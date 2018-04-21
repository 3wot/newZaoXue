const URLS = {
	"getToken": "http://www.xbcweb.com//api/user/getToken.json",
	"getUserInfo": "http://www.xbcweb.com//api/user/getUserInfo.json",
	"RegUser": "http://www.xbcweb.com//api/user/RegUser.json",













	"getURL": function(key){
		if(this[key]){
			return this[key] + "?debug=dd";
		}else{
			console.log("URLS没有当前地址");
		} 
	}

}
export default URLS