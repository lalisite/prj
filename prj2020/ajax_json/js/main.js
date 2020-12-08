var jInfoContainer=document.getElementById("jInfo");
var btn=document.getElementById("btn");

btn.addEventListener("click",function(){
var ourRequest=new XMLHttpRequest();
ourRequest.open('GET','https://lalisite.github.io/tests/jsonfile.json');
ourRequest.onload = function(){
    var ourData=JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
};
ourRequest.send();
});


function renderHTML(data) {
    var htmlString="testing 123";
    jInfoContainer.insertAdjacentHTML('beforeend',htmlString);
}
 