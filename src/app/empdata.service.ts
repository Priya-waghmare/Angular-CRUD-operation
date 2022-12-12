import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpdataService {
  updtemp(value: Partial<{ id: string | null; emp_nm: string | null; location: string | null; city: string | null; state: string | null; CTC: string | null; exp: string | null; }>, emp_id: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }


  getemp()
  {
    return this.http.get('http://localhost:3100/empdetails')
  }

  addnwemp(data:any)
  {
    return this.http.post('http://localhost:3100/addempl',data)
  }

  delemp(id:any)
  {
    return this.http.delete(`http://localhost:3100/delemp/${id}`)
  }

  updtempdet(data:any,id:any)
  {
    return this.http.put(`http://localhost:3100/updatempdet/${id}`,data)
  }


}
