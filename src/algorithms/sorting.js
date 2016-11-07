"use strict";
function bubbleSort(debugMode) {
    if (debugMode === void 0) { debugMode = false; }
    if (debugMode)
        console.log("--------------");
    for (var outer = this.size(); outer >= 2; --outer) {
        for (var inner = 0; inner <= outer - 2; ++inner) {
            if (this.getElement(inner) > this.getElement(inner + 1)) {
                this.swap(inner, inner + 1);
            }
        }
        if (debugMode)
            console.log(this.toString());
    }
    if (debugMode)
        console.log("--------------");
}
exports.bubbleSort = bubbleSort;
function selectionSort(debugMode) {
    if (debugMode === void 0) { debugMode = false; }
    if (debugMode)
        console.log("--------------");
    var min, temp;
    for (var outer = 0; outer <= this.size() - 2; ++outer) {
        min = outer;
        for (var inner = outer + 1; inner <= this.size() - 1; ++inner) {
            if (this.getElement(inner) < this.getElement(min)) {
                min = inner;
            }
        }
        this.swap(outer, min);
        if (debugMode)
            console.log(this.toString());
    }
    if (debugMode)
        console.log("--------------");
}
exports.selectionSort = selectionSort;
function insertionSort(debugMode) {
    if (debugMode === void 0) { debugMode = false; }
    if (debugMode)
        console.log("--------------");
    var temp, inner;
    for (var outer = 1; outer <= this.size() - 1; ++outer) {
        temp = this.getElement(outer);
        inner = outer;
        while (inner > 0 && (this.getElement(inner - 1) >= temp)) {
            this.setValue(inner, this.getElement(inner - 1));
            inner--;
        }
        this.setValue(inner, temp);
        if (debugMode)
            console.log(this.toString());
    }
    if (debugMode)
        console.log("--------------");
}
exports.insertionSort = insertionSort;
