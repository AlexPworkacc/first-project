import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

export class User{
  constructor(public name: string,
              public phone: number,
              public status: string) 
  {}
}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

    user: User = new User ("", 0, "Admin");
    users = new Array<User>();
    roles: Array<string> = ["Admin", "Player", "Moderator"];

    addUser() {
      this.users.push(new User(this.user.name, this.user.phone, this.user.status));
      this.user.name = "";
      this.user.phone = 0;
      this.user.status = "";

    }

    personForm!: FormGroup;
    // persons: FormGroup[] = [];
    constructor(public formBuilder: FormBuilder){
      
    }
    
    buildForm(){
      this.personForm = this.formBuilder.group({

        "personName": new FormControl("", Validators.required),
        "personEmail": new FormControl("", [
                              Validators.required,
                              Validators.email
        ]),
        "personPhone": new FormControl("", Validators.pattern("[0-9]{10}")) 

      });
    }


    submit() {
      let person = this.personForm.value;
      this.users.push(new User(person.personName, person.personEmail, person.personPhone));
      this.personForm.reset();
    }



}
