
var listDom = document.getElementsByClassName('search_result_row');
$(function(){
    for(var i = 0;i<listDom.length;i++){
        var temp = listDom[i];
        var summary = temp.getElementsByClassName('search_review_summary')[0];
        if(summary !== undefined){
            var summaryText = summary.getAttribute("data-store-tooltip").match(/\d+,?\d+/g);
            var infoDom = summary.parentNode.parentNode.getElementsByClassName('search_released')[0];
            var p = document.createElement("p");
            p.textContent = summaryText[0]+'/'+summaryText[1]+'%'
            infoDom.appendChild(p);
        }
    }
});
