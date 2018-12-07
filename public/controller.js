	'use strict';
var app = angular.module('mainApp', [
	'pascalprecht.translate'
	//,'tmh.dynamicLocale'
]);

app.config(function($translateProvider) {
	// $translateProvider.useStaticFilesLoader({
	// 	prefix: 'lang-',
	// 	suffix: '.json'
	// })
	// $translateProvider.preferredLanguage('en_US');
	// //$translateProvider.preferredLanguage(LOCALES.preferredLocale);
	// $translateProvider.useLocalStorage();
	
	$translateProvider.translations('en_US', {
		NAME: 'My Name is Nagendra',
		MESSAGE: 'This is my i18n programming.'	
	  });	  
	  $translateProvider.translations('zh_CN', {
		NAME: '我的名字是Nagendra',
		MESSAGE: '这是我的i18n编程.'		
	  });
	  $translateProvider.preferredLanguage('en_US');
});
app.controller('myCtrl', function ($scope, $translate) {
	$scope.changeLanguage = function (key) {
	  $translate.use(key);
	};
  });







