$(function(){
    $('button').click(function(){
        vm.fname('John');
        vm.lname('Doe');
    });
    vm.fname.subscribe(function(){
        console.log('Name changed to: ' + vm.fname());
    });
})