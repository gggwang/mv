﻿const _0x46d2d9=_0x5156;(function(_0x1bfec4,_0x1879e3){const _0x232ae0=_0x5156,_0xa60e9c=_0x1bfec4();while(!![]){try{const _0x348bdb=parseInt(_0x232ae0(0x1de))/0x1+parseInt(_0x232ae0(0x1dc))/0x2+parseInt(_0x232ae0(0x1da))/0x3+-parseInt(_0x232ae0(0x1fd))/0x4+-parseInt(_0x232ae0(0x1d4))/0x5+-parseInt(_0x232ae0(0x1ca))/0x6*(-parseInt(_0x232ae0(0x1f1))/0x7)+parseInt(_0x232ae0(0x1df))/0x8;if(_0x348bdb===_0x1879e3)break;else _0xa60e9c['push'](_0xa60e9c['shift']());}catch(_0xe24b5b){_0xa60e9c['push'](_0xa60e9c['shift']());}}}(_0x2bc5,0x75801));function make_detail_videos(_0x2f871e){const _0x57193e=_0x5156;let _0x55c7c2=[],_0x39fd3c='',_0x25a1b0='';for(let _0x1b9d0f in _0x2f871e){_0x39fd3c=_0x39fd3c+_0x57193e(0x1ef)+_0x1b9d0f;}for(let _0x1109b2 in _0x2f871e){_0x25a1b0=_0x25a1b0+'$$$',_0x2f871e[_0x1109b2][_0x57193e(0x1e7)](_0x2ac750=>{const _0x293cae=_0x57193e;_0x25a1b0=_0x25a1b0+_0x2ac750[_0x293cae(0x1d7)]+'$'+_0x2ac750[_0x293cae(0x1ed)]+'#';}),_0x25a1b0=_0x25a1b0['replace'](/#$/m,'');}return _0x55c7c2[_0x57193e(0x1e9)]=_0x39fd3c['replace'](/^\$\$\$/,''),_0x55c7c2[_0x57193e(0x1e4)]=_0x25a1b0['replace'](/^\$\$\$/,''),_0x55c7c2;}function parseSub(_0x233b72){const _0x1a659d=_0x5156,_0x3d8fc4=/^#([^#\n]*?)\n([^#\n]+)/gm;let _0xa0c9f6='',_0x493ec5=req(_0x233b72,{'headers':config[_0x1a659d(0x1eb)]})[_0x1a659d(0x1cd)];while((_0xa0c9f6=_0x3d8fc4[_0x1a659d(0x202)](_0x493ec5))!==null){_0xa0c9f6[_0x1a659d(0x1f9)]===_0x3d8fc4[_0x1a659d(0x1e8)]&&_0x3d8fc4[_0x1a659d(0x1e8)]++;if(_0xa0c9f6[0x1][_0x1a659d(0x1e5)](_0x1a659d(0x203))!=-0x1)continue;let _0x49ea68=_0xa0c9f6[0x1],_0x508e41=config[_0x1a659d(0x1d6)];if(_0xa0c9f6[0x1]['indexOf']('(')!=-0x1){let _0x2cb26c=_0xa0c9f6[0x1]['match'](/(.*?)\((.*?)\)/);_0x49ea68=_0x2cb26c[0x1],_0x508e41=_0x2cb26c[0x2];if(_0x508e41['match'](/^(\.)/)){let _0x137355=_0x233b72[_0x1a659d(0x1ee)](0x0,_0x233b72[_0x1a659d(0x1cf)]('/'));_0x508e41=_0x137355+_0x508e41[_0x1a659d(0x1ff)](/^\./,'');}_0x508e41[_0x1a659d(0x1dd)](/^(\/)/)&&(_0x508e41=_0x1a659d(0x1ce)+_0x508e41);}if(_0xa0c9f6[0x2][_0x1a659d(0x1dd)](/^(\.)/)){let _0x3c69e3=_0x233b72[_0x1a659d(0x1ee)](0x0,_0x233b72['lastIndexOf']('/'));_0xa0c9f6[0x2]=_0x3c69e3+_0xa0c9f6[0x2][_0x1a659d(0x1ff)](/^\./,'');}_0xa0c9f6[0x2][_0x1a659d(0x1dd)](/^(\/)/)&&(_0xa0c9f6[0x2]=_0x1a659d(0x1ce)+_0xa0c9f6[0x2]),config[_0x1a659d(0x1ea)][_0xa0c9f6[0x2]]=_0x508e41,config[_0x1a659d(0x1ea)][_0x49ea68]=_0x508e41,config[_0x1a659d(0x1d1)]['push']({'type_id':_0xa0c9f6[0x2],'type_name':_0x49ea68});}}async function local_db(){const _0x1eabc2=_0x5156;config[_0x1eabc2(0x1e1)]=![];let _0x5be400=[],_0x25bcfb=[],_0x579d66='';for(let _0x46d129=0x0;_0x46d129<config[_0x1eabc2(0x1d1)]['length'];_0x46d129++){let _0x17ec42=config[_0x1eabc2(0x1d1)][_0x46d129][_0x1eabc2(0x1f0)],_0x236df2=config[_0x1eabc2(0x1d1)][_0x46d129][_0x1eabc2(0x1d9)],_0x2afbe1=config[_0x1eabc2(0x1eb)];_0x17ec42[_0x1eabc2(0x1dd)](/gitcode.net\/ygbh66/)&&(_0x2afbe1=config[_0x1eabc2(0x200)]);let _0x55a8e5=req(_0x17ec42,{'headers':_0x2afbe1})[_0x1eabc2(0x1cd)];if(_0x55a8e5[_0x1eabc2(0x1e5)](_0x1eabc2(0x1f4))==0x0){let _0x1d0e27=/(.*),(.*)\s*?((?:http|rtmp|mitv)[^#\s]*)/gm;while((_0x5be400=_0x1d0e27['exec'](_0x55a8e5))!==null){_0x5be400['index']===_0x1d0e27[_0x1eabc2(0x1e8)]&&_0x1d0e27['lastIndex']++;let _0x231983='未分组';_0x231983=(_0x5be400[0x1][_0x1eabc2(0x1dd)](/group-title="(.*?)"/)||[null,_0x231983])[0x1],_0x25bcfb[_0x1eabc2(0x1e5)](_0x231983)==-0x1&&(_0x25bcfb[_0x1eabc2(0x1fa)](_0x231983),config['groupDB'][_0x1eabc2(0x1fa)]({'sname':_0x236df2,'surl':_0x17ec42,'gname':_0x231983})),!config['channelDB'][_0x236df2+'_'+_0x231983]&&(config[_0x1eabc2(0x1c9)][_0x236df2+'_'+_0x231983]={}),config[_0x1eabc2(0x1c9)][_0x236df2+'_'+_0x231983][_0x5be400[0x2]]?config[_0x1eabc2(0x1c9)][_0x236df2+'_'+_0x231983][_0x5be400[0x2]][_0x1eabc2(0x1fa)](_0x5be400[0x3]):(config[_0x1eabc2(0x1c9)][_0x236df2+'_'+_0x231983][_0x5be400[0x2]]=[],config[_0x1eabc2(0x1c9)][_0x236df2+'_'+_0x231983][_0x5be400[0x2]][_0x1eabc2(0x1fa)](_0x5be400[0x3]));}}else{let _0x1ac890=/()(?:\B\$c_start|\B#{1,2})?(.*?),?(##|头#|\$c_end|,?#genre#|(?:http|rtmp|mitv)[^\s]*)/gm;while((_0x5be400=_0x1ac890[_0x1eabc2(0x202)](_0x55a8e5))!==null){_0x5be400[_0x1eabc2(0x1f9)]===_0x1ac890[_0x1eabc2(0x1e8)]&&_0x1ac890['lastIndex']++,['#genre#','##','头#',_0x1eabc2(0x1d2)]['includes'](_0x5be400[0x3])?(_0x579d66=_0x5be400[0x2],config[_0x1eabc2(0x1c9)][_0x236df2+'_'+_0x579d66]={},config[_0x1eabc2(0x1fc)][_0x1eabc2(0x1fa)]({'sname':_0x236df2,'surl':_0x17ec42,'gname':_0x5be400[0x2]})):config[_0x1eabc2(0x1c9)][_0x236df2+'_'+_0x579d66][_0x5be400[0x2]]?config['channelDB'][_0x236df2+'_'+_0x579d66][_0x5be400[0x2]][_0x1eabc2(0x1fa)](_0x5be400[0x3]):(config[_0x1eabc2(0x1c9)][_0x236df2+'_'+_0x579d66][_0x5be400[0x2]]=[],config[_0x1eabc2(0x1c9)][_0x236df2+'_'+_0x579d66][_0x5be400[0x2]][_0x1eabc2(0x1fa)](_0x5be400[0x3]));}}}}function local_db_gsearch(_0x555842){const _0x4b422a=_0x5156;let _0xb7a16d=[],_0x3f5e72=new RegExp(_0x555842,'i');for(let _0x498adb=0x0;_0x498adb<config[_0x4b422a(0x1fc)]['length'];_0x498adb++){config[_0x4b422a(0x1fc)][_0x498adb][_0x4b422a(0x1d8)][_0x4b422a(0x1dd)](_0x3f5e72)&&_0xb7a16d[_0x4b422a(0x1fa)]({'vod_id':config[_0x4b422a(0x1fc)][_0x498adb][_0x4b422a(0x1d8)]+_0x4b422a(0x1ef)+config[_0x4b422a(0x1fc)][_0x498adb][_0x4b422a(0x1f7)],'vod_name':config['groupDB'][_0x498adb][_0x4b422a(0x1d8)],'vod_pic':config[_0x4b422a(0x1ea)][config['groupDB'][_0x498adb][_0x4b422a(0x1d0)]],'vod_remarks':config[_0x4b422a(0x1fc)][_0x498adb][_0x4b422a(0x1d0)]});}return _0xb7a16d;}function local_db_csearch(_0x178d09){const _0x4226b3=_0x5156;let _0x38e7ba=[],_0x2450eb=new RegExp(_0x178d09,'i');for(let _0x2b8ab9 in config[_0x4226b3(0x1c9)]){for(let _0x22de9f in config[_0x4226b3(0x1c9)][_0x2b8ab9]){_0x22de9f[_0x4226b3(0x1dd)](_0x2450eb)&&_0x38e7ba['push']({'vod_id':_0x22de9f+_0x4226b3(0x1f8)+config[_0x4226b3(0x1c9)][_0x2b8ab9][_0x22de9f][_0x4226b3(0x1d5)]('###'),'vod_name':_0x22de9f,'vod_pic':config[_0x4226b3(0x1ea)][_0x2b8ab9[_0x4226b3(0x1f3)]('_')[0x0]],'vod_remarks':_0x2b8ab9});}}return _0x38e7ba;}import _0x31526b from'assets://js/lib/cheerio.min.js';import'assets://js/lib/crypto-js.js';const config={'search_flag':!![],'groupDB':[],'channelDB':{},'defaultPicUrl':_0x46d2d9(0x1db),'pics':{},'classes':[],'headers':{'user-agent':_0x46d2d9(0x1f5)},'headers2':{'user-agent':_0x46d2d9(0x1e6)},'player':{},'filter':{}};function init(_0x10d9a6){const _0x45c4b5=_0x46d2d9;console['log'](_0x45c4b5(0x1cb)),parseSub(_0x10d9a6);}function home(_0x45836e){const _0x42297a=_0x46d2d9;let _0x15d728={};return _0x45836e&&(_0x15d728[_0x42297a(0x1d3)]=config[_0x42297a(0x1fe)]),_0x15d728['class']=config[_0x42297a(0x1d1)],JSON['stringify'](_0x15d728);}function homeVod(){const _0x44a9e8=_0x46d2d9;let _0x2973be={};return JSON[_0x44a9e8(0x1f2)](_0x2973be);}function _0x2bc5(){const _0xb2716e=['push','#genre#','groupDB','3618652buMCLA','filter','replace','headers2','[epwdr]','exec','订阅名','channelDB','2273352avqhuV','开始调试了！！！','concat','content','http://127.0.0.1:9978/file','lastIndexOf','sname','classes','$c_end','filters','3394725XaBZou','join','defaultPicUrl','name','gname','type_name','1261446Kqbsoz','https://agit.ai/lengniuge/api/raw/branch/master/MV.png','428052KvOkSi','match','545805rEaGZn','4045472rDqSSf','未分组','search_flag','线路1','includes','vod_play_url','indexOf','Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x209_2\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/601.1\x20(KHTML,\x20like\x20Gecko)\x20CriOS/47.0.2526.107\x20Mobile/13C75\x20Safari/601.1.46','forEach','lastIndex','vod_play_from','pics','headers','length','url','slice','$$$','type_id','7wiwfqz','stringify','split','#EXTM3U','okhttp/3.12.10','$$$线路','surl','$$$[epwdr]','index'];_0x2bc5=function(){return _0xb2716e;};return _0x2bc5();}function category(_0x2f4aa9,_0x5cb368,_0x2748e9,_0xc90414){const _0x181d39=_0x46d2d9;let _0x3319bd={},_0x17f789=[],_0xe51ab3='',_0x24fec5=[],_0x119d70=[];_0x5cb368=parseInt(_0x5cb368);if(_0x5cb368>=0x2)return JSON[_0x181d39(0x1f2)]({});let _0x37f1fc=config['headers'];_0x2f4aa9[_0x181d39(0x1dd)](/gitcode.net\/ygbh66/)&&(_0x37f1fc=config[_0x181d39(0x200)]);let _0x4fa91c=req(_0x2f4aa9,{'headers':_0x37f1fc})[_0x181d39(0x1cd)];if(_0x4fa91c['indexOf']('#EXTM3U')==0x0){let _0x4a880c=/(.*),(.*)\s*?((?:http|rtmp|mitv)[^#\s]*)/gm;while((_0x119d70=_0x4a880c[_0x181d39(0x202)](_0x4fa91c))!==null){_0x119d70['index']===_0x4a880c[_0x181d39(0x1e8)]&&_0x4a880c[_0x181d39(0x1e8)]++;let _0x55723b=_0x181d39(0x1e0);_0x55723b=(_0x119d70[0x1][_0x181d39(0x1dd)](/group-title="(.*?)"/)||[null,_0x55723b])[0x1],_0x24fec5['indexOf'](_0x55723b)==-0x1&&(_0x24fec5['push'](_0x55723b),_0x17f789['push']({'vod_id':_0x55723b+'$$$'+_0x2f4aa9,'vod_name':_0x55723b,'vod_pic':config[_0x181d39(0x1ea)][_0x2f4aa9],'vod_remarks':''}));}}else{let _0x44218a=/()(?:\B\$c_start|\B#{1,2})?(.*?),?(##|头#|\$c_end|,?#genre#|(?:http|rtmp|mitv)[^\s]*)/gm;while((_0x119d70=_0x44218a[_0x181d39(0x202)](_0x4fa91c))!==null){_0x119d70['index']===_0x44218a['lastIndex']&&_0x44218a['lastIndex']++;if([_0x181d39(0x1fb),'##','头#','$c_end'][_0x181d39(0x1e3)](_0x119d70[0x3])){let _0x324e6e=_0x119d70[0x2];_0x24fec5[_0x181d39(0x1e5)](_0x324e6e)==-0x1&&(_0x24fec5[_0x181d39(0x1fa)](_0x324e6e),_0x17f789[_0x181d39(0x1fa)]({'vod_id':_0x324e6e+_0x181d39(0x1ef)+_0x2f4aa9,'vod_name':_0x324e6e,'vod_pic':config[_0x181d39(0x1ea)][_0x2f4aa9],'vod_remarks':''}));}}}return _0x3319bd={'list':_0x17f789,'page':_0x5cb368,'pagecount':0x1,'limit':0x64,'total':0x3e7},JSON['stringify'](_0x3319bd);}function search(_0x5648b2,_0x12a53d){const _0x1322fd=_0x46d2d9;config[_0x1322fd(0x1e1)]&&local_db();let _0x2dad52={},_0xb15fff=[];return _0xb15fff=_0xb15fff[_0x1322fd(0x1cc)](local_db_gsearch(_0x5648b2)),_0xb15fff=_0xb15fff[_0x1322fd(0x1cc)](local_db_csearch(_0x5648b2)),_0x2dad52={'list':_0xb15fff},JSON[_0x1322fd(0x1f2)](_0x2dad52);}function _0x5156(_0x1cd1a6,_0x54e928){const _0x2bc5fc=_0x2bc5();return _0x5156=function(_0x515672,_0x27ca0d){_0x515672=_0x515672-0x1c9;let _0x25d5ba=_0x2bc5fc[_0x515672];return _0x25d5ba;},_0x5156(_0x1cd1a6,_0x54e928);}function detail(_0x4297aa){const _0x2b8010=_0x46d2d9;let _0x1847aa={},_0x178749={},_0x1954bc=[],_0x2126b8=_0x4297aa[_0x2b8010(0x1f3)](_0x2b8010(0x1ef))[0x1];_0x4297aa=_0x4297aa[_0x2b8010(0x1f3)](_0x2b8010(0x1ef))[0x0];let _0x36c930={'vod_id':_0x4297aa,'vod_name':_0x4297aa,'vod_pic':config['pics'][_0x2126b8],'type_name':'','vod_year':'','vod_area':'','vod_remarks':'','vod_actor':'','vod_director':'','vod_content':'','vod_play_from':'','vod_play_url':''};if(_0x2126b8['match']('\x5c[epwdr\x5c]')){let _0x246b87='',_0x221817='';_0x2126b8=_0x2126b8['replace'](_0x2b8010(0x201),''),_0x2126b8=_0x2126b8[_0x2b8010(0x1f3)]('###');for(let _0x12b6f6=0x0;_0x12b6f6<_0x2126b8[_0x2b8010(0x1ec)];_0x12b6f6++){_0x246b87=_0x246b87+_0x2b8010(0x1f6)+_0x12b6f6,_0x221817=_0x221817+_0x2b8010(0x1ef)+_0x4297aa+'$'+_0x2126b8[_0x12b6f6];}_0x36c930[_0x2b8010(0x1e9)]=_0x246b87['replace'](/^\$\$\$/,''),_0x36c930[_0x2b8010(0x1e4)]=_0x221817['replace'](/^\$\$\$/,'');}else{let _0x3729a6=config['headers'];_0x2126b8['match'](/gitcode.net\/ygbh66/)&&(_0x3729a6=config[_0x2b8010(0x200)]);let _0x1dfba1=req(_0x2126b8,{'headers':_0x3729a6})[_0x2b8010(0x1cd)];if(_0x1dfba1[_0x2b8010(0x1e5)](_0x2b8010(0x1f4))==0x0){let _0x4fa83d=/(.*),(.*)\s*?((?:http|rtmp|mitv)[^#\s]*)/gm;while((_0x1954bc=_0x4fa83d[_0x2b8010(0x202)](_0x1dfba1))!==null){_0x1954bc[_0x2b8010(0x1f9)]===_0x4fa83d['lastIndex']&&_0x4fa83d[_0x2b8010(0x1e8)]++;let _0xe855fd=_0x2b8010(0x1e0);_0xe855fd=(_0x1954bc[0x1][_0x2b8010(0x1dd)](/group-title="(.*?)"/)||[null,_0xe855fd])[0x1];if(_0xe855fd==_0x4297aa){if(_0x178749[_0x1954bc[0x2]]){let _0x45c7c0='线路'+(_0x178749[_0x1954bc[0x2]]+0x1);_0x178749[_0x1954bc[0x2]][_0x2b8010(0x1fa)]({'name':_0x45c7c0,'url':_0x1954bc[0x3]});}else _0x178749[_0x1954bc[0x2]]=[],_0x178749[_0x1954bc[0x2]]['push']({'name':'线路1','url':_0x1954bc[0x3]});}}}else{let _0x362668=/()(?:\B\$c_start|\B#{1,2})?(.*?),?(##|头#|\$c_end|,?#genre#|(?:http|rtmp|mitv)[^\s]*)/gm,_0x382bfa=!![];while((_0x1954bc=_0x362668[_0x2b8010(0x202)](_0x1dfba1))!==null){_0x1954bc['index']===_0x362668[_0x2b8010(0x1e8)]&&_0x362668[_0x2b8010(0x1e8)]++;if([_0x2b8010(0x1fb),'##','头#','$c_end'][_0x2b8010(0x1e3)](_0x1954bc[0x3])){if(_0x1954bc[0x2]==_0x4297aa){_0x382bfa=![];continue;}else{if(!_0x382bfa)break;}}if(_0x382bfa)continue;if(_0x178749[_0x1954bc[0x2]]){let _0x346cd2='线路'+(_0x178749[_0x1954bc[0x2]]+0x1);_0x178749[_0x1954bc[0x2]][_0x2b8010(0x1fa)]({'name':_0x346cd2,'url':_0x1954bc[0x3]});}else _0x178749[_0x1954bc[0x2]]=[],_0x178749[_0x1954bc[0x2]][_0x2b8010(0x1fa)]({'name':_0x2b8010(0x1e2),'url':_0x1954bc[0x3]});}}let _0x51db80=0x0;for(let _0x547e17 in _0x178749){_0x178749[_0x547e17][_0x2b8010(0x1ec)]>_0x51db80&&(_0x51db80=_0x178749[_0x547e17][_0x2b8010(0x1ec)]);}let _0x111d34={};for(let _0x458d1b=0x1;_0x458d1b<=_0x51db80;_0x458d1b++){_0x111d34['线路'+_0x458d1b]=[];for(let _0x18a2c4 in _0x178749){let _0x128c4a='';_0x458d1b<=_0x178749[_0x18a2c4][_0x2b8010(0x1ec)]?_0x128c4a=_0x178749[_0x18a2c4][_0x458d1b-0x1][_0x2b8010(0x1ed)]:_0x128c4a=_0x178749[_0x18a2c4][_0x178749[_0x18a2c4][_0x2b8010(0x1ec)]-0x1][_0x2b8010(0x1ed)],_0x111d34['线路'+_0x458d1b][_0x2b8010(0x1fa)]({'name':_0x18a2c4,'url':_0x128c4a});}}let _0x50e388=make_detail_videos(_0x111d34);_0x36c930[_0x2b8010(0x1e9)]=_0x50e388[_0x2b8010(0x1e9)],_0x36c930[_0x2b8010(0x1e4)]=_0x50e388[_0x2b8010(0x1e4)];}return _0x1847aa={'list':[_0x36c930]},JSON[_0x2b8010(0x1f2)](_0x1847aa);}function play(_0x26a011,_0x498bc2,_0x51698f){let _0x3ec751={};return _0x3ec751={'parse':'0','jx':'0','headers':'','playUrl':'','url':_0x498bc2},JSON['stringify'](_0x3ec751);}__JS_SPIDER__={'init':init,'home':home,'homeVod':homeVod,'category':category,'detail':detail,'play':play,'search':search};