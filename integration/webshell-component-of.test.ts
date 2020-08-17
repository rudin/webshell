import makeWebshell, {
  WebshellComponentOf,
  elementDimensionsFeature,
  linkPressFeature
} from '@formidable-webview/webshell';
import WebView from 'react-native-webview';

let Webshell1: WebshellComponentOf<typeof WebView, []>;
let Webshell2: WebshellComponentOf<
  typeof WebView,
  [typeof elementDimensionsFeature]
>;
let Webshell3: WebshellComponentOf<
  typeof WebView,
  [typeof elementDimensionsFeature, typeof linkPressFeature]
>;

Webshell1 = makeWebshell(WebView);
Webshell2 = makeWebshell(
  WebView,
  elementDimensionsFeature.assemble({ tagName: 'body' })
) as WebshellComponentOf<typeof WebView, [typeof elementDimensionsFeature]>;
Webshell3 = makeWebshell(
  WebView,
  elementDimensionsFeature.assemble({ tagName: 'body' }),
  linkPressFeature.assemble({})
);

export { Webshell1, Webshell2, Webshell3 };
