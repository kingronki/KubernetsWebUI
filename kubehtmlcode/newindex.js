function listPods() {
    var xhr = new XMLHttpRequest();
    i = "kubectl get pods"
    xhr.open("GET", "http://10.0.2.15/cgi-bin/cgipycode/kubernetes.py?cmd="+i,true);
    xhr.send();
    xhr.onload = function() {
        document.getElementById("out").innerHTML = xhr.responseText;
    }
}
function listDeploy(){
    var xhr = new XMLHttpRequest();
    i = "kubectl get deploy"
    xhr.open("GET", "http://10.0.2.15/cgi-bin/cgipycode/kubernetes.py?cmd="+i,true);
    xhr.send();
    xhr.onload = function() {
        document.getElementById("out").innerHTML = xhr.responseText;
    }
}
function listSvc(){
    var xhr = new XMLHttpRequest();
    i = "kubectl get svc"
    xhr.open("GET", "http://10.0.2.15/cgi-bin/cgipycode/kubernetes.py?cmd="+i,true);
    xhr.send();
    xhr.onload = function() {
        document.getElementById("out").innerHTML = xhr.responseText;
    }
}
function delRes(){
    var xhr = new XMLHttpRequest();
    i = "kubectl delete all --all"
    xhr.open("GET", "http://10.0.2.15/cgi-bin/cgipycode/kubernetes.py?cmd="+i,true);
    xhr.send();
    xhr.onload = function() {
        document.getElementById("out").innerHTML = xhr.responseText;
    }
}
function launchPod() {

    var i = document.getElementById("in1").value;
    var j = document.getElementById("in2").value;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", `http://10.0.2.15/cgi-bin/cgipycode/launchpod.py?podname= ${i}&podimage=${j}`, true);
    xhr.send();

    xhr.onload = function() {
        document.getElementById("out").innerHTML = xhr.responseText;
    }
}
function launchDeploy() {

    var k = document.getElementById("in3").value;
    var l = document.getElementById("in4").value;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", `http://10.0.2.15/cgi-bin/cgipycode/launchdeploy.py?deployname= ${k}&deployimage=${l}`, true);
    xhr.send();

    xhr.onload = function() {
        document.getElementById("out").innerHTML = xhr.responseText;
    }
}

function delPod() {

    var m = document.getElementById("in5").value;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://10.0.2.15/cgi-bin/cgipycode/delpod.py?del_podname=" + m, true);
    xhr.send();

    xhr.onload = function() {
        document.getElementById("out").innerHTML = xhr.response;
    }
}

function delDeploy() {

    var n = document.getElementById("in6").value;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://10.0.2.15/cgi-bin/cgipycode/deldeploy.py?del_deployname=" + n, true);
    xhr.send();

    xhr.onload = function() {
        document.getElementById("out").innerHTML = xhr.response;
    }
}

function scaleDeploy() {

    var o = document.getElementById("in7").value;
    var p = document.getElementById("in8").value;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", `http://10.0.2.15/cgi-bin/cgipycode/scaledeploy.py?deploy_name= ${o}&replicas=${p}`, true);
    xhr.send();

    xhr.onload = function() {
        document.getElementById("out").innerHTML = xhr.responseText;
    }
}

function exposeDeploy() {

    var q = document.getElementById("in9").value

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://10.0.2.15/cgi-bin/cgipycode/exposedeploy.py?expose_deployname=" + q, true);
    xhr.send();

    xhr.onload = function() {
        document.getElementById("out").innerHTML = xhr.responseText;
    }
}
