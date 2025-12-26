import { ElementRef, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class TesteService {
    // constructor(private readonly _elref: ElementRef) {}

    create(elRef: ElementRef) {
        const novoDiv = document.createElement('div');
        novoDiv.textContent = 'Nova div criada dinamicamente';
        novoDiv.classList.add('bg-red');

        elRef.nativeElement.appendChild(novoDiv);
    }
}