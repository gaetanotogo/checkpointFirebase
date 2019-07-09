var changeTextArea=document.getElementById("textarea");
var changeTaille=document.getElementById("taille");
var changePolice=document.getElementById("police");

function bold(){

        if(changeTextArea.style.fontWeight=="bold"){
            changeTextArea.style.fontWeight="normal";
        }
        else{
            changeTextArea.style.fontWeight="bold";
        }
}

function Italic(){
        if(changeTextArea.style.fontStyle=="italic"){
            changeTextArea.style.fontStyle="normal";
        }
        else{
            changeTextArea.style.fontStyle="italic";
        }
}

function Underline(){
        if(changeTextArea.style.textDecoration=="underline"){
            changeTextArea.style.textDecoration="";
        }
        else{
            changeTextArea.style.textDecoration="underline";
        }
}
    
function changerTaille(){
        changeTextArea.style.fontSize=changeTaille.value;
}
    
function ChangerPolice(){
        changeTextArea.style.fontFamily=changePolice.value;
}
    
/*

  background-color: royalblue;
    height: 35px;
    color: white;
    border-radius: 5px;

*/

$("#cours1").mouseover(function(){
    $("#mybut1").show();
    $("#cours1").css("opacity","0.7");
    $("#mybut1").css("background-color","white");
    $("#mybut1").css("color","royalblue");
    $("#mybut1").css("height","35");
    $("#mybut1").css("border-style","solid");



});

$("#cours1").mouseleave(function(){
    $("#mybut1").hide();
    $("#cours1").css("opacity","1")

});

$("#cours2").mouseover(function(){
    $("#mybut2").show();
    $("#cours2").css("opacity","0.7");
    $("#mybut2").css("background-color","white");
    $("#mybut2").css("color","royalblue");
    $("#mybut2").css("height","35");
    $("#mybut2").css("border-style","solid");


});

$("#cours2").mouseleave(function(){
    $("#mybut2").hide();
    $("#cours2").css("opacity","1")

});

$("#cours3").mouseover(function(){
    $("#mybut3").show();
    $("#cours3").css("opacity","0.7");
    $("#mybut3").css("background-color","white");
    $("#mybut3").css("color","royalblue");
    $("#mybut3").css("height","35");
    $("#mybut3").css("border-style","solid");


});

$("#cours3").mouseleave(function(){
    $("#mybut3").hide();
    $("#cours3").css("opacity","1")

});

$("#cours4").mouseover(function(){
    $("#mybut4").show();
    $("#cours4").css("opacity","0.7");
    $("#mybut4").css("background-color","white");
    $("#mybut4").css("color","royalblue");
    $("#mybut4").css("height","35");
    $("#mybut4").css("border-style","solid");

});

$("#cours4").mouseleave(function(){
    $("#mybut4").hide();
    $("#cours4").css("opacity","1")

});

$("#cours5").mouseover(function(){
    $("#mybut5").show();
    $("#cours5").css("opacity","0.7");
    $("#mybut5").css("background-color","white");
    $("#mybut5").css("color","royalblue");
    $("#mybut5").css("height","35");
    $("#mybut5").css("border-style","solid");


});

$("#cours5").mouseleave(function(){
    $("#mybut5").hide();
    $("#cours5").css("opacity","1")

});

$("#cours6").mouseover(function(){
    $("#mybut6").show();
    $("#cours6").css("opacity","0.7");
    $("#mybut6").css("background-color","white");
    $("#mybut6").css("color","royalblue");
    $("#mybut6").css("height","35");
    $("#mybut6").css("border-style","solid");


});

$("#cours6").mouseleave(function(){
    $("#mybut6").hide();
    $("#cours6").css("opacity","1")

});

$("#cours7").mouseover(function(){
    $("#mybut7").show();
    $("#cours7").css("opacity","0.7");
    $("#mybut7").css("background-color","white");
    $("#mybut7").css("color","royalblue");
    $("#mybut7").css("height","35");
    $("#mybut7").css("border-style","solid");

});

$("#cours7").mouseleave(function(){
    $("#mybut7").hide();
    $("#cours7").css("opacity","1")

});

$("#cours8").mouseover(function(){
    $("#mybut8").show();
    $("#cours8").css("opacity","0.7");
    $("#mybut8").css("background-color","white");
    $("#mybut8").css("color","royalblue");
    $("#mybut8").css("height","35");
    $("#mybut8").css("border-style","solid");

});

$("#cours8").mouseleave(function(){
    $("#mybut8").hide();
    $("#cours8").css("opacity","1")
});

$("#cours9").mouseover(function(){
    $("#mybut9").show();
    $("#cours9").css("opacity","0.7");
    $("#mybut9").css("background-color","white");
    $("#mybut9").css("color","royalblue");
    $("#mybut9").css("height","35");
    $("#mybut9").css("border-style","solid");


});

$("#cours9").mouseleave(function(){
    $("#mybut9").hide();
    $("#cours9").css("opacity","1")
});