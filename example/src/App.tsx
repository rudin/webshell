import * as React from 'react';
import Constants from 'expo-constants';
import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, ScrollView, View, LayoutRectangle } from 'react-native';
import makeWebshell, {
  forceResponsiveViewportFeature,
  handleHTMLDimensionsFeature,
  forceElementSizeFeature,
  handleHashChangeFeature,
  handleLinkPressFeature,
  useAutoheight,
  LinkPressTarget,
  HashChangeEvent
} from '@formidable-webview/webshell';
import WebView from 'react-native-webview';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { WebViewSource } from 'react-native-webview/lib/WebViewTypes';
import {
  TOP_TEXT_HEIGHT,
  BOTTOM_SHEET_COLLAPSED_OFFSET,
  STAT_HEIGHT
} from './styles';
import { Stats } from './Stats';
import { Theme } from 'react-native-paper/lib/typescript/src/types';
import { useControls } from './controls';
import introduction from './introduction.html';
import { Evidence } from './Evidence';

const sourceMap: Record<string, WebViewSource> = {
  welcome: { html: introduction },
  wikipedia: { uri: 'https://en.wikipedia.org/wiki/React_Native' },
  firefox: {
    uri:
      'https://support.mozilla.org/en-US/kb/get-started-firefox-overview-main-features'
  },
  expo: { uri: 'https://docs.expo.io/' },
  washington: { uri: 'https://www.washingtonpost.com/' },
  fox: { uri: 'https://www.foxnews.com/' },
  nonresponsive: {
    uri: 'https://dequeuniversity.com/library/responsive/1-non-responsive#'
  },
  nsfw: {
    uri: 'https://motherfuckingwebsite.com/'
  }
};

const theme: Theme = DefaultTheme;

export default function App() {
  const [layout, setLayout] = React.useState<LayoutRectangle | null>(null);
  const scrollViewRef = React.useRef<ScrollView>(null);
  const {
    allowWebViewNavigation,
    allowPinchToZoom,
    animated,
    renderSheet,
    showEvidence,
    showConsole,
    instance,
    paddingHz,
    sourceName,
    resizeMethod
  } = useControls({ scrollViewRef });
  const source = sourceMap[sourceName];
  const {
    autoheightWebshellProps,
    resizeImplementation,
    contentSize,
    computingState
  } = useAutoheight<WebshellProps>({
    webshellProps: {
      source,
      style: styles.autoheight,
      webshellDebug: true
    },
    initialHeight: 200,
    animated
  });
  // We are using a memo to change dynamically the build of the Webshell
  // component with different features and options. Normally, we would rather
  // create this component statically.
  const Webshell = React.useMemo(
    () =>
      makeWebshell(
        WebView,
        handleLinkPressFeature.assemble({
          preventDefault: !allowWebViewNavigation
        }),
        handleHTMLDimensionsFeature.assemble({
          forceImplementation: resizeMethod === 'auto' ? false : resizeMethod,
          deltaMin: 0
        }),
        handleHashChangeFeature.assemble({ shouldResetHashOnEvent: true }),
        forceResponsiveViewportFeature.assemble({
          maxScale: allowPinchToZoom ? 1.5 : 1
        }),
        forceElementSizeFeature.assemble({ target: 'body' })
      ),
    [allowWebViewNavigation, allowPinchToZoom, resizeMethod]
  );
  type WebshellProps = React.ComponentProps<typeof Webshell>;
  const textSpacingTop = showEvidence ? TOP_TEXT_HEIGHT : 0;
  const onDOMLinkPress = React.useCallback(
    (target: LinkPressTarget) => {
      if (target.scheme.match(/^https?$/)) {
        if (!allowWebViewNavigation) {
          WebBrowser.openBrowserAsync(target.uri);
        } else {
          scrollViewRef.current?.scrollTo({
            y: textSpacingTop,
            animated: true
          });
        }
      }
    },
    [allowWebViewNavigation, textSpacingTop]
  );
  const onLayout = React.useCallback(
    (e) => setLayout(e.nativeEvent.layout),
    []
  );
  const onDOMHashChange = React.useCallback(
    (e: HashChangeEvent) =>
      scrollViewRef.current?.scrollTo({
        y: e.targetElementBoundingRect.top + textSpacingTop,
        animated: true
      }),
    [textSpacingTop]
  );
  const webshellContainerStyle = {
    paddingHorizontal: paddingHz,
    alignSelf: 'stretch' as 'stretch'
  };
  React.useEffect(() => {
    setLayout(null);
  }, [instance]);
  React.useEffect(() => {
    scrollViewRef.current?.scrollTo({ y: textSpacingTop, animated: true });
  }, [source, textSpacingTop]);
  const dynamicContainerStyle = {
    paddingBottom: BOTTOM_SHEET_COLLAPSED_OFFSET,
    paddingTop: showConsole ? STAT_HEIGHT : 0
  };
  return (
    <PaperProvider theme={theme}>
      <View style={styles.root}>
        <ScrollView
          key={instance}
          ref={scrollViewRef}
          pinchGestureEnabled={false}
          disableScrollViewPanResponder
          pointerEvents="box-none"
          horizontal={false}
          contentContainerStyle={[styles.container, dynamicContainerStyle]}>
          {showEvidence ? <Evidence webshellPosition="below" /> : null}
          <View style={webshellContainerStyle}>
            <Webshell
              onDOMLinkPress={onDOMLinkPress}
              onDOMHashChange={onDOMHashChange}
              onLayout={onLayout}
              {...autoheightWebshellProps}
            />
          </View>
          {showEvidence ? <Evidence webshellPosition="above" /> : null}
        </ScrollView>
      </View>
      {renderSheet()}
      <Stats
        display={showConsole}
        contentSize={contentSize}
        layout={layout}
        source={source}
        resizeImplementation={resizeImplementation}
        computingState={computingState}
      />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  autoheight: {
    backgroundColor: 'transparent'
  },
  container: {
    padding: 0,
    margin: 0,
    alignItems: 'center',
    paddingBottom: BOTTOM_SHEET_COLLAPSED_OFFSET
  },
  root: {
    flexGrow: 1,
    marginTop: Constants.statusBarHeight
  }
});
