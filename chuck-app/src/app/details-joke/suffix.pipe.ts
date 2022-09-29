import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'suffix'
})
export class SuffixPipe implements PipeTransform {

  transform(value: unknown, suffix:string, count: number): unknown {
    return value + suffix.repeat(count);
  }

}
