import { _ as _sfc_main$1 } from './PageCard-BAjfwNjE.mjs';
import { defineComponent, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './server.mjs';
import 'vue-router';
import '@vueuse/core';
import 'tailwind-merge';
import './nuxt-link-CFNlZbtw.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
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
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("subtitle_m"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("subtitle_m")), 1)
            ];
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
            _push2(`<div class="flex md:flex-row flex-col text-white"${_scopeId}><h2 class="text-2xl"${_scopeId}>${ssrInterpolate(_ctx.$t("closed_m"))}</h2></div>`);
          } else {
            return [
              createVNode("div", { class: "flex md:flex-row flex-col text-white" }, [
                createVNode("h2", { class: "text-2xl" }, toDisplayString(_ctx.$t("closed_m")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=register-Cux6Ih2O.mjs.map
