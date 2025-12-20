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

    create(data: Partial<Registry>): Observable<Registry> {
        return this.http.post<Registry>(`${this.baseUrl}/registries`, data);
    }

    update(id: number, data: Partial<Registry>): Observable<Registry> {
        return this.http.put<Registry>(`${this.baseUrl}/registries/${id}`, data);
    }

    delete(id: number) {
        return this.http.delete(`${this.baseUrl}/registries/${id}`);
    }

}