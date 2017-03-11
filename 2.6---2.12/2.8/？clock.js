    var year = now.getFullYear();
    // 获取的月份,取值范围 0 ~ 11
    var month = now.getMonth() + 1;
    // alert(month);
    var day = now.getDate();
    // 获取星期
    var week = now.getDay();
    // alert(week);
    switch (week) {
        case 0:
            week = '周日'
            break;
        case 1:
            week = '周一'
            break;
        case 2:
            week = '周二'
            break;
        case 3:
            week = '周三'
            break;
        case 4:
            week = '周四'
            break;
        case 5:
            week = '周五'
            break;
        case 6:
            week = '周六'
            break;
        default:
            break;
    }
    // 获取id=date 的div,并修改它的文本内容.
    var dateDiv = document.getElementById('date');
    dateDiv.innerText = year + '年' + month + '月' + day + '日 ' + week;


// 调用方法
upDate();
// 设置定时器,每间隔一秒钟执行一次upDate方法.
setInterval(upDate,1000)