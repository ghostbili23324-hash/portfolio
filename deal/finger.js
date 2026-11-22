(function(){
if(matchMedia("(prefers-reduced-motion:reduce)").matches)return;
var lg=document.querySelector("header .logo"),sb=document.querySelector("header .search");if(!lg||!sb)return;
var W=Math.min(innerWidth,520),H=innerHeight;
var it=[{e:lg,d:320,t:.1,u:1.3,x:.3},{e:sb,d:420,t:.55,u:1.4,x:.55}];
it.forEach(function(o){var r=o.e.getBoundingClientRect();o.b=r.bottom;o.cx=r.left+r.width*o.x;o.e.style.willChange="transform,opacity";o.e.style.opacity=0;o.e.style.transform="translateY("+o.d+"px)"});
function eo(p){var a=1.25,b=a+1,q=p-1;return 1+b*q*q*q+a*q*q}
function ss(a,b,x){x=Math.min(1,Math.max(0,(x-a)/(b-a)));return x*x*(3-2*x)}
var c=document.createElement("canvas");c.width=W;c.height=H;
c.style.cssText="position:fixed;left:0;top:0;width:"+W+"px;height:"+H+"px;z-index:30;pointer-events:none";
var g=c.getContext("webgl",{alpha:true,premultipliedAlpha:true}),ok=!!g,U={};
if(ok){
var vs="attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}";
var fs="#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n"+
"uniform vec2 R;uniform vec3 F0,F1;const float hw=24.;const vec3 L=vec3(-.4,-.6,.7);"+
"float shd(vec2 p,vec3 F){return exp(-pow(length((p-vec2(F.x+8.,F.y+hw*3.))/vec2(hw*1.4,hw*3.4)),2.))*.2*F.z;}"+
"vec4 fg(vec2 p,vec3 F){if(F.z<.01)return vec4(0.);vec2 cb=vec2(F.x,F.y+hw);"+
"float d=p.y>cb.y?abs(p.x-F.x)-hw:length(p-cb)-hw;float fa=1.-smoothstep(-1.,1.,d);if(fa<=0.)return vec4(0.);"+
"vec3 N;if(p.y>cb.y){float nx=clamp((p.x-F.x)/hw,-1.,1.);N=vec3(nx,0.,sqrt(1.-nx*nx));}"+
"else{vec2 q=clamp((p-cb)/hw,-1.,1.);N=vec3(q,sqrt(max(0.,1.-dot(q,q))));}"+
  "float df=clamp(dot(N,L),0.,1.);vec3 sk=mix(vec3(.9,.52,.46),vec3(1.,.85,.79),df);"+
"float sp=pow(max(dot(reflect(-L,N),vec3(0.,0.,1.)),0.),22.)*.45;"+
"vec2 nl=(p-vec2(F.x,F.y+hw*1.15))/vec2(hw*.58,hw*.75);float nail=1.-smoothstep(.85,1.,length(nl));"+
"sk=mix(sk,vec3(1.,.92,.9),nail*.45)+sp;return vec4(sk,1.)*fa*F.z;}"+
"void main(){vec2 p=vec2(gl_FragCoord.x,R.y-gl_FragCoord.y);"+
"float s=clamp(shd(p,F0)+shd(p,F1),0.,.3);vec4 o=vec4(vec3(.1,.08,.2)*s,s);"+
"vec4 a=fg(p,F0);o=a+o*(1.-a.a);a=fg(p,F1);o=a+o*(1.-a.a);gl_FragColor=o;}";
function S(t,s){var h=g.createShader(t);g.shaderSource(h,s);g.compileShader(h);return h}
var pg=g.createProgram();g.attachShader(pg,S(g.VERTEX_SHADER,vs));g.attachShader(pg,S(g.FRAGMENT_SHADER,fs));g.linkProgram(pg);
if(!g.getProgramParameter(pg,g.LINK_STATUS))ok=false;else{
g.useProgram(pg);var b=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,b);g.bufferData(g.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),g.STATIC_DRAW);
var al=g.getAttribLocation(pg,"a");g.enableVertexAttribArray(al);g.vertexAttribPointer(al,2,g.FLOAT,!1,0,0);
["R","F0","F1"].forEach(function(n){U[n]=g.getUniformLocation(pg,n)});document.body.appendChild(c)}}
var t0=performance.now();
function fr(){var t=(performance.now()-t0)/1000,fin=1;
it.forEach(function(o,i){var q=t-o.t,off,fy,fa;
if(q<0){off=o.d;fy=o.b+o.d+140;fa=0;fin=0}
else if(q<.35){var k=ss(0,1,q/.35);off=o.d;fy=o.b+o.d+6+140*(1-k);fa=k;fin=0}
else{var p=Math.min(1,(q-.35)/o.u);off=o.d*(1-eo(p));fy=o.b+off+6;fa=1;
if(p>=1){var r=ss(0,1,(q-.35-o.u)/.5);fy+=170*r;fa=1-r;if(r<1)fin=0}else fin=0}
o.e.style.transform="translateY("+off+"px)";o.e.style.opacity=ss(0,.25,Math.max(0,q-.35)/o.u);   o.f=[o.cx,fy,fa]});
if(ok){g.viewport(0,0,W,H);g.clearColor(0,0,0,0);g.clear(g.COLOR_BUFFER_BIT);
g.uniform2f(U.R,W,H);g.uniform3f(U.F0,it[0].f[0],it[0].f[1],it[0].f[2]);g.uniform3f(U.F1,it[1].f[0],it[1].f[1],it[1].f[2]);
g.drawArrays(g.TRIANGLE_STRIP,0,4)}
if(fin){it.forEach(function(o){o.e.style.transform="";o.e.style.opacity="";o.e.style.willChange=""});if(c.parentNode)c.remove();return}
requestAnimationFrame(fr)}
fr();
})();
