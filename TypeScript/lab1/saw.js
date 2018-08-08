var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Mobile;
(function (Mobile) {
    var MobileDetails = /** @class */ (function () {
        function MobileDetails() {
        }
        MobileDetails.prototype.printMobileDetail = function () {
            console.log(this.mobileId + "," + this.mobileName + "," + this.mobileCost);
        };
        return MobileDetails;
    }());
    Mobile.MobileDetails = MobileDetails;
})(Mobile || (Mobile = {}));
///<reference path="mobile.ts"/>
var Mobile;
(function (Mobile) {
    var BasicPhone = /** @class */ (function (_super) {
        __extends(BasicPhone, _super);
        function BasicPhone() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BasicPhone.prototype.printMobileDetail = function () {
            console.log(this.mobileId + "," + this.mobileName + "," + this.mobileCost + "," + this.mobileType);
        };
        return BasicPhone;
    }(Mobile.MobileDetails));
    Mobile.BasicPhone = BasicPhone;
})(Mobile || (Mobile = {}));
///<reference path="mobile.ts"/>
var Mobile;
(function (Mobile) {
    var SmartPhone = /** @class */ (function (_super) {
        __extends(SmartPhone, _super);
        function SmartPhone() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SmartPhone.prototype.printMobileDetail = function () {
            console.log(this.mobileId + "," + this.mobileName + "," + this.mobileCost + "," + this.mobileType);
        };
        return SmartPhone;
    }(Mobile.MobileDetails));
    Mobile.SmartPhone = SmartPhone;
})(Mobile || (Mobile = {}));
///<reference path="mobile.ts"/>
///<reference path="BasicPhone.ts"/>
///<reference path="SmartPhone.ts"/>
var data = [
    {
        "mobileId": 1000,
        "mobileName": "Note 8",
        "mobileCost": 67000,
        "mobileType": "Android"
    },
    {
        "mobileId": 1001,
        "mobileName": "IPhone X",
        "mobileCost": 89000,
        "mobileType": "iOS"
    }
];
function printDetails(phone) {
    phone.printMobileDetail();
}
var bobj = new Mobile.BasicPhone();
bobj.mobileId = data[1].mobileId;
bobj.mobileName = data[1].mobileName;
bobj.mobileCost = data[1].mobileCost;
bobj.mobileType = data[1].mobileType;
printDetails(bobj);
var sobj = new Mobile.SmartPhone();
sobj.mobileId = data[0].mobileId;
sobj.mobileName = data[0].mobileName;
sobj.mobileCost = data[0].mobileCost;
sobj.mobileType = data[0].mobileType;
printDetails(sobj);
