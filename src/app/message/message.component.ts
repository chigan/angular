import { Component, OnInit, Injectable } from '@angular/core';

import {MessageService} from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(public messageService: MessageService) { }


  ngOnInit() {
  }

}
