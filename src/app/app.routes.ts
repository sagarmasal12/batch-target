import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';
import { NgIfComponent } from './pages/ng-if/ng-if.component';
import { TemplateFormComponent } from './pages/template-form/template-form.component';
import { LayoutcompComponent } from './pages/layoutcomp/layoutcomp.component';
import { CompoNotFoundComponent } from './pages/compo-not-found/compo-not-found.component';
import { Title } from '@angular/platform-browser';
import { DemoCodeComponent } from './pages/demo-code/demo-code.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"",
        pathMatch:"full"
    },
    // {
    //     path: 'admin',
    //     loadChildren:() => import('./admin/admin/admin.component').then(m=> m.AdminComponent)
    // },
    {
        path:'',
        component:LayoutcompComponent,
        children:[
            {
                path:"ng-if",
                component:NgIfComponent
            },
            {
                path:"dataBind/:id",
                component:DataBindingComponent
            },
            {
                path:"template-form",
                component:TemplateFormComponent
            },
            {
                path:"dashboard",
                component:DashboardComponent,
                data:{Title: 'Sagar Masal', Education:'BscIt'}
            },
            {
                path:'demo',
                component:DemoCodeComponent
            },
            {
                path: "**",
                component:CompoNotFoundComponent
            }
        ]
    }
    
];
