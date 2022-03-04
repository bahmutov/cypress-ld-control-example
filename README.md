# LaunchDarkly SDK for React - Example app

This is a simple SPA demonstrating `launchdarkly-react-client-sdk`.

## Installation

```sh
yarn
```

## Running the example

Follow these steps to run the example app:

* In app.js, set `clientSideID` to your own Client-side ID. You can find
this in your LaunchDarkly portal under Account settings / Projects.

* Create a flag called `dev-test-flag` in your project. Make sure you
make the flag available to the client-side SDK.

* You should now be able to start the app by doing:

    ```sh
    yarn start
    ```

* Toggle the killswitch for `dev-test-flag` in the dashboard and the
app should respond without a browser refresh.
