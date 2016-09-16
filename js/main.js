document.addEventListener("DOMContentLoaded",function(){

  //document.getElementsByTagName("h1")[0]
  document.querySelector("h1").addEventListener("click",function(){
    document.querySelector("body").className = "modal-on";
  });

  document.querySelector("#modal .close").addEventListener("click",function(){
    // to do: hide the modal...
    document.querySelector("body").className = "";
  });
});