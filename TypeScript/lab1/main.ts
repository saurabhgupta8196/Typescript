///<reference path="mobile.ts"/>
///<reference path="BasicPhone.ts"/>
///<reference path="SmartPhone.ts"/>

var data = [
    {
        "mobileId":1000,
        "mobileName":"Note 8",
        "mobileCost":67000,
        "mobileType":"Android"
    },
     {
        "mobileId":1001,
        "mobileName":"IPhone X",
        "mobileCost":89000,
        "mobileType":"iOS"
    }
]

function printDetails(phone){
     phone.printMobileDetail();
}

var bobj=new Mobile.BasicPhone();
bobj.mobileId=data[1].mobileId;
bobj.mobileName=data[1].mobileName;
bobj.mobileCost=data[1].mobileCost;
bobj.mobileType=data[1].mobileType;
printDetails(bobj);

var sobj=new Mobile.SmartPhone();
sobj.mobileId=data[0].mobileId;
sobj.mobileName=data[0].mobileName;
sobj.mobileCost=data[0].mobileCost;
sobj.mobileType=data[0].mobileType;
printDetails(sobj);