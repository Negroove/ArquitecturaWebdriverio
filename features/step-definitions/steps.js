// Importa las funciones necesarias de Cucumber y WebdriverIO
import { Given, Then } from '@wdio/cucumber-framework';
import AppPage from '../pageobjects/AppPage.js';

// Step Definition para abrir la aplicación
Given(/^I open the application$/, async () => {
    await AppPage.open();
});

// Nuevo paso para verificar que la aplicación se está ejecutando
Then(/^I should see the application running$/, async () => {
    // Puedes implementar aquí la lógica para verificar que la aplicación está en ejecución
    console.log('Verifying that the application is running...');
     await expect(AppPage.appRunningIndicator).toBeDisplayed();
});
