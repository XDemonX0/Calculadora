# Para crear el APK hacer los siguientes pasos:

1. instalar el EAS CLI esto es de EXPO
```npm install --global eas-cli```

2. Instalar una libreria de EXPO
```npx expo install expo-updates```

3. Inicializar el servicio de EAS
``` eas init```

4. Debes crearte una cuenta en EXPO porque te va a pedir en el paso anterior

5. Una vez tenga el servicio con tus credenciales ejecutandose y a la carpeta del proyecto y abir una terminar

6. En la terminal ejecutar el siguiente comando:
```eas build:configure```

7. Selecciona la opción de **All**

8. Esto crea un archivo **eas.json** dentro de este añade lo siguiente dentro **"preview"** 
```javascript
  "ios": {
    "simulator": true
  },
  "android": {
    "buildType": "apk"
  }
```

9. No te olvides de guardar los cambios antes de ejecutar el comando:
```eas build -p android --profile preview```

10. Esperas a que termine y esto genera un Link donde puedes descargar el APK de tu aplicación

## Te dejo el link del video

https://www.youtube.com/watch?v=FBv4PrW5wqY