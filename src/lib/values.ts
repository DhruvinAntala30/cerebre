export function text(value) {
      if(value==null)return '';
      if(Array.isArray(value))return value.map(text).join('');
      if(typeof value==='object') {
        if(value.__html!=null)return String(value.__html).replace(/<[^>]*>/g,'');
        return text(value.text??value.html??value.children??value.name??value.url??'');
      }
      return String(value);
    }
