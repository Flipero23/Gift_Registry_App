import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({ providedIn: 'root' })
export class GuestApi {
    private http = inject(HttpClient);
    private readonly baseUrl = 'http://localhost:8080';

    rsvp(guestId: number): Observable<void> {
        return this.http.patch<void>(`${this.baseUrl}/guests/${guestId}/rsvp`, {});
    }
}