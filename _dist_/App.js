import './App.css.proxy.js';
/* src\App.svelte generated by Svelte v3.24.0 */
import {
	SvelteComponent,
	append,
	attr,
	check_outros,
	create_component,
	destroy_component,
	detach,
	element,
	group_outros,
	init,
	insert,
	mount_component,
	safe_not_equal,
	space,
	transition_in,
	transition_out
} from "/web_modules/svelte/internal.js";

import { onMount } from "/web_modules/svelte.js";
import { slide } from "/web_modules/svelte/transition.js";
import router from "/web_modules/page.js";
import XEUtils from "/web_modules/xe-utils.js";
import * as api from "./api/index.js";
import NavBar from "./components/NavBar.js";
import Index from "./pages/Index.js";
import Characters from "./pages/Characters.js";
import Register from "./pages/Register.js";

function create_fragment(ctx) {
	let div4;
	let navbar;
	let t0;
	let div0;
	let t2;
	let div3;
	let div2;
	let div1;
	let switch_instance;
	let current;
	navbar = new NavBar({});
	var switch_value = /*page*/ ctx[0];

	function switch_props(ctx) {
		return {};
	}

	if (switch_value) {
		switch_instance = new switch_value(switch_props(ctx));
	}

	return {
		c() {
			div4 = element("div");
			create_component(navbar.$$.fragment);
			t0 = space();
			div0 = element("div");
			div0.textContent = " ";
			t2 = space();
			div3 = element("div");
			div2 = element("div");
			div1 = element("div");
			if (switch_instance) create_component(switch_instance.$$.fragment);
			attr(div0, "class", "container");
			attr(div1, "class", "col-9");
			attr(div2, "class", "row align-items-start");
			attr(div3, "class", "container");
			attr(div4, "class", "app svelte-cbn714");
		},
		m(target, anchor) {
			insert(target, div4, anchor);
			mount_component(navbar, div4, null);
			append(div4, t0);
			append(div4, div0);
			append(div4, t2);
			append(div4, div3);
			append(div3, div2);
			append(div2, div1);

			if (switch_instance) {
				mount_component(switch_instance, div1, null);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (switch_value !== (switch_value = /*page*/ ctx[0])) {
				if (switch_instance) {
					group_outros();
					const old_component = switch_instance;

					transition_out(old_component.$$.fragment, 1, 0, () => {
						destroy_component(old_component, 1);
					});

					check_outros();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props(ctx));
					create_component(switch_instance.$$.fragment);
					transition_in(switch_instance.$$.fragment, 1);
					mount_component(switch_instance, div1, null);
				} else {
					switch_instance = null;
				}
			} else if (switch_value) {
				0;
			}
		},
		i(local) {
			if (current) return;
			transition_in(navbar.$$.fragment, local);
			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(navbar.$$.fragment, local);
			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div4);
			destroy_component(navbar);
			if (switch_instance) destroy_component(switch_instance);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let page;
	router("/", () => $$invalidate(0, page = Index));
	router("/chars", () => $$invalidate(0, page = Characters));
	router("/register", () => $$invalidate(0, page = Register));
	router.start();
	let active = false;
	let username = "";

	function getLoginInfo() {
		active = XEUtils.cookie("active") === "true" ? true : false;
		username = XEUtils.cookie("username");
	}

	onMount(async () => {
		getLoginInfo();
	});

	return [page];
}

class App extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default App;