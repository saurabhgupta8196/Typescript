///<reference path="mobile.ts"/>


namespace Mobile{
export class BasicPhone extends MobileDetails{

mobileType:string;

printMobileDetail(){
    console.log(this.mobileId+","+this.mobileName+","+this.mobileCost+","+this.mobileType);
}
}
}