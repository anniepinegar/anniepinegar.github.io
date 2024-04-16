var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(n){for(var t,r,i=1,u=arguments.length;i<u;i++){t=arguments[i];for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},__assign.apply(this,arguments)},__spreadArray=this&&this.__spreadArray||function(n,t,i){if(i||arguments.length===2)for(var r=0,f=t.length,u;r<f;r++)!u&&r in t||(u||(u=Array.prototype.slice.call(t,0,r)),u[r]=t[r]);return n.concat(u||Array.prototype.slice.call(t))},ColPickerBeh,FavRequest;(function(n){n[n.All=0]="All";n[n.Data=1]="Data"})(ColPickerBeh||(ColPickerBeh={})),function(n){function s(n){return"image:cid="+n.cid}function h(n){return"product:cid="+n.cid}function c(n){return"video:mid="+n.mid}function l(n){return"webdoc:url="+(n.url||n.purl)}function a(n){return n.id}function v(n){return"recipe:sid="+(n.sid||n.entityId)}function i(n){var t=n.collectionType,i=n.id,r=n.title;return t?{PredefinedCollection:Constants.PredefinedCollections[t]}:i?{collectionId:i}:{collectionTitle:r}}function y(n,t){return __assign(__assign({},n),{type:t,MediaId:n.mid,MediaUrl:n.murl,PageUrl:n.purl})}function p(n){var i,t=[];return n.tid?t.push({ThumbnailId:n.tid,Width:n.tw,Height:n.th}):n.turl?t.push({ExternalThumbnailUrl:n.turl,Width:n.tw,Height:n.th}):n.thmb&&t.push({Thumbnail:n.thmb}),{Id:n.id,ContentId:n.contentId,FriendlyDomainName:n.fdn,Title:n.title,ThumbnailInfo:t,ClickThroughUrl:n.url,ItemTagPath:n.itemtagpath,CustomData:(i=n.customdata)!==null&&i!==void 0?i:null,Note:n.note}}function w(n,t,i,r){return{type:t,collectionItemId:i(n),collection:r}}function b(n,t,i){return{Id:t(n),SourceCollectionId:i.collectionId}}function k(n){var u,t,f,e,o;return n[0]||(n=[n]),t=n[0],((u=t.Items)===null||u===void 0?void 0:u.length)>0?f=t.Items:(e=r(n,!0),f=__spreadArray(__spreadArray([],e.items,!0),e.itemReferences,!0)),o={Items:f,TargetCollection:t.targetCollection||i(t.specifier||t.Specifier)},t.position!==undefined&&t.position!==null&&(o.Position=t.position),o}function d(n){n[0]||(n=[n]);var t=n[0],u=r(n,!0);return{Items:__spreadArray(__spreadArray([],u.items,!0),u.itemReferences,!0),TargetCollection:i(t.specifier||t.Specifier)}}function g(n){var t={};return n.itemReferences||n.items?t=n:(n[0]||(n=[n]),t=r(n)),{ItemReferences:t.itemReferences,Items:t.items}}function r(n,t){for(var o,it,rt,ut,k,ft,gt,d,et,ot,g,st,ni,nt,ht,ti,u=[],ct=[],tt=0,lt=n;tt<lt.length;tt++){var r=lt[tt],at=r.images,vt=r.Images,yt=r.videos,pt=r.Videos,wt=r.entities,bt=r.specifier,kt=r.webresults,dt=r.generics,f=bt&&!t?i(bt):null,e=t?y:w,ii=t?p:b;if(at||vt)for(o=0,it=at||vt;o<it.length;o++)rt=it[o],ut=rt.intent==="Shopping",u.push(e(rt,ut?"product":"image",ut?h:s,f));if(yt||pt)for(k=0,ft=yt||pt;k<ft.length;k++)gt=ft[k],u.push(e(gt,"video",c,f));if(wt)for(d=0,et=wt;d<et.length;d++)ot=et[d],ot.intent==="Recipe"&&u.push(e(ot,"recipe",v,f));if(kt)for(g=0,st=kt;g<st.length;g++)ni=st[g],u.push(e(ni,"webdoc",l,f));if(dt)for(nt=0,ht=dt;nt<ht.length;nt++)ti=ht[nt],ct.push(ii(ti,a,f))}return{itemReferences:u,items:ct}}function nt(n){var t=r(n.sources);return{targetCollection:i(n.destination),itemReferences:t.itemReferences,Items:t.items}}function tt(n){for(var o,u=[],f=r(n.sources),t=0,e=n.targets;t<e.length;t++)o=e[t],u.push(i(o));return{targetCollections:u,itemReferences:f.itemReferences,Items:f.items}}function it(n){return{targetCollections:[{collectionId:n.id}]}}function rt(n){var t={collectionTitle:n.title};return n.collectionTagPath&&(t.collectionTagPath=n.collectionTagPath),n.customData&&(t.customData=n.customData),{targetCollection:t}}function ut(n){return{targetCollection:{collectionId:n.CollectionId},title:n.NewTitle}}function ft(n){return{targetCollection:{collectionId:n.id}}}function et(n){return{shareId:n.id}}function ot(n){return n}function st(n){return n}function ht(n){return n}function ct(n){var t=r([n]);return{collectionItemType:u,itemReferences:t.itemReferences,items:t.items}}function lt(n){var f,t={collectionItemType:n.collectionItemType||u},r,e,o;if(((f=n.targetCollections)===null||f===void 0?void 0:f.length)>0)for(t.targetCollections=[],r=0,e=n.targetCollections;r<e.length;r++)o=e[r],t.targetCollections.push(i(o));return n.collOffset&&(t.collOffset=n.collOffset),n.maxItemsToFetch&&(t.maxItemsToFetch=n.maxItemsToFetch),n.shouldFilterKCT&&(t.shouldFilterKCT=n.shouldFilterKCT),n.shouldFetchMetadata&&(t.shouldFetchMetadata=n.shouldFetchMetadata),t}function at(n,t,i,r,u,f,e){return f===void 0&&(f=!1),e===void 0&&(e=""),new Promise(function(o,s){var c,l,a,v,h;if(!n)return s();n=n+t;c={};r&&r.forEach(function(t,i){n=PrismUtils.appendUrlParam(i,t,n)});u&&(c.Comp=u);_G&&(c.PIG=_G.IG);f&&(c.lock="1");l=kt();l&&(c.sid=l);for(a in c)n=PrismUtils.appendUrlParam(a,c[a],n);e&&(v=n.indexOf("?")!=-1?"&":"?",n=n+v+e);typeof frAddCommonPersistedParams=="function"&&(n=frAddCommonPersistedParams(n));i=i===null?"":i;h=sj_gx();h.open("POST",n,!0);h.withCredentials=!0;h.setRequestHeader("Content-type","application/json");l&&h.setRequestHeader("SID",l);vt(h);h.onreadystatechange=function(){if(h.readyState==4)if(h.status==200)try{var n=JSON.parse(yt(h.response||h.responseText));o(n)}catch(t){s()}else s()};h.send(JSON.stringify(i))})}function vt(n){var t;_G&&((t=_G.favConfig)===null||t===void 0?void 0:t.requestHeaders)&&_G.favConfig.requestHeaders.forEach(function(t,i){return n.setRequestHeader(i,t)})}function yt(n){for(var t=n,r,i;(r=t.indexOf("<!--<![CDATA["))>=0;){if(i=t.indexOf("]\]>-->"),i<0)break;t=t.substr(0,r)+t.substr(i+6)}return t}function t(n,t,i){return i===void 0&&(i=o),function(r,u,f,e,o){return u===void 0&&(u=""),f===void 0&&(f=!1),e===void 0&&(e=null),o===void 0&&(o=""),at(i,n,t?t(r):r,e,u,f,o)}}function pt(){}function wt(){}function bt(){}function kt(){return typeof sj_cook!="undefined"?_G.SID||sj_cook.get("_SS","SID"):undefined}function dt(n){var t,i;if(!n)return null;if(t=n===null||n===void 0?void 0:n.content,!t)return n.collectionItemId;i=n.collectionItemId;switch(t._type){case"GenericItem":i=t.contentId;break;case"ImageObject":i=t.imageId;break;case"VideoObject":i=t.videoId}return i}function gt(n){_G&&(_G.favConfig=n)}function ni(){var n={};return _G.favConfig&&(n.requestHeaders=new Map(JSON.parse(JSON.stringify(Array.from(_G.favConfig.requestHeaders))))),n}var u="all",f=typeof _G!="undefined"&&(_G===null||_G===void 0?void 0:_G.hst)&&_d.location.host!=="localhost"?_G.hst:"",e=f+"/mysaves/",o=e+"collections/";n.changeTitle=t("rename",ut);n.addItem=t("items/add",k);n.updateItems=t("items/update",d);n.deleteItems=t("items/delete",g);n.deleteCollection=t("delete",it);n.useForRec=pt;n.moveItems=t("items/move",nt);n.copyItems=t("items/copy",tt);n.getStatus=t("items/status",ct);n.reorderItems=t("items/reorder",ht);n.getCollectionPicker=wt;n.shareCollection=t("share",ft);n.unshareCollection=t("unshare",et);n.createCollection=t("create",rt);n.getCollection=t("get",lt);n.reportMigrationStatus=t("migrate/status",null);n.reorderCollections=t("reorder",ot);n.getSuggestedTitle=t("suggest",st);n.setRequestType=bt;n.extractContentId=dt;n.configure=gt;n.getConfiguration=ni}(FavRequest||(FavRequest={}))