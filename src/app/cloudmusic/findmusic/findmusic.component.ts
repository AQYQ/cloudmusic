import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-findmusic',
  templateUrl: './findmusic.component.html',
  styleUrls: ['./findmusic.component.scss']
})
export class FindmusicComponent implements OnInit {
  activeRouteName: string = '';

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public titleService: Title
  ) { }

  ngOnInit() {

    // //监听路由变化，如果为find，则给那个div添加隐藏的类名
    // this.route.url.subscribe(url => {
    //   this.activeRouteName = url[0].path;
    //   console.log(this.activeRouteName);
    //   if(this.activeRouteName == "find"){
        
    //   }
    // });
  }

}
