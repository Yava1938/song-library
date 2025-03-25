# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

## Prerequisito

Debe tener una cuenta de desarrollo de Spotify para poder utilizar los servicios

Necesita tener a la mano los siguientes insumos: 

    * Client ID
    * Client secret
    * Redirect URIs

Ahora es importante identificar que el API de Spotify tiene 2 diferentes mecanismos de autorizacion a sus recursos
Por lo cual se deben generar 2 Tokens diferentes

### Primer Token
    El primer token se genera a base de un servicio sencillo, con las credenciales adecuadas como se encuentra en el Postman anexo
    claramente reemplazando las variables por las de la cuenta del usuario

### Segundo Token
    El segundo token es un poco mas dificil de conseguir, esto debido a que en la cuenta de spotify.developer debemos tener un proyecto y registrado una direccion URL aunque sea dummy

    esa la vamos a reemplazar por la variable REACT_APP_URI en las variables de entorno.
    Adicional, en el postman tambien se debe reemplazar por su variable correspondiente.

    En el postman hay un metodo llamado obtener code token, si ya reemplazamos todas las variables del postman, lo vamos a ejecutar, y en la consola de logs del postman veremos una url que imprimimos, esa la ejecutaremos en un navegador y nos devolvera un code en la url una vez que el navegador se recargue, ese code se rescata y se anexa en el metodo de Login Code, en el unico parametro que haria falta que es el code y si todo es correcto, al ejecutar el servicio, nos devolvera un token diferente; o bien, ese code se debe ingresar de forma manual en el codigo de la aplicacion web en el hook useAuthUser en la linea 21 en el valor hardcore que tiene por defecto, habiendo hecho todo esto de forma correcta, una vez levantemos el servicio deberia visualizarse la informacion que el API de Spotify nos devuelva.

# NOTA: No se puede ocupar el mismo code 2 veces para generar un token, asi que se usa en el postman o en el aplicativo web.
# NOTA: en algunos casos, se debe vaciar el LocalStorage y recargar 2 o 3 veces la pagina principal
# El postman se encuentra aqui en el proyecto.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
