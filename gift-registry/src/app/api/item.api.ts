import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({ providedIn: 'root' })
export class ItemApi {
    private http = inject(HttpClient);
    private readonly baseUrl = 'http://localhost:8080';

    purchase(itemId: number): Observable<void> {
        return this.http.patch<void>(`${this.baseUrl}/items/${itemId}/purchase`, {});
    }

    addToRegistry(registryId: number, data: {
        name: string;
        price : number;
        quantity: number;
    }) {
        return this.http.post<void>(`${this.baseUrl}/items/registry/${registryId}`, data);
    }
}