var RewardsCreditRefresh;(function(n){function r(t,i,r,u,f,e,o,s,h,c,l,a,v,y){sj_cook.set(t,i,r.toString(),!1,"/");sj_cook.set(t,u,f.toString(),!1,"/");sj_cook.set(t,e,o.toString(),!1,"/");sj_cook.set(t,s,h.toString(),!1,"/");sj_cook.set(t,c,l.toString(),!1,"/");sj_cook.set(t,a,v.toString(),!1,"/");sj_evt.fire("RewardsCookieUpdated");sj_evt.bind("identityHeaderShown",function(){return n.RewardsHeaderAnim(o,r,f,y)},1)}function u(n,r,u,f){var c;u=u||r;var o=_ge("id_rh"),e=_ge("rh_animcrcl"),l=_ge("id_rc");if(o&&l&&(e||_ge("givemuid_heart"))&&!(r<0)&&!(r<n)&&!(u<=0)){var a=800,v=r-n,s=Math.min(100,100*(r/u)),h=e&&s>=100&&n<u,y=v>0,p=Date.now();s>=100&&Lib.CssClass.add(o,"rh_reedm");e&&Lib.CssClass.add(e,"anim");c=function(u){if(u){var k=Date.now(),w=k-p,b=Math.min(w/a,1),d=h?t*b:t*s/100,g=y?Math.min(Math.floor((n+b*v)/f)*f,r):r,l=_ge("rewardsAnimation");e&&e.setAttribute("stroke-dasharray",d.toString()+","+t.toString());u.innerText=g.toString();(h||y)&&(w<a?i(function(){return c(u)}):(u.innerText=r.toString(),h&&(Lib.CssClass.add(o,"rh_scale"),Log.Log("CI.Info","RewardsReportActivity","ScaleAnim")),sj_evt.fire("RewardsAnimComplete"),l&&(Lib.CssClass.remove(l,"b_hide"),setTimeout(function(){Lib.CssClass.add(l,"b_hide")},2200))))}};c(l)}}function f(){var n=_ge("id_rc");return n?parseInt(n.innerText):0}function e(n){var i=_ge("id_rc"),t;i&&(i.innerText=n.toString());t=_ge("id_rcep");t&&(t.innerText=n.toString())}var t=88,i=function(){return _w.requestAnimationFrame||_w.webkitRequestAnimationFrame||_w.mozRequestAnimationFrame||function(n){sb_st(n,1e3/60)}}();n.RewardsRefresh=r;n.RewardsHeaderAnim=u;n.GetRewardsHeaderBalance=f;n.SetRewardsHeaderBalance=e})(RewardsCreditRefresh||(RewardsCreditRefresh={}))