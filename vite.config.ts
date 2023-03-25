/*
 * @Author: zulezhe
 * @Date: 2022-11-01 14:35:57
 * @LastEditors: zulezhe
 * @LastEditTime: 2022-11-01 14:40:31
 * @Path: https://gitee.com/zulezhe/
 * @Description: 
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cesium from 'vite-plugin-cesium'; // 引入插件
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 4001,
    cors: true,
  },
  plugins: [react(),cesium()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // 设置 `@` 指向 `src` 目录
    },
  },
});
