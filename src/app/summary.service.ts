import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  preface = [
    {url: 'preface/about', title: "Sobre o AdonisJs"},
    {url: 'preface/upgrade-guide', title: "Atualizando do 4.0"},
    {url: 'preface/contribution-guide', title: "Guia de contribuição"},
  ]
  
  concept = [
    {url: 'concept/request-lifecycle', title: "Ciclo de vida do request"},
    {url: 'concept/ioc-container', title: "IoC Container"},
    {url: 'concept/service-providers', title: "Service Providers"},
    {url: 'concept/ignitor', title: "Ignitor"},
  ]

  constructor() { }

  getPreface(){
    return this.preface
  }

  getConcept(){
    return this.concept
  }
}
