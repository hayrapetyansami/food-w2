"use strict";
import tabModule from "./components/tab";
import timerModule from "./components/timer";
import modalModule from "./components/modal";
import menuCardsModule from "./components/menuCards";
import formsModule from "./components/forms";
import sliderModule from "./components/slider";
import calculatorModule from "./components/calculator";

window.addEventListener("DOMContentLoaded", function () {
	// const tabModule = require("./components/tab");
	// const timerModule = require("./components/timer");
	// const modalModule = require("./components/modal");
	// const menuCardsModule = require("./components/menuCards");
	// const formsModule = require("./components/forms");
	// const sliderModule = require("./components/slider");
	// const calculatorModule = require("./components/calculator");

	tabModule();
	timerModule("2023-12-31 23:59:59");
	modalModule();
	menuCardsModule();
	formsModule();
	sliderModule();
	calculatorModule();
});