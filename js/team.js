function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 100)
}

var memberShares = document.getElementsByClassName("member-shares")[0];
var memberShares11 = document.getElementsByClassName("member-shares1")[0];
var memberShares21 = document.getElementsByClassName("member-shares2")[0];
var memberShares31 = document.getElementsByClassName("member-shares3")[0];
var memberShares12 = document.getElementsByClassName("member-shares1")[1];
var memberShares22 = document.getElementsByClassName("member-shares2")[1];
var memberShares32 = document.getElementsByClassName("member-shares3")[1];
var shares11 = document.getElementsByClassName("shares1")[0];
var shares21 = document.getElementsByClassName("shares2")[0];
var shares31 = document.getElementsByClassName("shares3")[0];
var shares12 = document.getElementsByClassName("shares1")[1];
var shares22 = document.getElementsByClassName("shares2")[1];
var shares32 = document.getElementsByClassName("shares3")[1];
var rate11 = document.getElementsByClassName("rate1")[0];
var rate21 = document.getElementsByClassName("rate2")[0];
var rate31 = document.getElementsByClassName("rate3")[0];
var rate12 = document.getElementsByClassName("rate1")[1];
var rate22 = document.getElementsByClassName("rate2")[1];
var rate32 = document.getElementsByClassName("rate3")[1];

//实现进度条动态效果
memberShares11.onmouseover = function(){
	var length=0;
	var rateNum=0;
	var intervalId = setInterval(function(){
		if(length>=52 && rateNum>=20) 
			clearInterval(intervalId);
		else if(length===52 || rateNum===20){
			if(length===52)
				shares11.style.width = "52px";
			if(rateNum===20)
				rate11.innerText = "20%";
		}
		else{
			length+=2.5;
			rateNum++;
			shares11.style.width = length + "px";
			rate11.innerText = rateNum + "%";
		}
	},20)
}
memberShares12.onmouseover = function(){
	var length=0;
	var rateNum=0;
	var intervalId = setInterval(function(){
		if(length>=52 && rateNum>=20) 
			clearInterval(intervalId);
		else if(length===52 || rateNum===20){
			if(length===52)
				shares12.style.width = "52px";
			if(rateNum===20)
				rate12.innerText = "20%";
		}
		else{
			length+=2.5;
			rateNum++;
			shares12.style.width = length + "px";
			rate12.innerText = rateNum + "%";
		}
	},20)
}
memberShares21.onmouseover = function(){
	var length=0;
	var rateNum=0;
	var intervalId = setInterval(function(){
		if(length>=39 && rateNum>=15) 
			clearInterval(intervalId);
		else if(length===39 || rateNum===15){
			if(length===39)
				shares21.style.width = "39px";
			if(rateNum===15)
				rate21.innerText = "15%";
		}
		else{
			length+=2.5;
			rateNum++;
			shares21.style.width = length + "px";
			rate21.innerText = rateNum + "%";
		}
	},10)
}
memberShares22.onmouseover = function(){
	var length=0;
	var rateNum=0;
	var intervalId = setInterval(function(){
		if(length>=39 && rateNum>=15) 
			clearInterval(intervalId);
		else if(length===39 || rateNum===15){
			if(length===39)
				shares22.style.width = "39px";
			if(rateNum===15)
				rate22.innerText = "15%";
		}
		else{
			length+=2.5;
			rateNum++;
			shares22.style.width = length + "px";
			rate22.innerText = rateNum + "%";
		}
	},10)
}
memberShares31.onmouseover = function(){
	var length=0;
	var rateNum=0;
	var intervalId = setInterval(function(){
		if(length>=39 && rateNum>=15) 
			clearInterval(intervalId);
		else if(length===39 || rateNum===15){
			if(length===39)
				shares31.style.width = "39px";
			if(rateNum===15)
				rate31.innerText = "15%";
		}
		else{
			length+=2.5;
			rateNum++;
			shares31.style.width = length + "px";
			rate31.innerText = rateNum + "%";
		}
	},10)
}
memberShares32.onmouseover = function(){
	var length=0;
	var rateNum=0;
	var intervalId = setInterval(function(){
		if(length>=39 && rateNum>=15) 
			clearInterval(intervalId);
		else if(length===39 || rateNum===15){
			if(length===39)
				shares32.style.width = "39px";
			if(rateNum===15)
				rate32.innerText = "15%";
		}
		else{
			length+=2.5;
			rateNum++;
			shares32.style.width = length + "px";
			rate32.innerText = rateNum + "%";
		}
	},10)
}