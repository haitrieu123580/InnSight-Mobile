package com.hthtrieu123.innsightmobile;

import android.os.Build;
import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;

import expo.modules.ReactActivityDelegateWrapper;
import com.reactnativenavigation.NavigationActivity;

public class MainActivity extends NavigationActivity  {
  // @Override
  // protected void onCreate(Bundle savedInstanceState) {
  //   setTheme(R.style.AppTheme);
  //   super.onCreate(null);
  // }

  // @Override
  // protected String getMainComponentName() {
  //   return "innsightmobile";
  // }


  // @Override
  // protected ReactActivityDelegate createReactActivityDelegate() {
  //   return new ReactActivityDelegateWrapper(this, BuildConfig.IS_NEW_ARCHITECTURE_ENABLED, new DefaultReactActivityDelegate(
  //       this,
  //       getMainComponentName(),
  //       DefaultNewArchitectureEntryPoint.getFabricEnabled()));
  // }

  // @Override
  // public void invokeDefaultOnBackPressed() {
  //   if (Build.VERSION.SDK_INT <= Build.VERSION_CODES.R) {
  //     if (!moveTaskToBack(false)) {
  //       super.invokeDefaultOnBackPressed();
  //     }
  //     return;
  //   }
  //   super.invokeDefaultOnBackPressed();
  // }
}
