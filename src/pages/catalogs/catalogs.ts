import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CatalogsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-catalogs',
  templateUrl: 'catalogs.html',
})

export class CatalogsPage {
  menulist = [
     { id: 0, name: '宠物生活'},
     { id: 1, name: '农资绿植'},
     { id: 2, name: '礼品鲜花'},
     { id: 3, name: '内衣配饰'},
     { id: 4, name: '全球购'},
     { id: 5, name: '女装'},
     { id: 6, name: '男装'},
     { id: 7, name: '女鞋'},
     { id: 8, name: '男鞋'},
     { id: 9, name: '家用电器'},
     { id: 10, name: '国际名牌'},
     { id: 11, name: '艺术品'},
     { id: 12, name: '玩具乐器'},
     { id: 13, name: '运动户外'},
     { id: 14, name: '汽车用品'},
     { id: 15, name: '京东金融'},
     { id: 16, name: '二手商品'},
     { id: 17, name: '房产'},
     { id: 18, name: '拍卖'},
     { id: 19, name: '特产'},
  ];
  
  selectedMenuId = 0;

  items = [
    '//img12.360buyimg.com/babel/s240x240_jfs/t17884/226/1436672658/351359/f89c11df/5acb0ab5N301bc637.jpg!q90.webp',
    '//img11.360buyimg.com/babel/s240x240_jfs/t7462/4/3638811286/68260/b2fba430/59f97360Na4971951.jpg!q90.webp',
    '//img11.360buyimg.com/babel/s240x240_jfs/t5458/1/291195524/167032/e8e5cc7b/58fcc4c8Ne505de1d.jpg!q90.webp',
    '//img11.360buyimg.com/babel/s240x240_jfs/t7963/29/2521844274/36935/ece0d5f6/59b0c263N98d7bdc6.jpg!q90.webp',
    '//img11.360buyimg.com/babel/s240x240_jfs/t19723/192/784478915/476844/a53e7c19/5aa76d7aN7267ad22.jpg!q90.webp',
    '//img12.360buyimg.com/babel/s240x240_jfs/t17575/31/1088279623/390831/182bfcaf/5abc4eb9N348e1a5a.jpg!q90.webp',
    '//img20.360buyimg.com/babel/s240x240_jfs/t17953/56/1739680714/177828/e09ada28/5ad5b8caN0103c6ad.jpg!q90.webp',
    '//img13.360buyimg.com/babel/s240x240_jfs/t17548/286/1196103664/129714/6a0184ed/5ac1ee19N4af32a01.jpg!q90.webp',
    '//img13.360buyimg.com/babel/s240x240_jfs/t3055/291/6879959926/165463/736ecf2e/58ad6a0dNfba25f90.jpg!q90.webp',
    '//img12.360buyimg.com/babel/s240x240_jfs/t5920/117/6148316657/111637/2e617057/597041acN3d527f03.jpg!q90.webp',
    '//img11.360buyimg.com/babel/s240x240_jfs/t12964/6/1948892662/264459/48074c0d/5a460dd1Nbe547d2f.jpg!q90.webp',
    '//img12.360buyimg.com/babel/s240x240_jfs/t19015/129/1682287815/203952/d24cf81d/5ad40420N30a8fd8a.jpg!q90.webp'
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  menuClick(id){
    this.selectedMenuId = id;
    this.items = this.items.reverse();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CatalogsPage');
  }

}
