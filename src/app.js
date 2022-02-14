import { LightningElement } from "lwc";

export default class App extends LightningElement {
  
  pessoa = {
    nome: "Prandini",
    tel: "89898989",
    idade: 28,
    status: true
  };

  pokemons = [
    {cod: 1,
    nome: "Pikachu",
    tipo: "Raio",
    nivel: 52},

    {cod: 2,
    nome: "Charmander",
    tipo: "Fogo",
    nivel: 35},

    {cod: 3,
    nome: "Bulbasaur",
    tipo: "Planta",
    nivel: 38},

    {cod: 4,
    nome: "Squirtle",
    tipo: "Agua",
    nivel: 48},

    {cod: 5,
    nome: "Charizard",
    tipo: "Fogo",
    nivel: 26}
  ]

  caverna=[
    {cod: 1, nome: "Eric", arma: "Escudo", força: 5, agilidade:4, inteligencia: 2, estamina: 9},
    {cod: 2, nome: "Presto", arma: "Gorro", força: 2, agilidade:3, inteligencia: 10, estamina: 4},
    {cod: 3, nome: "Hank", arma: "Arco", força: 7, agilidade:8, inteligencia: 3, estamina: 5},
    {cod: 4, nome: "Bobby", arma: "Porrte", força: 9, agilidade:6, inteligencia: 1, estamina: 6},
    {cod: 5, nome: "Diana", arma: "Lança", força: 7, agilidade:7, inteligencia: 3, estamina: 5},
    {cod: 6, nome: "Eric", arma: "Escudo", força: 6, agilidade:4, inteligencia: 2, estamina: 9},
    {cod: 7, nome: "Mestre dos Magos", arma: "Pilantragem", força: 99, agilidade:99, inteligencia: 99, estamina: 99}
  ]

}
