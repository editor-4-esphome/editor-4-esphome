"use strict";(self.webpackChunkx=self.webpackChunkx||[]).push([["6534"],{8504:function(e,t,a){a.d(t,{diagram:()=>k});var i=a(7684),l=a(2901),r=a(1559),n=a(5587),s=a(3194),o=a(7818),p=n.vZ.pie,c={sections:new Map,showData:!1,config:p},d=c.sections,g=c.showData,u=structuredClone(p),h=(0,n.eW)(()=>structuredClone(u),"getConfig"),f=(0,n.eW)(()=>{d=new Map,g=c.showData,(0,n.ZH)()},"clear"),x=(0,n.eW)(({label:e,value:t})=>{d.has(e)||(d.set(e,t),n.cM.debug(`added new section: ${e}, with value: ${t}`))},"addSection"),m=(0,n.eW)(()=>d,"getSections"),w=(0,n.eW)(e=>{g=e},"setShowData"),S=(0,n.eW)(()=>g,"getShowData"),$={getConfig:h,clear:f,setDiagramTitle:n.g2,getDiagramTitle:n.Kr,setAccTitle:n.GN,getAccTitle:n.eu,setAccDescription:n.U$,getAccDescription:n.Mx,addSection:x,getSections:m,setShowData:w,getShowData:S},y=(0,n.eW)((e,t)=>{(0,i.A)(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},"populateDb"),C={parse:(0,n.eW)(async e=>{let t=await (0,s.Qc)("pie",e);n.cM.debug(t),y(t,$)},"parse")},T=(0,n.eW)(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),W=(0,n.eW)(e=>{let t=[...e.entries()].map(e=>({label:e[0],value:e[1]})).sort((e,t)=>t.value-e.value);return(0,o.ve8)().value(e=>e.value)(t)},"createPieArcs"),k={parser:C,db:$,renderer:{draw:(0,n.eW)((e,t,a,i)=>{n.cM.debug("rendering pie chart\n"+e);let s=i.db,p=(0,n.nV)(),c=(0,l.Rb)(s.getConfig(),p.pie),d=(0,r.P)(t),g=d.append("g");g.attr("transform","translate(225,225)");let{themeVariables:u}=p,[h]=(0,l.VG)(u.pieOuterStrokeWidth);h??=2;let f=c.textPosition,x=(0,o.Nb1)().innerRadius(0).outerRadius(185),m=(0,o.Nb1)().innerRadius(185*f).outerRadius(185*f);g.append("circle").attr("cx",0).attr("cy",0).attr("r",185+h/2).attr("class","pieOuterCircle");let w=s.getSections(),S=W(w),$=[u.pie1,u.pie2,u.pie3,u.pie4,u.pie5,u.pie6,u.pie7,u.pie8,u.pie9,u.pie10,u.pie11,u.pie12],y=(0,o.PKp)($);g.selectAll("mySlices").data(S).enter().append("path").attr("d",x).attr("fill",e=>y(e.data.label)).attr("class","pieCircle");let C=0;w.forEach(e=>{C+=e}),g.selectAll("mySlices").data(S).enter().append("text").text(e=>(e.data.value/C*100).toFixed(0)+"%").attr("transform",e=>"translate("+m.centroid(e)+")").style("text-anchor","middle").attr("class","slice"),g.append("text").text(s.getDiagramTitle()).attr("x",0).attr("y",-200).attr("class","pieTitleText");let T=g.selectAll(".legend").data(y.domain()).enter().append("g").attr("class","legend").attr("transform",(e,t)=>"translate(216,"+(22*t-22*y.domain().length/2)+")");T.append("rect").attr("width",18).attr("height",18).style("fill",y).style("stroke",y),T.data(S).append("text").attr("x",22).attr("y",14).text(e=>{let{label:t,value:a}=e.data;return s.getShowData()?`${t} [${a}]`:t});let k=512+Math.max(...T.selectAll("text").nodes().map(e=>e?.getBoundingClientRect().width??0));d.attr("viewBox",`0 0 ${k} 450`),(0,n.v2)(d,450,k,c.useMaxWidth)},"draw")},styles:T}}}]);