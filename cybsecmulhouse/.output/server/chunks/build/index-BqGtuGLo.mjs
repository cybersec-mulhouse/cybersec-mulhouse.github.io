import { _ as _sfc_main$1 } from './PageCard-DwPqDlgr.mjs';
import { withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './nuxt-link-DrWTxe6L.mjs';
import 'vue-router';
import '@vueuse/core';
import 'tailwind-merge';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_PageCard = _sfc_main$1;
  _push(ssrRenderComponent(_component_PageCard, _attrs, {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2)
        ;
      else {
        return [];
      }
    }),
    subtitle: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2)
        ;
      else {
        return [];
      }
    }),
    body: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2)
        ;
      else {
        return [];
      }
    }),
    footer: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex flex-col-reverse"${_scopeId}><dt class="text-base leading-7 text-gray-300"${_scopeId}>Participants</dt><dd class="text-2xl font-bold leading-9 tracking-tight text-white"${_scopeId}>80+</dd></div><div class="flex flex-col-reverse"${_scopeId}><dt class="text-base leading-7 text-gray-300"${_scopeId}>Surface</dt><dd class="text-2xl font-bold leading-9 tracking-tight text-white"${_scopeId}>2000m<sup${_scopeId}>2</sup></dd></div><div class="flex flex-col-reverse"${_scopeId}><dt class="text-base leading-7 text-gray-300"${_scopeId}>Price money</dt><dd class="text-2xl font-bold leading-9 tracking-tight text-white"${_scopeId}>10000\u20AC</dd></div><div class="flex flex-col-reverse"${_scopeId}><dt class="text-base leading-7 text-gray-300"${_scopeId}>From</dt><dd class="text-2xl font-bold leading-9 tracking-tight text-white"${_scopeId}>16h-09h</dd></div>`);
      } else {
        return [
          createVNode("div", { class: "flex flex-col-reverse" }, [
            createVNode("dt", { class: "text-base leading-7 text-gray-300" }, "Participants"),
            createVNode("dd", { class: "text-2xl font-bold leading-9 tracking-tight text-white" }, "80+")
          ]),
          createVNode("div", { class: "flex flex-col-reverse" }, [
            createVNode("dt", { class: "text-base leading-7 text-gray-300" }, "Surface"),
            createVNode("dd", { class: "text-2xl font-bold leading-9 tracking-tight text-white" }, [
              createTextVNode("2000m"),
              createVNode("sup", null, "2")
            ])
          ]),
          createVNode("div", { class: "flex flex-col-reverse" }, [
            createVNode("dt", { class: "text-base leading-7 text-gray-300" }, "Price money"),
            createVNode("dd", { class: "text-2xl font-bold leading-9 tracking-tight text-white" }, "10000\u20AC")
          ]),
          createVNode("div", { class: "flex flex-col-reverse" }, [
            createVNode("dt", { class: "text-base leading-7 text-gray-300" }, "From"),
            createVNode("dd", { class: "text-2xl font-bold leading-9 tracking-tight text-white" }, "16h-09h")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-BqGtuGLo.mjs.map
