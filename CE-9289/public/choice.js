'use strict';(function(){(function(){var cmpScriptElement=document.createElement('script');var firstScript=document.getElementsByTagName('script')[0];cmpScriptElement.async=true;cmpScriptElement.type='text/javascript';var cmpVersion='https://quantcast.mgr.consensu.org/tcfv2/cmp2.js?referer=primochef.it';cmpScriptElement.src=cmpVersion;firstScript.parentNode.insertBefore(cmpScriptElement,firstScript);})();(function(){var css=""
+" .qc-cmp-button { "
+"   background-color: #ffa24f !important; "
+"   border-color: #ffa24f !important; "
+" } "
+" .qc-cmp-button:hover { "
+"   border-color: #ffa24f !important; "
+" } "
+" .qc-cmp-alt-action, "
+" .qc-cmp-link { "
+"   color: #ffa24f !important; "
+" } "
+" .qc-cmp-button.qc-cmp-secondary-button:hover { "
+"   background-color: #ffa24f !important; "
+"   border-color: #ffa24f !important; "
+" } "
+" .qc-cmp-button.qc-cmp-secondary-button:hover { "
+"   color: #ffffff !important; "
+" } "
+" .qc-cmp-button.qc-cmp-secondary-button { "
+"   color: #ffa24f !important; "
+" } "
+" .qc-cmp-button.qc-cmp-secondary-button { "
+"   background-color: #eee !important; "
+"   border-color: transparent !important; "
+" } "
+" .qc-cmp-ui a, "
+" .qc-cmp-ui .qc-cmp-alt-action { "
+"   color: #ffa24f !important; "
+" } "
+" .qc-cmp-small-toggle.qc-cmp-toggle-on, "
+" .qc-cmp-toggle.qc-cmp-toggle-on { "
+"   background-color: #ffa24f!important; "
+"   border-color: #ffa24f!important; "
+" } "
+""
+"";var stylesElement=document.createElement('style');var re=new RegExp('&quote;','g');css=css.replace(re,'"');stylesElement.type='text/css';if(stylesElement.styleSheet){stylesElement.styleSheet.cssText=css;}else{stylesElement.appendChild(document.createTextNode(css));}
var head=document.head||document.getElementsByTagName('head')[0];head.appendChild(stylesElement);})();var autoDetectedLanguage='en';function splitLang(lang){return lang.length>2?lang.split('-')[0]:lang;};function isSupported(lang){var langs=['en','fr','de','it','es','da','nl','el','hu','pt','ro','fi','pl','sk','sv','no','ru','bg','ca','cs','et','hr','lt','lv','mt','sl','tr','zh'];return langs.indexOf(lang)===-1?false:true;};if(isSupported(splitLang(document.documentElement.lang))){autoDetectedLanguage=splitLang(document.documentElement.lang);}else if(isSupported(splitLang(navigator.language))){autoDetectedLanguage=splitLang(navigator.language);};var choiceMilliSeconds=(new Date).getTime();window.__tcfapi('init',2,function(){},{'premiumProperties':{},'premiumUiLabels':{},'coreUiLabels':{'persistentConsentLinkLabel':'Privacy',},'theme':{'uxPrimaryButtonColor':'#ffa24f','uxSecondaryButtonTextColor':'#ffa24f','uxToogleActiveColor':'#ffa24f','uxLinkColor':'#ffa24f',},'coreConfig':{'quantcastAccountId':'zempfe9XwTUGE','privacyMode':["GDPR"],'hashCode':'ffBivcsWhHWS9Kwsh/h+bQ','publisherCountryCode':'IT','publisherName':'Primochef','vendorPurposeIds':[2,3,4,5,6,7,8,9,10,1],'vendorFeaturesIds':[1,3,2],'vendorPurposeLegitimateInterestIds':[2,3,4,5,6,7,8,9,10],'vendorSpecialFeaturesIds':[1,2],'vendorSpecialPurposesIds':[1,2],'googleEnabled':true,'consentScope':'service','thirdPartyStorageType':'iframe','consentIdentityEnabled':false,'initScreenBodyTextOption':1,'consentOnSafari':false,'lang_':'it','displayUi':'always','defaultToggleValue':'off','initScreenRejectButtonShowing':false,'publisherConsentRestrictionIds':[],'publisherLIRestrictionIds':[],'softOptInEnabled':false,'showSummaryView':true,'persistentConsentLinkLocation':3,'displayPersistentConsentLink':true,'uiLayout':'banner','publisherLogo':'https://assets.deltapictures.it/images/deltapictures/logodp.png','publisherPurposeIds':[1,2,3,4,5,6,7,8,9,10],'publisherPurposeLegitimateInterestIds':[],'publisherSpecialPurposesIds':[],'publisherFeaturesIds':[],'publisherSpecialFeaturesIds':[1],'stacks':[],'vendorListUpdateFreq':30,},'nonIabVendorsInfo':{}});})();