$(document).ready(function () {
    topBarSize();
    updateImageSource();
});

function handleResize() {
    updateImageSource();
    topBarSize();
}

// window resize
window.addEventListener('resize', handleResize);


//Top bar Img height
function topBarSize() {
    let heightWindows = window.innerHeight;
    document.querySelector('.imgTopBar').style.height = heightWindows + 'px';
}


// menu Icon animation
function openMenu() {
    if ($('.btn-toggle-menu').hasClass('cl') === true) {
        $('.btn-toggle-menu').toggleClass('cl op');
        setTimeout(function () {
            $('.line').addClass('open');
        }, 1);
        $(".secLinkTopBar").addClass("show");
        $('.line').removeClass('close');
    } else {
        $('.btn-toggle-menu').toggleClass('cl op');
        setTimeout(function () {
            $('.line').addClass('close');
        }, 1);
        $(".secLinkTopBar").removeClass("show");
        $('.line').removeClass('open');
    }
}

function updateImageSource() {
    var footercom = document.querySelector('.footercom');
    var imgComplaints = document.querySelector('.imgComplaints');
    var linkImg = document.querySelector('.linkImg img');
    var IpanText = document.querySelector('.IpanText');
    var tapBBB = document.querySelector('.tapBBB');
    var text4 = document.querySelector('.text4');
    var sec4Img = document.querySelector('.sec4Img');
    if (window.innerWidth <= 767) {
        footercom.src = 'img/footercomRes.png';
        imgComplaints.src = 'img/headerComRes.png';
        linkImg.src = 'img/linkImgRes.png';
        IpanText.src = 'img/IpanTextRes.png';
        tapBBB.src = 'img/tapBBBRes.png';
        text4.src = 'img/text4Res.png';
        sec4Img.src = 'img/sec4ImgRes.png';
    } else {
        footercom.src = 'img/footercom.png';
        imgComplaints.src = 'img/headerCom.png';
        linkImg.src = 'img/linkImg.png';
        IpanText.src = 'img/IpanText.png';
        tapBBB.src = 'img/tapBBB.png';
        text4.src = 'img/text4.png';
        sec4Img.src = 'img/sec4Img.png';
    }
}


