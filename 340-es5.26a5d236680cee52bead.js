!function(){var e;function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}(self.webpackChunkvamp_notebook=self.webpackChunkvamp_notebook||[]).push([[340],{6340:function(a,o,i){"use strict";i.r(o),i.d(o,{UsersModule:function(){return J}});var r=i(8583),c=i(2630),u=i(7716),l=i(3738),f=i(3679),p=i(1095),s=i(8295),d=i(6627),m=i(9983);function g(e,t){if(1&e){var n=u.EpF();u.TgZ(0,"div",2),u.TgZ(1,"label"),u._uU(2),u.qZA(),u.TgZ(3,"span"),u._uU(4),u.qZA(),u.TgZ(5,"button",3),u.TgZ(6,"mat-icon",4),u.NdJ("click",function(){return u.CHM(n),u.oxw().editMode=!0}),u._uU(7,"edit"),u.qZA(),u.qZA(),u.qZA()}if(2&e){var a=u.oxw();u.xp6(2),u.hij(" ",a.text," "),u.xp6(2),u.hij(" ",a.value," ")}}function v(e,t){if(1&e&&u._UZ(0,"textarea",11),2&e){var n=u.oxw(2);u.Q6J("type",n.type)("placeholder",n.text)("value",n.value)("formControlName",n.name)("readonly",!n.editMode)}}function Z(e,t){if(1&e&&u._UZ(0,"input",11),2&e){var n=u.oxw(2);u.Q6J("type",n.type)("placeholder",n.text)("value",n.value)("formControlName",n.name)("readonly",!n.editMode)}}function h(e,t){if(1&e&&(u.TgZ(0,"div",12),u._uU(1),u.qZA()),2&e){var n=u.oxw(2);u.xp6(1),u.hij(" ",n.editWarning," ")}}function b(e,t){if(1&e){var n=u.EpF();u.TgZ(0,"form",5),u.TgZ(1,"mat-form-field"),u.ynx(2,6),u.YNc(3,v,1,5,"textarea",7),u.YNc(4,Z,1,5,"input",8),u.BQk(),u.TgZ(5,"button",9),u.TgZ(6,"mat-icon",4),u.NdJ("click",function(){return u.CHM(n),u.oxw().saveChanges()}),u._uU(7,"save"),u.qZA(),u.qZA(),u.TgZ(8,"button",3),u.TgZ(9,"mat-icon",4),u.NdJ("click",function(){return u.CHM(n),u.oxw().cancelChanges()}),u._uU(10,"cancel"),u.qZA(),u.qZA(),u.qZA(),u.YNc(11,h,2,1,"div",10),u.qZA()}if(2&e){var a=u.oxw();u.Q6J("formGroup",a.formGroup),u.xp6(2),u.Q6J("ngSwitch",a.type),u.xp6(1),u.Q6J("ngSwitchCase","textarea"),u.xp6(8),u.Q6J("ngIf",a.editWarning)}}var y,x,w=function(){var e=function(){function e(){t(this,e),this.valueChanged=new u.vpe}var a,o,i;return a=e,(o=[{key:"ngOnChanges",value:function(e){e.name&&this.createFormGroup(e.name.currentValue,e.value.currentValue)}},{key:"editField",value:function(){this.editMode=!0}},{key:"saveChanges",value:function(){this.editMode=!1,this.valueChanged.emit(this.formGroup.value)}},{key:"cancelChanges",value:function(){this.editMode=!1,this.createFormGroup(this.name,this.value)}},{key:"createFormGroup",value:function(e,t){var n,a,o;this.formGroup=new f.cw((n={},a=e,o=new f.NI(t),a in n?Object.defineProperty(n,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[a]=o,n))}}])&&n(a.prototype,o),i&&n(a,i),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u.Xpm({type:e,selectors:[["app-inline-input-editor"]],inputs:{editWarning:"editWarning",selectionOptionList:"selectionOptionList",type:"type",text:"text",name:"name",value:"value"},outputs:{valueChanged:"valueChanged"},features:[u.TTD],decls:2,vars:2,consts:[["class","display-value",4,"ngIf"],[3,"formGroup",4,"ngIf"],[1,"display-value"],["mat-icon-button","","matSuffix",""],[3,"click"],[3,"formGroup"],[3,"ngSwitch"],["matInput","",3,"type","placeholder","value","formControlName","readonly",4,"ngSwitchCase"],["matInput","",3,"type","placeholder","value","formControlName","readonly",4,"ngSwitchDefault"],["mat-icon-button","","matSuffix","","color","accent"],["class","edit-warning-box alert-box",4,"ngIf"],["matInput","",3,"type","placeholder","value","formControlName","readonly"],[1,"edit-warning-box","alert-box"]],template:function(e,t){1&e&&(u.YNc(0,g,8,2,"div",0),u.YNc(1,b,12,4,"form",1)),2&e&&(u.Q6J("ngIf",!t.editMode),u.xp6(1),u.Q6J("ngIf",t.editMode))},directives:[r.O5,p.lW,s.R9,d.Hw,f._Y,f.JL,f.sg,s.KE,r.RF,r.n9,r.ED,m.Nt,f.Fj,f.JJ,f.u],styles:[""],changeDetection:0}),e}(),T=i(5939),A=[{path:"",component:(y=function e(){t(this,e)},y.\u0275fac=function(e){return new(e||y)},y.\u0275cmp=u.Xpm({type:y,selectors:[["ng-component"]],decls:17,vars:0,consts:function(){var t,n;return[[1,"content-block"],$localize(e||(t=[":@@user-profile\u241f994363f08f9fbfa3b3994ff7b35c6904fdff18d8\u241f4915431133669985304:Profile"],n||(n=t.slice(0)),e=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})))),["text","Username","name","username","value","nick"],["label","Defaults"],[1,"tab-block"],["label","Two"]]},template:function(e,t){1&e&&(u.TgZ(0,"div",0),u.TgZ(1,"mat-card"),u.TgZ(2,"mat-card-header"),u.TgZ(3,"mat-card-title"),u.SDv(4,1),u.qZA(),u.qZA(),u.TgZ(5,"mat-card-content"),u._UZ(6,"app-inline-input-editor",2),u.qZA(),u.qZA(),u.TgZ(7,"mat-tab-group"),u.TgZ(8,"mat-tab",3),u.TgZ(9,"div",4),u.TgZ(10,"span"),u._uU(11,"todo"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(12,"mat-tab",5),u.TgZ(13,"h1"),u._uU(14,"Some more tab content"),u.qZA(),u.TgZ(15,"p"),u._uU(16,"..."),u.qZA(),u.qZA(),u.qZA(),u.qZA())},directives:[l.a8,l.dk,l.n5,l.dn,w,T.SP,T.uX],styles:[".tab-block[_ngcontent-%COMP%]{padding-top:16px;margin:1px}"],changeDetection:0}),y)}],q=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[c.Bz.forChild(A)],c.Bz]}),e}(),C=i(9903),k=i(4466),J=((x=function e(){t(this,e)}).\u0275fac=function(e){return new(e||x)},x.\u0275mod=u.oAB({type:x}),x.\u0275inj=u.cJS({imports:[[r.ez,q,C.V,k.m]]}),x)}}])}();