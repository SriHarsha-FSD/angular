import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GnederPipe implements PipeTransform {

  transform(value: string, gender: string): any {
    
    if(gender ==='male'){
      return 'Mr.' + value;
    }else{
      return 'Miss.' + value;
    }
  }


}
