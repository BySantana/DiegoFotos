import { Component, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {

  imagem: string = '';


  fotos = [{
    url: 'https://imagens.brasil.elpais.com/resizer/B8JPewp1fgkLC1STzZd2bqIaTws=/1200x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/SDKW5X2S3WVJJJU46JUTC5B57Q.jpg',
    descricao: 'Lobo tirando foto 3x4 para a sua CNH.',
    titulo: 'Lobo',
    msg: false,
    mostrarMensagem(): void {
      this.msg = !this.msg;
    }
  },
  {
    url: 'https://www.petz.com.br/blog/wp-content/uploads/2022/01/curiosidades-sobre-leao2.jpg',
    descricao: 'Leão perigoso com um pouco de sono.',
    titulo: 'Leão',
    msg: false,
    mostrarMensagem(): void {
      this.msg = !this.msg;
    }
  },
  {
    url: 'https://uploads.metropoles.com/wp-content/uploads/2021/10/21190647/Urso-pardo-600x400.jpg',
    descricao: 'Urso a procura de amigos para brincar.',
    titulo: 'Urso',
    msg: false,
    mostrarMensagem(): void {
      this.msg = !this.msg;
    }
  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  abrirModal(foto: string){
    this.imagem = foto;
  }


}
