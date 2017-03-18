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

// pushReleaseFrom
TweenMax.to(".pushReleaseFrom", 0.35, {css:{scale:3}});
TweenMax.to(".pushReleaseFrom", 0.50, {css:{scale:.5}});



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
flipXzoomOut.set(flipXzoomOut, {transformPerspective:600, rotationX:0, scale:1})
flipXzoomOut
  .to(".flipXzoomOut", 0.8, {rotationX:-180, scale:0.8, ease: Power3.easeOut})
  .to(".flipXzoomOut", 0.8, {delay:0.01, rotationX:0, scale:1.8, ease: Power3.easeOut})
  .to(".flipXzoomOut", 0.2, {rotationX:0, scale:1, ease: Power3.easeOut})

// Flip Y
// TweenMax.set(flipY, {transformPerspective:600, rotationX:0});
flipY = new TimelineMax();
flipY.set(".flipY", {transformPerspective:600});
flipX
  .to(".flipY", 0.8, {rotationY: -360, ease: Back.easeOut})
  .to(".flipY", 0.8, {rotationY:0, ease: Back.easeOut})

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