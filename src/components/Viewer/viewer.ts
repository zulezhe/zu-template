import {
  Viewer as CesiumViewer,
  UrlTemplateImageryProvider,
  SingleTileImageryProvider,
  CesiumTerrainProvider,
} from "cesium";
export function initView(el) {
  const viewer = new CesiumViewer(el, {
    infoBox: false,
    imageryProvider: new SingleTileImageryProvider({
      url: "./world.png",
    }),
    baseLayerPicker: false,
  });
}
