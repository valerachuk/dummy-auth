(function(n){function e(e){for(var r,o,i=e[0],l=e[1],c=e[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(t,o)&&t[o]&&p.push(t[o][0]),t[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(n[r]=l[r]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var n,e=0;e<s.length;e++){for(var a=s[e],r=!0,i=1;i<a.length;i++){var l=a[i];0!==t[l]&&(r=!1)}r&&(s.splice(e--,1),n=o(o.s=a[0]))}return n}var r={},t={app:0},s=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return n[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=n,o.c=r,o.d=function(n,e,a){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:a})},o.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)o.d(a,r,function(e){return n[e]}.bind(null,r));return a},o.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(n,e,a){n.exports=a("56d7")},4369:function(n,e,a){},"56d7":function(n,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),t=function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("v-app-bar-title",{staticClass:"text-uppercase"},[n._v("Dummy auth")])],1),a("v-main",[a("v-container",[a("router-view")],1)],1)],1)},s=[],o={name:"App",created:function(){this.$store.dispatch("loadDatabase")}},i=o,l=(a("f22e"),a("2877")),c=a("6544"),u=a.n(c),d=a("7496"),p=a("40dc"),m=a("bb78"),g=a("a523"),b=a("f6c4"),h=Object(l["a"])(i,t,s,!1,null,null,null),f=h.exports;u()(h,{VApp:d["a"],VAppBar:p["a"],VAppBarTitle:m["a"],VContainer:g["a"],VMain:b["a"]});var w=function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("v-card",{staticClass:"mx-auto mt-12"},[a("v-card-title",[n._v(" Sign In ")]),a("v-card-text",[a("v-form",{ref:"form"},[a("v-text-field",{attrs:{label:"Login",rules:n.loginValidationRules,"error-messages":n.isUsernameOrPasswordInvalid?"Invalid username or password":""},on:{input:function(e){n.isUsernameOrPasswordInvalid=!1}},model:{value:n.login,callback:function(e){n.login=e},expression:"login"}}),a("showable-password-field",{attrs:{label:"Password",rules:n.passwordValidationRules,"error-messages":n.isUsernameOrPasswordInvalid?"Invalid username or password":""},on:{input:function(e){n.isUsernameOrPasswordInvalid=!1}},model:{value:n.password,callback:function(e){n.password=e},expression:"password"}})],1)],1),a("v-card-actions",[a("v-btn",{attrs:{text:"",color:"primary"},on:{click:n.onSignIn}},[n._v(" Sign In ")]),a("v-spacer"),a("v-btn",{attrs:{text:"",to:{name:"SignUp"}}},[n._v(" Sign up instead ")])],1)],1)},v=[],y=a("1da1"),k=a("5530"),x=(a("96cf"),function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("v-text-field",n._g(n._b({attrs:{type:n.showPassword?"text":"password","append-icon":n.showPassword?"mdi-eye":"mdi-eye-off"},on:{"click:append":function(e){n.showPassword=!n.showPassword}}},"v-text-field",n.$attrs,!1),n.$listeners))}),S=[],j={name:"ShowablePasswordField",data:function(){return{showPassword:!1}}},O=j,U=a("8654"),_=Object(l["a"])(O,x,S,!1,null,null,null),C=_.exports;u()(_,{VTextField:U["a"]});a("ac1f"),a("1276"),a("d3b7");var V="password\n123456\n12345678\n1234\nqwerty\n12345\ndragon\npussy\nbaseball\nfootball\nletmein\nmonkey\n696969\nabc123\nmustang\nmichael\nshadow\nmaster\njennifer\n111111\n2000\njordan\nsuperman\nharley\n1234567\nfuckme\nhunter\nfuckyou\ntrustno1\nranger\nbuster\nthomas\ntigger\nrobert\nsoccer\nfuck\nbatman\ntest\npass\nkiller\nhockey\ngeorge\ncharlie\nandrew\nmichelle\nlove\nsunshine\njessica\nasshole\n6969\npepper\ndaniel\naccess\n123456789\n654321\njoshua\nmaggie\nstarwars\nsilver\nwilliam\ndallas\nyankees\n123123\nashley\n666666\nhello\namanda\norange\nbiteme\nfreedom\ncomputer\nsexy\nthunder\nnicole\nginger\nheather\nhammer\nsummer\ncorvette\ntaylor\nfucker\naustin\n1111\nmerlin\nmatthew\n121212\ngolfer\ncheese\nprincess\nmartin\nchelsea\npatrick\nrichard\ndiamond\nyellow\nbigdog\nsecret\nasdfgh\nsparky\ncowboy\ncamaro\nanthony\nmatrix\nfalcon\niloveyou\nbailey\nguitar\njackson\npurple\nscooter\nphoenix\naaaaaa\nmorgan\ntigers\nporsche\nmickey\nmaverick\ncookie\nnascar\npeanut\njustin\n131313\nmoney\nhorny\nsamantha\npanties\nsteelers\njoseph\nsnoopy\nboomer\nwhatever\niceman\nsmokey\ngateway\ndakota\ncowboys\neagles\nchicken\ndick\nblack\nzxcvbn\nplease\nandrea\nferrari\nknight\nhardcore\nmelissa\ncompaq\ncoffee\nbooboo\nbitch\njohnny\nbulldog\nxxxxxx\nwelcome\njames\nplayer\nncc1701\nwizard\nscooby\ncharles\njunior\ninternet\nbigdick\nmike\nbrandy\ntennis\nblowjob\nbanana\nmonster\nspider\nlakers\nmiller\nrabbit\nenter\nmercedes\nbrandon\nsteven\nfender\njohn\nyamaha\ndiablo\nchris\nboston\ntiger\nmarine\nchicago\nrangers\ngandalf\nwinter\nbigtits\nbarney\nedward\nraiders\nporn\nbadboy\nblowme\nspanky\nbigdaddy\njohnson\nchester\nlondon\nmidnight\nblue\nfishing\n000000\nhannah\nslayer\n11111111\nrachel\nsexsex\nredsox\nthx1138\nasdf\nmarlboro\npanther\nzxcvbnm\narsenal\noliver\nqazwsx\nmother\nvictoria\n7777777\njasper\nangel\ndavid\nwinner\ncrystal\ngolden\nbutthead\nviking\njack\niwantu\nshannon\nmurphy\nangels\nprince\ncameron\ngirls\nmadison\nwilson\ncarlos\nhooters\nwillie\nstartrek\ncaptain\nmaddog\njasmine\nbutter\nbooger\nangela\ngolf\nlauren\nrocket\ntiffany\ntheman\ndennis\nliverpoo\nflower\nforever\ngreen\njackie\nmuffin\nturtle\nsophie\ndanielle\nredskins\ntoyota\njason\nsierra\nwinston\ndebbie\ngiants\npackers\nnewyork\njeremy\ncasper\nbubba\n112233\nsandra\nlovers\nmountain\nunited\ncooper\ndriver\ntucker\nhelpme\nfucking\npookie\nlucky\nmaxwell\n8675309\nbear\nsuckit\ngators\n5150\n222222\nshithead\nfuckoff\njaguar\nmonica\nfred\nhappy\nhotdog\ntits\ngemini\nlover\nxxxxxxxx\n777777\ncanada\nnathan\nvictor\nflorida\n88888888\nnicholas\nrosebud\nmetallic\ndoctor\ntrouble\nsuccess\nstupid\ntomcat\nwarrior\npeaches\napples\nfish\nqwertyui\nmagic\nbuddy\ndolphins\nrainbow\ngunner\n987654\nfreddy\nalexis\nbraves\ncock\n2112\n1212\ncocacola\nxavier\ndolphin\ntesting\nbond007\nmember\ncalvin\nvoodoo\n7777\nsamson\nalex\napollo\nfire\ntester\nwalter\nbeavis\nvoyager\npeter\nporno\nbonnie\nrush2112\nbeer\napple\nscorpio\njonathan\nskippy\nsydney\nscott\nred123\npower\ngordon\ntravis\nbeaver\nstar\njackass\nflyers\nboobs\n232323\nzzzzzz\nsteve\nrebecca\nscorpion\ndoggie\nlegend\nou812\nyankee\nblazer\nbill\nrunner\nbirdie\nbitches\n555555\nparker\ntopgun\nasdfasdf\nheaven\nviper\nanimal\n2222\nbigboy\n4444\narthur\nbaby\nprivate\ngodzilla\ndonald\nwilliams\nlifehack\nphantom\ndave\nrock\naugust\nsammy\ncool\nbrian\nplatinum\njake\nbronco\npaul\nmark\nfrank\nheka6w2\ncopper\nbilly\ncumshot\ngarfield\nwillow\ncunt\nlittle\ncarter\nslut\nalbert\n69696969\nkitten\nsuper\njordan23\neagle1\nshelby\namerica\n11111\njessie\nhouse\nfree\n123321\nchevy\nbullshit\nwhite\nbroncos\nhorney\nsurfer\nnissan\n999999\nsaturn\nairborne\nelephant\nmarvin\nshit\naction\nadidas\nqwert\nkevin\n1313\nexplorer\nwalker\npolice\nchristin\ndecember\nbenjamin\nwolf\nsweet\ntherock\nking\nonline\ndickhead\nbrooklyn\nteresa\ncricket\nsharon\ndexter\nracing\npenis\ngregory\n0000\nteens\nredwings\ndreams\nmichigan\nhentai\nmagnum\n87654321\nnothing\ndonkey\ntrinity\ndigital\n333333\nstella\ncartman\nguinness\n123abc\nspeedy\nbuffalo\nkitty\npimpin\neagle\neinstein\nkelly\nnelson\nnirvana\nvampire\nxxxx\nplayboy\nlouise\npumpkin\nsnowball\ntest123\ngirl\nsucker\nmexico\nbeatles\nfantasy\nford\ngibson\nceltic\nmarcus\ncherry\ncassie\n888888\nnatasha\nsniper\nchance\ngenesis\nhotrod\nreddog\nalexande\ncollege\njester\npassw0rd\nbigcock\nsmith\nlasvegas\ncarmen\nslipknot\n3333\ndeath\nkimberly\n1q2w3e\neclipse\n1q2w3e4r\nstanley\nsamuel\ndrummer\nhomer\nmontana\nmusic\naaaa\nspencer\njimmy\ncarolina\ncolorado\ncreative\nhello1\nrocky\ngoober\nfriday\nbollocks\nscotty\nabcdef\nbubbles\nhawaii\nfluffy\nmine\nstephen\nhorses\nthumper\n5555\npussies\ndarkness\nasdfghjk\npamela\nboobies\nbuddha\nvanessa\nsandman\nnaughty\ndouglas\nhonda\nmatt\nazerty\n6666\nshorty\nmoney1\nbeach\nloveme\n4321\nsimple\npoohbear\n444444\nbadass\ndestiny\nsarah\ndenise\nvikings\nlizard\nmelanie\nassman\nsabrina\nnintendo\nwater\ngood\nhoward\ntime\n123qwe\nnovember\nxxxxx\noctober\nleather\nbastard\nyoung\n101010\nextreme\nhard\npassword1\nvincent\npussy1\nlacrosse\nhotmail\nspooky\namateur\nalaska\nbadger\nparadise\nmaryjane\npoop\ncrazy\nmozart\nvideo\nrussell\nvagina\nspitfire\nanderson\nnorman\neric\ncherokee\ncougar\nbarbara\nlong\n420420\nfamily\nhorse\nenigma\nallison\nraider\nbrazil\nblonde\njones\n55555\ndude\ndrowssap\njeff\nschool\nmarshall\nlovely\n1qaz2wsx\njeffrey\ncaroline\nfranklin\nbooty\nmolly\nsnickers\nleslie\nnipples\ncourtney\ndiesel\nrocks\neminem\nwestside\nsuzuki\ndaddy\npassion\nhummer\nladies\nzachary\nfrankie\nelvis\nreggie\nalpha\nsuckme\nsimpson\npatricia\n147147\npirate\ntommy\nsemperfi\njupiter\nredrum\nfreeuser\nwanker\nstinky\nducati\nparis\nnatalie\nbabygirl\nbishop\nwindows\nspirit\npantera\nmonday\npatches\nbrutus\nhouston\nsmooth\npenguin\nmarley\nforest\ncream\n212121\nflash\nmaximus\nnipple\nbobby\nbradley\nvision\npokemon\nchampion\nfireman\nindian\nsoftball\npicard\nsystem\nclinton\ncobra\nenjoy\nlucky1\nclaire\nclaudia\nboogie\ntimothy\nmarines\nsecurity\ndirty\nadmin\nwildcats\npimp\ndancer\nhardon\nveronica\nfucked\nabcd1234\nabcdefg\nironman\nwolverin\nremember\ngreat\nfreepass\nbigred\nsquirt\njustice\nfrancis\nhobbes\nkermit\npearljam\nmercury\ndomino\n9999\ndenver\nbrooke\nrascal\nhitman\nmistress\nsimon\ntony\nbbbbbb\nfriend\npeekaboo\nnaked\nbudlight\nelectric\nsluts\nstargate\nsaints\nbondage\nbrittany\nbigman\nzombie\nswimming\nduke\nqwerty1\nbabes\nscotland\ndisney\nrooster\nbrenda\nmookie\nswordfis\ncandy\nduncan\nolivia\nhunting\nblink182\nalicia\n8888\nsamsung\nbubba1\nwhore\nvirginia\ngeneral\npassport\naaaaaaaa\nerotic\nliberty\narizona\njesus\nabcd\nnewport\nskipper\nrolltide\nballs\nhappy1\ngalore\nchrist\nweasel\n242424\nwombat\ndigger\nclassic\nbulldogs\npoopoo\naccord\npopcorn\nturkey\njenny\namber\nbunny\nmouse\n007007\ntitanic\nliverpool\ndreamer\neverton\nfriends\nchevelle\ncarrie\ngabriel\npsycho\nnemesis\nburton\npontiac\nconnor\neatme\nlickme\nroland\ncumming\nmitchell\nireland\nlincoln\narnold\nspiderma\npatriots\ngoblue\ndevils\neugene\nempire\nasdfg\ncardinal\nbrown\nshaggy\nfroggy\nqwer\nkawasaki\nkodiak\npeople\nphpbb\nlight\n54321\nkramer\nchopper\nhooker\nhoney\nwhynot\nlesbian\nlisa\nbaxter\nadam\nsnake\nteen\nncc1701d\nqqqqqq\nairplane\nbritney\navalon\nsandy\nsugar\nsublime\nstewart\nwildcat\nraven\nscarface\nelizabet\n123654\ntrucks\nwolfpack\npervert\nlawrence\nraymond\nredhead\namerican\nalyssa\nbambam\nmovie\nwoody\nshaved\nsnowman\ntiger1\nchicks\nraptor\n1969\nstingray\nshooter\nfrance\nstars\nmadmax\nkristen\nsports\njerry\n789456\ngarcia\nsimpsons\nlights\nryan\nlooking\nchronic\nalison\nhahaha\npackard\nhendrix\nperfect\nservice\nspring\nsrinivas\nspike\nkatie\n252525\noscar\nbrother\nbigmac\nsuck\nsingle\ncannon\ngeorgia\npopeye\ntattoo\ntexas\nparty\nbullet\ntaurus\nsailor\nwolves\npanthers\njapan\nstrike\nflowers\npussycat\nchris1\nloverboy\nberlin\nsticky\nmarina\ntarheels\nfisher\nrussia\nconnie\nwolfgang\ntesttest\nmature\nbass\ncatch22\njuice\nmichael1\nnigger\n159753\nwomen\nalpha1\ntrooper\nhawkeye\nhead\nfreaky\ndodgers\npakistan\nmachine\npyramid\nvegeta\nkatana\nmoose\ntinker\ncoyote\ninfinity\ninside\npepsi\nletmein1\nbang\ncontrol\n",P=V.split(/\s+/);function I(n){return P.some((function(e){return n.toLowerCase()===e}))}function R(n){return function(e){return!I(e)||n}}function T(n){return function(e){return!!e||n}}a("b0c0");var E,q=a("ade3"),z="usersDatabase",D="currentUserLogin",L=604800,$=Object.create(null,{signedOut:{configurable:!1,writable:!1,value:"signedOut"},signedIn:{configurable:!1,writable:!1,value:"signedIn"},passwordChange:{configurable:!1,writable:!1,value:"passwordChange"}}),A=(E={},Object(q["a"])(E,$.signedOut,"SignIn"),Object(q["a"])(E,$.signedIn,"Profile"),Object(q["a"])(E,$.passwordChange,"ChangePassword"),E);function F(n,e){var a=A[e.getters.currentSystemState];a!==n.currentRoute.name&&n.push({name:A[e.getters.currentSystemState]})}var N=a("2f62"),B={name:"SignIn",components:{ShowablePasswordField:C},data:function(){return{login:"",password:"",loginValidationRules:[T("The login is required")],passwordValidationRules:[T("The password is required")],isUsernameOrPasswordInvalid:!1}},methods:Object(k["a"])(Object(k["a"])({},Object(N["b"])(["signIn"])),{},{onSignIn:function(){var n=this;return Object(y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n.$refs.form.validate()){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.signIn({login:n.login,password:n.password});case 4:n.isUsernameOrPasswordInvalid=!e.sent;case 5:case"end":return e.stop()}}),e)})))()}})},M=B,H=a("8336"),J=a("b0af"),G=a("99d9"),Y=a("4bd4"),K=a("2fa4"),Q=Object(l["a"])(M,w,v,!1,null,null,null),W=Q.exports;u()(Q,{VBtn:H["a"],VCard:J["a"],VCardActions:G["a"],VCardText:G["b"],VCardTitle:G["c"],VForm:Y["a"],VSpacer:K["a"],VTextField:U["a"]});var X=function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("v-card",{staticClass:"mx-auto mt-12"},[a("v-card-title",[n._v(" Sign Up ")]),a("v-card-text",[a("v-form",{ref:"form"},[a("v-text-field",{attrs:{label:"Login",rules:n.loginValidationRules,"error-messages":n.isUserExistsError?"This username is already taken":""},on:{input:function(e){n.isUserExistsError=!1}},model:{value:n.login,callback:function(e){n.login=e},expression:"login"}}),a("showable-password-field",{attrs:{label:"Password",rules:n.passwordValidationRules},model:{value:n.password,callback:function(e){n.password=e},expression:"password"}})],1)],1),a("v-card-actions",[a("v-btn",{attrs:{text:"",color:"primary"},on:{click:n.onSignUp}},[n._v(" Sign Up ")]),a("v-spacer"),a("v-btn",{attrs:{text:"",to:{name:"SignIn"}}},[n._v(" Sign in instead ")])],1)],1)},Z=[],nn={name:"SignUp",components:{ShowablePasswordField:C},data:function(){return{login:"",password:"",loginValidationRules:[T("The login is required")],passwordValidationRules:[T("The password is required"),R("This password is too common")],isUserExistsError:!1}},methods:Object(k["a"])(Object(k["a"])({},Object(N["b"])(["signUp"])),{},{onSignUp:function(){var n=this;return Object(y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n.$refs.form.validate()){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.signUp({login:n.login,password:n.password});case 4:n.isUserExistsError=!e.sent;case 5:case"end":return e.stop()}}),e)})))()}})},en=nn,an=Object(l["a"])(en,X,Z,!1,null,null,null),rn=an.exports;u()(an,{VBtn:H["a"],VCard:J["a"],VCardActions:G["a"],VCardText:G["b"],VCardTitle:G["c"],VForm:Y["a"],VSpacer:K["a"],VTextField:U["a"]});var tn=function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("v-card",{staticClass:"mx-auto mt-12"},[a("v-card-title",[n._v(" Hello, "+n._s(n.username))]),a("v-card-text",[n._v(" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates corrupti, voluptate quos eius voluptatum sit labore obcaecati perspiciatis ipsam sed quasi atque! Magnam debitis dolore facilis labore iste, quae a. ")]),a("v-card-actions",[a("v-btn",{attrs:{block:"",color:"primary"},on:{click:n.signOut}},[n._v(" Sign Out ")])],1)],1)},sn=[],on={name:"Profile",computed:{username:function(){return this.$store.state.currentUserLogin}},methods:Object(k["a"])({},Object(N["b"])(["signOut"]))},ln=on,cn=Object(l["a"])(ln,tn,sn,!1,null,null,null),un=cn.exports;u()(cn,{VBtn:H["a"],VCard:J["a"],VCardActions:G["a"],VCardText:G["b"],VCardTitle:G["c"]});var dn=function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("v-card",{staticClass:"mx-auto mt-12"},[a("v-card-title",[n._v(" Your password has been expired. "),a("br"),n._v(" Change it, please ")]),a("v-card-text",[a("v-form",{ref:"form"},[a("showable-password-field",{attrs:{label:"New password",rules:n.passwordValidationRules,"error-messages":n.isPasswordTheSame?"Do not use the same password":""},on:{input:function(e){n.isPasswordTheSame=!1}},model:{value:n.password,callback:function(e){n.password=e},expression:"password"}})],1)],1),a("v-card-actions",[a("v-btn",{attrs:{text:"",color:"primary"},on:{click:n.onChangePassword}},[n._v(" Change password ")]),a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:n.signOut}},[n._v(" Sign Out ")])],1)],1)},pn=[],mn={name:"ChangePassword",components:{ShowablePasswordField:C},data:function(){return{password:"",passwordValidationRules:[T("The password is required"),R("This password is too common")],isPasswordTheSame:!1}},methods:Object(k["a"])(Object(k["a"])({},Object(N["b"])(["changePassword","signOut"])),{},{onChangePassword:function(){var n=this;return Object(y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n.$refs.form.validate()){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.changePassword(n.password);case 4:n.isPasswordTheSame=!e.sent;case 5:case"end":return e.stop()}}),e)})))()}})},gn=mn,bn=Object(l["a"])(gn,dn,pn,!1,null,null,null),hn=bn.exports;u()(bn,{VBtn:H["a"],VCard:J["a"],VCardActions:G["a"],VCardText:G["b"],VCardTitle:G["c"],VForm:Y["a"],VSpacer:K["a"]});var fn=a("8c4f"),wn=(a("4de4"),a("e9c4"),a("7db0"),a("f64c")),vn=a.n(wn);r["a"].use(N["a"]);var yn=new N["a"].Store({state:{users:null,currentUserLogin:null},mutations:{SET_USERS:function(n,e){n.users=e},UPDATE_USER:function(n,e){n.users=n.users.filter((function(n){return n.login!==e.login})),n.users.push(e)},ADD_USER:function(n,e){n.users.push(e)},SET_CURRENT_USER_LOGIN:function(n,e){n.currentUserLogin=e}},actions:{loadDatabase:function(n){var e=n.state,a=n.commit;if(null==e.users){var r=localStorage.getItem(z);a("SET_USERS",null!=r?JSON.parse(r):[])}if(null==e.currentUserLogin){var t=localStorage.getItem(D);a("SET_CURRENT_USER_LOGIN",null!==t&&void 0!==t?t:null)}F(jn,yn)},addUser:function(n,e){var a=n.commit,r=n.state;a("ADD_USER",e),localStorage.setItem(z,JSON.stringify(r.users))},updateCurrentUser:function(n,e){var a=n.commit;a("SET_CURRENT_USER_LOGIN",e),null==e?localStorage.removeItem(D):localStorage.setItem(D,e)},signIn:function(n,e){return Object(y["a"])(regeneratorRuntime.mark((function a(){var r,t,s,o,i,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r=n.state,t=n.dispatch,s=e.login,o=e.password,i=vn()(o),l=r.users.find((function(n){return n.login===s&&n.passwordHash===i})),null!=l){a.next=6;break}return a.abrupt("return",!1);case 6:return a.next=8,t("updateCurrentUser",l.login);case 8:return F(jn,yn),a.abrupt("return",!0);case 10:case"end":return a.stop()}}),a)})))()},signUp:function(n,e){return Object(y["a"])(regeneratorRuntime.mark((function a(){var r,t,s,o,i,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r=n.dispatch,t=n.state,n.commit,s=e.login,o=e.password,i=t.users.some((function(n){return n.login===s})),!i){a.next=5;break}return a.abrupt("return",!1);case 5:return l={login:s,passwordHash:vn()(o),passwordChangedDate:(new Date).toISOString()},r("addUser",l),a.next=9,r("updateCurrentUser",l.login);case 9:return F(jn,yn),a.abrupt("return",!0);case 11:case"end":return a.stop()}}),a)})))()},signOut:function(n){return Object(y["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=n.dispatch,e.next=3,a("updateCurrentUser",null);case 3:F(jn,yn);case 4:case"end":return e.stop()}}),e)})))()},changePassword:function(n,e){var a=n.state,r=n.commit,t=n.getters,s=vn()(e);return t.currentUser.passwordHash!==s&&(r("UPDATE_USER",{login:a.currentUserLogin,passwordHash:s,passwordChangedDate:(new Date).toISOString()}),F(jn,yn),!0)}},getters:{isSignedIn:function(n){return null!=n.currentUserLogin},isPasswordExpired:function(n,e){return e.isSignedIn?new Date-new Date(e.currentUser.passwordChangedDate)>L:null},currentUser:function(n){return n.users.find((function(e){return e.login===n.currentUserLogin}))},currentSystemState:function(n,e){return e.isSignedIn?e.isPasswordExpired?$.passwordChange:$.signedIn:$.signedOut}}}),kn=yn;r["a"].use(fn["a"]);var xn=[{path:"/",redirect:{name:"SignIn"}},{path:"/sign-in",name:"SignIn",component:W,meta:{allowedSystemStates:[$.signedOut]}},{path:"/sign-up",name:"SignUp",component:rn,meta:{allowedSystemStates:[$.signedOut]}},{path:"/profile",name:"Profile",component:un,meta:{allowedSystemStates:[$.signedIn]}},{path:"/change-password",name:"ChangePassword",component:hn,meta:{allowedSystemStates:[$.passwordChange]}}],Sn=new fn["a"]({routes:xn});Sn.beforeEach((function(n,e,a){"allowedSystemStates"in n.meta?n.meta.allowedSystemStates.some((function(n){return n===kn.getters.currentSystemState}))?a():F(Sn,kn):a()}));var jn=Sn,On=a("f309");r["a"].use(On["a"]);var Un=new On["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:jn,vuetify:Un,store:kn,render:function(n){return n(f)}}).$mount("#app")},f22e:function(n,e,a){"use strict";a("4369")}});
//# sourceMappingURL=app.e021c32d.js.map