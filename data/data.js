var sidebarMenuArr = [
    {
        domId: $be8f251f3374f6a97b5442e10bb04de6,
        content: "不干胶",
        active: true,
        level: false
    },

    {
        domId: $102d512294550db05429bfb5a63dbc19,
        content: "PVC卡",
        active: false,
        level: false
    },

    {
        domId: "3093892ec95aae4a68e926e3138f2e3b",
        content: "无碳联单",
        active: false,
        level: false
    },

    {
        domId: "649c45dbd8c512093ae532ca8d8b1fcb",
        content: "广告扇",
        active: false,
        level: false
    },

    {
        domId: "",
        content: "年货",
        active: false,
        level: true,
        list: [
            {
                domId: "408f189df696927681d8a9d597c428f1",
                content: "台历",
                active: false
            },

            {
                domId: "9962d3ff22b931ee3d11678e7e03a671",
                content: "挂历",
                active: false
            },

            {
                domId: "4dfa3b47e701c7581cb8dda9c8eadb6f",
                content: "红包",
                active: false
            },

            {
                domId: "62892eceba69335d76041eb867b3bb01",
                content: "对联",
                active: false
            }
        ]
    },

    {
        domId: "89d075ff5118d2eca7a9d15f84ba9715",
        content: "手提袋",
        active: false,
        level: false
    },

    {
        domId: "877c99829b30c21f8a5a4882f36e1113",
        content: "无纺布袋",
        active: false,
        level: false
    },

    {
        domId: "10f462d6f63885dbe43ea77ea5547c9a",
        content: "鼠标垫",
        active: false,
        level: false
    },

    {
        domId: "",
        content: "商务用品",
        active: false,
        level: true,
        list: [
            {
                domId: "93730add16e8365464ca6637e390d8fd",
                content: "纸杯",
                active: false
            },

            {
                domId: "e2113d88d487653da85f66906bdb61b8",
                content: "信封",
                active: false
            },

            {
                domId: "5ae36c1d16396177c0047c9e7937624c",
                content: "档案袋",
                active: false
            },

            {
                domId: "eb2b90baff188b186a7d20c2b009f3ae",
                content: "卡套",
                active: false
            }
        ]
    },

    {
        domId: "758853cd8372228d5a449f4626631b41",
        content: "名片",
        active: false,
        level: false
    },

    {
        domId: "9682ead72fc1f80a44a2c6d975936570",
        content: "胸牌",
        active: false,
        level: false
    },

    {
        domId: "7906eafdbc40c79787eb9af237e30a56",
        content: "彩页",
        active: false,
        level: false
    },

    {
        domId: "d3be481787d66a66923aca918bf67a61",
        content: "画册",
        active: false,
        level: false
    }
];

var sidebarMenuHtml = '';

for (var index = 0; index < sidebarMenuArr.length; index++) {
    var item = sidebarMenuArr[index];

    var className = "";

    if (item.active) {
        className += "active";
    };

    if (item.level) {
        className += " treeview";
    };

    sidebarMenuHtml += '<li id="' + item.domId + '" class="' + className + '">';

    if (item.level) {
        sidebarMenuHtml += '<a href="javascript:void(0);">' +
            // '<i class="fa"></i>' +
            '<span>' + item.content + '</span>' +

            '<span class="pull-right-container">' +
                '<i class="fa fa-angle-left pull-right"></i>' +
            '</span>' +
        '</a>';
    } else {
        sidebarMenuHtml += '<a href="javascript:void(0);">' +
            // '<i class="fa"></i>' +
            '<span>' + item.content + '</span>' +
        '</a>';
    };

    if (item.list) {
        sidebarMenuHtml += '<ul class="treeview-menu">';

        for (var i = 0; i < item.list.length; i++) {
            sidebarMenuHtml += '<li id="' + item.list[i].domId + '"><a href="javascript:void(0);">' + item.list[i].content + '</a></li>';
        };

        sidebarMenuHtml += '</ul>';
    };
                            
    sidebarMenuHtml += '</li>';
};

$("#sidebar-menu-ul").html(sidebarMenuHtml);

$("#sidebar-menu-ul > li").unbind().click(function () {
    $("#sidebar-menu-ul > li").removeClass("active");
    $(this).addClass("active");

    $(".treeview-menu > li").removeClass("active");
});

$(".treeview-menu > li").unbind().click(function (e) {
    e.stopPropagation();

    $(".treeview-menu > li").removeClass("active");
    $(this).addClass("active");

    // $("body").removeClass("sidebar-open");
});

$("#sidebar-menu-ul li").click(function () {
    var domId = $(this)[0].id;

    // if (domId == $102d512294550db05429bfb5a63dbc19) {
    //     $("#main-content").html("PVC卡");
    // } else
    if (domId == '') {
        $($(this).find("li")[0]).trigger("click");
    } else {
        var contHtml = '<div class="row">' +
            '<div class="col-md-6">' +
                '<div class="box box-widget">' +
                    '<div class="box-header with-border" style="border-bottom: 0;">' +
                        '<div class="box-tools" style="top: -4px;">' +
                            '<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>' +
                            '</button>' +
                        '</div>' +
                    '</div>' +
                    '<div class="box-body">' +
                        '<img class="img-responsive pad" src="' + domId + '" alt="" data-action="zoom">' +
                   '</div>' +
                '</div>' +
            '</div>' +
        '</div>';

        $("#main-content").html(contHtml);
    };
});

$($("#sidebar-menu-ul").children("li")[0]).trigger("click");