# DNSDE-SN-11
CI/CD CLOUD ECONÓMICO PARA APLICACIONES WEB CON GITHUB ACTIONS Y HOSTING GRATUITO

| ID | Caso de Prueba | Resultado | Commit SHA |
|:---|:--- |:---:|:---:|
| 01 | Estructura inicial | ✅ Pasó | `95298ba` |


DNSDE-SN-11 - CI/CD Pipeline

## Descripción
Este proyecto es una APLICACION WEB ECONÓMICA CON GITHUB ACTIONS Y HOSTING GRATUITO desarrollada en Node.js que implementa un pipeline completo de Integración y Despliegue Continuo (CI/CD) utilizando GitHub Actions y Render.

## Cómo correr el Pipeline
1. **Push a la rama `main`**: Cualquier cambio subido disparará automáticamente los tests.
2. **GitHub Actions**: Revisa la pestaña "Actions" para ver el progreso de los tests y el linter.
3. **Deploy**: Una vez superadas las pruebas, el código se despliega automáticamente en Render.

## Variables de Entorno
Es necesario configurar los `Secrets` en GitHub y las `Environment Variables` en Render (ver Informe Técnico para más detalle).
