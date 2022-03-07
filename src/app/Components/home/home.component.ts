import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  coll:any = document.getElementsByClassName("collapsible");
 
  constructor() { }

  ngOnInit(): void {
    
    for (let i = 0; i < this.coll.length; i++) {
      this.coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    } 
  }
  
  
}
