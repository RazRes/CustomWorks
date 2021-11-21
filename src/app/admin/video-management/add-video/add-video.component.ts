import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NzModalRef} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {

  form!: FormGroup

  constructor(private fb: FormBuilder, private modalRef: NzModalRef) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      link: [null, Validators.required],
      title: [null, Validators.required]
    })
  }

  closeModal(){
    this.modalRef.close()
  }

  addVideo(){
    this.modalRef.close()
  }

}
