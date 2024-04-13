import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgClass} from "@angular/common";
import {Content, Prompt} from "../../core/models/bard.model";
import {BardService} from "../../shared/services/bard/bard.service";


@Component({
  selector: 'app-bard-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    NgClass
  ],
  templateUrl: './bard-page.component.html',
  styleUrl: './bard-page.component.scss'
})
export class BardPageComponent implements OnInit{
  msgForm!: FormGroup;
  // KEY : AIzaSyBkupIhOuNFYbJJMh1mzDPO95ewDi5r7Qw

  listMsg: Content = {contents: []};
  errorMsg!: string;

  constructor(private fb: FormBuilder, private bardService:BardService) {
  }

  ngOnInit() {
    this.msgForm = this.fb.group({
      msg: ['', Validators.required]
    })
  }

  inputRequest(role: string, text: string): Prompt{
    let prompt: Prompt = {
      role: role,
      parts: [{
        text: text
      }]
    }
    return prompt;
  }

  startDiscussion(){
    this.msgForm.value.msg = 'Salut !';
    this.onSubmit()
  }

  onSubmit(){
    if(this.msgForm.value.msg != ""){
      /**
       * Initialisation Content
       * Add Array Content
       */
      let sendMsg:Prompt = this.inputRequest("user", this.msgForm.value.msg)
      this.listMsg.contents.push(sendMsg);
      this.bardService.postMsg(this.listMsg).subscribe({
        next: value => {
          let responseMsg: Prompt = this.inputRequest(value.candidates[0].content.role, value.candidates[0].content.parts[0].text)
          this.listMsg.contents.push(responseMsg)
        },
        error: err => {
          this.errorMsg = err;
        }
      })
      this.msgForm.reset()
    }
  }

  /*public postMsg(msg: any): Observable<any>{
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/json")
    }
    return this.http.post(this.MAPPING_URL+this.keyApi, msg, options).pipe()
  }*/
}
