# AIUSA Spinning Wheel Lightbox

A Spinning Wheel Lightbox for Amnesty International

## How to use

1. Add the script below to your website:

```html
<script
  type="text/javascript"
  src="https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1839/aiusa-spinning-wheel.js"
  defer
></script>
```

2. You need to add the `spinnning-wheel` tag where you want to display the lightbox:

```html
<spinnning-wheel href="https://donate.amnestyusa.org/page/92978/donate/1" />
```

You have some options to customize the lightbox. See below for more information.

## Attributes

The lightbox has two main attributes:

- `href` - **REQUIRED** The URL of the page where the user will be redirected when clicking on the donate button. If not specified, the lightbox will not render and will throw an error in the console.
- `target` - The target of the donation button. If not specified, the target URL will open in the same window. Possible values are `_blank` and `_self`.

## Lightbox Options

Every option can be set as a data attribute on the `spinnning-wheel` tag.

- **logo**: The logo of the lightbox. If not specified, the default logo will be used.
- **title**: The title of the lightbox. If not specified, we will use "GIVING TUESDAY SURPRISE OFFER".
- **paragraph**: The paragraph of the lightbox. If not specified, we will use "Help protect human rights around the world: Unlock a special matching offer this Giving Tuesday by spinning the wheel!".
- **spinButtonLabel**: The label of the spin button. If not specified, we will use "SPIN!".
- **donateButtonLabel**: The label of the donate button. If not specified, we will use "DONATE WITH 10X MATCH!".

**Example of the `spinnning-wheel` tag with all options set:**

```html
<spinnning-wheel
  href="https://donate.amnestyusa.org/page/92978/donate/1"
  target="_blank"
  data-logo="https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1839/logo-spinning-wheel.svg"
  data-title="This is my Test Title"
  data-paragraph="This is my Test Paragraph"
  data-spin-button-label="RUN!"
  data-donate-button-label="GIVE WITH 10X MATCH!"
/>
```

## Development

Your js code must be on the `src/spinnning-wheel.ts` file. Styling changes must be on `src/sass`.

## Install Dependencies

1. `npm install`

## Deploy

1. `npm run build` - Builds the project

It's going to create a `dist` folder, where you can get the `en-spinnning-wheel-embed.js` file and publish it.

## Hot Module Reloading

1. `npm run start` - Starts the server with hot reloading enabled

## Demo

https://apps.4sitestudios.com/fernando/aiusa/spinnning-wheel/

It's currently published on AIUSA EN Account:  
https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1839/aiusa-spinning-wheel.js
