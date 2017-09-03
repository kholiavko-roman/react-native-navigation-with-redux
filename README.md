To reproduce [issue 1583](https://github.com/wix/react-native-navigation/issues/1583):

```
yarn
cd android
./gradlew assembleRelease && adb install ./app/build/outputs/apk/app-release.apk
# run ReactNativeNavigationAndroidDrawerIssues on device/emulator
```

If the issue doesn't occur the first time, restart the application a few times.
