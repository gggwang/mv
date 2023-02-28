{
    "spider": "https://hk1.monika.love/tuji-2015/miao/main/TVBox/jar/xo0227.jar;md5;eb433f3b00e991e6ba6509cffc99672c",
    "wallpaper": "https://picsum.photos/1920/1080/?blur=1",
    "lives": [{
        "group": "redirect",
        "channels": [{
            "name": "redirect",
            "urls": ["proxy://do=live&type=txt&ext=aHR0cHM6Ly9hZ2l0LmFpL2xlbmduaXVnZS9hcGkvcmF3L2JyYW5jaC9tYXN0ZXIvbGl2ZS50eHQ="]
        }]
    }],
    "rules": [{
        "host": "*",
        "rule": ["douyinvod.com", "/video/tos/cn/"]
    },
    {
        "host": "*",
        "rule": ["douyin.com/aweme", "video_id="]
    },
    {
        "host": "*",
        "rule": ["default.365yg.com", "/video/tos/cn/"]
    },
    {
        "host": "*",
        "rule": ["ysting.ysxs8.vip", "m4a"]
    },
    {
        "host": "*",
        "rule": ["/m3u8.php", "path="]
    },
    {
        "host": "*",
        "rule": ["/m3u8.php?path=", ".m3u8"]
    },
    {
        "host": "*",
        "rule": ["/API.php?time=", "key=", "path=", ".m3u8"]
    },
    {
        "host": "*",
        "rule": ["oss-cn-m3u8", "myqcloud.com.zh188.net", "?url=", ".m3u8"]
    },
    {
        "host": "*",
        "rule": ["aliyundrive.net", "response-content-disposition=", ".m3u8"]
    },
    {
        "host": "*",
        "rule": ["aliyundrive.net", "response-content-disposition=", ".mp4"]
    },
    {
        "host": "*",
        "rule": ["aliyundrive.net", "response-content-disposition=", ".mkv"]
    },
    {
        "host": "www.djuu.com",
        "rule": ["mp4.djuu.com", "m4a"]
    },
    {
        "host": "http://www.sharenice.net/douyin",
        "rule": ["https://www.douyin.com/aweme/", "video_id="]
    },
    {
        "host": "www.sharenice.net",
        "rule": ["huoshan.com", "/video/"]
    },
    {
        "host": "www.sharenice.net",
        "rule": ["sovv.qianpailive.com", "vid="]
    },
    {
        "host": "hdmoli.com",
        "rule": [".m3u8"]
    },
    {
        "host": "https://live.bilibili.com",
        "rule": ["bilivideo.com/live-bvc", "index.m3u8?expires="]
    },
    {
        "host": "m.ysxs8.vip",
        "rule": ["xmcdn.com", "m4a"]
    },
    {
        "host": "www.agemys.cc",
        "rule": ["cdn-tos", "obj/tos-cn"]
    },
    {
        "host": "https://www.fun4k.com",
        "rule": ["https://hd.ijycnd.com/play", "index.m3u8"]
    },
    {
        "host": "www.007ts.me",
        "rule": ["hls.pchj.net", ".m3u8"]
    },
    {
        "host": "zjmiao.com",
        "rule": ["play.videomiao.vip/API.php", "time=", "key=", "path="]
    }],
    "sites": [
    {
        "key": "py_kuyun77",
        "name": "鲲鱼(PY)",
        "type": 3,
        "api": "py_kunyu77",
        "searchable": 1,
        "quickSearch": 1,
        "filterable": 1,
        "ext": "https://hk1.monika.love/tuji-2015/miao/main/TVBox/pys/py_kunyu77.py"
    },
    {
        "key": "py_ali",
        "name": "推送",
        "type": 3,
        "api": "py_ali",
        "searchable": 1,
        "quickSearch": 1,
        "filterable": 0,
        "ext": "https://hk1.monika.love/tuji-2015/miao/main/TVBox/pys/py_ali.py"
    }],
    "parses": [{
        "name": "Web聚合",
        "type": 3,
        "url": "Web"
    },
    {
        "name": "解析啦",
        "type": 0,
        "url": "https://api.jiexi.la/?url=",
        "ext": {
            "header": {
                "User-Agent": "Mozilla/5.0"
            }
        },
        "flags": ["youku", "qq", "iqiyi", "imgo", "xueren", "m1905", "qiyi", "letv", "sohu", "tudou", "pptv", "dbm3u8", "mgtv", "wasu", "bilibili", "le", "renrenmi", "xigua", "优酷", "西瓜", "乐视", "芒果", "腾讯", "爱奇艺", "奇艺", "ltnb", "rx", "CL4K", "xfyun", "wuduzy", "哔哩哔哩", "哔哩", "leshi", "douyin"]
    },
    {
        "name": "爱酷",
        "type": 0,
        "url": "https://jx.zhanlangbu.com/?url=",
        "ext": {
            "header": {
                "User-Agent": "Mozilla/5.0"
            }
        },
        "flags": ["youku", "qq", "iqiyi", "imgo", "xueren", "m1905", "qiyi", "letv", "sohu", "tudou", "pptv", "dbm3u8", "mgtv", "wasu", "bilibili", "le", "renrenmi", "xigua", "优酷", "西瓜", "乐视", "芒果", "腾讯", "爱奇艺", "奇艺", "ltnb", "rx", "CL4K", "xfyun", "wuduzy", "哔哩哔哩", "哔哩", "leshi", "douyin"]
    },
    {
        "name": "CV",
        "type": 0,
        "url": "https://www.ckmov.vip/api.php?url=",
        "ext": {
            "header": {
                "User-Agent": "Mozilla/5.0"
            }
        },
        "flags": ["youku", "qq", "iqiyi", "imgo", "xueren", "m1905", "qiyi", "letv", "sohu", "tudou", "pptv", "dbm3u8", "mgtv", "wasu", "bilibili", "le", "renrenmi", "xigua", "优酷", "西瓜", "乐视", "芒果", "腾讯", "爱奇艺", "奇艺", "ltnb", "rx", "CL4K", "xfyun", "wuduzy", "哔哩哔哩", "哔哩", "leshi", "douyin"]
    },
    {
        "name": "CK",
        "type": 0,
        "url": "https://www.ckplayer.vip/jiexi/?url=",
        "ext": {
            "header": {
                "User-Agent": "Mozilla/5.0"
            }
        },
        "flags": ["youku", "qq", "iqiyi", "imgo", "xueren", "m1905", "qiyi", "letv", "sohu", "tudou", "pptv", "dbm3u8", "mgtv", "wasu", "bilibili", "le", "renrenmi", "xigua", "优酷", "西瓜", "乐视", "芒果", "腾讯", "爱奇艺", "奇艺", "ltnb", "rx", "CL4K", "xfyun", "wuduzy", "哔哩哔哩", "哔哩", "leshi", "douyin"]
    },
    {
        "name": "PG",
        "type": 0,
        "url": "https://www.pangujiexi.com/pangu/?url=",
        "ext": {
            "header": {
                "User-Agent": "Mozilla/5.0"
            }
        },
        "flags": ["youku", "qq", "iqiyi", "imgo", "xueren", "m1905", "qiyi", "letv", "sohu", "tudou", "pptv", "dbm3u8", "mgtv", "wasu", "bilibili", "le", "renrenmi", "xigua", "优酷", "西瓜", "乐视", "芒果", "腾讯", "爱奇艺", "奇艺", "ltnb", "rx", "CL4K", "xfyun", "wuduzy", "哔哩哔哩", "哔哩", "leshi", "douyin"]
    },
    {
        "name": "JS",
        "type": 0,
        "url": "https://jx.jsonplayer.com/player/?url=",
        "ext": {
            "header": {
                "User-Agent": "Mozilla/5.0"
            }
        },
        "flags": ["youku", "qq", "iqiyi", "imgo", "xueren", "m1905", "qiyi", "letv", "sohu", "tudou", "pptv", "dbm3u8", "mgtv", "wasu", "bilibili", "le", "renrenmi", "xigua", "优酷", "西瓜", "乐视", "芒果", "腾讯", "爱奇艺", "奇艺", "ltnb", "rx", "CL4K", "xfyun", "wuduzy", "哔哩哔哩", "哔哩", "leshi", "douyin"]
    },
    {
        "name": "YM",
        "type": 0,
        "url": "https://www.yemu.xyz/v/d.php?url=",
        "ext": {
            "header": {
                "User-Agent": "Mozilla/5.0"
            }
        },
        "flags": ["youku", "qq", "iqiyi", "imgo", "xueren", "m1905", "qiyi", "letv", "sohu", "tudou", "pptv", "dbm3u8", "mgtv", "wasu", "bilibili", "le", "renrenmi", "xigua", "优酷", "西瓜", "乐视", "芒果", "腾讯", "爱奇艺", "奇艺", "ltnb", "rx", "CL4K", "xfyun", "wuduzy", "哔哩哔哩", "哔哩", "leshi", "douyin"]
    },
    {
        "name": "4K",
        "type": 0,
        "url": "https://jx.4kdv.com/?url=",
        "ext": {
            "header": {
                "User-Agent": "Mozilla/5.0"
            }
        },
        "flags": ["youku", "qq", "iqiyi", "imgo", "xueren", "m1905", "qiyi", "letv", "sohu", "tudou", "pptv", "dbm3u8", "mgtv", "wasu", "bilibili", "le", "renrenmi", "xigua", "优酷", "西瓜", "乐视", "芒果", "腾讯", "爱奇艺", "奇艺", "ltnb", "rx", "CL4K", "xfyun", "wuduzy", "哔哩哔哩", "哔哩", "leshi", "douyin"]
    },
    {
        "name": "MZ",
        "type": 0,
        "url": "https://www.mtosz.com/erzi.php?url=",
        "ext": {
            "header": {
                "User-Agent": "Mozilla/5.0"
            }
        },
        "flags": ["youku", "qq", "iqiyi", "imgo", "xueren", "m1905", "qiyi", "letv", "sohu", "tudou", "pptv", "dbm3u8", "mgtv", "wasu", "bilibili", "le", "renrenmi", "xigua", "优酷", "西瓜", "乐视", "芒果", "腾讯", "爱奇艺", "奇艺", "ltnb", "rx", "CL4K", "xfyun", "wuduzy", "哔哩哔哩", "哔哩", "leshi", "douyin"]
    }],
    "ads": ["wan.51img1.com", "https://lf1-cdn-tos.bytegoofy.com/obj/tos-cn-i-dy/455ccf9e8ae744378118e4bd289288dd", "mimg.0c1q0l.cn", "www.googletagmanager.com", "www.google-analytics.com", "mc.usihnbcq.cn", "mg.g1mm3d.cn", "mscs.svaeuzh.cn", "cnzz.hhttm.top", "tp.vinuxhome.com", "cnzz.mmstat.com", "www.baihuillq.com", "s23.cnzz.com", "z3.cnzz.com", "c.cnzz.com", "stj.v1vo.top", "z12.cnzz.com", "img.mosflower.cn", "tips.gamevvip.com", "ehwe.yhdtns.com", "xdn.cqqc3.com", "www.jixunkyy.cn", "sp.chemacid.cn", "hm.baidu.com", "s9.cnzz.com", "z6.cnzz.com", "um.cavuc.com", "mav.mavuz.com", "wofwk.aoidf3.com", "z5.cnzz.com", "xc.hubeijieshikj.cn", "tj.tianwenhu.com", "xg.gars57.cn", "k.jinxiuzhilv.com", "cdn.bootcss.com", "ppl.xunzhuo123.com", "xomk.jiangjunmh.top", "img.xunzhuo123.com", "z1.cnzz.com", "s13.cnzz.com", "xg.huataisangao.cn", "z7.cnzz.com", "xg.huataisangao.cn", "z2.cnzz.com", "s96.cnzz.com", "q11.cnzz.com", "thy.dacedsfa.cn", "xg.whsbpw.cn", "s19.cnzz.com", "z8.cnzz.com", "s4.cnzz.com", "f5w.as12df.top", "ae01.alicdn.com", "www.92424.cn", "k.wudejia.com", "vivovip.mmszxc.top", "qiu.xixiqiu.com", "cdnjs.hnfenxun.com", "cms.qdwght.com"]
}