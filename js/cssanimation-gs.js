// Fade In Animation
TweenMax.from(".fadeIn", 1, {alpha:0});
TweenMax.from(".fadeInLeft", 1, {alpha:0, x:"-100%"});
TweenMax.from(".fadeInRight", 1, {alpha:0, x:"100%"});
TweenMax.from(".fadeInTop", 1, {alpha:0, y:"-100%"});
TweenMax.from(".fadeInBottom", 1, {alpha:0, y:"100%"});

// Fade Out Animation
TweenMax.to(".fadeOut", 1, {alpha:0});
TweenMax.to(".fadeOutLeft", 1, {alpha:0, x:"-100%"});
TweenMax.to(".fadeOutRight", 1, {alpha:0, x:"100%"});
TweenMax.to(".fadeOutTop", 1, {alpha:0, y:"-100%"});
TweenMax.to(".fadeOutBottom", 1, {alpha:0, y:"100%"});

// Move From Animation
TweenMax.from(".moveFromLeft", 1, {x:"-100%"});
TweenMax.from(".moveFromRight", 1, {x:"100%"});
TweenMax.from(".moveFromTop", 1, {y:"-100%"});
TweenMax.from(".moveFromBottom", 1, {y:"100%"});

// Move To Animation
TweenMax.to(".moveToLeft", 1, {x:"-100%"});
TweenMax.to(".moveToRight", 1, {x:"100%"});
TweenMax.to(".moveToTop", 1, {y:"-100%"});
TweenMax.to(".moveToBottom", 1, {y:"100%"});

// Door Close From Left
TweenMax.fromTo(".doorCloseFromLeft", 1, {css: {perspective: 400, transformOrigin: "left", rotationY:90}}, {css: {perspective: 400, transformOrigin: "left", rotationY:0}})
TweenMax.fromTo(".doorOpenFromRight", 1, {css: {perspective: 400, transformOrigin: "left", rotationY:0}}, {css: {perspective: 400, transformOrigin: "left", rotationY:90}})

// Heartbeat
tlheartbeat = new TimelineMax({repeat:-1});
tlheartbeat
  .to(".heartbeat", 0.2, {css:{scale:1.3}})
  .to(".heartbeat", 0.16, {css:{scale:1.3}})
  .to(".heartbeat", 0.2, {css:{scale:1}})

// Heartbeat 2
tlheartbeat2 = new TimelineMax({repeat:-1});
tlheartbeat2
  .to(".tlheartbeat2", 0.2, {css:{scale:1.5}})
  .to(".tlheartbeat2", 0.1, {css:{scale:1}})
  .to(".tlheartbeat2", 0.2, {css:{scale:1.5}})
  .to(".tlheartbeat2", 0.2, {css:{scale:1}})
  .to(".tlheartbeat2", 0.2, {css:{scale:1}})

// Hang On Left
hangOnLeft = new TimelineMax();
hangOnLeft
  .to(".hangOnLeft", 0.4, {css:{transformOrigin: "left", rotation:100}})
  .to(".hangOnLeft", 0.2, {css:{transformOrigin: "left", rotation:80}})
  .to(".hangOnLeft", 0.2, {css:{transformOrigin: "left", rotation:95}})
  .to(".hangOnLeft", 0.2, {css:{transformOrigin: "left", rotation:85}})
  .to(".hangOnLeft", 0.1, {css:{transformOrigin: "left", rotation:90}})

// Hang On right
hangOnRight = new TimelineMax();
hangOnRight
  .to(".hangOnRight", 0.4, {css:{transformOrigin: "right", rotation:-100}})
  .to(".hangOnRight", 0.2, {css:{transformOrigin: "right", rotation:-80}})
  .to(".hangOnRight", 0.2, {css:{transformOrigin: "right", rotation:-95}})
  .to(".hangOnRight", 0.2, {css:{transformOrigin: "right", rotation:-85}})
  .to(".hangOnRight", 0.1, {css:{transformOrigin: "right", rotation:-90}})

// Pulse Shake
pulseShake = new TimelineMax({delay:1, repeat:-1, repeatDelay:1});
pulseShake
  .to(".pulseShake", 0.2, {css:{scale:1}})
  .to(".pulseShake", 0.02, {css:{scale:1.4}})
  .to(".pulseShake", 0.02, {css:{scale:1}})
  .to(".pulseShake", 0.02, {css:{scale:1.3}})
  .to(".pulseShake", 0.02, {css:{scale:1}})

// Horizontal Shake
TweenMax.to(".horizontalShake", 0.01, {x:"+=20", yoyo:true, repeat:-1});
TweenMax.to(".horizontalShake", 0.01, {x:"-=20", yoyo:true, repeat:-1});

// Vertical Shake
TweenMax.to(".verticalShake", 0.01, {y:"+=20", yoyo:true, repeat:-1});
TweenMax.to(".verticalShake", 0.01, {y:"-=20", yoyo:true, repeat:-1});

// Mad Max
TweenMax.to(".madMax", 0.01, {y:"+=10", css:{scale:1.3}, yoyo:true, repeat:-1});
TweenMax.to(".madMax", 0.01, {y:"+=5", css:{scale:.5}, yoyo:true, repeat:-1});
TweenMax.to(".madMax", 0.01, {y:"-=15", css:{scale:1.3}, yoyo:true, repeat:-1});

// Mad Max
TweenMax.to(".madMax", 0.01, {y:"+=10", css:{scale:1.3}, yoyo:true, repeat:-1});
TweenMax.to(".madMax", 0.01, {y:"+=5", css:{scale:.5}, yoyo:true, repeat:-1});
TweenMax.to(".madMax", 0.01, {y:"-=15", css:{scale:1.3}, yoyo:true, repeat:-1});

// Cool Horizontal Shake
TweenMax.to(".coolHorizontalShake", .1, {x:"+=20", yoyo:true, repeat:-1});
TweenMax.to(".coolHorizontalShake", .1, {x:"-=20", yoyo:true, repeat:-1});

// Cool Vertical Shake
TweenMax.to(".coolVerticalShake", 0.1, {y:"+=20", yoyo:true, repeat:-1});
TweenMax.to(".coolVerticalShake", 0.1, {y:"-=20", yoyo:true, repeat:-1});

// Quiet Mad
TweenMax.to(".quietMad", 0.1, {y:"+=5", yoyo:true, css:{scale:1.2}, repeat:-1});
TweenMax.to(".quietMad", 0.1, {y:"-=3", css:{scale:.8}, yoyo:true, repeat:-1});
TweenMax.to(".quietMad", 0.1, {y:"-=5", yoyo:true, repeat:-1});

// Vibration
TweenMax.to(".vibration", 0.15, {css:{scale:1.2, skewY:"1deg", skewX:"-1deg"}, ease: Power0.easeNone, repeat:-1});

// Push Release From
pushReleaseFrom = new TimelineMax();
pushReleaseFrom
	.fromTo(".pushReleaseFrom", 0.2, {autoAlpha:0, scale:3}, {autoAlpha:1, scale:0.5})
	.to(".pushReleaseFrom", 0.5, {autoAlpha:1, scale:1, ease: Power1.easeOut})

// Push Release From Left
TweenMax.from(".pushReleaseFromLeft", 0.8, {autoAlpha:0, x:"-100%", ease: Back.easeOut.config(3)});

// Push Release From Right
TweenMax.from(".pushReleaseFromRight", 0.8, {autoAlpha:0, x:"100%", ease: Back.easeOut.config(3)});

// Push Release From Top
TweenMax.from(".pushReleaseFromTop", 0.8, {autoAlpha:0, y:-200, ease: Back.easeOut.config(4)});

// Push Release From Bottom
TweenMax.from(".pushReleaseFromBottom", 0.8, {autoAlpha:0, y:200, ease: Back.easeOut.config(4)});

// Push Release To
pushReleaseTo = new TimelineMax();
pushReleaseTo
	.to(".pushReleaseTo", 0.3, {autoAlpha:1, scale:0.5})
	.to(".pushReleaseTo", 0.5, {autoAlpha:0, scale:5, ease: Power1.easeOut})

// Push Release To Left
TweenMax.to(".pushReleaseToLeft", 0.85, {x:"-100%", ease: Back.easeIn.config(3)});

// Push Release To Right 
TweenMax.to(".pushReleaseToRight", 0.85, {x:"100%", ease: Back.easeIn.config(3)});

// Push Release To Top
TweenMax.to(".pushReleaseToTop", 0.85, {y:-200, ease: Back.easeIn.config(4)});

// Push Release To Bottom
TweenMax.to(".pushReleaseToBottom", 0.85, {y:200, ease: Back.easeIn.config(4)});

// Flip X
flipX = new TimelineMax();
flipX.set(".flipX", {transformPerspective:600, rotationX:0});
flipX
  .to(".flipX", 0.4, {rotationX: 180, ease: Power3.easeOut})
  .to(".flipX", 0.8, {rotationX:0, ease: Power3.easeOut})

// Flip X Zoom-In
flipXzoomIn = new TimelineMax();
flipXzoomIn.set(".flipXzoomIn", {transformPerspective:600, rotationX:0, scale:1});
flipXzoomIn
  .to(".flipXzoomIn", 0.8, {rotationX:-180, scale:1.8, ease: Power3.easeOut})
  .to(".flipXzoomIn", 0.8, {delay:0.01, rotationX:0, scale:0.8, ease: Power3.easeOut})
  .to(".flipXzoomIn", 0.2, {rotationX:0, scale:1, ease: Power3.easeOut})

// Flip X Zoom-Out
flipXzoomOut = new TimelineMax();
flipXzoomOut.set(".flipXzoomOut", {transformPerspective:600, rotationX:0, scale:1})
flipXzoomOut
  .to(".flipXzoomOut", 0.8, {rotationX:-180, scale:0.8, ease: Power3.easeOut})
  .to(".flipXzoomOut", 0.8, {delay:0.01, rotationX:0, scale:1.8, ease: Power3.easeOut})
  .to(".flipXzoomOut", 0.2, {rotationX:0, scale:1, ease: Power3.easeOut})

// Flip Y
// TweenMax.set(flipY, {transformPerspective:600, rotationX:0});
flipY = new TimelineMax();
flipY.set(".flipY", {transformPerspective:600});
flipX
  .to(".flipY", 0.3, {rotationY:-180, ease: Power1.easeOut})
  .to(".flipY", 0.8, {rotationY:-360, ease: Power2.easeOut})

// Flip Y Zoom-In
flipYzoomIn = new TimelineMax();
flipYzoomIn.set(".flipYzoomIn", {transformPerspective:600, rotationY:0, scale:1});
flipYzoomIn
  .to(".flipYzoomIn", 0.4, {rotationY: -180, scale:1.8, ease: Power3.easeOut})
  .to(".flipYzoomIn", 0.8, {rotationY: 0, scale:0.8, ease: Power3.easeOut})
  .to(".flipYzoomIn", 0.1, {rotationY: 0, scale:1, ease: Power3.easeIn})

// Flip Y Zoom-Out
flipYzoomOut = new TimelineMax();
flipYzoomOut.set(".flipYzoomOut", {transformPerspective:600, rotationY:0, scale:1});
flipYzoomOut
  .to(".flipYzoomOut", 0.4, {rotationY: -180, scale: 0.8, ease: Back.easeOut})
  .to(".flipYzoomOut", 0.8, {rotationY: 0, scale: 1.8, ease: Back.easeOut})
  .to(".flipYzoomOut", 0.1, {scale:1, ease: Back.easeIn})

// Skew Left
skewLeft = new TimelineMax();
skewLeft
  .to(".skewLeft", 0.7, {skewX: 30, ease: Power1.easeOut})
  .to(".skewLeft", 0.3, {skewX: 0, ease: Power2.easeOut})

// Skew Right
skewRight = new TimelineMax();
skewRight
  .to(".skewRight", 0.7, {skewX: -30, ease: Power1.easeOut})
  .to(".skewRight", 0.3, {skewX: 0, ease: Power2.easeOut})

// Skew Left In
skewInLeft = new TimelineMax();
skewInLeft
  .fromTo(".skewInLeft", 0.7, {x:"-100%", skewX: -40, ease: Power0.easeOut}, {x:"0%", skewX: -30, ease: Power4.easeOut})
  .to(".skewInLeft", 0.3, {skewX: 0, ease: Power2.easeOut})

// Skew Right In
skewInRight = new TimelineMax();
skewInRight
  .fromTo(".skewInRight", 0.7, {x:"100%", skewX: 40, ease: Power0.easeOut}, {x:"0%", skewX: 30, ease: Power4.easeOut})
  .to(".skewInRight", 0.3, {skewX: 0, ease: Power0.easeOut})

// Skew Left Out
skewOutLeft = new TimelineMax();
skewOutLeft
  .to(".skewOutLeft", 0.7, {x:0, skewX: 40, ease: Power3.easeOut})
  .to(".skewOutLeft", 0.3, {x:"-100%", skewX: 30, ease: Power0.easeOut})

// Skew Right Out
skewOutRight = new TimelineMax();
skewOutRight
  .to(".skewOutRight", 0.7, {x:0, skewX: -40, ease: Power3.easeOut})
  .to(".skewOutRight", 0.3, {x:"100%", skewX: -30, ease: Power0.easeOut})

// Heartbeat
heartbeat = new TimelineMax({repeat:-1});
heartbeat
  .to(".heartBeat", 0.2, {css:{scale:1.2}})
  .to(".heartBeat", 0.16, {css:{scale:1.2}})
  .to(".heartBeat", 0.2, {css:{scale:1}})

// Heartbeat2
heartbeat2 = new TimelineMax({repeat:-1});
heartbeat2
  .to(".heartBeat2", 0.16, {css:{scale:1.3}, ease: Power2.easeInOut})
  .to(".heartBeat2", 0.16, {css:{scale:1}, ease: Power0.easeNone})
  .to(".heartBeat2", 0.16, {css:{scale:1.3}, ease: Power2.easeInOut})
  .to(".heartBeat2", 0.54, {css:{scale:1}, ease: Power3.easeOut})

// Pull Release In
pullReleaseIn = new TimelineMax();
pullReleaseIn
  .to(".pullReleaseIn", 0.18, {scale: 1.5, ease: Sine.easeOut})
  .to(".pullReleaseIn", 0.7, {scale: 1, ease: Power1.easeOut})

// Pull Release In
pullReleaseOut = new TimelineMax();
pullReleaseOut
  .to(".pullReleaseOut", 0.18, {scale: .5, ease: Power1.easeOut})
  .to(".pullReleaseOut", 0.7, {scale: 1, ease: Sine.easeOut})

// Elevate Left
elevateLeft = new TimelineMax();
elevateLeft.set(".elevateLeft", {transformOrigin:"right"})
elevateLeft
  .from(".elevateLeft", 0.18, {y:"100%", rotation:"-20"})
  .to(".elevateLeft", 0.4, {y:0, rotation:20})
  .to(".elevateLeft", 0.25, {rotation:0})

// Elevate Right
elevateRight = new TimelineMax();
elevateRight.set(".elevateRight", {transformOrigin:"left"})
elevateRight
  .from(".elevateRight", 0.18, {y:"100%", rotation:20})
  .to(".elevateRight", 0.4, {y:0, rotation:"-20"})
  .to(".elevateRight", 0.25, {rotation:0})

//Roll From Left
TweenMax.from(".rollFromLeft", 1, {x:"-100%", autoAlpha:0, rotationY:"180", perspective:600, ease: Power2.easeOut})

//Roll From Right
TweenMax.from(".rollFromRight", 1, {x:"100%", autoAlpha:0, rotationY:"-180", perspective:600, ease: Power2.easeOut})

//Roll From Top
TweenMax.from(".rollFromTop", 1, {y:"-100%", autoAlpha:0, rotationX:"180", perspective:600, ease: Power2.easeOut})

//Roll From Bottom
TweenMax.from(".rollFromBottom", 1, {y:"100%", autoAlpha:0, rotationX:"-180", perspective:600, ease: Power2.easeOut})

//Roll To Left
TweenMax.to(".rollToLeft", 1, {x:"-100%", autoAlpha:0, rotationY:"180", perspective:600, ease: Power2.easeOut})

//Roll To Right
TweenMax.to(".rollToRight", 1, {x:"100%", autoAlpha:0, rotationY:"-180", perspective:600, ease: Power2.easeOut})

//Roll To Top
TweenMax.to(".rollToTop", 1, {y:"-100%", autoAlpha:0, rotationX:"180", perspective:600, ease: Power2.easeOut})

//Roll To Bottom
TweenMax.to(".rollToBottom", 1, {y:"100%", autoAlpha:0, rotationX:"-180", perspective:600, ease: Power2.easeOut})

//Rotate
TweenMax.fromTo(".rotate", 1, {rotation:"-360", ease: Power0.easeNone}, {rotation:"0", ease: Power0.easeNone})

//RotateX
TweenMax.to(".rotateX", 1, {rotationX:90, perspective:600, ease: Power1.easeOut})

//RotateX In
TweenMax.fromTo(
  ".rotateXIn", 
  1, 
  { 
    y:-100, 
    z:-5000, 
    scale:0.4, 
    autoAlpha:0, 
    rotationX:-75, 
    perspective:600
  }, 
  {
    y:0, 
    z:0, 
    scale:1, 
    autoAlpha:1, 
    rotationX:0, 
    perspective:600, 
    ease: Power2.easeOut
  }
)

//RotateX Out
TweenMax.to(
  ".rotateXOut", 
  1, 
  { 
    y:-100, 
    z:-5000, 
    scale:0.4, 
    autoAlpha:0, 
    rotationX:-75, 
    perspective:600, 
    ease: Power2.easeOut
  }
)

//RotateY
TweenMax.to(".rotateY", 1, {rotationY:90, perspective:600, ease: Sine.easeOut})

//RotateY In
// TweenMax.from(
//   ".rotateYIn", 
//   1, 
//   { 
//     x:100, 
//     z:-5000, 
//     scale:0.8, 
//     autoAlpha:0, 
//     rotationY:-90, 
//     perspective:600, 
//     ease: Power2.easeOut
//   }
// )

//RotateY Out
// TweenMax.to(
//   ".rotateYOut", 
//   1, 
//   { 
//     y:-100, 
//     z:-5000, 
//     scale:0.4, 
//     autoAlpha:0, 
//     rotationY:-75, 
//     perspective:600, 
//     ease: Power2.easeOut
//   }
// )

//Rotate In Left
TweenMax.fromTo(".rotateInLeft", 1, {x:"-100%", rotation:"0", ease: Power0.easeNone}, {x:"0%", rotation:"360", ease: Power1.easeOut})

//Rotate In Right
TweenMax.fromTo(".rotateInRight", 1, {x:"100%", rotation:"0", ease: Power0.easeNone}, {x:"0%", rotation:"-360", ease: Power1.easeOut})

//Rotate In Top
TweenMax.fromTo(".rotateInTop", 1, {y:"-500%", rotation:"0", ease: Power0.easeNone}, {y:"0%", rotation:"360", ease: Power1.easeOut})

//Rotate In Bottom
TweenMax.fromTo(".rotateInBottom", 1, {y:"500%", rotation:"0", ease: Power0.easeNone}, {y:"0%", rotation:"-360", ease: Power1.easeOut})

//Rotate Out Left
TweenMax.fromTo(".rotateOutLeft", 1, {x:"0%", rotation:"360", ease: Power0.easeNone}, {x:"-100%", rotation:"0", ease: Power1.easeOut})

//Rotate Out Right
TweenMax.fromTo(".rotateOutRight", 1, {x:"0%", rotation:"-360", ease: Power0.easeNone}, {x:"100%", rotation:"0", ease: Power1.easeOut})

//Rotate Out Top
TweenMax.fromTo(".rotateOutTop", 1, {y:"0%", rotation:"360", ease: Power0.easeNone}, {y:"-500%", rotation:"0", ease: Power1.easeOut})

//Rotate Out Bottom
TweenMax.fromTo(".rotateOutBottom", 1, {y:"0%", rotation:"-360", ease: Power0.easeNone}, {y:"500%", rotation:"0", ease: Power1.easeOut})

//Spin To Left
TweenMax.fromTo(".spinToLeft", 1, {transformOrigin:"left bottom", rotation:90, autoAlpha:0}, {transformOrigin:"left bottom", rotation:0, autoAlpha:1, ease: Power1.easeOut})

//Spin To Right
TweenMax.fromTo(".spinToRight", 1, {transformOrigin:"right bottom", rotation:-90, autoAlpha:0}, {transformOrigin:"right bottom", rotation:0, autoAlpha:1, ease: Power1.easeOut})

//Spin To Left
TweenMax.fromTo(".spinToTop", 1, {transformOrigin:"left bottom", rotation:-90, autoAlpha:0}, {transformOrigin:"left bottom", rotation:0, autoAlpha:1, ease: Power1.easeOut})

//Spin To Right
TweenMax.fromTo(".spinToBottom", 1, {transformOrigin:"right bottom", rotation:90, autoAlpha:0}, {transformOrigin:"right bottom", rotation:0, autoAlpha:1, ease: Power1.easeOut})

//Spin From Left
TweenMax.to(".spinFromLeft", 1, {transformOrigin:"left bottom", rotation:90, autoAlpha:0, ease: Power1.easeOut})

//Spin From Right
TweenMax.to(".spinFromRight", 1, {transformOrigin:"right bottom", rotation:-90, autoAlpha:0, ease: Power1.easeOut})

//Spin From Left
TweenMax.to(".spinFromTop", 1, {transformOrigin:"left bottom", rotation:-90, autoAlpha:0, ease: Power1.easeOut})

//Spin From Right
TweenMax.to(".spinFromBottom", 1, {transformOrigin:"right bottom", rotation:90, autoAlpha:0, ease: Power1.easeOut})

//Blur In
TweenMax.to(".blurIn", 1, {
  textShadow:"0 0 10px rgba(167, 81, 203, 0.6), 0 0 30px rgba(167, 81, 203, 0.4), 0 0 50px rgba(167, 81, 203, 0.3), 0 0 180px rgba(167, 81, 203, 0.3)", 
  color:"none"
})

//Blur In Left
TweenMax.fromTo(".blurInLeft", 1, {x:"100%", textShadow:"none", ease:Power0.easeNone}, {
  x:"0%",
  textShadow:"0 0 10px rgba(167, 81, 203, 0.6), 0 0 30px rgba(167, 81, 203, 0.4), 0 0 50px rgba(167, 81, 203, 0.3), 0 0 180px rgba(167, 81, 203, 0.3)", 
  color:"none",  ease: Power2.easeOut
})

//Blur In Right
TweenMax.fromTo(".blurInRight", 1, {x:"-100%", textShadow:"none", ease:Power0.easeNone}, {
  x:"0%",
  textShadow:"0 0 10px rgba(167, 81, 203, 0.6), 0 0 30px rgba(167, 81, 203, 0.4), 0 0 50px rgba(167, 81, 203, 0.3), 0 0 180px rgba(167, 81, 203, 0.3)", 
  color:"none",  ease: Power2.easeOut
})

//Blur In Top
TweenMax.fromTo(".blurInTop", 1, {y:"100%", textShadow:"none", ease:Power0.easeNone}, {
  y:"0%",
  textShadow:"0 0 10px rgba(167, 81, 203, 0.6), 0 0 30px rgba(167, 81, 203, 0.4), 0 0 50px rgba(167, 81, 203, 0.3), 0 0 180px rgba(167, 81, 203, 0.3)", 
  color:"none",  ease: Power2.easeOut
})

//Blur In Bottom
TweenMax.fromTo(".blurInBottom", 1, {y:"-100%", textShadow:"none", ease:Power0.easeNone}, {
  y:"0%",
  textShadow:"0 0 10px rgba(167, 81, 203, 0.6), 0 0 30px rgba(167, 81, 203, 0.4), 0 0 50px rgba(167, 81, 203, 0.3), 0 0 180px rgba(167, 81, 203, 0.3)", 
  color:"none",  ease: Power2.easeOut
})

//Blur Out
TweenMax.from(".blurOut", 1, {
  textShadow:"0 0 10px rgba(167, 81, 203, 0.6), 0 0 30px rgba(167, 81, 203, 0.4), 0 0 50px rgba(167, 81, 203, 0.3), 0 0 180px rgba(167, 81, 203, 0.3)", 
  color:"none"
})

//Blur Out Left
TweenMax.fromTo(".blurOutLeft", 1, {
  x:"0%", 
  textShadow:"0 0 10px rgba(167, 81, 203, 0.6), 0 0 30px rgba(167, 81, 203, 0.4), 0 0 50px rgba(167, 81, 203, 0.3), 0 0 180px rgba(167, 81, 203, 0.3)", 
  ease:Power0.easeNone}, {
  x:"100%", 
  textShadow:"none", 
  ease:Power2.easeOut
})

//Blur Out Right
TweenMax.fromTo(".blurOutRight", 1, {
  x:"0%", 
  textShadow:"0 0 10px rgba(167, 81, 203, 0.6), 0 0 30px rgba(167, 81, 203, 0.4), 0 0 50px rgba(167, 81, 203, 0.3), 0 0 180px rgba(167, 81, 203, 0.3)", 
  ease:Power0.easeNone}, {
  x:"-100%", 
  textShadow:"none", 
  ease:Power2.easeOut
})

//Blur Out Top
TweenMax.fromTo(".blurOutTop", 1, {
  y:"0%", 
  textShadow:"0 0 10px rgba(167, 81, 203, 0.6), 0 0 30px rgba(167, 81, 203, 0.4), 0 0 50px rgba(167, 81, 203, 0.3), 0 0 180px rgba(167, 81, 203, 0.3)", 
  ease:Power0.easeNone}, {
  y:"100%", 
  textShadow:"none", 
  ease:Power2.easeOut
})

//Blur Out Bottom
TweenMax.fromTo(".blurOutBottom", 1, {
  y:"0%", 
  textShadow:"0 0 10px rgba(167, 81, 203, 0.6), 0 0 30px rgba(167, 81, 203, 0.4), 0 0 50px rgba(167, 81, 203, 0.3), 0 0 180px rgba(167, 81, 203, 0.3)", 
  ease:Power0.easeNone}, {
  y:"-100%", 
  textShadow:"none", 
  ease:Power2.easeOut
})

//Bounce From Top
TweenMax.from(".bounceFromTop", 1.2, {y:"-100%", ease: Bounce.easeOut})

//Bounce From Down
TweenMax.from(".bounceFromDown", 1.2, {y:"100%", ease: Bounce.easeOut})

//Bounce X
TweenMax.from(".bounceX", 0.8, {scaleX:2, ease: Bounce.easeOut})

//Bounce Y
TweenMax.from(".bounceY", 0.8, {scaleY:2, ease: Bounce.easeOut})

//Bounce Zoom In
TweenMax.from(".bounceZoomIn", 1, {scale:1.6, ease: Bounce.easeOut})

//Bounce Zoom Out
TweenMax.from(".bounceZoomOut", 1, {scale:0.3, ease: Bounce.easeOut})

//Bounce In Top
TweenMax.fromTo(
  ".bounceInTop", 
  2, 
  {
    y:-500, 
    bezier:[
    {x:0, y:0.9}, 
    {x:0, y:0.03}, 
    {x:0, y:0.69}, 
    {x:0, y:0.22}], 
    ease: Sine.easeIn
  }, 
  {
    y:0, 
    ease: Bounce.easeOut
  }
)

//Bounce In Bottom
TweenMax.fromTo(
  ".bounceInBottom", 
  2, 
  {
    y:500, 
    bezier:[
    {x:0, y:0.9}, 
    {x:0, y:0.03}, 
    {x:0, y:0.69}, 
    {x:0, y:0.22}], 
    ease: Sine.easeIn
  }, 
  {
    y:0, 
    ease: Bounce.easeOut
  }
)

//Bounce In Left
TweenMax.fromTo(
  ".bounceInLeft", 
  2, 
  {
    x:"-100%", 
    bezier:[
    {x:0.9, y:0}, 
    {x:0.03, y:0}, 
    {x:0.69, y:0}, 
    {x:0.22, y:0}], 
    ease: Sine.easeIn
  }, 
  {
    x:"0%", 
    ease: Bounce.easeOut
  }
)

//Bounce In Right
TweenMax.fromTo(
  ".bounceInRight", 
  2, 
  {
    x:"100%", 
    bezier:[
    {x:0.9, y:0}, 
    {x:0.03, y:0}, 
    {x:0.69, y:0}, 
    {x:0.22, y:0}], 
    ease: Sine.easeIn
  }, 
  {
    x:"0%", 
    ease: Bounce.easeOut
  }
)

//Bounce Out Top 
TweenMax.to(
  ".bounceOutTop", 
  2, 
  {
    y:-500, 
    bezier:[
    {x:0, y:0.9}, 
    {x:0, y:0.03}, 
    {x:0, y:0.69}, 
    {x:0, y:0.22}], 
    ease: Bounce.easeIn
  }
)

//Bounce Out Bottom 
TweenMax.to(
  ".bounceOutBottom", 
  2, 
  {
    y:500, 
    bezier:[
    {x:0, y:0.9}, 
    {x:0, y:0.03}, 
    {x:0, y:0.69}, 
    {x:0, y:0.22}], 
    ease: Bounce.easeIn
  }
)

//Bounce Out Left
TweenMax.to(
  ".bounceOutLeft", 
  2, 
  {
    x:"-100%", 
    bezier:[
    {x:0.9, y:0}, 
    {x:0.03, y:0}, 
    {x:0.69, y:0}, 
    {x:0.22, y:0}], 
    ease: Bounce.easeIn
  }
)

//Bounce Out Right
TweenMax.to(
  ".bounceOutRight", 
  2, 
  {
    x:"100%", 
    bezier:[
    {x:0.9, y:0}, 
    {x:0.03, y:0}, 
    {x:0.69, y:0}, 
    {x:0.22, y:0}], 
    ease: Bounce.easeIn
  }
)

// Perspective To Top
TweenMax.set(".perspectiveToTop", {transformPerspective:500, transformStyle:"preserve-3d"})
TweenMax.to(".perspectiveToTop", 1.8, {autoAlpha:0, y:-80, z:-50, rotationX:90, ease: Sine.easeIn})

// Perspective To Bottom
TweenMax.set(".perspectiveToBottom", {transformPerspective:500, transformStyle:"preserve-3d"})
TweenMax.to(".perspectiveToBottom", 1.8, {autoAlpha:0, y:80, z:50, rotationX:90, ease: Sine.easeIn})

// Zoom In
TweenMax.from(".zoomIn", 1, {autoAlpha:0, scale:10, ease: Power2.easeOut})

// Zoom In Left
TweenMax.from(".zoomInLeft", 1.5, {autoAlpha:0, scale:8, x:"-500%", ease: Power2.easeOut})

// Zoom In Right
TweenMax.from(".zoomInRight", 1.5, {autoAlpha:0, scale:10, x:"500%", ease: Power2.easeOut})

// Zoom In Top
TweenMax.from(".zoomInTop", 1.5, {autoAlpha:0, scale:10, y:"-500%", ease: Power2.easeOut})

// Zoom In Bottom
TweenMax.from(".zoomInBottom", 1.5, {autoAlpha:0, scale:10, y:"500%", ease: Power2.easeOut})

// Zoom Out
TweenMax.to(".zoomOut", 1.5, {autoAlpha:0, scale:10, ease: Power2.easeOut})

// Zoom Out Left
TweenMax.to(".zoomOutLeft", 1.5, {autoAlpha:0, scale:8, x:"-400%", ease: Power2.easeOut})

// Zoom Out Right
TweenMax.to(".zoomOutRight", 1.5, {autoAlpha:0, scale:8, x:"400%", ease: Power2.easeOut})

// Zoom Out Top
TweenMax.to(".zoomOutTop", 1.5, {autoAlpha:0, scale:10, y:"-500%", ease: Power2.easeOut})

// Zoom Out Bottom
TweenMax.to(".zoomOutBottom", 1.5, {autoAlpha:0, scale:10, y:"500%", ease: Power2.easeOut})

// Dance Top
//TweenMax.from(".danceTop", 1, {css: {perspective: 400, transformOrigin: "top", skewX:90}, ease: Elastic.easeOut.config(1, 0.2)})

// Dance Middle
TweenMax.from(".danceMiddle", 2, {skewX:30, ease: Elastic.easeOut.config(1, 0.2)})

//

    cssAnimation = new SplitText(".leFadeIn", {type:"chars"}), 
    chars = cssAnimation.chars; //an array of all the divs that wrap each character

//var leFadeIn = $(".leFadeIn");
//leFadeIn.html("<span>" + $leFadeIn.html().split("").join("</span><span>").split("<span> </span>").join("<span>&nbsp;</span>") + "</span>");

TweenMax.staggerFrom(leFadeIn, 0.5, {x:"-20px", opacity:0, ease:Power3.easeInOut})

