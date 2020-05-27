import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { PoliticaComponent } from './politica/politica.component';
import { ContatoComponent } from './contato/contato.component';
import { FeedComponent } from './feed/feed.component';
import { ProfileComponent } from './profile/profile.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { DeleteUsuarioComponent } from './delete-usuario/delete-usuario.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'politica', component: PoliticaComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'profile', component: ProfileComponent },
  {path: 'editarusuario/:id', component: EditarUsuarioComponent},
  {path: 'deleteusuario/:id', component: DeleteUsuarioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
