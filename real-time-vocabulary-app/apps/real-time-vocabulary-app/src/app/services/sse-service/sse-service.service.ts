import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SseServiceService {
  private api = environment.apiUrl;
  private httpClient = inject(HttpClient);
  private eventSource!: EventSource;

  constructor() {}

  public listenToSse(): Observable<MessageEvent> {
    const eventSource = new EventSource(`${this.api}/sse`);

    return new Observable<MessageEvent>((observer) => {
      eventSource.onmessage = (event: MessageEvent) => {
        observer.next(event);
      };

      eventSource.onerror = (err) => {
        observer.error(err);
        eventSource.close();
      };

      return () => {
        eventSource.close();
      };
    });
  }
}
