import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpdataService } from '../empdata.service';
import { FormGroup,FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-updtempdet',
  templateUrl: './updtempdet.component.html',
  styleUrls: ['./updtempdet.component.css']
})
export class UpdtempdetComponent implements OnInit {

  constructor(private empser:EmpdataService, private acr:ActivatedRoute, private route:Router ) { }

  ngOnInit(): void {
    this.acr.params.subscribe((data)=>{this.emp_id=data['id']})
    
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

    emp_id:any;
    updtemp()
    {
      this.empser.updtempdet(this.empform.value, this.emp_id).subscribe(
        (info)=>{console.log(info)})
        alert("Employee Details Updated Successfully!!");
        this.route.navigate(['/empdata']);
    }

}
