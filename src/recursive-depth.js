module.exports = class DepthCalculator {
    calculateDepth(arr, currentDepth = 1) {
        if (arr.length === 0) return currentDepth;
        const depths = arr.map(element => {
            if (Array.isArray(element)) {
                return this.calculateDepth(element, currentDepth + 1);
            }
            return currentDepth;
        });
        return depths.reduce((a, b) => a > b ? a : b);

    }
};