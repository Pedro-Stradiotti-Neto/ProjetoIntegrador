import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContatoComponent } from './contato/contato.component';
import { FaqComponent } from './faq/faq.component';
import { FeedComponent } from './feed/feed.component';
import { ProfileComponent } from './profile/profile.component';
import { PoliticaComponent } from './politica/politica.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { DeleteUsuarioComponent } from './delete-usuario/delete-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { DeletarComponent } from './deletar/deletar.component';
import { EditarComponent } from './editar/editar.component';
import { AboutComponent } from './about/about.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContatoComponent,
    FaqComponent,
    FeedComponent,
    ProfileComponent,
    PoliticaComponent,
    LoginComponent,
    UsuarioComponent,
    CadastrarComponent,
    DeleteUsuarioComponent,
    EditarUsuarioComponent,
    DeletarComponent,
    EditarComponent,
    AboutComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
