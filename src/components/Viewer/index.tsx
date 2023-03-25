/*
 * @Author: zulezhe
 * @Date: 2022-11-01 16:34:06
 * @LastEditors: zulezhe
 * @LastEditTime: 2022-11-01 17:31:48
 * @Path: https://gitee.com/zulezhe/
 * @Description:
 */
/*
 * @Author: zulezhe
 * @Date: 2022-11-01 16:34:06
 * @LastEditors: zulezhe
 * @LastEditTime: 2022-11-01 17:05:35
 * @Path: https://gitee.com/zulezhe/
 * @Description:
 */
import React, { useEffect, useRef } from "react";
import { initView } from "./viewer";
function Viewer() {
  const style = {
    width: "100%",
    height: "100%",
  };
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log(containerRef);
    initView(document.getElementById("cesiumContainer"));
  }, []);
  return <div ref={containerRef} id="cesiumContainer" style={style}></div>;
}
export default Viewer;
