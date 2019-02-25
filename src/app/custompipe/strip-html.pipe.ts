import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stripHTML'
})
export class StripHTMLPipe implements PipeTransform {

  transform(value: string): any {
    return value.replace(/<.*?>/g, '')
  }

}
