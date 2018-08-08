namespace Mobile{
export class MobileDetails{
mobileId:number;
mobileName:string;
mobileCost:number;
printMobileDetail(){
    console.log(this.mobileId+","+this.mobileName+","+this.mobileCost);
}
}
}