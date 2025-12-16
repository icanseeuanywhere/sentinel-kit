/* eslint-disable */
(function(root, factory) {
    if (typeof module === "object" && module.exports) {
        // CommonJS
        module.exports = factory(require("./dist/core.js"));
    } else if (typeof define === "function" && define.amd) {
        // AMD (optional)
        define(["./dist/core.js"], factory);
    } else {
        // Browser / global (fallback)
        root.IntegGuard = factory(root.IntegGuardCore);
    }
})(typeof self !== "undefined" ? self : this, function(core) {
    if (!core) {
        throw new Error("IntegGuard core not found");
    }

    /**
     * Public API (Bridge)
     * Jangan expose internal core
     */
    const api = {
        /**
         * Generate .integ file
         */
        generate(options) {
            return core.generate(options);
        },

        /**
         * Verify integrity
         * auto-exit jika gagal (core logic)
         */
        verify(options) {
            return core.verify(options);
        }
    };

    return api;
});