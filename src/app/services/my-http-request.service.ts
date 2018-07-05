import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import * as _responseObject from '../class/ResponseObject';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

/**
 * 'MyHttpRequestService' class
 * used for server communication
 * sends and recieve HttpRequest and HttpResponse
 */
@Injectable()
export class MyHttpRequestService {

  private serverUrl: string = "";
  /**
   * 
   * @param http 
   * constructor of class 'MyHttpRequestService'
   * to initialize defalut values for the class members; 
   */
  constructor(private http: Http) { 
    this.serverUrl = "" ;
  }

   /**
   * 
   * @param RequestObject 
   * @param callback 
   * sends http Request and bind the response in a callback function
   */
  public makeHttpRequest(RequestObject: _responseObject.Gatepass.ResponseObject, callback:any){
      let response = new _responseObject.Gatepass.ResponseObject();
      response.success = true;
    return callback(response);
    // this.makeMapRequest(RequestObject).subscribe( //subscribe the map result
    //         (response: Response) => {
    //             callback(response) ; 
    //         },
    //         (error) => {
    //             alert (error);
    //         }
    //     )
    }

  /**
   * returns the observer with the json response
   */
  private makeMapRequest(RequestObject: _responseObject.Gatepass.ResponseObject){
    return this.http.post( this.serverUrl, RequestObject)
        .map(
            (response: Response) => {
                const data = response.json();
                return data;
            })
        .catch(
            (error: Response) => {
                return Observable.throw("Something Went Wrong");
            }
        )
    } 
}
