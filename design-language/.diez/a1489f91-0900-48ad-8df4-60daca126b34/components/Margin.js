"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const engine_1 = require("@diez/engine");
/**
 * Here we create a custom reusable component for describing layout margins.
 */
class Margin extends engine_1.prefab() {
    constructor() {
        super(...arguments);
        this.defaults = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        };
    }
    /**
     * Let's add in a helper method for defining margins (inspired by CSS shorthand).
     */
    static simple(vertical, maybeHorizontal) {
        const horizontal = (maybeHorizontal === undefined) ? vertical : maybeHorizontal;
        return new Margin({
            top: vertical,
            bottom: vertical,
            left: horizontal,
            right: horizontal,
        });
    }
}
exports.Margin = Margin;
