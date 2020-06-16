import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-politica',
  templateUrl: './politica.component.html',
  styleUrls: ['./politica.component.css']
})
export class PoliticaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (function ($) { //função javascript
      $(document).ready(function () { //Espera a página ser carregada
        $(window).scroll(function () { //Escuta da ação de scroll
          var posicaoDoElemento = $('#menuLateral').offset(); // Traz a posicão do elemento na página
          if ($(window).scrollTop() >= posicaoDoElemento.top) { //Se o topo da página atual for maior que o topo do menu
            $('#menuLateral').addClass('sticky-top'); //Coloca menu fixo
          } else {
            $('#menuLateral').removeClass('sticky-top'); //Se não remove menu fixo
          }
        });
      });
    })(jQuery);

    window.scroll(0, 0);
  }

  irParaElemento($element): void {
    console.log($element);
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
}
