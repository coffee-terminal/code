/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js"
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
() {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var rand = function rand(min, max) {
  var minCeiled = Math.ceil(min);
  var maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};

// 1. per cd nugeliaujame i projekto folderi
// 2. npm init -y inicijuoja node
// 3. apsirasome kanors pakeiciame atsiradusiame package.json
// 4. pradedame irasineti bibliotekas kaip npm i uuid ar npm install laravel-mix --save-dev

/* 

Ganykla. Turim trijų rūšių gyvulius: avis, antis ir antilopes. 
Kiekvienas gyvulys turi savo svorį.
Parašyti localStorage CRUD aplikaciją, 
kurioje būtų galima pridėti naujus gyvulius su jų svoriais į ganyklą,
 ištrinti iš ganyklos 
 ir redaguoti kiekvieno jų svorį.
 */

/*   
1. inicijuoja funkcija kuri pirma paziuri ar yra listas, jei yra rendina
2. toje pacioje funcijoje yra migtukas kuris laukia kad nurodytu pasirinkta spalva
3. pasirinkta spalva siunciama i Store funkcija kad papilnai butu aprasomas value objektas
4. store funkcijja ideda objekta i sarasa ir kreipiasi i Write funkcija
5. write funkcija pavercia sarasa stringu, ir prideda prie key jo value data
6.  store kreipiasi i render funkcija, joje selectinama kur bus talpinama, po to  pasirenkama template pagal kuria klonuojama struktuka kiekvienam forEach ciklui


*/

var LIST;
var KEY = 'gyvuliai';
var pasirinktas;
var animalInput = document.querySelector('[data-animal-input]');
var weightInput = document.querySelector('[data-weight-button]');
animalInput.addEventListener('change', function (_) {
  return pasirinktas = animalInput.value;
});
var init = function init(_) {
  readLocalStorage();
  render();
  // const animalInput = document.querySelector('[data-animal-input]');
  var animalAddButton = document.querySelector('[data-add-animal-button]');
  // const weightInput = document.querySelector('[data-weight-button]');

  animalAddButton.addEventListener('click', function (_) {
    var animal = animalInput.value;
    var svorisAnimal = weightInput.value;
    Store(animal, svorisAnimal);
  });
};
var readLocalStorage = function readLocalStorage(_) {
  var data = localStorage.getItem(KEY);
  if (null === data) {
    LIST = [];
  } else {
    LIST = JSON.parse(data);
  }
};
var writeLocalStorage = function writeLocalStorage(_) {
  var data = JSON.stringify(LIST);
  localStorage.setItem(KEY, data);
};
var render = function render(_) {
  var listBin = document.querySelector('[data-colors-list]');
  var listRowTemplate = document.querySelector('[data-list-template]');
  listBin.innerHTML = '';
  LIST.forEach(function (animal) {
    //create
    var rowHtml = listRowTemplate.content.cloneNode(true);
    var animalId = rowHtml.querySelector('[data-animal-id]');
    animalId.innerHTML = "".concat(animal.gyvunas, " ").concat(animal.svoris, " kg ");

    //delete
    var deleteButton = rowHtml.querySelector('[data-delete-animal]');
    deleteButton.dataset.id = animal.id;
    deleteButton.addEventListener('click', function (e) {
      var id = parseInt(e.target.dataset.id);
      Destroy(id);
    });

    //edit
    var editInput = rowHtml.querySelector('[data-edit-weight-input]');
    var editButton = rowHtml.querySelector('[data-edit-weight-button]');
    editInput.value = animal.svoris; // senu duomenu perrrasymas i edit forma
    editButton.dataset.id = animal.id;
    editButton.addEventListener('click', function (x) {
      var id = parseInt(x.target.dataset.id);
      var kg = editInput.value;
      Update(id, kg);
    });
    listBin.appendChild(rowHtml);
  });
};
var Store = function Store(data, meta) {
  if ('' != pasirinktas && weightInput.value > 0) {
    var id = rand(10000000, 99999999);
    dataToStore = {
      id: id,
      gyvunas: data,
      svoris: meta
    };
    LIST.push(dataToStore);
    writeLocalStorage();
    render();
  }
};
var Update = function Update(id, data) {
  LIST = LIST.map(function (item) {
    return item.id == id ? _objectSpread(_objectSpread({}, item), {}, {
      svoris: data
    }) : item;
  });
  writeLocalStorage();
  render();
};
var Destroy = function Destroy(id) {
  LIST = LIST.filter(function (color) {
    return color.id != id;
  }); //ismetam is saraso kvadratuka su nurodytu id
  writeLocalStorage();
  render();
};
init();

/* ==============================================================================================
==============================================================================================
==============================================================================================
==============================================================================================
============================================================================================== */

// const renderAnimalList = (_) => {
//     const ol = document.querySelector('#ol');
//     ol.innerHTML = '';
//     animalKey.forEach((animal) => {
//         const li = document.createElement('li');
//         li.style.width = '40%';
//         li.style.backgroundColor = 'rgb(255,255,255,0.2)';
//         li.innerHTML = animal;
//         li.style.lineHeight = '40px';
//         li.style.borderBottom = '1px solid white';
//         ol.append(li);
//     });
// };

// let animalKey;

// animalKey = localStorage.getItem('gyvuliai');

// if (null === animalKey) {
//     animalKey = [];
// } else {
//     animalKey = JSON.parse(animalKey);
//     console.log(animalKey);
// }

// const animalsList = document.querySelector('select');
// animalsList.style.backgroundColor = 'lightgray';
// animalsList.style.color = 'black';
// animalsList.style.border = '1px solid white';

// const animalsSvoris = document.querySelector('#svoris');
// animalsSvoris.style.backgroundColor = 'lightgray';
// animalsSvoris.style.border = '1px solid white ';
// animalsSvoris.style.width = '60px';
// animalsSvoris.style.color = 'black';

// const pridetiButton = document.querySelector('#pridetiButton');

// animalsList.addEventListener('change', (_) => {
//     pasirinktas = animalsList.value;
// });

// pridetiButton.addEventListener('click', (_) => {
//     if ('' != pasirinktas && animalsSvoris.value > 0) {
//         animalKey.push(`${pasirinktas} ${animalsSvoris.value} kg`);
//         const animalValue = JSON.stringify(animalKey);
//         localStorage.setItem('gyvuliai', animalValue);
//     }

//     renderAnimalList();
// });

// renderAnimalList();

/***/ },

/***/ "./src/style.scss"
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/public/app": 0,
/******/ 			"public/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcrudobj"] = self["webpackChunkcrudobj"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["public/style"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["public/style"], () => (__webpack_require__("./src/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;