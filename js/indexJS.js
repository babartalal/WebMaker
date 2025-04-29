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


//border-radius
temp_btn = document.getElementById('border_radius_btn');
temp_btn.addEventListener('click', function handleBorderRadius(){
    var radius = document.getElementById('border_radius');
    selectedElement.style.borderRadius = radius.value + "rem";
});

//justify-content
temp_btn = document.getElementById('align_center');
temp_btn.addEventListener('click', function handleAlignCenter(){
    selectedElement.parentElement.style["justifyContent"] = "center";
});
temp_btn = document.getElementById('align_right');
temp_btn.addEventListener('click', function handleAlignRight(){
    selectedElement.parentElement.style["justifyContent"] = "right";
});
temp_btn = document.getElementById('align_left');
temp_btn.addEventListener('click', function handleAlignLeft(){
    selectedElement.parentElement.style["justifyContent"] = "left";
});

//box-shadow
temp_btn = document.getElementById('box_shadow_btn');
temp_btn.addEventListener('click', function handleBoxShadow(){
    var hOffset = document.getElementById('box_shadow_h');
    var vOffset = document.getElementById('box_shadow_v');
    var blur = document.getElementById('box_shadow_blur');
    var spread = document.getElementById('box_shadow_spread');
    var shadowColor = document.getElementById('box_shadow_color');
    var inset = document.getElementById('box_shadow_inset');
    var outset = document.getElementById('box_shadow_outset');
    var result = hOffset.value+"px " + vOffset.value+"px " + blur.value+"px " +spread.value+"px " + shadowColor.value;
    if(inset.checked){
        result += " inset";
    }
    selectedElement.style["boxShadow"] = result;
});
//.......................................................................




function AddTitle(){
    var tempDiv = document.createElement('div');
    var btn = document.createElement('button')
    var h1 = document.createElement('h1');
    tempDiv.appendChild(btn);
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
    body.appendChild(tempDiv);
    tempDiv.style["display"] = "flex";
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