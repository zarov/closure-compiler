/*
 * Copyright 2014 The Closure Compiler Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Definitions for ECMAScript 6 and later.
 * @see https://tc39.github.io/ecma262/
 * @see https://www.khronos.org/registry/typedarray/specs/latest/
 * @externs
 */



/**
 * @constructor
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator
 * @implements {IteratorIterable<VALUE>}
 * @template VALUE
 */
function Generator() {}

/**
 * @param {?=} opt_value
 * @return {!IIterableResult<VALUE>}
 * @override
 */
Generator.prototype.next = function(opt_value) {};

/**
 * @param {VALUE} value
 * @return {!IIterableResult<VALUE>}
 */
Generator.prototype.return = function(value) {};

/**
 * @param {?} exception
 * @return {!IIterableResult<VALUE>}
 */
Generator.prototype.throw = function(exception) {};


// TODO(johnlenz): Array and Arguments should be Iterable.



/**
 * @param {number} value
 * @return {number}
 * @nosideeffects
 */
Math.log10 = function(value) {};

/**
 * @param {number} value
 * @return {number}
 * @nosideeffects
 */
Math.log2 = function(value) {};

/**
 * @param {number} value
 * @return {number}
 * @nosideeffects
 */
Math.log1p = function(value) {};

/**
 * @param {number} value
 * @return {number}
 * @nosideeffects
 */
Math.expm1 = function(value) {};

/**
 * @param {number} value
 * @return {number}
 * @nosideeffects
 */
Math.cosh = function(value) {};

/**
 * @param {number} value
 * @return {number}
 * @nosideeffects
 */
Math.sinh = function(value) {};

/**
 * @param {number} value
 * @return {number}
 * @nosideeffects
 */
Math.tanh = function(value) {};

/**
 * @param {number} value
 * @return {number}
 * @nosideeffects
 */
Math.acosh = function(value) {};

/**
 * @param {number} value
 * @return {number}
 * @nosideeffects
 */
Math.asinh = function(value) {};

/**
 * @param {number} value
 * @return {number}
 * @nosideeffects
 */
Math.atanh = function(value) {};

/**
 * @param {number} value
 * @return {number}
 * @nosideeffects
 */
Math.trunc = function(value) {};

/**
 * @param {number} value
 * @return {number}
 * @nosideeffects
 */
Math.sign = function(value) {};

/**
 * @param {number} value
 * @return {number}
 * @nosideeffects
 */
Math.cbrt = function(value) {};

/**
 * @param {number} value1
 * @param {...number} var_args
 * @return {number}
 * @nosideeffects
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot
 */
Math.hypot = function(value1, var_args) {};

/**
 * @param {number} value1
 * @param {number} value2
 * @return {number}
 * @nosideeffects
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul
 */
Math.imul = function(value1, value2) {};

/**
 * @param {number} value
 * @return {number}
 * @nosideeffects
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32
 */
Math.clz32 = function(value) {};


/**
 * @param {*} a
 * @param {*} b
 * @return {boolean}
 * @nosideeffects
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
Object.is;


/**
 * Returns a language-sensitive string representation of this number.
 * @param {(string|!Array<string>)=} opt_locales
 * @param {Object=} opt_options
 * @return {string}
 * @nosideeffects
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
 * @see http://www.ecma-international.org/ecma-402/1.0/#sec-13.2.1
 * @override
 */
Number.prototype.toLocaleString = function(opt_locales, opt_options) {};


/**
 * Repeats the string the given number of times.
 *
 * @param {number} count The number of times the string is repeated.
 * @this {String|string}
 * @return {string}
 * @nosideeffects
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
 */
String.prototype.repeat = function(count) {};

/**
 * @constructor
 * @extends {Array<string>}
 * @see http://www.ecma-international.org/ecma-262/6.0/#sec-gettemplateobject
 */
var ITemplateArray = function() {};

/**
 * @type {!Array<string>}
 */
ITemplateArray.prototype.raw;

/**
 * @param {!ITemplateArray} template
 * @param {...*} var_args Substitution values.
 * @return {string}
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw
 */
String.raw = function(template, var_args) {};


/**
 * @param {number} codePoint
 * @param {...number} var_args Additional codepoints
 * @return {string}
 */
String.fromCodePoint = function(codePoint, var_args) {};


/**
 * @param {number} index
 * @return {number}
 * @nosideeffects
 */
String.prototype.codePointAt = function(index) {};


/**
 * @param {string=} opt_form
 * @return {string}
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
 */
String.prototype.normalize = function(opt_form) {};


/**
 * @param {string} searchString
 * @param {number=} opt_position
 * @return {boolean}
 * @nosideeffects
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
 */
String.prototype.startsWith = function(searchString, opt_position) {};

/**
 * @param {string} searchString
 * @param {number=} opt_position
 * @return {boolean}
 * @nosideeffects
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
 */
String.prototype.endsWith = function(searchString, opt_position) {};

/**
 * @param {string} searchString
 * @param {number=} opt_position
 * @return {boolean}
 * @nosideeffects
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
 */
String.prototype.includes = function(searchString, opt_position) {};


/**
 * @see http://dev.w3.org/html5/postmsg/
 * @interface
 */
function Transferable() {}

/**
 * @param {number} length The length in bytes
 * @constructor
 * @noalias
 * @throws {Error}
 * @implements {Transferable}
 */
function ArrayBuffer(length) {}

/** @type {number} */
ArrayBuffer.prototype.byteLength;

/**
 * @param {number} begin
 * @param {number=} opt_end
 * @return {!ArrayBuffer}
 * @nosideeffects
 */
ArrayBuffer.prototype.slice = function(begin, opt_end) {};


/**
 * @constructor
 * @noalias
 */
function ArrayBufferView() {}

/** @type {!ArrayBuffer} */
ArrayBufferView.prototype.buffer;

/** @type {number} */
ArrayBufferView.prototype.byteOffset;

/** @type {number} */
ArrayBufferView.prototype.byteLength;


/**
 * @typedef {!ArrayBuffer|!ArrayBufferView}
 */
var BufferSource;


/**
 * An artificial interface to describe methods available on all TypedArray
 * objects so that they can be operated on in type safe but generic way.
 * @record
 * @extends {IArrayLike<number>}
 */
function ITypedArray() {}

/** @type {number} */
ITypedArray.prototype.length;

/** @const {number} */
ITypedArray.prototype.BYTES_PER_ELEMENT;

/**
 * @param {ArrayBufferView|Array<number>} array
 * @param {number=} opt_offset
 * @return {undefined}
 */
ITypedArray.prototype.set = function(array, opt_offset) {};

/**
 * @param {number} begin
 * @param {number=} opt_end
 * @return {ITypedArray}
 * @nosideeffects
 */
ITypedArray.prototype.subarray = function(begin, opt_end) {};

/**
 * @param {number} value
 * @param {number=} opt_begin
 * @param {number=} opt_end
 * @return {ITypedArray}
 */
ITypedArray.prototype.fill = function(value, opt_begin, opt_end) {};


/**
 * @param {number|ArrayBufferView|Array<number>|ArrayBuffer} length or array
 *     or buffer
 * @param {number=} opt_byteOffset
 * @param {number=} opt_length
 * @constructor
 * @extends {ArrayBufferView}
 * @implements {ITypedArray}
 * @noalias
 * @throws {Error}
 * @modifies {arguments} If the user passes a backing array, then indexed
 *     accesses will modify the backing array. JSCompiler does not model
 *     this well. In other words, if you have:
 *     <code>
 *     var x = new ArrayBuffer(1);
 *     var y = new Int8Array(x);
 *     y[0] = 2;
 *     </code>
 *     JSCompiler will not recognize that the last assignment modifies x.
 *     We workaround this by marking all these arrays as @modifies {arguments},
 *     to introduce the possibility that x aliases y.
 */
function Int8Array(length, opt_byteOffset, opt_length) {}

/** @const {number} */
Int8Array.BYTES_PER_ELEMENT;

/**
 * @param {!Array<number>} source
 * @param {function(this:S, number): number=} opt_mapFn
 * @param {S=} opt_this
 * @template S
 * @return {!Int8Array}
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from
 */
Int8Array.from = function(source, opt_mapFn, opt_this) {};

/**
 * @param {...number} var_args
 * @return {!Int8Array}
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/of
 */
Int8Array.of = function(var_args) {};

/** @const {number} */
Int8Array.prototype.BYTES_PER_ELEMENT;

/** @type {number} */
Int8Array.prototype.length;

/**
 * @param {ArrayBufferView|Array<number>} array
 * @param {number=} opt_offset
 * @override
 * @return {undefined}
 */
Int8Array.prototype.set = function(array, opt_offset) {};

/**
 * @param {number} begin
 * @param {number=} opt_end
 * @return {!Int8Array}
 * @override
 * @nosideeffects
 */
Int8Array.prototype.subarray = function(begin, opt_end) {};

/**
 * @param {number} value
 * @param {number=} opt_begin
 * @param {number=} opt_end
 * @return {!Int8Array}
 * @override
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/fill
 */
Int8Array.prototype.fill = function(value, opt_begin, opt_end) {};

/**
 * @param {number} target
 * @param {number} start
 * @param {number=} opt_end
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin
 * @return {Int8Array}
 */
Int8Array.prototype.copyWithin = function(target, start, opt_end) {};

/**
 * @param {number|ArrayBufferView|Array<number>|ArrayBuffer} length or array
 *     or buffer
 * @param {number=} opt_byteOffset
 * @param {number=} opt_length
 * @constructor
 * @extends {ArrayBufferView}
 * @implements {ITypedArray}
 * @noalias
 * @throws {Error}
 * @modifies {arguments}
 */
function Uint8Array(length, opt_byteOffset, opt_length) {}

/** @const {number} */
Uint8Array.BYTES_PER_ELEMENT;

/**
 * @param {!Array<number>} source
 * @param {function(this:S, number): number=} opt_mapFn
 * @param {S=} opt_this
 * @template S
 * @return {!Uint8Array}
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from
 */
Uint8Array.from = function(source, opt_mapFn, opt_this) {};

/**
 * @param {...number} var_args
 * @return {!Uint8Array}
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/of
 */
Uint8Array.of = function(var_args) {};

/** @const {number} */
Uint8Array.prototype.BYTES_PER_ELEMENT;

/** @type {number} */
Uint8Array.prototype.length;

/**
 * @param {ArrayBufferView|Array<number>} array
 * @param {number=} opt_offset
 * @override
 * @return {undefined}
 */
Uint8Array.prototype.set = function(array, opt_offset) {};

/**
 * @param {number} begin
 * @param {number=} opt_end
 * @return {!Uint8Array}
 * @nosideeffects
 * @override
 */
Uint8Array.prototype.subarray = function(begin, opt_end) {};

/**
 * @param {number} value
 * @param {number=} opt_begin
 * @param {number=} opt_end
 * @return {!Uint8Array}
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/fill
 * @override
 */
Uint8Array.prototype.fill = function(value, opt_begin, opt_end) {};

/**
 * @param {number} target
 * @param {number} start
 * @param {number=} opt_end
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin
 * @return {Uint8Array}
 */
Uint8Array.prototype.copyWithin = function(target, start, opt_end) {};

/**
 * @param {number|ArrayBufferView|Array<number>|ArrayBuffer} length or array
 *     or buffer
 * @param {number=} opt_byteOffset
 * @param {number=} opt_length
 * @constructor
 * @extends {ArrayBufferView}
 * @implements {ITypedArray}
 * @noalias
 * @throws {Error}
 * @modifies {arguments}
 */
function Uint8ClampedArray(length, opt_byteOffset, opt_length) {}

/** @const {number} */
Uint8ClampedArray.BYTES_PER_ELEMENT;

/**
 * @param {!Array<number>} source
 * @param {function(this:S, number): number=} opt_mapFn
 * @param {S=} opt_this
 * @template S
 * @return {!Uint8ClampedArray}
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from
 */
Uint8ClampedArray.from = function(source, opt_mapFn, opt_this) {};

/**
 * @param {...number} var_args
 * @return {!Uint8ClampedArray}
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/of
 */
Uint8ClampedArray.of = function(var_args) {};

/** @const {number} */
Uint8ClampedArray.prototype.BYTES_PER_ELEMENT;

/** @type {number} */
Uint8ClampedArray.prototype.length;

/**
 * @param {ArrayBufferView|Array<number>} array
 * @param {number=} opt_offset
 * @override
 * @return {undefined}
 */
Uint8ClampedArray.prototype.set = function(array, opt_offset) {};

/**
 * @param {number} begin
 * @param {number=} opt_end
 * @return {!Uint8ClampedArray}
 * @override
 * @nosideeffects
 */
Uint8ClampedArray.prototype.subarray = function(begin, opt_end) {};


/**
 * @param {number} value
 * @param {number=} opt_begin
 * @param {number=} opt_end
 * @return {!Uint8ClampedArray}
 * @override
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/fill
 */
Uint8ClampedArray.prototype.fill = function(value, opt_begin, opt_end) {};

/**
 * @param {number} target
 * @param {number} start
 * @param {number=} opt_end
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin
 * @return {Uint8ClampedArray}
 */
Uint8ClampedArray.prototype.copyWithin = function(target, start, opt_end) {};

/**
 * @typedef {Uint8ClampedArray}
 * @deprecated CanvasPixelArray has been replaced by Uint8ClampedArray
 *     in the latest spec.
 * @see http://www.w3.org/TR/2dcontext/#imagedata
 */
var CanvasPixelArray;


/**
 * @param {number|ArrayBufferView|Array<number>|ArrayBuffer} length or array
 *     or buffer
 * @param {number=} opt_byteOffset
 * @param {number=} opt_length
 * @constructor
 * @extends {ArrayBufferView}
 * @implements {ITypedArray}
 * @noalias
 * @throws {Error}
 * @modifies {arguments}
 */
function Int16Array(length, opt_byteOffset, opt_length) {}

/** @const {number} */
Int16Array.BYTES_PER_ELEMENT;

/**
 * @param {!Array<number>} source
 * @param {function(this:S, number): number=} opt_mapFn
 * @param {S=} opt_this
 * @template S
 * @return {!Int16Array}
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from
 */
Int16Array.from = function(source, opt_mapFn, opt_this) {};

/**
 * @param {...number} var_args
 * @return {!Int16Array}
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/of
 */
Int16Array.of = function(var_args) {};

/** @const {number} */
Int16Array.prototype.BYTES_PER_ELEMENT;

/** @type {number} */
Int16Array.prototype.length;

/**
 * @param {ArrayBufferView|Array<number>} array
 * @param {number=} opt_offset
 * @override
 * @return {undefined}
 */
Int16Array.prototype.set = function(array, opt_offset) {};

/**
 * @param {number} begin
 * @param {number=} opt_end
 * @return {!Int16Array}
 * @nosideeffects
 * @override
 */
Int16Array.prototype.subarray = function(begin, opt_end) {};

/**
 * @param {number} value Int16 value to fill the array.
 * @param {number=} opt_begin
 * @param {number=} opt_end
 * @return {!Int16Array}
 * @override
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/fill
 */
Int16Array.prototype.fill = function(value, opt_begin, opt_end) {};

/**
 * @param {number} target
 * @param {number} start
 * @param {number=} opt_end
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin
 * @return {Int16Array}
 */
Int16Array.prototype.copyWithin = function(target, start, opt_end) {};

/**
 * @param {number|ArrayBufferView|Array<number>|ArrayBuffer} length or array
 *     or buffer
 * @param {number=} opt_byteOffset
 * @param {number=} opt_length
 * @constructor
 * @extends {ArrayBufferView}
 * @implements {ITypedArray}
 * @noalias
 * @throws {Error}
 * @modifies {arguments}
 */
function Uint16Array(length, opt_byteOffset, opt_length) {}

/** @const {number} */
Uint16Array.BYTES_PER_ELEMENT;

/**
 * @param {!Array<number>} source
 * @param {function(this:S, number): number=} opt_mapFn
 * @param {S=} opt_this
 * @template S
 * @return {!Uint16Array}
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from
 */
Uint16Array.from = function(source, opt_mapFn, opt_this) {};

/**
 * @param {...number} var_args
 * @return {!Uint16Array}
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/of
 */
Uint16Array.of = function(var_args) {};

/** @const {number} */
Uint16Array.prototype.BYTES_PER_ELEMENT;

/** @type {number} */
Uint16Array.prototype.length;

/**
 * @param {ArrayBufferView|Array<number>} array
 * @param {number=} opt_offset
 * @override
 * @return {undefined}
 */
Uint16Array.prototype.set = function(array, opt_offset) {};

/**
 * @param {number} begin
 * @param {number=} opt_end
 * @return {!Uint16Array}
 * @override
 * @nosideeffects
 */
Uint16Array.prototype.subarray = function(begin, opt_end) {};

/**
 * @param {number} value Uint16 value to fill the array.
 * @param {number=} opt_begin
 * @param {number=} opt_end
 * @return {!Uint16Array}
 * @override
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/fill
 */
Uint16Array.prototype.fill = function(value, opt_begin, opt_end) {};

/**
 * @param {number} target
 * @param {number} start
 * @param {number=} opt_end
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin
 * @return {Uint16Array}
 */
Uint16Array.prototype.copyWithin = function(target, start, opt_end) {};

/**
 * @param {number|ArrayBufferView|Array<number>|ArrayBuffer} length or array
 *     or buffer
 * @param {number=} opt_byteOffset
 * @param {number=} opt_length
 * @constructor
 * @extends {ArrayBufferView}
 * @implements {ITypedArray}
 * @noalias
 * @throws {Error}
 * @modifies {arguments}
 */
function Int32Array(length, opt_byteOffset, opt_length) {}

/** @const {number} */
Int32Array.BYTES_PER_ELEMENT;

/**
 * @param {!Array<number>} source
 * @param {function(this:S, number): number=} opt_mapFn
 * @param {S=} opt_this
 * @template S
 * @return {!Int32Array}
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from
 */
Int32Array.from = function(source, opt_mapFn, opt_this) {};

/**
 * @param {...number} var_args
 * @return {!Int32Array}
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/of
 */
Int32Array.of = function(var_args) {};

/** @const {number} */
Int32Array.prototype.BYTES_PER_ELEMENT;

/** @type {number} */
Int32Array.prototype.length;

/**
 * @param {ArrayBufferView|Array<number>} array
 * @param {number=} opt_offset
 * @override
 * @return {undefined}
 */
Int32Array.prototype.set = function(array, opt_offset) {};

/**
 * @param {number} begin
 * @param {number=} opt_end
 * @return {!Int32Array}
 * @override
 * @nosideeffects
 */
Int32Array.prototype.subarray = function(begin, opt_end) {};

/**
 * @param {number} value
 * @param {number=} opt_begin
 * @param {number=} opt_end
 * @return {!Int32Array}
 * @override
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/fill
 */
Int32Array.prototype.fill = function(value, opt_begin, opt_end) {};

/**
 * @param {number} target
 * @param {number} start
 * @param {number=} opt_end
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin
 * @return {Int32Array}
 */
Int32Array.prototype.copyWithin = function(target, start, opt_end) {};

/**
 * @param {number|ArrayBufferView|Array<number>|ArrayBuffer} length or array
 *     or buffer
 * @param {number=} opt_byteOffset
 * @param {number=} opt_length
 * @constructor
 * @extends {ArrayBufferView}
 * @implements {ITypedArray}
 * @noalias
 * @throws {Error}
 * @modifies {arguments}
 */
function Uint32Array(length, opt_byteOffset, opt_length) {}

/** @const {number} */
Uint32Array.BYTES_PER_ELEMENT;

/**
 * @param {!Array<number>} source
 * @param {function(this:S, number): number=} opt_mapFn
 * @param {S=} opt_this
 * @template S
 * @return {!Uint32Array}
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from
 */
Uint32Array.from = function(source, opt_mapFn, opt_this) {};

/**
 * @param {...number} var_args
 * @return {!Uint32Array}
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/of
 */
Uint32Array.of = function(var_args) {};

/** @const {number} */
Uint32Array.prototype.BYTES_PER_ELEMENT;

/** @type {number} */
Uint32Array.prototype.length;

/**
 * @param {ArrayBufferView|Array<number>} array
 * @param {number=} opt_offset
 * @override
 * @return {undefined}
 */
Uint32Array.prototype.set = function(array, opt_offset) {};

/**
 * @param {number} begin
 * @param {number=} opt_end
 * @return {!Uint32Array}
 * @override
 * @nosideeffects
 */
Uint32Array.prototype.subarray = function(begin, opt_end) {};

/**
 * @param {number} value
 * @param {number=} opt_begin
 * @param {number=} opt_end
 * @return {!Uint32Array}
 * @override
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/fill
 */
Uint32Array.prototype.fill = function(value, opt_begin, opt_end) {};

/**
 * @param {number} target
 * @param {number} start
 * @param {number=} opt_end
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin
 * @return {Uint32Array}
 */
Uint32Array.prototype.copyWithin = function(target, start, opt_end) {};

/**
 * @param {number|ArrayBufferView|Array<number>|ArrayBuffer} length or array
 *     or buffer
 * @param {number=} opt_byteOffset
 * @param {number=} opt_length
 * @constructor
 * @extends {ArrayBufferView}
 * @implements {ITypedArray}
 * @noalias
 * @throws {Error}
 * @modifies {arguments}
 */
function Float32Array(length, opt_byteOffset, opt_length) {}

/** @const {number} */
Float32Array.BYTES_PER_ELEMENT;

/**
 * @param {!Array<number>} source
 * @param {function(this:S, number): number=} opt_mapFn
 * @param {S=} opt_this
 * @template S
 * @return {!Float32Array}
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from
 */
Float32Array.from = function(source, opt_mapFn, opt_this) {};

/**
 * @param {...number} var_args
 * @return {!Float32Array}
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/of
 */
Float32Array.of = function(var_args) {};

/** @const {number} */
Float32Array.prototype.BYTES_PER_ELEMENT;

/** @type {number} */
Float32Array.prototype.length;

/**
 * @param {ArrayBufferView|Array<number>} array
 * @param {number=} opt_offset
 * @override
 * @return {undefined}
 */
Float32Array.prototype.set = function(array, opt_offset) {};

/**
 * @param {number} begin
 * @param {number=} opt_end
 * @return {!Float32Array}
 * @override
 * @nosideeffects
 */
Float32Array.prototype.subarray = function(begin, opt_end) {};

/**
 * @param {number} value
 * @param {number=} opt_begin
 * @param {number=} opt_end
 * @return {!Float32Array}
 * @override
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/fill
 */
Float32Array.prototype.fill = function(value, opt_begin, opt_end) {};

/**
 * @param {number} target
 * @param {number} start
 * @param {number=} opt_end
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin
 * @return {Float32Array}
 */
Float32Array.prototype.copyWithin = function(target, start, opt_end) {};

/**
 * @param {number|ArrayBufferView|Array<number>|ArrayBuffer} length or array
 *     or buffer
 * @param {number=} opt_byteOffset
 * @param {number=} opt_length
 * @constructor
 * @extends {ArrayBufferView}
 * @implements {ITypedArray}
 * @noalias
 * @throws {Error}
 * @modifies {arguments}
 */
function Float64Array(length, opt_byteOffset, opt_length) {}

/** @const {number} */
Float64Array.BYTES_PER_ELEMENT;

/**
 * @param {!Array<number>} source
 * @param {function(this:S, number): number=} opt_mapFn
 * @param {S=} opt_this
 * @template S
 * @return {!Float64Array}
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from
 */
Float64Array.from = function(source, opt_mapFn, opt_this) {};

/**
 * @param {...number} var_args
 * @return {!Float64Array}
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/of
 */
Float64Array.of = function(var_args) {};

/** @const {number} */
Float64Array.prototype.BYTES_PER_ELEMENT;

/** @type {number} */
Float64Array.prototype.length;

/**
 * @param {ArrayBufferView|Array<number>} array
 * @param {number=} opt_offset
 * @override
 * @return {undefined}
 */
Float64Array.prototype.set = function(array, opt_offset) {};

/**
 * @param {number} begin
 * @param {number=} opt_end
 * @return {!Float64Array}
 * @override
 * @nosideeffects
 */
Float64Array.prototype.subarray = function(begin, opt_end) {};

/**
 * @param {number} value
 * @param {number=} opt_begin
 * @param {number=} opt_end
 * @return {!Float64Array}
 * @override
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/fill
 */
Float64Array.prototype.fill = function(value, opt_begin, opt_end) {};

/**
 * @param {number} target
 * @param {number} start
 * @param {number=} opt_end
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin
 * @return {Float64Array}
 */
Float64Array.prototype.copyWithin = function(target, start, opt_end) {};

/**
 * @param {ArrayBuffer} buffer
 * @param {number=} opt_byteOffset
 * @param {number=} opt_byteLength
 * @constructor
 * @extends {ArrayBufferView}
 * @noalias
 * @throws {Error}
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays/DataView
 */
function DataView(buffer, opt_byteOffset, opt_byteLength) {}

/**
 * @param {number} byteOffset
 * @return {number}
 * @throws {Error}
 */
DataView.prototype.getInt8 = function(byteOffset) {};

/**
 * @param {number} byteOffset
 * @return {number}
 * @throws {Error}
 */
DataView.prototype.getUint8 = function(byteOffset) {};

/**
 * @param {number} byteOffset
 * @param {boolean=} opt_littleEndian
 * @return {number}
 * @throws {Error}
 */
DataView.prototype.getInt16 = function(byteOffset, opt_littleEndian) {};

/**
 * @param {number} byteOffset
 * @param {boolean=} opt_littleEndian
 * @return {number}
 * @throws {Error}
 */
DataView.prototype.getUint16 = function(byteOffset, opt_littleEndian) {};

/**
 * @param {number} byteOffset
 * @param {boolean=} opt_littleEndian
 * @return {number}
 * @throws {Error}
 */
DataView.prototype.getInt32 = function(byteOffset, opt_littleEndian) {};

/**
 * @param {number} byteOffset
 * @param {boolean=} opt_littleEndian
 * @return {number}
 * @throws {Error}
 */
DataView.prototype.getUint32 = function(byteOffset, opt_littleEndian) {};

/**
 * @param {number} byteOffset
 * @param {boolean=} opt_littleEndian
 * @return {number}
 * @throws {Error}
 */
DataView.prototype.getFloat32 = function(byteOffset, opt_littleEndian) {};

/**
 * @param {number} byteOffset
 * @param {boolean=} opt_littleEndian
 * @return {number}
 * @throws {Error}
 */
DataView.prototype.getFloat64 = function(byteOffset, opt_littleEndian) {};

/**
 * @param {number} byteOffset
 * @param {number} value
 * @throws {Error}
 * @return {undefined}
 */
DataView.prototype.setInt8 = function(byteOffset, value) {};

/**
 * @param {number} byteOffset
 * @param {number} value
 * @throws {Error}
 * @return {undefined}
 */
DataView.prototype.setUint8 = function(byteOffset, value) {};

/**
 * @param {number} byteOffset
 * @param {number} value
 * @param {boolean=} opt_littleEndian
 * @throws {Error}
 * @return {undefined}
 */
DataView.prototype.setInt16 = function(byteOffset, value, opt_littleEndian) {};

/**
 * @param {number} byteOffset
 * @param {number} value
 * @param {boolean=} opt_littleEndian
 * @throws {Error}
 * @return {undefined}
 */
DataView.prototype.setUint16 = function(byteOffset, value, opt_littleEndian) {};

/**
 * @param {number} byteOffset
 * @param {number} value
 * @param {boolean=} opt_littleEndian
 * @throws {Error}
 * @return {undefined}
 */
DataView.prototype.setInt32 = function(byteOffset, value, opt_littleEndian) {};

/**
 * @param {number} byteOffset
 * @param {number} value
 * @param {boolean=} opt_littleEndian
 * @throws {Error}
 * @return {undefined}
 */
DataView.prototype.setUint32 = function(byteOffset, value, opt_littleEndian) {};

/**
 * @param {number} byteOffset
 * @param {number} value
 * @param {boolean=} opt_littleEndian
 * @throws {Error}
 * @return {undefined}
 */
DataView.prototype.setFloat32 = function(
    byteOffset, value, opt_littleEndian) {};

/**
 * @param {number} byteOffset
 * @param {number} value
 * @param {boolean=} opt_littleEndian
 * @throws {Error}
 * @return {undefined}
 */
DataView.prototype.setFloat64 = function(
    byteOffset, value, opt_littleEndian) {};


/**
 * @see https://github.com/promises-aplus/promises-spec
 * @typedef {{then: ?}}
 */
var Thenable;


/**
 * This is not an official DOM interface. It is used to add generic typing
 * and respective type inference where available.
 * {@see goog.Thenable} inherits from this making all promises
 * interoperate.
 * @interface
 * @template TYPE
 */
function IThenable() {}


/**
 * @param {?(function(TYPE):VALUE)=} opt_onFulfilled
 * @param {?(function(*): *)=} opt_onRejected
 * @return {RESULT}
 * @template VALUE
 *
 * When a Promise (or thenable) is returned from the fulfilled callback,
 * the result is the payload of that promise, not the promise itself.
 *
 * @template RESULT := type('IThenable',
 *     cond(isUnknown(VALUE), unknown(),
 *       mapunion(VALUE, (V) =>
 *         cond(isTemplatized(V) && sub(rawTypeOf(V), 'IThenable'),
 *           templateTypeOf(V, 0),
 *           cond(sub(V, 'Thenable'),
 *              unknown(),
 *              V)))))
 * =:
 */
IThenable.prototype.then = function(opt_onFulfilled, opt_onRejected) {};


/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * @param {function(
 *             function((TYPE|IThenable<TYPE>|Thenable|null)=),
 *             function(*=))} resolver
 * @constructor
 * @implements {IThenable<TYPE>}
 * @template TYPE
 */
function Promise(resolver) {}


/**
 * @param {VALUE=} opt_value
 * @return {RESULT}
 * @template VALUE
 * @template RESULT := type('Promise',
 *     cond(isUnknown(VALUE), unknown(),
 *       mapunion(VALUE, (V) =>
 *         cond(isTemplatized(V) && sub(rawTypeOf(V), 'IThenable'),
 *           templateTypeOf(V, 0),
 *           cond(sub(V, 'Thenable'),
 *              unknown(),
 *              V)))))
 * =:
 */
Promise.resolve = function(opt_value) {};


/**
 * @param {*=} opt_error
 * @return {!Promise<?>}
 */
Promise.reject = function(opt_error) {};


/**
 * @template T
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * @param {!Array<T|!Promise<T>>|!Iterable<T|!Promise<T>>} iterable
 * @return {!Promise<!Array<T>>}
 */
Promise.all = function(iterable) {};


/**
 * @template T
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * @param {!Array<T>|!Iterable<T>} iterable
 * @return {!Promise<T>}
 */
Promise.race = function(iterable) {};


/**
 * @param {?(function(this:void, TYPE):VALUE)=} opt_onFulfilled
 * @param {?(function(this:void, *): *)=} opt_onRejected
 * @return {RESULT}
 * @template VALUE
 *
 * When a Promise (or thenable) is returned from the fulfilled callback,
 * the result is the payload of that promise, not the promise itself.
 *
 * @template RESULT := type('Promise',
 *     cond(isUnknown(VALUE), unknown(),
 *       mapunion(VALUE, (V) =>
 *         cond(isTemplatized(V) && sub(rawTypeOf(V), 'IThenable'),
 *           templateTypeOf(V, 0),
 *           cond(sub(V, 'Thenable'),
 *              unknown(),
 *              V)))))
 * =:
 * @override
 */
Promise.prototype.then = function(opt_onFulfilled, opt_onRejected) {};


/**
 * @param {function(*): RESULT} onRejected
 * @return {!Promise<RESULT>}
 * @template RESULT
 */
Promise.prototype.catch = function(onRejected) {};


/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
 * @param {...T} var_args
 * @return {!Array<T>}
 * @template T
 */
Array.of = function(var_args) {};


/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
 * @param {string|!IArrayLike<T>|!Iterable<T>} arrayLike
 * @param {function(this:S, (string|T), number): R=} opt_mapFn
 * @param {S=} opt_this
 * @return {!Array<R>}
 * @template T,S,R
 */
Array.from = function(arrayLike, opt_mapFn, opt_this) {};


/** @return {!IteratorIterable<number>} */
Array.prototype.keys;


/**
 * @return {!IteratorIterable<!Array<number|T>>} Iterator of [key, value] pairs.
 */
Array.prototype.entries;


/**
 * @param {!function(this:S, T, number, !Array<T>): boolean} predicate
 * @param {S=} opt_this
 * @return {T|undefined}
 * @this {IArrayLike<T>|string}
 * @template T,S
 * @see http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.find
 */
Array.prototype.find = function(predicate, opt_this) {};


/**
 * @param {!function(this:S, T, number, !Array<T>): boolean} predicate
 * @param {S=} opt_this
 * @return {number}
 * @this {IArrayLike<T>|string}
 * @template T,S
 * @see http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.findindex
 */
Array.prototype.findIndex = function(predicate, opt_this) {};


/**
 * @param {T} value
 * @param {number=} opt_begin
 * @param {number=} opt_end
 * @return {!IArrayLike<T>}
 * @this {!IArrayLike<T>|string}
 * @template T
 * @see http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.fill
 */
Array.prototype.fill = function(value, opt_begin, opt_end) {};


/**
 * @param {number} target
 * @param {number} start
 * @param {number=} opt_end
 * @see http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.copywithin
 * @template T
 * @return {!IArrayLike<T>}
 */
Array.prototype.copyWithin = function(target, start, opt_end) {};


/**
 * @param {T} searchElement
 * @param {number=} opt_fromIndex
 * @return {boolean}
 * @this {!IArrayLike<T>|string}
 * @template T
 * @see https://tc39.github.io/ecma262/#sec-array.prototype.includes
 */
Array.prototype.includes = function(searchElement, opt_fromIndex) {};


/**
 * @param {!Object} obj
 * @return {!Array<symbol>}
 * @see http://www.ecma-international.org/ecma-262/6.0/#sec-object.getownpropertysymbols
 */
Object.getOwnPropertySymbols = function(obj) {};


/**
 * @param {!Object} obj
 * @param {?} proto
 * @return {!Object}
 * @see http://www.ecma-international.org/ecma-262/6.0/#sec-object.setprototypeof
 */
Object.setPrototypeOf = function(obj, proto) {};


/**
 * @const {number}
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON
 */
Number.EPSILON;

/**
 * @const {number}
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER
 */
Number.MIN_SAFE_INTEGER;

/**
 * @const {number}
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
 */
Number.MAX_SAFE_INTEGER;



/**
 * Parse an integer. Use of {@code parseInt} without {@code base} is strictly
 * banned in Google. If you really want to parse octal or hex based on the
 * leader, then pass {@code undefined} as the base.
 *
 * @param {string} string
 * @param {number|undefined} radix
 * @return {number}
 * @nosideeffects
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt
 */
Number.parseInt = function(string, radix) {};

/**
 * @param {string} string
 * @return {number}
 * @nosideeffects
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat
 */
Number.parseFloat = function(string) {};

/**
 * @param {number} value
 * @return {boolean}
 * @nosideeffects
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
 */
Number.isNaN = function(value) {};

/**
 * @param {number} value
 * @return {boolean}
 * @nosideeffects
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite
 */
Number.isFinite = function(value) {};

/**
 * @param {number} value
 * @return {boolean}
 * @nosideeffects
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
 */
Number.isInteger = function(value) {};

/**
 * @param {number} value
 * @return {boolean}
 * @nosideeffects
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger
 */
Number.isSafeInteger = function(value) {};



/**
 * @param {!Object} target
 * @param {...Object} var_args
 * @return {!Object}
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */
Object.assign = function(target, var_args) {};

/**
 * TODO(dbeam): find a better place for ES2017 externs like this one.
 * @param {!Object<T>} obj
 * @return {!Array<T>} values
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
 * @throws {Error}
 * @template T
 */
Object.values = function(obj) {};



/**
 * @const
 * @see http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect
 */
var Reflect = {};

/**
 * @param {function(this: THIS, ...?): RESULT} target
 * @param {THIS} thisArg
 * @param {!Array} argList
 * @return {RESULT}
 * @template THIS, RESULT
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/apply
 */
Reflect.apply = function(target, thisArg, argList) {};

/**
 * @param {function(new: ?, ...?)} target
 * @param {!Array} argList
 * @param {function(new: TARGET, ...?)=} opt_newTarget
 * @return {TARGET}
 * @template TARGET
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/construct
 */
Reflect.construct = function(target, argList, opt_newTarget) {};

/**
 * @param {!Object} target
 * @param {string} propertyKey
 * @param {!Object} attributes
 * @return {boolean}
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/defineProperty
 */
Reflect.defineProperty = function(target, propertyKey, attributes) {};

/**
 * @param {!Object} target
 * @param {string} propertyKey
 * @return {boolean}
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/deleteProperty
 */
Reflect.deleteProperty = function(target, propertyKey) {};

/**
 * @param {!Object} target
 * @param {string} propertyKey
 * @param {!Object=} opt_receiver
 * @return {*}
 * @nosideeffects
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/get
 */
Reflect.get = function(target, propertyKey, opt_receiver) {};

/**
 * @param {!Object} target
 * @param {string} propertyKey
 * @return {?ObjectPropertyDescriptor}
 * @nosideeffects
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor
 */
Reflect.getOwnPropertyDescriptor = function(target, propertyKey) {};

/**
 * @param {!Object} target
 * @return {?Object}
 * @nosideeffects
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getPrototypeOf
 */
Reflect.getPrototypeOf = function(target) {};

/**
 * @param {!Object} target
 * @param {string} propertyKey
 * @return {boolean}
 * @nosideeffects
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/has
 */
Reflect.has = function(target, propertyKey) {};

/**
 * @param {!Object} target
 * @return {boolean}
 * @nosideeffects
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/isExtensible
 */
Reflect.isExtensible = function(target) {};

/**
 * @param {!Object} target
 * @return {!Array<(string|symbol)>}
 * @nosideeffects
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys
 */
Reflect.ownKeys = function(target) {};

/**
 * @param {!Object} target
 * @return {boolean}
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/preventExtensions
 */
Reflect.preventExtensions = function(target) {};

/**
 * @param {!Object} target
 * @param {string} propertyKey
 * @param {*} value
 * @param {!Object=} opt_receiver
 * @return {boolean}
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/set
 */
Reflect.set = function(target, propertyKey, value, opt_receiver) {};

/**
 * @param {!Object} target
 * @param {?Object} proto
 * @return {boolean}
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/setPrototypeOf
 */
Reflect.setPrototypeOf = function(target, proto) {};
