export default {
  linear: function(t: number) {
    return t;
  },
  inQuad: function(t: number) {
    return t * t;
  },
  outQuad: function(t: number) {
    return t * (2 - t);
  },
  inOutQuad: function(t: number) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
  inCubic: function(t: number) {
    return t * t * t;
  },
  outCubic: function(t: number) {
    return --t * t * t + 1;
  },
  inOutCubic: function(t: number) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },
  inQuart: function(t: number) {
    return t * t * t * t;
  },
  outQuart: function(t: number) {
    return 1 - --t * t * t * t;
  },
  inOutQuart: function(t: number) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  },
  inQuint: function(t: number) {
    return t * t * t * t * t;
  },
  outQuint: function(t: number) {
    return 1 + --t * t * t * t * t;
  },
  inOutQuint: function(t: number) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  },
  inSine: function(t: number) {
    return -1 * Math.cos((t / 1) * (Math.PI * 0.5)) + 1;
  },
  outSine: function(t: number) {
    return Math.sin((t / 1) * (Math.PI * 0.5));
  },
  inOutSine: function(t: number) {
    return (-1 / 2) * (Math.cos(Math.PI * t) - 1);
  },
  inExpo: function(t: number) {
    return t == 0 ? 0 : Math.pow(2, 10 * (t - 1));
  },
  outExpo: function(t: number) {
    return t == 1 ? 1 : -Math.pow(2, -10 * t) + 1;
  },
  inOutExpo: function(t: number) {
    if (t == 0) return 0;
    if (t == 1) return 1;
    if ((t /= 1 / 2) < 1) return (1 / 2) * Math.pow(2, 10 * (t - 1));
    return (1 / 2) * (-Math.pow(2, -10 * --t) + 2);
  },
  inCirc: function(t: number) {
    return -1 * (Math.sqrt(1 - t * t) - 1);
  },
  outCirc: function(t: number) {
    return Math.sqrt(1 - (t = t - 1) * t);
  },
  inOutCirc: function(t: number) {
    if ((t /= 1 / 2) < 1) return (-1 / 2) * (Math.sqrt(1 - t * t) - 1);
    return (1 / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1);
  },
  inElastic: function(t: number) {
    var s = 1.70158;
    let p = 0;
    let a = 1;
    if (t == 0) return 0;
    if (t == 1) return 1;
    if (!p) p = 0.3;
    if (a < 1) {
      a = 1;
      var s = p / 4;
    } else var s = (p / (2 * Math.PI)) * Math.asin(1 / a);
    return -(
      a *
      Math.pow(2, 10 * (t -= 1)) *
      Math.sin(((t - s) * (2 * Math.PI)) / p)
    );
  },
  outElastic: function(t: number) {
    var s = 1.70158;
    let p = 0;
    let a = 1;
    if (t == 0) return 0;
    if (t == 1) return 1;
    if (!p) p = 0.3;
    if (a < 1) {
      a = 1;
      var s = p / 4;
    } else var s = (p / (2 * Math.PI)) * Math.asin(1 / a);
    return (
      a * Math.pow(2, -10 * t) * Math.sin(((t - s) * (2 * Math.PI)) / p) + 1
    );
  },
  inOutElastic: function(t: number) {
    var s = 1.70158;
    let p = 0;
    let a = 1;
    if (t == 0) return 0;
    if ((t /= 1 / 2) == 2) return 1;
    if (!p) p = 0.3 * 1.5;
    if (a < 1) {
      a = 1;
      var s = p / 4;
    } else var s = (p / (2 * Math.PI)) * Math.asin(1 / a);
    if (t < 1)
      return (
        -0.5 *
        (a *
          Math.pow(2, 10 * (t -= 1)) *
          Math.sin(((t - s) * (2 * Math.PI)) / p))
      );
    return (
      a *
        Math.pow(2, -10 * (t -= 1)) *
        Math.sin(((t - s) * (2 * Math.PI)) / p) *
        0.5 +
      1
    );
  },
  inBounce: function(t: number) {
    return 1 - this.outBounce(1 - t);
  },
  outBounce: function(t: number) {
    if ((t /= 1) < 1 / 2.75) {
      return 7.5625 * t * t;
    } else if (t < 2 / 2.75) {
      return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
    } else if (t < 2.5 / 2.75) {
      return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
    } else {
      return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
    }
  },
  inOutBounce: function(t: number) {
    if (t < 1 / 2) return this.inBounce(t * 2) * 0.5;
    return this.outBounce(t * 2 - 1) * 0.5 + 0.5;
  }
};
