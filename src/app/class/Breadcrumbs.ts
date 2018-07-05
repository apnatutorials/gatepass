import { Params } from "@angular/router";

/** 
 * Breadcrumbs class used by BreadcrumbComponent
*/
export class BreadCrumbs {

    public label: string;

    public url: string;

    /**
     * Default constructor for class 'BreadCrumbs'
     * Initialize all properties with their default values
     */
    constructor() {
        this.label = '';
        this.url = '';
    }
}