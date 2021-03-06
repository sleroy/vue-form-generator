module.exports = {
	bootstrap3: require("./layouts/bootstrap3.vue"),
	component: require("./formGenerator.vue"),
	schema: require("./utils/schema.js"),
	abstractLayout: require("./layouts/abstractLayout"),
	validators: require("./utils/validators.js"),
	abstractField: require("./fields/abstractField").default,

	install(Vue) {
	Vue.component("vue-form-generator", module.exports.component);
	Vue.component("form-bootstrap3", module.exports.bootstrap3);
}
};