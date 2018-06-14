import wx from 'weixin-js-sdk'
import $ from 'jquery'
import URLS from '../router/link'
import { Toast } from 'mint-ui'

const WXShare = {

	init:function(share){
		if(wx){
			const js_weixin = URLS.getURL('js_weixin');
      		$.get(js_weixin,function(res){
				if(res.flag){
					const { appId, timestamp, nonceStr, signature } = res.data
					wx.config({
						debug: false,
						appId: appId,
						timestamp: timestamp,
						nonceStr: nonceStr,
						signature: signature,
						jsApiList: [
							'onMenuShareTimeline',
							'onMenuShareAppMessage',
							'onMenuShareQQ',
							'onMenuShareWeibo'
							]
					});

					const option = {
						title: '学秉初', // 分享标题
						desc: '', // 分享描述
						link: '', // 分享链接
						imgUrl: '', // 分享图标
						type: 'link', // 分享类型,music、video或link，不填默认为link
						dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
						success: function() {
							// 用户确认分享后执行的回调函数
							Toast({
					            message: "分享成功",
					            position: 'bottom',
					            duration: 3000
				          	});
						},
						cancel: function() {
							// 用户取消分享后执行的回调函数
							Toast({
					            message: "分享失败",
					            position: 'bottom',
					            duration: 3000
				          	});
						}
					}
					const opt = Object.assign({},option,share)
					wx.ready(function() {
						// 2. 分享接口
						// 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
						wx.onMenuShareAppMessage(opt);
						// 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
						wx.onMenuShareTimeline(opt);
						// 2.3 监听“分享到QQ”按钮点击、自定义分享内容及分享结果接口
						wx.onMenuShareQQ(opt);
						// 2.4 监听“分享到微博”按钮点击、自定义分享内容及分享结果接口
						wx.onMenuShareWeibo(opt);
					});

				}else{
					console.log(res.data)
				}
      		})


		} else {
			console.log('引入微信分享失败')
		}
		
	}
}
export default WXShare