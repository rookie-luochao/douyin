import{u as f,l as N,m as d,n as V}from"./other-BqBusIs2.js";import{u as g,H as C,f as r,v as i,g as B,_ as I}from"./common-Cq4hAAbZ.js";import"./vendor-EcFAmbRN.js";const w=s=>(Vue.pushScopeId("data-v-d326a640"),s=s(),Vue.popScopeId(),s),S={class:"MusicCollect"},D=w(()=>Vue.createElementVNode("span",{class:"f16"},"音乐收藏",-1)),M={class:"content"},x={class:"list"},L=["onClick"],b={class:"music"},z={class:"cover-wrapper"},T={alt:"",class:"cover"},$={key:0,src:d,alt:"",class:"play"},H={key:1,src:V,alt:"",class:"play"},P={class:"desc"},U={class:"name"},A={class:"author"},F={class:"desc-bottom"},W={class:"duration"},j={class:"option"},q=["onClick"],G={key:0,class:"float-play-music"},J={class:"music-wrapper"},K={class:"music"},O={alt:"",class:"cover"},Q={key:0,src:d,alt:"",class:"play"},R={key:1,src:V,alt:"",class:"play"},X={class:"desc"},Y={class:"name"},Z={class:"desc-bottom"},ee={class:"duration"},te={class:"option"},oe=Vue.defineComponent({name:"MusicCollect",__name:"MusicCollect",setup(s){const m=g(),_=f(),e=Vue.reactive({loading:!1,list:[],audio:new Audio,currentItem:null,step:null,process:0});Vue.onMounted(()=>{p(),e.audio.addEventListener("loadedmetadata",()=>{e.currentItem.duration=e.audio.duration,e.step=m.bodyWidth/Math.floor(e.audio.duration)}),e.audio.addEventListener("timeupdate",t=>{e.process=Math.ceil(t.target.currentTime)*e.step})}),Vue.onUnmounted(l);async function p(){e.loading=!0;let t=await C();e.loading=!1,t.success&&(e.list=t.data.music.list)}function a(t,n){n.map(c=>{c.name!==t.name&&(c.is_play=!1)}),t.is_play=!t.is_play,t.is_play?(e.currentItem?e.currentItem.name!==t.name&&(e.audio.pause(),e.audio.src=t.mp3,e.audio.currentTime=0):(e.audio.pause(),e.audio.src=t.mp3,e.audio.currentTime=0),e.audio.play(),e.audio.addEventListener("ended",()=>t.is_play=!1)):l(),e.currentItem=t}function l(){e.audio.pause(),e.audio.removeEventListener("ended",null)}return(t,n)=>{const c=Vue.resolveComponent("BaseHeader"),v=Vue.resolveComponent("Loading"),h=Vue.resolveComponent("no-more"),y=Vue.resolveComponent("dy-button"),u=Vue.resolveDirective("lazy");return Vue.openBlock(),Vue.createElementBlock("div",S,[Vue.createVNode(c,null,{center:Vue.withCtx(()=>[D]),_:1}),Vue.createElementVNode("div",M,[Vue.createElementVNode("div",x,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(e.list,(o,k)=>(Vue.openBlock(),Vue.createElementBlock("div",{class:"item",key:k,onClick:E=>a(o,e.list)},[Vue.createElementVNode("div",b,[Vue.createElementVNode("div",z,[Vue.withDirectives(Vue.createElementVNode("img",T,null,512),[[u,Vue.unref(r)(o.cover)]]),o.is_play?Vue.createCommentVNode("",!0):(Vue.openBlock(),Vue.createElementBlock("img",$)),o.is_play?(Vue.openBlock(),Vue.createElementBlock("img",H)):Vue.createCommentVNode("",!0)]),Vue.createElementVNode("div",P,[Vue.createElementVNode("span",U,Vue.toDisplayString(o.name),1),Vue.createElementVNode("div",A,Vue.toDisplayString(o.author),1),Vue.createElementVNode("div",F,[Vue.createElementVNode("div",W,Vue.toDisplayString(Vue.unref(i)(o.duration)),1)])])]),Vue.createElementVNode("div",j,[Vue.createElementVNode("img",{src:N,alt:"",onClick:Vue.withModifiers(E=>Vue.unref(_)("/home/music",o),["stop"])},null,8,q)])],8,L))),128))]),e.loading?(Vue.openBlock(),Vue.createBlock(v,{key:0,"is-full-screen":!1})):(Vue.openBlock(),Vue.createBlock(h,{key:1,class:"mb7r"}))]),e.currentItem?(Vue.openBlock(),Vue.createElementBlock("div",G,[Vue.createElementVNode("div",{class:"process",style:Vue.normalizeStyle({width:e.process+"px"})},null,4),Vue.createElementVNode("div",J,[Vue.createElementVNode("div",K,[Vue.createElementVNode("div",{class:"cover-wrapper",onClick:n[0]||(n[0]=o=>a(e.currentItem,e.list))},[Vue.withDirectives(Vue.createElementVNode("img",O,null,512),[[u,Vue.unref(r)(e.currentItem.cover)]]),e.currentItem.is_play?Vue.createCommentVNode("",!0):(Vue.openBlock(),Vue.createElementBlock("img",Q)),e.currentItem.is_play?(Vue.openBlock(),Vue.createElementBlock("img",R)):Vue.createCommentVNode("",!0)]),Vue.createElementVNode("div",X,[Vue.createElementVNode("span",Y,Vue.toDisplayString(e.currentItem.name),1),Vue.createElementVNode("div",Z,[Vue.createElementVNode("div",ee,Vue.toDisplayString(Vue.unref(i)(e.currentItem.duration)),1)])])]),Vue.createElementVNode("div",te,[Vue.createVNode(y,{type:"primary",size:"small",onClick:Vue.unref(B)},{default:Vue.withCtx(()=>[Vue.createTextVNode("使用")]),_:1},8,["onClick"])])])])):Vue.createCommentVNode("",!0)])}}}),ae=I(oe,[["__scopeId","data-v-d326a640"]]);export{ae as default};
