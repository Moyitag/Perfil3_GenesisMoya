# Perfil 3 - Desarrollo de componentes para dispositivos móviles

Aplicación móvil desarrollada con React Native y Expo para la evaluación del Módulo 5 del Instituto Técnico Ricaldone.

## Datos del estudiante

- **Nombre:** Genesis Moya
- **Carnet:** 20240099
- **Sección y grupo:** Sección A, Grupo 2

## Enlaces

- **Video demostrativo:** https://drive.google.com/file/d/10AJ3FoeQ4JVdiRIfsmSXH0IF5dDArPEK/view?usp=sharing
- **Descargar APK:** https://expo.dev/accounts/genesismoya/projects/autoevaluacion2/builds/5e887e66-18d2-42a8-abc3-c32925827f17

## Descripción

La aplicación cuenta con dos pantallas:

1. **Pantalla de presentación:** muestra el nombre, carnet, sección y grupo del estudiante, y un botón para navegar a la segunda pantalla.
2. **Pantalla de la API:** consume la API de [nombre de la API, por ejemplo Rick and Morty] y muestra una lista de tarjetas con título/nombre, imagen y descripción.

También incluye un icono personalizado y un splash screen personalizado.

## Tecnologías

- React Native con Expo
- React Navigation
- Custom Hooks para la lógica y el consumo de la API
- Componentes reutilizables (Card, indicador de carga)
- API: [URL de la API que usaste]

## Estructura del proyecto

- `components/`: componentes reutilizables (Card, etc.)
- `hooks/`: custom hooks (consumo de la API)
- `screens/`: pantallas de la aplicación
- `navigation/`: configuración de React Navigation

## Ejecución en modo desarrollo

```bash
npm install
npx expo start
```

## Generación del APK

El APK se generó con EAS Build:

```bash
eas build -p android --profile preview
```
