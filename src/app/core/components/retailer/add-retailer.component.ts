import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addnewuser',
  templateUrl: './add-retailer.component.html',
  styleUrls: ['./add-retailer.component.scss']
})
export class AddRetailerComponent implements OnInit {

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
