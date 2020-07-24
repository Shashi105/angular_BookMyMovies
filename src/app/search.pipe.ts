import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {


  // transform(value: any[], args?: any): any[] {
    
    
   
  //     if(!value)return null;
  //     if(!args)return value;

  //     args = args.toLowerCase();

  //     return value.filter(function(item){
  //       return JSON.stringify(item.name).toLowerCase().includes(args);
  //     });
  //   }   


  transform(items: any[], searchText: string): any[] {
    
    if(!items) return [];

    if(!searchText) return items;

    return this.searchItems(items, searchText.toLowerCase());
   }

   private searchItems(items :any[], searchText): any[] {
     let results = [];
      items.forEach(item => {
        if (item.name.toLowerCase()===(searchText) || item.language.toLowerCase()===(searchText) ) {
            results.push(item);
        }
      });
      return results;
   }
  }

