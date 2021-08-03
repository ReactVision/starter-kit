# AR Driving Car Demo

Original code from here:
<a href="https://github.com/viromedia/viro/tree/master/js/ARDrivingCarDemo">
</a>

## Setup Instructions:
1. In the app root directory, open `index.js` and change the import App line to read
```
import App from './code-samples/ARDrivingCarDemo/App';
```

2. Start `npm` packager server and run sample

## Notes:

- React Native w/ Android doesn't support multi-touch across multiple buttons, so you can only accelerate, decelerate or turn the steering wheel individually. (The experience works better on iOS)

