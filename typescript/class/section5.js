var WaterPurifier = /** @class */ (function () {
    function WaterPurifier(waterAmount) {
        this.waterAmount = waterAmount;
    }
    WaterPurifier.prototype.wash = function () {
        if (this.waterAmount > 0) {
            console.log('정수기 동작 성공');
        }
    };
    return WaterPurifier;
}());
var purifier = new WaterPurifier(50);
console.log(purifier.waterAmount);
purifier.wash();
