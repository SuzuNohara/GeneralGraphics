import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NodesComponent } from './nodes/nodes.component';
import { ChessComponent } from './chess/chess.component';

const routes: Routes = [{
  component: NodesComponent,
  path: 'nodes'
},{
  component: ChessComponent,
  path: 'chess'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
