function getRate() {
    var listDom = document.getElementsByClassName('search_result_row');
    for (var i = 0; i < listDom.length; i++) {
        var temp = listDom[i];
        var summary = temp.getElementsByClassName('search_review_summary')[0];
        if (summary !== undefined) {
            var summaryText = summary.getAttribute("data-store-tooltip").match(/\d+,?\d*,?\d*/g);
            var infoDom = summary.parentNode.parentNode.getElementsByClassName('search_released')[0];
            var p = document.createElement("p");
            p.className = 'ratehelper';
            p.textContent = summaryText[1] + '%' + ' | ' + summaryText[0];
            infoDom.appendChild(p);
            var rate = Math.floor(summaryText[1]/5);
            var rateInfo = '';
            if(summaryText[0].replace(/,+/g,"") > 500){
                if(rate >= 18){
                    rateInfo = 'green-3';
                }else if(rate >= 16){
                    rateInfo = 'green-2';
                }else if(rate >= 14){
                    rateInfo = 'green-1';
                }else if(rate >= 12){
                    rateInfo = 'yellow';
                }else{
                    rateInfo = 'red';
                }
            }
            summary.parentNode.parentNode.className += (" "+rateInfo);
            temp.className += (" "+rateInfo);
        }
    }
}
function getHotRate(){
    var list = document.getElementsByClassName("home_tabs_content")[0].querySelectorAll(".tab_item:not(.hidden)");
    var preview = document.getElementsByClassName("tab_review_summary");
    for(var i = 0;i< list.length-1;i++){
        var summary = preview[i].getAttribute('data-tooltip-content');
        if (summary !== "无用户评测") {
            var summaryText = preview[i].getAttribute("data-tooltip-content").match(/\d+,?\d*,?\d*/g);
            var rate = Math.floor(summaryText[1]/5);
            var rateInfo = '';
            if(summaryText[0].replace(/,+/g,"") > 500){
                if(rate >= 18){
                    rateInfo = 'green-3';
                }else if(rate >= 16){
                    rateInfo = 'green-2';
                }else if(rate >= 14){
                    rateInfo = 'green-1';
                }else if(rate >= 12){
                    rateInfo = 'yellow';
                }else{
                    rateInfo = 'red';
                }
            }
            list[i].className += (" "+rateInfo);
        }   
    }
}

$(function() {
    //getRate();
    //getHotRate();
    var prevHash = window.location.href;
    window.setTimeout(function() {
        if ((window.location.href != prevHash) || (document.getElementsByClassName('ratehelper').length == 0)) {
            prevHash = window.location.href;
            getRate();
            getHotRate();
        }
    }, 1200);
    window.setInterval(function() {
        if ((window.location.href != prevHash) || (document.getElementsByClassName('ratehelper').length == 0)) {
            prevHash = window.location.href;
            getRate();
        }
    }, 1200);
});
