import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.less']
})
export class CustomFormComponent implements OnInit {
  @Input()
  inputData!: any;
  @Input()
  inputStyles!: any;
  @Input()
  formClass!: string;
  @Input()
  submitText!: string;
  @Input()
  headerText!: string;

  inputFields!: string[];
  labels: {[key: string]: string} = {}

  @Output()
  processDataEvent = new EventEmitter<any>();

  submitData(form: NgForm) {
    this.processDataEvent.emit(this.inputData);
    form.resetForm();
  }

  constructor() {
  }

  ngOnInit(): void {
    this.inputFields = Object.keys(this.inputData);
    for (const inputField of this.inputFields) {
      this.labels[inputField] = inputField.charAt(0).toUpperCase() + inputField.slice(1);
    }
  }
}
