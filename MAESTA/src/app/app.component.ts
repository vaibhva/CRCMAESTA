import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
      RouterOutlet,
      FormsModule,
      CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MAESTA';
  dialig!:any;
  isFormSubmit:boolean = false;
  phonenumberDom!:any;
  nameDom!:any;
  formError!:boolean;

  ngAfterViewInit(){
    const openModal = document.getElementById('openModal') as HTMLElement;
    openModal.click();
    this.nameDom = document.getElementById('name') as HTMLElement
    this.phonenumberDom = document.getElementById('phonenumber') as HTMLElement
  }
  submitEntry(): void{
    if(this.nameDom.value && this.phonenumberDom.value){
      this.formError = false;
      emailjs.init({
        publicKey: "wjDP7u11ItqBjFwaw",
      });
      emailjs.send("service_qncwc6c","template_hul3pkb",{
        from_name: this.nameDom.value,
        from_phonenumber: this.phonenumberDom.value,
        });
      this.isFormSubmit = true;  
    }else{
      this.formError = true;
    }
  }

}
