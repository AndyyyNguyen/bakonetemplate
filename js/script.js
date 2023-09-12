//jqclick
$('.portfolio button').click(function (e) { 
    //remove class active
    $('button.active').removeClass();
    //active button được click
    $(this).addClass('active');

    const dataValue = $(this).attr('data');
    const allDivs = $('.portfolio .row > div');
    //click button all
    if (dataValue === 'all') {
        allDivs.show();//hiển thị hết 8 divs
        return;
    }
    // chọn Div tương ứng với button được click
    const showDivs = $(`.portfolio .row > div[data=${dataValue}]`);
    showDivs.show();//display:block;
    //Ấn các div còn lại
    const hiddenDivs = allDivs.not(showDivs);
    hiddenDivs.hide();//display:none;
});

// window là biến có sẵn, chứa thông tin của cửa sổ trình duyệt
//jqScroll
$(window).scroll(function () {
    //ScrollTop() là top của cửa sổ trình duyệt so với Top trang web(document)
    // console.log($(window).scrollTop());

    // là khoảng cách giữa top của portfolio so với top trên cùng của trang web
    // console.log($('#portfolio').offset().top);

    if ($(window).scrollTop() >= $('#portfolio').offset().top-1 )
    {
        // console.log('fixed menu');
        // class fixed-top là class có sẵn của boostrap
        $('.navbar').addClass('fixed-top');
        $('header').addClass('dummy-padding-top');
    }
    else{
        $('.navbar').removeClass('fixed-top');
        // console.log('normal menu');
        $('header').removeClass('dummy-padding-top');
    }

});