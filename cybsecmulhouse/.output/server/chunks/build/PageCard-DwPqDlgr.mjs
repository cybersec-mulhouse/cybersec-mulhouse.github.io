import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { a as useI18n, c as useLocalePath, b as __nuxt_component_0$1 } from './server.mjs';
import { useSSRContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, defineComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-DrWTxe6L.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CountDown",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_client_only, mergeProps({
        class: "font-subwt text-slate-300 lg:text-2xl sm:text-base font-thin",
        placeholder: "loading..."
      }, _attrs), {}, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CountDown.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_0 = "" + buildAssetsURL("ctf.BKkpt-iH.png");
const _imports_1 = "" + buildAssetsURL("Logo_clean.Cxb_HDzr.png");
const _sfc_main = {
  __name: "PageCard",
  __ssrInlineRender: true,
  setup(__props) {
    useI18n();
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CountDown = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-black" }, _attrs))}><div class="relative mt-4 isolate shadow-md rounded-md overflow-hidden bg-gray-900 py-24 sm:py-32 mx-12 my-4"><img${ssrRenderAttr("src", _imports_0)} alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"><div class="absolute top-10 right-10 h-16 w-16 text-white ..."><button>fr</button> | <button>en</button></div><div class="w-full text-8xl text-center text-white"><img${ssrRenderAttr("src", _imports_1)} class="mx-auto object-contain object-center w-1/2 brightness-50 hover:brightness-200 hover:duration-150">`);
      _push(ssrRenderComponent(_component_CountDown, null, null, _parent));
      _push(`</div><div class="mx-auto max-w-7xl px-6 lg:px-8"><div class="mx-auto max-w-2xl lg:mx-0"><h2 class="font-bold text-8xl tracking-tight text-white">`);
      ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
      _push(`</h2><p class="mt-6 text-lg leading-8 text-gray-300">`);
      ssrRenderSlot(_ctx.$slots, "subtitle", {}, null, _push, _parent);
      _push(`<br></p></div><div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none"><div class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/register")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("register_m"))}<span aria-hidden="true"${_scopeId}>\u2192</span>`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("register_m")), 1),
              createVNode("span", { "aria-hidden": "true" }, "\u2192")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="#">${ssrInterpolate(_ctx.$t("contribute_m"))} <span aria-hidden="true">\u2192</span></a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/coc")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("values_m"))}<span aria-hidden="true"${_scopeId}>\u2192</span>`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("values_m")), 1),
              createVNode("span", { "aria-hidden": "true" }, "\u2192")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="#">${ssrInterpolate(_ctx.$t("sponsors_m"))} <span aria-hidden="true">\u2192</span></a>`);
      ssrRenderSlot(_ctx.$slots, "body", {}, null, _push, _parent);
      _push(`</div><dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">`);
      ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push, _parent);
      _push(`</dl></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=PageCard-DwPqDlgr.mjs.map
