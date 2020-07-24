import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placefiltr'
})
export class PlacefiltrPipe implements PipeTransform {

  transform( items: any[],place: string): any[] {
    
      if(!items) return [];
   
      if(!place) return items;

      return this.searchPlace(items, place.toLowerCase());
	   }

   private searchPlace(items :any[], place:string): any[] {
    let result = [];
     items.forEach(item => {
       if (item.place.toLowerCase()===place ) {
          result.push(item);
      }
	      });
	      return result;
	   }  
}
