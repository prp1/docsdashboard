import { Injectable } from '@angular/core'

@Injectable()
export class AppSettings {  
    
    apiUrl: string
    initialState: any

    constructor() {
        this.apiUrl = (<any>window).docsDashBoardConfig.apiUrl
        this.initialState = (<any>window).docsDashBoardConfig.initialState
    }

}