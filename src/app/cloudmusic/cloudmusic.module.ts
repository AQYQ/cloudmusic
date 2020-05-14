import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//引入内置模块
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

//引入组件
import { NavComponent } from './nav/nav.component';
import { FindmusicComponent } from './findmusic/findmusic.component';
import { MymusicComponent } from './mymusic/mymusic.component';
import { FriendComponent } from './friend/friend.component';
import { MusicmallComponent } from './musicmall/musicmall.component';
import { MusicianComponent } from './musician/musician.component';
import { DownloadComponent } from './download/download.component';
import { RecommendComponent } from './findmusic/recommend/recommend.component';
import { ToplistComponent } from './findmusic/toplist/toplist.component';
import { SonglistComponent } from './findmusic/songlist/songlist.component';
import { AnchorradioComponent } from './findmusic/anchorradio/anchorradio.component';
import { SingerComponent } from './findmusic/singer/singer.component';
import { NewdiscComponent } from './findmusic/newdisc/newdisc.component';



const route: Route[] = [
  { path: '', redirectTo: 'find', pathMatch: 'full' },
  // { path: 'nav', component: NavComponent },
  {
    path: 'find', component: FindmusicComponent,
    children: [
      { path: '', redirectTo: 'recommend', pathMatch: 'full' },
      { path: 'recommend', component: RecommendComponent },
      { path: 'toplist', component: ToplistComponent },
      { path: 'songlist', component: SonglistComponent },
      { path: 'anchorradio', component: AnchorradioComponent },
      { path: 'singer', component: SingerComponent },
      { path: 'newdisc', component: NewdiscComponent },
    ]
  },
  { path: 'my', component: MymusicComponent },
  { path: 'friend', component: FriendComponent },
  { path: 'mall', component: MusicmallComponent },
  { path: 'musician', component: MusicianComponent },
  { path: 'download', component: DownloadComponent },
]
@NgModule({
  declarations: [NavComponent, FindmusicComponent, MymusicComponent, FriendComponent, MusicmallComponent, MusicianComponent, DownloadComponent, RecommendComponent, ToplistComponent, SonglistComponent, AnchorradioComponent, SingerComponent, NewdiscComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    FormsModule,
    NgZorroAntdModule
  ]
})
export class CloudmusicModule { }
