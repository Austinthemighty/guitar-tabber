// var f = 1;
// var fs = 1.5;
// var g = 2;
// var gs = 2.5;
// var a = 3;
//
// var b = 4;
//
// var c = 5;
//
// var d = 6;
//
// var e = 7;
//
// function add(note, octive) {
//   $(d)
//   console.log(note);
//   if(octive === 1){
//     if (true) {
//
//     }
//   }
// }



$(document).ready(function(){
  var keys = [
    {
      key: "F"
    },{
      key: "#F"
    },{
      key: "G"
    },{
      key: "#G"
    },{
      key: "A"
    },{
      key: "#A"
    },{
      key: "B"
    },{
      key: "#B"
    },{
      key: "C"
    },{
      key: "#C"
    },{
      key: "D"
    },{
      key: "#D"
    },{
      key: "E"
    },{
      key: "#E"
    }
  ];
  // Created dynamic buttons
for (var i = 0; i < keys.length; i++) {
  createButtons(keys[i]);
}
  function createButtons(obj){
    var $button = $("<button class='note' data-note=" + obj.key + ">" + obj.key + "</button>")
    $button.appendTo($(".noteButtons"));
  };


  $(".note").click(function(){
    var data = $(this).data("note")
    console.log(data);
  })
});
