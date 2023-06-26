// JavaScript Stylesheet-Wechsler von SelfHTML e.V.
// https://wiki.selfhtml.org/wiki/JavaScript/Anwendung_und_Praxis/Stylesheets_dynamisch_wechseln

"use strict";
(function () {
	document.addEventListener("DOMContentLoaded", function () {
    
    var myfavstyle = 0;
    console.log(myfavstyle);
    
    // Styles angeben (./css/filename.css)
    
    const styles = [
    // ["filename", "Name"]
       ["standard", "Standard"], // Das sollte der sein, der auch im HTML steht
       ["quadratisch", "Quadratisch, praktisch, gut!"],  
       ["black", "Da seh ich schwarz!"]
       //["querstreifen", "Querstreifen machen Webseiten schlank!"],	   
       //["vertikal", "Alles im Lot!"],	 wird später fertiggestellt und dann eingebunden
       ["rhtml", "real (by n-gin)"],
       ["scorpions", "Ochsenblut"],
       ["runde-sache", "runde Sache"],
    ],
          footerelement = document.querySelector("body > footer"),
          linkelement = document.querySelector("#stylesheet");
          // nur dieses Stylesheet wird getauscht, es kann Komponenten geben,
          // die erhalten bleiben, etwa gewisse Grundeinstellungen
          
     // Prüfen, ob ein favourite style gespeichert ist
     if (styles.length > 1 && localStorage.getItem("myfavstyle")) {
       var savedstyle = localStorage.getItem("myfavstyle");
       if (Number.isInteger(1 * savedstyle) && savedstyle > -1 && savedstyle < styles.length) {
         myfavstyle = savedstyle;
       }
     }
      
     linkelement.href = "./css/" + styles[myfavstyle][0] + ".css";

     // HTML für switcher erzeugen
     
     if (styles.length > 1) {
       var footer_whith_switcher = 
          "<aside id=\"styleswitcher\">\n"
          + "    <h3>Ansicht wechseln</h3>\n"
          + "    <p>Sie verwenden die Ansicht: <span id=\"currentstyle\">" + styles[myfavstyle][1] + "</span> <button id=\"styleswitcher\">wechseln</button>\n"
          + "</aside>" 
          + footerelement.innerHTML;
          
       footerelement.innerHTML = footer_whith_switcher;
       
       var switcher = document.querySelector("#styleswitcher"),
           currentstyletext = document.querySelector("#currentstyle");
     }  
    
     if (switcher) {
       switcher.addEventListener("click", function(ev) {
         myfavstyle = (myfavstyle + 1) % styles.length;
         localStorage.setItem("myfavstyle",myfavstyle);
         currentstyletext.innerHTML = styles[myfavstyle][1];
         linkelement.href = "./css/" + styles[myfavstyle][0] + ".css";
       })
     }

	});
}());