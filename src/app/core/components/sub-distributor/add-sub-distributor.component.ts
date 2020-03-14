import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addnewuser',
  templateUrl: './add-sub-distributor.component.html',
  styleUrls: ['./add-sub-distributor.component.scss']
})
export class AddSubDistributorComponent implements OnInit {

    isVisible = false;
    isConfirmLoading = false;
  constructor() { }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  ngOnInit() {
  }

}
