/*
 * @Author: zulezhe
 * @Date: 2022-11-01 14:35:57
 * @LastEditors: zulezhe
 * @LastEditTime: 2022-11-01 16:49:40
 * @Path: https://gitee.com/zulezhe/
 * @Description:
 */
import { useState } from "react";
import ViewerCom from "@/components/Viewer";
function App() {
  const [count, setCount] = useState(0);

  return <ViewerCom />;
}

export default App;
