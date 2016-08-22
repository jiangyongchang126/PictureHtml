function showPic(whichpic){
  // whichpic.getAttribute("href");
  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src",source);

  // 获取title和描述标签
  var text = whichpic.getAttribute("title");
  var description = document.getElementById("description");
  // alert(description.childNodes[0].nodeValue);  // nodeValue获取文本值
  description.firstChild.nodeValue = text;
  // firstChild和lastChild属性，
  // childNodes[0] == firstChild

}

function countBodyChildren(){
  var body_element = document.getElementsByTagName("body")[0];
  alert(body_element.childNodes.length);
  alert(body_element.nodeType);
}

function prepareGallery(){
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
  if (!document.getElementById("imagegallery")) return false;


}

// window.onload = countBodyChildren;
