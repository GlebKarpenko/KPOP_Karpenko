import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-img-form',
  templateUrl: './img-form.component.html',
  styleUrl: './img-form.component.scss',
  providers: [FormsModule]
})
export class ImgFormComponent {
  imgUrl: string = '';
  isValidUrl: boolean = false;

  loadImg(): void{
    const imgUrlPattern = /\.(jpg|jpeg|png|webp|avif|gif|svg)$/;

    (imgUrlPattern.test(this.imgUrl))? this.isValidUrl = true : this.isValidUrl = false;

    console.log('url validation status: ', this.isValidUrl);
  }

  openImg(): void{
    window.open(this.imgUrl, '_blank');
  }
}
