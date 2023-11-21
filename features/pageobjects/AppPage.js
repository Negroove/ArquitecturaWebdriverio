// AppPage.js

import { $ } from '@wdio/globals';

class AppPage {
    // Agrega elementos u otros métodos según sea necesario para representar la aplicación en ejecución

    async open() {
        // Implementa la lógica para abrir o levantar la aplicación (APK)
        console.log('Opening the application (APK)...');
        // Puedes agregar aquí comandos específicos para abrir la APK
        await driver.execute('mobile: activateApp', { appId: 'com.wdiodemoapp' });
    }
}

export default new AppPage();
