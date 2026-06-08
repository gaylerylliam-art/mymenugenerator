<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>My Menu Generator</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css">
<script src="https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js"></script>
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{--gold:#C9A84C;--gold-l:#FDF6E3;--gold-d:#8B6914;--ink:#1A1714;--ink2:#3D3830;--ink3:#6B6358;--ink4:#9E9289;--cream:#FAF8F4;--cream2:#F2EDE4;--cream3:#E8E0D3;--green:#2D6A4F;--green-l:#D8F0E7;--red:#C0392B;--red-l:#FCEAE8;--blue:#1A3A5C;--blue-l:#D6E4F0;--white:#fff;--bd:rgba(26,23,20,0.10)}
html,body{height:100%;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:var(--cream);color:var(--ink);font-size:12px;overflow:hidden}
.app{display:flex;flex-direction:column;height:100vh}
.topbar{background:var(--ink);height:46px;display:flex;align-items:center;padding:0 16px;gap:10px;flex-shrink:0;z-index:20}
.logo{font-size:14px;font-weight:500;color:var(--gold);display:flex;align-items:center;gap:7px}
.logo-sq{width:24px;height:24px;background:var(--gold);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:11px;color:var(--ink)}
.top-nav{display:flex;gap:1px;margin-left:8px;flex-wrap:nowrap;overflow-x:auto}
.top-nav::-webkit-scrollbar{display:none}
.tn{padding:5px 9px;border-radius:6px;font-size:11px;font-weight:500;color:rgba(250,248,244,0.5);cursor:pointer;border:none;background:none;font-family:inherit;transition:all .15s;white-space:nowrap;flex-shrink:0}
.tn.active{background:var(--cream);color:var(--ink)}
.tn:hover:not(.active){color:rgba(250,248,244,.85)}
.top-r{margin-left:auto;display:flex;align-items:center;gap:7px;flex-shrink:0}
.up-btn{background:var(--gold);color:var(--ink);border:none;border-radius:6px;padding:5px 11px;font-size:11px;font-weight:500;cursor:pointer;font-family:inherit;white-space:nowrap}
.av{width:28px;height:28px;border-radius:50%;background:var(--gold-l);border:1.5px solid var(--gold);display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:500;color:var(--gold-d)}
.body{display:flex;flex:1;overflow:hidden}
.sidebar{width:192px;background:var(--white);border-right:1px solid var(--bd);display:flex;flex-direction:column;flex-shrink:0;overflow-y:auto}
.sidebar::-webkit-scrollbar{display:none}
.ss{font-size:9px;font-weight:500;letter-spacing:.07em;text-transform:uppercase;color:var(--ink4);padding:9px 12px 3px}
.sbi{display:flex;align-items:center;gap:8px;padding:7px 10px;margin:1px 6px;border-radius:7px;font-size:11px;color:var(--ink2);cursor:pointer;transition:background .12s}
.sbi:hover{background:var(--cream)}
.sbi.active{background:var(--cream2);font-weight:500;color:var(--ink)}
.sbi i{font-size:14px;color:var(--ink4);flex-shrink:0}
.sbi.active i{color:var(--gold-d)}
.sbi-badge{margin-left:auto;font-size:9px;font-weight:500;padding:1px 6px;border-radius:8px;background:var(--gold-l);color:var(--gold-d)}
.sbi-badge.r{background:var(--red-l);color:var(--red)}
.sb-bottom{margin-top:auto;padding:10px}
.plan-box{background:var(--ink);border-radius:8px;padding:11px}
.pb-label{font-size:9px;color:var(--gold);font-weight:500;text-transform:uppercase;letter-spacing:.06em}
.pb-name{font-size:12px;font-weight:500;color:var(--cream);margin:2px 0}
.pb-sub{font-size:9px;color:rgba(250,248,244,0.4);margin-bottom:6px}
.pb-bar{height:3px;background:rgba(255,255,255,0.1);border-radius:2px;margin-bottom:7px}
.pb-fill{height:100%;background:var(--gold);border-radius:2px;width:33%}
.pb-btn{width:100%;background:var(--gold);color:var(--ink);border:none;border-radius:6px;padding:6px;font-size:10px;font-weight:500;cursor:pointer;font-family:inherit}
.main{flex:1;overflow:hidden;display:flex;flex-direction:column}
.screen{display:none;flex:1;overflow:hidden;flex-direction:column}
.screen.active{display:flex}
.ph{padding:16px 20px 10px;display:flex;align-items:flex-start;flex-shrink:0}
.ph-title{font-size:18px;font-weight:500;color:var(--ink)}
.ph-sub{font-size:11px;color:var(--ink3);margin-top:2px}
.ph-btn{margin-left:auto;background:var(--ink);color:var(--cream);border:none;border-radius:8px;padding:8px 14px;font-size:11px;font-weight:500;cursor:pointer;display:flex;align-items:center;gap:5px;font-family:inherit;flex-shrink:0}
.ph-btn i{font-size:13px}
.scroll{flex:1;overflow-y:auto;padding:0 20px 18px}
.scroll::-webkit-scrollbar{width:4px}
.scroll::-webkit-scrollbar-thumb{background:var(--cream3);border-radius:4px}
.card{background:var(--white);border:0.5px solid var(--bd);border-radius:10px;overflow:hidden}
.card-pad{padding:14px}
.card-hd{font-size:11px;font-weight:500;color:var(--ink);margin-bottom:10px;display:flex;align-items:center;justify-content:space-between}
.card-lnk{font-size:10px;color:var(--gold-d);cursor:pointer;font-weight:400}
.badge{font-size:9px;font-weight:500;padding:2px 7px;border-radius:10px;display:inline-block}
.badge.pro{background:var(--gold-l);color:var(--gold-d)}.badge.free{background:var(--cream2);color:var(--ink4)}.badge.agency{background:var(--blue-l);color:var(--blue)}.badge.live{background:var(--green-l);color:var(--green)}.badge.draft{background:var(--cream2);color:var(--ink3)}.badge.active{background:var(--green-l);color:var(--green)}.badge.inactive{background:var(--cream2);color:var(--ink3)}.badge.banned{background:var(--red-l);color:var(--red)}.badge.open{background:#FEF3C7;color:#92400E}.badge.resolved{background:var(--green-l);color:var(--green)}.badge.pending{background:var(--blue-l);color:var(--blue)}.badge.high{background:var(--red-l);color:var(--red)}.badge.medium{background:#FEF3C7;color:#92400E}.badge.low{background:var(--blue-l);color:var(--blue)}
.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;padding:0 20px 12px;flex-shrink:0}
.stat{background:var(--white);border:0.5px solid var(--bd);border-radius:9px;padding:12px}
.stat-ico{width:28px;height:28px;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:14px;margin-bottom:7px}
.stat-ico.g{background:var(--gold-l);color:var(--gold-d)}.stat-ico.gr{background:var(--green-l);color:var(--green)}.stat-ico.b{background:var(--blue-l);color:var(--blue)}.stat-ico.r{background:var(--red-l);color:var(--red)}
.stat-v{font-size:18px;font-weight:500}.stat-l{font-size:10px;color:var(--ink3);margin-top:1px}.stat-ch{font-size:9px;color:var(--green);margin-top:3px}
.two-col{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.ml-i{display:flex;align-items:center;gap:8px;padding:7px;border-radius:6px;cursor:pointer;transition:background .12s}
.ml-i:hover{background:var(--cream)}
.ml-thumb{width:32px;height:32px;border-radius:5px;background:var(--cream2);display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0}
.ml-name{font-size:11px;font-weight:500}.ml-meta{font-size:9px;color:var(--ink4)}
.act-i{display:flex;gap:7px;padding:6px 0;border-bottom:0.5px solid var(--bd)}.act-i:last-child{border-bottom:none}
.act-dot{width:5px;height:5px;border-radius:50%;background:var(--gold);margin-top:4px;flex-shrink:0}
.act-txt{font-size:10px;color:var(--ink2);line-height:1.5}.act-time{font-size:9px;color:var(--ink4);margin-top:1px}
.add-dsh{width:100%;padding:6px;border-radius:6px;border:1px dashed var(--cream3);background:transparent;font-size:10px;font-weight:500;cursor:pointer;color:var(--ink4);display:flex;align-items:center;justify-content:center;gap:4px;font-family:inherit;margin-top:5px;transition:all .12s}
.add-dsh:hover{border-color:var(--gold);color:var(--gold-d);background:var(--gold-l)}
.chip-row{display:flex;gap:6px;padding:0 20px 10px;overflow-x:auto;flex-shrink:0}
.chip-row::-webkit-scrollbar{display:none}
.chip{padding:5px 12px;border-radius:14px;font-size:10px;font-weight:500;cursor:pointer;white-space:nowrap;border:0.5px solid var(--bd);background:var(--white);color:var(--ink2);transition:all .12s}
.chip.active{background:var(--ink);color:var(--cream);border-color:var(--ink)}
.tgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.tcard{background:var(--white);border:0.5px solid var(--bd);border-radius:10px;overflow:hidden;cursor:pointer;transition:all .2s}
.tcard:hover{border-color:var(--gold);transform:translateY(-1px)}
.tprev{height:110px;display:flex;align-items:center;justify-content:center;position:relative}
.tbadge{position:absolute;top:8px;left:8px;font-size:9px;font-weight:500;padding:2px 7px;border-radius:10px}
.tbadge.pr{background:var(--gold);color:var(--ink)}.tbadge.fr{background:var(--green-l);color:var(--green)}
.tinfo{padding:10px 12px}.tname{font-size:11px;font-weight:500;margin-bottom:3px}.tmeta{font-size:9px;color:var(--ink4)}
.tact{width:100%;margin-top:7px;padding:6px;border-radius:6px;border:0.5px solid var(--bd);background:transparent;font-size:10px;font-weight:500;cursor:pointer;color:var(--ink2);font-family:inherit;transition:all .12s}
.tact:hover{background:var(--ink);color:var(--cream);border-color:var(--ink)}
.editor-wrap{display:flex;flex:1;overflow:hidden}
.ed-topbar{background:var(--white);border-bottom:0.5px solid var(--bd);padding:7px 14px;display:flex;align-items:center;gap:8px;flex-shrink:0}
.ed-tbname{font-size:11px;font-weight:500;display:flex;align-items:center;gap:6px}
.ed-tag{font-size:9px;color:var(--ink3);background:var(--cream2);padding:2px 7px;border-radius:8px}
.ed-left{width:220px;background:var(--white);border-right:1px solid var(--bd);display:flex;flex-direction:column;overflow:hidden;flex-shrink:0}
.ed-tools{display:flex;border-bottom:0.5px solid var(--bd);flex-shrink:0}
.et{flex:1;padding:7px 4px;border:none;background:transparent;font-size:9px;font-weight:500;color:var(--ink3);cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;font-family:inherit;transition:all .12s}
.et:hover,.et.active{background:var(--cream);color:var(--ink)}.et i{font-size:14px}
.ed-content{flex:1;overflow-y:auto;padding:10px}.ed-content::-webkit-scrollbar{width:3px}
.ed-sec{font-size:9px;font-weight:500;letter-spacing:.06em;text-transform:uppercase;color:var(--ink4);margin:10px 0 5px}.ed-sec:first-child{margin-top:0}
.cpills{display:flex;flex-wrap:wrap;gap:3px;margin-bottom:8px}
.cp{font-size:9px;font-weight:500;padding:3px 8px;border-radius:10px;cursor:pointer;border:0.5px solid var(--bd);background:var(--cream);color:var(--ink2);transition:all .12s}
.cp.active{background:var(--ink);color:var(--cream);border-color:var(--ink)}
.mi-row{display:flex;gap:7px;padding:7px;border:0.5px solid var(--bd);border-radius:7px;margin-bottom:5px;background:var(--white);cursor:pointer;position:relative}
.mi-row:hover{border-color:var(--gold)}
.mi-img{width:32px;height:32px;border-radius:5px;background:var(--cream2);display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0;overflow:hidden}
.mi-img img{width:100%;height:100%;object-fit:cover}
.mi-name{font-size:10px;font-weight:500}.mi-desc{font-size:9px;color:var(--ink4);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin:1px 0}
.mi-badges{display:flex;gap:2px}
.mib{font-size:8px;font-weight:500;padding:1px 4px;border-radius:6px}
.mib.b{background:#FFF3CD;color:#856404}.mib.s{background:var(--red-l);color:var(--red)}.mib.v{background:var(--green-l);color:var(--green)}.mib.h{background:var(--blue-l);color:var(--blue)}.mib.n{background:var(--gold-l);color:var(--gold-d)}
.mi-price{font-size:10px;font-weight:500;align-self:center;flex-shrink:0}
.mi-edit-btn{position:absolute;top:4px;right:4px;width:18px;height:18px;border-radius:3px;background:var(--gold);border:none;cursor:pointer;display:none;align-items:center;justify-content:center;color:var(--ink);font-size:9px}
.mi-row:hover .mi-edit-btn{display:flex}
.canvas-area{flex:1;background:var(--cream2);display:flex;align-items:flex-start;justify-content:center;padding:14px;overflow:auto}
.menu-pg{background:var(--white);border-radius:3px;overflow:hidden;flex-shrink:0;box-shadow:0 2px 16px rgba(0,0,0,.08)}
.m-hd{background:var(--ink);padding:16px}
.m-logo{width:36px;height:36px;border-radius:7px;background:var(--gold);display:flex;align-items:center;justify-content:center;font-size:15px;margin-bottom:7px}
.m-rname{font-size:14px;font-weight:500;color:var(--gold)}.m-tag{font-size:8px;color:rgba(250,248,244,.45);margin-top:1px;letter-spacing:.04em}
.m-contacts{display:flex;gap:10px;margin-top:8px}.m-con{font-size:8px;color:rgba(250,248,244,.4);display:flex;align-items:center;gap:3px}.m-con i{font-size:10px}
.m-body{padding:10px}
.m-sec-hd{display:flex;align-items:center;gap:5px;margin:8px 0 5px}.m-sec-line{flex:1;height:0.5px;background:var(--cream3)}.m-sec-name{font-size:8px;font-weight:500;color:var(--gold-d);white-space:nowrap;letter-spacing:.04em}
.m-food{display:flex;gap:7px;margin-bottom:7px;padding-bottom:7px;border-bottom:0.5px solid var(--cream2)}.m-food:last-child{border-bottom:none;margin-bottom:0}
.m-fimg{border-radius:5px;background:var(--cream2);flex-shrink:0;display:flex;align-items:center;justify-content:center;overflow:hidden}
.m-fimg img{width:100%;height:100%;object-fit:cover;display:block}
.m-finfo{flex:1}
.m-fnrow{display:flex;align-items:baseline;justify-content:space-between;gap:4px}
.m-fname{font-size:9px;font-weight:500}.m-fprice{font-size:9px;font-weight:500;color:var(--gold-d);white-space:nowrap}
.m-fdesc{font-size:8px;color:var(--ink4);margin:2px 0;line-height:1.4}.m-fbadges{display:flex;gap:2px;flex-wrap:wrap}
.m-qr{margin-top:10px;padding:7px;background:var(--cream2);border-radius:5px;text-align:center}
.m-qr-label{font-size:7px;color:var(--ink4);letter-spacing:.04em;margin-bottom:4px}
.m-qr-box{width:28px;height:28px;background:var(--ink);border-radius:4px;margin:0 auto;display:flex;align-items:center;justify-content:center}
.m-qr-url{font-size:7px;color:var(--ink4);margin-top:3px}
.ed-right{width:188px;background:var(--white);border-left:1px solid var(--bd);padding:10px;overflow-y:auto;flex-shrink:0}
.ed-right::-webkit-scrollbar{width:3px}
.prop-label{font-size:9px;font-weight:500;color:var(--ink2);margin-bottom:3px;display:block;margin-top:9px}.prop-label:first-of-type{margin-top:0}
.prop-input{width:100%;padding:5px 7px;border:0.5px solid var(--bd);border-radius:5px;font-size:10px;background:var(--cream);color:var(--ink);font-family:inherit;outline:none}
.prop-input:focus{border-color:var(--gold)}
.swatches{display:flex;gap:4px;flex-wrap:wrap;margin-top:2px}
.sw{width:18px;height:18px;border-radius:3px;cursor:pointer;border:1.5px solid transparent;transition:all .12s}.sw.active,.sw:hover{border-color:var(--ink)}
.prop-sec{font-size:9px;font-weight:500;letter-spacing:.06em;text-transform:uppercase;color:var(--ink4);margin:11px 0 5px}.prop-sec:first-child{margin-top:0}
.ai-pill{width:100%;margin-top:10px;padding:7px;border-radius:6px;border:1px dashed var(--gold);background:var(--gold-l);color:var(--gold-d);font-size:10px;font-weight:500;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:4px;font-family:inherit}
.exp-btns{display:flex;flex-direction:column;gap:4px;margin-top:10px}
.exp-btn{width:100%;padding:6px 7px;border-radius:5px;border:0.5px solid var(--bd);background:transparent;font-size:10px;font-weight:500;cursor:pointer;display:flex;align-items:center;gap:5px;color:var(--ink2);font-family:inherit;transition:all .12s}
.exp-btn:hover,.exp-btn.p{background:var(--ink);color:var(--cream);border-color:var(--ink)}.exp-btn i{font-size:12px}
.ai-hero{background:var(--ink);border-radius:10px;padding:18px;margin-bottom:14px}
.ai-hero-title{font-size:15px;font-weight:500;color:var(--gold);margin-bottom:4px}
.ai-hero-sub{font-size:11px;color:rgba(250,248,244,.6);line-height:1.6}
.ai-feat-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px}
.ai-feat{background:var(--white);border:0.5px solid var(--bd);border-radius:9px;padding:12px;cursor:pointer;transition:all .15s}.ai-feat:hover{border-color:var(--gold)}
.ai-feat-ico{font-size:18px;margin-bottom:6px;color:var(--ink3)}.ai-feat-title{font-size:11px;font-weight:500;margin-bottom:3px}.ai-feat-desc{font-size:10px;color:var(--ink3);line-height:1.5}
.ai-input-card{background:var(--white);border:0.5px solid var(--bd);border-radius:9px;padding:12px}
.ai-textarea{width:100%;border:0.5px solid var(--bd);border-radius:6px;padding:8px;font-size:10px;font-family:inherit;color:var(--ink);background:var(--cream);resize:none;outline:none;height:56px;line-height:1.5}
.ai-textarea:focus{border-color:var(--gold)}
.ai-run{background:var(--ink);color:var(--cream);border:none;border-radius:6px;padding:7px 12px;font-size:10px;font-weight:500;cursor:pointer;margin-top:7px;font-family:inherit;display:flex;align-items:center;gap:5px}
.ai-result{margin-top:10px;padding:10px;background:var(--cream);border-radius:6px;font-size:10px;line-height:1.7;color:var(--ink2);display:none}
.ai-result.show{display:block}
.anl-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;flex-shrink:0}
.anl-card{background:var(--white);border:0.5px solid var(--bd);border-radius:9px;padding:10px}
.anl-v{font-size:18px;font-weight:500}.anl-l{font-size:10px;color:var(--ink3);margin-top:1px}.anl-ch{font-size:9px;color:var(--green);margin-top:3px;display:flex;align-items:center;gap:2px}
.chart-2col{display:grid;grid-template-columns:3fr 2fr;gap:8px;margin-top:8px}
.bar-chart-wrap{display:flex;flex-direction:column;gap:6px}
.bar-row{display:flex;align-items:center;gap:7px;font-size:10px;color:var(--ink3)}
.bar-label{width:64px;flex-shrink:0;text-align:right}.bar-track{flex:1;height:7px;background:var(--cream2);border-radius:4px;overflow:hidden}
.bar-fill{height:100%;background:var(--gold);border-radius:4px}.bar-val{width:30px;color:var(--ink);font-weight:500;text-align:right}
.exp-table{background:var(--white);border:0.5px solid var(--bd);border-radius:9px;overflow:hidden;margin-top:8px}
.et-hd{padding:9px 12px;font-size:10px;font-weight:500;color:var(--ink);border-bottom:0.5px solid var(--bd)}
.et-row{display:flex;align-items:center;padding:7px 12px;border-bottom:0.5px solid var(--bd);font-size:10px;gap:7px}.et-row:last-child{border-bottom:none}.et-row:hover{background:var(--cream)}
.et-c1{flex:2;color:var(--ink);font-weight:500}.et-c2,.et-c3{flex:1;color:var(--ink3)}.et-c4{flex:1;text-align:right}
.et-badge{font-size:8px;font-weight:500;padding:2px 6px;border-radius:8px}
.et-badge.pdf{background:var(--red-l);color:var(--red)}.et-badge.ig{background:#FCE4EC;color:#C2185B}.et-badge.wa{background:var(--green-l);color:var(--green)}
.dm-grid{display:grid;grid-template-columns:1fr 300px;gap:12px}
.dm-url-bar{display:flex;align-items:center;gap:6px;background:var(--cream2);border:0.5px solid var(--bd);border-radius:7px;padding:7px 9px;margin-bottom:10px;font-size:10px;color:var(--ink3);font-family:monospace}
.dm-tgl-row{display:flex;align-items:center;justify-content:space-between;padding:7px 0;border-bottom:0.5px solid var(--bd)}.dm-tgl-row:last-child{border-bottom:none}
.dm-tgl-label{font-size:11px;color:var(--ink)}.dm-tgl-sub{font-size:9px;color:var(--ink4);margin-top:1px}
.tgl{position:relative;width:30px;height:17px;flex-shrink:0}
.tgl input{opacity:0;width:100%;height:100%;position:absolute;cursor:pointer;margin:0;z-index:1}
.tgl-t{width:30px;height:17px;border-radius:9px;background:var(--bd);transition:background .2s;pointer-events:none}
.tgl input:checked~.tgl-t{background:var(--green)}
.tgl-th{position:absolute;top:2px;left:2px;width:13px;height:13px;border-radius:50%;background:#fff;transition:transform .2s;pointer-events:none}
.tgl input:checked~.tgl-th{transform:translateX(13px)}
.phone-frame{display:flex;flex-direction:column;align-items:center}
.phone{width:260px;border-radius:34px;background:var(--ink);padding:9px;border:5px solid var(--ink)}
.phone-notch{width:70px;height:18px;background:var(--ink);border-radius:0 0 12px 12px;margin:0 auto 5px}
.phone-screen{border-radius:24px;overflow:hidden;background:var(--cream);height:460px;overflow-y:auto}
.phone-screen::-webkit-scrollbar{display:none}
.dm-hero{background:var(--ink);padding:16px}
.dm-logo{width:40px;height:40px;border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:8px}
.dm-rname{font-size:14px;font-weight:500;color:var(--gold)}.dm-tag{font-size:8px;color:rgba(250,248,244,.45);letter-spacing:.04em;margin-top:1px}
.dm-contacts-row{display:flex;margin-top:10px}
.dm-cb{flex:1;display:flex;flex-direction:column;align-items:center;gap:2px;padding:6px 4px;border-radius:6px;cursor:pointer}
.dm-cb i{font-size:14px;color:var(--gold)}.dm-cb span{font-size:7px;color:rgba(250,248,244,.45)}
.dm-cats-row{display:flex;gap:5px;padding:8px 10px;background:var(--cream);overflow-x:auto;border-bottom:0.5px solid rgba(26,23,20,.07)}
.dm-cats-row::-webkit-scrollbar{display:none}
.dcat{padding:4px 10px;border-radius:12px;font-size:9px;font-weight:500;white-space:nowrap;cursor:pointer;border:0.5px solid rgba(26,23,20,.1);color:var(--ink3);background:#fff;transition:all .12s}
.dcat.active{background:var(--ink);color:var(--cream);border-color:var(--ink)}
.dm-search-wrap{padding:7px 10px 4px;position:relative}
.dm-search{width:100%;padding:6px 8px 6px 26px;border:0.5px solid rgba(26,23,20,.12);border-radius:8px;font-size:9px;font-family:inherit;background:#fff;outline:none;color:var(--ink)}
.dm-search-ico{position:absolute;left:17px;top:50%;transform:translateY(-50%);font-size:12px;color:var(--ink4)}
.dm-sec-title{font-size:9px;font-weight:500;color:var(--ink);margin:7px 10px 5px;display:flex;align-items:center;gap:4px}
.dm-sec-title::after{content:"";flex:1;height:.5px;background:rgba(26,23,20,.08)}
.dm-item{display:flex;gap:8px;padding:7px 10px;background:#fff;border-radius:8px;margin:0 10px 5px;border:0.5px solid rgba(26,23,20,.07);cursor:pointer}
.dm-item:hover{border-color:var(--gold)}
.dm-item-img{width:48px;height:48px;border-radius:7px;background:var(--cream2);flex-shrink:0;display:flex;align-items:center;justify-content:center}
.dm-item-img i{font-size:20px;color:var(--ink4)}.dm-item-name{font-size:10px;font-weight:500;color:var(--ink)}.dm-item-desc{font-size:8px;color:var(--ink4);margin:2px 0;line-height:1.4}.dm-item-price{font-size:10px;font-weight:500;color:var(--gold-d);align-self:flex-start}
.dm-footer{background:var(--ink);padding:12px;text-align:center;margin-top:8px}
.dm-footer-logo{font-size:9px;color:rgba(250,248,244,.3);display:flex;align-items:center;justify-content:center;gap:4px}
.dm-footer-logo i{font-size:11px;color:var(--gold)}
.qr-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.qr-prev-area{display:flex;align-items:center;justify-content:center;background:var(--cream2);border-radius:8px;padding:20px;margin-bottom:10px}
.qr-container{display:flex;flex-direction:column;align-items:center;padding:14px;background:#fff;border-radius:8px}
.qr-top-lbl{font-size:10px;font-weight:500;color:var(--ink);margin-bottom:8px;text-align:center}
.qr-bot-lbl{font-size:8px;color:var(--ink3);margin-top:6px;text-align:center}
.qr-svg-wrap{position:relative;display:inline-block}
.qr-logo{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:#fff;border-radius:5px;display:flex;align-items:center;justify-content:center;border:2px solid #fff;width:28px;height:28px}
.fi-label{font-size:10px;font-weight:500;color:var(--ink2);display:block;margin-bottom:3px;margin-top:9px}.fi-label:first-of-type{margin-top:0}
.fi-input{width:100%;padding:6px 8px;border:0.5px solid var(--bd);border-radius:6px;font-size:10px;font-family:inherit;color:var(--ink);background:var(--cream2);outline:none}
.fi-input:focus{border-color:var(--gold)}
.clr-row{display:flex;gap:4px;flex-wrap:wrap;margin-top:2px}
.clr-sw{width:20px;height:20px;border-radius:4px;cursor:pointer;border:1.5px solid transparent}.clr-sw.active,.clr-sw:hover{border-color:var(--ink)}
.sz-row{display:grid;grid-template-columns:repeat(4,1fr);gap:4px;margin-bottom:8px}
.sz-opt{padding:5px;border-radius:6px;border:0.5px solid var(--bd);background:var(--white);font-size:9px;font-weight:500;cursor:pointer;text-align:center;color:var(--ink3);font-family:inherit;transition:all .12s}
.sz-opt.active{border-color:#1A3A5C;background:var(--blue-l);color:var(--blue)}
.dl-btns{display:flex;flex-direction:column;gap:5px;margin-top:10px}
.dl-btn{width:100%;padding:8px;border-radius:7px;border:0.5px solid var(--bd);background:transparent;font-size:10px;font-weight:500;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;color:var(--ink2);font-family:inherit;transition:all .12s}
.dl-btn:hover,.dl-btn.p{background:var(--ink);color:var(--cream);border-color:var(--ink)}.dl-btn i{font-size:12px}
.scan-hist{display:flex;flex-direction:column;gap:5px}
.sh-row{display:flex;align-items:center;gap:7px;font-size:9px;color:var(--ink3)}.sh-day{min-width:60px;flex-shrink:0}
.sh-track{flex:1;height:6px;background:var(--cream2);border-radius:3px;overflow:hidden}.sh-fill{height:100%;background:var(--gold);border-radius:3px}
.sh-val{color:var(--ink);font-weight:500;min-width:20px;text-align:right}
.cur-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.cur-item{display:flex;align-items:center;gap:8px;padding:8px;border-radius:7px;cursor:pointer;border:0.5px solid var(--bd);background:var(--white);margin-bottom:4px;transition:all .12s}
.cur-item:hover{border-color:var(--gold-d)}.cur-item.sel{border-color:#1A3A5C;background:var(--blue-l)}
.cur-flag{font-size:16px;width:24px;text-align:center;flex-shrink:0}.cur-name{font-size:11px;font-weight:500;color:var(--ink)}.cur-country{font-size:9px;color:var(--ink4)}.cur-sym{font-size:11px;font-weight:500;color:var(--ink3);flex-shrink:0}
.pricing-hero{text-align:center;padding:20px 20px 12px;flex-shrink:0}
.pricing-title{font-size:20px;font-weight:500;margin-bottom:6px}.pricing-sub{font-size:12px;color:var(--ink3);margin-bottom:14px}
.billing-toggle{display:inline-flex;align-items:center;gap:9px;background:var(--white);border:0.5px solid var(--bd);border-radius:22px;padding:4px 5px 4px 12px}
.bt-lbl{font-size:11px;font-weight:500;color:var(--ink3);cursor:pointer}.bt-lbl.active{color:var(--ink)}
.bt-sw{width:36px;height:20px;border-radius:10px;background:var(--green);cursor:pointer;position:relative}
.bt-thumb{width:16px;height:16px;border-radius:50%;background:#fff;position:absolute;top:2px;transition:left .2s}
.bt-sw.monthly .bt-thumb{left:2px}.bt-sw.annual .bt-thumb{left:18px}
.save-badge{font-size:9px;font-weight:500;background:var(--green);color:#fff;padding:2px 8px;border-radius:9px;white-space:nowrap}
.plans-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}
.plan{background:var(--white);border:0.5px solid var(--bd);border-radius:10px;overflow:hidden;display:flex;flex-direction:column}
.plan.featured{border:2px solid var(--gold)}
.plan-badge-bar{font-size:9px;font-weight:500;padding:5px 0;text-align:center}
.plan-badge-bar.gold{background:var(--gold);color:var(--ink)}.plan-badge-bar.empty{height:24px;background:transparent}
.plan-body{padding:16px 14px;flex:1;display:flex;flex-direction:column}
.plan-ico{width:34px;height:34px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:16px;margin-bottom:10px}
.plan-name{font-size:13px;font-weight:500;margin-bottom:4px}.plan-desc{font-size:10px;color:var(--ink3);margin-bottom:12px;line-height:1.5}
.plan-price{font-size:26px;font-weight:500;display:flex;align-items:baseline;gap:2px}
.plan-price .cur{font-size:14px;font-weight:500}.plan-price .per{font-size:10px;font-weight:400;color:var(--ink3);margin-left:2px}
.plan-cta{width:100%;padding:9px;border-radius:7px;font-size:11px;font-weight:500;cursor:pointer;font-family:inherit;transition:all .15s;margin:12px 0 10px;display:flex;align-items:center;justify-content:center;gap:5px}
.plan-cta.outline{border:0.5px solid var(--bd);background:transparent;color:var(--ink)}
.plan-cta.gold{border:none;background:var(--gold);color:var(--ink)}
.plan-cta.dark{border:none;background:var(--ink);color:var(--cream)}
.plan-cta.current{border:0.5px solid var(--green);background:var(--green-l);color:var(--green);cursor:default}
.plan-cta i{font-size:13px}
.plan-feat{font-size:10px;color:var(--ink3);display:flex;align-items:flex-start;gap:5px;margin-bottom:5px;line-height:1.4}
.plan-feat i{font-size:12px;flex-shrink:0;margin-top:1px}.plan-feat .ck{color:var(--green)}.plan-feat .xx{color:var(--ink4)}
.admin-wrap{display:flex;flex:1;overflow:hidden}
.admin-sidebar{width:172px;background:#0F172A;display:flex;flex-direction:column;flex-shrink:0}
.asb-logo{padding:12px;display:flex;align-items:center;gap:7px;border-bottom:0.5px solid rgba(255,255,255,.07)}
.asb-sq{width:22px;height:22px;background:var(--gold);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:10px;color:var(--ink);flex-shrink:0}
.asb-badge{font-size:8px;background:#EF4444;color:#fff;padding:1px 4px;border-radius:5px}
.asb-sec{font-size:8px;font-weight:500;letter-spacing:.07em;text-transform:uppercase;color:#334155;padding:8px 12px 3px}
.asb-item{display:flex;align-items:center;gap:6px;padding:6px 8px;margin:1px 5px;border-radius:5px;font-size:10px;color:#64748B;cursor:pointer;transition:all .12s}
.asb-item:hover{background:rgba(255,255,255,.05);color:#CBD5E1}.asb-item.active{background:rgba(201,168,76,.12);color:var(--gold)}
.asb-item i{font-size:13px;flex-shrink:0}
.asb-chip{margin-left:auto;font-size:8px;padding:1px 5px;border-radius:7px;font-weight:500}
.asb-chip.r{background:rgba(239,68,68,.2);color:#FCA5A5}.asb-chip.g{background:rgba(201,168,76,.18);color:var(--gold)}
.asb-bottom{margin-top:auto;padding:8px;border-top:0.5px solid rgba(255,255,255,.06)}
.asb-user{display:flex;align-items:center;gap:6px}
.asb-av{width:24px;height:24px;border-radius:50%;background:var(--gold);display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:500;color:var(--ink);flex-shrink:0}
.admin-main{flex:1;display:flex;flex-direction:column;overflow:hidden;background:var(--cream2)}
.adm-topbar{background:var(--white);border-bottom:0.5px solid var(--bd);padding:0 14px;height:40px;display:flex;align-items:center;gap:8px;flex-shrink:0}
.adm-title{font-size:12px;font-weight:500}
.adm-sc{display:none;flex:1;overflow-y:auto;padding:12px 14px}.adm-sc::-webkit-scrollbar{width:3px}.adm-sc::-webkit-scrollbar-thumb{background:var(--cream3);border-radius:4px}.adm-sc.active{display:block}
.adm-kpi{display:grid;grid-template-columns:repeat(4,1fr);gap:7px;margin-bottom:10px}
.ak{background:var(--white);border:0.5px solid var(--bd);border-radius:8px;padding:10px}
.ak-v{font-size:17px;font-weight:500}.ak-l{font-size:9px;color:var(--ink3);margin-top:1px}.ak-d{font-size:9px;color:var(--green);margin-top:3px}
.adm-dt{background:var(--white);border:0.5px solid var(--bd);border-radius:8px;overflow:hidden;margin-bottom:10px}
.adm-dt-hd{padding:8px 12px;border-bottom:0.5px solid var(--bd);display:flex;align-items:center;gap:7px}
.adm-dt-title{font-size:11px;font-weight:500}.adm-dt-actions{margin-left:auto;display:flex;gap:5px}
.adm-da{padding:4px 8px;border-radius:5px;border:0.5px solid var(--bd);background:transparent;font-size:9px;font-weight:500;cursor:pointer;color:var(--ink3);font-family:inherit;display:flex;align-items:center;gap:3px}
.adm-da:hover{background:var(--cream)}.adm-da.pr{background:var(--ink);color:var(--cream);border-color:var(--ink)}.adm-da i{font-size:11px}
table{width:100%;border-collapse:collapse}
th{padding:6px 10px;font-size:9px;font-weight:500;text-transform:uppercase;letter-spacing:.04em;color:var(--ink4);text-align:left;background:var(--cream2);border-bottom:0.5px solid var(--bd);white-space:nowrap}
td{padding:7px 10px;font-size:10px;color:var(--ink3);border-bottom:0.5px solid var(--bd);white-space:nowrap}
tr:last-child td{border-bottom:none}tr:hover td{background:var(--cream)}.td1{color:var(--ink);font-weight:500}
.rav{display:flex;gap:3px}
.rb{width:20px;height:20px;border-radius:3px;border:0.5px solid var(--bd);background:transparent;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:10px;color:var(--ink4);transition:all .12s}
.rb:hover{background:var(--cream);color:var(--ink)}.rb.d:hover{background:var(--red-l);color:var(--red);border-color:var(--red)}.rb.ok:hover{background:var(--green-l);color:var(--green);border-color:var(--green)}
.adm-av{width:20px;height:20px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:8px;font-weight:500;flex-shrink:0}
.flag-row{display:flex;align-items:center;justify-content:space-between;padding:8px 12px;border-bottom:0.5px solid var(--bd)}.flag-row:last-child{border-bottom:none}
.flag-name{font-size:10px;font-weight:500;color:var(--ink)}.flag-desc{font-size:9px;color:var(--ink3);margin-top:1px}.flag-scope{display:flex;gap:3px;margin-top:3px}
.adm-tgl{position:relative;width:28px;height:16px;flex-shrink:0}
.adm-tgl input{opacity:0;width:100%;height:100%;position:absolute;cursor:pointer;margin:0;z-index:1}
.adm-tgt{width:28px;height:16px;border-radius:8px;background:var(--bd);transition:background .2s;pointer-events:none}
.adm-tgl input:checked~.adm-tgt{background:var(--green)}
.adm-tgb{position:absolute;top:2px;left:2px;width:12px;height:12px;border-radius:50%;background:#fff;transition:transform .2s;pointer-events:none}
.adm-tgl input:checked~.adm-tgb{transform:translateX(12px)}
.adm-bars{display:flex;align-items:flex-end;gap:3px;height:50px;margin-top:8px}
.adm-bc{display:flex;flex-direction:column;align-items:center;gap:2px;flex:1}.adm-bs{width:100%;border-radius:2px 2px 0 0;min-height:2px}.adm-bl{font-size:7px;color:var(--ink4)}
.audit-entry{display:flex;gap:8px;padding:7px 12px;border-bottom:0.5px solid var(--bd)}.audit-entry:last-child{border-bottom:none}.audit-entry:hover{background:var(--cream)}
.ae-dot{width:7px;height:7px;border-radius:50%;flex-shrink:0;margin-top:3px}.ae-txt{font-size:10px;color:var(--ink);line-height:1.5}.ae-meta{font-size:9px;color:var(--ink4);margin-top:1px}
#modal-wrap{display:none;position:fixed;inset:0;z-index:50;background:rgba(0,0,0,.40);align-items:center;justify-content:center}
#modal-wrap.open{display:flex}
.modal{background:var(--white);border-radius:12px;width:340px;overflow:hidden;max-height:90vh;overflow-y:auto}
.modal-hd{padding:13px 15px;border-bottom:0.5px solid var(--bd);display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;background:var(--white);z-index:1}
.modal-title{font-size:12px;font-weight:500}
.modal-close{background:none;border:none;cursor:pointer;font-size:15px;color:var(--ink3);width:22px;height:22px;border-radius:4px;display:flex;align-items:center;justify-content:center}
.modal-body{padding:13px 15px}
.mfl{font-size:9px;font-weight:500;color:var(--ink2);display:block;margin-bottom:3px;margin-top:9px}.mfl:first-child{margin-top:0}
.mfi{width:100%;padding:6px 8px;border:0.5px solid var(--bd);border-radius:6px;font-size:10px;font-family:inherit;color:var(--ink);background:var(--cream2);outline:none}
.mfi:focus{border-color:var(--gold)}
.m-row{display:flex;gap:7px}
.dz-mini{border:1.5px dashed var(--bd);border-radius:6px;padding:14px;text-align:center;cursor:pointer;background:var(--cream2);transition:all .15s;position:relative;overflow:hidden}
.dz-mini:hover{border-color:var(--gold);background:var(--gold-l)}
.dz-mini.has-img{border-style:solid;border-color:var(--green);background:var(--green-l);padding:0;height:80px}
.dz-mini.has-img img{width:100%;height:100%;object-fit:cover;display:block}
.dz-mini.has-img .dz-inner{display:none}
.badge-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:4px;margin-top:3px}
.ba{padding:4px 6px;border-radius:5px;border:0.5px solid var(--bd);background:var(--white);font-size:9px;font-weight:500;cursor:pointer;text-align:center;font-family:inherit;color:var(--ink3);transition:all .12s}
.ba.active.bestseller{background:#FFF3CD;color:#856404;border-color:#856404}
.ba.active.new-b{background:var(--gold-l);color:var(--gold-d);border-color:var(--gold-d)}
.ba.active.spicy{background:var(--red-l);color:var(--red);border-color:var(--red)}
.ba.active.vegan{background:var(--green-l);color:var(--green);border-color:var(--green)}
.ba.active.halal{background:var(--blue-l);color:var(--blue);border-color:var(--blue)}
.ba.active.veg{background:#EAF3DE;color:#3B6D11;border-color:#3B6D11}
.modal-footer{padding:10px 15px;border-top:0.5px solid var(--bd);display:flex;gap:6px;position:sticky;bottom:0;background:var(--white)}
.m-save{flex:1;background:var(--ink);color:var(--cream);border:none;border-radius:6px;padding:8px;font-size:10px;font-weight:500;cursor:pointer;font-family:inherit}
.m-cancel{padding:8px 11px;border-radius:6px;border:0.5px solid var(--bd);background:transparent;font-size:10px;cursor:pointer;color:var(--ink2);font-family:inherit}
</style>
</head>
<body>
<div class="app">
<!-- TOPBAR -->
<div class="topbar">
  <div class="logo"><div class="logo-sq"><i class="ti ti-tools-kitchen-2" style="font-size:11px;color:var(--ink)"></i></div>My Menu Generator</div>
  <div class="top-nav">
    <button class="tn active" id="tn-dash" onclick="SS('dash')">Dashboard</button>
    <button class="tn" id="tn-templates" onclick="SS('templates')">Templates</button>
    <button class="tn" id="tn-editor" onclick="SS('editor')">Editor</button>
    <button class="tn" id="tn-ai" onclick="SS('ai')">AI assistant</button>
    <button class="tn" id="tn-analytics" onclick="SS('analytics')">Analytics</button>
    <button class="tn" id="tn-digital" onclick="SS('digital')">Digital menu</button>
    <button class="tn" id="tn-qr" onclick="SS('qr')">QR codes</button>
    <button class="tn" id="tn-currency" onclick="SS('currency')">Currency</button>
    <button class="tn" id="tn-pricing" onclick="SS('pricing')">Pricing</button>
    <button class="tn" id="tn-admin" onclick="SS('admin')">Admin</button>
  </div>
  <div class="top-r">
    <button class="up-btn" onclick="SS('pricing')">Upgrade to Pro</button>
    <div class="av">RK</div>
  </div>
</div>

<div class="body">
<!-- SIDEBAR -->
<div class="sidebar">
  <div class="ss">Workspace</div>
  <div class="sbi active" id="sbi-dash" onclick="SS('dash')"><i class="ti ti-layout-dashboard"></i>Dashboard</div>
  <div class="sbi" id="sbi-templates" onclick="SS('templates')"><i class="ti ti-template"></i>Templates</div>
  <div class="sbi" id="sbi-editor" onclick="SS('editor')"><i class="ti ti-edit"></i>My menus<span class="sbi-badge">3</span></div>
  <div class="sbi" id="sbi-ai" onclick="SS('ai')"><i class="ti ti-sparkles"></i>AI assistant<span class="sbi-badge">New</span></div>
  <div class="ss">Restaurant</div>
  <div class="sbi" id="sbi-digital" onclick="SS('digital')"><i class="ti ti-world"></i>Digital menu</div>
  <div class="sbi" id="sbi-qr" onclick="SS('qr')"><i class="ti ti-qrcode"></i>QR codes</div>
  <div class="sbi" id="sbi-currency" onclick="SS('currency')"><i class="ti ti-currency-peso"></i>Currency</div>
  <div class="ss">Reports</div>
  <div class="sbi" id="sbi-analytics" onclick="SS('analytics')"><i class="ti ti-chart-bar"></i>Analytics<span class="sbi-badge r">3</span></div>
  <div class="sbi"><i class="ti ti-download"></i>Exports</div>
  <div class="ss">Account</div>
  <div class="sbi" id="sbi-pricing" onclick="SS('pricing')"><i class="ti ti-credit-card"></i>Subscription</div>
  <div class="sbi" id="sbi-admin" onclick="SS('admin')"><i class="ti ti-shield"></i>Admin panel</div>
  <div class="sbi"><i class="ti ti-settings"></i>Settings</div>
  <div class="sb-bottom">
    <div class="plan-box">
      <div class="pb-label">Current plan</div>
      <div class="pb-name">Free tier</div>
      <div class="pb-sub">1 of 3 menus used</div>
      <div class="pb-bar"><div class="pb-fill"></div></div>
      <button class="pb-btn" onclick="SS('pricing')">Upgrade to Pro</button>
    </div>
  </div>
</div>

<div class="main">

<!-- DASHBOARD -->
<div class="screen active" id="s-dash">
  <div class="ph"><div><div class="ph-title">Good morning, Rashed</div><div class="ph-sub">Here's how your menus are performing today</div></div><button class="ph-btn" onclick="SS('templates')"><i class="ti ti-plus"></i>New menu</button></div>
  <div class="stats-grid">
    <div class="stat"><div class="stat-ico g"><i class="ti ti-eye"></i></div><div class="stat-v">1,284</div><div class="stat-l">Menu views this month</div><div class="stat-ch">&#x2191; 18% vs last month</div></div>
    <div class="stat"><div class="stat-ico gr"><i class="ti ti-qrcode"></i></div><div class="stat-v">347</div><div class="stat-l">QR code scans</div><div class="stat-ch">&#x2191; 32% vs last month</div></div>
    <div class="stat"><div class="stat-ico b"><i class="ti ti-download"></i></div><div class="stat-v">89</div><div class="stat-l">PDF downloads</div><div class="stat-ch">&#x2191; 5% vs last month</div></div>
    <div class="stat"><div class="stat-ico r"><i class="ti ti-sparkles"></i></div><div class="stat-v">47</div><div class="stat-l">AI generations</div><div class="stat-ch">&#x2191; 12% vs last month</div></div>
  </div>
  <div class="scroll">
    <div class="two-col">
      <div class="card card-pad">
        <div class="card-hd">My menus<span class="card-lnk" onclick="SS('editor')">Open editor &#x2192;</span></div>
        <div class="ml-i" onclick="SS('editor')"><div class="ml-thumb"><i class="ti ti-tools-kitchen-2" style="color:var(--gold-d)"></i></div><div style="flex:1"><div class="ml-name">Kusina ni Lola</div><div class="ml-meta">Updated 2h ago &middot; 6 items</div></div><span class="badge live">Live</span></div>
        <div class="ml-i"><div class="ml-thumb"><i class="ti ti-coffee" style="color:#8B4513"></i></div><div style="flex:1"><div class="ml-name">The Corner Caf&#xe9;</div><div class="ml-meta">Updated yesterday &middot; 18 items</div></div><span class="badge live">Live</span></div>
        <div class="ml-i"><div class="ml-thumb"><i class="ti ti-cake" style="color:#E91E63"></i></div><div style="flex:1"><div class="ml-name">Sweet Bites Bakery</div><div class="ml-meta">Updated 3d ago &middot; 31 items</div></div><span class="badge draft">Draft</span></div>
        <button class="add-dsh" onclick="SS('templates')"><i class="ti ti-plus" style="font-size:11px"></i>Create new menu</button>
      </div>
      <div class="card card-pad">
        <div class="card-hd">Recent activity</div>
        <div class="act-i"><div class="act-dot"></div><div><div class="act-txt">Menu <strong>Kusina ni Lola</strong> exported as PDF</div><div class="act-time">2 hours ago</div></div></div>
        <div class="act-i"><div class="act-dot" style="background:var(--green)"></div><div><div class="act-txt">QR code scanned 14 times at table view</div><div class="act-time">4 hours ago</div></div></div>
        <div class="act-i"><div class="act-dot" style="background:var(--blue)"></div><div><div class="act-txt">AI generated 5 item descriptions for Caf&#xe9;</div><div class="act-time">Yesterday, 6:30 PM</div></div></div>
        <div class="act-i"><div class="act-dot"></div><div><div class="act-txt">Template <strong>Filipino Feast</strong> applied</div><div class="act-time">2 days ago</div></div></div>
        <div class="act-i"><div class="act-dot" style="background:var(--red)"></div><div><div class="act-txt">Instagram story exported for 3 specials</div><div class="act-time">3 days ago</div></div></div>
      </div>
    </div>
  </div>
</div>

<!-- TEMPLATES -->
<div class="screen" id="s-templates">
  <div class="ph"><div><div class="ph-title">Template library</div><div class="ph-sub">60+ professional designs for every restaurant type</div></div></div>
  <div class="chip-row"><div class="chip active">All types</div><div class="chip">Fine dining</div><div class="chip">Caf&#xe9;</div><div class="chip">Fast food</div><div class="chip">Bakery</div><div class="chip">Arabic</div><div class="chip">Asian</div><div class="chip">Filipino</div></div>
  <div class="scroll">
    <div class="tgrid">
      <div class="tcard" onclick="SS('editor')"><div class="tprev" style="background:#1A1714"><div style="text-align:center;color:rgba(201,168,76,.9);font-size:13px;font-weight:500">MAISON<br><span style="font-size:8px;opacity:.6;letter-spacing:.15em">RESTAURANT</span></div><div class="tbadge pr">Pro</div></div><div class="tinfo"><div class="tname">Maison fine dining</div><div class="tmeta">A4 Portrait &middot; &#x2605;4.9 &middot; 2.1k uses</div><button class="tact" onclick="event.stopPropagation();SS('editor')">Use template</button></div></div>
      <div class="tcard" onclick="SS('editor')"><div class="tprev" style="background:#8B4513"><div style="text-align:center;color:#FFF8F0"><i class="ti ti-coffee" style="font-size:22px;display:block;margin-bottom:4px"></i><span style="font-size:12px;font-weight:500">Rustic Brew</span></div><div class="tbadge fr">Free</div></div><div class="tinfo"><div class="tname">Rustic brew caf&#xe9;</div><div class="tmeta">A5 Portrait &middot; &#x2605;4.7 &middot; 1.8k uses</div><button class="tact" onclick="event.stopPropagation();SS('editor')">Use template</button></div></div>
      <div class="tcard" onclick="SS('editor')"><div class="tprev" style="background:#2C7744"><div style="text-align:center;color:rgba(250,235,180,.95)"><i class="ti ti-moon" style="font-size:20px;display:block;margin-bottom:4px"></i><span style="font-size:13px;font-weight:500">&#x627;&#x644;&#x646;&#x62e;&#x64a;&#x644;</span></div><div class="tbadge pr">Pro</div></div><div class="tinfo"><div class="tname">Al Nakheel arabic</div><div class="tmeta">Bi-fold &middot; &#x2605;4.8 &middot; 3.4k uses</div><button class="tact" onclick="event.stopPropagation();SS('editor')">Use template</button></div></div>
      <div class="tcard" onclick="SS('editor')"><div class="tprev" style="background:#C0392B"><div style="text-align:center;color:#fff;font-size:14px;font-weight:500">QUICK BITE<br><span style="font-size:8px;opacity:.7;letter-spacing:.12em">FAST &amp; FRESH</span></div><div class="tbadge fr">Free</div></div><div class="tinfo"><div class="tname">Quick bite fast food</div><div class="tmeta">Single page &middot; &#x2605;4.6 &middot; 5.2k uses</div><button class="tact" onclick="event.stopPropagation();SS('editor')">Use template</button></div></div>
      <div class="tcard" onclick="SS('editor')"><div class="tprev" style="background:#C9A84C"><div style="text-align:center;color:var(--ink);font-size:13px;font-weight:500">AURELIUS<br><span style="font-size:7px;opacity:.6;letter-spacing:.2em">LUXURY DINING</span></div><div class="tbadge pr">Pro</div></div><div class="tinfo"><div class="tname">Aurelius luxury</div><div class="tmeta">Booklet &middot; &#x2605;5.0 &middot; 892 uses</div><button class="tact" onclick="event.stopPropagation();SS('editor')">Use template</button></div></div>
      <div class="tcard" onclick="SS('editor')"><div class="tprev" style="background:#ECF0F1"><div style="text-align:center;color:var(--ink);font-size:13px;font-weight:300">minimal<div style="width:24px;height:1.5px;background:var(--ink);margin:7px auto;opacity:.4"></div></div><div class="tbadge fr">Free</div></div><div class="tinfo"><div class="tname">Modern minimalist</div><div class="tmeta">A4 Landscape &middot; &#x2605;4.5 &middot; 6.7k uses</div><button class="tact" onclick="event.stopPropagation();SS('editor')">Use template</button></div></div>
    </div>
  </div>
</div>

<!-- EDITOR -->
<div class="screen" id="s-editor" style="flex-direction:column">
  <div class="ed-topbar">
    <div class="ed-tbname"><i class="ti ti-edit" style="font-size:13px;color:var(--gold-d)"></i><span id="canvas-rname-topbar">Kusina ni Lola</span></div>
    <span class="ed-tag">A4 Portrait &middot; Filipino Gold</span>
    <div style="margin-left:auto;display:flex;gap:5px">
      <button style="padding:4px 9px;border-radius:5px;border:0.5px solid var(--bd);background:var(--white);font-size:10px;font-weight:500;cursor:pointer;color:var(--ink2)">Preview</button>
      <button style="padding:4px 9px;border-radius:5px;border:none;background:var(--ink);font-size:10px;font-weight:500;cursor:pointer;color:var(--cream)">Export PDF</button>
    </div>
  </div>
  <div class="editor-wrap">
    <div class="ed-left">
      <div class="ed-tools">
        <button class="et active"><i class="ti ti-list"></i>Items</button>
        <button class="et"><i class="ti ti-palette"></i>Design</button>
        <button class="et"><i class="ti ti-photo"></i>Photos</button>
        <button class="et"><i class="ti ti-layout"></i>Layout</button>
      </div>
      <div class="ed-content">
        <div class="ed-sec">Categories</div>
        <div class="cpills"><div class="cp active">All</div><div class="cp">Mains</div><div class="cp">Sides</div><div class="cp">Drinks</div><div class="cp">Desserts</div></div>
        <div class="ed-sec">Items (<span id="item-count">6</span>)</div>
        <div id="item-list"></div>
        <button class="add-dsh" onclick="openModal(null)"><i class="ti ti-plus" style="font-size:11px"></i>Add menu item</button>
      </div>
    </div>
    <div class="canvas-area">
      <div class="menu-pg" id="menu-pg" style="width:290px">
        <div class="m-hd" id="canvas-hd-el">
          <div style="display:flex;align-items:center;gap:9px">
            <div class="m-logo"><i class="ti ti-tools-kitchen-2" style="font-size:15px;color:var(--ink)"></i></div>
            <div><div class="m-rname" id="canvas-rname">Kusina ni Lola</div><div class="m-tag">AUTHENTIC FILIPINO CUISINE &middot; MANILA</div></div>
          </div>
          <div class="m-contacts"><div class="m-con"><i class="ti ti-phone"></i>+63 2 8123 4567</div><div class="m-con"><i class="ti ti-map-pin"></i>Makati, Manila</div><div class="m-con"><i class="ti ti-world"></i>kusinamilola.ph</div></div>
        </div>
        <div class="m-body" id="canvas-body"></div>
      </div>
    </div>
    <div class="ed-right">
      <div class="prop-sec">Restaurant</div>
      <label class="prop-label">Name</label>
      <input class="prop-input" type="text" id="prop-rname" value="Kusina ni Lola" oninput="updateRName(this.value)">
      <label class="prop-label">Tagline</label>
      <input class="prop-input" type="text" value="Authentic Filipino Cuisine">
      <div class="prop-sec">Brand colour</div>
      <div class="swatches">
        <div class="sw active" style="background:#1A1714" onclick="setHdrColor('#1A1714','#C9A84C',this)"></div>
        <div class="sw" style="background:#C9A84C" onclick="setHdrColor('#C9A84C','#1A1714',this)"></div>
        <div class="sw" style="background:#2C7744" onclick="setHdrColor('#2C7744','#FAF8F4',this)"></div>
        <div class="sw" style="background:#C0392B" onclick="setHdrColor('#C0392B','#FAF8F4',this)"></div>
        <div class="sw" style="background:#1A3A5C" onclick="setHdrColor('#1A3A5C','#FAF8F4',this)"></div>
        <div class="sw" style="background:#8B4513" onclick="setHdrColor('#8B4513','#FDF6E3',this)"></div>
      </div>
      <div class="prop-sec">Currency</div>
      <select class="prop-input" id="cur-sel-editor" onchange="setCurEditor(this.value)" style="cursor:pointer">
        <option value="&#x20B1;">&#x20B1; PHP (Philippines)</option>
        <option value="$">$ USD</option>
        <option value="AED">AED (UAE)</option>
        <option value="&#x20AC;">&#x20AC; EUR</option>
        <option value="&#xA3;">&#xA3; GBP</option>
        <option value="S$">S$ SGD</option>
        <option value="Rp">Rp IDR</option>
        <option value="&#x0E3F;">&#x0E3F; THB</option>
      </select>
      <label class="prop-label">Page size</label>
      <select class="prop-input" style="cursor:pointer"><option>A4 Portrait</option><option>A5 Portrait</option><option>Bi-fold</option></select>
      <label class="prop-label">Font</label>
      <select class="prop-input" style="cursor:pointer"><option>Playfair Display</option><option>DM Sans</option><option>Noto Arabic</option></select>
      <button class="ai-pill" onclick="SS('ai')"><i class="ti ti-sparkles"></i>AI design suggest</button>
      <div class="prop-sec">Export</div>
      <div class="exp-btns">
        <button class="exp-btn p"><i class="ti ti-file-type-pdf"></i>Print PDF</button>
        <button class="exp-btn"><i class="ti ti-brand-instagram"></i>Instagram</button>
        <button class="exp-btn"><i class="ti ti-brand-whatsapp"></i>WhatsApp</button>
        <button class="exp-btn"><i class="ti ti-world"></i>Publish online</button>
      </div>
    </div>
  </div>
</div>

<!-- AI ASSISTANT -->
<div class="screen" id="s-ai">
  <div class="scroll" style="padding-top:16px">
    <div class="ai-hero"><div class="ai-hero-title">AI menu assistant</div><div class="ai-hero-sub">Powered by Claude &mdash; generate descriptions, translate menus, write promo copy, and get design suggestions instantly.</div></div>
    <div class="ai-feat-grid">
      <div class="ai-feat" onclick="setAIPrompt('Write a professional description for: Crispy Pata — deep-fried pork knuckle, liver sauce, for a premium Filipino restaurant. Max 40 words, no clich\xe9s.')"><div class="ai-feat-ico"><i class="ti ti-writing"></i></div><div class="ai-feat-title">Generate descriptions</div><div class="ai-feat-desc">Write appetising item descriptions matched to your restaurant's tone</div></div>
      <div class="ai-feat" onclick="setAIPrompt('Translate to Arabic: Crispy Pata &#x20B1;580, Kare-Kare &#x20B1;490, Sinigang na Salmon &#x20B1;420. Output JSON with name_ar and description_ar fields.')"><div class="ai-feat-ico"><i class="ti ti-world"></i></div><div class="ai-feat-title">Translate menus</div><div class="ai-feat-desc">Instantly translate to Arabic, French, or Spanish with RTL support</div></div>
      <div class="ai-feat" onclick="setAIPrompt('Write a Fiesta season Instagram caption for Kusina ni Lola Filipino restaurant in Manila. Include a call to action. Under 150 characters.')"><div class="ai-feat-ico"><i class="ti ti-speakerphone"></i></div><div class="ai-feat-title">Promo copy</div><div class="ai-feat-desc">Seasonal offers, social captions, and WhatsApp broadcast messages</div></div>
      <div class="ai-feat" onclick="setAIPrompt('Suggest a colour palette and font pairing for a warm, family-friendly Filipino restaurant in Manila. Include hex codes.')"><div class="ai-feat-ico"><i class="ti ti-palette"></i></div><div class="ai-feat-title">Design suggestions</div><div class="ai-feat-desc">Get layout, colour, and font pairing recommendations for your brand</div></div>
    </div>
    <div class="ai-input-card">
      <div style="font-size:11px;font-weight:500;margin-bottom:8px;display:flex;align-items:center;gap:5px"><i class="ti ti-message" style="font-size:13px;color:var(--gold-d)"></i>Ask AI assistant</div>
      <textarea class="ai-textarea" id="ai-prompt" placeholder="e.g. Write a description for our Halo-Halo dessert..."></textarea>
      <button class="ai-run" onclick="runAI()"><i class="ti ti-sparkles"></i>Generate</button>
      <div class="ai-result" id="ai-result"></div>
    </div>
    <div style="margin-top:12px;background:var(--white);border:0.5px solid var(--bd);border-radius:9px;padding:10px 12px">
      <div style="font-size:10px;font-weight:500;color:var(--ink);margin-bottom:5px;display:flex;align-items:center;gap:5px"><i class="ti ti-info-circle" style="font-size:12px;color:var(--gold-d)"></i>AI usage today</div>
      <div style="font-size:10px;color:var(--ink3);margin-bottom:5px">8 of 20 descriptions used &middot; resets at midnight</div>
      <div style="height:4px;background:var(--cream2);border-radius:2px"><div style="height:100%;width:40%;background:var(--gold);border-radius:2px"></div></div>
    </div>
  </div>
</div>

<!-- ANALYTICS -->
<div class="screen" id="s-analytics">
  <div class="ph"><div><div class="ph-title">Analytics</div><div class="ph-sub">Last 30 days across all menus</div></div><select style="margin-left:auto;border:0.5px solid var(--bd);border-radius:7px;padding:5px 9px;font-size:10px;background:var(--white);font-family:inherit;color:var(--ink);outline:none;cursor:pointer"><option>Last 30 days</option><option>Last 7 days</option><option>Last 90 days</option></select></div>
  <div style="padding:0 20px;flex-shrink:0"><div class="anl-stats"><div class="anl-card"><div class="anl-v">1,284</div><div class="anl-l">Total menu views</div><div class="anl-ch"><i class="ti ti-trending-up" style="font-size:10px"></i>+18%</div></div><div class="anl-card"><div class="anl-v">347</div><div class="anl-l">QR scans</div><div class="anl-ch"><i class="ti ti-trending-up" style="font-size:10px"></i>+32%</div></div><div class="anl-card"><div class="anl-v">89</div><div class="anl-l">PDF downloads</div><div class="anl-ch"><i class="ti ti-trending-up" style="font-size:10px"></i>+5%</div></div><div class="anl-card"><div class="anl-v">43</div><div class="anl-l">Social exports</div><div class="anl-ch"><i class="ti ti-trending-up" style="font-size:10px"></i>+21%</div></div></div></div>
  <div class="scroll" style="padding-top:8px">
    <div class="chart-2col">
      <div class="card card-pad">
        <div class="card-hd">Views by menu</div>
        <div class="bar-chart-wrap"><div class="bar-row"><div class="bar-label">Kusina ni Lola</div><div class="bar-track"><div class="bar-fill" style="width:82%"></div></div><div class="bar-val">1,052</div></div><div class="bar-row"><div class="bar-label">Corner Caf&#xe9;</div><div class="bar-track"><div class="bar-fill" style="width:53%"></div></div><div class="bar-val">681</div></div><div class="bar-row"><div class="bar-label">Sweet Bites</div><div class="bar-track"><div class="bar-fill" style="width:32%"></div></div><div class="bar-val">412</div></div></div>
        <div style="height:10px"></div>
        <div class="card-hd">Traffic sources</div>
        <div class="bar-chart-wrap"><div class="bar-row"><div class="bar-label">QR scan</div><div class="bar-track"><div class="bar-fill" style="width:55%"></div></div><div class="bar-val">55%</div></div><div class="bar-row"><div class="bar-label">Direct link</div><div class="bar-track"><div class="bar-fill" style="width:30%;background:var(--blue)"></div></div><div class="bar-val">30%</div></div><div class="bar-row"><div class="bar-label">Social</div><div class="bar-track"><div class="bar-fill" style="width:15%;background:var(--green)"></div></div><div class="bar-val">15%</div></div></div>
      </div>
      <div class="card card-pad">
        <div class="card-hd">Export breakdown</div>
        <svg width="100%" viewBox="0 0 110 90" style="display:block;margin:0 auto 8px"><circle cx="55" cy="45" r="32" fill="none" stroke="var(--gold)" stroke-width="16" stroke-dasharray="113 201" stroke-dashoffset="0"/><circle cx="55" cy="45" r="32" fill="none" stroke="var(--red)" stroke-width="16" stroke-dasharray="70 201" stroke-dashoffset="-113"/><circle cx="55" cy="45" r="32" fill="none" stroke="var(--green)" stroke-width="16" stroke-dasharray="40 201" stroke-dashoffset="-183"/><text x="55" y="42" text-anchor="middle" font-size="10" font-weight="500" fill="#1A1714">89</text><text x="55" y="53" text-anchor="middle" font-size="7" fill="#6B6358">exports</text></svg>
        <div style="display:flex;flex-direction:column;gap:5px"><div style="display:flex;align-items:center;gap:5px;font-size:10px;color:var(--ink3)"><div style="width:7px;height:7px;border-radius:50%;background:var(--gold)"></div>PDF print &mdash; 56%</div><div style="display:flex;align-items:center;gap:5px;font-size:10px;color:var(--ink3)"><div style="width:7px;height:7px;border-radius:50%;background:var(--red)"></div>Instagram &mdash; 35%</div><div style="display:flex;align-items:center;gap:5px;font-size:10px;color:var(--ink3)"><div style="width:7px;height:7px;border-radius:50%;background:var(--green)"></div>WhatsApp &mdash; 20%</div></div>
      </div>
    </div>
    <div class="exp-table">
      <div class="et-hd">Recent exports</div>
      <div class="et-row"><div class="et-c1">Kusina ni Lola</div><div class="et-c2">PDF print</div><div class="et-c3">A4 &middot; 2.4 MB</div><div class="et-c4"><span class="et-badge pdf">PDF</span></div></div>
      <div class="et-row"><div class="et-c1">Corner Caf&#xe9;</div><div class="et-c2">Instagram post</div><div class="et-c3">1080&times;1350</div><div class="et-c4"><span class="et-badge ig">Instagram</span></div></div>
      <div class="et-row"><div class="et-c1">Sweet Bites</div><div class="et-c2">WhatsApp catalog</div><div class="et-c3">800&times;800</div><div class="et-c4"><span class="et-badge wa">WhatsApp</span></div></div>
    </div>
  </div>
</div>

<!-- DIGITAL MENU -->
<div class="screen" id="s-digital">
  <div class="ph"><div><div class="ph-title">Digital menu</div><div class="ph-sub">Customer-facing page &middot; live at mymenugenerator.app/menu/kusina-ni-lola</div></div></div>
  <div class="scroll">
    <div class="dm-grid">
      <div>
        <div class="card card-pad" style="margin-bottom:10px">
          <div class="card-hd">Page settings</div>
          <div class="dm-url-bar"><i class="ti ti-link"></i>mymenugenerator.app/menu/kusina-ni-lola<i class="ti ti-copy" style="margin-left:auto;cursor:pointer"></i></div>
          <div class="dm-tgl-row"><div><div class="dm-tgl-label">Menu is live</div><div class="dm-tgl-sub">Customers can view this page</div></div><label class="tgl"><input type="checkbox" checked><div class="tgl-t"></div><div class="tgl-th"></div></label></div>
          <div class="dm-tgl-row"><div><div class="dm-tgl-label">Show food photos</div><div class="dm-tgl-sub">Display item images</div></div><label class="tgl"><input type="checkbox" id="dm-photos" checked onchange="renderDMItems()"><div class="tgl-t"></div><div class="tgl-th"></div></label></div>
          <div class="dm-tgl-row"><div><div class="dm-tgl-label">Show prices</div><div class="dm-tgl-sub">Hide for QR-only menus</div></div><label class="tgl"><input type="checkbox" id="dm-prices" checked onchange="renderDMItems()"><div class="tgl-t"></div><div class="tgl-th"></div></label></div>
          <div class="dm-tgl-row"><div><div class="dm-tgl-label">Show contact buttons</div><div class="dm-tgl-sub">Call, WhatsApp, directions</div></div><label class="tgl"><input type="checkbox" id="dm-contacts" checked onchange="toggleDMContacts(this.checked)"><div class="tgl-t"></div><div class="tgl-th"></div></label></div>
          <div class="dm-tgl-row"><div><div class="dm-tgl-label">Allow search</div><div class="dm-tgl-sub">Search bar on menu page</div></div><label class="tgl"><input type="checkbox" id="dm-search" checked onchange="toggleDMSearch(this.checked)"><div class="tgl-t"></div><div class="tgl-th"></div></label></div>
        </div>
        <div class="card card-pad">
          <div class="card-hd">Analytics (30 days)</div>
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;margin-bottom:10px">
            <div style="background:var(--cream2);border-radius:7px;padding:9px;text-align:center"><div style="font-size:16px;font-weight:500">347</div><div style="font-size:9px;color:var(--ink3)">Page views</div></div>
            <div style="background:var(--cream2);border-radius:7px;padding:9px;text-align:center"><div style="font-size:16px;font-weight:500">189</div><div style="font-size:9px;color:var(--ink3)">QR scans</div></div>
            <div style="background:var(--cream2);border-radius:7px;padding:9px;text-align:center"><div style="font-size:16px;font-weight:500">4:12</div><div style="font-size:9px;color:var(--ink3)">Avg. time</div></div>
          </div>
          <div style="display:flex;gap:6px">
            <button style="flex:1;padding:7px;border-radius:7px;border:0.5px solid var(--bd);background:var(--white);font-size:10px;font-weight:500;cursor:pointer;font-family:inherit;color:var(--ink2);display:flex;align-items:center;justify-content:center;gap:4px"><i class="ti ti-brand-whatsapp" style="font-size:12px"></i>Share</button>
            <button style="flex:1;padding:7px;border-radius:7px;border:0.5px solid var(--bd);background:var(--white);font-size:10px;font-weight:500;cursor:pointer;font-family:inherit;color:var(--ink2);display:flex;align-items:center;justify-content:center;gap:4px"><i class="ti ti-link" style="font-size:12px"></i>Copy link</button>
          </div>
        </div>
      </div>
      <div class="phone-frame">
        <div style="font-size:9px;font-weight:500;color:var(--ink4);margin-bottom:6px;text-align:center;display:flex;align-items:center;gap:4px;justify-content:center"><i class="ti ti-device-mobile" style="font-size:12px"></i>Customer view</div>
        <div class="phone">
          <div class="phone-notch"></div>
          <div class="phone-screen">
            <div class="dm-hero">
              <div class="dm-logo" style="background:var(--gold)"><i class="ti ti-tools-kitchen-2" style="font-size:17px;color:var(--ink)"></i></div>
              <div class="dm-rname">Kusina ni Lola</div>
              <div class="dm-tag">AUTHENTIC FILIPINO CUISINE &middot; MANILA</div>
              <div class="dm-contacts-row" id="dm-contacts-row">
                <div class="dm-cb"><i class="ti ti-phone"></i><span>Call</span></div>
                <div class="dm-cb"><i class="ti ti-brand-whatsapp"></i><span>WhatsApp</span></div>
                <div class="dm-cb"><i class="ti ti-map-pin"></i><span>Directions</span></div>
                <div class="dm-cb"><i class="ti ti-world"></i><span>Website</span></div>
              </div>
            </div>
            <div id="dm-search-bar"><div class="dm-search-wrap"><i class="ti ti-search dm-search-ico"></i><input class="dm-search" type="text" placeholder="Search menu..."></div></div>
            <div class="dm-cats-row"><div class="dcat active">All</div><div class="dcat">Mains</div><div class="dcat">Sides</div><div class="dcat">Drinks</div><div class="dcat">Desserts</div></div>
            <div id="dm-items-wrap"></div>
            <div class="dm-footer"><div class="dm-footer-logo"><i class="ti ti-tools-kitchen-2"></i>My Menu Generator</div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- QR CODES -->
<div class="screen" id="s-qr">
  <div class="ph"><div><div class="ph-title">QR code generator</div><div class="ph-sub">Styled, branded, print-ready QR codes for your menu</div></div></div>
  <div class="scroll">
    <div class="qr-grid">
      <div>
        <div class="card card-pad" style="margin-bottom:8px">
          <label class="fi-label">Menu URL</label><input class="fi-input" type="text" id="qr-url" value="https://mymenugenerator.app/menu/kusina-ni-lola" oninput="buildQR()">
          <label class="fi-label">Label above QR</label><input class="fi-input" type="text" id="qr-top" value="Scan to view our menu" oninput="updateQRLabels()">
          <label class="fi-label">Label below QR</label><input class="fi-input" type="text" id="qr-bot" value="mymenugenerator.app/menu/kusina-ni-lola" oninput="updateQRLabels()">
          <div style="font-size:10px;font-weight:500;color:var(--ink);margin:10px 0 5px">QR colour</div>
          <div class="clr-row">
            <div class="clr-sw active" style="background:#1A1714" onclick="setQRFg('#1A1714',this)"></div>
            <div class="clr-sw" style="background:#C9A84C" onclick="setQRFg('#C9A84C',this)"></div>
            <div class="clr-sw" style="background:#2D6A4F" onclick="setQRFg('#2D6A4F',this)"></div>
            <div class="clr-sw" style="background:#C0392B" onclick="setQRFg('#C0392B',this)"></div>
            <div class="clr-sw" style="background:#1A3A5C" onclick="setQRFg('#1A3A5C',this)"></div>
            <input type="color" value="#1A1714" oninput="setQRFg(this.value,null)" style="width:20px;height:20px;border-radius:4px;border:1.5px solid var(--bd);cursor:pointer;padding:0">
          </div>
          <div style="font-size:10px;font-weight:500;color:var(--ink);margin:8px 0 5px">Size</div>
          <div class="sz-row"><div class="sz-opt" id="sz-sm" onclick="setQRSize(100,this)">Small<br><span style="font-size:8px;font-weight:400">3cm</span></div><div class="sz-opt active" id="sz-md" onclick="setQRSize(140,this)">Medium<br><span style="font-size:8px;font-weight:400">5cm</span></div><div class="sz-opt" id="sz-lg" onclick="setQRSize(180,this)">Large<br><span style="font-size:8px;font-weight:400">8cm</span></div><div class="sz-opt" id="sz-xl" onclick="setQRSize(220,this)">Poster<br><span style="font-size:8px;font-weight:400">15cm</span></div></div>
          <div class="dl-btns"><button class="dl-btn p"><i class="ti ti-download"></i>Download PNG</button><button class="dl-btn"><i class="ti ti-file-vector"></i>Download SVG</button><button class="dl-btn"><i class="ti ti-file-type-pdf"></i>Download with template</button></div>
        </div>
        <div class="card card-pad">
          <div style="font-size:10px;font-weight:500;color:var(--ink);margin-bottom:8px">Scan analytics &mdash; last 7 days</div>
          <div class="scan-hist"><div class="sh-row"><span class="sh-day">Monday</span><div class="sh-track"><div class="sh-fill" style="width:62%"></div></div><span class="sh-val">31</span></div><div class="sh-row"><span class="sh-day">Tuesday</span><div class="sh-track"><div class="sh-fill" style="width:48%"></div></div><span class="sh-val">24</span></div><div class="sh-row"><span class="sh-day">Wednesday</span><div class="sh-track"><div class="sh-fill" style="width:56%"></div></div><span class="sh-val">28</span></div><div class="sh-row"><span class="sh-day">Thursday</span><div class="sh-track"><div class="sh-fill" style="width:70%"></div></div><span class="sh-val">35</span></div><div class="sh-row"><span class="sh-day">Friday</span><div class="sh-track"><div class="sh-fill" style="width:100%"></div></div><span class="sh-val">50</span></div><div class="sh-row"><span class="sh-day">Saturday</span><div class="sh-track"><div class="sh-fill" style="width:82%"></div></div><span class="sh-val">41</span></div><div class="sh-row"><span class="sh-day">Sunday</span><div class="sh-track"><div class="sh-fill" style="width:40%"></div></div><span class="sh-val">20</span></div></div>
        </div>
      </div>
      <div class="card card-pad">
        <div style="font-size:10px;font-weight:500;color:var(--ink);margin-bottom:8px">Live preview &mdash; point your phone camera to scan</div>
        <div class="qr-prev-area"><div class="qr-container" id="qr-container"><div class="qr-top-lbl" id="qr-top-lbl">Scan to view our menu</div><div class="qr-svg-wrap"><div id="qr-code-el"></div><div class="qr-logo"><i class="ti ti-tools-kitchen-2" id="qr-logo-icon" style="font-size:14px;color:var(--ink)"></i></div></div><div class="qr-bot-lbl" id="qr-bot-lbl">mymenugenerator.app/menu/kusina-ni-lola</div></div></div>
        <div style="font-size:10px;font-weight:500;color:var(--ink);margin-bottom:7px">Print templates</div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:5px">
          <div style="border:0.5px solid var(--bd);border-radius:7px;overflow:hidden;cursor:pointer" onclick="this.style.borderColor='var(--gold)'"><div style="height:56px;background:var(--cream2);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px"><div style="width:24px;height:24px;background:var(--ink);border-radius:3px;display:flex;align-items:center;justify-content:center"><i class="ti ti-qrcode" style="font-size:14px;color:var(--gold)"></i></div><div style="font-size:7px;color:var(--ink3)">Scan our menu</div></div><div style="padding:4px;font-size:8px;font-weight:500;text-align:center;color:var(--ink3);border-top:0.5px solid var(--bd)">Table card</div></div>
          <div style="border:0.5px solid var(--bd);border-radius:7px;overflow:hidden;cursor:pointer" onclick="this.style.borderColor='var(--gold)'"><div style="height:56px;background:var(--ink);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px"><div style="font-size:8px;color:var(--gold);font-weight:500">KUSINA NI LOLA</div><div style="width:22px;height:22px;background:var(--cream);border-radius:3px;display:flex;align-items:center;justify-content:center"><i class="ti ti-qrcode" style="font-size:11px;color:var(--ink)"></i></div></div><div style="padding:4px;font-size:8px;font-weight:500;text-align:center;color:var(--ink3);border-top:0.5px solid var(--bd)">Poster</div></div>
          <div style="border:0.5px solid var(--bd);border-radius:7px;overflow:hidden;cursor:pointer" onclick="this.style.borderColor='var(--gold)'"><div style="height:56px;background:var(--gold-l);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px"><i class="ti ti-qrcode" style="font-size:18px;color:var(--gold-d)"></i><div style="font-size:7px;color:var(--gold-d);font-weight:500">SCAN ME</div></div><div style="padding:4px;font-size:8px;font-weight:500;text-align:center;color:var(--ink3);border-top:0.5px solid var(--bd)">Sticker</div></div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- CURRENCY -->
<div class="screen" id="s-currency">
  <div class="ph"><div><div class="ph-title">Currency settings</div><div class="ph-sub">Choose your menu currency &mdash; updates all prices instantly</div></div><button class="ph-btn" onclick="saveCurrency()"><i class="ti ti-check"></i>Save</button></div>
  <div class="scroll">
    <div class="cur-grid">
      <div>
        <div style="position:relative;margin-bottom:8px"><i class="ti ti-search" style="position:absolute;left:9px;top:50%;transform:translateY(-50%);font-size:13px;color:var(--ink4)"></i><input type="text" placeholder="Search currency or country..." style="width:100%;padding:6px 8px 6px 28px;border:0.5px solid var(--bd);border-radius:7px;font-size:10px;font-family:inherit;background:var(--cream2);outline:none;color:var(--ink)" id="cur-search" oninput="filterCurrencies(this.value)"></div>
        <div id="cur-list" style="max-height:400px;overflow-y:auto"></div>
      </div>
      <div>
        <div class="card card-pad" style="margin-bottom:10px">
          <div class="card-hd">Live preview</div>
          <div style="background:var(--cream2);border-radius:7px;padding:12px;margin-bottom:10px">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px"><div style="width:30px;height:30px;border-radius:6px;background:var(--ink);display:flex;align-items:center;justify-content:center;font-size:13px;color:var(--gold)"><i class="ti ti-tools-kitchen-2"></i></div><div><div style="font-size:11px;font-weight:500;color:var(--ink)">Kusina ni Lola</div><div style="font-size:9px;color:var(--ink4)">Authentic Filipino Cuisine</div></div></div>
            <div id="cur-preview-items"></div>
          </div>
          <div class="card-hd">Format options</div>
          <div style="display:flex;gap:5px;margin-bottom:8px"><button class="sz-opt active" id="pos-before" style="flex:1" onclick="setCurPos('before',this)">&#x20B1; 580 (before)</button><button class="sz-opt" id="pos-after" style="flex:1" onclick="setCurPos('after',this)">580 &#x20B1; (after)</button></div>
          <div style="display:flex;align-items:center;gap:8px;font-size:10px;color:var(--ink3)">Decimal places:<button onclick="changeDecimals(-1)" style="width:22px;height:22px;border:0.5px solid var(--bd);border-radius:4px;background:var(--white);cursor:pointer;font-size:13px">&#x2212;</button><span id="dec-val" style="font-weight:500;color:var(--ink);min-width:14px;text-align:center">0</span><button onclick="changeDecimals(1)" style="width:22px;height:22px;border:0.5px solid var(--bd);border-radius:4px;background:var(--white);cursor:pointer;font-size:13px">+</button><span style="margin-left:4px;font-size:9px">&#x2192; <span id="dec-preview" style="font-weight:500;color:var(--ink)">&#x20B1; 580</span></span></div>
        </div>
        <button style="width:100%;background:var(--ink);color:var(--cream);border:none;border-radius:8px;padding:9px;font-size:11px;font-weight:500;cursor:pointer;font-family:inherit;display:flex;align-items:center;justify-content:center;gap:6px" onclick="saveCurrency()"><i class="ti ti-check" style="font-size:13px"></i>Save currency settings</button>
      </div>
    </div>
  </div>
</div>

<!-- PRICING -->
<div class="screen" id="s-pricing">
  <div class="pricing-hero">
    <div class="pricing-title">Simple, honest pricing</div>
    <div class="pricing-sub">Start free, upgrade when you're ready. No hidden fees. Cancel anytime.</div>
    <div class="billing-toggle"><span class="bt-lbl active" id="lbl-m" onclick="setBilling('monthly')">Monthly</span><div class="bt-sw monthly" id="bt-sw" onclick="toggleBilling()"><div class="bt-thumb"></div></div><span class="bt-lbl" id="lbl-a" onclick="setBilling('annual')">Annual</span><span class="save-badge">Save 30%</span></div>
    <div style="margin-top:8px;font-size:10px;color:var(--ink3)">Show prices in: <select onchange="setPricingCur(this.value)" style="border:0.5px solid var(--bd);border-radius:5px;padding:3px 6px;font-size:10px;font-family:inherit;background:var(--cream2);color:var(--ink);outline:none;cursor:pointer"><option value="PHP|&#x20B1;|1">PHP &#x20B1;</option><option value="USD|$|0.017">USD $</option><option value="AED|AED|0.064">AED</option><option value="EUR|&#x20AC;|0.016">EUR &#x20AC;</option><option value="SGD|S$|0.023">SGD S$</option><option value="IDR|Rp|270">IDR Rp</option></select></div>
  </div>
  <div class="scroll" style="padding-top:4px">
    <div class="plans-grid" id="plans-grid"></div>
    <div style="margin-top:14px;background:var(--white);border:0.5px solid var(--bd);border-radius:9px;padding:12px;text-align:center"><div style="display:flex;align-items:center;justify-content:center;gap:16px;flex-wrap:wrap"><div style="display:flex;align-items:center;gap:5px;font-size:10px;color:var(--ink3)"><i class="ti ti-lock" style="font-size:13px;color:var(--green)"></i>Stripe-secured</div><div style="display:flex;align-items:center;gap:5px;font-size:10px;color:var(--ink3)"><i class="ti ti-rotate-clockwise" style="font-size:13px;color:var(--green)"></i>Cancel anytime</div><div style="display:flex;align-items:center;gap:5px;font-size:10px;color:var(--ink3)"><i class="ti ti-shield-check" style="font-size:13px;color:var(--green)"></i>30-day money-back</div><div style="display:flex;align-items:center;gap:5px;font-size:10px;color:var(--ink3)"><i class="ti ti-world" style="font-size:13px;color:var(--green)"></i>GCash &middot; GrabPay &middot; Maya</div></div></div>
  </div>
</div>

<!-- ADMIN -->
<div class="screen" id="s-admin" style="flex-direction:row">
  <div class="admin-wrap">
    <div class="admin-sidebar">
      <div class="asb-logo"><div class="asb-sq"><i class="ti ti-tools-kitchen-2" style="font-size:10px;color:var(--ink)"></i></div><div><div style="display:flex;align-items:center;gap:4px"><span style="font-size:11px;font-weight:500;color:#F1F5F9">My Menu Generator</span><span class="asb-badge">ADMIN</span></div><div style="font-size:8px;color:#475569">Internal ops</div></div></div>
      <div class="asb-sec">Overview</div>
      <div class="asb-item active" onclick="admNav('overview',this)"><i class="ti ti-layout-dashboard"></i>Overview</div>
      <div class="asb-sec">Users &amp; billing</div>
      <div class="asb-item" onclick="admNav('users',this)"><i class="ti ti-users"></i>Users<span class="asb-chip g">2,841</span></div>
      <div class="asb-item" onclick="admNav('subs',this)"><i class="ti ti-credit-card"></i>Subscriptions</div>
      <div class="asb-sec">Content</div>
      <div class="asb-item" onclick="admNav('templates',this)"><i class="ti ti-template"></i>Templates</div>
      <div class="asb-sec">Operations</div>
      <div class="asb-item" onclick="admNav('tickets',this)"><i class="ti ti-headset"></i>Support<span class="asb-chip r">7</span></div>
      <div class="asb-item" onclick="admNav('flags',this)"><i class="ti ti-toggle-left"></i>Feature flags</div>
      <div class="asb-item" onclick="admNav('audit',this)"><i class="ti ti-activity"></i>Audit log</div>
      <div class="asb-bottom"><div class="asb-user"><div class="asb-av">SA</div><div style="min-width:0"><div style="font-size:10px;font-weight:500;color:#F1F5F9">Super Admin</div><div style="font-size:8px;color:#475569">admin@mymenugenerator.app</div></div></div></div>
    </div>
    <div class="admin-main">
      <div class="adm-topbar"><span class="adm-title" id="adm-title">Overview</span><div style="margin-left:auto;display:flex;gap:5px"><button class="adm-da pr">Export</button></div></div>
      <div class="adm-sc active" id="adm-overview">
        <div class="adm-kpi"><div class="ak"><div class="ak-v">2,841</div><div class="ak-l">Total users</div><div class="ak-d">&#x2191; +124 this week</div></div><div class="ak"><div class="ak-v">512</div><div class="ak-l">Paid subscribers</div><div class="ak-d">&#x2191; +34 this week</div></div><div class="ak"><div class="ak-v">$5,104</div><div class="ak-l">MRR (USD)</div><div class="ak-d">&#x2191; 9.1% this month</div></div><div class="ak"><div class="ak-v">7</div><div class="ak-l">Open tickets</div><div class="ak-d" style="color:var(--red)">3 high priority</div></div></div>
        <div style="display:grid;grid-template-columns:2fr 1fr;gap:8px;margin-bottom:8px">
          <div class="card card-pad"><div style="font-size:10px;font-weight:500;margin-bottom:8px">New signups &mdash; last 8 weeks</div><div class="adm-bars" id="adm-bars"></div></div>
          <div class="card card-pad"><div style="font-size:10px;font-weight:500;margin-bottom:8px">Plan mix</div><svg width="100%" viewBox="0 0 90 70" style="display:block;margin:0 auto 6px"><circle cx="45" cy="35" r="25" fill="none" stroke="#E2E8F0" stroke-width="12"/><circle cx="45" cy="35" r="25" fill="none" stroke="#C9A84C" stroke-width="12" stroke-dasharray="78 157" stroke-dashoffset="0"/><circle cx="45" cy="35" r="25" fill="none" stroke="#1A3A5C" stroke-width="12" stroke-dasharray="16 157" stroke-dashoffset="-78"/><text x="45" y="32" text-anchor="middle" font-size="9" font-weight="500" fill="#1A1714">2,841</text><text x="45" y="42" text-anchor="middle" font-size="6" fill="#6B6358">users</text></svg><div style="display:flex;flex-direction:column;gap:4px"><div style="display:flex;align-items:center;gap:5px;font-size:9px;color:var(--ink3)"><div style="width:6px;height:6px;border-radius:50%;background:#E2E8F0"></div>Free (82%)</div><div style="display:flex;align-items:center;gap:5px;font-size:9px;color:var(--ink3)"><div style="width:6px;height:6px;border-radius:50%;background:var(--gold)"></div>Pro (17%)</div><div style="display:flex;align-items:center;gap:5px;font-size:9px;color:var(--ink3)"><div style="width:6px;height:6px;border-radius:50%;background:var(--blue)"></div>Agency (1%)</div></div></div>
        </div>
        <div class="adm-dt"><div class="adm-dt-hd"><div class="adm-dt-title">Recent signups</div><div class="adm-dt-actions"><div class="adm-da" onclick="admNav('users',document.querySelector('.asb-item:nth-child(5)'))">All users</div></div></div><table><thead><tr><th>User</th><th>Country</th><th>Plan</th><th>Joined</th><th>Status</th></tr></thead><tbody id="adm-recent-tb"></tbody></table></div>
      </div>
      <div class="adm-sc" id="adm-users"><div class="adm-dt"><div class="adm-dt-hd"><div class="adm-dt-title">All users <span style="font-weight:400;color:var(--ink4)">(2,841)</span></div><div class="adm-dt-actions"><div class="adm-da pr">+ Invite</div></div></div><table><thead><tr><th>User</th><th>Email</th><th>Country</th><th>Plan</th><th>Menus</th><th>Joined</th><th>Status</th><th>Actions</th></tr></thead><tbody id="adm-users-tb"></tbody></table></div></div>
      <div class="adm-sc" id="adm-subs"><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:7px;margin-bottom:10px"><div class="ak"><div class="ak-v">$5,104</div><div class="ak-l">MRR</div><div class="ak-d">&#x2191; 9.1%</div></div><div class="ak"><div class="ak-v">$61,248</div><div class="ak-l">ARR</div><div class="ak-d">&#x2191; 14.2%</div></div><div class="ak"><div class="ak-v">2.8%</div><div class="ak-l">Churn rate</div><div class="ak-d">&#x2193; 0.5%</div></div></div><div class="adm-dt"><div class="adm-dt-hd"><div class="adm-dt-title">Active subscriptions (512)</div></div><table><thead><tr><th>User</th><th>Plan</th><th>Billing</th><th>Amount</th><th>Currency</th><th>Next renewal</th><th>Status</th><th>Actions</th></tr></thead><tbody id="adm-subs-tb"></tbody></table></div></div>
      <div class="adm-sc" id="adm-templates"><div class="adm-dt"><div class="adm-dt-hd"><div class="adm-dt-title">Templates (62)</div><div class="adm-dt-actions"><div class="adm-da pr">+ Add</div></div></div><table><thead><tr><th>Name</th><th>Type</th><th>Tier</th><th>Uses</th><th>Rating</th><th>Status</th><th>Actions</th></tr></thead><tbody id="adm-tpl-tb"></tbody></table></div></div>
      <div class="adm-sc" id="adm-tickets"><div class="adm-dt"><div class="adm-dt-hd"><div class="adm-dt-title">Support tickets (7 open)</div></div><table><thead><tr><th>#</th><th>User</th><th>Subject</th><th>Priority</th><th>Status</th><th>Created</th><th>Actions</th></tr></thead><tbody id="adm-tickets-tb"></tbody></table></div></div>
      <div class="adm-sc" id="adm-flags"><div class="adm-dt"><div class="adm-dt-hd"><div class="adm-dt-title">Feature flags (8)</div><div class="adm-dt-actions"><div class="adm-da pr">+ New</div></div></div><div id="adm-flags-list"></div></div></div>
      <div class="adm-sc" id="adm-audit"><div class="adm-dt"><div class="adm-dt-hd"><div class="adm-dt-title">Audit log</div></div><div id="adm-audit-list"></div></div></div>
    </div>
  </div>
</div>

</div></div></div>

<!-- ITEM MODAL -->
<div id="modal-wrap">
  <div class="modal">
    <div class="modal-hd"><span class="modal-title" id="modal-title">Add menu item</span><button class="modal-close" onclick="closeModal()"><i class="ti ti-x"></i></button></div>
    <div class="modal-body">
      <label class="mfl">Item name</label><input class="mfi" type="text" id="m-name" placeholder="e.g. Crispy Pata">
      <div class="m-row"><div style="flex:1"><label class="mfl">Price</label><input class="mfi" type="text" id="m-price" placeholder="e.g. 580"></div><div style="flex:2"><label class="mfl">Category</label><select class="mfi" id="m-cat" style="cursor:pointer"><option>Mains</option><option>Sides</option><option>Drinks</option><option>Desserts</option></select></div></div>
      <label class="mfl">Description</label><input class="mfi" type="text" id="m-desc" placeholder="Short description of the dish">
      <label class="mfl">Food photo</label>
      <div class="dz-mini" id="dz-mini" onclick="document.getElementById('photo-in').click()" ondragover="event.preventDefault();this.style.borderColor='var(--gold)'" ondragleave="this.style.borderColor=''" ondrop="handleDrop(event)">
        <img id="modal-img" style="display:none;width:100%;height:100%;object-fit:cover" alt="">
        <div class="dz-inner"><div style="font-size:18px;color:var(--ink4);margin-bottom:4px"><i class="ti ti-cloud-upload"></i></div><div style="font-size:10px;font-weight:500;color:var(--ink2)">Click or drag photo here</div><div style="font-size:9px;color:var(--ink3);margin-top:2px">JPG, PNG, WebP &middot; max 10MB</div></div>
      </div>
      <input type="file" id="photo-in" accept="image/*" style="display:none" onchange="handlePhotoSelect(this)">
      <label class="mfl">Badges</label>
      <div class="badge-grid"><div class="ba bestseller" id="ba-bestseller" onclick="toggleBadge('bestseller')">Bestseller</div><div class="ba new-b" id="ba-new-b" onclick="toggleBadge('new-b')">New</div><div class="ba spicy" id="ba-spicy" onclick="toggleBadge('spicy')">Spicy</div><div class="ba vegan" id="ba-vegan" onclick="toggleBadge('vegan')">Vegan</div><div class="ba halal" id="ba-halal" onclick="toggleBadge('halal')">Halal</div><div class="ba veg" id="ba-veg" onclick="toggleBadge('veg')">Vegetarian</div></div>
    </div>
    <div class="modal-footer"><button class="m-cancel" onclick="closeModal()">Cancel</button><button class="m-save" onclick="saveItem()">Save item</button></div>
  </div>
</div>

<script>
const BL={bestseller:'Bestseller','new-b':'New',spicy:'Spicy',vegan:'Vegan',halal:'Halal',veg:'Vegetarian'};
const BC={bestseller:'b','new-b':'n',spicy:'s',vegan:'v',halal:'h',veg:'v'};
const AC=['#FDF6E3','#D8F0E7','#EFF6FF','#F3E8FF','#FEF3C7','#FCEAE8'];
const AT=['#8B6914','#2D6A4F','#1D4ED8','#7C3AED','#92400E','#DC2626'];
let curSym='\u20B1',curRate=1,curPos='before',decimals=0;
let billing='monthly',pCurSym='\u20B1',pCurRate=1;
let qrFg='#1A1714',qrSize=140;
let editIdx=null,mBadges=new Set(),mImg=null;
let selCur={code:'PHP',sym:'\u20B1',name:'Philippine Peso',country:'Philippines',flag:'\uD83C\uDDF5\uD83C\uDDED',rate:1};
let filtCur=[];

const ITEMS=[
  {n:'Crispy Pata',p:580,d:'Deep-fried pork knuckle, liver sauce',c:'Mains',b:['bestseller','halal'],img:null},
  {n:'Kare-Kare',p:490,d:'Oxtail stew, peanut sauce, bagoong',c:'Mains',b:['halal'],img:null},
  {n:'Sinigang na Salmon',p:420,d:'Tamarind broth, vegetables',c:'Mains',b:['vegan'],img:null},
  {n:'Sinangag na Kanin',p:85,d:'Garlic fried rice',c:'Sides',b:[],img:null},
  {n:'Buko Pandan',p:95,d:'Young coconut, pandan jelly',c:'Drinks',b:['new-b'],img:null},
  {n:'Halo-Halo',p:130,d:'Shaved ice with ube and leche flan',c:'Desserts',b:['bestseller'],img:null},
];
let items=ITEMS.map(i=>({...i,b:[...i.b]}));

const CURRENCIES=[
  {code:'PHP',sym:'\u20B1',name:'Philippine Peso',country:'Philippines',flag:'\uD83C\uDDF5\uD83C\uDDED',rate:1},
  {code:'USD',sym:'$',name:'US Dollar',country:'United States',flag:'\uD83C\uDDFA\uD83C\uDDF8',rate:0.017},
  {code:'AED',sym:'AED',name:'UAE Dirham',country:'UAE',flag:'\uD83C\uDDE6\uD83C\uDDEA',rate:0.064},
  {code:'EUR',sym:'\u20AC',name:'Euro',country:'Eurozone',flag:'\uD83C\uDDEA\uD83C\uDDFA',rate:0.016},
  {code:'GBP',sym:'\u00A3',name:'British Pound',country:'UK',flag:'\uD83C\uDDEC\uD83C\uDDE7',rate:0.014},
  {code:'SGD',sym:'S$',name:'Singapore Dollar',country:'Singapore',flag:'\uD83C\uDDF8\uD83C\uDDEC',rate:0.023},
  {code:'MYR',sym:'RM',name:'Malaysian Ringgit',country:'Malaysia',flag:'\uD83C\uDDF2\uD83C\uDDFE',rate:0.081},
  {code:'IDR',sym:'Rp',name:'Indonesian Rupiah',country:'Indonesia',flag:'\uD83C\uDDEE\uD83C\uDDE9',rate:270},
  {code:'THB',sym:'\u0E3F',name:'Thai Baht',country:'Thailand',flag:'\uD83C\uDDF9\uD83C\uDDED',rate:0.61},
  {code:'JPY',sym:'\u00A5',name:'Japanese Yen',country:'Japan',flag:'\uD83C\uDDEF\uD83C\uDDF5',rate:2.89},
  {code:'INR',sym:'\u20B9',name:'Indian Rupee',country:'India',flag:'\uD83C\uDDEE\uD83C\uDDF3',rate:1.58},
  {code:'BRL',sym:'R$',name:'Brazilian Real',country:'Brazil',flag:'\uD83C\uDDE7\uD83C\uDDF7',rate:0.097},
  {code:'MXN',sym:'MX$',name:'Mexican Peso',country:'Mexico',flag:'\uD83C\uDDF2\uD83C\uDDFD',rate:0.33},
  {code:'AUD',sym:'A$',name:'Australian Dollar',country:'Australia',flag:'\uD83C\uDDE6\uD83C\uDDFA',rate:0.027},
  {code:'KRW',sym:'\u20A9',name:'Korean Won',country:'S. Korea',flag:'\uD83C\uDDF0\uD83C\uDDF7',rate:25.4},
  {code:'CNY',sym:'\u00A5',name:'Chinese Yuan',country:'China',flag:'\uD83C\uDDE8\uD83C\uDDF3',rate:0.136},
  {code:'SAR',sym:'SAR',name:'Saudi Riyal',country:'Saudi Arabia',flag:'\uD83C\uDDF8\uD83C\uDDE6',rate:0.071},
  {code:'ZAR',sym:'R',name:'SA Rand',country:'South Africa',flag:'\uD83C\uDDFF\uD83C\uDDE6',rate:0.353},
  {code:'NZD',sym:'NZ$',name:'New Zealand Dollar',country:'New Zealand',flag:'\uD83C\uDDF3\uD83C\uDDFF',rate:0.031},
  {code:'CAD',sym:'CA$',name:'Canadian Dollar',country:'Canada',flag:'\uD83C\uDDE8\uD83C\uDDE6',rate:0.024},
];
filtCur=[...CURRENCIES];

const ADM_USERS=[
  {i:'RK',n:'Rashed Khalid',e:'rashed@kusinalola.ph',c:'\uD83C\uDDF5\uD83C\uDDED',p:'free',m:1,j:'Jun 7',s:'active'},
  {i:'MR',n:'Maria Reyes',e:'maria@cafereyes.ph',c:'\uD83C\uDDF5\uD83C\uDDED',p:'pro',m:4,j:'May 28',s:'active'},
  {i:'AS',n:'Ahmed Al-Sayed',e:'ahmed@alnakheel.ae',c:'\uD83C\uDDE6\uD83C\uDDEA',p:'pro',m:7,j:'May 15',s:'active'},
  {i:'JT',n:'Juan Tamayo',e:'juan@agencia.co',c:'\uD83C\uDDE8\uD83C\uDDF4',p:'agency',m:18,j:'Apr 12',s:'active'},
  {i:'PK',n:'Priya Krishnan',e:'priya@spiceroute.in',c:'\uD83C\uDDEE\uD83C\uDDF3',p:'pro',m:3,j:'Jun 1',s:'inactive'},
  {i:'BN',n:'Bob Nguyen',e:'bob@phohouse.vn',c:'\uD83C\uDDFB\uD83C\uDDF3',p:'free',m:1,j:'Jun 6',s:'banned'},
  {i:'YT',n:'Yuki Tanaka',e:'yuki@sakuraje.jp',c:'\uD83C\uDDEF\uD83C\uDDF5',p:'pro',m:5,j:'Mar 22',s:'active'},
];
const ADM_SUBS=[
  {n:'Maria Reyes',p:'Pro',b:'Monthly',a:'\u20B1499',c:'PHP',r:'Jul 28, 2026',s:'active'},
  {n:'Ahmed Al-Sayed',p:'Pro',b:'Annual',a:'$59/mo',c:'USD',r:'May 15, 2027',s:'active'},
  {n:'Juan Tamayo',p:'Agency',b:'Annual',a:'$179/mo',c:'USD',r:'Apr 12, 2027',s:'active'},
  {n:'Priya Krishnan',p:'Pro',b:'Monthly',a:'\u20B9399',c:'INR',r:'Jul 1, 2026',s:'active'},
  {n:'Yuki Tanaka',p:'Pro',b:'Annual',a:'\u00A5980/mo',c:'JPY',r:'Mar 22, 2027',s:'active'},
];
const ADM_TPLS=[
  {n:'Maison Fine Dining',t:'Fine dining',tier:'pro',u:2100,r:'4.9',s:'live'},
  {n:'Al Nakheel Arabic',t:'Arabic',tier:'pro',u:3400,r:'4.8',s:'live'},
  {n:'Rustic Brew Caf\u00e9',t:'Caf\u00e9',tier:'free',u:1800,r:'4.7',s:'live'},
  {n:'Quick Bite Fast Food',t:'Fast food',tier:'free',u:5200,r:'4.6',s:'live'},
  {n:'Filipino Feast',t:'Filipino',tier:'pro',u:450,r:'4.7',s:'draft'},
  {n:'Modern Minimalist',t:'Minimalist',tier:'free',u:6700,r:'4.5',s:'live'},
];
const ADM_TICKETS=[
  {id:'T-2841',n:'Maria Reyes',s:'PDF export shows watermark on Pro plan',p:'high',st:'open',c:'2h ago'},
  {id:'T-2840',n:'Ahmed Al-Sayed',s:'Arabic RTL layout issue on mobile menu',p:'high',st:'open',c:'5h ago'},
  {id:'T-2839',n:'Juan Tamayo',s:'Agency billing \u2014 need invoice for April',p:'medium',st:'pending',c:'1d ago'},
  {id:'T-2838',n:'Sofia Lima',s:'Cannot upload photo larger than 2MB',p:'medium',st:'open',c:'2d ago'},
  {id:'T-2837',n:'Priya Krishnan',s:'INR currency not showing correctly',p:'low',st:'resolved',c:'3d ago'},
  {id:'T-2836',n:'Carlos Mendoza',s:'QR code not scanning at restaurant',p:'medium',st:'open',c:'4d ago'},
];
const ADM_FLAGS=[
  {k:'ai_menu_translate',n:'AI menu translation',d:'Pro users can translate menus to Arabic, French, Spanish',on:true,scopes:['pro','agency']},
  {k:'flipbook_mode',n:'Flipbook viewer',d:'Interactive PDF page-flip on digital menu page',on:true,scopes:['pro','agency']},
  {k:'custom_domain',n:'Custom domain',d:'Map a custom domain to the digital menu',on:true,scopes:['agency']},
  {k:'bulk_import',n:'Bulk item import',d:'Upload CSV to import menu items in bulk',on:false,scopes:['pro','agency']},
  {k:'social_exports',n:'Social media exports',d:'Instagram, WhatsApp, Facebook image formats',on:true,scopes:['pro','agency']},
  {k:'cmyk_export',n:'CMYK PDF export',d:'Print-ready CMYK via Ghostscript \u2014 Agency only',on:true,scopes:['agency']},
  {k:'maintenance_mode',n:'Maintenance mode',d:'Show maintenance banner to all non-admin users',on:false,scopes:[]},
  {k:'ai_design_suggest',n:'AI design suggestions',d:'AI recommends layouts, colours, font pairings',on:true,scopes:['pro','agency']},
];
const ADM_AUDIT=[
  {ev:'create',color:'#2D6A4F',u:'Maria Reyes',a:'Created menu "The Corner Caf\u00e9 Menu v2"',t:'2 min ago'},
  {ev:'update',color:'#1A3A5C',u:'Super Admin',a:'Feature flag: bulk_import enabled for Pro',t:'15 min ago'},
  {ev:'login',color:'#8B6914',u:'Ahmed Al-Sayed',a:'Signed in via Google OAuth from Dubai, UAE',t:'1h ago'},
  {ev:'delete',color:'#C0392B',u:'Super Admin',a:'Deleted user: bob@phohouse.vn (spam)',t:'3h ago'},
  {ev:'update',color:'#1A3A5C',u:'Juan Tamayo',a:'Subscription: Agency Monthly \u2192 Agency Annual',t:'5h ago'},
  {ev:'create',color:'#2D6A4F',u:'Rashed Khalid',a:'Uploaded food photo to Crispy Pata item',t:'6h ago'},
  {ev:'update',color:'#1A3A5C',u:'Super Admin',a:'Published template "Filipino Feast" to Pro tier',t:'2d ago'},
];

function fmtP(p){
  const num=p*curRate;
  const n=parseFloat(num.toFixed(decimals)).toLocaleString('en',{minimumFractionDigits:decimals,maximumFractionDigits:decimals});
  return curPos==='before'?curSym+' '+n:n+' '+curSym;
}

function SS(s){
  document.querySelectorAll('.screen').forEach(x=>x.classList.remove('active'));
  document.getElementById('s-'+s).classList.add('active');
  ['dash','templates','editor','ai','analytics','digital','qr','currency','pricing','admin'].forEach(id=>{
    const el=document.getElementById('tn-'+id);if(el)el.classList.toggle('active',id===s);
  });
  document.querySelectorAll('.sbi').forEach(x=>x.classList.remove('active'));
  const sbi=document.getElementById('sbi-'+s);if(sbi)sbi.classList.add('active');
  if(s==='editor'){renderIL();renderCanvas();}
  if(s==='qr'){buildQR();}
  if(s==='currency'){renderCurList();renderCurPreview();}
  if(s==='pricing'){renderPlans();}
  if(s==='digital'){renderDMItems();}
}

function renderIL(){
  document.getElementById('item-count').textContent=items.length;
  document.getElementById('item-list').innerHTML=items.map((it,i)=>`
    <div class="mi-row">
      <div class="mi-img">${it.img?`<img src="${it.img}" alt="${it.n}">`:`<i class="ti ti-bowl" style="font-size:13px;color:var(--gold-d)"></i>`}</div>
      <div style="flex:1;min-width:0"><div class="mi-name">${it.n}</div><div class="mi-desc">${it.d}</div><div class="mi-badges">${it.b.map(b=>`<span class="mib ${BC[b]||'n'}">${BL[b]||b}</span>`).join('')}</div></div>
      <div class="mi-price">${fmtP(it.p)}</div>
      <button class="mi-edit-btn" onclick="openModal(${i})"><i class="ti ti-pencil"></i></button>
    </div>`).join('');
}

function renderCanvas(){
  const cats=[...new Set(items.map(it=>it.c))];
  let html='';
  cats.forEach(cat=>{
    html+=`<div class="m-sec-hd"><div class="m-sec-line"></div><div class="m-sec-name">${cat.toUpperCase()}</div><div class="m-sec-line"></div></div>`;
    items.filter(it=>it.c===cat).forEach(it=>{
      html+=`<div class="m-food"><div class="m-fimg" style="width:38px;height:38px">${it.img?`<img src="${it.img}" alt="${it.n}">`:`<i class="ti ti-bowl" style="font-size:15px;color:var(--gold-d)"></i>`}</div><div class="m-finfo"><div class="m-fnrow"><div class="m-fname">${it.n}</div><div class="m-fprice">${fmtP(it.p)}</div></div><div class="m-fdesc">${it.d}</div><div class="m-fbadges">${it.b.map(b=>`<span class="mib ${BC[b]||'n'}">${BL[b]||b}</span>`).join('')}</div></div></div>`;
    });
  });
  html+=`<div class="m-qr"><div class="m-qr-label">SCAN FOR DIGITAL MENU</div><div class="m-qr-box"><i class="ti ti-qrcode" style="font-size:18px;color:var(--cream)"></i></div><div class="m-qr-url">kusinamilola.mymenugenerator.app</div></div>`;
  document.getElementById('canvas-body').innerHTML=html;
}

function updateRName(v){
  document.getElementById('canvas-rname').textContent=v||'Restaurant';
  document.getElementById('canvas-rname-topbar').textContent=v||'Restaurant';
}
function setHdrColor(bg,ac,el){
  document.querySelectorAll('.swatches .sw').forEach(s=>s.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('canvas-hd-el').style.background=bg;
  document.getElementById('canvas-rname').style.color=ac;
}
function setCurEditor(v){curSym=v;renderIL();renderCanvas();renderDMItems();}
function setAIPrompt(t){document.getElementById('ai-prompt').value=t;}

async function runAI(){
  const p=document.getElementById('ai-prompt').value.trim();
  if(!p)return;
  const res=document.getElementById('ai-result');
  res.className='ai-result show';res.textContent='Generating\u2026';
  try{
    const r=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:400,system:'You are a professional restaurant menu copywriter. Output ready-to-use text only \u2014 no preamble, no markdown. Keep descriptions under 60 words.',messages:[{role:'user',content:p}]})});
    const d=await r.json();
    res.textContent=d.content?.[0]?.text||'Could not generate response.';
  }catch(e){res.textContent='Connection error \u2014 please try again.';}
}

function openModal(idx){
  editIdx=idx;mBadges=new Set();mImg=null;
  document.getElementById('modal-img').style.display='none';
  document.getElementById('dz-mini').classList.remove('has-img');
  document.querySelectorAll('.ba').forEach(b=>b.classList.remove('active'));
  if(idx!==null){
    const it=items[idx];
    document.getElementById('modal-title').textContent='Edit item';
    document.getElementById('m-name').value=it.n;
    document.getElementById('m-price').value=it.p;
    document.getElementById('m-desc').value=it.d;
    document.getElementById('m-cat').value=it.c;
    it.b.forEach(b=>{mBadges.add(b);const el=document.getElementById('ba-'+b);if(el)el.classList.add('active');});
    if(it.img){mImg=it.img;const mi=document.getElementById('modal-img');mi.src=it.img;mi.style.display='block';document.getElementById('dz-mini').classList.add('has-img');}
  }else{
    document.getElementById('modal-title').textContent='Add menu item';
    ['m-name','m-price','m-desc'].forEach(id=>document.getElementById(id).value='');
    document.getElementById('m-cat').value='Mains';
  }
  document.getElementById('modal-wrap').classList.add('open');
}
function closeModal(){document.getElementById('modal-wrap').classList.remove('open');}
function toggleBadge(b){const el=document.getElementById('ba-'+b);if(mBadges.has(b)){mBadges.delete(b);el.classList.remove('active');}else{mBadges.add(b);el.classList.add('active');}}
function handleDrop(e){e.preventDefault();const f=e.dataTransfer.files[0];if(f&&f.type.startsWith('image/'))loadPhoto(f);}
function handlePhotoSelect(input){if(input.files[0])loadPhoto(input.files[0]);}
function loadPhoto(f){const rd=new FileReader();rd.onload=e=>{mImg=e.target.result;const mi=document.getElementById('modal-img');mi.src=mImg;mi.style.display='block';document.getElementById('dz-mini').classList.add('has-img');};rd.readAsDataURL(f);}
function saveItem(){
  const n=document.getElementById('m-name').value.trim();
  const p=parseFloat(document.getElementById('m-price').value)||0;
  const d=document.getElementById('m-desc').value.trim();
  const c=document.getElementById('m-cat').value;
  if(!n){document.getElementById('m-name').focus();return;}
  const it={n,p,d,c,b:[...mBadges],img:mImg};
  if(editIdx!==null)items[editIdx]=it;else items.push(it);
  closeModal();renderIL();renderCanvas();renderDMItems();
}

function renderDMItems(){
  const showP=document.getElementById('dm-prices')?.checked!==false;
  const showPh=document.getElementById('dm-photos')?.checked!==false;
  const cats=[...new Set(items.map(it=>it.c))];
  let html='';
  cats.forEach(cat=>{
    html+=`<div class="dm-sec-title">${cat}</div>`;
    items.filter(it=>it.c===cat).forEach(it=>{
      html+=`<div class="dm-item">${showPh?`<div class="dm-item-img">${it.img?`<img src="${it.img}" alt="${it.n}" style="width:100%;height:100%;object-fit:cover;border-radius:7px">`:`<i class="ti ti-bowl"></i>`}</div>`:''}<div style="flex:1"><div class="dm-item-name">${it.n}</div><div class="dm-item-desc">${it.d}</div><div style="display:flex;gap:3px;margin-top:3px">${it.b.map(b=>`<span class="mib ${BC[b]||'n'}">${BL[b]||b}</span>`).join('')}</div></div>${showP?`<div class="dm-item-price">${fmtP(it.p)}</div>`:''}</div>`;
    });
  });
  document.getElementById('dm-items-wrap').innerHTML=html;
}
function toggleDMContacts(on){document.getElementById('dm-contacts-row').style.display=on?'flex':'none';}
function toggleDMSearch(on){document.getElementById('dm-search-bar').style.display=on?'block':'none';}

function buildQR(){
  const el=document.getElementById('qr-code-el');
  el.innerHTML='';
  const url=document.getElementById('qr-url')?.value||'https://mymenugenerator.app/menu/kusina-ni-lola';
  try{new QRCode(el,{text:url,width:qrSize,height:qrSize,colorDark:qrFg,colorLight:'#FFFFFF',correctLevel:QRCode.CorrectLevel.H});}catch(e){}
  const logo=document.getElementById('qr-logo');
  const s=Math.round(qrSize*0.22);
  logo.style.width=s+'px';logo.style.height=s+'px';
  document.getElementById('qr-logo-icon').style.fontSize=Math.round(s*0.5)+'px';
  document.getElementById('qr-logo-icon').style.color=qrFg;
}
function setQRFg(c,el){qrFg=c;if(el){document.querySelectorAll('.clr-sw').forEach(s=>s.classList.remove('active'));el.classList.add('active');}buildQR();}
function setQRSize(s,el){qrSize=s;document.querySelectorAll('.sz-opt').forEach(x=>x.classList.remove('active'));el.classList.add('active');buildQR();}
function updateQRLabels(){document.getElementById('qr-top-lbl').textContent=document.getElementById('qr-top')?.value||'';document.getElementById('qr-bot-lbl').textContent=document.getElementById('qr-bot')?.value||'';}

function filterCurrencies(q){
  const term=q.toLowerCase();
  filtCur=term?CURRENCIES.filter(c=>c.name.toLowerCase().includes(term)||c.code.toLowerCase().includes(term)||c.country.toLowerCase().includes(term)):[...CURRENCIES];
  renderCurList();
}
function renderCurList(){
  document.getElementById('cur-list').innerHTML=filtCur.map(c=>`
    <div style="display:flex;align-items:center;gap:8px;padding:8px;border-radius:7px;cursor:pointer;border:0.5px solid ${c.code===selCur.code?'#1A3A5C':'var(--bd)'};background:${c.code===selCur.code?'var(--blue-l)':'var(--white)'};margin-bottom:4px;transition:all .12s" onclick="selectCurrency('${c.code}')">
      <span style="font-size:16px;width:24px;text-align:center">${c.flag}</span>
      <div style="flex:1"><div style="font-size:11px;font-weight:500;color:${c.code===selCur.code?'var(--blue)':'var(--ink)'}">${c.name}</div><div style="font-size:9px;color:var(--ink4)">${c.country} &middot; ${c.code}</div></div>
      <span style="font-size:11px;font-weight:500;color:${c.code===selCur.code?'var(--blue)':'var(--ink3)'}">${c.sym}</span>
      ${c.code===selCur.code?'<i class="ti ti-check" style="font-size:13px;color:var(--blue)"></i>':''}
    </div>`).join('');
}
function selectCurrency(code){
  selCur=CURRENCIES.find(c=>c.code===code);
  curSym=selCur.sym;curRate=selCur.rate;
  renderCurList();renderCurPreview();renderIL();renderCanvas();renderDMItems();
}
function renderCurPreview(){
  const prev=[{n:'Crispy Pata',p:580},{n:'Kare-Kare',p:490},{n:'Sinigang na Salmon',p:420},{n:'Sinangag na Kanin',p:85},{n:'Halo-Halo',p:130}];
  document.getElementById('cur-preview-items').innerHTML=prev.map(it=>`<div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:0.5px solid var(--bd);font-size:10px"><span style="color:var(--ink)">${it.n}</span><span style="font-weight:500;color:var(--gold-d)">${fmtP(it.p)}</span></div>`).join('');
  document.getElementById('dec-preview').textContent=fmtP(580);
}
function setCurPos(p,el){curPos=p;document.querySelectorAll('#s-currency .sz-opt').forEach(x=>x.classList.remove('active'));el.classList.add('active');renderCurPreview();}
function changeDecimals(d){decimals=Math.max(0,Math.min(3,decimals+d));document.getElementById('dec-val').textContent=decimals;renderCurPreview();}
function saveCurrency(){alert('Currency saved: '+selCur.name+' ('+selCur.sym+')');}

function setPricingCur(v){const[,sym,rate]=v.split('|');pCurSym=sym;pCurRate=parseFloat(rate);renderPlans();}
function toggleBilling(){setBilling(billing==='monthly'?'annual':'monthly');}
function setBilling(b){
  billing=b;
  const sw=document.getElementById('bt-sw');sw.className='bt-sw '+b;
  document.getElementById('lbl-m').classList.toggle('active',b==='monthly');
  document.getElementById('lbl-a').classList.toggle('active',b==='annual');
  renderPlans();
}
function fmtPlan(phpAmount){
  const c=phpAmount*pCurRate;
  if(c>=1000)return pCurSym+' '+Math.round(c).toLocaleString();
  if(c<1)return pCurSym+' '+c.toFixed(2);
  return pCurSym+' '+Math.round(c);
}
function renderPlans(){
  const BASE={pro_m:499,pro_y:349,agency_m:1499,agency_y:1049};
  const plans=[
    {id:'free',name:'Free',icon:'ti-tools-kitchen-2',iconBg:'var(--cream2)',iconClr:'var(--ink3)',desc:'For individuals and first-time users.',priceHTML:'<div style="font-size:20px;font-weight:500;margin-bottom:12px">Free forever</div>',cta:'Current plan',ctaClass:'current',ctaIco:'ti-check',feats:['<strong>1 menu</strong>, up to 15 items','5 free templates','5 AI descriptions / day','Digital menu public page','QR code generator','Watermark on exports','No print-quality PDF']},
    {id:'pro',name:'Pro',icon:'ti-star',iconBg:'var(--gold-l)',iconClr:'var(--gold-d)',desc:'Everything a restaurant needs to look professional.',featured:true,cta:'Upgrade to Pro',ctaClass:'gold',ctaIco:'ti-bolt',feats:['<strong>Unlimited menus</strong> & items','60+ premium templates','No watermark on exports','Print-quality PDF exports','Social media exports','AI translation & promo copy','QR scan & menu analytics']},
    {id:'agency',name:'Agency',icon:'ti-building-store',iconBg:'var(--ink)',iconClr:'var(--gold)',desc:'For design agencies managing multiple clients.',cta:'Contact sales',ctaClass:'dark',ctaIco:'ti-message',feats:['<strong>Unlimited</strong> restaurant clients','10 team seats','White-label branding','Custom domain per client','Client management dashboard','500 AI generations/day','API access']},
  ];
  document.getElementById('plans-grid').innerHTML=plans.map(pl=>{
    let priceHTML=pl.priceHTML;
    if(pl.id==='pro'){const p=billing==='monthly'?BASE.pro_m:BASE.pro_y;const orig=billing==='annual'?BASE.pro_m:null;priceHTML=`<div class="plan-price"><span class="cur">${pCurSym}</span><span>${fmtPlan(p).replace(pCurSym,'').trim()}</span><span class="per">/ month</span></div>${billing==='annual'?`<div style="font-size:9px;color:var(--green);margin-bottom:8px">Save ${fmtPlan((orig-p)*12)}/year</div>`:''}`;}
    else if(pl.id==='agency'){const p=billing==='monthly'?BASE.agency_m:BASE.agency_y;priceHTML=`<div class="plan-price"><span class="cur">${pCurSym}</span><span>${fmtPlan(p).replace(pCurSym,'').trim()}</span><span class="per">/ month</span></div>`;}
    return`<div class="plan${pl.featured?' featured':''}"><div class="plan-badge-bar${pl.featured?' gold':' empty'}">${pl.featured?'Most popular':''}</div><div class="plan-body"><div class="plan-ico" style="background:${pl.iconBg}"><i class="ti ${pl.icon}" style="font-size:15px;color:${pl.iconClr}"></i></div><div class="plan-name">${pl.name}</div><div class="plan-desc">${pl.desc}</div>${priceHTML}<button class="plan-cta ${pl.ctaClass}"><i class="ti ${pl.ctaIco}"></i>${pl.cta}</button>${pl.feats.map(f=>`<div class="plan-feat"><i class="ti ${f.startsWith('No ')||f.startsWith('Watermark')?'ti-x xx':'ti-check ck'}"></i><span>${f}</span></div>`).join('')}</div></div>`;
  }).join('');
}

function admNav(s,el){
  document.querySelectorAll('.adm-sc').forEach(x=>x.classList.remove('active'));
  document.getElementById('adm-'+s).classList.add('active');
  document.querySelectorAll('.asb-item').forEach(x=>x.classList.remove('active'));
  if(el)el.classList.add('active');
  const titles={overview:'Overview',users:'Users',subs:'Subscriptions',templates:'Templates',tickets:'Support tickets',flags:'Feature flags',audit:'Audit log'};
  document.getElementById('adm-title').textContent=titles[s]||s;
}
function rAdmRecent(){document.getElementById('adm-recent-tb').innerHTML=ADM_USERS.slice(0,5).map((u,i)=>`<tr><td><div style="display:flex;align-items:center;gap:5px"><div class="adm-av" style="background:${AC[i%6]};color:${AT[i%6]}">${u.i}</div><span class="td1">${u.n}</span></div></td><td>${u.c}</td><td><span class="badge ${u.p}">${u.p.charAt(0).toUpperCase()+u.p.slice(1)}</span></td><td>${u.j}</td><td><span class="badge ${u.s}">${u.s.charAt(0).toUpperCase()+u.s.slice(1)}</span></td></tr>`).join('');}
function rAdmUsers(){document.getElementById('adm-users-tb').innerHTML=ADM_USERS.map((u,i)=>`<tr><td><div style="display:flex;align-items:center;gap:5px"><div class="adm-av" style="background:${AC[i%6]};color:${AT[i%6]}">${u.i}</div><span class="td1">${u.n}</span></div></td><td style="font-family:monospace;font-size:9px">${u.e}</td><td>${u.c}</td><td><span class="badge ${u.p}">${u.p.charAt(0).toUpperCase()+u.p.slice(1)}</span></td><td>${u.m}</td><td>${u.j}</td><td><span class="badge ${u.s}">${u.s.charAt(0).toUpperCase()+u.s.slice(1)}</span></td><td><div class="rav"><button class="rb"><i class="ti ti-eye"></i></button><button class="rb"><i class="ti ti-edit"></i></button><button class="rb d"><i class="ti ti-ban"></i></button></div></td></tr>`).join('');}
function rAdmSubs(){document.getElementById('adm-subs-tb').innerHTML=ADM_SUBS.map(s=>`<tr><td class="td1">${s.n}</td><td><span class="badge ${s.p.toLowerCase()}">${s.p}</span></td><td>${s.b}</td><td class="td1">${s.a}</td><td style="font-family:monospace;font-size:9px">${s.c}</td><td>${s.r}</td><td><span class="badge ${s.s}">${s.s.charAt(0).toUpperCase()+s.s.slice(1)}</span></td><td><div class="rav"><button class="rb"><i class="ti ti-file-invoice"></i></button><button class="rb d"><i class="ti ti-x"></i></button></div></td></tr>`).join('');}
function rAdmTpls(){document.getElementById('adm-tpl-tb').innerHTML=ADM_TPLS.map(t=>`<tr><td class="td1">${t.n}</td><td>${t.t}</td><td><span class="badge ${t.tier}">${t.tier.charAt(0).toUpperCase()+t.tier.slice(1)}</span></td><td>${t.u.toLocaleString()}</td><td><span style="color:var(--gold)">\u2605</span> ${t.r}</td><td><span class="badge ${t.s}">${t.s.charAt(0).toUpperCase()+t.s.slice(1)}</span></td><td><div class="rav"><button class="rb"><i class="ti ti-edit"></i></button><button class="rb d"><i class="ti ti-trash"></i></button></div></td></tr>`).join('');}
function rAdmTickets(){document.getElementById('adm-tickets-tb').innerHTML=ADM_TICKETS.map(t=>`<tr><td style="font-family:monospace;font-size:9px;color:var(--ink4)">${t.id}</td><td class="td1">${t.n}</td><td style="max-width:140px;overflow:hidden;text-overflow:ellipsis">${t.s}</td><td><span class="badge ${t.p}">${t.p.charAt(0).toUpperCase()+t.p.slice(1)}</span></td><td><span class="badge ${t.st}">${t.st.charAt(0).toUpperCase()+t.st.slice(1)}</span></td><td>${t.c}</td><td><div class="rav"><button class="rb"><i class="ti ti-message-reply"></i></button><button class="rb ok"><i class="ti ti-check"></i></button></div></td></tr>`).join('');}
function rAdmFlags(){document.getElementById('adm-flags-list').innerHTML=ADM_FLAGS.map(f=>`<div class="flag-row"><div style="flex:1"><div class="flag-name">${f.n} <span style="font-family:monospace;font-size:8px;color:var(--ink4);font-weight:400">${f.k}</span></div><div class="flag-desc">${f.d}</div><div class="flag-scope">${f.scopes.length?f.scopes.map(s=>`<span class="badge ${s}">${s.charAt(0).toUpperCase()+s.slice(1)}</span>`).join(''):'<span class="badge free">Off</span>'}</div></div><label class="adm-tgl"><input type="checkbox" ${f.on?'checked':''}><div class="adm-tgt"></div><div class="adm-tgb"></div></label></div>`).join('');}
function rAdmAudit(){const EV={create:'#2D6A4F',update:'#1A3A5C',delete:'#C0392B',login:'#8B6914'};document.getElementById('adm-audit-list').innerHTML=ADM_AUDIT.map(a=>`<div class="audit-entry"><div class="ae-dot" style="background:${EV[a.ev]||'#888'}"></div><div><div class="ae-txt"><span style="font-size:9px;font-weight:500;padding:1px 5px;border-radius:6px;margin-right:5px;background:${EV[a.ev]}20;color:${EV[a.ev]}">${a.ev.charAt(0).toUpperCase()+a.ev.slice(1)}</span>${a.a}</div><div class="ae-meta">${a.u} \u00b7 ${a.t}</div></div></div>`).join('');}
function rAdmBars(){const w=['W19','W20','W21','W22','W23','W24','W25','W26'];const v=[38,45,52,41,67,73,89,124];const max=Math.max(...v);document.getElementById('adm-bars').innerHTML=w.map((wk,i)=>`<div class="adm-bc"><div class="adm-bs" style="height:${Math.round(v[i]/max*44)}px;background:${i===7?'var(--gold)':'var(--cream3)'}"></div><div class="adm-bl">${wk}</div></div>`).join('');}

document.querySelectorAll('.cp').forEach(p=>p.addEventListener('click',function(){document.querySelectorAll('.cp').forEach(x=>x.classList.remove('active'));this.classList.add('active');}));
document.querySelectorAll('.chip').forEach(c=>c.addEventListener('click',function(){document.querySelectorAll('.chip').forEach(x=>x.classList.remove('active'));this.classList.add('active');}));
document.querySelectorAll('.dcat').forEach(d=>d.addEventListener('click',function(){document.querySelectorAll('.dcat').forEach(x=>x.classList.remove('active'));this.classList.add('active');}));
document.querySelectorAll('.et').forEach(b=>b.addEventListener('click',function(){document.querySelectorAll('.et').forEach(x=>x.classList.remove('active'));this.classList.add('active');}));

renderIL();renderCanvas();renderDMItems();renderCurList();renderCurPreview();renderPlans();
rAdmRecent();rAdmUsers();rAdmSubs();rAdmTpls();rAdmTickets();rAdmFlags();rAdmAudit();rAdmBars();
setTimeout(buildQR,500);
</script>
</body>
</html>
