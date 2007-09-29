/* http://keith-wood.name/timeEntry.html
   Time entry for jQuery v1.2.4.
   Written by Keith Wood (kbwood@iprimus.com.au) June 2007.
   Dual licensed under the GPL (http://www.gnu.org/licenses/gpl-3.0.txt) and 
   CC (http://creativecommons.org/licenses/by/3.0/) licenses. 
   "Share or Remix it but please Attribute the authors." */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('m o=t;(n($){n 1I(){7.2V=0;7.1S=[];7.H=[];7.1A=[];7.1A[\'\']={15:y,Y:\':\',1d:\'\',W:[\'41\',\'3R\'],2A:[\'3E\',\'3z 2j\',\'3s 2j\',\'3j\',\'3g\']};7.Z={2a:\'\',1l:y,1M:[1,1,1],2U:S,2N:t,2M:t,2I:\'o.3W\',1m:[20,20,8],2y:y,1R:[3C,3y],2n:t};$.13(7.Z,7.1A[\'\'])}$.13(1I.2i,{1L:\'3n\',2f:n(a){m b=7.2V++;7.1S[b]=a;r b},C:n(a){r 7.1S[a]||a},34:n(a){16(7.Z,a||{})},1P:n(a){m b=(a.1z&&a.1z.1s()==\'1w\'?a:7);p(o.J==b){r}p(o.1W(b)){r}m c=o.C(b.z);c.v=$(b);o.J=b;o.U=t;m d=c.q(\'2n\');16(c.17,(d?d(b):{}));c.1o()},2J:n(a){o.U=o.J;o.J=t},2G:n(a){m b=a.1V;m c=o.C(b.z);m d=c.q(\'Y\').x+2;c.s=0;p($.E.1T){m e=a.3J;c.s=(e>B.M(1,c.I)*d+2?c.u:B.3B(e/d))}F p($.E.1k){m f=b.1e;T(m g=0;g<=B.M(1,c.I,c.u);g++){m h=(g!=c.u?(g*d)+2:(c.u*d)+c.q(\'1d\').x+c.q(\'W\')[0].x);b.1e=f.X(0,h);m i=b.1K();p(a.3q<i.3m){c.s=g;w}}b.1e=f}F p($.E.1E||$.E.3i){m f=b.1e;T(m g=0;g<=B.M(1,c.I,c.u);g++){m j=(g!=c.u?(g*d):(c.u*d)+c.q(\'1d\').x);p(j>=b.3h){c.s=g;w}}}c.Q()},2d:n(a){p(a.1G>=48){r S}m b=o.C(7.z);2b(a.1G){A 9:r(a.33?b.1i(S):b.1c(S));A 35:p(a.23){b.1g(\'\')}F{b.s=B.M(1,b.I,b.u);b.G(0)}w;A 36:p(a.23){b.R()}F{b.s=0;b.G(0)}w;A 37:b.1i(y);w;A 38:b.G(+1);w;A 39:b.1c(y);w;A 40:b.G(-1);w;A 46:b.1g(\'\');w}r y},2E:n(a){m b=2Z.2X(a.2W==4m?a.1G:a.2W);p(b<\' \'){r S}m c=o.C(7.z);c.2S(b);r y},2R:n(a,b){b=($.E.1E?-b/B.1Y(b):b);m c=o.C(7.z);c.G(b);a.4g()},2Q:n(b,c){m d=$(b);p(7.2T(d,7.1L)){r}m e=c.q(\'2I\');m f=c.q(\'4b\');m g=c.q(\'1m\');m h=c.q(\'2a\');m i=(!e?t:$(\'<K 1q="1X" 47="\'+c.1p+\'" 45="42: 3Z-3Y; 2H: 3X(\\\'\'+e+\'\\\') 0 0 3U-3T; \'+\'3S: \'+g[0]+\'1b; 3Q: \'+g[1]+\'1b;\'+($.E.1T?\' 2D-3P: \'+g[0]+\'1b; 2D-3O: \'+(g[1]-18)+\'1b;\':\'\')+\'"></K>\'));d.3N(\'<K 1q="3M"></K>\').2B(i||\'\').2B(h?\'<K 1q="3L">\'+h+\'</K>\':\'\');d.3K(7.1L).2z(7.1P).3I(7.2J).3H(7.2G).3G(7.2d).3F(7.2E);p($.E.1T){d.2x(\'1w\',n(a){c.1o()})}p($.E.1k){d.2x(\'3D\',n(a){21(n(){c.1o()},1)})}p(c.q(\'2U\')&&$.2w.2v){d.2v(7.2R)}d[0].z=c.1p;p(i){i.3A(7.2u).2t(7.1Z).2q(7.1Z).3x(7.2p);i[0].z=c.1p}},2T:n(a,b){m c=a.3w(\'1q\');r(c&&c.1x(b)>-1)},3v:n(c){c=(c.1O?c:$(c));c.1u(n(){7.2m=y;$(\'../K.1X\',7).1N(\'2l\',\'1.0\');m b=7;o.H=$.2k(o.H,n(a){r(a==b?t:a)})})},3u:n(c){c=(c.1O?c:$(c));c.1u(n(){7.2m=S;$(\'../K.1X\',7).1N(\'2l\',\'0.5\');m b=7;o.H=$.2k(o.H,n(a){r(a==b?t:a)});o.H[o.H.x]=7})},1W:n(a){T(m i=0;i<7.H.x;i++){p(7.H[i]==a){r S}}r y},3t:n(a,b){a=(a.1O?a:$(a))[0];m c=7.C(a.z);p(c){m d=c.1h();16(c.17,b||{});p(d){c.R(L V(0,0,0,d[0],d[1],d[2]))}}},3p:n(a,b){m c=7.C(a.z);p(c){c.v=$(a);c.R(b)}},3o:n(a){m b=7.C(a.z);m c=(b?b.1h():t);r(!c?t:L V(0,0,0,c[0],c[1],c[2]))},2p:n(a){m b=o.14(a);m c=o.C(b.z);b.3l=c.q(\'2A\')[o.1F(c,a)]},2u:n(a){m b=o.14(a);m c=b.3k;p(o.1W(c)){r}p(c==o.U){o.J=c;o.U=t}m d=o.C(c.z);o.1P(c);m e=o.1F(d,a);o.1D(d,b,e);o.1B(d,e);m f=d.q(\'1R\');p(e>=3&&f[0]){o.1H=21(n(){o.1C(d,e)},f[0]);$(b).2e(\'2q\',o.1J).2e(\'2t\',o.1J)}},1B:n(a,b){2b(b){A 0:a.R();w;A 1:a.1i(y);w;A 2:a.1c(y);w;A 3:a.G(+1);w;A 4:a.G(-1);w}},1C:n(a,b){o.J=o.U;7.1B(a,b);7.1H=21(n(){o.1C(a,b)},a.q(\'1R\')[1])},1J:n(a){3f(o.1H)},1Z:n(a){m b=o.14(a);m c=o.C(b.z);o.1D(c,b,-1);p(!$.E.1E){o.J=o.U}p(o.J){c.Q()}},14:n(a){r(a.1V?a.1V:a.3e)},1F:n(a,b){m c=7.14(b);m d=7.2h(c);m e=7.2g(c);m f=a.q(\'2y\');m g=(f?2c:b.3d+e[0]-d[0]-($.E.1k?1:0));m h=b.3r+e[1]-d[1]-($.E.1k?1:0);m i=a.q(\'1m\');m j=(f?2c:i[0]-g);m k=i[1]-h;p(i[2]>0&&B.1Y(g-j)<=i[2]&&B.1Y(h-k)<=i[2]){r 0}m l=B.3c(g,h,j,k);r(l==g?1:(l==j?2:(l==h?3:4)))},1D:n(a,b,c){$(b).1N(\'2H-3b\',\'-\'+((c+1)*a.q(\'1m\')[0])+\'1b 3a\')},2h:n(a){m b=1j=0;p(a.2s){b=a.2o;1j=a.2r;32(a=a.2s){m c=b;b+=a.2o;p(b<0){b=c}1j+=a.2r}}r[b,1j]},2g:n(a){r[B.M(19.29.28,19.27.28),B.M(19.29.25,19.27.25)]}});n 1Q(a){7.1p=o.2f(7);7.D=0;7.O=0;7.N=0;7.v=t;7.17=16({},a||{})}$.13(1Q.2i,{q:n(a){r(7.17[a]!=t?7.17[a]:o.Z[a])},1o:n(){m a=7.1h();m b=7.q(\'1l\');p(a){7.D=a[0];7.O=a[1];7.N=a[2]}F{m c=7.1n();7.D=c[0];7.O=c[1];7.N=(b?c[2]:0)}7.I=(b?2:-1);7.u=(7.q(\'15\')?-1:(b?3:2));7.1a=\'\';7.s=0;p(7.v.P()!=\'\'){7.1y()}},1h:n(){m a=(7.v?7.v.P():\'\');m b=7.q(\'Y\');m c=a.31(b);p(b==\'\'&&a!=\'\'){c[0]=a.X(0,2);c[1]=a.X(2,4);c[2]=a.X(4,6)}m d=7.q(\'W\');p(c.x>=2){m e=(a.1x(d[0])>-1);m f=(a.1x(d[1])>-1);m g=1v(c[0],10);g=(1U(g)?0:g);g=((e||f)&&g==12?0:g)+(f?12:0);m h=1v(c[1],10);h=(1U(h)?0:h);m i=(c.x>=3?1v(c[2],10):0);i=(1U(i)||!7.q(\'1l\')?0:i);r[g,h,i]}r t},1n:n(a){m b=(a!=t);p(!b){m c=L V();a=[c.22(),c.2C(),c.2L()]}m d=y;m e=7.q(\'1M\');T(m i=0;i<e.x;i++){p(d){a[i]=0}F p(e[i]>1){a[i]=B.3V(a[i]/e[i])*e[i];d=!b}}r a},1y:n(){m a=7.q(\'15\');m b=7.q(\'Y\');m c=(7.1f(a?7.D:((7.D+11)%12)+1)+b+7.1f(7.O)+(7.q(\'1l\')?b+7.1f(7.N):\'\')+(a?\'\':7.q(\'1d\')+7.q(\'W\')[(7.D<12?0:1)]));7.1g(c);7.Q()},Q:n(){p(!7.v){r}m a=7.v[0];m b=7.q(\'Y\');m c=b.x+2;m d=(7.s!=7.u?(7.s*c):(7.u*c)-b.x+7.q(\'1d\').x);m e=d+(7.s!=7.u?2:7.q(\'W\')[0].x);p(a.2F){a.2F(d,e)}F p(a.1K){m f=a.1K();f.30(\'2K\',d);f.2Y(\'2K\',e-7.v.P().x);f.43()}a.2z()},1f:n(a){r(a<10?\'0\':\'\')+a},1g:n(a){7.v.P(a);7.v.44(\'4n\')},1i:n(a){m b=(7.v.P()==\'\'||7.s==0);p(!b){7.s--}7.Q();7.1a=\'\';r(b&&a)},1c:n(a){m b=(7.v.P()==\'\'||7.s==B.M(1,7.I,7.u));p(!b){7.s++}7.Q();7.1a=\'\';r(b&&a)},G:n(a){p(7.v.P()==\'\'){a=0}m b=7.q(\'1M\');7.R(L V(0,0,0,7.D+(7.s==0?a*b[0]:0)+(7.s==7.u?a*12:0),7.O+(7.s==1?a*b[1]:0),7.N+(7.s==7.I?a*b[2]:0)))},R:n(a){p(!a){m b=7.1n();a=L V(0,0,0,b[0],b[1],b[2])}m a=7.1t(a);m c=7.1t(7.q(\'2N\'));m d=7.1t(7.q(\'2M\'));a=(c&&a<c?c:(d&&a>d?d:a));7.D=a.22();7.O=a.2C();7.N=a.2L();7.1y()},1t:n(a){p(!a){r t}a.4l(4j);a.4i(1-1);a.4h(26);r a},2S:n(a){p(a==7.q(\'Y\')){7.1c(y)}F p(a>=\'0\'&&a<=\'9\'){m b=(7.1a+a)*1;m c=(7.s==0&&((7.q(\'15\')&&b<24)||(b>=1&&b<=12))?b:7.D);m d=(7.s==1&&b<2P?b:7.O);m e=(7.s==7.I&&b<2P?b:7.N);m f=7.1n([c,d,e]);7.R(L V(0,0,0,f[0],f[1],f[2]));7.1a=a}F p(!7.q(\'15\')){m g=7.q(\'W\');p((a==g[0].X(0,1).1s()&&7.D>=12)||(a==g[1].X(0,1).1s()&&7.D<12)){m h=7.s;7.s=7.u;7.G(+1);7.s=h;7.Q()}}}});n 16(a,b){$.13(a,b);T(m c 2O b){p(b[c]==t){a[c]=t}}r a}$.2w.o=n(e){r 7.1u(n(){m a=7.1z.1s();p(a==\'1w\'){m b=t;T(1r 2O o.Z){m c=7.4f(\'4e:\'+1r);p(c){b=b||{};4d{b[1r]=4c(c)}4k(4a){b[1r]=c}}}m d=(d&&!b?d:L 1Q(!b?e:$.13(b,e)));o.2Q(7,d)}})};$(19).49(n(){o=L 1I()})})(4o);',62,273,'|||||||this|||||||||||||||var|function|timeEntry|if|_get|return|_field|null|_ampmField|_input|break|length|false|_timeId|case|Math|_getInst|_selectedHour|browser|else|_adjustField|_disabledInputs|_secondField|_lastInput|span|new|max|_selectedSecond|_selectedMinute|val|_showField|_setTime|true|for|_blurredInput|Date|ampmNames|substring|separator|_defaults||||extend|_getSpinnerTarget|show24Hours|extendRemove|_settings||document|_lastChr|px|_nextField|ampmPrefix|value|_formatNumber|_setValue|_extractTime|_previousField|curTop|msie|showSeconds|spinnerSize|_constrainTime|_parseTime|_id|class|attrName|toLowerCase|_normaliseTime|each|parseInt|input|indexOf|_showTime|nodeName|regional|_actionSpinner|_repeatSpinner|_changeSpinner|opera|_getSpinnerRegion|keyCode|_timer|TimeEntry|_releaseSpinner|createTextRange|markerClassName|timeSteps|css|jquery|_doFocus|TimeEntryInstance|spinnerRepeat|_inst|mozilla|isNaN|target|isDisabled|timeEntry_control|abs|_endSpinner||setTimeout|getHours|ctrlKey||scrollTop||body|scrollLeft|documentElement|appendText|switch|99|_doKeyDown|one|_register|_findScroll|_findPos|prototype|field|map|opacity|disabled|fieldSettings|offsetLeft|_describeSpinner|mouseout|offsetTop|offsetParent|mouseup|_handleSpinner|mousewheel|fn|bind|spinnerIncDecOnly|focus|spinnerTexts|after|getMinutes|padding|_doKeyPress|setSelectionRange|_doDblClick|background|spinnerImage|_doBlur|character|getSeconds|maxTime|minTime|in|60|_connectTimeEntry|_doMouseWheel|_handleKeyPress|_hasClass|useMouseWheel|_nextId|charCode|fromCharCode|moveEnd|String|moveStart|split|while|shiftKey|setDefaults||||||0px|position|min|clientX|srcElement|clearTimeout|Decrement|selectionStart|safari|Increment|previousSibling|title|boundingWidth|hasTimeEntry|getTimeFor|setTimeFor|offsetX|clientY|Next|reconfigureFor|disableFor|enableFor|attr|mousemove|250|Previous|mousedown|floor|500|paste|Now|keypress|keydown|dblclick|blur|rangeOffset|addClass|timeEntry_append|timeEntry_wrap|wrap|top|left|height|PM|width|repeat|no|round|png|url|block|inline||AM|display|select|trigger|style||_timeid||ready|err|spinnerText|eval|try|time|getAttribute|preventDefault|setDate|setMonth|2001|catch|setFullYear|undefined|change|jQuery'.split('|'),0,{}))