import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component'; // Usamos directamente el componente standalone
import { provideHttpClient, withFetch } from '@angular/common/http'; // Importación para fetch

platformBrowserDynamic()
  .bootstrapModule(AppComponent) // Arrancamos la aplicación con el componente standalone
  .then(ref => {
    ref.injector.get(provideHttpClient, withFetch()); // Activamos fetch para HttpClient si es necesario
  })
  .catch(err => console.error(err));
