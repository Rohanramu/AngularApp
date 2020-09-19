import { Injectable } from '@angular/core';
import { AccountConstants } from './account-constants';
import { Observable } from 'rxjs';
import { TransferfundForm } from './transferfund-form';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { tokenName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class TransferFundService {

  constructor(private http:HttpClient){}
 
  decrypt(token:string){
    let str="";
    for(let i=0;i<token.length;++i)
    {
      str=str+String.fromCharCode(token.charCodeAt(i)-3)
    }
console.log(str);
return str;
  }

  encrypt(token: string){
    let str="";
    for(let i=0;i<token.length;++i)
    {
      str=str+String.fromCharCode(token.charCodeAt(i)+3)
    }
console.log(str);
return str;
  }

public doLogout()
{
  let utoken =localStorage.getItem("token");
  if(utoken == null) utoken="";
  const httpHeaders = new HttpHeaders({"tokenid": utoken});
  return this.http.get("http://localhost:8034/cgbank/logout", {headers:httpHeaders,responseType:'text'});
}
 public doLogin(userId: string, pwd: string):Observable<any> {
    let postdata = new FormData();
    postdata.append('userid', userId);
    postdata.append('password', this.encrypt(pwd) );
    return this.http.post("http://localhost:8034/cgbank/login",postdata,{responseType:'text'})
    
  }


  public doTxn(form:TransferfundForm):Observable<any>{
         return this.http.post("http://localhost:8034/cgbank/transfer",form);
  }
}
