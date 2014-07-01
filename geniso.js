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

var save = [];

console.log("----------------------------- STARTTTTTTTTTTTTTTTTT   ----------------------------");
var info = {
  '0':'0100',
  '1':'722020810E508002',
  '2':'4254464000000003',
  '3':'000000',
  '4':'000000005000',
  '7':'0703114141',
  '11':'003776',
  '19':'458',
  '25':'00',
  '32':'465886',
  '37':'818511003776',
  '38':'013847',
  '39':'00',
  '42':'000150140002167',
  '44':'5',
  '49':'458',
  '63':'8000000002',
};
console.log("Par input= " + util.inspect(info));
//var msg = iso.pack(parsed);
var msg = iso.pack(info);
console.log("Input packed = " + msg);
console.log("DONE   !!!");

save.push(msg);

//  UNPACK
console.log("UNPACK   !!!");
console.log("ORG = " + msg);
var parsed = iso.unpack(msg);
console.log("Par =>>>>>>>> " + util.inspect(addinfo(parsed,packager)));
//console.log("Par = " + util.inspect(parsed));
//var iso = new ISO(packager);
console.log("Parse complete >>" + msg + " <<\n");

save.push(msg);

console.log("----------------------------- FFFF0000000000000   ----------------------------");




// Done bitmap
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

save.push(msg);
console.log("DONE   !!!");


//  UNPACK
console.log("UNPACK   !!!");
console.log("ORG = " + msg);
var parsed = iso.unpack(msg);
console.log("Par =>>>>>>>> " + util.inspect(addinfo(parsed,packager)));
//console.log("Par = " + util.inspect(parsed));
//var iso = new ISO(packager);
console.log("Parse complete >>" + msg + " <<\n");
save.push(msg);
console.log("----------------------------- 1111111111   ----------------------------");

