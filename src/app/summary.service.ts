import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

    preface = [
      {url: 'preface/about', title: "Sobre o AdonisJs"},
      {url: 'preface/upgrade-guide', title: "Atualizando do 4.0"},
      {url: 'preface/contribution-guide', title: "Guia de contribuição"},
    ];

  constructor() { }

  getPreface(){
    return this.preface
  }
}
