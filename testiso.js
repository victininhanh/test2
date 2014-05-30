var ISO = require('iso8583').ISO8583;
var packager = require('iso8583').defaultPackager;
var iso = new ISO(packager);
var util = require('util');

function addinfo(parsed,packager){ // Tao them thong tin tra ve
  var res ={};
  for (i in parsed){
    res[i] = {
      'code': i,
      'data':parsed[i],
      'name':packager[i].name,
      'length':packager[i].length,
      'type':packager[i].type
    };
    //console.log("Par =>>>>>>>> " + util.inspect(res));
  }
  return res;
}

// Xu ly parse noi dung
var msg = '0210723A00010A80840018593600141001099999011000000010000000100702153300000119153310061007065656561006090102240000000901360020100236C0102240000000';
console.log("ORG = " + msg);
//var iso = new ISO(packager);
var parsed = iso.unpack(msg);
console.log("Par =>>>>>>>> " + util.inspect(addinfo(parsed,packager)));
//console.log("Par = " + util.inspect(parsed));
//var iso = new ISO(packager);
console.log("Parse complete >>" + msg + " <<\n");

// Xu ly chen noi dung
var info = { '0': '0210',                                                                 
  '1': '723A00010A808400aaaaaaaaaaaaaaaaaaaaa',                                                           
  '2': '593600141001099999bbbbbbbbbbbbbbbbbbb',                                                         
  '3': '011000ccccccccccccccccccccccccc',                                                                     
  '4': '111110000000dddddddddddddddddddd',                                                               
  '7': '1007021533eeeeeeeeeeeeeeeeeeeeeeeeee',                                                                 
  '11': '000001fffffffffffffffffffffffffffffffff',                                                                    
  '12': '191533ggggggggggggggggggggggggggggggggg',                                                                    
  '13': '1006hhhhhhhhhhhhhhhhhhhhhh',                                                                      
  '15': '1007iiiiiiiiiiiiiiiiiiiiiiiiiii',                                                                      
  '32': '565656ooooooooooooooooooooooooo',                                                                    
  '37': '100609010224mmmmmmmmmmmmmmmmmmmm',                                                              
  '39': '00nnnnnnnnnnnnnnnnnnnnnnnn',                                                                        
  '41': '00000901pppppppppppppppppppppppp',                                                                  
  '49': '360qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',                                                                       
  '54': '100236C01022400ACA0rrrrrrrrrrrrrrrrrrrrr' } ; 
console.log("Par input= " + util.inspect(info));
//var msg = iso.pack(parsed);
var msg = iso.pack(info);
console.log("Input packed = " + msg);
console.log("DONE");


