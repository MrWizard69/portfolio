import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let typeThis: HTMLCollectionOf<Element> = document.getElementsByClassName("typer");

    console.log(typeThis[0]);

    this.autoType(typeThis[0], 150);
  }

  autoType(htmlClass, typeSpeed){

    let thisElement = htmlClass;

    thisElement.setAttribute(
      'style', 
      'position: relative; display: inline-block;'
    );
    
    thisElement = document.querySelector('.text-js');

    let typeText = thisElement.innerHTML.trim().split('');
    let charCount = typeText.length;
    let newType = '';
    
    thisElement.innerHTML = '|';

    setTimeout(function(){

      thisElement.innerHTML = '';

      thisElement.setAttribute(
        'style', 
        'opacity: 1;'
      );

      for(let i = 0; i < charCount; i++){

        (function(i,char){

          setTimeout(function() {  
                  
            newType += char;
            thisElement.innerHTML = newType;
            
          }, i * typeSpeed);
        })(i + 1, typeText[i]);
      }

    },1500);

  }

}
