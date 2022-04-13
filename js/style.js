window.onload = function() {
    setTimeout(function () {
        scrollTo(0,0);
    }, 100);
}

function introAnimation () {
    let intro = document.querySelector('.intro_bg');
    let introBar = document.querySelectorAll('.intro_bg div');
    let introBarCnt = introBar.length;

    document.addEventListener('DOMContentLoaded', function(){
        intro.onclick = function(){
            for (let i = 0; i < introBarCnt; i ++) {
                if (i % 2 === 0) {
                    introBar[i].style.transform = 'skew(30deg) translateX('+ (20+(10*i)) + 'vw) translateY(-100vh)';
                } else if (i % 2 === 1) {
                    introBar[i].style.transform = 'skew(30deg) translateX('+ (20+(10*i)) + 'vw) translateY(100vh)';
                }
            }
    
            setTimeout(function(){
                intro.style.opacity = 0;
    
                setTimeout(function(){
                    intro.style.display = 'none';
                }, 1000)
                document.querySelector('html').classList.add('on');
                backgroundVideo();
            }, 1500)
        }
    });
}
introAnimation();

function backgroundVideo () {
    let video = document.querySelector('.bg_video video');
    let videoProgress = document.querySelector('.progress_bar span');

    video.play();
    video.style.transform = 'scale(1)'
    videoProgress.classList.add('on')
}

function svgCircleAnimation () {
    // let svgBtn = document.querySelectorAll('.btn_wrap');
    // let svgBtnCnt = svgBtn.length;
    // let svgCircle = document.querySelectorAll('.btn_wrap circle');
    // let svgCircleCnt = svgCircle.length;

    // for (let i = 0; i < svgBtnCnt; i++) {
    //     svgBtn[i].addEventListener('mouseleave', function(){
    //         for (let j = 0; j < svgCircleCnt; j++) {
    //             svgCircle[j].classList.add('on');
    //             setTimeout(function() {
    //                 svgCircle[j].classList.remove('on');
    //             }, 300)
    //         }
    //     });
    // }

    document.querySelectorAll('.btn_wrap').forEach(function (el) {
        let circle = el.querySelector('circle')

        el.addEventListener('mouseleave', function(){
            circle.classList.add('on');
            setTimeout(function() {
                circle.classList.remove('on');
            }, 300)
        })
    })
}
svgCircleAnimation ();


function changeBackground () {
    let list = document.querySelectorAll('.section_05 .container li');
    let listCnt = list.length;
    let backgroundList = document.querySelectorAll('.section_05 .bg_container li');
    
    for (let i = 0; i < listCnt; i++) {
        list[i].addEventListener('mouseenter', function() {
            for (let j = 0; j < listCnt; j++) {
                backgroundList[j].classList.remove('on');
                backgroundList[i].classList.add('on');
            }
        }),
        list[i].addEventListener('mouseleave', function() {
            for (let j = 0; j < listCnt; j++) {
                backgroundList[j].classList.remove('on');
            }
        })
    }
}
changeBackground ();

function headerShowHide () {
    let header = document.querySelector('.header');
    let scrollYBefore = window.scrollY;

    window.addEventListener('scroll', function() {
        let scrollTop = window.scrollY;
        
        if (scrollTop > 50) {
            if (scrollYBefore < scrollTop) {
                header.classList.add('hide')
            } else {
                header.classList.remove('hide')
            }
        } 
        scrollYBefore = scrollTop;
    });
}
headerShowHide ();

function movingImage () {
    let posTop = document.querySelector('.section_04').offsetTop;
    let img = document.querySelectorAll('.img_box div');
    let imgCnt = img.length;
    let windowW = window.innerWidth;
    let windowH = window.innerHeight;

    window.addEventListener('resize', function(){
        let resizePosTop = document.querySelector('.section_04').offsetTop;
        let resizeWindowW = window.innerWidth;
        let resizeWindowH = window.innerHeight;
        
        posTop = resizePosTop;
        windowW = resizeWindowW;
        windowH = resizeWindowH;
    });

    window.addEventListener('scroll', function() {
        let windowScrollY = window.scrollY;

        if (windowW > windowH) { // 창너비가 창높이보다 클때
            if (posTop < windowScrollY+10) {
                for (let i = 0; i < imgCnt; i++) {
                    img[i].style.marginTop = posTop + (i*(posTop/10)) - windowScrollY + 'px';
                    if (posTop + i*(posTop/20) < windowScrollY) {
                        img[i].style.opacity = .4;
                    } else if (posTop + i*(posTop/20) > windowScrollY) {
                        img[i].style.opacity = 0;
                    }
                }
            }
        } else if (windowW < windowH) { // 창너비가 창높이보다 작을때
            if (posTop < windowScrollY+10) {
                for (let i = 0; i < imgCnt; i++) {
                    img[i].style.marginTop = posTop + (i*(posTop/50)) - windowScrollY + 'px';
                    if (posTop + i*(posTop/500) < windowScrollY) {
                        img[i].style.opacity = .4;
                    } else if (posTop + i*(posTop/500) > windowScrollY) {
                        img[i].style.opacity = 0;
                    }
                }
            }
        }
    });
}
movingImage ();

// section_06의 left_box 백그라운드 이미지의 positionY값을 변경하는 함수
function imgPositionY () {
    let pos6Top = document.querySelector('.section_06').offsetTop;
    let imgBox = document.querySelectorAll('.left_box');

    window.addEventListener('resize', function(){
        let resizePosTop = document.querySelector('.section_06').offsetTop;
        let resizeWindowW = window.innerWidth;
        let resizeWindowH = window.innerHeight;
        
        pos6Top = resizePosTop;
        windowW = resizeWindowW;
        windowH = resizeWindowH;
    });

    window.addEventListener('scroll', function() {
        let windowScrollY = window.scrollY;

        if (pos6Top < windowScrollY) {
            if (pos6Top < windowScrollY) {
                imgBox[0].style.backgroundPositionY = -(pos6Top - windowScrollY)/5+'px';
            }
            if (imgBox[0].offsetTop < windowScrollY) {
                imgBox[1].style.backgroundPositionY = (imgBox[0].offsetTop-imgBox[1].offsetTop)/3-(pos6Top - windowScrollY)/5+'px';
            }
            if (imgBox[1].offsetTop < windowScrollY) {
                imgBox[2].style.backgroundPositionY = (imgBox[1].offsetTop-imgBox[2].offsetTop)/3-(pos6Top - windowScrollY)/5+'px';
            }
        }
    })
}
imgPositionY ();

// section_06 내에선 nav color:#000 이어야함.

function journalImageMoveEvent () {
    let journalList = document.querySelectorAll('.journal_box li');
    
    journalList.forEach(el => el.addEventListener('mousemove', function(e){
        const mouseX = e.clientX;
        const mouseY = e.clientY;
    
        this.children[1].style.top = mouseY+300 + 'px';
        this.children[1].style.left = mouseX+100 + 'px';
    }));

    journalList.forEach(el => el.addEventListener('mouseenter', function(){
        this.children[1].classList.add('on');
    }));
    
    journalList.forEach(el => el.addEventListener('mouseleave', function(){
        this.children[1].classList.remove('on');
    }));
}
journalImageMoveEvent ();