import {
  ViroTrackingReason,
  ViroTrackingState,
  ViroTrackingStateConstants,
} from '@viro-community/react-viro';

export const handleTrackingUpdated = (
  state: ViroTrackingState,
  reason: ViroTrackingReason,
) => {
  console.log('onInitialized', state, reason);
  if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
    console.log('TRACKING_NORMAL', reason);
  } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
    // Handle loss of tracking
    console.log('TRACKING_UNAVAILABLE', reason);
  } else if (state === ViroTrackingStateConstants.TRACKING_LIMITED) {
    // Handle limited tracking state
    console.log('TRACKING_LIMITED', reason);
  } else {
    console.log('UNKNOWN', state, reason);
  }
};
