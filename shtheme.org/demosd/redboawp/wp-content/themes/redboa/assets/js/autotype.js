var TxtType = function(a, c, b) {
    this.toRotate = c;
    this.el = a;
    this.loopNum = 0;
    this.period = parseInt(b, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false
};
TxtType.prototype.tick = function() {
    var c = this.loopNum % this.toRotate.length;
    var b = this.toRotate[c];
    if (this.isDeleting) {
        this.txt = b.substring(0, this.txt.length - 1)
    } else {
        this.txt = b.substring(0, this.txt.length + 1)
    }
    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
    var d = this;
    var a = 200 - Math.random() * 100;
    if (this.isDeleting) {
        a /= 2
    }
    if (!this.isDeleting && this.txt === b) {
        a = this.period;
        this.isDeleting = true
    } else {
        if (this.isDeleting && this.txt === "") {
            this.isDeleting = false;
            this.loopNum++;
            a = 500
        }
    }
    setTimeout(function() {
        d.tick()
    }, a)
};
window.onload = function() {
    var b = document.getElementsByClassName("typewrite");
    for (var c = 0; c < b.length; c++) {
        var e = b[c].getAttribute("data-type");
        var d = b[c].getAttribute("data-period");
        if (e) {
            new TxtType(b[c], JSON.parse(e), d)
        }
    }
    var a = document.createElement("style");
    a.type = "text/css";
    a.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(a)
};