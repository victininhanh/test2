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
console.log(new Date());



// err in bitmap
var info = {
  '0' : '0100',
  '1' : 'F66064810870A0120000000000000004',
  '2' : '4254464000000003',
  '3' : '000000',
  '4' : '000000005000',
  '6' : '000000002079',
  '7' : '0703114141',
  '10' : '74158000',
  '11' : '003776',
  '18' : '5964',
  '19' : '458',
  '22' : '0120',
  '25' : '00',
  '32' : '465886',
  '37' : '818511003776',
 // '41' : '',
  '42' : '000160140002167',
  '43' : 'TSL FRANCHISE (M) SDN BHDKULA LUMPUR MY ',
  '44' : 'P',
  '49' : '458',
  '51' : '702',
  '60' : '42',
  '63' : '8000000002',
  '126' : '004800000000000000',   
};
console.log("Par input= " + util.inspect(info));
//var msg = iso.pack(parsed);
var msg = iso.pack(info);
console.log("Input packed = " + msg);
console.log("DONE   !!!");


//  UNPACK
console.log("UNPACK   !!!");
console.log("ORG = " + msg);
var parsed = iso.unpack(msg);
console.log("Par =>>>>>>>> " + util.inspect(addinfo(parsed,packager)));
//console.log("Par = " + util.inspect(parsed));
//var iso = new ISO(packager);
console.log("Parse complete >>" + msg + " <<\n");

console.log("------------ 1111111111   -------------");




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
console.log("DONE   !!!");



