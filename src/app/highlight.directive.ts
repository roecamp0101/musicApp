import { Directive, HostListener,  HostBinding} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
    
  private backgroundColor; 
  private color;

   @HostListener('mouseenter') mouseover(){
        this.backgroundColor = '#fff'; 
        this.color = '#000';
    }
     
     @HostListener('mouseleave') mouseleave(){
        this.backgroundColor = '#000';
        this.color = '#797979';
    }
     
/*
    @HostBinding('style.backgroundColor') get setbackGround(){
        
        return this.backgroundColor;

        
    } 


    @HostBinding('style.color') get setColor(){
        
        return this.color;
        
    } */


}
