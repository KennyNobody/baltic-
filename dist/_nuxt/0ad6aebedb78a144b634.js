(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{300:function(n,t,e){n.exports=function(){"use strict";var n,t={name:"uk",messages:{after:function(n,t){return"В полі "+n+" повинна бути дата після "+t[0]},alpha:function(n){return"Поле "+n+" може містити тільки літери"},alpha_dash:function(n){return"Поле "+n+" може містити буквено-цифрові символи, а також тире та підкреслення"},alpha_num:function(n){return"Поле "+n+" може містити тільки літери та цифри"},alpha_spaces:function(n){return"Поле "+n+" може містити тільки літери та пробіли"},before:function(n,t){return"В полі "+n+" повинна бути дата до "+t[0]},between:function(n,t){return"Поле "+n+" повинно бути між "+t[0]+" та "+t[1]},confirmed:function(n){return"Поле "+n+" не співпадає з підтвердженням"},credit_card:function(n){return"Поле "+n+" не вірне"},date_between:function(n,t){return"В полі "+n+" повинна бути дата між "+t[0]+" та "+t[1]},date_format:function(n,t){return"В полі "+n+" повинна бути дата в форматі "+t[0]},decimal:function(n,t){void 0===t&&(t=[]);var e=t[0];return void 0===e&&(e="*"),"Поле "+n+" повинно бути числовим та може містити "+("*"===e?"знакі":e+" знаків")+" після коми"},digits:function(n,t){return"Поле "+n+" повинно бути числовим та точно містити "+t[0]+" цифри"},dimensions:function(n,t){return"Поле "+n+" повинно бути "+t[0]+" пікселів на "+t[1]+" пікселів"},email:function(n){return"В полі "+n+" повинна бути адреса електронної пошти"},excluded:function(n){return"Поле "+n+" повинно мати допустиме значення"},ext:function(n){return"Поле "+n+" повинно бути дійсним файлом"},image:function(n){return"В полі "+n+" має бути зображення"},included:function(n){return"Поле "+n+" повинно бути допустимим значенням"},ip:function(n){return"Поле "+n+" повинно бути IP адресою"},length:function(n,t){var e=t[0],r=t[1];return r?"Довжина поля "+n+" повинна бути між "+e+" та "+r:"Довжина поля "+n+" повинна бути "+e},max:function(n,t){return"Поле "+n+" не може бути більше, ніж "+t[0]+" символів"},max_value:function(n,t){return"Поле "+n+" повинно бути "+t[0]+" або менше"},mimes:function(n){return"Поле "+n+" повиннно мати дійсний тип файлу"},min:function(n,t){return"Поле "+n+" має бути принаймні "+t[0]+" символів"},min_value:function(n,t){return"Поле "+n+" повинно бути "+t[0]+" або більше"},numeric:function(n){return"Поле "+n+" може містить лише цифри"},regex:function(n){return"Поле "+n+" має невірний формат"},required:function(n){return"Поле "+n+" повинно мати значення"},size:function(n,t){return"Поле "+n+" повинно бути менше "+function(n){var t=1024,e=0==(n=Number(n)*t)?0:Math.floor(Math.log(n)/Math.log(t));return 1*(n/Math.pow(t,e)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][e]}(t[0])},url:function(n){return"В полі "+n+" повиннен бути URL"}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate.Validator.localize(((n={})[t.name]=t,n)),t}()}}]);