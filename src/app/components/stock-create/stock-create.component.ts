import { Component, OnInit } from '@angular/core';
// import { Product } from '../models/product.bean';
import { Location } from '@angular/common';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { AngularFirestore } from 'angularfire2/firestore';
import { tap } from 'rxjs/operators';

export class Product{  
  name:string;
  imageName:string;
  imageUrl:string;
  price:number;
  qty:number;  
}

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.css']
})
export class StockCreateComponent implements OnInit {
  // mProduct:Product = new Product();
  // percentage: Observable<number>;
  // snapshot: Observable<any>;
  // downloadURL: Observable<string>;
  // isUploaded:boolean = false;

  // task: AngularFireUploadTask;

  constructor(private location:Location,
              private db: AngularFireDatabase, 
              private storage: AngularFireStorage) { }

  ngOnInit() {
  }

  // onClickSubmit(){
  //   console.log(JSON.stringify(this.mProduct));
  //   let itemRef = this.db.list('stock');
  //   itemRef.push(this.mProduct).then(()=>{
  //     this.location.back();
  //   });
    
  // }

  // onClickCancel(){
  //   this.location.back();
  // }

  // uploadFile(event) {
  //   // The File object
  //   const file = event.item(0)

  //   // Client-side validation example
  //   if (file.type.split('/')[0] !== 'image') {
  //     console.error('unsupported file type :( ')
  //     return;
  //   }

    // The storage path
    // const path = `stock/upload/${new Date().getTime()}_${file.name}`;

    // Totally optional metadata
    // const customMetadata = { app: 'Inventory Management' };

    // The main task
    // this.task = this.storage.upload(path, file, { customMetadata })
    

    // Progress monitoring
    // this.percentage = this.task.percentageChanges();
    // this.snapshot = this.task.snapshotChanges().pipe(
    //   tap(snap => {
    //     console.log(snap)
    //     if (snap.bytesTransferred === snap.totalBytes) {
    //       // Update firestore on completion
    //       // this.db.collection('photos').add( { path, size: snap.totalBytes })
    //       this.downloadURL.subscribe((url)=>{
    //         this.mProduct.imageUrl = url.toString();
    //         this.mProduct.imageName = path;
    //         this.isUploaded = true;
    //         console.log(`"imageUrl" : ${this.mProduct.imageUrl}`)
    //       })
    //     }
    //   })
    // )


    // The file's download URL
    // this.downloadURL = this.task.downloadURL();
  // }

}
