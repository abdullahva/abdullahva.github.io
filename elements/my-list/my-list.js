'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

/* global Polymer */

var MyList = function () {
  function MyList() {
    _classCallCheck(this, MyList);
  }

  _createClass(MyList, [{
    key: 'beforeRegister',
    value: function beforeRegister() {
      this.is = 'my-list';
      this.properties = {
        companies: {
          type: Object,
          notify: true
        }
      };

      this.observers = ['dataChanged(companies.splices)'];

      this.dataChanged = function (newData, oldData) {
        console.log("newData " + JSON.stringify(newData));
      };

      this.inverseSort = function compareNumbers(a, b) {
        return b.companyID - a.companyID;
      };
    }
  }, {
    key: 'ready',
    value: function ready() {}
  }]);

  return MyList;
}();

Polymer(MyList);
//# sourceMappingURL=my-list.js.map
