import { HandWriteAPIPage } from './../../e2e/app.po';
import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { FormsModule } from '@angular/forms';

import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  // variaveis de API
    // variaveis para funcionamento
  


  // API Calls
  constructor(private http: Http){
      this.GetHandWritings();
  }

  handwriting_id: string = '';
  text: string = '';
  handwriting_size: string = '';  
  handwriting_color: string = '';
  finalData:any;
  title = 'Handwriting API APP';
  apiKey: string = '0894436AGCWCAHXG';
  apiSecret: string = 'BKD252QSP91JJQ75';
  handWriteURL: string = 'https://api.handwriting.io/handwritings?limit=20'
  FinalURL: string ='https://api.handwriting.io/render/png?';
  data: any = [{}];
  font_size:any = [
    {
      "name" : "Default",
      "id" : "20px",
    },
    {
      "name": "Large",
      "id" : "30px",
    },

    {
      "name": "Very Large",
      "id" : "50px"

    }
  ]

  font_color:any = [
    {
      "name" : "Red",
      "id" : "C30208",
    },
    {
      "name": "Blue",
      "id" : "0000FF",
    },

    {
      "name": "Black",
      "id" : "000000"

    },

    {
      "name" : "Pink",
      "id" : "F16F85"
    }
  ]

    createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('0894436AGCWCAHXG:BKD252QSP91JJQ75')); 
  }


  GetHandWritings(){
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
     this.http.get(this.handWriteURL, {
      headers:headers
    })
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        
      })
  }

  Final: string;

  RenderImage(){
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
     this.http.get(this.FinalURL
      +'handwriting_id='+this.handwriting_id
      +'&text='+this.text
      +'&handwriting_size='+this.handwriting_size
      +'&handwriting_color='+this.handwriting_color,{headers: headers}).subscribe(data => {this.Final = data.toString()});    
      console.log(this.Final);
  }

 
    

 
}


