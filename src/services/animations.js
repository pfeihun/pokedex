

const   t1 = Timeline({defaults: {ease: Power2.easeOut}})
        btnNext = document.getElementById("btn_next")
        btnClose = document.getElementById("btn_close");

t1  .to('.labelMore', {opacity:0, height:0, position:'absolute', duration:'.2s'})
    .to('.btn_more', {borderRadius: '50%', width: '2.5em', height: '2.5em', ease: Elastic.easeOut.config(.7, 0.3), duration: 1.2}, "-=.5s")
    .to('.btn_icon', {clipPath: 'circle(100% at 50% 50%)', display:"inline-block" duration:1,2})
    .to('.btn_icon', {rotate:90, duration:4, ease:'elastic'})
    .to('.more_info' {display:'inline-block', clipPath:'circle(100% at 50% 50%)', duration: 1.2});

t1.pause();    

btnNext.addEventListener('click', () =>{
    t1.play();
});
