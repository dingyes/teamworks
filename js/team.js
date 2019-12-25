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
var teamMember = document.getElementsByClassName("team-member")[0];
var memberHover1 = document.getElementsByClassName("member-hover")[0];
var memberHover2 = document.getElementsByClassName("member-hover")[1];
var memberHover3 = document.getElementsByClassName("member-hover")[2];
var memberHover4 = document.getElementsByClassName("member-hover")[3];
var memberShares = document.getElementsByClassName("member-shares")[0];
var memberShares1 = document.getElementsByClassName("member-shares1")[0];
var memberShares2 = document.getElementsByClassName("member-shares2")[0];
var memberShares3 = document.getElementsByClassName("member-shares3")[0];
var memberShares4 = document.getElementsByClassName("member-shares4")[0];
var shares1 = document.getElementsByClassName("shares1")[0];
var shares2 = document.getElementsByClassName("shares2")[0];
var shares3 = document.getElementsByClassName("shares3")[0];
var shares4 = document.getElementsByClassName("shares4")[0];
var rate1 = document.getElementsByClassName("rate1")[0];
var rate2 = document.getElementsByClassName("rate2")[0];
var rate3 = document.getElementsByClassName("rate3")[0];
var rate4 = document.getElementsByClassName("rate4")[0];
// var times = document.getElementsByClassName("times")[0];
// var intervalId;

//实现进度条动态效果
memberShares1.onmouseover = function(){
	var length=0;
	var rateNum=0;
	var intervalId = setInterval(function(){
		if(length>=104 && rateNum>=40) 
			clearInterval(intervalId);
		else if(length===104 || rateNum===40){
			if(length===104)
				shares1.style.width = "104px";
			if(rateNum===40)
				rate1.innerText = "40%";
		}
		else{
			length+=2.5;
			rateNum++;
			shares1.style.width = length + "px";
			rate1.innerText = rateNum + "%";
		}
	},10)
}
memberShares2.onmouseover = function(){
	var length=0;
	var rateNum=0;
	var intervalId = setInterval(function(){
		if(length>=39 && rateNum>=15) 
			clearInterval(intervalId);
		else if(length===39 || rateNum===15){
			if(length===39)
				shares2.style.width = "39px";
			if(rateNum===15)
				rate2.innerText = "15%";
		}
		else{
			length+=2.5;
			rateNum++;
			shares2.style.width = length + "px";
			rate2.innerText = rateNum + "%";
		}
	},10)
}
memberShares3.onmouseover = function(){
	var length=0;
	var rateNum=0;
	var intervalId = setInterval(function(){
		if(length>=39 && rateNum>=15) 
			clearInterval(intervalId);
		else if(length===39 || rateNum===15){
			if(length===39)
				shares3.style.width = "39px";
			if(rateNum===15)
				rate3.innerText = "15%";
		}
		else{
			length+=2.5;
			rateNum++;
			shares3.style.width = length + "px";
			rate3.innerText = rateNum + "%";
		}
	},10)
}
memberShares4.onmouseover = function(){
	var length=0;
	var rateNum=0;
	var intervalId = setInterval(function(){
		if(length>=78 && rateNum>=30) 
			clearInterval(intervalId);
		else if(length===78 || rateNum===30){
			if(length===78)
				shares4.style.width = "78px";
			if(rateNum===30)
				rate4.innerText = "30%";
		}
		else{
			length+=2.5;
			rateNum++;
			shares4.style.width = length + "px";
			rate4.innerText = rateNum + "%";
		}
	},10)
}