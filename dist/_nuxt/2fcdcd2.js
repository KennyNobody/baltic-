(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{168:function(n,e,t){n.exports=function(){"use strict";var n,e={name:"cs",messages:{_default:function(n){return"Pole "+n+" není vyplněno správně"},after:function(n,e){var t=e[0];return n+" musí být později než "+(e[1]?"nebo se rovnat ":"")+t},alpha:function(n){return"Pole "+n+" může obsahovat pouze písmena"},alpha_dash:function(n){return"Pole "+n+" může obsahovat pouze alfanumerické znaky, pomlčky nebo podtržítka"},alpha_num:function(n){return"Pole "+n+" může obsahovat pouze alfanumerické znaky"},alpha_spaces:function(n){return"Pole "+n+" může obsahovat pouze alfanumerické znaky a mezery"},before:function(n,e){var t=e[0];return n+" musí být dříve než "+(e[1]?"nebo se rovnat ":"")+t},between:function(n,e){return"Pole "+n+" musí být mezi "+e[0]+" a "+e[1]},confirmed:function(n){return"Kontrola pole "+n+" se neshoduje"},credit_card:function(n){return"Pole "+n+" není vyplněno správně"},date_between:function(n,e){return"Pole "+n+" musí být mezi "+e[0]+" a "+e[1]},date_format:function(n,e){return"Pole "+n+" musí být ve formátu "+e[0]},decimal:function(n,e){void 0===e&&(e=[]);var t=e[0];return void 0===t&&(t="*"),"Pole "+n+" musí být číslo a může obsahovat"+(t&&"*"!==t?" "+t:"")+" desetinných míst"},digits:function(n,e){return"Pole "+n+" musí být číslo a musí obshovat přesně "+e[0]+" číslic"},dimensions:function(n,e){return n+" musí mít "+e[0]+" pixelů na "+e[1]+" pixelů"},email:function(n){return"Pole "+n+" musí být validní email"},excluded:function(n){return n+" musí být správná hodnota"},ext:function(n){return n+" musí být validní soubor"},image:function(n){return n+" musí být obrázek"},included:function(n){return n+" musí být správná hodnota"},ip:function(n){return n+" musí být ip addresa"},max:function(n,e){return n+" nesmí být delší než "+e[0]+" znaků"},max_value:function(n,e){return"Pole "+n+" musí být "+e[0]+", nebo mensí"},mimes:function(n){return"Pole "+n+" musí být správný typ souboru"},min:function(n,e){return"Pole "+n+" musí obsahovat alespoň "+e[0]+" znaků"},min_value:function(n,e){return"Pole "+n+" musí být "+e[0]+", nebo více"},numeric:function(n){return"Pole "+n+" může obsahovat pouze číslice"},regex:function(n){return"Pole "+n+" není vyplněno správně"},required:function(n){return"Pole "+n+" je povinné"},size:function(n,e){return n+" musí být menší než "+function(n){var e=1024,t=0==(n=Number(n)*e)?0:Math.floor(Math.log(n)/Math.log(e));return 1*(n/Math.pow(e,t)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][t]}(e[0])},url:function(n){return n+" není platná URL adresa"}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate.Validator.localize(((n={})[e.name]=e,n)),e}()}}]);