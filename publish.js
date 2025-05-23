var subdomains = [
    'thu',  // 清华大学 (Tsinghua University)
    'pku',  // 北京大学 (Peking University)
    'fdu',  // 复旦大学 (Fudan University)
    'sjtu', // 上海交通大学 (Shanghai Jiao Tong University)
    'zju',  // 浙江大学 (Zhejiang University)
    'nju',  // 南京大学 (Nanjing University)
    'xmu',  // 厦门大学 (Xiamen University)
    'sysu', // 中山大学 (Sun Yat-sen University)
    'whu',  // 武汉大学 (Wuhan University)
    'jlu',  // 吉林大学 (Jilin University)
    'scu',  // 四川大学 (Sichuan University)
    'ruc',  // 中国人民大学 (Renmin University of China)
    'bnu',  // 北京师范大学 (Beijing Normal University)
    'nku',  // 南开大学 (Nankai University)
    'tju',  // 同济大学 (Tongji University)
    'sdu',  // 山东大学 (Shandong University)
    'hust', // 华中科技大学 (Huazhong University of Science and Technology)
    'xjtu',  // 西安交通大学 (Xi'an Jiaotong University)
    'hit',  // 哈尔滨工业大学 Harbin Institute of Technology
];
function getRandomSubdomain() {
    var index = Math.floor(Math.random() * subdomains.length);
    return subdomains[index];
}
function getRandomString() {
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < 3; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
var emails = [
    '91nantong@gmail.com'
];

var urls=[
	'wdzdtxcu.xyz',
	'wdzdtxcu.xyz',
	'wdzdtxcu.xyz',
];
                                                                                                                  
var JumpPage="https://91nt.com";

var newestUrls = [];


for(var i =0;i<urls.length*3;i++){
    newestUrls.push( 'https://' + getRandomSubdomain() +'.' + urls[randomNum(0,urls.length-1)]);
}

var otherUrls = [
	'https://91nantong.github.io',
	'https://91vx1.pages.dev',
	'https://91vx.netlify.app',
];
var foreverUrls = [
    'https://91nt.com',JumpPage
];
var notices = [
    '* 我们推荐PC和Andriod手机用户使用Chrome(谷歌)浏览器访问，iPhone用户我们建议您使用手机自带Safria浏览器访问。',
    //'* 为了防止域名劫持而无法访问，请设置手机和PC的DNS，我们推荐使用8.8.8.8和1.1.1.1。',
    '* 大陆地区用户我们建议您可以使用VPN或者代理的方式来访问我们的永久地址。',
	'* 大陆地区用户我们强烈建议您截图收藏当前页面。'
];

//生成从minNum到maxNum的随机数
function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
} 

function createFieldElem(option) {
    var title = option.title;
    var items = option.items;
    var plainText = option.plainText;
    var classStr = option.classStr;
    var text = option.text;

    var fieldElem = document.createElement('div');
    var fieldClass = ['field', classStr].join(' ');
    fieldElem.setAttribute('class', fieldClass);

    var titleElem = document.createElement('h4');
    titleElem.setAttribute('class', 'title');
    titleElem.innerHTML = title;
    fieldElem.appendChild(titleElem);
  
        var ulElem = document.createElement('ul');
 
    
    var htmlStr = ''
    for (var i = 0; i < items.length; i++) {
        if (plainText) {
            htmlStr = htmlStr + '<li>' + items[i] + '</li>';
        } else {
            htmlStr = htmlStr + '<li><a href="' + items[i] + '" target="_blank">' + items[i] + '</a></li>';
        }
    }

    // For text
    if (text) {
        htmlStr = htmlStr + '<li class="text">' + text + '</li>';
    }

    ulElem.innerHTML = htmlStr;
    fieldElem.appendChild(ulElem);
    return fieldElem;
}

window.onload = function () {
    var mainElem = document.getElementById('main');
    // append logo
    var logoElem = document.createElement('div');
    logoElem.setAttribute('class', 'brand');
    logoElem.setAttribute('id', 'logo');
    logoElem.innerHTML = ' <img src="logo.png"  width="180" style="margin-bottom: 10px;"/>'
    mainElem.appendChild(logoElem);

    //收藏  ‘<br /> \n <br /> <br /> 按 <font color=red><b>Ctrl+D</b></font> 收藏此页，永不迷路
    var newFavoritesElem =  createFieldElem({title: '<font color=red><b>Ctrl+D</b></font> 收藏此页，永不迷路', items: ""});
    mainElem.appendChild(newFavoritesElem);
    // newest urls
    var newestFieldElem = createFieldElem({title: '最新地址', items: newestUrls, text: '请使用https://协议访问男同网'});
    mainElem.appendChild(newestFieldElem);

    // other urls
    var otherFieldElem = createFieldElem({title: '由于风控原因，网址经常被墙<br />务必保存下面所有地址发布页', items: otherUrls});
    mainElem.appendChild(otherFieldElem);

    // email
    var mailFieldElem = createFieldElem({title: '发送邮件获得最新地址', items: emails, plainText: true});
    mainElem.appendChild(mailFieldElem);

    // forever urls
    var foreverFieldElem = createFieldElem({title: '永久地址', items: foreverUrls});
    mainElem.appendChild(foreverFieldElem);

    // Description
    var noticeFieldElem = createFieldElem({title: '注意事项', items: notices, plainText: true, classStr: 'desc'});
    mainElem.appendChild(noticeFieldElem);
}
