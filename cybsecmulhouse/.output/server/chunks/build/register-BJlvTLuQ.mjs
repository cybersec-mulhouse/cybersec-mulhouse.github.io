import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as _sfc_main$1 } from './PageCard-CB0MTIGt.mjs';
import { defineComponent, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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
import './server.mjs';
import 'vue-router';
import '@vueuse/core';
import 'tailwind-merge';
import './nuxt-link-DrWTxe6L.mjs';

const _imports_0 = "" + buildAssetsURL("qr-code.CJVdYKNF.png");
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
            _push2(`<div class="flex flex-col-reverse col-span-4 text-white"${_scopeId}><a href="https://discord.com/invite/PvC8bWH3mv?event=1250008749712740403"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="" class="-z-10 h-full w-72 object-cover object-right md:object-center"${_scopeId}></a></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col-reverse col-span-4 text-white" }, [
                createVNode("a", { href: "https://discord.com/invite/PvC8bWH3mv?event=1250008749712740403" }, [
                  createVNode("img", {
                    src: _imports_0,
                    alt: "",
                    class: "-z-10 h-full w-72 object-cover object-right md:object-center"
                  })
                ])
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
//# sourceMappingURL=register-BJlvTLuQ.mjs.map
