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

class MyList {
  beforeRegister() {
    this.is = 'my-list';
    this.properties = {
        companies: {
          type: Object,
          notify:true
        }
      };

      this.observers = [
          'dataChanged(companies.splices)'
        ];

      this.dataChanged = function(newData, oldData) {
        console.log("newData " + JSON.stringify(newData));
      };

      this.inverseSort = function compareNumbers(a, b) {
        return b.companyID - a.companyID;
      };
  }
  ready() {  }
}

Polymer(MyList);
