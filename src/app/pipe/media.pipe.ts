import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'media',
  standalone: true
})
export class MediaPipe implements PipeTransform {

  transform(object: any): number {
    return (object.firstNote + object.seccondNote)/2;
  }

}
