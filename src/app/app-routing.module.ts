import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'entrar', component: LoginComponent }, // Substituir por um componente real
    { path: 'cadastrar', component: CadastrarComponent }, // Substituir por um componente real
    { path: 'sobre', component: SobreComponent } // Substituir por um componente real
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
