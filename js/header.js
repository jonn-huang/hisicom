//导航切换，根据域名判断当前显示
$(function(){
	function navTab(indexPath){
		if(window.location.href.indexOf(indexPath)>0){
			return true;
		}else{
			return false;
		}		
	} 
	var currNav;
	var url = window.location.href.toString();
　　 var arrUrl = url.split("?");
    var para = arrUrl[1];
	if(para=="introduction"){
			currNav=1;$(".currHover").eq(currNav).addClass("hover");
		}else if(para=="exampleInfo"){
			currNav=2;$(".currHover").eq(currNav).addClass("hover");
		}else if(para=="honor"){
			currNav=3;$(".currHover").eq(currNav).addClass("hover");
		}else if(para=="news"){
			currNav=4;$(".currHover").eq(currNav).addClass("hover");
		}else if(para=="about"){
			currNav=5;$(".currHover").eq(currNav).addClass("hover");
		}else{
			currNav=0;$(".currHover").eq(currNav).addClass("hover");
	}
	function navHover(curr){
		var $navHover=$(".currHover").eq(curr);
		$navHover.parent().css("border-color","transparent").siblings().children().removeClass("hover");
		$(".publicNavHover").stop(true,false).animate({"left":$navHover.parent().position().left,"width":$navHover.parent().width()+41},100,function(){$navHover.addClass("hover").parent().css("border-color","#e7e7e7")});
		$(".publicNavHoverM").css({"width":$navHover.parent().width()+33});
	}
	navHover(currNav);
	$(".publicNav_nav").children("p").hover(function(){
		var curr=$(this).index();
		navHover(curr);
		},function(){
		//	$(this).children().removeClass("hover").css("color","#404040");
	}).each(function(){
		if($(this).attr("class")=="new")
		{	var left=$(this).position().left;
			$(".publicNav_nav").append("<img src='images/bg_new.png' style='z-index:9999;position:absolute;top:0;left:"+left+"px' />")}
		else if($(this).attr("class")=="hot")
		{	var left=$(this).position().left;
			var width=$(this).children("a").width();
			$(".publicNav_nav").append("<img src='images/bg_hot.png' style='z-index:9999;position:absolute;top:-9px;left:"+(left+width+40)+"px' />")}
	});
	$(".publicNav_nav").hover(function(){},function(){navHover(currNav)});
});
//导航切换结束

//添加副导航
function addSubNav(obj){
	var html="<div class='publicNavSub'>";
	var len=obj.length
	for(i=0;i<len;i++){
		if(i!=len-1)
		html+="<a href='"+obj[i].alink+"'>"+obj[i].atitle+"</a>";
		else
		html+="<a href='"+obj[i].alink+"' class='noborder'>"+obj[i].atitle+"</a>";
	}
	html+="</div>";
	$("#publicNav").after(html);
}

// JavaScript Document
//  加入收藏 <a onclick="AddFavorite(window.location,document.title)">加入收藏</a>

function AddFavorite(sURL, sTitle)
{
    try
    {
        window.external.addFavorite(sURL, sTitle);
    }
    catch (e)
    {
        try
        {
            window.sidebar.addPanel(sTitle, sURL, "");
        }
        catch (e)
        {
            alert("加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}
//设为首页 <a onclick="SetHome(this,window.location)">设为首页</a>
function SetHome(obj,vrl){
        try{
                obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl);
        }
        catch(e){
                if(window.netscape) {
                        try {
                                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
                        }
                        catch (e) {
                                alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
                        }
                        var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
                        prefs.setCharPref('browser.startup.homepage',vrl);
                 }
        }
}