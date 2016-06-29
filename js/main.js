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
                if(rate >= 19){
                    rateInfo = 'rate-yellow';
                }else if(rate >= 18){
                    rateInfo = 'rate-orange';
                }else if(rate >= 17){
                    rateInfo = 'rate-purple';
                }else if(rate >= 16){
                    rateInfo = 'rate-blue';
                }else if(rate >= 14){
                    rateInfo = 'rate-green';
                }else{
                    rateInfo = 'rate-grey';
                }
            }
            summary.parentNode.parentNode.className += (" "+rateInfo);
        }
    }
}
$(function() {
    getRate();
    var prevHash = window.location.href;
    window.setInterval(function() {
        if ((window.location.href != prevHash) || (document.getElementsByClassName('ratehelper').length == 0)) {
            prevHash = window.location.href;
            getRate();
        }
    }, 1200);
});
