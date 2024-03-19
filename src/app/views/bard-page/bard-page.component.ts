import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

interface Str{
  role: string,
  parts: [{
    text: string
  }]
}

interface Contents{
  contents: [Str]
}

@Component({
  selector: 'app-bard-page',
  standalone: true,
    imports: [
      ReactiveFormsModule,
      HttpClientModule
    ],
  templateUrl: './bard-page.component.html',
  styleUrl: './bard-page.component.scss'
})
export class BardPageComponent implements OnInit{

  msgForm!: FormGroup;

  readonly MAPPING_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key="

  public _str_contents: Contents = {
    contents: [{
      role: '',
      parts: [{text: ''}]
    }]
  };
  private m: Str = {
    role: 'user',
    parts: [{text: ''}]
  }

  /*onSubmit(){
    /!*let msg = {
      "contents": [
        {"role":"user",
          "parts":[{
            "text": "Hello"}]},
        {"role": "model",
          "parts":[{
            "text": "Hello there! How may I assist you today?"}]},
        {"role": "user",
          "parts":[{
            "text": "Do you speak french ?"}]},
        {"role": "model",
          "parts":[{
            "text": "Oui, je parle français. Je peux vous aider avec n'importe quelle traduction ou question que vous pourriez avoir.\n\nVoulez-vous que je change la langue de notre conversation en français ?"}]},
        {"role": "user",
          "parts":[{
            "text": "Oui en quel langue ?"}]}
      ]
    }*!/

    this.m.parts[0].text = this.msgForm.value.msg
    if(this._str_contents.contents.length > 1){
      this._str_contents.contents[this._str_contents.contents.length + 1] = this.m
    }else{
      this._str_contents.contents[0] = this.m
    }

    this.postMsg(this._str_contents).subscribe(
      value => {
        console.log("Response: ", value)
        let r: Str = {
          role: 'model',
          parts: [{text: value.candidates[0].content.parts[0].text}]
        }
        this._str_contents.contents.push(r)
        console.log("STRUC:", this._str_contents)
      }
    )
  }*/
  onSubmit() {
    // Mettez la valeur du formulaire dans le texte de la première partie
    this.m.parts[0].text = this.msgForm.value.msg;

    // Vérifiez la longueur de _str_contents.contents une seule fois
    if (this._str_contents.contents.length > 1) {
      this._str_contents.contents.push(this.m);
    } else {
      this._str_contents.contents = [this.m];
    }

    // Appelez postMsg et gérez la réponse dans le callback
    this.postMsg(this._str_contents).subscribe(
      (value) => {
        console.log("Response: ", value);

        // Simplifiez la création de l'objet Str
        let r: Str = {
          role: 'model',
          parts: [{ text: value.candidates[0].content.parts[0].text }],
        };

        // Ajoutez l'objet Str à _str_contents.contents
        this._str_contents.contents.push(r);

        console.log("STRUC:", this._str_contents);
      },
      (error) => {
        console.error("Error: ", error);
      }
    );
  }


  keyApi: string = "AIzaSyBkupIhOuNFYbJJMh1mzDPO95ewDi5r7Qw"

  constructor(private fb: FormBuilder, private http: HttpClient) {
  }

  ngOnInit() {
    this.msgForm = this.fb.group({
      msg: [null, Validators.required]
    })
  }

  structs(role: string, msg: string){
    let str: any = {
      role: role,
      parts: [{
        text: msg
      }]
    }
    return str;
  }

  public postMsg(msg: any): Observable<any>{
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/json")
    }
    console.log(JSON.stringify(msg))
    return this.http.post(this.MAPPING_URL+this.keyApi, msg, options).pipe()
  }

}
