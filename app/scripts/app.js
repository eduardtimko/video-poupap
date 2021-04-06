let tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		videoId: 'M7lc1UVf-VE',
	});
}

let stopVideo = function () {
	player.stopVideo();
};


let poupap = new CustomPoupap({
	node: '#player',
	eventSelector: '.main-block__video-play',
	siteWrap: '.main-block',
	onHideCallBack: stopVideo
});
poupap.init();
