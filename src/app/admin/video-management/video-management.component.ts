import {Component, OnInit} from '@angular/core';
import {VideoManagement} from "./model";
import {NzModalService} from "ng-zorro-antd/modal";
import {AddVideoComponent} from "./add-video/add-video.component";

@Component({
  selector: 'app-video-management',
  templateUrl: './video-management.component.html',
  styleUrls: ['./video-management.component.css']
})
export class VideoManagementComponent implements OnInit {

  videoList: VideoManagement [] = [
    {
      id: 1,
      link: 'https://www.youtube.com/embed/_YAMZ59y8yM',
      title: 'Eurocar RoofTop'
    },
    {
      id: 2,
      link: 'https://www.youtube.com/embed/_YAMZ59y8yM',
      title: 'Eurocar RoofTop'
    },
    {
      id: 3,
      link: 'https://www.youtube.com/embed/_YAMZ59y8yM',
      title: 'Eurocar RoofTop'
    },
    {
      id: 4,
      link: 'https://www.youtube.com/embed/_YAMZ59y8yM',
      title: 'Eurocar RoofTop'
    }
  ]

  iconList: VideoManagement[] = []

  constructor(private modal: NzModalService) {
  }

  ngOnInit(): void {
  }


  deleteVideo(index:number) {
    this.iconList.push( this.videoList.splice(index, 1)[0] )
    console.log(this.iconList.length)
    console.log(this.videoList.length)
  }

  adVideo() {
    this.modal.create({
      nzTitle: 'Add video',
      nzContent: AddVideoComponent,
      nzFooter: null
    })
  }

}
