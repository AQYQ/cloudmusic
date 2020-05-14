import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  activeRouteName: string ='';//存放获取到的url
  isFind: boolean = false;

  constructor(public router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    //监听路由变化，如果为find，则给那个div添加隐藏的类名
    this.route.url.subscribe(url => {
      this.activeRouteName = url[0].path;
      console.log(this.activeRouteName);
      if(this.activeRouteName == "find"){
        this.isFind = true;
      }
    });
  }





}
