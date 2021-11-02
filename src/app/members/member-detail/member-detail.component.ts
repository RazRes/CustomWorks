import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NzImageService} from "ng-zorro-antd/image";
import {NzUploadFile} from "ng-zorro-antd/upload";

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {

  fileList: NzUploadFile[] = [
    {
      uid: '-1',
      url: 'assets/cartoon_golf6raz03.JPG',
      status: 'done',
      name: ''
    }
  ]
  previewImage: string | undefined = ''
  previewVisible = false

  getBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });

  constructor(private router: Router, private imageService: NzImageService) {
  }

  ngOnInit(): void {
  }

  handlePreview = async (file: NzUploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await this.getBase64(file.originFileObj!);
    }
    this.previewImage = file.url || file.preview;
    this.previewVisible = true;
  };


  showImages() {
    let images = [
      {
        src: 'assets/cartoon_golf6raz03.JPG',
        alt: ''
      },
      {
        src: 'assets/IMG_9591.jpg',
        alt: ''
      }
    ]
    this.imageService.preview(images)
  }


}
