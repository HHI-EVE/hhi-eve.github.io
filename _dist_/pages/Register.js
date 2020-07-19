/* src\pages\Register.svelte generated by Svelte v3.24.0 */
import {
	SvelteComponent,
	append,
	attr,
	detach,
	element,
	init,
	insert,
	listen,
	noop,
	run_all,
	safe_not_equal,
	set_data,
	set_input_value,
	set_style,
	space,
	text
} from "/web_modules/svelte/internal.js";

import XEUtils from "/web_modules/xe-utils.js";
import * as api from "../api/index.js";

function create_fragment(ctx) {
	let div8;
	let header;
	let t1;
	let section0;
	let div0;
	let label0;
	let t3;
	let input0;
	let t4;
	let div1;
	let label1;
	let t6;
	let input1;
	let t7;
	let div2;
	let label2;
	let t9;
	let input2;
	let t10;
	let div3;
	let label3;
	let t12;
	let input3;
	let t13;
	let div5;
	let label4;
	let t15;
	let input4;
	let t16;
	let div4;
	let t18;
	let button0;
	let t20;
	let button1;
	let t22;
	let section1;
	let div6;
	let t24;
	let div7;
	let t25;
	let mounted;
	let dispose;

	return {
		c() {
			div8 = element("div");
			header = element("header");
			header.textContent = "HHI 军团注册";
			t1 = space();
			section0 = element("section");
			div0 = element("div");
			label0 = element("label");
			label0.textContent = "用户名";
			t3 = space();
			input0 = element("input");
			t4 = space();
			div1 = element("div");
			label1 = element("label");
			label1.textContent = "E-mail 地址";
			t6 = space();
			input1 = element("input");
			t7 = space();
			div2 = element("div");
			label2 = element("label");
			label2.textContent = "密码";
			t9 = space();
			input2 = element("input");
			t10 = space();
			div3 = element("div");
			label3 = element("label");
			label3.textContent = "确认密码";
			t12 = space();
			input3 = element("input");
			t13 = space();
			div5 = element("div");
			label4 = element("label");
			label4.textContent = "邀请码";
			t15 = space();
			input4 = element("input");
			t16 = space();
			div4 = element("div");
			div4.textContent = "需要邀请码才能注册。";
			t18 = space();
			button0 = element("button");
			button0.textContent = "注册";
			t20 = space();
			button1 = element("button");
			button1.textContent = "返回";
			t22 = space();
			section1 = element("section");
			div6 = element("div");
			div6.textContent = " ";
			t24 = space();
			div7 = element("div");
			t25 = text(/*message*/ ctx[5]);
			attr(label0, "for", "username");
			attr(label0, "class", "form-label");
			attr(input0, "type", "text");
			attr(input0, "class", "form-control");
			attr(input0, "id", "username");
			attr(div0, "class", "mb-3");
			attr(label1, "for", "email");
			attr(label1, "class", "form-label");
			attr(input1, "type", "email");
			attr(input1, "class", "form-control");
			attr(input1, "id", "email");
			attr(div1, "class", "mb-3");
			attr(label2, "for", "password");
			attr(label2, "class", "form-label");
			attr(input2, "type", "password");
			attr(input2, "class", "form-control");
			attr(input2, "id", "password");
			attr(div2, "class", "mb-3");
			attr(label3, "for", "password2");
			attr(label3, "class", "form-label");
			attr(input3, "type", "password");
			attr(input3, "class", "form-control");
			attr(input3, "id", "password2");
			attr(div3, "class", "mb-3");
			attr(label4, "for", "invitation");
			attr(label4, "class", "form-label");
			attr(input4, "type", "text");
			attr(input4, "class", "form-control");
			attr(input4, "id", "invitation");
			attr(input4, "aria-describedby", "invitationHelp");
			attr(div4, "id", "invitationHelp");
			attr(div4, "class", "form-text");
			attr(div5, "class", "mb-3");
			attr(button0, "type", "button");
			attr(button0, "class", "btn btn-primary");
			attr(button1, "type", "button");
			attr(button1, "class", "btn btn-light");
			set_style(div7, "color", "red");
		},
		m(target, anchor) {
			insert(target, div8, anchor);
			append(div8, header);
			append(div8, t1);
			append(div8, section0);
			append(section0, div0);
			append(div0, label0);
			append(div0, t3);
			append(div0, input0);
			set_input_value(input0, /*username*/ ctx[0]);
			append(section0, t4);
			append(section0, div1);
			append(div1, label1);
			append(div1, t6);
			append(div1, input1);
			set_input_value(input1, /*email*/ ctx[1]);
			append(section0, t7);
			append(section0, div2);
			append(div2, label2);
			append(div2, t9);
			append(div2, input2);
			set_input_value(input2, /*password*/ ctx[2]);
			append(section0, t10);
			append(section0, div3);
			append(div3, label3);
			append(div3, t12);
			append(div3, input3);
			set_input_value(input3, /*password2*/ ctx[3]);
			append(section0, t13);
			append(section0, div5);
			append(div5, label4);
			append(div5, t15);
			append(div5, input4);
			set_input_value(input4, /*invitation*/ ctx[4]);
			append(div5, t16);
			append(div5, div4);
			append(section0, t18);
			append(section0, button0);
			append(section0, t20);
			append(section0, button1);
			append(div8, t22);
			append(div8, section1);
			append(section1, div6);
			append(section1, t24);
			append(section1, div7);
			append(div7, t25);

			if (!mounted) {
				dispose = [
					listen(input0, "input", /*input0_input_handler*/ ctx[7]),
					listen(input1, "input", /*input1_input_handler*/ ctx[8]),
					listen(input2, "input", /*input2_input_handler*/ ctx[9]),
					listen(input3, "input", /*input3_input_handler*/ ctx[10]),
					listen(input4, "input", /*input4_input_handler*/ ctx[11]),
					listen(button0, "click", /*handleRegister*/ ctx[6]),
					listen(button1, "click", /*click_handler*/ ctx[12])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*username*/ 1 && input0.value !== /*username*/ ctx[0]) {
				set_input_value(input0, /*username*/ ctx[0]);
			}

			if (dirty & /*email*/ 2 && input1.value !== /*email*/ ctx[1]) {
				set_input_value(input1, /*email*/ ctx[1]);
			}

			if (dirty & /*password*/ 4 && input2.value !== /*password*/ ctx[2]) {
				set_input_value(input2, /*password*/ ctx[2]);
			}

			if (dirty & /*password2*/ 8 && input3.value !== /*password2*/ ctx[3]) {
				set_input_value(input3, /*password2*/ ctx[3]);
			}

			if (dirty & /*invitation*/ 16 && input4.value !== /*invitation*/ ctx[4]) {
				set_input_value(input4, /*invitation*/ ctx[4]);
			}

			if (dirty & /*message*/ 32) set_data(t25, /*message*/ ctx[5]);
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div8);
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let username;
	let email;
	let password;
	let password2;
	let invitation;
	let message = "";

	async function handleRegister() {
		if (XEUtils.isEmpty(username) || username.length < 3) {
			$$invalidate(5, message = "用户名至少需要 3 个字符");
			return;
		}

		if (password !== password2) {
			$$invalidate(5, message = "两次输入的密码不相同");
			return;
		}

		try {
			api.registerUser(username, password, email, invitation).then(reply => {
				$$invalidate(5, message = reply.data + "  3 秒后自动跳转到首页。");
				setTimeout(() => window.location = "/", 3000);
			}).catch(err => {
				if (err.response) $$invalidate(5, message = err.response.data);
			});
		} catch(error) {
			$$invalidate(5, message = error);
			console.log(error);
		}
	}

	function input0_input_handler() {
		username = this.value;
		$$invalidate(0, username);
	}

	function input1_input_handler() {
		email = this.value;
		$$invalidate(1, email);
	}

	function input2_input_handler() {
		password = this.value;
		$$invalidate(2, password);
	}

	function input3_input_handler() {
		password2 = this.value;
		$$invalidate(3, password2);
	}

	function input4_input_handler() {
		invitation = this.value;
		$$invalidate(4, invitation);
	}

	const click_handler = () => window.location = "/";

	return [
		username,
		email,
		password,
		password2,
		invitation,
		message,
		handleRegister,
		input0_input_handler,
		input1_input_handler,
		input2_input_handler,
		input3_input_handler,
		input4_input_handler,
		click_handler
	];
}

class Register extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default Register;