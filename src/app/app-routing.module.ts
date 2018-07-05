import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/Router';
import { FormForNonGovtEmployeeComponent } from './form-for-non-govt-employee/form-for-non-govt-employee.component';

//import { FormForAlpawadhiComponent } from './form-for-alpawadhi/form-for-alpawadhi.component';

import { VahanPraveshPatrSachivalayaEComponent } from './vahan-pravesh-patr-sachivalaya-e/vahan-pravesh-patr-sachivalaya-e.component';
import { VahanPraveshPatrSachivalayaNijigadiComponent } from './vahan-pravesh-patr-sachivalaya-nijigadi/vahan-pravesh-patr-sachivalaya-nijigadi.component';
import { VahanPraveshPatrSachivalayaPramukhSachivComponent } from './vahan-pravesh-patr-sachivalaya-pramukh-sachiv/vahan-pravesh-patr-sachivalaya-pramukh-sachiv.component';
import { VahanPraveshPatrSachivalayaVibhagadhyakshComponent } from './vahan-pravesh-patr-sachivalaya-vibhagadhyaksh/vahan-pravesh-patr-sachivalaya-vibhagadhyaksh.component';
import { VahanPraveshPatrSachivalayaVisheshSachivComponent } from './vahan-pravesh-patr-sachivalaya-vishesh-sachiv/vahan-pravesh-patr-sachivalaya-vishesh-sachiv.component';
import { VaahanPraveshPtraComponent } from './vaahan-pravesh-ptra/vaahan-pravesh-ptra.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { MainAreaComponent } from './main-area/main-area.component';
import { PassSarkariNijiComponent } from './pass-sarkari-niji/pass-sarkari-niji.component';
import { PassSevaNivrattOfficerComponent } from './pass-seva-nivratt-officer/pass-seva-nivratt-officer.component';
import { PassGairSarkariComponent } from './pass-gair-sarkari/pass-gair-sarkari.component';
import { PassMukhyaBhawanNaveenBhawanComponent } from './pass-mukhya-bhawan-naveen-bhawan/pass-mukhya-bhawan-naveen-bhawan.component';
import { PassBapuBhawanComponent } from './pass-bapu-bhawan/pass-bapu-bhawan.component';
import { PassAlpAwadhiComponent } from './pass-alp-awadhi/pass-alp-awadhi.component';
import { PassComponent } from './pass/pass.component';
import { SearchPassComponent } from './search-pass/search-pass.component';

const appRoutes: Routes = [
    // {
    //     path: 'newPass',
    //     data: {
    //         breadcrumb: 'पास'
    //     },
    //     children: [
    //         {
    //             path: 'sarkariniji/:id',
    //             component: PassSarkariNijiComponent,
    //             data: {
    //                 breadcrumb: 'सरकारी निजी पास'
    //             },
    //         },
    //         {
    //             path: 'forRetiredPeople/:id',
    //             component: PassSevaNivrattOfficerComponent,
    //             data: {
    //                 breadcrumb: 'सेवा निवृत्त अधिकारी पास'
    //             },
    //         },
    //         {
    //             path: 'nonGovernment/:id',
    //             component: PassGairSarkariComponent,
    //             data: {
    //                 breadcrumb: 'गैर सरकारी पास'
    //             },
    //         },
    //         {
    //             path: 'temporaryForNaveenBhawan/:id',
    //             component: PassMukhyaBhawanNaveenBhawanComponent,
    //             data: {
    //                 breadcrumb: 'मुख्य भवन एवं नवीन भवन पास'
    //             },
    //         },
    //         {
    //             path: 'temporaryForBapuBhawan/:id',
    //             component: PassBapuBhawanComponent,
    //             data: {
    //                 breadcrumb: 'बापू भवन पास'
    //             },
    //         },
    //         {
    //             path: 'AlpAwadhi/:id',
    //             component: PassAlpAwadhiComponent,
    //             data: {
    //                 breadcrumb: 'अल्प अवधि पास'
    //             },
    //         },
    //         {
    //             path: 'searchPass/:passtype',
    //             //component: SearchPassComponent,
    //             data: {
    //                 breadcrumb: 'search पास'
    //             },
    //             children:[
                    
    //                     {
    //                     path: 'sarkariniji/:id',
    //                     component: PassSarkariNijiComponent,
    //                     data: {
    //                         breadcrumb: 'सरकारी निजी पास'
    //                     }
    //                 },
    //                     {
    //                         path: '',
    //                         component: SearchPassComponent,
    //                         data: {
    //                             breadcrumb: ''
    //                         },
    //                     }
                    

    //             ]
    //         },
    //         {
    //             path: '',
    //             component: PassComponent,
    //             data: {
    //                 breadcrumb: ''
    //             },
    //         }
    //     ]
    // },
    
    // {
    //     path: 'dashboard',
    //     component: MainAreaComponent,
    //     data:{
    //         breadcrumb: 'Main Area'
    //     }
    // },
    {
        path: '',
        //component: MainBodyComponent,
        data: {
            breadcrumb: 'Home12'
        },
        children: [
            {
                path: 'newPass',
                data: {
                    breadcrumb: 'पास'
                },
                children: [
                    {
                        path: 'sarkariniji/:id',
                        component: PassSarkariNijiComponent,
                        data: {
                            breadcrumb: 'सरकारी निजी पास'
                        },
                    },
                    {
                        path: 'forRetiredPeople/:id',
                        component: PassSevaNivrattOfficerComponent,
                        data: {
                            breadcrumb: 'सेवा निवृत्त अधिकारी पास'
                        },
                    },
                    {
                        path: 'nonGovernment/:id',
                        component: PassGairSarkariComponent,
                        data: {
                            breadcrumb: 'गैर सरकारी पास'
                        },
                    },
                    {
                        path: 'temporaryForNaveenBhawan/:id',
                        component: PassMukhyaBhawanNaveenBhawanComponent,
                        data: {
                            breadcrumb: 'मुख्य भवन एवं नवीन भवन पास'
                        },
                    },
                    {
                        path: 'temporaryForBapuBhawan/:id',
                        component: PassBapuBhawanComponent,
                        data: {
                            breadcrumb: 'बापू भवन पास'
                        },
                    },
                    {
                        path: 'AlpAwadhi/:id',
                        component: PassAlpAwadhiComponent,
                        data: {
                            breadcrumb: 'अल्प अवधि पास'
                        },
                    },
                    {
                        path: 'searchPass/:passtype',
                        //component: SearchPassComponent,
                        data: {
                            breadcrumb: 'सर्च पास'
                        },
                        children:[
                            
                                {
                                path: 'sarkariniji/:id',
                                component: PassSarkariNijiComponent,
                                data: {
                                    breadcrumb: 'सरकारी निजी पास'
                                }
                            },
                            {
                                path: 'forRetiredPeople/:id',
                                component: PassSevaNivrattOfficerComponent,
                                data: {
                                    breadcrumb: 'सेवा निवृत्त अधिकारी पास'
                                },
                            },
                            {
                                path: 'nonGovernment/:id',
                                component: PassGairSarkariComponent,
                                data: {
                                    breadcrumb: 'गैर सरकारी पास'
                                },
                            },
                            {
                                path: 'temporaryForNaveenBhawan/:id',
                                component: PassMukhyaBhawanNaveenBhawanComponent,
                                data: {
                                    breadcrumb: 'मुख्य भवन एवं नवीन भवन पास'
                                },
                            },
                            {
                                path: 'temporaryForBapuBhawan/:id',
                                component: PassBapuBhawanComponent,
                                data: {
                                    breadcrumb: 'बापू भवन पास'
                                },
                            },
                            {
                                path: 'AlpAwadhi/:id',
                                component: PassAlpAwadhiComponent,
                                data: {
                                    breadcrumb: 'अल्प अवधि पास'
                                },
                            },
                                {
                                    path: '',
                                    component: SearchPassComponent,
                                    data: {
                                        breadcrumb: ''
                                    },
                                }
                            
        
                        ]
                    },
                    {
                        path: '',
                        component: PassComponent,
                        data: {
                            breadcrumb: ''
                        },
                    }
                ]
            },
            // {
            //     path: 'newPass',
            //     component: PassComponent,
            //     data: {
            //         breadcrumb: 'पास'
            //     }
            // },
            {
                path: '',
                component: MainBodyComponent,
                data: {
                    breadcrumb: ''
                }
            }
        ]
    },
    {
        path: 'main',
        component: MainComponent,
        data: {
            breadcrumb: 'Main'
        }
    },
    {
        path: 'login',
        component: LoginComponent,
        data: {
            breadcrumb: 'Main'
        }
    },
    {
    path: 'vahanPass',
        data: {
            breadcrumb: 'Vahan Pass'
        },
        children: [
            {
                path: 'vahanPaasA/:id',
                component: VaahanPraveshPtraComponent,
                data: {
                    breadcrumb: 'Vahan paas for pramukh sachiv/ sachiv'
                },
            },
            {
                path: 'vahanPaasB/:id',
                component: VahanPraveshPatrSachivalayaVisheshSachivComponent,
                data: {
                    breadcrumb: 'Vahan pass for vishes sachiv / saiyukt sachiv'
                },
            },
            {
                path: 'vahanPaasC/:id',
                component: VahanPraveshPatrSachivalayaVibhagadhyakshComponent,
                data: {
                    breadcrumb: 'Vahan pass for vibhagadhyaksh'
                },
            },
            {
                path: 'vahanPaasD/:id',
                component: VahanPraveshPatrSachivalayaNijigadiComponent,
                data: {
                    breadcrumb: 'Vahan pass for niji gadi'
                },
            },
            {
                path: 'vahanPaasE/:id',
                component: VahanPraveshPatrSachivalayaEComponent,
                data: {
                    breadcrumb: 'Vahan pass E'
                },
            }
        ]
    }
    
];

@NgModule({
    imports: [ 
        RouterModule.forRoot(appRoutes) 
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
}
