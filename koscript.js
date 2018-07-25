///<reference path="./node_modules/knockout/build/output/knockout-latest.debug.js"/>
debugger
var vm = {
    fname: ko.observable('David'),
    lname: ko.observable('Shams'),
    // name: ko.computed(fname + " " + lname)
}
ko.applyBindings(vm);