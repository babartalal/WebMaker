//window.open("../html/tool.html", "popup", "width=300, height=300");
var toolButton = document.getElementById('tool_btn');
toolButton.addEventListener('click', handleToolButton);

var menuButton = document.getElementById('sideMenu_btn');
menuButton.addEventListener('click', openSideMenu);
let menuOpen = false;

var selectedElement = "";


function handleToolButton(){
    window.open("../html/tool.html", "popup", "width=300, height=300");
}

function openSideMenu(){
    var temp = document.getElementById('daMenu');
    if (!menuOpen){
        temp.style.width = "0rem";
    }
    else{
        temp.style.width = "10rem";
    }
    menuOpen = !menuOpen;
}

//Tool Functionalities .....................................................................
var body = document.querySelector('body');
var addTitleButton = document.getElementById('add_title_btn');
var editor = document.getElementById('editor');
let titleList = new Array;
titleIDCounter = 0;
editorOpen = false;
addTitleButton.addEventListener('click', AddTitle);
editor.style.display = "none";


//editor........................................
var temp_btn = document.getElementById('txt_color_btn');
temp_btn.addEventListener('click', function handleColorChange(){
    var txtColor = document.getElementById('txt_color');
    selectedElement.style.color = txtColor.value;
});

temp_btn = document.getElementById('background_color_btn');
temp_btn.addEventListener('click', function handleBackgroundColor(){
    var colorVal = document.getElementById('background_color');
    selectedElement.style.backgroundColor = colorVal.value;
});

temp_btn = document.getElementById('margin_btn');
temp_btn.addEventListener('click', function handleMarginChange(){
    var marginTop = document.getElementById('margin_top');
    var marginRight = document.getElementById('margin_right');
    var marginBottom = document.getElementById('margin_bottom');
    var marginLeft = document.getElementById('margin_left');
    selectedElement.style.margin = marginTop.value + "rem " + marginRight.value + "rem " + marginBottom.value + "rem " + marginLeft.value  + "rem";
});

temp_btn = document.getElementById('padding_btn');
temp_btn.addEventListener('click', function handlePaddingChange(){
    var paddingTop = document.getElementById('padding_top');
    var paddingRight = document.getElementById('padding_right');
    var paddingBottom = document.getElementById('padding_bottom');
    var paddingLeft = document.getElementById('padding_left');
    selectedElement.style.padding = paddingTop.value + "rem " + paddingRight.value + "rem " + paddingBottom.value + "rem " + paddingLeft.value  + "rem";
});
//.......................................................................




function AddTitle(){
    var btn = document.createElement('button')
    var h1 = document.createElement('h1');
    btn.appendChild(h1);
    btn.id = "title" + titleIDCounter;
    titleIDCounter += 1;
    btn.style.background = "none";
    btn.style.border = "none";
    btn.style.display = "block";
    titleList.push(btn);
    titleList[titleIDCounter-1].addEventListener('click', openEditor);
    var text = document.getElementById('title_txt');
    h1.innerText = text.value;
    body.appendChild(btn);
}

function openEditor(){
    if(!editorOpen)
    {
        editor.style.display = "";
        selectedElement = document.getElementById(this.id);
    }
    else{
        editor.style.display = "none";
    }
    editorOpen = !editorOpen;
}