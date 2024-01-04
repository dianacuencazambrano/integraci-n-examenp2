# Integración Marvel API
Se realizó una integración con la API de Marvel en una aplicación Node.js utilizando Express.

## Requisitos Previos:
---
Antes de comenzar, asegúrate de tener Node.js y npm instalados en tu sistema. Además, se requiere una clave de API pública y privada de Marvel, que puedes obtener registrándote en el Portal de Desarrolladores de Marvel **developer.marvel.com**.


#### Pasos para Configurar:

- Clona el repositorio a tu máquina local.
```
git clone https://github.com/tu-usuario/tu-proyecto-marvel-api.git
```
- Instala las dependencias del proyecto.

```
cd tu-proyecto-marvel-api
```
```
npm install
```
- Crea un archivo .env en la raíz del proyecto y agrega tus claves de API de Marvel.

```env
PORT=3000
PUBLICKEY=TU_CLAVE_PUBLICA
PRIVATEKEY=TU_CLAVE_PRIVADA
```


## ENDPOINTS

### Obtener Personajes por Nombre

|          | Información  |
| -------  | ------ | 
| Endpoint    | /marvel/characters/:nameWith   | 
| Método  | GET    | 
| Parámetros   | nameWith (para filtrar personajes por nombre)  | 
| Resultado   | Array de objetos JSON con id y name de cada personaje   | 
| **Ejemplo**   | **GET /marvel/characters?nameWith=spider**   | 


### Obtener Detalles de un Personaje por ID

|          | Información  |
| -------  | ------ | 
| Endpoint    | /marvel/character/:id   | 
| Método  | GET    | 
| Parámetros   | id (obligatorio) para especificar el ID del personaje  | 
| Resultado   | Objeto JSON con detalles como id, nombre, descripcion, comics, y series del personaje   | 
| **Ejemplo**   | **GET /marvel/character/1009610**   | 