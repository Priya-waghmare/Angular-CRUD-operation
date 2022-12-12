import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpdataService } from '../empdata.service';

@Component({
  selector: 'app-empdata',
  templateUrl: './empdata.component.html',
  styleUrls: ['./empdata.component.css']
})
export class EmpdataComponent implements OnInit {

  constructor(private empser:EmpdataService , private route:Router) { }

  ngOnInit(): void {
    this.getdata()
  }


  emplist:any
  getdata()
  {
    this.empser.getemp().subscribe(
      (data)=>{this.emplist=data}
    )
  }

  delempid(id:any)
  {
    return this.empser.delemp(id).subscribe((data)=>{console.log(data);
      alert("Data Deleted");})
  }

  onupdt(id:any)
  {
     this.route.navigate(['/updatempdet',id])
  }

} 
