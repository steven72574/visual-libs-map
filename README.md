# 视觉领域库地图 · Visual Graphics Libraries Map

> 97 个库，14 个分类，一张图看完「造画面 → 写画面 → 动起来 → 出成片」的整条链。
> 数据快照 **2026-11-12**，★ 数与最后提交时间全部来自 GitHub API，可复现。

![libraries](https://img.shields.io/badge/libraries-97-1f6feb) ![categories](https://img.shields.io/badge/categories-14-2ea043) ![snapshot](https://img.shields.io/badge/snapshot-2026--11--12-8957e5) ![license](https://img.shields.io/badge/license-MIT%20%2B%20CC%20BY%204.0-lightgrey)

---

## 先看地图

```
① 造画面          ② 写画面         ③ 动起来         ④ 出成片
引擎 / 渲染器   →   shader 工具  →   动效 / 时间轴 →  合成 / 编码
three.js            Book of Shaders   GSAP            FFmpeg
ogl / regl          lygia            Remotion         ffmpeg.wasm
PixiJS              msdfgen          Motion           sharp
```

这条链上只有两种东西：**引擎**（给你一个世界）和**工具**（给你一个能力）。
大多数人的问题不是「库不够」，而是**在错误的那一层找答案**——想调画面质感却去换引擎，想加动效却去写 shader。

## 怎么读这张表

| 维度 | 说明 |
|---|---|
| **★** | 关注度，不是质量。`ogl` 只有 4.7k ★，照样撑起一部 2160 帧的 3D 短片；`excalidraw` 13 万 ★，但它是应用不是库。 |
| **最后提交** | 活跃度。标 ⚠️ 的是超过一年没有代码提交的，能用但别指望新特性。 |
| **一句话** | 只写「什么时候该选它」，不写功能清单。 |

更新时间 2026-11-12。★ 排序为分类内降序。

---

## 1. Web 渲染引擎与薄封装

| 库 | ★ | 语言 | 什么时候选它 |
|---|---:|---|---|
| [mrdoob/three.js](https://github.com/mrdoob/three.js) | 118,229 | JavaScript | 默认答案，覆盖 80% 需求 |
| [pmndrs/react-three-fiber](https://github.com/pmndrs/react-three-fiber) | 33,675 | TypeScript | 用 React 的方式写 3D |
| [BabylonJS/Babylon.js](https://github.com/BabylonJS/Babylon.js) | 26,330 | TypeScript | 游戏级功能 + 可视化编辑器 |
| [google/filament](https://github.com/google/filament) | 20,740 | C++ | 手机端写实 PBR，性能优先 |
| [gfx-rs/wgpu](https://github.com/gfx-rs/wgpu) | 18,524 | Rust | Rust 的 WebGPU 实现 |
| [aframevr/aframe](https://github.com/aframevr/aframe) | 17,699 | JavaScript | 用 HTML 标签搭 VR |
| [bkaradzic/bgfx](https://github.com/bkaradzic/bgfx) | 17,636 | C++ | 跨平台渲染抽象层 |
| [playcanvas/engine](https://github.com/playcanvas/engine) | 17,274 | JavaScript | 团队协作，浏览器里搭场景 |
| [floooh/sokol](https://github.com/floooh/sokol) | 10,429 | C | 单头文件图形库 |
| [pmndrs/drei](https://github.com/pmndrs/drei) | 10,150 | JavaScript | r3f 的组件全家桶 |
| [google/model-viewer](https://github.com/google/model-viewer) | 8,328 | TypeScript | 一行标签放一个可转模型 |
| [tengbao/vanta](https://github.com/tengbao/vanta) | 7,366 | JavaScript | 三行代码给网页加 3D 背景 ⚠️ |
| [regl-project/regl](https://github.com/regl-project/regl) | 5,597 | JavaScript | 函数式的薄封装 |
| [oframe/ogl](https://github.com/oframe/ogl) | 4,754 | JavaScript | 自己写 shader 的极薄封装 ⚠️ |
| [greggman/twgl.js](https://github.com/greggman/twgl.js) | 3,033 | JavaScript | 边用边学原生 WebGL |
| [pissang/claygl](https://github.com/pissang/claygl) | 2,867 | JavaScript | 国产 Web3D 引擎 |
| [martinlaxenaire/curtainsjs](https://github.com/martinlaxenaire/curtainsjs) | 1,831 | JavaScript | 把 DOM 图片变成 shader 平面 ⚠️ |
| [evanw/lightgl.js](https://github.com/evanw/lightgl.js) | 1,573 | JavaScript | 极简，适合读源码（已停更） ⚠️ |

## 2. Shader 工具链

| 库 | ★ | 语言 | 什么时候选它 |
|---|---:|---|---|
| [taichi-dev/taichi](https://github.com/taichi-dev/taichi) | 28,457 | C++ | Python 写高性能图形与物理计算 |
| [gpujs/gpu.js](https://github.com/gpujs/gpu.js) | 15,526 | JavaScript | 用 JS 写 GPU 计算，不碰 GLSL |
| [patriciogonzalezvivo/thebookofshaders](https://github.com/patriciogonzalezvivo/thebookofshaders) | 7,074 | GLSL | 学 shader 的圣经（书） |
| [patriciogonzalezvivo/glslViewer](https://github.com/patriciogonzalezvivo/glslViewer) | 5,356 | C++ | 终端里实时跑 GLSL |
| [Chlumsky/msdfgen](https://github.com/Chlumsky/msdfgen) | 4,966 | C++ | 文字锐利渲染的行业标准 |
| [patriciogonzalezvivo/lygia](https://github.com/patriciogonzalezvivo/lygia) | 3,485 | GLSL | shader 的标准库 |
| [protectwise/troika](https://github.com/protectwise/troika) | 1,990 | JavaScript | three.js 里渲染高质量文字 |

> 这一组被严重低估：所有引擎的画面质感上限，最后都落在你写的那几百行 GLSL 上。

## 3. 2D 画布、矢量与创意编程

| 库 | ★ | 语言 | 什么时候选它 |
|---|---:|---|---|
| [pixijs/pixijs](https://github.com/pixijs/pixijs) | 48,678 | TypeScript | 高性能 2D，WebGL 加速 |
| [fabricjs/fabric.js](https://github.com/fabricjs/fabric.js) | 31,556 | TypeScript | 可编辑画布（拖拽、缩放、选区） |
| [processing/p5.js](https://github.com/processing/p5.js) | 24,339 | JavaScript | 创意编程入门，艺术家首选 |
| [rough-stuff/rough](https://github.com/rough-stuff/rough) | 21,377 | HTML | 手绘 / 素描风线条 ⚠️ |
| [paperjs/paper.js](https://github.com/paperjs/paper.js) | 15,192 | JavaScript | 矢量路径运算（布尔、偏移） |
| [konvajs/konva](https://github.com/konvajs/konva) | 14,944 | TypeScript | 2D 场景图 + 交互 |
| [css-doodle/css-doodle](https://github.com/css-doodle/css-doodle) | 6,082 | JavaScript | 用 CSS 画生成艺术 |
| [williamngan/pts](https://github.com/williamngan/pts) | 5,365 | TypeScript | 可视化与生成艺术 |
| [mattdesl/canvas-sketch](https://github.com/mattdesl/canvas-sketch) | 5,324 | JavaScript | 生成艺术 / 版式脚手架 |

## 4. 数据可视化

| 库 | ★ | 语言 | 什么时候选它 |
|---|---:|---|---|
| [d3/d3](https://github.com/d3/d3) | 113,918 | Shell | 底层原语，天花板最高 |
| [chartjs/Chart.js](https://github.com/chartjs/Chart.js) | 67,794 | JavaScript | 最常见的图表，开箱即用 |
| [apache/echarts](https://github.com/apache/echarts) | 67,706 | TypeScript | 国内生态第一，图表最全 |
| [Leaflet/Leaflet](https://github.com/Leaflet/Leaflet) | 45,912 | JavaScript | 2D 地图事实标准 |
| [recharts/recharts](https://github.com/recharts/recharts) | 27,705 | TypeScript | React 里的图表 |
| [plotly/plotly.js](https://github.com/plotly/plotly.js) | 18,380 | JavaScript | 科学计算级图表 |
| [CesiumGS/cesium](https://github.com/CesiumGS/cesium) | 15,944 | JavaScript | 3D 地球 / 卫星轨道 |
| [visgl/deck.gl](https://github.com/visgl/deck.gl) | 14,752 | TypeScript | 十万级数据点的 GPU 叠加层 |
| [plouc/nivo](https://github.com/plouc/nivo) | 14,136 | TypeScript | 最好看的 React 图表 |
| [maplibre/maplibre-gl-js](https://github.com/maplibre/maplibre-gl-js) | 12,074 | TypeScript | Mapbox 的开源替代 |
| [vega/vega](https://github.com/vega/vega) | 12,042 | JavaScript | 声明式图表语法 |

## 5. 动效与时间轴

| 库 | ★ | 语言 | 什么时候选它 |
|---|---:|---|---|
| [3b1b/manim](https://github.com/3b1b/manim) | 96,446 | Python | 数学 / 科普动画 |
| [juliangarnier/anime](https://github.com/juliangarnier/anime) | 74,535 | JavaScript | 轻量动效，API 极简 |
| [remotion-dev/remotion](https://github.com/remotion-dev/remotion) | 72,712 | TypeScript | 用 React 写视频 |
| [motiondivision/motion](https://github.com/motiondivision/motion) | 35,091 | TypeScript | React 动效标准（原 Framer Motion） |
| [airbnb/lottie-web](https://github.com/airbnb/lottie-web) | 32,398 | JavaScript | 把 AE 动画搬进网页 ⚠️ |
| [greensock/GSAP](https://github.com/greensock/GSAP) | 30,519 | JavaScript | 时间轴控制的经典，最稳 |
| [motion-canvas/motion-canvas](https://github.com/motion-canvas/motion-canvas) | 19,788 | TypeScript | 代码驱动的动态图形 |
| [mojs/mojs](https://github.com/mojs/mojs) | 18,901 | CoffeeScript | 漂亮的微交互动效 |
| [theatre-js/theatre](https://github.com/theatre-js/theatre) | 12,979 | TypeScript | 可视化动效编辑器（2024 后停更） ⚠️ |
| [rive-app/rive-wasm](https://github.com/rive-app/rive-wasm) | 1,021 | TypeScript | 交互式矢量动画运行时 |

## 6. 图像 / 视频处理

| 库 | ★ | 语言 | 什么时候选它 |
|---|---:|---|---|
| [opencv/opencv](https://github.com/opencv/opencv) | 91,548 | C++ | 计算机视觉全家桶 |
| [FFmpeg/FFmpeg](https://github.com/FFmpeg/FFmpeg) | 67,116 | C | 一切视频编码的底层 |
| [lovell/sharp](https://github.com/lovell/sharp) | 32,840 | JavaScript | Node 里最快的图片处理 |
| [ffmpegwasm/ffmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm) | 17,955 | C | 浏览器里跑 FFmpeg |
| [ImageMagick/ImageMagick](https://github.com/ImageMagick/ImageMagick) | 17,850 | C | 命令行图像处理祖师爷 |
| [jimp-dev/jimp](https://github.com/jimp-dev/jimp) | 14,669 | TypeScript | 纯 JS 图片处理，零依赖 |

## 7. 3D 资产管线

| 库 | ★ | 语言 | 什么时候选它 |
|---|---:|---|---|
| [zeux/meshoptimizer](https://github.com/zeux/meshoptimizer) | 8,837 | C++ | 网格压缩，性能神器 |
| [KhronosGroup/glTF](https://github.com/KhronosGroup/glTF) | 7,888 | HTML | 3D 界的 JPG，格式规范 |
| [google/draco](https://github.com/google/draco) | 7,550 | C++ | 几何压缩（glTF 配套） |
| [donmccurdy/glTF-Transform](https://github.com/donmccurdy/glTF-Transform) | 2,073 | TypeScript | glTF 处理工具箱 |

## 8. 高斯泼溅 / NeRF

| 库 | ★ | 语言 | 什么时候选它 |
|---|---:|---|---|
| [graphdeco-inria/gaussian-splatting](https://github.com/graphdeco-inria/gaussian-splatting) | 24,460 | Python | 原始论文实现，实时写实重建 ⚠️ |
| [NVlabs/instant-ngp](https://github.com/NVlabs/instant-ngp) | 17,595 | Cuda | 几分钟训练一个 NeRF |
| [nerfstudio-project/nerfstudio](https://github.com/nerfstudio-project/nerfstudio) | 12,202 | Python | NeRF 的一站式工作台 ⚠️ |
| [playcanvas/supersplat](https://github.com/playcanvas/supersplat) | 10,637 | TypeScript | 浏览器里编辑 splat |
| [nerfstudio-project/gsplat](https://github.com/nerfstudio-project/gsplat) | 5,893 | Python | CUDA 加速版，训练更快 |

> 拍一圈照片 → 生成可实时渲染的 3D 场景，正在取代传统建模流程。

## 9. 非 JS 的老牌框架

| 库 | ★ | 语言 | 什么时候选它 |
|---|---:|---|---|
| [godotengine/godot](https://github.com/godotengine/godot) | 120,027 | C++ | 开源游戏引擎，2D/3D 都强 |
| [raysan5/raylib](https://github.com/raysan5/raylib) | 35,643 | C | 极简 C 游戏库，学图形学首选 |
| [libgdx/libgdx](https://github.com/libgdx/libgdx) | 25,523 | Java | Java 跨平台游戏框架 |
| [ssloy/tinyrenderer](https://github.com/ssloy/tinyrenderer) | 24,512 | C++ | 手写软渲染器教程 |
| [blender/blender](https://github.com/blender/blender) | 21,918 | C++ | 几何节点就是程序化视觉 |
| [openframeworks/openFrameworks](https://github.com/openframeworks/openFrameworks) | 10,465 | C++ | C++ 创意编程，装置艺术常用 |
| [nannou-org/nannou](https://github.com/nannou-org/nannou) | 6,782 | Rust | Rust 版创意编程 |
| [processing/processing](https://github.com/processing/processing) | 6,475 | Java | p5.js 的母体，艺术家编程起点 |

## 10. 游戏引擎

| 库 | ★ | 语言 | 什么时候选它 |
|---|---:|---|---|
| [phaserjs/phaser](https://github.com/phaserjs/phaser) | 40,704 | JavaScript | 2D 游戏框架 |
| [4ian/GDevelop](https://github.com/4ian/GDevelop) | 28,765 | JavaScript | 免代码游戏引擎 |
| [cocos/cocos-engine](https://github.com/cocos/cocos-engine) | 9,919 | C++ | 国产 3D 游戏引擎 |

## 11. 可视化编辑器（应用）

| 库 | ★ | 语言 | 什么时候选它 |
|---|---:|---|---|
| [excalidraw/excalidraw](https://github.com/excalidraw/excalidraw) | 135,559 | TypeScript | 手绘风白板（应用，非库） |
| [tldraw/tldraw](https://github.com/tldraw/tldraw) | 51,387 | TypeScript | 无限画布 SDK |
| [aseprite/aseprite](https://github.com/aseprite/aseprite) | 40,883 | C++ | 像素画编辑器 |
| [GraphiteEditor/Graphite](https://github.com/GraphiteEditor/Graphite) | 27,920 | Rust | 开源 2D 内容创作套件 |

## 12. 物理与几何加速

| 库 | ★ | 语言 | 什么时候选它 |
|---|---:|---|---|
| [liabru/matter-js](https://github.com/liabru/matter-js) | 18,619 | JavaScript | 2D 刚体物理 |
| [dimforge/rapier](https://github.com/dimforge/rapier) | 6,060 | Rust | 高性能 3D 物理 |
| [gkjohnson/three-mesh-bvh](https://github.com/gkjohnson/three-mesh-bvh) | 3,571 | JavaScript | 加速射线检测与空间查询先 |
| [pmndrs/cannon-es](https://github.com/pmndrs/cannon-es) | 2,090 | TypeScript | three.js 生态常用物理引擎 ⚠️ |

## 13. 教程与资源（不是库）

| 库 | ★ | 语言 | 什么时候选它 |
|---|---:|---|---|
| [lettier/3d-game-shaders-for-beginners](https://github.com/lettier/3d-game-shaders-for-beginners) | 20,042 | C++ | 手写 SSAO / 阴影 / 次表面散射 ⚠️ |
| [terkelg/awesome-creative-coding](https://github.com/terkelg/awesome-creative-coding) | 15,590 | HTML | 创意编程资源总表 |
| [RayTracing/raytracing.github.io](https://github.com/RayTracing/raytracing.github.io) | 10,744 | HTML | 光线追踪入门书 |
| [hal9ai/awesome-dataviz](https://github.com/hal9ai/awesome-dataviz) | 4,459 | JavaScript | 数据可视化资源总表 |
| [ekzhang/graphics-workshop](https://github.com/ekzhang/graphics-workshop) | 2,184 | GLSL | 写 GPU shader 学图形学 ⚠️ |

> 这些不是库，但它们的性价比比任何库都高。

## 14. AI 视觉生成

| 库 | ★ | 语言 | 什么时候选它 |
|---|---:|---|---|
| [comfyanonymous/ComfyUI](https://github.com/comfyanonymous/ComfyUI) | 146,484 | Python | 节点式 AI 图像 / 视频生成 |
| [huggingface/diffusers](https://github.com/huggingface/diffusers) | 34,914 | Python | 扩散模型的官方工具箱 |
| [invoke-ai/InvokeAI](https://github.com/invoke-ai/InvokeAI) | 29,076 | TypeScript | 面向创作者的 AI 绘图 |

---

## 如果只记 5 个

1. **three.js** — 90% 的 3D 需求在这里解决
2. **The Book of Shaders** — 决定画面质感上限的东西，只能在这学
3. **d3** — 数据可视化的天花板
4. **GSAP / Motion** — 让一切「动得对」
5. **Remotion + FFmpeg** — 把代码变成能交付的成片

## 选型决策树

```
你要做的事是……
├─ 网页上一个 3D 效果
│   ├─ 转一个模型 / 要真实材质 ────────── three.js（或 model-viewer，连 JS 都不用）
│   └─ 一片光、一片雾、一个算法画面 ──── ogl / regl + 自己写 shader
├─ 2D 图形 / 图表
│   ├─ 图表 ─────────────────────────── Chart.js 起步，天花板在 d3
│   └─ 可编辑画布 ───────────────────── konva / fabric / tldraw
├─ 一段能交出去的视频
│   └─ Remotion（React）或 Motion Canvas（TS）+ FFmpeg
└─ 一条「别人做不出来」的画面
    └─ 没有捷径：Book of Shaders → lygia → 自己写
```

## 数据与方法

- `data/libs.json` — 本表的数据源（97 条，含分类、★、语言、最后提交、一句话定位）
- `data/libs.csv` — 同样的数据，可直接拖进 Excel
- `data/raw-scan.json` — 未经筛选的原始抓取结果（188 条，含大量非图形项目），仅作方法记录
- `scripts/refresh.mjs` — 重新抓取所有库的 ★ 与最后提交时间，打印变化表

```bash
node scripts/refresh.mjs
# 想提高限额：GITHUB_TOKEN=xxx node scripts/refresh.mjs
```

抓取方式：GitHub REST API（`/repos/{owner}/{repo}` 逐条精确取数），分类由人工整理，不是按 topic 自动归类。

## 关于收录标准

收录看三条，★ 只是其中一条：

1. **有人用它做成过事**（不是 demo 玩具）
2. **不可替代性**（别人能做的事它做得更好，或只有它能做）
3. **至少一个清晰的适用场景**（说不清什么时候用的不收录）

被排除的：纯教学仓库、awesome 列表以外的聚合项目、已归档项目、以及只有 README 没有代码的项目。

## 贡献

欢迎 PR 补充。请一并说明：**这个库解决什么问题**、**谁用它做成过什么**。只加一行仓库名 + ★ 的 PR 不会合并。

## License

文档内容 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)，脚本 [MIT](LICENSE)。
所有 ★ 数与描述归各自仓库所有，此处仅作引用。
