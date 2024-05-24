import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PersonsComponent } from "./pages/persons/persons.component";
import { Page1Component } from "./pages/page1/page1.component";

const routes: Routes = [
    {
        path: "persons", component: PersonsComponent
    },
    {
        path: "page1", component: Page1Component
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
