import { makeWebshell } from './make-webshell';
export type {
  DOMCollectionRequest,
  DOMElementClassNameRequest,
  DOMElementIdRequest,
  DOMElementQueryRequest,
  DOMElementRequest,
  DOMElementTagNameRequest,
  DOMRect,
  DOMRectSize,
  ExtractPropsFromSpecs,
  ExtractWebHandlerSpecFromDef,
  ExtractWebHandlerSpecsFromFeature,
  ExtractWebshellFromFeatClass,
  FeatureDefinition,
  MinimalWebViewProps,
  PropDefinition,
  PropsSpecs,
  WebHandle,
  WebHandlerDefinition,
  WebHandlersSpecs,
  WebjsContext,
  WebshellComponent,
  WebshellInvariantProps,
  WebshellProps
} from './types';
export * from './FeatureBuilder';
export * from './Feature';
export * from './features';
export * from './hooks/autoheigh';
export { makeWebshell };
export default makeWebshell;
