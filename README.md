# Nomenclatura

### for-_accion_ (drivers):

- **for**: denotar la accion a utiliar
- **accion**: nueva accion en el hexagono (ej: `for-authenticating`)

### for-identificador del recurso-accion (drivens):

- **identificador del recurso**: indica a quien voy a estar pidiendo el recurso ej: `for-control-authenticating` <- en este caso le pido recursos al `service: control-plane`

control-authenticator-stub

# Conceptos anotados :

## STUBS

Es un objeto simulado que reemplaza a un componente real y devuelve datos predefinidos para ciertas llamadas.
Se utilizan para devolver datos fijos predefinidos y aislar una parte del sistema sin realizar verificaciones de comportamiento.

## MOCKS

Simular comportamientos y también verifica que ciertas interacciones y llamadas ocurrieron durante las pruebas.

## Por que interface?

Se usan interfaces para seguir reglas que se quieren seguir en la app. Declaro las limitaciones o metodos que se van a accionar en el hexagono

## Que es un barrel?

Es un archivo que centraliza y reexporta varios **modulos** desde un fichero en comun, lo que facilita y simplifica las importaciones en otros ficheros.Normalmente se llama `index.ts`

#### Ejemplo:

Supongamos que tenemos la siguiente estructura de ficheros

```
src/
├── utils/
│ ├── formatDate.ts
│ ├── parseData.ts
│ └── index.ts
```

En lugar de importar:

```
import { formatDate } from './utils/formatDate';
import { parseData } from './utils/parseData';
```

Al crear el siguiete barrel:

```
// utils/index.ts
export * from './formatDate';
export * from './parseData';
```

Podre importar en otros archivos las funciones desde el barrel de la siguiente manera:

```
import { formatDate, parseData } from './utils'
```

## Uso del Guion bajo ('\_') en parametros

```
export class ControlAuthenticatingStub implements ForControlAuthenticating {
  getAuthDetail(_email: string, _password: string): Promise<AuthDetails> {
    return Promise.resolve(authDetailsMock);
  }
```
El uso del guion bajo (`_`) al comienzo de los nombres de los parámetros en TypeScript es una convención que indica que el parámetro no se está utilizando dentro de la función. Esto puede evitar errores de compilación o advertencias que algunos compiladores o herramientas de análisis de código