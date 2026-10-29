// 頁面初始化，載入其他partial page
// 參數傳入menu區域的partial page，未傳入則預設為首頁第一層menu
// initPage()要在document.ready之前做完load pages
function initPage(menu_partial_page) {
    menu_partial_page = (menu_partial_page == null || menu_partial_page == "") ? "_menu1.html" : menu_partial_page;
    var header_partial_page = "_header.html";
    var footer_partial_page = "_footer.html";

    $("#header").load(header_partial_page);
    //$("#header").load(header_partial_page, function () {console.log("header loaded."); });
    $("#menu").load(menu_partial_page, function () { setMenuItem(); });
    $("#footer").load(footer_partial_page);
    //$("#footer").load(footer_partial_page, function () { console.log("footer loaded."); });
    
    // 全部頁面加上隱藏左方menu功能
    setMenuHide();

    // 限制input type=number只能輸入數字
    numberOnly();
}

// 在menu中設定目前頁面被選取的樣式
function setMenuItem() {
    var current_page = location.pathname.split("/")[(location.pathname.split("/").length) - 1];
    var page_parent_name = current_page.split("_")[1].replace(".html", "");
    $('#menu ul li a').each(function (i, element) {
        $(element).removeClass('active');
        if ($(element).data("pageitem") === page_parent_name) {
            $(element).addClass('active');
            return false;
        }
    });
}

// 隱藏左方menu按鈕
function setMenuHide(id) {
    var id = (id == null || id == "") ? "btn-hidemenu" : id;
    // 第二層之後的menu才需要toggle 
    $("#" + id).click(function (e) {
        e.preventDefault();
        $("#menu").toggle(250);
        $(this).find($(".fa")).toggleClass('fa-angle-left fa-angle-right');
    });
}

// 在main中設定選取tab標籤動作與樣式
function setTab(tabClassName) {
    if (tabClassName == null || tabClassName == "") return;

    $btn = $('.' + tabClassName + '-btn');
    $content = $('.' + tabClassName + '-content');

    $btn.click(function () {
        // 部分頁籤僅有超連結，於此避免事件繫結
        if (!$(this).hasClass('tablink')) {
            // 先停用所有tab-btn, img
            $btn.each(function () {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                }
            });

            // 先隱藏所有tab-content
            $content.each(function () {
                if (!$(this).hasClass('hide'))
                    $(this).addClass('hide');
            });

            // 顯示被點選的tab-content
            var source_id = $(this).attr('id');
            var target_id = source_id.replace('btn-', 'div-');
            $('#' + source_id).addClass('active');
            $('#' + target_id).removeClass('hide');
        }
    });
}

// 顯示對應的Popup Model訊息
// 參數: (obj)呼叫函式物件, (modelId)顯示的Popup Model Id, (url)按下確定之後導向的頁面
function setPopupModel(obj, modelId, type, url)
{
    var $popup = $('#' + modelId);
    var $close = $popup.find($(".popup-close"));
    var $ok = $popup.find($(".popup-ok"));
    $close.click(function () { $popup.hide(); });

    switch(type)
    {
        case "msg-href":
            var $cancel = $popup.find($(".popup-cancel"));
            $cancel.click(function () { $popup.hide(); });
            $ok.click(function () {
                if (url !== "" && url !== "#") {
                    window.location.href = url;
                }
                else {
                    $popup.hide();
                }
            });
            break;
        case "alert":
            // 放入錯誤訊息
            var $alerttext = $('#alert-text');
            $alerttext.text(url);
            //console.log('$alerttext: ' + $alerttext.text());
            $ok.click(function () {
                $alerttext.text("");
                //console.log('$alerttext: ' + $alerttext.text());
                $popup.hide();
            });
            break;
        case "logout-alert":
            $ok.click(function () {
                $popup.hide();
            });
            break;
    }
    
    $popup.show();
}

// tab-layer切換動作處理：
// (1)外部頁面href載入時讀取QueryString顯示設定的Layer內容。
// (2)相同tab之中的tab-layer切換動作。
function changeTabLayer(tabName, fromLayer, toLayer, anchorName) {
    //console.log("tabName: " + tabName + ", fromLayer: " + fromLayer + ", toLayer:" + toLayer + ", anchorName: " + anchorName);
    // 來源預設為layer0(Tab第一層)
    fromLayer = (fromLayer == "undefined" || fromLayer == null || fromLayer == "") ? "0" : fromLayer;

    // 選取該tab
    $('#btn-' + tabName).click();

    if (fromLayer > toLayer) {
        // 返回上層，顯示fromlayer，隱藏其他layer
        $('.tab-layer').addClass("hide");
        $('[id*="layer-' + fromLayer + '"]').removeClass("hide");
    }

    // 顯示指定layer
    $('#' + tabName + '-layer-' + fromLayer).addClass("hide");
    $('#' + tabName + '-layer-' + toLayer).removeClass("hide");

    // 滑動至anchor位置
    if (anchorName != "undefined" && anchorName != null && anchorName != "") {
        $.scrollToAnchor($("a[name='" + anchorName + "']"));
    }
}

// 限制輸入數字
function numberOnly() {
    //return event.charCode >= 48 && event.charCode <= 57;
    // stack overflow: https://stackoverflow.com/questions/469357/html-text-input-allows-only-numeric-input
    $("input[type=number]").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            // Allow: Ctrl/cmd+A
            (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: Ctrl/cmd+C
            (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: Ctrl/cmd+X
            (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }

        // 若有設定data屬性，取其設定之最大長度限制輸入內容
        if ($(this).data('maxlength') !== null && $(this).data('maxlength') !== undefined) {
            $(this).val($(this).val().substring(0, ($(this).data('maxlength') - 1)));
        }
    });
}

// 表單步驟動畫顯示
function showProgress(progressSteps) {
    // 目前步驟才顯示進度動畫
    for (var i = 0; i < progressSteps.length; i++) {
        if (progressSteps[i].stepStatus == "active") $('#' + progressSteps[i].stepId).delay(progressSteps[i].progressDelayTime).animate({ width: '100%' }, 600, "linear");
    }
}

function setComboBox(id) {

    // 顯示div的下拉清單
    $('#' + id + ' .combobox-dropdown').click(function (e) {
        $.each($('.combobox-items'), function (i, val) {
            $(this).hide();
        });
        $('#' + id + ' .combobox-items').show();
    });

    // 此select方式才能在IE取得選取值
    $('#' + id + ' .combobox-items .option').click(function () {
        //var selectedText = $(this).find(':selected').text();
        //var selectedValue = $(this).find(':selected').val();
        var selectedText = $(this).text();
        var selectedValue = $(this).data("value");
        //console.log('select div, value: ' + selectedValue + ', text: ' + selectedText);
        $('#' + id + ' .combobox').val(selectedText);
        $('#' + id + ' .combobox-items').hide();
        //if ($('#' + id + ' .combobox').attr('type') === 'number') {
        //    // 如果input type=number，因為已限制了numberOnly()，所以要繫結數字的內容才會正常顯示
        //    $('#' + id + ' .combobox').val(selectedValue);
        //}
        //else {
        //    $('#' + id + ' .combobox').val(selectedText);
        //}
        //console.log($('.combobox').val());
    });

    // 此select方式在Chrome、FF運作正常，但IE無法
    //$('.combobox-items > option').each(function(e){
    //    $(this).click(function () {
    //        // 取option "value": $(this).val()
    //        // 取option "text": $(this).text()
    //        console.log($(this).val());
    //        console.log($(this).text());
    //    });
    //});

    // input輸入時下拉清單不顯示
    $('#' + id + ' .combobox').on('focus', function () {
        $('.combobox-items').hide();
    });
}

//// OTP倒數計時
//// timeSpanId：顯示倒數文字的容器Id
//// startTime：開始倒數時間，格式為mm:ss
//// how to make countdown by jquery or js: https://stackoverflow.com/questions/19615576/how-maker-countdown-timer-to-jquery-or-js-with-countdown-timehis
//function setCountDown(timeSpanId, startTime) {
//    var $timeSpanId = $('#' + timeSpanId);
//    // 切割時分秒存到陣列中
//    var timeSpan = startTime.split(':');
//    // 換算時分秒的單位為毫秒，並全部加總
//    // 時：timeSpan[0]*60*60*1000
//    // 分：timeSpan[1]*60*1000
//    // 秒：timeSpan[2]*1000
//    var timeCount = timeSpan[0] * 60 * 1000;
//    timeCount += timeSpan[1] * 1000;

//    // 設定計時器
//    if (timeCount > 0) {
//        var timer = setInterval(function () {
//            // 每次倒數一秒
//            timeCount -= 1000;
//            if (timeCount <= 0) {
//                $timeSpanId.html("00分00秒");
//                clearInterval(timer);
//                return true;
//            }
//            else {
//                // 將剩餘時間轉換為時分秒顯示，並補上前置零
//                var d = new Date(timeCount);
//                //hh = padZero(d.getUTCHours());
//                //mm = padZero(d.getMinutes());
//                //ss = padZero(d.getSeconds());
//                $timeSpanId.html(padZero(d.getMinutes()) + "分" + padZero(d.getSeconds()) + "秒");
//            }
//        }, 1000);
//    }
//}

// 前置補零
function padZero(num) {
    return num < 10 ? "0" + num : num;
}

// 擴充Jquery method
$.extend({
    // jquery-howto: http://jquery-howto.blogspot.tw/2009/09/get-url-parameters-values-with-jquery.html
    // 取QueryString
    getUrlVars: function () {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    },
    // 依名稱取得QueryString
    getUrlVar: function (name) {
        return $.getUrlVars()[name];
    },
    // 滑動至錨點
    scrollToAnchor: function (anchor) {
        // Check if the jQuery object contains any element before you try to get its offset
        // stack overflow: https://stackoverflow.com/questions/20175094/uncaught-typeerror-cannot-read-property-top-of-undefined
        if (anchor.length) {
            $('html,body').animate({ scrollTop: anchor.offset().top }, 700);
        }
    }
    //// 格式化數字
    //formatNumber: function () {
    //    return this.each(function () {
    //        $(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    //    })
    //}
});

