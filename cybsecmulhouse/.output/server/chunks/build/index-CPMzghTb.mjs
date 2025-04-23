import { _ as _sfc_main$3 } from './PageCard-BAjfwNjE.mjs';
import { defineComponent, withCtx, createVNode, toDisplayString, unref, openBlock, createBlock, createTextVNode, useSSRContext, mergeProps } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs } from 'vue/server-renderer';
import { a as useI18n, b as useLocalePath, c as useSeoMeta, _ as _export_sfc } from './server.mjs';
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
import './nuxt-link-CFNlZbtw.mjs';
import 'vue-router';
import '@vueuse/core';
import 'tailwind-merge';

const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "text-white text-2xl font-light justify-center mt-10 flex flex-row",
    '"': ""
  }, _attrs))}><ul class="list-disc pl-10"><li>Presentation of the event at 16h00 </li><li>Reception &amp; welcoming of the teams at 19h00 </li><li>Starting of the CTF at 20h00</li><li>Locking of the scores the next morning at 8h00 </li><li>Podium and prices at 9h00 </li></ul><h3></h3></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InfoEn.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-white text-2xl font-light justify-center mt-10 flex flex-col" }, _attrs))}><ul class="list-disc pl-10"><li>Pr\xE9sentation de l&#39;\xE9v\xE9nement \xE0 16h00 </li><li>R\xE9ception &amp; accueil des \xE9quipes \xE0 19h00 </li><li>D\xE9but du CTF \xE0 20h00</li><li>Cl\xF4ture des scores le lendemain matin \xE0 8h00 </li><li>Podium et prix \xE0 9h00 </li></ul></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InfoFr.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, locales } = useI18n();
    useLocalePath();
    useSeoMeta({
      title: "The official RhineTech CTF site",
      ogTitle: "The official RhineTech CTF site",
      description: "This is the official Rhinetech CTF site for the event planned on November 26th 2024 ",
      ogDescription: "This is the official Rhinetech CTF site for the event planned on November 26th 2024 "
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageCard = _sfc_main$3;
      const _component_InfoEn = __nuxt_component_1;
      const _component_InfoFr = __nuxt_component_2;
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
            _push2(`<div${_scopeId}>${ssrInterpolate(_ctx.$t("subtitle_m"))}</div>`);
          } else {
            return [
              createVNode("div", null, toDisplayString(_ctx.$t("subtitle_m")), 1)
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(locale) === "en") {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_InfoEn, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_InfoFr, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            }
          } else {
            return [
              unref(locale) === "en" ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode(_component_InfoEn)
              ])) : (openBlock(), createBlock("div", { key: 1 }, [
                createVNode(_component_InfoFr)
              ]))
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col-reverse"${_scopeId}><dt class="text-base leading-7 text-gray-300"${_scopeId}>Participants</dt><dd class="text-4xl font-bold leading-9 tracking-tight text-white"${_scopeId}>80+</dd></div><div class="flex flex-col-reverse"${_scopeId}><dt class="text-base leading-7 text-gray-300"${_scopeId}>Surface</dt><dd class="text-4xl font-bold leading-9 tracking-tight text-white"${_scopeId}>2000m<sup${_scopeId}>2</sup></dd></div><div class="flex flex-col-reverse"${_scopeId}><dt class="text-base leading-7 text-gray-300"${_scopeId}>Price money</dt><dd class="text-4xl font-bold leading-9 tracking-tight text-white"${_scopeId}>1500\u20AC</dd></div><div class="flex flex-col-reverse"${_scopeId}><dt class="text-base leading-7 text-gray-300"${_scopeId}>From</dt><dd class="text-4xl font-bold leading-9 tracking-tight text-white"${_scopeId}>16h-09h</dd></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col-reverse" }, [
                createVNode("dt", { class: "text-base leading-7 text-gray-300" }, "Participants"),
                createVNode("dd", { class: "text-4xl font-bold leading-9 tracking-tight text-white" }, "80+")
              ]),
              createVNode("div", { class: "flex flex-col-reverse" }, [
                createVNode("dt", { class: "text-base leading-7 text-gray-300" }, "Surface"),
                createVNode("dd", { class: "text-4xl font-bold leading-9 tracking-tight text-white" }, [
                  createTextVNode("2000m"),
                  createVNode("sup", null, "2")
                ])
              ]),
              createVNode("div", { class: "flex flex-col-reverse" }, [
                createVNode("dt", { class: "text-base leading-7 text-gray-300" }, "Price money"),
                createVNode("dd", { class: "text-4xl font-bold leading-9 tracking-tight text-white" }, "1500\u20AC")
              ]),
              createVNode("div", { class: "flex flex-col-reverse" }, [
                createVNode("dt", { class: "text-base leading-7 text-gray-300" }, "From"),
                createVNode("dd", { class: "text-4xl font-bold leading-9 tracking-tight text-white" }, "16h-09h")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CPMzghTb.mjs.map
