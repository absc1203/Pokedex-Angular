import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { PokeDetalheComponent } from './componentes/poke-detalhe/poke-detalhe.component';
import { PokeTabelaComponent } from './componentes/poke-tabela/poke-tabela.component';

const routes: Routes = [
  {path:'', redirectTo: 'poke-tabela', pathMatch: 'full'},
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'poke-detalhe', component: PokeDetalheComponent},
  {path: 'poke-tabela', component: PokeTabelaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
