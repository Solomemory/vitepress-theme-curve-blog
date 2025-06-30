<template>
  <div class="footer-print">
    <div id="map" ref="mapRef"></div>
  </div>
</template>
<script setup>
import L from "leaflet";
import "leaflet.chinatmsproviders";
import { mainStore } from "@/store";
const { theme } = useData();
const { leaflet } = theme.value;
let map = null;
const mapRef = ref(null);
const store = mainStore();
onMounted(() => {
  watch(
    () => store.loadingStatus,
    () => {
      initMap();
    },
  );
});

onUnmounted(() => {
  map && map.remove();
});
const initMap = () => {
  map = L.map("map", {
    minZoom: 1, //最小缩放值
    maxZoom: 18, //最大缩放值
    center: L.latLng(34.74161249883172, 103.75488281250001), //注意和其他地图经纬度格式区别
    zoom: 5, //初始缩放值
    attributionControl: false,
    zoomControl: false,
  });

  //卫星地图
  const satelliteTileLayer = L.layerGroup([
    L.tileLayer.chinaProvider("TianDiTu.Satellite.Map", {
      key: leaflet.mapKey, //你的地图key
    }),
    L.tileLayer.chinaProvider("TianDiTu.Satellite.Annotion", {
      key: leaflet.mapKey, //你的地图key
    }),
  ]);
  satelliteTileLayer.addTo(map);

  const marker = L.marker([50.5, 30.5]).addTo(map);

  marker.bindPopup(`<p>Hello world!<br />This is a nice popup.</p>`).openPopup();

  map.on("click", (e) => {
    console.log(e);
  });
};
</script>

<style scoped lang="scss">
.footer-print {
  #map {
    height: calc(100vh - 200px);
    :deep(img) {
      border-radius: 0;
    }
  }
}
</style>
