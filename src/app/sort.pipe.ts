import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(value: string[], args: string): string[] {


    
    if(!value) return [];

    if(!args) return value;
    
    if(args==='Popularity'){
      return value.sort((a:any, b:any)=>{return b.rating-a.rating});
    }
    else if(args==='Name'){
      return value.sort((a:any, b:any)=>{ if (a.name < b.name) {
        return -1;
      } 
      else {
        return 0;
      }});  
    }
  }

}
