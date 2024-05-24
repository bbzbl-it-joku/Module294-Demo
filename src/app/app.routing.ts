import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PersonsComponent } from "./pages/persons/persons.component";
import { LoginComponent } from "./pages/login/login.component";

const routes: Routes = [
    {
        path: "persons", component: PersonsComponent
    },
    {
        path: "login", component: LoginComponent
    },
    {
        path: "", redirectTo: "persons", pathMatch: "full",
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
