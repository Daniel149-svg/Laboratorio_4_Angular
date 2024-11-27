import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(), provideFirebaseApp(() => initializeApp({"projectId":"daniel-trujillo-ing","appId":"1:234474060127:web:9b125a8985b25ca6c45eea","databaseURL":"https://daniel-trujillo-ing-default-rtdb.firebaseio.com","storageBucket":"daniel-trujillo-ing.firebasestorage.app","apiKey":"AIzaSyCiZbMhIyzhEuKsAXaLnfRQwvg6jKwFlLA","authDomain":"daniel-trujillo-ing.firebaseapp.com","messagingSenderId":"234474060127","measurementId":"G-N9LP3HVR87"})), provideAuth(() => getAuth())]
};
