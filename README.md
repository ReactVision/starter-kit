# Viro Starter Kit

This is a blank React Native project setup with Viro.

## Installation

1. `git clone https://github.com/ViroCommunity/starter-kit.git`
2. `cd starter-kit`
3. `npm install`
4. `npx pod-install` (iOS)
5. `npx react-native run-android` or `npx react-native run-ios`

NOTE: The variant arguments are not needed for debug or release.

## How to Install Viro in an existing project?

First, you have to install the latest version of viro, for now, we will install it from the repo instead of a npm package.

`npm install --save git+https://github.com/virocommunity/viro`

### Linking (iOS)

1. Navigate to the ios folder and open your Podfile.
2. Behind the `use_react_native!(:path => config["reactNativePath"])` line add the following lines:

```
pod 'ViroReact', :path => '../node_modules/@viro-community/ios/'
pod 'ViroKit_static_lib', :path => '../node_modules/@viro-community/ios/dist/ViroRenderer/static_lib'
```

3. Add `NSCameraUsageDescription` and `NSPhotoLibraryAddUsageDescription` to your Info.plist file.

4. Run `pod install` and you're done.

### Linking (Android)
#### build.gradle (Project)
Here, we will bump our minimum SDK version to level 24 and the gradle plugin to the latest as follow:
```
buildscript{
  ext{
    ...
    minSdkVersion = 24
    ...
  }
  ...
  dependencies{
    classpath('com.android.tools.build:gradle:4.1.1')
  }
}
```

#### build.gradle (app)
Look for the dependencies section and after `implementation "com.facebook.react:react-native:+" // From node_modules` add the following lines:

```
implementation project(':gvr_common')
implementation project(':arcore_client')
implementation project(path: ':react_viro')
implementation project(path: ':viro_renderer')
implementation 'com.google.android.exoplayer:exoplayer:2.7.1'
implementation 'com.google.protobuf.nano:protobuf-javanano:3.0.0-alpha-7'
```

#### settings.gradle
Here we will add the following code so Android can find the Viro libraries:

```
include ':react_viro', ':arcore_client', ':gvr_common', ':viro_renderer'
project(':arcore_client').projectDir = new File('../node_modules/react-viro/android/arcore_client')
project(':gvr_common').projectDir = new File('../node_modules/react-viro/android/gvr_common')
project(':viro_renderer').projectDir = new File('../node_modules/react-viro/android/viro_renderer')
project(':react_viro').projectDir = new File('../node_modules/react-viro/android/react_viro')
```

#### gradle-wrapper.properties
As we set the Gradle plugin to the latest, here we will set the Gradle complement to the latest as well.

`distributionUrl=https\://services.gradle.org/distributions/gradle-6.5-bin.zip`

#### MainApplication.java
Add the next line of code at the end of the import list:

`import com.viromedia.bridge.ReactViroPackage;`

After `List<ReactPackage> packages = new PackageList(this).getPackages();` be sure to add the following line:

`packages.add(new ReactViroPackage(ReactViroPackage.ViroPlatform.valueOf("AR")));`

NOTE: You can replace the "AR" string for one of the following options depending on your needs:
"GVR", "OVR_MOBILE", "AR".

#### AndroidManifest.xml
Be sure to follow [these instructions](https://docs.viromedia.com/docs/integrating-existing-projects-android#updating-your-androidmanifestxml) and also, the following lines so you have screenshot, video recording and compatibility with the more devices as possible:

```
<manifest ... xmlns:tools="http://schemas.android.com/tools">
  ...
  <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
  <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
  <uses-feature android:name="android.hardware.camera" />
  <uses-feature android:name="android.hardware.camera.autofocus" android:required="false" tools:replace="required"/>
  <uses-feature android:glEsVersion="0x00030000" android:required="false" tools:node="remove" tools:replace="required" />
  <uses-feature android:name="android.hardware.sensor.accelerometer" android:required="false" tools:replace="required" />
  <uses-feature android:name="android.hardware.sensor.gyroscope" android:required="false" tools:replace="required" />
  ...
  <application ...>
    ...
    <meta-data android:name="com.google.ar.core" android:value="required" />
  </application>
</manifest>
```

# Need help?
[Reach us in Discord.](https://discord.gg/YfxDBGTxvG)
