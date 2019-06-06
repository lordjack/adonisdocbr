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
  
  security = [
    {url: 'security/security-introduction', title: "Introdução"},
    {url: 'security/authentication', title: "Autenticação"},
    {url: 'security/cors', title: "CORS"},
    {url: 'security/csrf', title: "CSRF"},
    {url: 'security/encryption-and-hashing', title: "Encriptação e Hashing"},
    {url: 'security/shield', title: "Middleware de proteção"},
  ]

  constructor() { }

  getPreface(){
    return this.preface
  }

  getConcept(){
    return this.concept
  }

  getSecurity(){
    return this.security
  }
}
