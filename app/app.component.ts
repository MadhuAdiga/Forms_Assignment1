import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // We will need to import a couple of specific API’s for dealing with reactive forms
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'my-app',
  templateUrl: `./app/app.component.html`,
   styles: [`
            input.ng-invalid {border-left:5px solid red;}
            input.ng-valid {border-left:5px solid green;}
            `]
})


export class AppComponent  { // Create a class AppComponent with app.component.html as templateUrl

 onSubmit(value:any){
        console.log(value);
    }
}

    
    

