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
    (function ($) {
      $(document).ready(function () {
        var elementPosition = $('#menuLateral').offset(); // Traz a posicão do elemento na página.
        var tamanho = $('#menuLateral').width();          // Pega a largura do elemento

        $(window).scroll(function () {
          if ($(window).scrollTop() > elementPosition.top) {
            $('#menuLateral').css('position', 'fixed').css('top', '0').css('left', elementPosition.left);
            $('#menuLateral').css('width', tamanho);
          } else {
            $('#menuLateral').css('position', 'static');
          }
        });
      });
    })(jQuery);

    window.scroll(0, 0);
  }
}