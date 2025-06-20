<template>
  <div id="map" ref="mapRef"></div>
</template>
<script setup>
import L from "leaflet";
import "leaflet.chinatmsproviders";
import { mainStore } from "@/store";
const MapKey = "7c366a612c073b269a2a543f8bbae0d8";
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
    center: L.latLng(31.086444, 121.734942), //注意和其他地图经纬度格式区别
    zoom: 17, //初始缩放值
    attributionControl: false,
    zoomControl: false,
  });

  //卫星地图
  let satelliteTileLayer = L.layerGroup([
    L.tileLayer.chinaProvider("TianDiTu.Satellite.Map", {
      key: MapKey, //你的地图key
    }),
    L.tileLayer.chinaProvider("TianDiTu.Satellite.Annotion", {
      key: MapKey, //你的地图key
    }),
  ]);
  satelliteTileLayer.addTo(map);

  L.marker([50.5, 30.5]).addTo(map);
};
</script>

<style scoped lang="scss">
#map {
  height: 600px;
  :deep(img) {
    border-radius: 0;
  }
}
</style>
