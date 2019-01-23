// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

import GridView from "./GridView";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Main extends cc.Component {

    @property(GridView)
    gridView: GridView = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        let ary = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n"];
        this.gridView.setDataArray(ary,"Item","setData");

        this.scheduleOnce(()=>{
            this.onClickChange();
        },5);

    }

    onClickChange(){
        let ary = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
        this.gridView.setDataArray(ary,"Item","setData");
    }

    onClickChangeBack(){
        let ary = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n"];
        this.gridView.setDataArray(ary,"Item","setData");
    }

    // update (dt) {}
}
