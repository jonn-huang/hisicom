function show(label){
	//介绍中体信息系统
	if(label=="1"){
		document.getElementById("introductProject").innerHTML="该系统是一个" +
		"体育场馆相关业务及资源管理的平台，包括部分数据报表的报送。分为场馆和总部两套业" +
		"务工程并相关联，部署在不同的场馆，主要是方便各个体育场馆经营与管理；该平台提供前" +
		"台和后台：在前台中可以针对场馆的不同时段进行售票和预约，以及商品零售，合作商户销售，" +
		"开卡管理，培训课程申请，场馆监控等操作，后台分为系统管理，运动俱乐部管理，商品零售管理，报表统计等模块。";
		document.getElementById("projectImg1").innerHTML="<img src='images/projectPic/zt_login.jpg' class='img'/>";
		document.getElementById("projectImg2").innerHTML="<img src='images/projectPic/zt_front.jpg' class='img'/>";
		document.getElementById("projectImg3").innerHTML="<img src='images/projectPic/zt_back.jpg' class='img'/>";
	}
	//介绍西藏林业信息网
	if(label=="2"){
		document.getElementById("introductProject").innerHTML="森林防火门户网站" +
		"依托于西藏森林防火信息指挥系统的网络平台和指挥中心，将西藏林业厅对外发布的信息、" +
		"重要行业新闻、森林防火相关信息、火险预警、林火监测、森林资源和自然保护等相关资料发布在门户网站上";
		document.getElementById("projectImg1").innerHTML="<img src='images/projectPic/xzs_1.jpg' class='img'/>";
		document.getElementById("projectImg2").innerHTML="<img src='images/projectPic/xzs_2.jpg' class='img'/>";
		document.getElementById("projectImg3").innerHTML="<img src='images/projectPic/xzs_3.jpg' class='img'/>";
	}
	//介绍北京市工商局网上登记注册服务系统
	if(label=="3"){
		document.getElementById("introductProject").innerHTML="北京市网上登记注册服务系统是" +
		"面向社会公众的工商登记注册电子政务系统，满足社会公众对电子政务的需求和实现登记注册的“全程代办”、" +
		"无纸化办公。 本系统以互联网为渠道，覆盖市局、分局、工商所三级服务平台，功能涵盖：名称登记、内资登记、" +
		"外资登记、个体登记、代表机构登记、入资核查、互联审批查询、数据统计分析等。在功能上分为前台和后台，前台负" +
		"责录入不同企业类型的登记数据，后台主要管理和审批数据以及数据转化为pdf模板显示。";
		document.getElementById("projectImg1").innerHTML="<img src='images/projectPic/bjgs_login.jpg' class='img'/>";
		document.getElementById("projectImg2").innerHTML="<img src='images/projectPic/bjgs_back.jpg' class='img'/>";
		document.getElementById("projectImg3").innerHTML="<img src='images/projectPic/bjgs_front.jpg' class='img'/>";
	}
}

function about(label){
	//使命和价值观
	if(label=="1"){
		同方鼎欣
		document.getElementById("aboutTitle").innerHTML="使命和价值观";
		document.getElementById("aboutText").innerHTML="以诚信为本，承认我们的社会责任，以质量为本，提供客户最满意的服务。";
		document.getElementById("aboutLogo").innerHTML="<img src='images/about/a_1.png' class='img400'/>";
	}
	// 企业社会责任
	if(label=="2"){
		document.getElementById("aboutTitle").innerHTML="企业社会责任";
		document.getElementById("aboutText").innerHTML="朔天时代作为社会中的一员，在探索产业发展之路之时，坚持以" +
		"信息技术为手段提供低碳、无污染的绿色产业。在经营过程中，坚持合法经营的发展理念，规范自身管理，强化技术创新与服务意识，" +
		"自觉履行各项纳税义务。在实现企业价值的同时，把社会责任放在首位，保持企业的可持续发展，实现国家、社会、企业与人的和谐发展。" +
		"朔天时代长期以来致力于成为具有社会责任感的企业，努力回报社会。本着“诚信、务实、职业”的企业文化，将对社会、客户、员工和环境" +
		"的关注融入到日常运营中，以创造更美好的生存环境作为目标。朔天时代多年来在社会责任方面致力于: 以人为本、保护环境、回报社会、创造就业。";
		document.getElementById("aboutLogo").innerHTML="<img src='images/about/a_2.png' class='img400'/>";
	}
	//质量保证
	if(label=="3"){
		document.getElementById("aboutTitle").innerHTML="质量保证";
		document.getElementById("aboutText").innerHTML="朔天时代高度重视质量管理，建立了完善的质量保证体系，执行“高效管理满意服务 创新产品 共同发展”的质量方针。在长期从事软件服务的过程中" +
		"，基于CMMI 模型及ISO9001标准，结合公司长期成功的离岸软件项目开发经验，按照以下原则，总结出了我们的软件开发的组织过程：<br/>"+
        "1. 满足公司软件开发业务的目标和需要;<br/>"+
        "2. 满足客户提出的项目应遵循的软件过程标准和软件产品标准;<br/>"+
        "3. 符合业界通用的软件过程标准和软件产品标准;<br/>"+
        "4. 吸收各业务类型项目的最佳实践，包括行之有效的软件工程方法和工具;<br/>"+
        "5. 对各业务类型项目的软件过程进行适当集成。<br/>"+
        "为了更好地实施公司的软件开发组织过程，朔天时代自行开发出了项目管理工具，对项目中的各类任务(例如：开发任务，工作" +
        "量，客户联络，缺陷，问题等)进行跟踪管理。我们有独立的SQA人员对项目的过程进行检查，技术专家对中间产品质量进行评审，有各种数据支持对产品质量的分析，保证了我们开发出的产品满足客户的需求。";
		document.getElementById("aboutLogo").innerHTML="<img src='images/about/a_4.png' class='img400'/>";
	}
	//信息安全
	if(label=="4"){
		document.getElementById("aboutTitle").innerHTML="信息安全";
		document.getElementById("aboutText").innerHTML="朔天时代信息安全管理总体方针为：规范、安全、高效、创新。<br/>"+
        "规范 — 确保有效运行的管理体系符合相关法律法规和监管要求，符合国际国内专业管理标准。<br/>"+
        "安全 — 完善系统架构，识别和控制风险，为用户提供安全稳定和连续可用的信息服务。<br/>"+
        "高效 — 以用户为导向，主动沟通，全面规划，持续改进，不断提高客户满意度。<br/>"+
        "创新 — 注重岗位培训和知识管理，强化安全意识，提升朔天时代鼎欣品牌价值。<br/>"+
        "朔天时代从人事安全规定、网络安全规定、IT资源安全规定、物理安全规定等规章制度，并且从信息安全方针、信息安全组织、" +
        "资产管理、人力资源安全、物理和环境安全、通信与操作管理、访问控制、系统的获取、开发和维护、信息安全事件管理、业务持续性管理" +
        "、符合性等方面对公司进行全方位的信息安全保护。";
		document.getElementById("aboutLogo").innerHTML="<img src='images/about/a_5.png' class='img400'/>";
	}
	//企业发展
	if(label=="5"){
		document.getElementById("aboutTitle").innerHTML="企业发展";
		document.getElementById("aboutText").innerHTML="以发展为核心，构建有竞争力的企业文化，先进的企业文化不仅可以指引企业树立正" +
		"确的价值观，更应该以优秀的文化来提升企业的核心竞争力，协调企业和谐发展，而企业的竞争来源于不断的学习和不断的知识更新。所以，要鼓" +
		"励员工争做知识型员工，根据公司所需，采取各种方式，对员工进行培训，使员工专业水平和技能有较大的提高，共创具有竞争力的企业文化，推动" +
		"企业的进一步发展";
		document.getElementById("aboutLogo").innerHTML="<img src='images/about/a_6.png' class='img400'/>";
	}
}