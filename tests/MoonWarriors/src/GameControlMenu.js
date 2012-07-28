var GameControlMenu = cc.Layer.extend({

    ctor:function () {
        var parent = new cc.Layer();
        __associateObjWithNative(this, parent);
    },

    init:function () {
        var bRet = false;
        if( this._super() ) {
            cc.MenuItemFont.setFontSize(18);
            cc.MenuItemFont.setFontName("Arial");
            var systemMenu = cc.MenuItemFont.create("Main Menu", this, this.sysMenu);
            var menu = cc.Menu.create(systemMenu, null);
            menu.setPosition(cc.POINT_ZERO);
            systemMenu.setAnchorPoint(cc.p(0, 0));
            systemMenu.setPosition(cc.p(winSize.width-95, 5));
            this.addChild(menu, 1, 2);
            bRet = true;
        }

        return bRet;
    },
    sysMenu:function (pSender) {
        var scene = cc.Scene.create();
        scene.addChild(SysMenu.create());
        cc.Director.getInstance().replaceScene(cc.TransitionFade.create(1.2,scene));
    }
});

GameControlMenu.create = function () {
    var sg = new GameControlMenu();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};
