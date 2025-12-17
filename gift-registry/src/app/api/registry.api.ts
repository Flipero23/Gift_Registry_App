import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Registry } from "../models/registry.models";


@Injectable({  providedIn: 'root'})

export class RegistryApi {
    private http = inject(HttpClient);

    private readonly baseUrl = 'http://localhost:8080';

    getAll(): Observable<Registry[]> {
        return this.http.get<Registry[]>(`${this.baseUrl}/registries`);
    }

    getById(id: number): Observable<Registry> {
        return this.http.get<Registry>(`${this.baseUrl}/registries/${id}`);
    }
}