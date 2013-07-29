// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

/* globals */

var pickup;
var line;

$(document).ready(function() {
	pickup = randomize(noun);
	console.log(pickup);
	updatePickupLine(pickup);

	/* handlers */

	$("#generate, span#noun").bind('click', function() {
		pickup = randomize(noun);
		updatePickupLine(pickup);
	});

	$("#twitter").attr('data-text', line);
});

function randomize(n) {
	return n[Math.floor(Math.random() * noun.length)];
}

function updatePickupLine(p) {

	var l = $("h2").text().split("?");
	line = l[0] + p + "?";
	console.log(line);

	$("#noun").text(p);
}