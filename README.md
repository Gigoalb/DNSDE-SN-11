# DNSDE-SN-11
CI/CD CLOUD ECONÓMICO PARA APLICACIONES WEB CON GITHUB ACTIONS Y HOSTING GRATUITO

| ID | Caso de Prueba | Resultado | Commit SHA |
|:---|:--- |:---:|:---:|
| 01 | Estructura inicial | ✅ Pasó | `95298ba` |


DNSDE-SN-11 - CI/CD Pipeline

## Descripción del Proyecto DNSDE-SN-11
Esta es una aplicación web construida con **Express** (Node.js) diseñada para demostrar un flujo de trabajo DevOps de bajo costo pero alta eficiencia. Implementa pruebas automatizadas con Jest y análisis de cobertura de código.

## Comandos Locales
Para trabajar en este proyecto, se debe asegurar de tener Node.js 18 o superior instalado:
* **Instalar dependencias:** `npm install`
* **Ejecutar en desarrollo:** `npm run dev`
* **Correr tests:** `npm test`
* **Revisar linter:** `npm run lint`

## ⚙️ Cómo funciona el Pipeline (CI/CD)
El flujo está automatizado mediante GitHub Actions (`CI Advanced`):

1. **Trigger:** Se activa automáticamente al hacer `push` a `main`, `dev` o al abrir un `pull_request`.
2. **Entorno:** Levanta un contenedor con Ubuntu y Node.js 18.
3. **Instalación:** Ejecuta `npm install` para preparar el entorno.
4. **Validación:** Ejecuta `npm test`. El pipeline fallará si la cobertura de código es inferior al 50% en ramas, funciones o líneas.
5. **Despliegue:** Tras pasar las pruebas, Render detecta el cambio en `main` y realiza el despliegue automático (CD).

## Seguridad y Variables
El proyecto utiliza variables de entorno para proteger información sensible. Consulta la sección de "Secrets" en el Informe Técnico para la configuración necesaria.