import * as React from 'react';
import Ersatz from '@formidable-webview/ersatz';
import makeErsatzTesting from '@formidable-webview/ersatz-testing';
import { render } from '@testing-library/react-native';
import { View } from 'react-native';
import dummyHelloScript from './feat/DummyHello.webjs';
import dummyFailingScript from './feat/DummyFailing.webjs';
import dummyOptionScript from './feat/DummyOption.webjs';
import dummyHandleridScript from './feat/DummyHandlerid.webjs';
import dummyReceiverScript from './feat/DummyReceiver.webjs';
import { makeWebshell } from '../make-webshell';
import { FeatureBuilder } from '../FeatureBuilder';
import { MinimalWebViewProps, WebHandle } from '../types';
import { act } from 'react-test-renderer';

const { waitForErsatz } = makeErsatzTesting(Ersatz);

const DummyWebView = React.forwardRef(({}: MinimalWebViewProps, ref) => {
  React.useImperativeHandle(ref, () => ({
    injectJavaScript() {}
  }));
  return <View ref={ref as any} />;
});

const HelloFeature = new FeatureBuilder({
  script: dummyHelloScript,
  featureIdentifier: 'test.hello',
  defaultOptions: {}
})
  .withandlerProp('onDOMDummyHello')
  .build();

const FailingFeature = new FeatureBuilder({
  script: dummyFailingScript,
  featureIdentifier: 'test.fail',
  defaultOptions: {}
})
  .withandlerProp('onDOMDummyFailure')
  .build();

const OptionFeature = new FeatureBuilder({
  script: dummyOptionScript,
  featureIdentifier: 'test.option',
  defaultOptions: {}
})
  .withandlerProp<{ foo: string }, 'onDOMDummyOption'>('onDOMDummyOption')
  .build();

const HandlerIdFeature = new FeatureBuilder({
  script: dummyHandleridScript,
  featureIdentifier: 'test.handlerid',
  defaultOptions: {}
})
  .withandlerProp('onDOMDummyOption', 'hi')
  .build();

const ReceiverFeature = new FeatureBuilder({
  script: dummyReceiverScript,
  featureIdentifier: 'test.receiver',
  defaultOptions: {}
})
  .withandlerProp<string, 'onWebFeedback'>('onWebFeedback')
  .withWebHandler<string, 'hello'>('hello')
  .build();

describe('Webshell component', () => {
  it('sould mount without error', () => {
    const Webshell = makeWebshell(DummyWebView, new HelloFeature());
    const { UNSAFE_getByType } = render(<Webshell />);
    const webshell = UNSAFE_getByType(Webshell);
    expect(webshell).toBeTruthy();
  });
  it('should handle feature messages', async () => {
    const onDOMDummyHello = jest.fn();
    const Webshell = makeWebshell(Ersatz, new HelloFeature());
    await waitForErsatz(
      render(
        <Webshell webshellDebug={false} onDOMDummyHello={onDOMDummyHello} />
      )
    );
    expect(onDOMDummyHello).toHaveBeenCalledWith('Hello world!');
  });
  it('should handle feature failures', async () => {
    const onDOMDummyFailure = jest.fn();
    const onFailure = jest.fn();
    const Webshell = makeWebshell(Ersatz, new FailingFeature());
    await waitForErsatz(
      render(
        <Webshell
          webshellDebug={false}
          onDOMDummyFailure={onDOMDummyFailure}
          onDOMError={onFailure}
        />
      )
    );
    expect(onFailure).toHaveBeenCalledWith(
      FailingFeature.identifier,
      'I am a dummy feature failing consistently!'
    );
  });
  it('should pass options to feature scripts', async () => {
    const onDOMDummyOption = jest.fn();
    const Webshell = makeWebshell(Ersatz, new OptionFeature({ foo: 'bar' }));
    await waitForErsatz(
      render(
        <Webshell webshellDebug={false} onDOMDummyOption={onDOMDummyOption} />
      )
    );
    expect(onDOMDummyOption).toHaveBeenCalledWith({ foo: 'bar' });
  });
  it('should disambiguate between handlerIds', async () => {
    const onHandlerIdDummyOption = jest.fn();
    const Webshell = makeWebshell(Ersatz, new HandlerIdFeature());
    await waitForErsatz(
      render(
        <Webshell
          webshellDebug={false}
          onDOMDummyOption={onHandlerIdDummyOption}
        />
      )
    );
    expect(onHandlerIdDummyOption).toHaveBeenCalledWith('Hello world!');
  });
  it('should support receiving messages', async () => {
    const onWebFeedback = jest.fn();
    const feature = new ReceiverFeature();
    const Webshell = makeWebshell(Ersatz, feature);
    const webHandle = React.createRef<WebHandle>();
    await waitForErsatz(
      render(
        <Webshell
          webHandle={webHandle}
          webshellDebug={false}
          onWebFeedback={onWebFeedback}
        />
      )
    );
    act(() => {
      webHandle.current?.postMessageToWeb(feature, 'hello', 'Hello world!');
    });
    expect(onWebFeedback).toHaveBeenCalledWith('Hello world!');
  });
  it('should keep support for onMessage and injectedJavaScript', async () => {
    const onDOMDummyOption = jest.fn();
    const onMessage = jest.fn();
    const injectedJavaScript = "window.ReactNativeWebView.postMessage('test');";
    const Webshell = makeWebshell(Ersatz, new OptionFeature({ foo: 'bar' }));
    await waitForErsatz(
      render(
        <Webshell
          onDOMDummyOption={onDOMDummyOption}
          injectedJavaScript={injectedJavaScript}
          onMessage={onMessage}
        />
      )
    );
    expect(onDOMDummyOption).toHaveBeenCalledWith({ foo: 'bar' });
    expect(onMessage).toHaveBeenCalledTimes(1);
  });
  it('it should provide a reference to the inner WebView', async () => {
    const Webshell = makeWebshell(Ersatz);
    const ersatzRef = React.createRef<Ersatz>();
    await waitForErsatz(
      render(<Webshell webshellDebug={false} ref={ersatzRef} />)
    );
    expect(ersatzRef.current).toBeInstanceOf(Ersatz);
  });
});
