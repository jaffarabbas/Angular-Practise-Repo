import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigaterService } from '../../services/navigater.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private router:Router,public _navigationService: NavigaterService) { }

  ngOnInit(): void {
  }
}

