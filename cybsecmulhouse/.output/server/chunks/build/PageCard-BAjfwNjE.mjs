import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { a as useI18n, b as useLocalePath, d as __nuxt_component_0$1 } from './server.mjs';
import { useSSRContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, defineComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-CFNlZbtw.mjs';

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
const _imports_2 = "" + buildAssetsURL("m2a.C0Wi3jOi.png");
const _imports_3 = "" + buildAssetsURL("Fond_noir_logo.BF-cI_nZ.png");
const _imports_4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAgCAYAAADwkoGKAAAABmJLR0QA/wD/AP+gvaeTAAAIOklEQVR42u1bC1BVVRS9T0GU/CeKmT8Qf6N8E81y1GqmzAHLXwpojQZpmWjimGMFKj7QhlKyD4lNOFioERrxAFGJIBzhkVppTeo4WmlUlp8cU7HXPjP72nmbc+59/O5zhrtn1jzm7nPOPZ9199l7n4MSbQ2qiLYG25sPQRWKKaYAEU4BHM2FGGvwSXNWTVFi1gWVNyexotcFl5mzagqzWDkqKV7JHuKw5gY0CRt2B1zYVOhvlyHd5p9nznprsFgpQW+oxEr8aIhjk82/RbHR5m/6YK1BoqyBCSqxVmYNa3FibbL57WquvjscjqGAhYANgHcAawCLASHmyrp7K1wXHKUSK2GrM7Ey9/V25JR3blbkVnp/W1itZGihqEp5TIdQwwAHHNpyCtDOXGE3yWxryHiVWPHvDnci1oelPg5YaMNhq1JiNUg1GnDZoS9fGT2X8M62gDGAREB8694K1wYHqMRakD6insVyB7EAkZKFawc4QQj0L+BrQAngKOASPk8ymFQRgD+5fmW0amLFJYV5q8SanzbSiVjv7b3XLcQqsCujJYs3iZDqb0A4KeMFmMm2S4OJFUf61rqJhSmHi4xYc1KDnIi1uWiAeyzWQWWAZPGWk8X70oWtKRYXXcUkQblugDAOIUTfBxANWMG2OMAMgI8OsT7l2utPyvoApgCWYZtLAJGATpJx9Af4IXyJrxkFmAMIbcB2fR9gGmA+4AnAYBIQ8XPRhdRvD5gAeAH7ztYkBtBPRKxjqtVKyx/0P7kK/R22aovhxNpZqXSQTMoSsnhXAIE6E0md/FpAG1JmJSlTis+9Ae8Dbgp8uDqc3DAX/L0MbC8EsB9wS1KO+Y4vCcZwlitTjsTMF9SvANwjmYfuGD3/JXn3s1iuhjyPwOedAZm4S4iEuSTbnT6OaGtgiUqs9XkBTlYr/1Bbo4l1SYMkwYIBXQNsBARI6jwlqDOGlCmSTPJnOoSJaCCxJjpck2Wkfyc53XlAlUZdRgwPUn844LTOO4N0iOVJfEiZHLj94UalBGepxFqzwzlJmlfpZWxEaFd+1LFA2RpfTAHgAYHDX0vKpnB6DxJlXsevexyp8xOafoYswO+ArhrEYno7YhX3rguAI4BkwDOAuYIxMUvcmevjcYnF/AHwj0A3nWzzIlL9iiQ6i+Nvi+VXoZVWEUjmns3lZsDzgNmAtYIoPVLNZVlVYr2W7UysXRXeRlusch1idQBs0/lqmN6Lq7Oe6I9zunCiy5X4c8tJPzwa47zDc5n/WELqT+F0RwSkGIE6X8zZ8ZLJ1U0muqvol1m4Mne74mOxbVaUG8SkdP33w7HOIpVYL2cNvc4TiyU1DbVY1conLjqh7Gs5pkGu/dxX6CfwawZLCDQVn8cKfLPFvCVpbFSIkeujgFTAbkAZWjheErjyNqJLJO2toNuRxD+7vc1r9E24FZIyIfhO5lPtE6SAytQk6f3RKcGropKDwjcWBCzmibW9rJvRFmtzA0J8C2AyoBC3QipzNSxCAj7/nHvGcmAd8HlvLifmIGVeB/RopMWaKVhskSRydaiv9xxpcxrRV3MWhvqj7RpLLIxCy13ou71ew+mFflN5YmUZnH0vsiuvNjKP9LCACLmcfjrRfcGcTBIlZQryZhclk3eaDxhcIRY8WyBo5wZuZdRiJWkQK06QnK23sPA7kjw/78I8ypz34ZIPjfmeZ3SJBRZrNE+srft9jbZYcU1IUiaRAVYSJ/0cp2MphPGk/ARBm33RQokItleDWFtIO11JqM4ItVQNzxkRW4BYA5rLYgki5xw1dyV7v5OkFfv35YmVYXD2vahamaIz8C4aujfJAPOJ3iqwWqqcpfktUrcTyzGRnNZNdaGY70La3k3qR8qsKeq3tQCxPAURW2xDiYXt1JGo1ZOrM0OXWEmlEzyAUHUqsd4u6m+s816jjNEYdC8Mr/MwVGcpgUHoTCYKEplLSf2BGsnJ1aRsP8AoQR9oBNZFki9j1ulxDBx6YFpBZu16ClIiTSYW6nIEUWEMiQp76hCru8DyqeNuI+ifXbiAQKjzKrHSbX6OwirjiFV8SBmoEwm6Kmzv7yhoo1iSA/Mn5eJR9w1ak1TBdvA9Vz5Ioy9xknzXLkzu/izQrW8mYo2Q5Lr+wMP7X/Bj66hBLIugj4cxk39Q0PZx4QLC9eEavO1ZC3/vtFVZLhtGrKPKXRrE2toAUo2UtDFVy1fiyu3QeUcdiZgseLtCSCwss1ejvSsy578pxEJ9FCZ+tWScjo/1okbd66T9c2JiFflNfqvA7/bCwIIfNYhYl3X2/4l4XvWbZIBn8BZpV402egjqiQ6m0zSOML6T1BnMzhkF5eepiUiJxWR1QsmzHVy7W3ALVjGrIcTCMqMw5yRKy9xSUzMaxLJglv0G0TPf9BFyzHTVpWgLFrywhR32w4BkQHgDIkBfPKVngxrLbiC4WG81PVvTKOuJCxKJNwGeBAxx4R1s+5mFliJUoA9FH3GOekbHJXLr3WJw4X3epG4fjbI+mEZ5Gn2tSP6mBvqtERx6CW56sLHNAzzEBS++fB9c6jhkwz9oZjJdA5TAFeT4ErvSz6D7Uu2RVLf0rJUpBgkQa12TyVSl1MLvtkK7MmNPhdLJ4Et4CyXbWra5um4U2KIWNYpMduUY1E2F3wcdDsXirv5j/okKO9jtZq6ue4k1zUUyXYV/hMhn2fP8SqXPndJ/QSrAxp/om+ImKa5SxmpYpdPsX7aAUBG2E4rXndh/TOKxE/g9otN6U9wk7A46R6Y6gB2QVFyjhJmzY0qjpbRUaQ9E+hhuHkQVVSrdzRkxRU/+A/PEh9bCpKVrAAAAAElFTkSuQmCC";
const _imports_5 = "" + buildAssetsURL("Logo_URCA_blanc.DU9R7PPW.png");
const _imports_6 = "" + buildAssetsURL("UHA_sans_fond.IbQxgbdL.png");
const _sfc_main = {
  __name: "PageCard",
  __ssrInlineRender: true,
  setup(__props) {
    useI18n();
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CountDown = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-black" }, _attrs))}><div class="isolate shadow-md rounded-md overflow-hidden bg-black py-24 sm:py-32 mx-12 my-4"><img${ssrRenderAttr("src", _imports_0)} alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"><div class="absolute top-10 right-10 h-16 w-16 text-white ..."><button>fr</button> | <button>en</button></div><div class="w-full text-8xl text-center text-white"><img${ssrRenderAttr("src", _imports_1)} class="mx-auto object-contain object-center w-1/4 brightness-50 hover:brightness-200 hover:duration-150"><h3 class="text-slate-500 text-xl mt-5">${ssrInterpolate(_ctx.$t("start_m"))}</h3>`);
      _push(ssrRenderComponent(_component_CountDown, null, null, _parent));
      _push(`<div class="flex justify-center mt-10 md:flex-row flex-col gap-x-8 gap-y-6 text-xl font-normal leading-7 text-slate-400">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "hover:text-white",
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
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "hover:text-white",
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
      _push(`</div></div><div class="flex flex-col place-items-center justify-center"><div class="max-w-2xl lg:mx-0"><h2 class="font-bold text-8xl tracking-tight text-white">`);
      ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
      _push(`</h2><p class="mt-10 text-lg leading-8 text-gray-300">`);
      ssrRenderSlot(_ctx.$slots, "subtitle", {}, null, _push, _parent);
      _push(`<br></p></div><div class="">`);
      ssrRenderSlot(_ctx.$slots, "body", {}, null, _push, _parent);
      _push(`<dl class="mt-20 flex md:flex-row flex-col place-items-center gap-8">`);
      ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push, _parent);
      _push(`</dl></div></div><div class="mx-20 mt-16 flex md:flex-row flex-col gap-x-20 justify-center place-items-center text-white text-4xl"><a href="https://www.m2a.fr/" target="_blank" rel="noopener"><img${ssrRenderAttr("src", _imports_2)} class="flex mt-5 max-w-36 aspect-auto"></a><a href="https://www.hacksecureims.eu/" target="_blank" rel="noopener"><img${ssrRenderAttr("src", _imports_3)} class="flex max-w-36 aspect-auto"></a><a href="https://www.systancia.com/" target="_blank" rel="noopener"><img${ssrRenderAttr("src", _imports_4)} class="flex mt-10 max-w-36 aspect-auto"></a><a href="https://www.univ-reims.fr/" target="_blank" rel="noopener"><img${ssrRenderAttr("src", _imports_5)} class="flex mt-10 max-w-36 aspect-auto"></a><a href="https://www.uha.fr/" target="_blank" rel="noopener"><img${ssrRenderAttr("src", _imports_6)} class="flex mt-10 max-w-36 aspect-auto"></a></div></div></div>`);
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
//# sourceMappingURL=PageCard-BAjfwNjE.mjs.map
