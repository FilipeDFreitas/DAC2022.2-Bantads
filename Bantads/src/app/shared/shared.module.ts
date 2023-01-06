import { NgModule } from '@angular/core';
import { MinimoValidatorDirective } from './directives/minimo-validator.directive';
import { MeuPipePipe } from './pipes/meu-pipe.pipe';
import { CpfValidatorDirective } from './directives/cpf-validator.directive';
import { CepValidatorDirective } from './directives/cep-validator.directive';
// Diretivas

// Pipes

@NgModule({
declarations: [
    CpfValidatorDirective,
],
exports: [
    CpfValidatorDirective

]
})
export class SharedModule { }
