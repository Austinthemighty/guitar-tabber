// /button onclick="myFunction(A)">A</button>
//
// <button onclick="myFunction(A_Sharp)">A#</button>
//
// <button onclick="myFunction(B)">B</button>
//
// <button onclick="myFunction(C)">C</button>
//
// <button onclick="myFunction(C_Sharp)">C#</button>
//
// <button onclick="myFunction(D)">D</button>
//
// <button onclick="myFunction(D_Sharp)">D#</button>
//
// <button onclick="myFunction(E)">E</button>
//
// <button onclick="myFunction(F)">F</button>
//
// <button onclick="myFunction(F_Sharp)">F#</button>
//
// <button onclick="myFunction(G)">G</button>
//
// <button onclick="myFunction(G_Sharp)">G#</button>

var first = 0;
$(document).ready(function(){
  // var keys = {
  //   'A':'G5, A5',
  //
  // };
  var keys = [
    {
      key: "A",
      map: ['E5','E17','A12', 'D7','D19','B10', 'G14', 'e5', 'e17']
    },{
      key: "#A",
      map: ['E6','E18','A13','D8','D20','B11','G15','e6','e18']
    },{
      key: "B",
      map: ['E7','E19','A14','D9','B12','G16','e7','e19']

    },{
      key: "C",
      map: ['E8','E20','A15','D10','B13','G17','e8','e20']

    },{
      key: "#C",
      map: ['E9','A16','D11','B14','G18','e9']

    },{
      key: "D",
      map: ['E10','A17','D12','B15','G19','e10']

    },{
      key: "#D",
      map: ['E11','A18','D13','B16','G20','e11']

    },{
      key: "E",
      map: ['E1','E12','A7','A19','D2','D14','B5','B17','G9','e1','e12']

    },{
      key: "F",
      map: ['E1','E13','A8','A20','D3','D15','B6','B18','G10','e1','e13']

    },{
      key: "#F",
      map: ['E2','E14','A9','D4','D16','B7','B19','G11','e2','e14']

    },{
      key: "G",
      map: ['E3','E15','A10','D5','D17','B8','B20','G12','e3','e15']

    },{
      key: "#G",
      map: ['E4','E16','A11','D6','D18','B9','G13','e4','e16']

    }
  ];
  // var strings=['E','A','D','G','B','e'],
	// 	null = [];
  //  strings.forEach(function(str){
  //  	for(var i=1;i<=20;i++){
  //   	keys.push({
  //     	key:str+i
  //     })
  //   }
  //  })
  // Created dynamic buttons
for (var i = 0; i < keys.length; i++) {
  createButtons(keys[i]);
}
  function createButtons(obj){
    var $button = $("<button class='note' data-note=" + obj.key + ">" + obj.key + "</button>")
    $button.appendTo($(".noteButtons"));
  };


  $(".note").click(function(){
    var data = $(this).data("note");

    if (data == 'A') {
      for (var i = 0; i < keys[0].map.length; i++) {
        $("[name='"+keys[0].map[i]+"']").css({"background-color":"red"})
      }
      // return first = 1
    }
    if (data == '#A') {
      for (var i = 0; i < keys[1].map.length; i++) {
        $("[name='"+keys[1].map[i]+"']").css({"background-color":"red"})
      }
    }
    if (data == 'B') {
      for (var i = 0; i < keys[2].map.length; i++) {
        $("[name='"+keys[2].map[i]+"']").css({"background-color":"red"})
      }
    }
    if (data == 'C') {
      for (var i = 0; i < keys[3].map.length; i++) {
        $("[name='"+keys[3].map[i]+"']").css({"background-color":"red"})
      }
    }
    if (data == '#C') {
      for (var i = 0; i < keys[4].map.length; i++) {
        $("[name='"+keys[4].map[i]+"']").css({"background-color":"red"})
      }
    }
    if (data == 'D') {
      for (var i = 0; i < keys[5].map.length; i++) {
        $("[name='"+keys[5].map[i]+"']").css({"background-color":"red"})
      }
    }
    if (data == '#D') {
      for (var i = 0; i < keys[6].map.length; i++) {
        $("[name='"+keys[6].map[i]+"']").css({"background-color":"red"})
      }
    }
    if (data == 'E') {
      for (var i = 0; i < keys[7].map.length; i++) {
        $("[name='"+keys[7].map[i]+"']").css({"background-color":"red"})
      }
    }
    if (data == 'F') {
      for (var i = 0; i < keys[8].map.length; i++) {
        $("[name='"+keys[8].map[i]+"']").css({"background-color":"red"})
      }
    }
    if (data == '#F') {
      for (var i = 0; i < keys[9].map.length; i++) {
        $("[name='"+keys[9].map[i]+"']").css({"background-color":"red"})
      }
    }
    if (data == 'G') {
      for (var i = 0; i < keys[10].map.length; i++) {
        $("[name='"+keys[10].map[i]+"']").css({"background-color":"red"})
      }
    }
    if (data == '#G') {
      for (var i = 0; i < keys[1].map.length; i++) {
        $("[name='"+keys[1].map[i]+"']").css({"background-color":"red"})
      }
    }

    // // debugger;
    // $("[name='"+data+"']").css({"background-color":"red"})

  })
});

function clear() {
  window.open('/', true);
}
