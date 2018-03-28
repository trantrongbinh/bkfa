﻿var qrcode=function(){function v(b,a){if("undefined"==typeof b.length)throw b.length+"/"+a;var d=function(){for(var c=0;c<b.length&&0==b[c];)c+=1;for(var g=Array(b.length-c+a),d=0;d<b.length-c;d+=1)g[d]=b[d+c];return g}(),c={getAt:function(c){return d[c]},getLength:function(){return d.length},multiply:function(e){for(var g=Array(c.getLength()+e.getLength()-1),d=0;d<c.getLength();d+=1)for(var f=0;f<e.getLength();f+=1)g[d+f]^=x.gexp(x.glog(c.getAt(d))+x.glog(e.getAt(f)));return v(g,0)},mod:function(e){if(0>
c.getLength()-e.getLength())return c;for(var g=x.glog(c.getAt(0))-x.glog(e.getAt(0)),d=Array(c.getLength()),f=0;f<c.getLength();f+=1)d[f]=c.getAt(f);for(f=0;f<e.getLength();f+=1)d[f]^=x.gexp(x.glog(e.getAt(f))+g);return v(d,0).mod(e)}};return c}var p=function(b,a){var d=b,c=u[a],e=null,g=0,A=null,f=[],l={},n=function(b,l){var k=g=4*d+17,h=Array(k),a,n;for(a=0;a<k;a+=1)for(h[a]=Array(k),n=0;n<k;n+=1)h[a][n]=null;e=h;z(0,0);z(g-7,0);z(0,g-7);k=t.getPatternPosition(d);for(h=0;h<k.length;h+=1)for(a=0;a<
k.length;a+=1){n=k[h];var w=k[a];if(null==e[n][w])for(var y=-2;2>=y;y+=1)for(var q=-2;2>=q;q+=1)e[n+y][w+q]=-2==y||2==y||-2==q||2==q||0==y&&0==q?!0:!1}for(k=8;k<g-8;k+=1)null==e[k][6]&&(e[k][6]=0==k%2);for(k=8;k<g-8;k+=1)null==e[6][k]&&(e[6][k]=0==k%2);k=t.getBCHTypeInfo(c<<3|l);for(h=0;15>h;h+=1)a=!b&&1==(k>>h&1),6>h?e[h][8]=a:8>h?e[h+1][8]=a:e[g-15+h][8]=a;for(h=0;15>h;h+=1)a=!b&&1==(k>>h&1),8>h?e[8][g-h-1]=a:9>h?e[8][15-h-1+1]=a:e[8][15-h-1]=a;e[g-8][8]=!b;if(7<=d){k=t.getBCHTypeNumber(d);for(h=
0;18>h;h+=1)a=!b&&1==(k>>h&1),e[Math.floor(h/3)][h%3+g-8-3]=a;for(h=0;18>h;h+=1)a=!b&&1==(k>>h&1),e[h%3+g-8-3][Math.floor(h/3)]=a}if(null==A){n=d;k=B.getRSBlocks(n,c);h=C();for(a=0;a<f.length;a+=1)w=f[a],h.put(w.getMode(),4),h.put(w.getLength(),t.getLengthInBits(w.getMode(),n)),w.write(h);for(a=n=0;a<k.length;a+=1)n+=k[a].dataCount;if(h.getLengthInBits()>8*n)throw"code length overflow. ("+h.getLengthInBits()+"\x3e"+8*n+")";for(h.getLengthInBits()+4<=8*n&&h.put(0,4);0!=h.getLengthInBits()%8;)h.putBit(!1);
for(;!(h.getLengthInBits()>=8*n);){h.put(236,8);if(h.getLengthInBits()>=8*n)break;h.put(17,8)}var p=0;n=a=0;w=Array(k.length);y=Array(k.length);for(q=0;q<k.length;q+=1){var u=k[q].dataCount,x=k[q].totalCount-u;a=Math.max(a,u);n=Math.max(n,x);w[q]=Array(u);for(var r=0;r<w[q].length;r+=1)w[q][r]=255&h.getBuffer()[r+p];p+=u;r=t.getErrorCorrectPolynomial(x);u=v(w[q],r.getLength()-1).mod(r);y[q]=Array(r.getLength()-1);for(r=0;r<y[q].length;r+=1)x=r+u.getLength()-y[q].length,y[q][r]=0<=x?u.getAt(x):0}for(r=
h=0;r<k.length;r+=1)h+=k[r].totalCount;h=Array(h);for(r=p=0;r<a;r+=1)for(q=0;q<k.length;q+=1)r<w[q].length&&(h[p]=w[q][r],p+=1);for(r=0;r<n;r+=1)for(q=0;q<k.length;q+=1)r<y[q].length&&(h[p]=y[q][r],p+=1);A=h}k=A;h=-1;a=g-1;n=7;w=0;y=t.getMaskFunction(l);for(q=g-1;0<q;q-=2)for(6==q&&--q;;){for(r=0;2>r;r+=1)null==e[a][q-r]&&(p=!1,w<k.length&&(p=1==(k[w]>>>n&1)),y(a,q-r)&&(p=!p),e[a][q-r]=p,--n,-1==n&&(w+=1,n=7));a+=h;if(0>a||g<=a){a-=h;h=-h;break}}},z=function(c,d){var k;for(k=-1;7>=k;k+=1)if(!(-1>=
c+k||g<=c+k))for(var a=-1;7>=a;a+=1)-1>=d+a||g<=d+a||(e[c+k][d+a]=0<=k&&6>=k&&(0==a||6==a)||0<=a&&6>=a&&(0==k||6==k)||2<=k&&4>=k&&2<=a&&4>=a?!0:!1)};l.addData=function(c,e){e=e||"Byte";var g=null;switch(e){case "Numeric":g=F(c);break;case "Alphanumeric":g=G(c);break;case "Byte":g=H(c);break;case "Kanji":g=I(c);break;default:throw"mode:"+e;}f.push(g);A=null};l.isDark=function(c,a){if(0>c||g<=c||0>a||g<=a)throw c+","+a;return e[c][a]};l.getModuleCount=function(){return g};l.make=function(){if(1>d){for(var e=
1;40>e;e++){for(var g=B.getRSBlocks(e,c),a=C(),h=0;h<f.length;h++){var b=f[h];a.put(b.getMode(),4);a.put(b.getLength(),t.getLengthInBits(b.getMode(),e));b.write(a)}for(h=b=0;h<g.length;h++)b+=g[h].dataCount;if(a.getLengthInBits()<=8*b)break}d=e}for(a=g=e=0;8>a;a+=1)if(n(!0,a),h=t.getLostPoint(l),0==a||e>h)e=h,g=a;n(!1,g)};l.createTableTag=function(c,e){c=c||2;var a;a='\x3ctable style\x3d" border-width: 0px; border-style: none;';a+=" border-collapse: collapse;";a+=" padding: 0px; margin: "+("undefined"==
typeof e?4*c:e)+"px;";a+='"\x3e';a+="\x3ctbody\x3e";for(var g=0;g<l.getModuleCount();g+=1){a+="\x3ctr\x3e";for(var d=0;d<l.getModuleCount();d+=1)a+='\x3ctd style\x3d"',a+=" border-width: 0px; border-style: none;",a+=" border-collapse: collapse;",a+=" padding: 0px; margin: 0px;",a+=" width: "+c+"px;",a+=" height: "+c+"px;",a+=" background-color: ",a+=l.isDark(g,d)?"#000000":"#ffffff",a+=";",a+='"/\x3e';a+="\x3c/tr\x3e"}a+="\x3c/tbody\x3e";return a+="\x3c/table\x3e"};l.createSvgTag=function(c,a){c=
c||2;a="undefined"==typeof a?4*c:a;var e=l.getModuleCount()*c+2*a,g,d,f,b,A;A="l"+c+",0 0,"+c+" -"+c+",0 0,-"+c+"z ";b='\x3csvg version\x3d"1.1" xmlns\x3d"http://www.w3.org/2000/svg"'+(' width\x3d"'+e+'px"');b+=' height\x3d"'+e+'px"';b+=' viewBox\x3d"0 0 '+e+" "+e+'" ';b+=' preserveAspectRatio\x3d"xMinYMin meet"\x3e';b+='\x3crect width\x3d"100%" height\x3d"100%" fill\x3d"white" cx\x3d"0" cy\x3d"0"/\x3e';b+='\x3cpath d\x3d"';for(d=0;d<l.getModuleCount();d+=1)for(f=d*c+a,e=0;e<l.getModuleCount();e+=
1)l.isDark(d,e)&&(g=e*c+a,b+="M"+g+","+f+A);b+='" stroke\x3d"transparent" fill\x3d"black"/\x3e';return b+="\x3c/svg\x3e"};l.createImgTag=function(c,a,e,g){c=c||2;a="undefined"==typeof a?4*c:a;var d=l.getModuleCount()*c+2*a,f=a,b=d-a;return J(d,d,function(a,e){return f<=a&&a<b&&f<=e&&e<b?l.isDark(Math.floor((e-f)/c),Math.floor((a-f)/c))?0:1:1},e.toLowerCase(),g.toLowerCase())};return l};p.stringToBytesFuncs={"default":function(b){for(var a=[],d=0;d<b.length;d+=1){var c=b.charCodeAt(d);a.push(c&255)}return a}};
p.stringToBytes=p.stringToBytesFuncs["default"];p.createStringToBytes=function(b,a){var d=function(){for(var c=K(b),e=function(){var a=c.read();if(-1==a)throw"eof";return a},g=0,d={};;){var f=c.read();if(-1==f)break;var l=e(),n=e(),z=e(),f=String.fromCharCode(f<<8|l);d[f]=n<<8|z;g+=1}if(g!=a)throw g+" !\x3d "+a;return d}();return function(c){for(var a=[],g=0;g<c.length;g+=1){var b=c.charCodeAt(g);128>b?a.push(b):(b=d[c.charAt(g)],"number"==typeof b?(b&255)==b?a.push(b):(a.push(b>>>8),a.push(b&255)):
a.push(63))}return a}};var u={L:1,M:0,Q:3,H:2},t=function(){var b=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,
142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],a={},d=function(a){for(var e=0;0!=a;)e+=1,a>>>=1;return e};a.getBCHTypeInfo=function(a){for(var e=a<<10;0<=d(e)-d(1335);)e^=1335<<d(e)-d(1335);return(a<<10|e)^21522};a.getBCHTypeNumber=function(a){for(var e=a<<12;0<=d(e)-d(7973);)e^=7973<<d(e)-d(7973);return a<<12|e};a.getPatternPosition=function(a){return b[a-1]};a.getMaskFunction=
function(a){switch(a){case 0:return function(a,c){return 0==(a+c)%2};case 1:return function(a,c){return 0==a%2};case 2:return function(a,c){return 0==c%3};case 3:return function(a,c){return 0==(a+c)%3};case 4:return function(a,c){return 0==(Math.floor(a/2)+Math.floor(c/3))%2};case 5:return function(a,c){return 0==a*c%2+a*c%3};case 6:return function(a,c){return 0==(a*c%2+a*c%3)%2};case 7:return function(a,c){return 0==(a*c%3+(a+c)%2)%2};default:throw"bad maskPattern:"+a;}};a.getErrorCorrectPolynomial=
function(a){for(var e=v([1],0),d=0;d<a;d+=1)e=e.multiply(v([1,x.gexp(d)],0));return e};a.getLengthInBits=function(a,e){if(1<=e&&10>e)switch(a){case 1:return 10;case 2:return 9;case 4:return 8;case 8:return 8;default:throw"mode:"+a;}else if(27>e)switch(a){case 1:return 12;case 2:return 11;case 4:return 16;case 8:return 10;default:throw"mode:"+a;}else if(41>e)switch(a){case 1:return 14;case 2:return 13;case 4:return 16;case 8:return 12;default:throw"mode:"+a;}else throw"type:"+e;};a.getLostPoint=function(a){for(var e=
a.getModuleCount(),d=0,b=0;b<e;b+=1)for(var f=0;f<e;f+=1){for(var l=0,n=a.isDark(b,f),z=-1;1>=z;z+=1)if(!(0>b+z||e<=b+z))for(var p=-1;1>=p;p+=1)0>f+p||e<=f+p||0==z&&0==p||n!=a.isDark(b+z,f+p)||(l+=1);5<l&&(d+=3+l-5)}for(b=0;b<e-1;b+=1)for(f=0;f<e-1;f+=1)if(l=0,a.isDark(b,f)&&(l+=1),a.isDark(b+1,f)&&(l+=1),a.isDark(b,f+1)&&(l+=1),a.isDark(b+1,f+1)&&(l+=1),0==l||4==l)d+=3;for(b=0;b<e;b+=1)for(f=0;f<e-6;f+=1)a.isDark(b,f)&&!a.isDark(b,f+1)&&a.isDark(b,f+2)&&a.isDark(b,f+3)&&a.isDark(b,f+4)&&!a.isDark(b,
f+5)&&a.isDark(b,f+6)&&(d+=40);for(f=0;f<e;f+=1)for(b=0;b<e-6;b+=1)a.isDark(b,f)&&!a.isDark(b+1,f)&&a.isDark(b+2,f)&&a.isDark(b+3,f)&&a.isDark(b+4,f)&&!a.isDark(b+5,f)&&a.isDark(b+6,f)&&(d+=40);for(f=l=0;f<e;f+=1)for(b=0;b<e;b+=1)a.isDark(b,f)&&(l+=1);a=Math.abs(100*l/e/e-50)/5;return d+10*a};return a}(),x=function(){for(var b=Array(256),a=Array(256),d=0;8>d;d+=1)b[d]=1<<d;for(d=8;256>d;d+=1)b[d]=b[d-4]^b[d-5]^b[d-6]^b[d-8];for(d=0;255>d;d+=1)a[b[d]]=d;return{glog:function(c){if(1>c)throw"glog("+
c+")";return a[c]},gexp:function(a){for(;0>a;)a+=255;for(;256<=a;)a-=255;return b[a]}}}(),B=function(){var b=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,
58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],
[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,
13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,
117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,
48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],a=function(a,c){var b={};b.totalCount=a;b.dataCount=
c;return b},d={},c=function(a,c){switch(c){case u.L:return b[4*(a-1)+0];case u.M:return b[4*(a-1)+1];case u.Q:return b[4*(a-1)+2];case u.H:return b[4*(a-1)+3]}};d.getRSBlocks=function(b,d){var p=c(b,d);if("undefined"==typeof p)throw"bad rs block @ typeNumber:"+b+"/errorCorrectionLevel:"+d;for(var f=p.length/3,l=[],n=0;n<f;n+=1)for(var z=p[3*n+0],t=p[3*n+1],u=p[3*n+2],k=0;k<z;k+=1)l.push(a(t,u));return l};return d}(),C=function(){var b=[],a=0,d={getBuffer:function(){return b},getAt:function(a){return 1==
(b[Math.floor(a/8)]>>>7-a%8&1)},put:function(a,b){for(var g=0;g<b;g+=1)d.putBit(1==(a>>>b-g-1&1))},getLengthInBits:function(){return a},putBit:function(d){var e=Math.floor(a/8);b.length<=e&&b.push(0);d&&(b[e]|=128>>>a%8);a+=1}};return d},F=function(b){var a=function(a){for(var b=0,e=0;e<a.length;e+=1){var b=10*b,g;g=a.charAt(e);if("0"<=g&&"9">=g)g=g.charCodeAt(0)-48;else throw"illegal char :"+g;b+=g}return b};return{getMode:function(){return 1},getLength:function(a){return b.length},write:function(d){for(var c=
0;c+2<b.length;)d.put(a(b.substring(c,c+3)),10),c+=3;c<b.length&&(1==b.length-c?d.put(a(b.substring(c,c+1)),4):2==b.length-c&&d.put(a(b.substring(c,c+2)),7))}}},G=function(b){var a=function(a){if("0"<=a&&"9">=a)return a.charCodeAt(0)-48;if("A"<=a&&"Z">=a)return a.charCodeAt(0)-65+10;switch(a){case " ":return 36;case "$":return 37;case "%":return 38;case "*":return 39;case "+":return 40;case "-":return 41;case ".":return 42;case "/":return 43;case ":":return 44;default:throw"illegal char :"+a;}};return{getMode:function(){return 2},
getLength:function(a){return b.length},write:function(d){for(var c=0;c+1<b.length;)d.put(45*a(b.charAt(c))+a(b.charAt(c+1)),11),c+=2;c<b.length&&d.put(a(b.charAt(c)),6)}}},H=function(b){var a=p.stringToBytes(b);return{getMode:function(){return 4},getLength:function(b){return a.length},write:function(b){for(var c=0;c<a.length;c+=1)b.put(a[c],8)}}},I=function(b){var a=p.stringToBytesFuncs.SJIS;if(!a)throw"sjis not supported.";!function(b,d){var g=a(b);if(2!=g.length||(g[0]<<8|g[1])!=d)throw"sjis not supported.";
}("友",38726);var d=a(b);return{getMode:function(){return 8},getLength:function(a){return~~(d.length/2)},write:function(a){for(var b=0;b+1<d.length;){var g=(255&d[b])<<8|255&d[b+1];if(33088<=g&&40956>=g)g-=33088;else if(57408<=g&&60351>=g)g-=49472;else throw"illegal char at "+(b+1)+"/"+g;g=192*(g>>>8&255)+(g&255);a.put(g,13);b+=2}if(b<d.length)throw"illegal char at "+(b+1);}}},D=function(){var b=[],a={writeByte:function(a){b.push(a&255)},writeShort:function(b){a.writeByte(b);a.writeByte(b>>>8)},writeBytes:function(b,
c,e){c=c||0;e=e||b.length;for(var g=0;g<e;g+=1)a.writeByte(b[g+c])},writeString:function(b){for(var c=0;c<b.length;c+=1)a.writeByte(b.charCodeAt(c))},toByteArray:function(){return b},toString:function(){var a;a="[";for(var c=0;c<b.length;c+=1)0<c&&(a+=","),a+=b[c];return a+"]"}};return a},L=function(){var b=0,a=0,d=0,c="",e={},g=function(a){if(!(0>a)){if(26>a)return 65+a;if(52>a)return 97+(a-26);if(62>a)return 48+(a-52);if(62==a)return 43;if(63==a)return 47}throw"n:"+a;};e.writeByte=function(e){b=
b<<8|e&255;a+=8;for(d+=1;6<=a;)c+=String.fromCharCode(g(b>>>a-6&63)),a-=6};e.flush=function(){0<a&&(c+=String.fromCharCode(g(b<<6-a&63)),a=b=0);if(0!=d%3)for(var e=3-d%3,f=0;f<e;f+=1)c+="\x3d"};e.toString=function(){return c};return e},K=function(b){var a=0,d=0,c=0,e=function(a){if(65<=a&&90>=a)return a-65;if(97<=a&&122>=a)return a-97+26;if(48<=a&&57>=a)return a-48+52;if(43==a)return 62;if(47==a)return 63;throw"c:"+a;};return{read:function(){for(;8>c;){if(a>=b.length){if(0==c)return-1;throw"unexpected end of file./"+
c;}var g=b.charAt(a);a+=1;if("\x3d"==g)return c=0,-1;g.match(/^\s$/)||(d=d<<6|e(g.charCodeAt(0)),c+=6)}g=d>>>c-8&255;c-=8;return g}}},E=function(b){if(m=b.match(/^#([0-9a-f]{6})$/i)[1])return["0x"+m.substr(0,2),"0x"+m.substr(2,2),"0x"+m.substr(4,2)]},M=function(b,a,d,c){var e=Array(b*a),g=function(a){var b=0,c=0;return{write:function(d,e){if(0!=d>>>e)throw"length over";for(;8<=b+e;)a.writeByte(255&(d<<b|c)),e-=8-b,d>>>=8-b,b=c=0;c|=d<<b;b+=e},flush:function(){0<b&&a.writeByte(c)}}},p=function(){var a=
{},b=0,c={add:function(d){if(c.contains(d))throw"dup key:"+d;a[d]=b;b+=1},size:function(){return b},indexOf:function(b){return a[b]},contains:function(b){return"undefined"!=typeof a[b]}};return c};return{setPixel:function(a,c,d){e[c*b+a]=d},write:function(f){f.writeString("GIF87a");f.writeShort(b);f.writeShort(a);f.writeByte(128);f.writeByte(0);f.writeByte(0);var l=E(d);l?(f.writeByte(l[0]),f.writeByte(l[1]),f.writeByte(l[2])):(f.writeByte(0),f.writeByte(0),f.writeByte(0));(l=E(c))?(f.writeByte(l[0]),
f.writeByte(l[1]),f.writeByte(l[2])):(f.writeByte(255),f.writeByte(255),f.writeByte(255));f.writeString(",");f.writeShort(0);f.writeShort(0);f.writeShort(b);f.writeShort(a);f.writeByte(0);for(var l=3,n=p(),t=0;4>t;t+=1)n.add(String.fromCharCode(t));n.add(String.fromCharCode(4));n.add(String.fromCharCode(5));var t=D(),u=g(t);u.write(4,l);for(var v=0,k=String.fromCharCode(e[v]),v=v+1;v<e.length;){var h=String.fromCharCode(e[v]),v=v+1;n.contains(k+h)?k+=h:(u.write(n.indexOf(k),l),4095>n.size()&&(n.size()==
1<<l&&(l+=1),n.add(k+h)),k=h)}u.write(n.indexOf(k),l);u.write(5,l);u.flush();l=t.toByteArray();f.writeByte(2);for(n=0;255<l.length-n;)f.writeByte(255),f.writeBytes(l,n,255),n+=255;f.writeByte(l.length-n);f.writeBytes(l,n,l.length-n);f.writeByte(0);f.writeString(";")}}},J=function(b,a,d,c,e){c=M(b,a,c,e);for(e=0;e<a;e+=1)for(var g=0;g<b;g+=1)c.setPixel(g,e,d(g,e));a=D();c.write(a);b=L();a=a.toByteArray();for(d=0;d<a.length;d+=1)b.writeByte(a[d]);b.flush();return b="data:image/gif;base64,"+b};return p}();
!function(){qrcode.stringToBytesFuncs["UTF-8"]=function(v){for(var p=[],u=0;u<v.length;u++){var t=v.charCodeAt(u);128>t?p.push(t):2048>t?p.push(192|t>>6,128|t&63):55296>t||57344<=t?p.push(224|t>>12,128|t>>6&63,128|t&63):(u++,t=65536+((t&1023)<<10|v.charCodeAt(u)&1023),p.push(240|t>>18,128|t>>12&63,128|t>>6&63,128|t&63))}return p}}();(function(v){"function"===typeof define&&define.amd?define([],v):"object"===typeof exports&&(module.exports=v())})(function(){return qrcode});
function getQrImage(v){var p=qrcode(0,v.QrCorLevel),u=v.QrColorBg,t=v.QrColorPt,x=v.QrMargin,B=v.QrCellSize;p.addData(v.QrUrl);p.make();return p.createImgTag(B,x,t,u)};