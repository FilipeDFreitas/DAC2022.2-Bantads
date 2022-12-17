import { NgModule } from '@angular/core';
import { MinimoValidatorDirective } from './directives/minimo-validator.directive';
import { MeuPipePipe } from './pipes/meu-pipe.pipe';
// Diretivas

// Pipes

@NgModule({
declarations: [
    MinimoValidatorDirective,
    MeuPipePipe

],
exports: [

]
})
export class SharedModule { }
