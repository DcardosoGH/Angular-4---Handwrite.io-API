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
  
    
  constructor(private http: Http){
      this.GetHandWritings();
  }

  
// API Calls
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
      console.log(this.data);
  }

  //input properties 
  handwritingId: string;
  text: string;
  handwritingSize: string;
  handwritingColor: string;

  // API properties
  title = 'Handwriting API APP';
  apiKey: string = '0894436AGCWCAHXG';
  apiSecret: string = 'BKD252QSP91JJQ75';
  handWriteURL: string = 'https://api.handwriting.io/handwritings?limit=500'
  apiURL: string ='https://api.handwriting.io/render/png?handwriting_id=2ZK3ZD280058&text=qwdqwdqwd&handwriting_color=692E98';

  
  // Method properties
  finalData:string;
  data: any = [{}];

  //arrays
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

  

    RenderFinalURL(url: string){
      url = this.apiURL
      +'handwriting_id='+this.handwritingId
      +'&text='+this.text
      +'&handwriting_size='+this.handwritingSize
      +'&handwriting_color='+this.handwritingColor;
      console.log(url);
      return url;
  }
  
  Imagem: any;

   RenderImage(imagem){
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    imagem = this.http.get(this.apiURL,{headers:headers});
    return imagem;
   }





    
  

   

 
}


