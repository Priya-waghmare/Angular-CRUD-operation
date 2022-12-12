import { Component, OnInit } from '@angular/core';
import { EmpdataService } from '../empdata.service';
import { FormGroup,FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addnewemp',
  templateUrl: './addnewemp.component.html',
  styleUrls: ['./addnewemp.component.css']
})
export class AddnewempComponent implements OnInit {

  constructor(private crudser:EmpdataService, private route:Router) { }

  ngOnInit(): void {
  } 

  empform= new FormGroup(
    {
      id:new FormControl('',Validators.required),
      emp_nm:new FormControl('',Validators.required),
      location:new FormControl('',Validators.required),
      city:new FormControl('',Validators.required),
      state:new FormControl('',Validators.required),
      CTC:new FormControl('',Validators.required),
      exp:new FormControl('',Validators.required),
    }
    )

    addemp()
    {
      console.log(this.empform.value);
      this.crudser.addnwemp(this.empform.value).subscribe(
        (data)=>{console.log(data)}
      )
      alert("Employee Added Successfully!!");
      // this.route.navigate(['/empdata']);
      this.empform.reset();
    }

}
