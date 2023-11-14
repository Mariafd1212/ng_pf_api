import { Injectable } from "@angular/core";

@Injectable()
export class AppService {
    constructor() { }

    saludar(): void {
        console.log('Saludando')
    }
}