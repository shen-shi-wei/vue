function curentDataCal(g, a) {
    if (a.length == 0) {
        return []
    }
    var b = [];
    var f = a[a.length - 1];
    b.push({"t1": "当前时间", "t2": "当前时间", "t3": f.sampleTime + ""});
    b.push({"t1": "当前读数", "t2": "实测荷载", "t3": Math.round(parseFloat(f.realLoading) * 10) / 10});
    b.push({"t1": "当前读数", "t2": "实测油压", "t3": Math.round(parseFloat(f.realPress) * 100) / 100});
    var j = "";
    var i = "";
    var c = "";
    var e = "";
    if (null != g.sensorUsed && g.sensorUsed != "" && null != f.sensorValue && f.sensorValue != "") {
        var k = g.sensorUsed.split(",");
        var h = g.sensorDirection.split(",");
        var l = f.sensorValue.split(",");
        k.forEach(function (m, d) {
            if (parseInt(m) != 0) {
                if (null != l[d] && parseFloat(l[d]) != -66) {
                    j += Math.round(parseFloat(l[d]) * 100) / 100 + "(mm),";
                    c += "正常,";
                    e += "是,"
                }
                if (parseInt(h[d]) == 1) {
                    i += "沉降,"
                } else {
                    if (parseInt(h[d]) == 2) {
                        i += "上拔,"
                    } else {
                        if (parseInt(h[d]) == 3) {
                            i += "向上,"
                        } else {
                            if (parseInt(h[d]) == 4) {
                                i += "向下,"
                            } else {
                                if (parseInt(h[d]) == 5) {
                                    i += "桩顶,"
                                }
                            }
                        }
                    }
                }
            }
        });
        if (j != "") {
            j = j.substring(0, j.length - 1)
        }
        if (i != "") {
            i = i.substring(0, i.length - 1)
        }
        if (c != "") {
            c = c.substring(0, c.length - 1)
        }
        if (i != "") {
            e = e.substring(0, e.length - 1)
        }
    }
    b.push({"t1": "当前读数", "t2": "实测位移", "t3": j});
    b.push({"t1": "当前读数", "t2": "位移通道用途", "t3": i});
    b.push({"t1": "当前读数", "t2": "位移通道状态", "t3": c});
    b.push({"t1": "测试进程", "t2": "测试进程", "t3": f.loadDirect == 1 ? "加载" : "卸载"});
    b.push({"t1": "测试进程", "t2": "当前级设定荷载", "t3": Math.round(f.loading) + "(kN)"});
    b.push({"t1": "测试进程", "t2": "当前加载等级", "t3": f.currentGrade});
    b.push({"t1": "测试进程", "t2": "当前级读数次数", "t3": f.sampleCount});
    b.push({"t1": "测试进程", "t2": "前次读数时间", "t3": a[a.length - 2].sampleTime + ""});
    b.push({"t1": "测试进程", "t2": "当前级已测时间", "t3": f.timeCount});
    b.push({"t1": "测试进程", "t2": "位移通道参与平均", "t3": e});
    return b
}

function detailDataCal(m, s) {
    var c = {header: [], data: []};
    if (m.testType == 1) {
        c.header.push({"lable": "控载(kN)", "name": "loading"});
        c.header.push({"lable": "间隔时间(min)", "name": "timeCount"});
        c.header.push({"lable": "荷载(kN)", "name": "realLoading"});
        c.header.push({"lable": "油压(MPa)", "name": "realPress"});
        c.header.push({"lable": "记录时间", "name": "sampleTime"});
        c.header.push({"lable": "接收时间", "name": "createTime"})
    } else {
        if (m.testType == 2 || m.testType == 3) {
            c.header.push({"lable": "控载(kN)", "name": "loading"});
            c.header.push({"lable": "间隔时间(min)", "name": "timeCount"});
            c.header.push({"lable": "荷载(kN)", "name": "realLoading"});
            c.header.push({"lable": "油压(MPa)", "name": "realPress"});
            c.header.push({"lable": "记录时间", "name": "sampleTime"});
            c.header.push({"lable": "接收时间", "name": "createTime"})
        } else {
            if (m.testType == 4 || m.testType == 12) {
                c.header.push({"lable": "控载(kN)", "name": "loading"});
                c.header.push({"lable": "间隔时间(min)", "name": "timeCount"});
                c.header.push({"lable": "荷载(kN)", "name": "realLoading"});
                c.header.push({"lable": "油压(MPa)", "name": "realPress"});
                c.header.push({"lable": "记录时间", "name": "sampleTime"});
                c.header.push({"lable": "接收时间", "name": "createTime"})
            } else {
                if (m.testType == 11) {
                    c.header.push({"lable": "控载(kN)", "name": "loading"});
                    c.header.push({"lable": "加载(↑)/卸载(↓)", "name": "loopCount"});
                    c.header.push({"lable": "间隔时间(min)", "name": "timeCount"});
                    c.header.push({"lable": "荷载(kN)", "name": "realLoading"});
                    c.header.push({"lable": "油压(MPa)", "name": "realPress"});
                    c.header.push({"lable": "记录时间", "name": "sampleTime"});
                    c.header.push({"lable": "接收时间", "name": "createTime"})
                } else {
                    c.header.push({"lable": "控载(kPa)", "name": "loading"});
                    c.header.push({"lable": "间隔时间(min)", "name": "timeCount"});
                    c.header.push({"lable": "荷载(kPa)", "name": "realLoading"});
                    c.header.push({"lable": "油压(MPa)", "name": "realPress"});
                    c.header.push({"lable": "记录时间", "name": "sampleTime"});
                    c.header.push({"lable": "接收时间", "name": "createTime"})
                }
            }
        }
    }
    if (null != m.sensorUsed && m.sensorUsed != "") {
        var i = m.sensorUsed.split(",");
        var q = m.sensorDirection.split(",");
        var h = [];
        var a = [];
        var p = [];
        var e = [];
        var b = [];
        i.forEach(function (t, d) {
            if (parseInt(t) != 0) {
                if (parseInt(q[d]) == 1) {
                    h.push({"lable": "表" + (d + 1), "name": "d" + (d + 1)})
                } else {
                    if (parseInt(q[d]) == 2) {
                        a.push({"lable": "表" + (d + 1), "name": "u" + (d + 1)})
                    } else {
                        if (parseInt(q[d]) == 3) {
                            e.push({"lable": "表" + (d + 1), "name": "u" + (d + 1)})
                        } else {
                            if (parseInt(q[d]) == 4) {
                                p.push({"lable": "表" + (d + 1), "name": "d" + (d + 1)})
                            } else {
                                if (parseInt(q[d]) == 5) {
                                    b.push({"lable": "表" + (d + 1), "name": "t" + (d + 1)})
                                }
                            }
                        }
                    }
                }
            }
        });
        if (h.length > 0) {
            c.header.push({"lable": "沉降(mm)", "name": "", "children": h})
        }
        if (a.length > 0) {
            c.header.push({"lable": "上拔(mm)", "name": "", "children": a})
        }
        if (e.length > 0) {
            c.header.push({"lable": "向上位移(mm)", "name": "", "children": e})
        }
        if (p.length > 0) {
            c.header.push({"lable": "向下位移(mm)", "name": "", "children": p})
        }
        if (b.length > 0) {
            c.header.push({"lable": "桩顶位移(mm)", "name": "", "children": b})
        }
    }
    if (m.testType == 1) {
        var j = [];
        j.push({"lable": "本次", "name": "oned"});
        j.push({"lable": "累计", "name": "totald"});
        j.push({"lable": "本级", "name": "leveld"});
        c.header.push({"lable": "平均沉降(mm)", "name": "", "children": j})
    } else {
        if (m.testType == 2 || m.testType == 3) {
            var j = [];
            j.push({"lable": "本次", "name": "oneu"});
            j.push({"lable": "累计", "name": "totalu"});
            j.push({"lable": "本级", "name": "levelu"});
            c.header.push({"lable": "平均上拔(mm)", "name": "", "children": j})
        } else {
            if (m.testType == 4) {
                if (m.sensorDirection.indexOf("3") != -1) {
                    var j = [];
                    j.push({"lable": "本次", "name": "oneu"});
                    j.push({"lable": "累计", "name": "totalu"});
                    j.push({"lable": "本级", "name": "levelu"});
                    c.header.push({"lable": "平均向上位移(mm)", "name": "", "children": j})
                }
                if (m.sensorDirection.indexOf("4") != -1) {
                    var j = [];
                    j.push({"lable": "本次", "name": "oned"});
                    j.push({"lable": "累计", "name": "totald"});
                    j.push({"lable": "本级", "name": "leveld"});
                    c.header.push({"lable": "平均向下位移(mm)", "name": "", "children": j})
                }
                if (m.sensorDirection.indexOf("5") != -1) {
                    var j = [];
                    j.push({"lable": "本次", "name": "onet"});
                    j.push({"lable": "累计", "name": "totalt"});
                    j.push({"lable": "本级", "name": "levelt"});
                    c.header.push({"lable": "平均桩顶位移(mm)", "name": "", "children": j})
                }
            } else {
                if (m.testType == 11 || m.testType == 12) {
                    if (m.sensorDirection.indexOf("3") != -1) {
                        var j = [];
                        j.push({"lable": "本次", "name": "oneu"});
                        j.push({"lable": "累计", "name": "totalu"});
                        j.push({"lable": "本级", "name": "levelu"});
                        c.header.push({"lable": "平均向上位移(mm)", "name": "", "children": j})
                    }
                    if (m.sensorDirection.indexOf("4") != -1) {
                        var j = [];
                        j.push({"lable": "本次", "name": "oned"});
                        j.push({"lable": "累计", "name": "totald"});
                        j.push({"lable": "本级", "name": "leveld"});
                        c.header.push({"lable": "平均向下位移(mm)", "name": "", "children": j})
                    }
                } else {
                    var j = [];
                    j.push({"lable": "本次", "name": "oned"});
                    j.push({"lable": "累计", "name": "totald"});
                    j.push({"lable": "本级", "name": "leveld"});
                    c.header.push({"lable": "平均沉降(mm)", "name": "", "children": j})
                }
            }
        }
    }
    var r = 0;
    var n = 0;
    var g = 0;
    var o = -66;
    var f = 0;
    var l = 0;
    var k = 0;
    s.forEach(function (F, E) {
        var x = {};
        x["id"] = F.id;
        x["loadDirect"] = F.loadDirect;
        x["sampleCount"] = F.sampleCount;
        if (m.testType == 1) {
            x["loading"] = Math.round(F.loading);
            x["timeCount"] = F.timeCount;
            x["realLoading"] = Math.round(F.realLoading * 10) / 10;
            x["realPress"] = Math.round(F.realPress * 100) / 100;
            x["sampleTime"] = (F.sampleTime + "").substring(0, 16);
            x["createTime"] = (F.createTime + "").substring(0, 16)
        } else {
            if (m.testType == 2 || m.testType == 3) {
                x["loading"] = Math.round(F.loading);
                x["timeCount"] = F.timeCount;
                x["realLoading"] = Math.round(F.realLoading * 10) / 10;
                x["realPress"] = Math.round(F.realPress * 100) / 100;
                x["sampleTime"] = (F.sampleTime + "").substring(0, 16);
                x["createTime"] = (F.createTime + "").substring(0, 16)
            } else {
                if (m.testType == 4 || m.testType == 12) {
                    x["loading"] = Math.round(F.loading);
                    x["timeCount"] = F.timeCount;
                    x["realLoading"] = Math.round(F.realLoading * 10) / 10;
                    x["realPress"] = Math.round(F.realPress * 100) / 100;
                    x["sampleTime"] = (F.sampleTime + "").substring(0, 16);
                    x["createTime"] = (F.createTime + "").substring(0, 16)
                } else {
                    if (m.testType == 11) {
                        x["loading"] = Math.round(F.loading);
                        var y = F.loadDirect;
                        var D = F.sampleCount;
                        var C = "";
                        if (y == 1) {
                            C = D + "↑"
                        } else {
                            if (y == 0) {
                                C = D + "↓"
                            }
                        }
                        x["loopCount"] = C;
                        x["timeCount"] = F.timeCount;
                        x["realLoading"] = Math.round(F.realLoading * 10) / 10;
                        x["realPress"] = Math.round(F.realPress * 100) / 100;
                        x["sampleTime"] = (F.sampleTime + "").substring(0, 16);
                        x["createTime"] = (F.createTime + "").substring(0, 16)
                    } else {
                        x["loading"] = Math.round(F.loading);
                        x["timeCount"] = F.timeCount;
                        x["realLoading"] = Math.round(F.realLoading * 10) / 10;
                        x["realPress"] = Math.round(F.realPress * 100) / 100;
                        x["sampleTime"] = (F.sampleTime + "").substring(0, 16);
                        x["createTime"] = (F.createTime + "").substring(0, 16)
                    }
                }
            }
        }
        var H = F.sensorValue.split(",");
        var A = m.sensorDirection.split(",");
        H.forEach(function (v, d) {
            if (parseFloat(v) != -66) {
                if (parseInt(A[d]) == 1) {
                    x["d" + (d + 1)] = Math.round(v * 100) / 100
                } else {
                    if (parseInt(A[d]) == 2) {
                        x["u" + (d + 1)] = Math.round(v * 100) / 100
                    } else {
                        if (parseInt(A[d]) == 3) {
                            x["u" + (d + 1)] = Math.round(v * 100) / 100
                        } else {
                            if (parseInt(A[d]) == 4) {
                                x["d" + (d + 1)] = Math.round(v * 100) / 100
                            } else {
                                if (parseInt(A[d]) == 5) {
                                    x["t" + (d + 1)] = Math.round(v * 100) / 100
                                }
                            }
                        }
                    }
                }
            }
        });
        if (m.testType == 1) {
            var B = Math.round(F.average * 100) / 100;
            var w = Math.round((B - f) * 100) / 100;
            x["totald"] = B;
            x["oned"] = w;
            if (o == Math.round(F.loading)) {
                r = Math.round((w + r) * 100) / 100
            } else {
                r = w;
                o = Math.round(F.loading)
            }
            x["leveld"] = r;
            f = B
        } else {
            if (m.testType == 2 || m.testType == 3) {
                var z = Math.round(F.average * 100) / 100;
                var u = Math.round((z - l) * 100) / 100;
                x["totalu"] = z;
                x["oneu"] = u;
                if (o == Math.round(F.loading)) {
                    n = Math.round((u + n) * 100) / 100
                } else {
                    n = u;
                    o = Math.round(F.loading)
                }
                x["levelu"] = n;
                l = z
            } else {
                if (m.testType == 4) {
                    var z = Math.round(F.average * 100) / 100;
                    var u = Math.round((z - l) * 100) / 100;
                    x["totalu"] = z;
                    x["oneu"] = u;
                    var B = Math.round((F.downAverage == null ? 0 : F.downAverage) * 100) / 100;
                    var w = Math.round((B - f) * 100) / 100;
                    x["totald"] = B;
                    x["oned"] = w;
                    var t = Math.round((F.topAverage == null ? 0 : F.topAverage) * 100) / 100;
                    var G = Math.round((t - k) * 100) / 100;
                    x["totalt"] = t;
                    x["onet"] = G;
                    if (o == Math.round(F.loading)) {
                        n = Math.round((u + n) * 100) / 100;
                        r = Math.round((w + r) * 100) / 100;
                        g = Math.round((G + g) * 100) / 100
                    } else {
                        n = u;
                        r = w;
                        g = G;
                        o = Math.round(F.loading)
                    }
                    x["levelu"] = n;
                    x["leveld"] = r;
                    x["levelt"] = g;
                    l = z;
                    f = B;
                    k = t
                } else {
                    if (m.testType == 11) {
                        var z = Math.round(F.average * 100) / 100;
                        var u = Math.round((z - l) * 100) / 100;
                        x["totalu"] = z;
                        x["oneu"] = u;
                        var B = Math.round((F.downAverage == null ? 0 : F.downAverage) * 100) / 100;
                        var w = Math.round((B - f) * 100) / 100;
                        x["totald"] = B;
                        x["oned"] = w;
                        if (o == (Math.round(F.loading) + F.sampleCount + F.loadDirect + "")) {
                            n = Math.round((u + n) * 100) / 100;
                            r = Math.round((w + r) * 100) / 100
                        } else {
                            n = u;
                            r = w;
                            o = (Math.round(F.loading) + F.sampleCount + F.loadDirect + "")
                        }
                        x["levelu"] = n;
                        x["leveld"] = r;
                        l = z;
                        f = B
                    } else {
                        if (m.testType == 12) {
                            var z = Math.round(F.average * 100) / 100;
                            var u = Math.round((z - l) * 100) / 100;
                            x["totalu"] = z;
                            x["oneu"] = u;
                            var B = Math.round((F.downAverage == null ? 0 : F.downAverage) * 100) / 100;
                            var w = Math.round((B - f) * 100) / 100;
                            x["totald"] = B;
                            x["oned"] = w;
                            if (o == Math.round(F.loading)) {
                                n = Math.round((u + n) * 100) / 100;
                                r = Math.round((w + r) * 100) / 100
                            } else {
                                n = u;
                                r = w;
                                o = Math.round(F.loading)
                            }
                            x["levelu"] = n;
                            x["leveld"] = r;
                            l = z;
                            f = B
                        } else {
                            var B = Math.round(F.average * 100) / 100;
                            var w = Math.round((B - f) * 100) / 100;
                            x["totald"] = B;
                            x["oned"] = w;
                            if (o == Math.round(F.loading)) {
                                r = Math.round((w + r) * 100) / 100
                            } else {
                                r = w;
                                o = Math.round(F.loading)
                            }
                            x["leveld"] = r;
                            f = B
                        }
                    }
                }
            }
        }
        c.data.push(x)
    });
    return c
}

function totalDataCal(m, n) {
    var g = {header: [], data: []};
    if (m.testType == 1) {
        g.header.push({"lable": "控载(kN)", "name": "loading"});
        var k = [];
        k.push({"lable": "本级", "name": "time"});
        k.push({"lable": "累计", "name": "timeTotal"});
        if (k.length > 0) {
            g.header.push({"lable": "历时(min)", "name": "", "children": k})
        }
        var j = [];
        j.push({"lable": "本级", "name": "down"});
        j.push({"lable": "累计", "name": "downTotal"});
        if (j.length > 0) {
            g.header.push({"lable": "沉降(mm)", "name": "", "children": j})
        }
    } else {
        if (m.testType == 2 || m.testType == 3) {
            g.header.push({"lable": "控载(kN)", "name": "loading"});
            var k = [];
            k.push({"lable": "本级", "name": "time"});
            k.push({"lable": "累计", "name": "timeTotal"});
            if (k.length > 0) {
                g.header.push({"lable": "历时(min)", "name": "", "children": k})
            }
            var j = [];
            j.push({"lable": "本级", "name": "up"});
            j.push({"lable": "累计", "name": "upTotal"});
            if (j.length > 0) {
                g.header.push({"lable": "上拔(mm)", "name": "", "children": j})
            }
        } else {
            if (m.testType == 4) {
                g.header.push({"lable": "控载(kN)", "name": "loading"});
                var k = [];
                k.push({"lable": "本级", "name": "time"});
                k.push({"lable": "累计", "name": "timeTotal"});
                if (k.length > 0) {
                    g.header.push({"lable": "历时(min)", "name": "", "children": k})
                }
                if (m.sensorDirection.indexOf("3") != -1) {
                    var j = [];
                    j.push({"lable": "本级", "name": "up"});
                    j.push({"lable": "累计", "name": "upTotal"});
                    if (j.length > 0) {
                        g.header.push({"lable": "向上位移(mm)", "name": "", "children": j})
                    }
                }
                if (m.sensorDirection.indexOf("4") != -1) {
                    var j = [];
                    j.push({"lable": "本级", "name": "down"});
                    j.push({"lable": "累计", "name": "downTotal"});
                    if (j.length > 0) {
                        g.header.push({"lable": "向下位移(mm)", "name": "", "children": j})
                    }
                }
                if (m.sensorDirection.indexOf("5") != -1) {
                }
            } else {
                if (m.testType == 11) {
                    g.header.push({"lable": "控载(kN)", "name": "loading"});
                    var k = [];
                    k.push({"lable": "本级", "name": "time"});
                    k.push({"lable": "累计", "name": "timeTotal"});
                    if (k.length > 0) {
                        g.header.push({"lable": "历时(min)", "name": "", "children": k})
                    }
                    g.header.push({"lable": "循环次数", "name": "sampleCount"});
                    var j = [];
                    if (m.sensorDirection.indexOf("3") != -1) {
                        j.push({"lable": "向上", "name": "upTotal1"})
                    }
                    if (m.sensorDirection.indexOf("4") != -1) {
                        j.push({"lable": "向下", "name": "downTotal1"})
                    }
                    if (j.length > 0) {
                        g.header.push({"lable": "加载位移(mm)", "name": "", "children": j})
                    }
                    var i = [];
                    if (m.sensorDirection.indexOf("3") != -1) {
                        i.push({"lable": "向上", "name": "upTotal2"})
                    }
                    if (m.sensorDirection.indexOf("4") != -1) {
                        i.push({"lable": "向下", "name": "downTotal2"})
                    }
                    if (i.length > 0) {
                        g.header.push({"lable": "卸载位移(mm)", "name": "", "children": i})
                    }
                    var h = [];
                    var e = [];
                    var c = [];
                    e.push({"lable": "本级", "name": "down1"});
                    e.push({"lable": "累计", "name": "downT1"});
                    c.push({"lable": "本级", "name": "down2"});
                    c.push({"lable": "累计", "name": "downT2"});
                    h.push({"lable": "加载", "name": "", "children": e});
                    h.push({"lable": "卸载", "name": "", "children": c});
                    g.header.push({"lable": "水平位移(mm)", "name": "", "children": h});
                    if (m.sensorDirection.indexOf("3") != -1) {
                        g.header.push({"lable": "加载上下表读数差(mm)", "name": "offset"});
                        g.header.push({"lable": "转角(°)", "name": "angle"})
                    }
                } else {
                    if (m.testType == 12) {
                        g.header.push({"lable": "控载(kN)", "name": "loading"});
                        var k = [];
                        k.push({"lable": "本级", "name": "time"});
                        k.push({"lable": "累计", "name": "timeTotal"});
                        if (k.length > 0) {
                            g.header.push({"lable": "历时(min)", "name": "", "children": k})
                        }
                        if (m.sensorDirection.indexOf("3") != -1) {
                            var j = [];
                            j.push({"lable": "本级", "name": "up"});
                            j.push({"lable": "累计", "name": "upTotal"});
                            if (j.length > 0) {
                                g.header.push({"lable": "向上位移(mm)", "name": "", "children": j})
                            }
                        }
                        if (m.sensorDirection.indexOf("4") != -1) {
                            var j = [];
                            j.push({"lable": "本级", "name": "down"});
                            j.push({"lable": "累计", "name": "downTotal"});
                            if (j.length > 0) {
                                g.header.push({"lable": "向下位移(mm)", "name": "", "children": j})
                            }
                        }
                        if (m.sensorDirection.indexOf("3") != -1) {
                            g.header.push({"lable": "加载上下表读数差(mm)", "name": "offset"});
                            g.header.push({"lable": "转角(°)", "name": "angle"})
                        }
                    } else {
                        g.header.push({"lable": "控载(kPa))", "name": "loading"});
                        g.header.push({"lable": "本级历时(min)", "name": "time"});
                        g.header.push({"lable": "累计历时(min)", "name": "timeTotal"});
                        g.header.push({"lable": "本级沉降(mm)", "name": "down"});
                        g.header.push({"lable": "累计沉降(mm)", "name": "downTotal"})
                    }
                }
            }
        }
    }
    var o = {};
    n.forEach(function (q, p) {
        var r;
        if (q.loadDirect == 1) {
            r = "v" + q.loading
        } else {
            r = "u" + q.loading
        }
        o[r] = q
    });
    var l = 0;
    var b = 0;
    for (var d in o) {
        var k = {};
        if (m.testType == 11) {
            if (o[d].loadDirect == 1) {
                k["id"] = o[d].id;
                k["loadDirect"] = o[d].loadDirect;
                k["loading"] = o[d].loading;
                k["time"] = o[d].timeCount;
                l += o[d].timeCount;
                k["timeTotal"] = l;
                k["sampleCount"] = o[d].sampleCount;
                k["upTotal1"] = o[d].totalu;
                k["downTotal1"] = o[d].totald;
                k["upTotal2"] = o["u" + o[d].loading].totalu;
                k["downTotal2"] = o["u" + o[d].loading].totald;
                k["downT1"] = o[d].totald;
                k["downT2"] = o["u" + o[d].loading].totald;
                k["down1"] = Math.round((k["downT1"] - b) * 100) / 100;
                k["down2"] = Math.round((k["downT2"] - b) * 100) / 100;
                b = k["downT2"];
                k["offset"] = Math.round((o[d].totalu - o[d].totald) * 100) / 100;
                var a = m.sensorDistance;
                if (null != a && a != 0) {
                    var f = (o[d].totalu - o[d].totald) / a;
                    k["angle"] = Math.round(((Math.atan(f)) * 180 / Math.PI) * 100) / 100
                } else {
                    k["angle"] = Math.round(((Math.atan(0)) * 180 / Math.PI) * 100) / 100
                }
                g.data.push(k)
            }
        } else {
            k["id"] = o[d].id;
            k["loadDirect"] = o[d].loadDirect;
            k["loading"] = o[d].loading;
            k["time"] = o[d].timeCount;
            l += o[d].timeCount;
            k["timeTotal"] = l;
            if (m.testType == 1) {
                k["down"] = o[d].leveld;
                k["downTotal"] = o[d].totald
            } else {
                if (m.testType == 2 || m.testType == 3) {
                    k["up"] = o[d].levelu;
                    k["upTotal"] = o[d].totalu
                } else {
                    if (m.testType == 4) {
                        if (m.sensorDirection.indexOf("3") != -1) {
                            k["up"] = o[d].levelu;
                            k["upTotal"] = o[d].totalu
                        }
                        if (m.sensorDirection.indexOf("4") != -1) {
                            k["down"] = o[d].leveld;
                            k["downTotal"] = o[d].totald
                        }
                        if (m.sensorDirection.indexOf("5") != -1) {
                        }
                    } else {
                        if (m.testType == 12) {
                            if (m.sensorDirection.indexOf("3") != -1) {
                                k["up"] = o[d].levelu;
                                k["upTotal"] = o[d].totalu
                            }
                            if (m.sensorDirection.indexOf("4") != -1) {
                                k["down"] = o[d].leveld;
                                k["downTotal"] = o[d].totald
                            }
                            k["offset"] = Math.round((o[d].totalu - o[d].totald) * 100) / 100;
                            var a = m.sensorDistance;
                            if (null != a && a != 0) {
                                var f = (o[d].totalu - o[d].totald) / a;
                                k["angle"] = Math.round(((Math.atan(f)) * 180 / Math.PI) * 100) / 100
                            } else {
                                k["angle"] = Math.round(((Math.atan(0)) * 180 / Math.PI) * 100) / 100
                            }
                        } else {
                            k["down"] = o[d].leveld;
                            k["downTotal"] = o[d].totald
                        }
                    }
                }
            }
            g.data.push(k)
        }
    }
    return g
}

function loadOrUnloadDataCal(a, b, c) {
    var e = {header: [], data: []};
    var g = [];
    var f = [];
    var h = {};
    b.forEach(function (k, i) {
        if (k.loadDirect == c) {
            var j = "v" + k.timeCount + k.loading;
            if (a.testType == 1) {
                h[j + "d"] = k.totald
            } else {
                if (a.testType == 2 || a.testType == 3) {
                    h[j + "u"] = k.totalu
                } else {
                    if (a.testType == 4) {
                        h[j + "d"] = k.totald;
                        h[j + "u"] = k.totalu;
                        h[j + "t"] = k.totalt
                    } else {
                        if (a.testType == 11) {
                            h[j + "d"] = k.totald;
                            h[j + "u"] = k.totalu
                        } else {
                            if (a.testType == 12) {
                                h[j + "d"] = k.totald;
                                h[j + "u"] = k.totalu
                            } else {
                                h[j + "d"] = k.totald
                            }
                        }
                    }
                }
            }
            if (g.indexOf(k.timeCount) == -1) {
                g.push(k.timeCount)
            }
            if (f.indexOf(k.loading) == -1) {
                f.push(k.loading)
            }
        }
    });
    var d = "(kN)";
    if (a.testType == 1) {
    } else {
        if (a.testType == 2 || a.testType == 3) {
        } else {
            if (a.testType == 4) {
            } else {
                if (a.testType == 11) {
                } else {
                    if (a.testType == 12) {
                    } else {
                        d = "(kPa)"
                    }
                }
            }
        }
    }
    e.header.push({"lable": "时间 (min)", "name": "time"});
    f.forEach(function (j, i) {
        if (a.testType == 1) {
            e.header.push({"lable": "荷载:" + j + d, "name": j + "down"})
        } else {
            if (a.testType == 2 || a.testType == 3) {
                e.header.push({"lable": "荷载:" + j + d, "name": j + "up"})
            } else {
                if (a.testType == 4) {
                    var k = [];
                    if (a.sensorDirection.indexOf("3") != -1) {
                        k.push({"lable": "向上", "name": j + "up"})
                    }
                    if (a.sensorDirection.indexOf("4") != -1) {
                        k.push({"lable": "向下", "name": j + "down"})
                    }
                    if (a.sensorDirection.indexOf("5") != -1) {
                    }
                    if (k.length > 0) {
                        e.header.push({"lable": "荷载:" + j + d, "name": "", "children": k})
                    }
                } else {
                    if (a.testType == 11) {
                        if (a.sensorDirection.indexOf("3") != -1) {
                            e.header.push({"lable": "荷载:" + j + "向上" + d, "name": j + "up"})
                        }
                        if (a.sensorDirection.indexOf("4") != -1) {
                            e.header.push({"lable": "荷载:" + j + "向下" + d, "name": j + "down"})
                        }
                    } else {
                        if (a.testType == 12) {
                            if (a.sensorDirection.indexOf("3") != -1) {
                                e.header.push({"lable": "荷载:" + j + "向上" + d, "name": j + "up"})
                            }
                            if (a.sensorDirection.indexOf("4") != -1) {
                                e.header.push({"lable": "荷载:" + j + "向下" + d, "name": j + "down"})
                            }
                        } else {
                            e.header.push({"lable": "荷载:" + j + d, "name": j + "down"})
                        }
                    }
                }
            }
        }
    });
    g.forEach(function (j, i) {
        var k = {};
        k["time"] = j;
        f.forEach(function (m, l) {
            var n = "v" + j + m;
            if (a.testType == 1) {
                k[m + "down"] = h[n + "d"]
            } else {
                if (a.testType == 2 || a.testType == 3) {
                    k[m + "up"] = h[n + "u"]
                } else {
                    if (a.testType == 4) {
                        if (a.sensorDirection.indexOf("3") != -1) {
                            k[m + "up"] = h[n + "u"]
                        }
                        if (a.sensorDirection.indexOf("4") != -1) {
                            k[m + "down"] = h[n + "d"]
                        }
                        if (a.sensorDirection.indexOf("5") != -1) {
                            k[m + "top"] = h[n + "t"]
                        }
                    } else {
                        if (a.testType == 11) {
                            k[m + "down"] = h[n + "d"];
                            k[m + "up"] = h[n + "u"]
                        } else {
                            if (a.testType == 12) {
                                k[m + "down"] = h[n + "d"];
                                k[m + "up"] = h[n + "u"]
                            } else {
                                k[m + "down"] = h[n + "d"]
                            }
                        }
                    }
                }
            }
        });
        e.data.push(k)
    });
    return e
}

function qsCurve(q, g, k) {
    if (g.length == 0) {
        k.innerHTML = "<font color='red'>数据不足，无法显示曲线</font>";
        return
    }
    var w = {};
    g.forEach(function (p, n) {
        var B;
        if (p.loadDirect == 1) {
            B = "v" + p.loading
        } else {
            B = "u" + p.loading
        }
        w[B] = p
    });
    var j = [[0, 0]];
    var b = [[0, 0]];
    var t = [];
    var u = [];
    for (var m in w) {
        if (w[m].loadDirect == 1) {
            if (q.testType == 1) {
                j.push([w[m].loading, w[m].totald])
            } else {
                if (q.testType == 2 || q.testType == 3) {
                    b.push([w[m].loading, w[m].totalu])
                } else {
                    if (q.testType == 4) {
                        b.push([w[m].loading, (-1) * w[m].totalu]);
                        j.push([w[m].loading, w[m].totald])
                    } else {
                        if (q.testType == 11 || q.testType == 12) {
                            j.push([w[m].loading, w[m].totald])
                        } else {
                            j.push([w[m].loading, w[m].totald])
                        }
                    }
                }
            }
        } else {
            if (q.testType == 1) {
                t.push([w[m].loading, w[m].totald])
            } else {
                if (q.testType == 2 || q.testType == 3) {
                    u.push([w[m].loading, w[m].totalu])
                } else {
                    if (q.testType == 4) {
                        u.push([w[m].loading, (-1) * w[m].totalu]);
                        t.push([w[m].loading, w[m].totald])
                    } else {
                        if (q.testType == 11 || q.testType == 12) {
                            t.push([w[m].loading, w[m].totald])
                        } else {
                            t.push([w[m].loading, w[m].totald])
                        }
                    }
                }
            }
        }
    }
    t = t.reverse();
    t.push(j[j.length - 1]);
    t = t.reverse();
    u = u.reverse();
    u.push(b[b.length - 1]);
    u = u.reverse();
    var y = 5;
    var A;
    var a;
    var e;
    var v;
    var h;
    var f;
    if (q.testType == 1 || q.testType == 4) {
        A = "Q-s曲线";
        a = "Q (kN)";
        e = "s (mm)";
        v = "kN";
        h = "mm";
        f = true
    } else {
        if (q.testType == 2 || q.testType == 3) {
            A = "U-δ曲线";
            a = "U (kN)";
            e = "δ (mm)";
            v = "kN";
            h = "mm";
            f = false
        } else {
            if (q.testType == 11) {
                A = "H-t-YO曲线";
                a = "t (H)";
                e = "YO (mm)";
                v = "kN";
                h = "mm";
                f = true
            } else {
                if (q.testType == 12) {
                    A = "H-YO曲线";
                    a = "H(kPa)";
                    e = "YO (mm)";
                    v = "kPa";
                    h = "mm";
                    f = true
                } else {
                    A = "p-s曲线";
                    a = "p (kPa)";
                    e = "s (mm)";
                    v = "kPa";
                    h = "mm";
                    f = true
                }
            }
        }
    }
    var r = [];
    if (q.testType == 1) {
        r.push({
            name: "加载",
            type: "line",
            symbol: "circle",
            smooth: false,
            symbolSize: y,
            itemStyle: {normal: {color: "blue", lineStyle: {color: "blue"}}},
            data: j,
            tooltip: {
                formatter: function (n) {
                    return "加载<br> " + n.data[0] + v + "&nbsp;&nbsp;" + n.data[1] + h
                }
            }
        });
        r.push({
            name: "卸载",
            type: "line",
            symbol: "triangle",
            smooth: false,
            symbolSize: y,
            itemStyle: {normal: {color: "red", lineStyle: {color: "red"}}},
            data: t,
            tooltip: {
                formatter: function (n) {
                    return "加载<br> " + n.data[0] + v + "&nbsp;&nbsp;" + n.data[1] + h
                }
            }
        })
    } else {
        if (q.testType == 2 || q.testType == 3) {
            r.push({
                name: "加载",
                type: "line",
                symbol: "circle",
                smooth: false,
                symbolSize: y,
                itemStyle: {normal: {color: "blue", lineStyle: {color: "blue"}}},
                data: b,
                tooltip: {
                    formatter: function (n) {
                        return "加载<br> " + n.data[0] + v + "&nbsp;&nbsp;" + n.data[1] + h
                    }
                }
            });
            r.push({
                name: "卸载",
                type: "line",
                symbol: "triangle",
                smooth: false,
                symbolSize: y,
                itemStyle: {normal: {color: "red", lineStyle: {color: "red"}}},
                data: u,
                tooltip: {
                    formatter: function (n) {
                        return "卸载<br> " + n.data[0] + v + "&nbsp;&nbsp;" + n.data[1] + h
                    }
                }
            })
        } else {
            if (q.testType == 4) {
                r.push({
                    name: "加载向上",
                    type: "line",
                    symbol: "circle",
                    smooth: false,
                    symbolSize: y,
                    itemStyle: {normal: {color: "blue", lineStyle: {color: "blue"}}},
                    data: b,
                    tooltip: {
                        formatter: function (n) {
                            return "加载向上<br> " + n.data[0] + v + "&nbsp;&nbsp;" + Math.abs(n.data[1]) + h
                        }
                    }
                });
                r.push({
                    name: "卸载向上",
                    type: "line",
                    symbol: "triangle",
                    smooth: false,
                    symbolSize: y,
                    itemStyle: {normal: {color: "red", lineStyle: {color: "red"}}},
                    data: u,
                    tooltip: {
                        formatter: function (n) {
                            return "卸载向上<br> " + n.data[0] + v + "&nbsp;&nbsp;" + Math.abs(n.data[1]) + h
                        }
                    }
                });
                r.push({
                    name: "加载向下",
                    type: "line",
                    symbol: "circle",
                    smooth: false,
                    symbolSize: y,
                    itemStyle: {normal: {color: "blue", lineStyle: {color: "blue"}}},
                    data: j,
                    tooltip: {
                        formatter: function (n) {
                            return "加载向下<br> " + n.data[0] + v + "&nbsp;&nbsp;" + n.data[1] + h
                        }
                    }
                });
                r.push({
                    name: "卸载向下",
                    type: "line",
                    symbol: "triangle",
                    smooth: false,
                    symbolSize: y,
                    itemStyle: {normal: {color: "red", lineStyle: {color: "red"}}},
                    data: t,
                    tooltip: {
                        formatter: function (n) {
                            return "卸载向下<br> " + n.data[0] + v + "&nbsp;&nbsp;" + n.data[1] + h
                        }
                    }
                })
            } else {
                if (q.testType == 11) {
                    var w = {};
                    g.forEach(function (p, n) {
                        var B = p.loading + "" + p.sampleCount + "";
                        if (p.loadDirect == 1) {
                            B = "v" + B
                        } else {
                            B = "u" + B
                        }
                        w[B] = p
                    });
                    var j = [[0, 0, 0]];
                    var i = q.loopCount;
                    var s = (i * 6) / 60;
                    var x = 0;
                    var o = 0;
                    for (var m in w) {
                        if (w[m].loading != x) {
                            o++;
                            x = w[m].loading
                        }
                        if (w[m].loadDirect == 1) {
                            var c = ((w[m].timeCount / (i * 6)) * s) + (o - 1) * s;
                            c = Math.round(c * 100) / 100;
                            j.push([c, w[m].totald, w[m].loading]);
                            var z = w["u" + w[m].loading + w[m].sampleCount];
                            var l = ((z.timeCount / (i * 6)) * s) + (o - 1) * s;
                            l = Math.round(l * 100) / 100;
                            j.push([l, z.totald, z.loading])
                        }
                    }
                    r.push({
                        name: "加载向下",
                        type: "line",
                        symbol: "circle",
                        smooth: false,
                        symbolSize: y,
                        itemStyle: {normal: {color: "blue", lineStyle: {color: "blue"}}},
                        data: j,
                        tooltip: {
                            formatter: function (n) {
                                return "H:" + parseFloat(n.data[2]).toFixed(1) + v + "&nbsp;&nbsp;Y0:" + n.data[1].toFixed(2) + h
                            }
                        }
                    })
                } else {
                    if (q.testType == 12) {
                        r.push({
                            name: "加载",
                            type: "line",
                            symbol: "circle",
                            smooth: false,
                            symbolSize: y,
                            itemStyle: {normal: {color: "blue", lineStyle: {color: "blue"}}},
                            data: j,
                            tooltip: {
                                formatter: function (n) {
                                    return "H: " + n.data[0] + v + "&nbsp;&nbsp;Y0:" + n.data[1] + h
                                }
                            }
                        });
                        r.push({
                            name: "卸载",
                            type: "line",
                            symbol: "triangle",
                            smooth: false,
                            symbolSize: y,
                            itemStyle: {normal: {color: "red", lineStyle: {color: "red"}}},
                            data: t,
                            tooltip: {
                                formatter: function (n) {
                                    return "H:  " + n.data[0] + v + "&nbsp;&nbsp;Y0:" + n.data[1] + h
                                }
                            }
                        })
                    } else {
                        r.push({
                            name: "加载",
                            type: "line",
                            symbol: "circle",
                            smooth: false,
                            symbolSize: y,
                            itemStyle: {normal: {color: "blue", lineStyle: {color: "blue"}}},
                            data: j,
                            tooltip: {
                                formatter: function (n) {
                                    return "加载<br> " + parseFloat(n.data[0]).toFixed(1) + v + "&nbsp;&nbsp;" + n.data[1].toFixed(2) + h
                                }
                            }
                        });
                        r.push({
                            name: "卸载",
                            type: "line",
                            symbol: "triangle",
                            smooth: false,
                            symbolSize: y,
                            itemStyle: {normal: {color: "red", lineStyle: {color: "red"}}},
                            data: t,
                            tooltip: {
                                formatter: function (n) {
                                    return "加载<br> " + parseFloat(n.data[0]).toFixed(1) + v + "&nbsp;&nbsp;" + n.data[1].toFixed(2) + h
                                }
                            }
                        })
                    }
                }
            }
        }
    }
    var d = echarts.init(k);
    d.setOption({
        tooltip: {trigger: "item"},
        title: {text: A, left: "center"},
        animation: false,
        xAxis: {name: a, type: "value", nameLocation: "center", nameGap: 25},
        yAxis: {
            name: e, axisLabel: {
                formatter: function (p, n) {
                    return Math.abs(p)
                }
            }, inverse: f, type: "value", nameLocation: "center", nameGap: 25
        },
        series: r
    }, true)
}

function slgqCurve(m, g, k) {
    if (g.length == 0) {
        k.innerHTML = "<font color='red'>数据不足，无法显示曲线</font>"
    }
    var q = {};
    g.forEach(function (w, p) {
        var x;
        if (w.loadDirect == 1) {
            x = "v" + w.loading
        } else {
            x = "u" + w.loading
        }
        q[x] = w
    });
    var j = [[0, 0, 0]];
    var b = [[0, 0, 0]];
    for (var l in q) {
        if (q[l].loadDirect == 1) {
            if (m.testType == 1) {
                j.push([getBaseLog(10, q[l].loading), q[l].totald, q[l].loading])
            } else {
                if (m.testType == 2 || m.testType == 3) {
                    b.push([getBaseLog(10, q[l].loading), q[l].totalu, q[l].loading])
                } else {
                    if (m.testType == 4) {
                        j.push([getBaseLog(10, q[l].loading), q[l].totald, q[l].loading]);
                        b.push([getBaseLog(10, q[l].loading), (-1) * q[l].totalu, q[l].loading])
                    } else {
                        if (m.testType == 11 || m.testType == 12) {
                            j.push([getBaseLog(10, q[l].loading), q[l].totald, q[l].loading]);
                            b.push([getBaseLog(10, q[l].loading), (-1) * q[l].totalu, q[l].loading])
                        } else {
                            j.push([getBaseLog(10, q[l].loading), q[l].totald, q[l].loading])
                        }
                    }
                }
            }
        }
    }
    var s = 5;
    var v;
    var a;
    var c;
    var o;
    var i;
    var d;
    var e = false;
    if (m.testType == 1 || m.testType == 4) {
        v = "s-lgQ曲线";
        a = "lgQ (kN)";
        c = "s (mm)";
        o = "kN";
        i = "mm";
        d = true
    } else {
        if (m.testType == 2 || m.testType == 3) {
            v = "δ-lgU曲线";
            a = "lgQ (kN)";
            c = "s (mm)";
            o = "kN";
            i = "mm";
            d = false
        } else {
            if (m.testType == 11 || m.testType == 12) {
                v = "H-△YO/△H曲线";
                a = "H (kPa)";
                c = "△YO/△H (mm/kN)";
                o = "kN";
                i = "mm";
                d = false;
                e = true
            } else {
                v = "s-lgp曲线";
                a = "lgp (kPa)";
                c = "s (mm)";
                o = "kPa";
                i = "mm";
                d = true
            }
        }
    }
    var n = [];
    if (m.testType == 1) {
        n.push({
            name: "加载",
            type: "line",
            symbol: "circle",
            smooth: false,
            symbolSize: s,
            itemStyle: {normal: {color: "blue", lineStyle: {color: "blue"}}},
            data: j,
            tooltip: {
                formatter: function (p) {
                    return "加载<br> " + p.data[2] + o + "&nbsp;&nbsp;" + p.data[1] + i
                }
            }
        })
    } else {
        if (m.testType == 2 || m.testType == 3) {
            n.push({
                name: "加载",
                type: "line",
                symbol: "circle",
                smooth: false,
                symbolSize: s,
                itemStyle: {normal: {color: "blue", lineStyle: {color: "blue"}}},
                data: b,
                tooltip: {
                    formatter: function (p) {
                        return "加载<br> " + p.data[2] + o + "&nbsp;&nbsp;" + p.data[1] + i
                    }
                }
            })
        } else {
            if (m.testType == 4) {
                n.push({
                    name: "加载向上",
                    type: "line",
                    symbol: "circle",
                    smooth: false,
                    symbolSize: s,
                    itemStyle: {normal: {color: "blue", lineStyle: {color: "blue"}}},
                    data: b,
                    tooltip: {
                        formatter: function (p) {
                            return "加载向上<br> " + p.data[2] + o + "&nbsp;&nbsp;" + Math.abs(p.data[1]) + i
                        }
                    }
                });
                n.push({
                    name: "加载向下",
                    type: "line",
                    symbol: "triangle",
                    smooth: false,
                    symbolSize: s,
                    itemStyle: {normal: {color: "red", lineStyle: {color: "red"}}},
                    data: j,
                    tooltip: {
                        formatter: function (p) {
                            return "加载向下<br> " + p.data[2] + o + "&nbsp;&nbsp;" + p.data[1] + i
                        }
                    }
                })
            } else {
                if (m.testType == 11) {
                    var q = {};
                    g.forEach(function (w, p) {
                        var x = w.loading;
                        q[x] = w
                    });
                    var r = 0;
                    var f = 0;
                    var j = [[0, 0]];
                    for (var l in q) {
                        var u = q[l].totald - f;
                        var t = q[l].loading - r;
                        if (q[l].loading != r) {
                            r = q[l].loading;
                            f = q[l].totald
                        }
                        j.push([q[l].loading, Math.round((u / t) * 1000) / 1000])
                    }
                    n.push({
                        name: "加载向下",
                        type: "line",
                        smooth: false,
                        symbol: "circle",
                        symbolSize: s,
                        itemStyle: {normal: {color: "blue", lineStyle: {color: "blue"}}},
                        data: j,
                        tooltip: {
                            formatter: function (p) {
                                return "H: " + parseFloat(p.data[0]) + o + "&nbsp;&nbsp;Y0:" + p.data[1] + i
                            }
                        }
                    })
                } else {
                    if (m.testType == 12) {
                        var q = {};
                        g.forEach(function (w, p) {
                            var x = w.loading;
                            if (w.loadDirect == 1) {
                                q[x] = w
                            }
                        });
                        var r = 0;
                        var f = 0;
                        var j = [[0, 0]];
                        for (var l in q) {
                            var u = q[l].totald - f;
                            var t = q[l].loading - r;
                            if (q[l].loading != r) {
                                r = q[l].loading;
                                f = q[l].totald
                            }
                            j.push([q[l].loading, Math.round((u / t) * 1000) / 1000])
                        }
                        n.push({
                            name: "加载向下",
                            type: "line",
                            smooth: false,
                            symbol: "circle",
                            symbolSize: s,
                            itemStyle: {normal: {color: "blue", lineStyle: {color: "blue"}}},
                            data: j,
                            tooltip: {
                                formatter: function (p) {
                                    return "H: " + parseFloat(p.data[0]) + o + "&nbsp;&nbsp;Y0:" + p.data[1] + i
                                }
                            }
                        })
                    } else {
                        n.push({
                            name: "加载",
                            type: "line",
                            symbol: "circle",
                            smooth: false,
                            symbolSize: s,
                            itemStyle: {normal: {color: "blue", lineStyle: {color: "blue"}}},
                            data: j,
                            tooltip: {
                                formatter: function (p) {
                                    return "加载<br> " + parseFloat(p.data[2]).toFixed(1) + o + "&nbsp;&nbsp;" + p.data[1].toFixed(2) + i
                                }
                            }
                        })
                    }
                }
            }
        }
    }
    var h = echarts.init(k);
    h.setOption({
        tooltip: {trigger: "item"},
        title: {text: v, left: "center"},
        animation: false,
        xAxis: {name: a, type: "value", axisLabel: {show: e}, nameLocation: "center", nameGap: 25},
        yAxis: {
            name: c, axisLabel: {
                formatter: function (w, p) {
                    return Math.abs(w)
                }
            }, inverse: d, type: "value", nameLocation: "center", nameGap: 25
        },
        series: n
    }, true)
}

function slgtCurve(g, j, a) {
    if (j.length == 0) {
        a.innerHTML = "<font color='red'>数据不足，无法显示曲线</font>"
    }
    var q = {};
    var f = {};
    j.forEach(function (u, p) {
        if (u.loadDirect == 1) {
            var x = u.loading + "";
            if (u.timeCount > 0) {
                if (g.testType == 1) {
                    var s = [getBaseLog(10, u.timeCount), u.totald, u.timeCount, u.loading];
                    if (q.hasOwnProperty(x)) {
                        var r = q[x];
                        r.push(s);
                        q[x] = r
                    } else {
                        q[x] = [s]
                    }
                } else {
                    if (g.testType == 2 || g.testType == 3) {
                        var s = [getBaseLog(10, u.timeCount), u.totalu, u.timeCount, u.loading];
                        if (f.hasOwnProperty(x)) {
                            var r = f[x];
                            r.push(s);
                            f[x] = r
                        } else {
                            f[x] = [s]
                        }
                    } else {
                        if (g.testType == 4) {
                            var w = [getBaseLog(10, u.timeCount), (-1) * u.totalu, u.timeCount, u.loading];
                            if (f.hasOwnProperty(x)) {
                                var r = f[x];
                                r.push(w);
                                f[x] = r
                            } else {
                                f[x] = [w]
                            }
                            var t = [getBaseLog(10, u.timeCount), u.totald, u.timeCount, u.loading];
                            if (q.hasOwnProperty(x)) {
                                var r = q[x];
                                r.push(t);
                                q[x] = r
                            } else {
                                q[x] = [t]
                            }
                        } else {
                            if (g.testType == 11) {
                            } else {
                                if (g.testType == 12) {
                                    var t = [u.timeCount, u.totald, u.loading];
                                    if (q.hasOwnProperty(x)) {
                                        var r = q[x];
                                        r.push(t);
                                        q[x] = r
                                    } else {
                                        q[x] = [t]
                                    }
                                } else {
                                    var s = [getBaseLog(10, u.timeCount), u.totald, u.timeCount, u.loading];
                                    if (q.hasOwnProperty(x)) {
                                        var r = q[x];
                                        r.push(s);
                                        q[x] = r
                                    } else {
                                        q[x] = [s]
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    });
    var c = 5;
    var n;
    var d;
    var i;
    var k;
    var h;
    var e;
    var m = false;
    if (g.testType == 1 || g.testType == 4) {
        n = "s-lgt曲线";
        d = "lgt (min)";
        i = "s (mm)";
        k = "kN";
        h = "mm";
        e = true
    } else {
        if (g.testType == 2 || g.testType == 3) {
            n = "δ-lgt曲线";
            d = "lgU (min)";
            i = "δ (mm)";
            k = "kN";
            h = "mm";
            e = false
        } else {
            if (g.testType == 12) {
                n = "H-lgt曲线";
                d = "lgt (min)";
                i = "H (mm)";
                k = "kPa";
                h = "mm";
                e = true;
                m = true
            } else {
                n = "s-lgt曲线";
                d = "lgt (min)";
                i = "s (mm)";
                k = "kPa";
                h = "mm";
                e = true
            }
        }
    }
    var l = [];
    if (g.testType == 1) {
        for (var b in q) {
            l.push({
                name: b,
                type: "line",
                symbol: "circle",
                smooth: false,
                symbolSize: c,
                itemStyle: {normal: {color: "blue", lineStyle: {color: "blue"}}},
                data: q[b],
                tooltip: {
                    formatter: function (p) {
                        return p.data[3] + k + "<br> " + p.data[2] + " min&nbsp;&nbsp;" + p.data[1] + h
                    }
                }
            })
        }
    } else {
        if (g.testType == 2 || g.testType == 3) {
            for (var b in f) {
                l.push({
                    name: b,
                    type: "line",
                    symbol: "circle",
                    smooth: false,
                    symbolSize: c,
                    itemStyle: {normal: {color: "blue", lineStyle: {color: "blue"}}},
                    data: f[b],
                    tooltip: {
                        formatter: function (p) {
                            return p.data[3] + k + "<br> " + p.data[2] + " min&nbsp;&nbsp;" + p.data[1] + h
                        }
                    }
                })
            }
        } else {
            if (g.testType == 4) {
                for (var b in q) {
                    l.push({
                        name: b,
                        type: "line",
                        symbol: "triangle",
                        smooth: false,
                        symbolSize: c,
                        itemStyle: {normal: {color: "red", lineStyle: {color: "red"}}},
                        data: q[b],
                        tooltip: {
                            formatter: function (p) {
                                return "向下" + p.data[3] + k + "<br> " + p.data[2] + " min&nbsp;&nbsp;" + p.data[1] + h
                            }
                        }
                    })
                }
                for (var b in f) {
                    l.push({
                        name: b,
                        type: "line",
                        symbol: "circle",
                        smooth: false,
                        symbolSize: c,
                        itemStyle: {normal: {color: "blue", lineStyle: {color: "blue"}}},
                        data: f[b],
                        tooltip: {
                            formatter: function (p) {
                                return "向上" + p.data[3] + k + "<br> " + p.data[2] + " min&nbsp;&nbsp;" + Math.abs(p.data[1]) + h
                            }
                        }
                    })
                }
            } else {
                if (g.testType == 12) {
                    for (var b in q) {
                        l.push({
                            name: "加载向下",
                            type: "line",
                            symbol: "circle",
                            smooth: false,
                            symbolSize: c,
                            itemStyle: {normal: {color: "blue", lineStyle: {color: "blue"}}},
                            data: q[b],
                            tooltip: {
                                formatter: function (p) {
                                    return "加载: " + p.data[2] + k + "<br>" + p.data[0] + "min&nbsp;&nbsp;" + p.data[1] + h
                                }
                            }
                        })
                    }
                } else {
                    l.push({
                        name: "加载",
                        type: "line",
                        symbol: "circle",
                        smooth: false,
                        symbolSize: c,
                        itemStyle: {normal: {color: "blue", lineStyle: {color: "blue"}}},
                        data: q,
                        tooltip: {
                            formatter: function (p) {
                                return "加载<br> " + parseFloat(p.data[2]).toFixed(1) + k + "&nbsp;&nbsp;" + p.data[1].toFixed(2) + h
                            }
                        }
                    })
                }
            }
        }
    }
    var o = echarts.init(a);
    o.setOption({
        tooltip: {trigger: "item"},
        title: {text: n, left: "center"},
        animation: false,
        xAxis: {name: d, type: "value", axisLabel: {show: m}, nameLocation: "center", nameGap: 25},
        yAxis: {
            name: i, axisLabel: {
                formatter: function (r, p) {
                    return Math.abs(r)
                }
            }, inverse: e, type: "value", nameLocation: "center", nameGap: 25
        },
        series: l
    }, true)
}

function detailsDataShow(j, a) {
    var d = {header: [], data: []};
    var k = detailDataCal(j, a);
    var g = [];
    var e = [];
    var c = [];
    var b = [];
    k.header.forEach(function (i) {
        if (i.children) {
            i.colspan = i.children.length;
            e.push(i);
            i.children.forEach(function (m) {
                c.push(m);
                b.push(m.name)
            })
        } else {
            i.rowspan = 2;
            e.push(i);
            b.push(i.name)
        }
    });
    g.push(e);
    g.push(c);
    d.header = g;
    d.data.data = k.data;
    var l = 0;
    var h = [];
    for (var f = 0; f < k.data.length; f++) {
        if (f === 0) {
            h.push(1);
            l = 0
        } else {
            if (k.data[f].loading === k.data[f - 1].loading) {
                h[l] += 1;
                h.push(0)
            } else {
                h.push(1);
                l = f
            }
        }
    }
    k.data.forEach(function (m, i) {
        var n = [];
        b.forEach(function (o) {
            for (var q in m) {
                if (o == q) {
                    var p = m[q];
                    if (h[i] > 0 && q == "loading") {
                        n.push({"v": p, "rowspan": h[i], "loadDirect": m.loadDirect})
                    } else {
                        if (h[i] == 0 && q == "loading") {
                        } else {
                            n.push({"v": p, "loadDirect": m.loadDirect})
                        }
                    }
                }
            }
        });
        d.data.push(n)
    });
    return d
}

function totalDataShow(i, c) {
    var e = {header: [], data: []};
    var j = detailDataCal(i, c);
    var g = totalDataCal(i, j.data);
    var h = [];
    var f = [];
    var d = [];
    var b = [];
    var a = [];
    if (i.testType == 11) {
        f.push({"lable": "序号", "name": "", "rowspan": 3});
        g.header.forEach(function (k) {
            if (k.children) {
                k.colspan = k.children.length;
                k.children.forEach(function (l) {
                    if (l.children) {
                        l.colspan = l.children.length;
                        d.push(l);
                        l.children.forEach(function (m) {
                            b.push(m);
                            a.push(m.name)
                        });
                        k.colspan = k.children.length + l.children.length
                    } else {
                        l.rowspan = 2;
                        d.push(l);
                        a.push(l.name)
                    }
                });
                f.push(k)
            } else {
                k.rowspan = 3;
                f.push(k);
                a.push(k.name)
            }
        });
        h.push(f);
        h.push(d);
        h.push(b);
        e.header = h
    } else {
        f.push({"lable": "序号", "name": "", "rowspan": 2});
        g.header.forEach(function (k) {
            if (k.children) {
                k.colspan = k.children.length;
                f.push(k);
                k.children.forEach(function (l) {
                    d.push(l);
                    a.push(l.name)
                })
            } else {
                k.rowspan = 2;
                f.push(k);
                a.push(k.name)
            }
        });
        h.push(f);
        h.push(d);
        e.header = h
    }
    g.data.forEach(function (l, k) {
        var m = [];
        a.forEach(function (n) {
            for (var p in l) {
                if (n == p) {
                    var o = l[p];
                    m.push({"v": o, "loadDirect": l.loadDirect})
                }
            }
        });
        e.data.push(m)
    });
    return e
}

function loadDataShow(c, d) {
    var b = detailDataCal(c, d);
    var a = loadOrUnloadDataCal(c, b.data, 1);
    return a
}

function unLoadDataShow(b, c) {
    var a = detailDataCal(b, c);
    var d = loadOrUnloadDataCal(b, a.data, 0);
    return d
}

function getBaseLog(a, b) {
    return parseFloat((Math.log(b) / Math.log(a)).toFixed(2))
}

function toDecimal(c, e, d) {
    if (!isEmpty(c)) {
        if (!/^\d+(\.\d+)?$|^-\d+(\.\d+)?$/.test(c)) {
            return c
        }
        var g = 1;
        for (var b = 0; b < e; b++) {
            g = g * 10
        }
        c = Math.round(c * g) / g;
        var f = c.toString();
        if (d) {
            var a;
            if (f.indexOf(".") == -1) {
                a = e;
                f += "."
            } else {
                a = e - ((f.length - 1) - f.indexOf("."))
            }
            for (var b = 0; b < a; b++) {
                f += "0"
            }
        }
        return f
    }
    return c
}

function isEmpty(a) {
    if ((a == null || typeof (a) == "undefined") || (typeof (a) == "string" && a == "" && a != "undefined")) {
        return true
    } else {
        return false
    }
};