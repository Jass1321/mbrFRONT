import { Component, OnInit , Inject} from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-biene-nuevo',
  templateUrl: './biene-nuevo.component.html',
  styleUrls: ['./biene-nuevo.component.css']
})
export class BieneNuevoComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {
  }
  selectedFile!: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message!: string;
  imageName: any;
  //Cada que los users seleccionan una imagen
  public onFileChanged(event:any) {
    //Select File
    this.selectedFile = event.target.files[0];
  }
  //Se llama cuando el usuario hace clic en enviar para cargar la imagen.
  onUpload() {
    console.log(this.selectedFile);
    
    //preparar fácilmente los datos del formulario para enviarlos con solicitudes HTTP POST.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  
    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:1321/producto/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      );
  }
    //Gets called when the user clicks on retieve image button to get the image from back end
    getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:1321/producto/get/' + this.imageName)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }
}

